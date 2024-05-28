import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { Comment } from './Comment';
import styles from './Post.module.css';
import { useState } from 'react';


//author: { avatar_url: "", name: "", role: "",}
// publisedAt: Date
// content: String

//estado = variaveis que eu quero que o componente monitore 



export function Post({ author, publishedAt, content }) {

    const [comments, setComments] = useState([
       'Post Muito legal! Parabéns Wagner'
    ]
    )

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    })

    function handleCreateNewComment() {
        event.preventDefault()

        const newCommentText= event.target.comment.value
        setComments([...comments, newCommentText]);

        event.target.comment.value = '';
    }
    return (
    
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src={author.avatarUrl}/>
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow} 
                </time>
                    
            </header>

            <div className={styles.content}>
                {content.map( line => {
                    if (line.type =='paragraph') {
                        return <p>{line.content}</p>;
                    } else if (line.type == 'link') {
                        return <p><a href='#'>{line.content}</a></p>;
                    }
                })}
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>

                <p>Doloremque nemo corporis eum quae temporibus iste neque ad laborum accusamus deserunt provident vel. </p>

                <p> <a href=""> Link para o site </a></p>
                <p> <a href=""> Dolores vero animi a architecto molestiae ab! Eveniet </a> </p>


            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixa aqui seu feedback</strong>

                <textarea 
                    name= "comment"
                    placeholder='Deixe um comentario'
                />

                <footer>
                    <button type='submit'> Publicar </button>
                </footer>
                
            </form>

            <div className={styles.commentList}>
                {comments.map( comment => {
                    return <Comment content={comment}/>
                })}
            </div>
        </article>
    )
}