import logo from './logo.svg';
import './App.css';
import './components/ResourceTable';
import Resource from './model/Craft/Resource.js';
import Recipe from './model/Craft/Recipe.js';
import CraftingCalcTreeNode from './model/Craft/CraftingCalcTreeNode.js';


function App() {
  let x = new Resource("x", {});
  let y = new Resource("y", {});
  let z = new Resource("z", {});
  let recipe = new Recipe(x, [{resource: y, count:2}, {resource: z, count:3}], {});
  let root = new CraftingCalcTreeNode(x, 3);
  //root.expandRecipe(recipe);
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
        </header>
    </div>
  );
}

export default App;
