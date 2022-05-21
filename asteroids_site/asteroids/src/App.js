import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {Switch} from "react-router-dom";
import { Home_page } from "./Home_page/Home_page.jsx";
//import './App.css';
function App() {
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
                    <Home_page />
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
