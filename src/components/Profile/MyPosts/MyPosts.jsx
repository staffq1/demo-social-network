import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { maxLengthCreator, required } from '../../../utils/validators/validators'
import { Textarea } from '../../commen/FormsControls/FormsControls'
// import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer'
import classes from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = React.memo(props => {

  let postsElements = props.posts.map(postObj => <Post message={postObj.message} likesCount={postObj.likesCount} key={postObj.message} />)

  // let newPostElement = React.createRef()

  let onAddPost = (values) => {
    props.addPost(values.newPostText)
  }

  // let onPostChange = () => {
  //   let text = newPostElement.current.value
  //   props.updateNewPostText(text)
  // }

  return (
    <div className={classes.postsBlock}>
      <h2>My posts</h2>
      <AddNewPostFormRedux onSubmit={onAddPost}/>
      <div className={classes.posts}>
        {postsElements}
        {/* <Post message='Hi' likesCount='1'/> */}
        {/* <Post message='i good' likesCount='2'/> */}
      </div>
    </div>
  )
})

const maxLength10 = maxLengthCreator(10)

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Textarea} name='newPostText' 
        validate={[required, maxLength10]}/>
      </div>
      <div>
        <button>Add post</button>
      </div>
      <div>
        <button>Remove</button>
      </div>
    </form>
  )
}

const AddNewPostFormRedux = reduxForm({
  form: 'ProfileAddNewPostForm'
})(AddNewPostForm)

export default MyPosts