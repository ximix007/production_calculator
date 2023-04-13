import "./Resource"
import "./Recipe"

class CraftingCalcTreeNode{
    constructor(resource, count){
        this.resource = resource;
        this.count = count;
        this.child = [];
    }

    expandRecipe(recipe){
        if(recipe.result != this.resource){
            throw new Error("Recipe not suitable");
        }
        recipe.required.forEach(element => {
            this.child.push(new CraftingCalcTreeNode(element.resource, element.count * this.count));
        });
    }
}

export default CraftingCalcTreeNode;