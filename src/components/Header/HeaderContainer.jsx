import React from 'react'
import Header from './Header';
import { connect } from 'react-redux';
import { 
    // getAuthUserData, 
    logout} from './../../redux/auth-reducer';

const HeaderContainer =(props)=>  {
    // componentDidMount(){
       
    //   this.props.getAuthUserData() 
    // }
    
        return <Header {...props} />
    
}

 const mapStateToProps = (state) =>  {

    return{
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
    
}


export default connect(mapStateToProps, {
    // getAuthUserData,
     logout}) (HeaderContainer)