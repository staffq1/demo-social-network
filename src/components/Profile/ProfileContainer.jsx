import React, { useEffect } from 'react'
import Profile from './Profile'
import { connect } from 'react-redux';
import { getStatus, updateStatus, userThunkCreator } from '../../redux/profile-reducer'
import { compose } from 'redux';
import { useNavigate } from 'react-router-dom';


const ProfileContainer = (props)=>  {

  let navigate = useNavigate()

  useEffect(()=> {

    let userId = props.match.params.userId
    
    if (userId === '*') {
      userId = props.authorizedUserId
      if(!userId){
        navigate('/login')
      }
    }
    
    props.userThunkCreator(userId)
    props.getStatus(userId)
  })

  return <Profile {...props} profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
  
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth
})


export default compose(
  connect(mapStateToProps, { userThunkCreator, getStatus, updateStatus })
)(ProfileContainer)