import './App.css';
import Resource from './model/Craft/Resource.js';
import Recipe from './model/Craft/Recipe.js';
import CraftingCalcTreeNode from './model/Craft/CraftingCalcTreeNode.js';
import { CraftSheet } from './components/CraftSheet/CraftSheet';
import { ResourceInput } from './components/ResourseInput/ResourceInput'; 

function App() {
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
  //root.child[0].expandRecipe(recipe3);
  root.child[1].expandRecipe(recipe2);
  
  return (
    <div className="App">
      <header className="App-header">
        <CraftSheet rootNode = {root}></CraftSheet>
        <ResourceInput UpdateResources = {(x) => console.log(x)}></ResourceInput>
        </header>
    </div>
  );
}

export default App;
