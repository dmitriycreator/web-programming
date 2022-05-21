import { useContext } from 'react';
import styles from './Home_page.css';
import { AsteroidCardList } from '../Ateroid_list/List';
import { Navbar } from '../Navbar/Navbar';
import { AsteroidsContext } from '../App';
import { HomeHeader } from './Header/Header';

export const Home = () => {
  const { state, dispatch } = useContext(AsteroidsContext);

  return (
    <div className={styles.home}>
      <HomeHeader />
      <div className={styles.line} />
      <Navbar showMode={state.showMode} distanceMode={state.distanceMode} dispatch={dispatch} />
      <AsteroidCardList list={state.asteroidsList} />
    </div>
  );
};
