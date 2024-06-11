import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';



//author: { avatar_url: "", name: "", role: "",}
// publisedAt: Date
// content: String

const posts = [
  {
    id: 1,
    author: { 
      avatarUrl: 'https://avatars.githubusercontent.com/u/57499979?v=4',
      name: "Wagner Rangel",
      role: "Desenvolvedor Junior"
    },
    content: [
      {type: 'paragraph', content: 'Fala galera '},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no portifolio, é um projeto qeu fiz no ignite '},
      {type: 'link', content: 'google.com '},
      {type: 'paragraph', content: '#sucesso '},  
    ],
    publishedAt: new Date('2024-05-27 10:00:00')
  },
  {
    id: 2,
    author: { 
      avatarUrl: 'https://avatars.githubusercontent.com/u/6643122?v=4',
      name: " Mike Brito",
      role: "Desenvolvedor Junior"
    },
    content: [
      {type: 'paragraph', content: 'Fala galera '},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no portifolio, é um projeto qeu fiz no ignite '},
      {type: 'link', content: 'globo.com '},
      {type: 'paragraph', content: '#sucesso '},  
    ],
    publishedAt: new Date('2024-05-15 10:00:00'),
  },
  {
    id: 3,
    author: { 
      avatarUrl: 'https://avatars.githubusercontent.com/u/2254731?v=4',
      name: "Diego Fernandes",
      role: "Desenvolvedor Junior"
    },
    content: [
      {type: 'paragraph', content: 'Fala galera '},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no portifolio, é um projeto qeu fiz no ignite '},
      {type: 'link', content: 'https://github.com/ '},
      {type: 'paragraph', content: '#sucesso '},  
    ],
    publishedAt: new Date('2024-04-23 22:00:00'),
  }
];


export function App() {

  return (
      <div>
        <Header/>
        <div className={styles.wrapper}>
          <Sidebar/>
          <main>
            {posts.map(post => {
              return (
                <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
                />
              )
            })}
          </main>
        </div>
      </div>

    )
}


