import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post() {
    return (
    
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/57499979?v=4"/>
                    <div className={styles.authorInfo}>
                        <strong>Wagner Rangel</strong>
                        <span>Desenvolvedor Full Stack Junior</span>
                    </div>
                </div>

                <time title='12 de Dezembro às 08:13' dateTime='2023-12-12  08:13:00'> Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>

                <p>Doloremque nemo corporis eum quae temporibus iste neque ad laborum accusamus deserunt provident vel. </p>

                <p> <a href=""> Link para o site </a></p>
                <p> <a href=""> Dolores vero animi a architecto molestiae ab! Eveniet </a> </p>


            </div>

            <form className={styles.commentForm}>
                <strong>Deixa aqui seu feedback</strong>

                <textarea 
                    placeholder='Deixe um comentario'
                />

                <footer>
                    <button type='submit'> Publicar </button>
                </footer>
                
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}