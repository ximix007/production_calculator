import '@testing-library/react';
import Resource from '../model/Craft/Resource.js';
import Recipe from '../model/Craft/Recipe.js';
import CraftingCalcTreeNode from '../model/Craft/CraftingCalcTreeNode.js';

test('recipe work', () => {
    let x = new Resource("x", {});
    let y = new Resource("y", {});
    let z = new Resource("z", {});
    let recipe = new Recipe(x, [{resource: y, count:2}, {resource: z, count:3}], {});
    let result = recipe.RequiredResource(2);
    expect(result).toStrictEqual([{resource: y, count:4}, {resource: z, count:6}]);
})

test('tree work', () =>{
    let x = new Resource("x", {});
    let y = new Resource("y", {});
    let z = new Resource("z", {});
    let recipe = new Recipe(x, [{resource: y, count:2}, {resource: z, count:3}], {});
    let root = new CraftingCalcTreeNode(x, 3);
    root.expandRecipe(recipe);
    expect(root.child).toStrictEqual([new CraftingCalcTreeNode(y, 6), new CraftingCalcTreeNode(z, 9)]);
})

test('tree error', () =>{
    let x = new Resource("x", {});
    let y = new Resource("y", {});
    let z = new Resource("z", {});
    let t = new Resource("t", {});
    let recipe = new Recipe(t, [{resource: y, count:2}, {resource: z, count:3}], {});
    let root = new CraftingCalcTreeNode(x, 3);
    try{
        root.expandRecipe(recipe);
    }
    catch(e){
        expect(e.message).toBe("Recipe not suitable");
    }
})

test('maxChildOnLayer', () => {
    let x = new Resource("x", {});
    let y = new Resource("y", {});
    let z = new Resource("z", {});
    let m = new Resource("m", {});
    let n = new Resource("n", {});
    let i = new Resource("i", {});
    let j = new Resource("j", {});
    let recipe = new Recipe(x, [{resource: y, count:2}, {resource: z, count:3}], {});
    let recipe2 = new Recipe(z, [{resource: m, count:1}, {resource: n, count:4}], {});
    let recipe3 = new Recipe(y, [{resource: i, count:2}, {resource: j, count:5}], {});
    let root = new CraftingCalcTreeNode(x, 3);
    root.expandRecipe(recipe);
    root.child[0].expandRecipe(recipe3);
    root.child[1].expandRecipe(recipe2);
    expect(root.maxChildOnLayer()).toBe(4);
})

test('not dublicate crafting resource', () => {
    let x = new Resource("x", {});
    let y = new Resource("y", {});
    let z = new Resource("z", {});
    let recipe = new Recipe(x, [{resource: y, count:2}, {resource: z, count:3}], {});
    let root = new CraftingCalcTreeNode(x, 3);
    root.expandRecipe(recipe);
    root.expandRecipe(recipe);
    expect(root.child).toStrictEqual([new CraftingCalcTreeNode(y, 6), new CraftingCalcTreeNode(z, 9)]);
})