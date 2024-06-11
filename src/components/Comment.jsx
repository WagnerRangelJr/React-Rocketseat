import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { useState } from 'react';

export function Comment({ content,  onDeleteComment }) {
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteCommment() {
        onDeleteComment(content);
    }

    //sempre que for atualizar uma informação que, e essa informação depende do valor
    //que ela tinha anteriormente, ou seja, depende dela mesma é sempre bom fazer a atualização pelo padrao abaixo
    function handleLikeComment() {
        setLikeCount((state) => {
            return state +1
        });
    }

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

                        <button onClick={handleDeleteCommment} title='Deletar comentário'>
                            <Trash size={24} />
                        </button>
                    </header>

                    <p> {content} </p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                            Aplaudir <span>{ likeCount}</span>
                    </button>
                </footer>
            </div>


        </div>
    )
}