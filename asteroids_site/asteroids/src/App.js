import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {Switch} from "react-router-dom";
import { Home } from "./Home_page/Home_page.jsx";
//import './App.css';
function App() {
    let promise = new Promise(function(resolve, reject){
        setTimeout(()=>resolve("done"), 1000)
    })
  return (
    <Router>
        <div>
            <header>
            <Link to={"/Home"}>Главная</Link>
            <Link to={"/Destroy"}>Уничтожение</Link>
            </header>

        <main>
            <Switch>
                <Route path={"/Home"}>
                    <Home />
                </Route>
                <Route path={"/Destroy"}>
                    <label>destroy</label>
                </Route>
            </Switch>
        </main>
        </div>
    </Router>
  );
}

export default App;
