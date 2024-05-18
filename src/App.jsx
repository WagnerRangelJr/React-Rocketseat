import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';


export function App() {

  return (
      <div>
        <Header/>
        <div className={styles.wrapper}>
          <Sidebar/>
          <main>
          <Post 
            author="Wagner Rangel" 
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          />
          <Post 
            author="Chat GPt" 
            content="Reposta legal"
          />
          </main>
        </div>
      </div>

    )
}


