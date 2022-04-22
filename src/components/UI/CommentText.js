import './CommentText.css'

function CommentText (props){
    let style = 'text ' + props.className;
    return <div className={style}>{props.children}</div>
}

export default CommentText