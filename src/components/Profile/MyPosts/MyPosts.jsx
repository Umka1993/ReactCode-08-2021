import React from "react";
import Posts from "./Posts/Posts";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxlength10 = maxLengthCreator(10)

const MyPosts = React.memo(props => {
// debugger;
    let postElement = props.posts.map(p => <Posts message={p.message} likes={p.likesCount}/>)


    let onAddPost = (values) => {
        // debugger
        props.addPost(values.newPostText)
    }
    return (
        <div>
            <p>My posts</p>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            {postElement}
        </div>
    )
});

const AddNewPostForm = (props)=>{
    return(
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} name={'newPostText'} placeholder={'Enter post'}
            validate={[required, maxlength10]}
            />
            <div>
                <button >Add post</button>
            </div>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm({form:'ProfileAddNewPostForm'})(AddNewPostForm)

export default MyPosts