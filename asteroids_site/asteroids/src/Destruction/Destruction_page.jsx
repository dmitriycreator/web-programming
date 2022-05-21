import { useContext } from 'react';
import { AsteroidsContext } from '../App';
import { AsteroidCardList } from '../Ateroid_list/List';
import { DestructionPageHeader } from './Header/DestructionPageHeader';
import styles from './Destruction_page.css';
import { Navbar } from '../Navbar/Navbar';

export const DestructionPage = () => {
  const { state, dispatch } = useContext(AsteroidsContext);

  return (
    <div className={styles.destructionPage}>
      <DestructionPageHeader />
      <div className={styles.line} />
      <Navbar showMode={state.showMode} distanceMode={state.distanceMode} dispatch={dispatch} />
      <AsteroidCardList list={state.destructionList} />
    </div>
  );
};