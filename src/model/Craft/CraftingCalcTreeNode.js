import "./Resource"
import "./Recipe"
import Resource from "./Resource";

class CraftingCalcTreeNode{
    constructor(resource, count){
        this.resource = resource;
        this.count = count;
        this.child = [];
    }

    clone(){
        return new CraftingCalcTreeNode(this.resource, this.child);
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

    treeHeight(){
        const recurcion = (x, node) => {
            if(node.child.length == 0){
                return x + 1;
            }
            else{
                return node.child.map(y => recurcion(x+1, y)).reduce((acum, cur) => {return acum < cur ? cur : acum}, [])
            }
        }
        return recurcion(0, this);
    }

    filledNullNodes(){
        let nullResource = new Resource('   ', {});
        let nullnode = new CraftingCalcTreeNode(nullResource, "   ")
        let treeHeight = this.treeHeight();
        const recurcion = (x, node) => {
            if(node.child.length === 0 && x < treeHeight-1){
                node.child = [nullnode.clone()];
            }
            node.child.forEach(y => {recurcion(x+1, y)})
        }
        recurcion(0, this);
        return this;
    }
    
    expandRecipe(recipe){
        if(recipe.result != this.resource){
            throw new Error("Recipe not suitable");
        }
        this.child = [];
        recipe.required.forEach(element => {
            this.child.push(new CraftingCalcTreeNode(element.resource, element.count * this.count));
        });
    }
}

export default CraftingCalcTreeNode;