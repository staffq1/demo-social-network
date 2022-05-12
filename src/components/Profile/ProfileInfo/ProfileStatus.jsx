import React from 'react'
import classes from './ProfileInfo.module.css'

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    activeEditeMode = ()=>{
        this.setState({editMode: true})
    }

    deActiveEditeMode = ()=>{
        
        this.setState({editMode: false})
        this.props.updateStatus(this.state.status)

    }

    onStateChange = (e)=>{
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState){
       
        if(prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <>
                {!this.state.editMode &&
                    <div>
                        <span onClick={this.activeEditeMode}>{this.props.status || '-----'}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        {/* onBlur - когда клик вне фокуса элемента */}
                        <input onChange={this.onStateChange} autoFocus={true} onBlur={this.deActiveEditeMode} value={this.state.status} />
                    
                    </div>
                }
            </>
        )
    }
}

export default ProfileStatus