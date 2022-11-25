import {Component} from 'react'
import {v4} from 'uuid'
import Tags from './Tags'
import CommentItem from './CommentItem'

import './coment.css'
//import Delete from './Delete'
var initialComment ={"id":1,"name":"First Heading", "isPinned":false,"comment":" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"}

class Comments extends Component {
state = {
nameInput: '',
commentInput: '',
commentsList: [initialComment],
backgroundColor:"#f2f2f2",
deletedList :"",
}

addPinnedComment = id => {
const {commentsList} = this.state
const pinnedComment = commentsList.map(eachComment => {
if (eachComment.id === id) {
const updateList = {...eachComment, isPinned: !eachComment.isPinned}
return updateList
}
return eachComment
})
this.setState({commentsList: pinnedComment})
}




deleteComment = id => {
const {commentsList} = this.state
const filteredComments = commentsList.filter(m => m.id !== id)
    this.setState({commentsList: filteredComments})
}


onAddComment = event => {
event.preventDefault()
const {nameInput, commentInput} = this.state
if (nameInput.length ===0){
   alert("Please Enter Title")
}else if (commentInput.length===0){
    alert("Please Add Text")
}else{
    const newComment = {
        id: v4(),
        name: nameInput,
        comment: commentInput,
        isPinned:false,
        }
        
        this.setState(prevState => ({
        commentsList: [...prevState.commentsList, newComment],
        nameInput: '',
        commentInput: '',
        backgroundColor:"#f2f2f2"
        }))
}

}

onChangeCommentInput = event => {
    this.setState({
            commentInput: event.target.value,})
}



onChangeNameInput = event => {
this.setState({
nameInput: event.target.value,
})
}

onChangeColor1 =()=>{
    this.setState({backgroundColor:"#86bbd8"})
}
onChangeColor2 =()=>{
    this.setState({backgroundColor:"#efd0ca"})
}
onChangeColor3 =()=>{
    this.setState({backgroundColor:"#d7f9f1"})
}
onChangeColor4 =()=>{
    this.setState({backgroundColor:"#fb8f67"})
}
onDelColor = ()=>{
    this.setState({backgroundColor:"#f2f2f2"})
}

render() {
const {nameInput, commentInput,commentsList} = this.state
const updateList = commentsList.filter(
comment=> comment.isPinned === true,
)
const filteredList = commentsList.filter(
comment => comment.isPinned ===false,
)


const style = {
    backgroundColor: this.state.backgroundColor
  }
  
return (
<div className='middle2'>
    <div className="middle-section">
        <form className="form" onSubmit={this.onAddComment}>
            <div className='middle-part' style={style}>
                <input type="text" className="title txtbgcolor" style={style} placeholder="Title" value={nameInput} onChange={this.onChangeNameInput}/>
                <hr className='line' />
                <textarea placeholder="Take a Note" style={style} className="text txtbgcolor" value={commentInput} onChange={this.onChangeCommentInput} rows="6"/>
            </div>
            <div className='colors-section'>
                <div className='colors'>
                   <div className='colorbtn color1' onClick={this.onChangeColor1}></div>
                   <div className='colorbtn color2' onClick={this.onChangeColor2}></div>
                   <div className='colorbtn color3'onClick={this.onChangeColor3}></div>
                   <div className='colorbtn color4'onClick={this.onChangeColor4}></div>
                   
                </div>
                <div className='properties'>
                    <button className='button' type='button' testid="pinned">
                        <img src="https://img.icons8.com/ios/24/000000/pin3.png" className='logo' alt="logo"/>
                    </button>
                    <button className='button' type ="button" testid ="button" onClick={this.onDelColor}> 
                    <img src="https://img.icons8.com/ios/24/000000/delete-trash.png" alt="logo" />
                    </button>
                    <button type="submit" className="addbtn">
                        Add
                    </button>
                </div>
            </div>
        </form>
    </div>
    <Tags />
    <hr className="line" />
    <center>
        <h3 className="pinned-notes">Pinned Notes</h3>
        <ul className='comments-list'>{updateList.map(eachComment => (
            <CommentItem key={eachComment.id} commentDetails={eachComment} addPinnedComment={this.addPinnedComment} deleteComment={this.deleteComment}/>
            ))}
        </ul>
    </center>

    <center>
        <h3 className="pinned-notes">Other Notes</h3>
    </center>

    <div>
        <ul className='comments-list'>{filteredList.map(eachComment => (
            <CommentItem key={eachComment.id} commentDetails={eachComment} addPinnedComment={this.addPinnedComment} deleteComment={this.deleteComment}  style={style}/>
            ))}
        </ul>
    </div> 
</div>
)
}
}

export default Comments