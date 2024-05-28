import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment({ content }) {
    return (
        <div className={styles.comment}>
            <img  src="https://avatars.githubusercontent.com/u/57499979?v=4"/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Wagner Rangel</strong>
                            <time title='12 de Dezembro às 08:13' dateTime='2023-12-12  08:13:00'> Cerca de 1h atrás</time>
                        </div>

                        <button title='Deletar comentário'>
                            <Trash size={24} />
                        </button>
                    </header>

                    <p> {content} </p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                    Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>


        </div>
    )
}