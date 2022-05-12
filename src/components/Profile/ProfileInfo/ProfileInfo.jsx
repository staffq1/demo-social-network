import React from 'react'
import Preloader from '../../commen/Preloader/Preloader'
import classes from './ProfileInfo.module.css'
import ProfileStatus from './ProfileStatus'
import ProfileStatusWithHooks from './ProfileStatusWithHooks'


const ProfileInfo = ({profile, status, updateStatus}) => {
  if(!profile){
    return <Preloader/>
  } else{
    return (
      <div>
        <div>
          <img className={classes.img} src="https://img.fonwall.ru/o/hk/vecher-bereg-kamni-pesok.jpg" />
        </div>
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
        <div className={classes.descriptionBlock}>
          <img src={profile.photos.large}/>
          <h4>Обо мне: {profile.aboutMe}</h4>
          <h4>Контакты</h4>
          <div>
            <a href={profile.contacts.facebook}>facebook</a>
            <a href={profile.contacts.github}>github</a>
            <a href={profile.contacts.instagram}>instagram</a>
            <a href={profile.contacts.mainLink}>mainLink {profile.contacts.mainLink}</a>
            <a href={profile.contacts.twitter}>twitter</a>
            <a href={profile.contacts.vk}>vk</a>
            <a href={profile.contacts.website}>website</a>
            <a href={profile.contacts.youtube}>youtube</a>
          </div>
          <h4>{profile.fullName}</h4>
          <p>{profile.lookingForAJobDescription}</p>
          avatar + discription
        </div>
      </div>
    )
  }
}


export default ProfileInfo