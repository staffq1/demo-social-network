import React from 'react'
import classes from './Post.module.css'

const Post = (props) => {
  return (
    <div className={classes.item}>
      <img src='https://i.pinimg.com/736x/b1/4e/9f/b14e9fb7746547c9f1888dc3209108fd.jpg' />
      {props.message}
      <div>
        <span>like:</span>  {props.likesCount}
      </div>
    </div>
  )
}

export default Post