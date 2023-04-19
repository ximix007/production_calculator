import "./Resource"
import "./Recipe"

class CraftingCalcTreeNode{
    constructor(resource, count){
        this.resource = resource;
        this.count = count;
        this.child = [];
    }

    maxChildOnLayer(){
        const recurcion = (nodes, x) => {
            let layer = nodes.reduce((acum, cur) => acum.concat(cur.child), []);
            let layerWidth = layer.length;
            if(layerWidth === 0){
                return x;
            }
            else{
                let nextLayerWidth = recurcion(layer, layer.length)
                return layerWidth > nextLayerWidth ? layerWidth : nextLayerWidth;
            }
        }
        return recurcion([this], 0)
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