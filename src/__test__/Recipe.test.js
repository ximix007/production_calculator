import '@testing-library/react';
import Resource from '../model/Craft/Resource.js';
import Recipe from '../model/Craft/Recipe.js';

test('recipe work', () => {
    let x = new Resource("x", {});
    let y = new Resource("y", {});
    let z = new Resource("z", {});
    let recipe = new Recipe(x, [{resource: y, count:2}, {resource: z, count:3}], {});
    let result = recipe.RequiredResource(2);
    expect(result).toStrictEqual([{resource: y, count:4}, {resource: z, count:6}]);
})