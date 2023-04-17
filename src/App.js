import logo from './logo.svg';
import './App.css';
import './components/ResourceTable';
import Resource from './model/Craft/Resource.js';
import Recipe from './model/Craft/Recipe.js';
import CraftingCalcTreeNode from './model/Craft/CraftingCalcTreeNode.js';
import { CraftCalcSheet } from './components/CraftSheet';

function App() {
  let x = new Resource("x", {});
  let y = new Resource("y", {});
  let z = new Resource("z", {});
  let m = new Resource("m", {});
  let n = new Resource("n", {});
  let recipe = new Recipe(x, [{resource: y, count:2}, {resource: z, count:3}], {});
  let recipe2 = new Recipe(z, [{resource: m, count:1}, {resource: n, count:4}], {});
  let root = new CraftingCalcTreeNode(x, 3);
  root.expandRecipe(recipe);
  root.child[1].expandRecipe(recipe2);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <CraftCalcSheet rootNode = {root}></CraftCalcSheet>
        </header>
    </div>
  );
}

export default App;
