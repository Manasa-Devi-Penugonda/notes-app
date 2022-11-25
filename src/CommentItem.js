import {BsXCircle} from "react-icons/bs";
import './CommentItem.css'
import { useState } from "react";


const CommentItem = (props) => {
const {commentDetails , style} = props
const {id, name, comment,isPinned} = commentDetails
const url = isPinned ? "https://img.icons8.com/ios-filled/24/000000/pin3.png" :"https://img.icons8.com/ios/24/000000/pin3.png";

const [border,setBorder] = useState({style})

const addpin = () => {
const {addPinnedComment}= props
addPinnedComment(id)
}

const onDeleteComment = () => {
const {deleteComment} = props
deleteComment(id)
}

const onChangeBorder1 = ()=>{
     setBorder("#86bbd8")
}

const onChangeBorder2 = ()=>{
    setBorder("#efd0ca")
}
const onChangeBorder3 = ()=>{
    setBorder("#d7f9f1")
}
const onChangeBorder4 = ()=>{
    setBorder("#fb8f67")
}

const style1 ={
    borderColor:border,
}


return (
<center>
    <li className="listItems">

        <div className='card' style={style1}>
            <div className="heading-section">
                <h3 className='pinned-notes'> {name}</h3>
                <button testid="pinned" className="button" type="button" onClick={addpin}>
                    <img src={url} alt="logo" className="logo" />
                </button>
            </div>
            <p className='textarea'> {comment}</p>
            <div className='tag'>
                <p>Random</p>
                <BsXCircle color="red" className='close-icon' />
            </div>
            <div className='colors-section'>
                <div className='colors'>
                    <div className=" color color1" onClick={onChangeBorder1}></div>
                    <div className="color color2" onClick={onChangeBorder2}></div>
                    <div className="color color3" onClick={onChangeBorder3}></div>
                    <div className="color color4" onClick={onChangeBorder4}></div>
                </div>
                <button className="button" type="button" onClick={onDeleteComment} testid="delete">
                    <img className="del-logo" src="https://img.icons8.com/ios/24/000000/delete-trash.png" alt="delete" />
                </button>
            </div>
        </div>

    </li>
</center>
)
}

export default CommentItem