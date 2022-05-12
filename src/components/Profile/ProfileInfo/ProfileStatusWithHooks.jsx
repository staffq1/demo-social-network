import React, { useEffect, useState } from 'react'
import classes from './ProfileInfo.module.css'

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(()=>{
        setStatus(props.status)
    }, [props.status])

    const activeMode = () => {
        setEditMode(true)
    }

    const deActiveEditeMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return <>
        {!editMode &&
            <div>
                <span onDoubleClick={activeMode} >{props.status || '-----'}</span>
            </div>
        }
        {editMode &&
            <div>
                {/* onBlur - когда клик вне фокуса элемента */}
                <input onChange={onStatusChange} onBlur={deActiveEditeMode} autoFocus={true} value={status} />

            </div>
        }
    </>
}

export default ProfileStatusWithHooks