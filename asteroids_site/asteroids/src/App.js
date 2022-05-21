import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {Switch} from "react-router-dom";
import { Home } from "./Home_page/Home_page.jsx";
import { ASTEROID_DISTANCE_MODE_KM, ASTEROID_SHOW_MODE_ALL } from "./Constants/Constants_list"
import { reducer } from './Reducer';
import {createContext, useReducer, useEffect} from 'react'
import { DestructionPage } from './Destruction/Destruction_page';
import { ConvertAPIDataToList, GetAPIUrl } from './Home_page/Parser';
//import './App.css';

export const AsteroidsContext = createContext(null)

function App() {
    const [state, dispatch] = useReducer(reducer, {
        asteroidsList:[],
        destructionList:[],
        distanceMode: ASTEROID_DISTANCE_MODE_KM,
        showMode: ASTEROID_SHOW_MODE_ALL
    })

    useEffect(()=>{
        fetch(GetAPIUrl())
            .then((response)=>response.json()
                .then((resData)=>{
                    dispatch({payload:ConvertAPIDataToList(resData), type:"UPDATE_ASTEROIDS_LIST"})
                })).catch((error)=>console.log(error))
    }, [])

  return (
    <Router>
        <div>
            <AsteroidsContext.Provider value={{state:state, dispatch:dispatch}}>

            <Switch>
                <Route path={"/"}>
                    <Home />
                </Route>
                <Route path={"/Destroy"}>
                    <DestructionPage />
                </Route>
            </Switch>
            </AsteroidsContext.Provider>
        </div>

    </Router>
  );
}

export default App;
