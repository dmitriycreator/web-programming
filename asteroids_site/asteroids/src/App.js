import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Home } from './Home_page/Home_page.jsx';
import { ASTEROID_DISTANCE_MODE_KM, ASTEROID_SHOW_MODE_ALL } from './Constants/Constants_list';
import { reducer } from './Reducer';
import React, { createContext, useReducer, useEffect } from 'react';
import { DestructionPage } from './Destruction/Destruction_page';
import { convertAPIDataToList, getAPIUrl } from './Home_page/Parser';
// import './App.css';

export const AsteroidsContext = createContext(null);

/**
 * class App
 */
class App extends React.Component {
  /**
   *
   * @return {JSX.Element}
   */
  render() {
    const [state, dispatch] = useReducer(reducer, {
      asteroidsList: [],
      destructionList: [],
      distanceMode: ASTEROID_DISTANCE_MODE_KM,
      showMode: ASTEROID_SHOW_MODE_ALL
    });

    useEffect(() => {
      fetch(getAPIUrl())
        .then((response) =>
          response.json().then((resData) => {
            dispatch({ payload: convertAPIDataToList(resData), type: 'UPDATE_ASTEROIDS_LIST' });
          })
        )
        .catch((error) => console.log(error));
    }, []);

    return (
      <Router>
        <div>
          <AsteroidsContext.Provider value={{ state: state, dispatch: dispatch }}>
            <Switch>
              <Route path={'/'}>
                <Home />
              </Route>
              <Route path={'/Destroy'}>
                <DestructionPage />
              </Route>
            </Switch>
          </AsteroidsContext.Provider>
        </div>
      </Router>
    );
  }
}

export default App;
