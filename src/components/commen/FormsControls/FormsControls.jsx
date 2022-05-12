import React from "react";
import { Field } from "redux-form";
import classes from "../FormsControls/FormsControls.module.css"

const FormControl = ({ input, meta: {touched, error}, children  }) => {  //...props
    const hasError = touched && error
    return (
        <div className={classes.formControl + " " + (hasError ? classes.error : '')}>
            {children}
            {hasError && <span>errore {error}</span>}
        </div>
    )
}

export const Textarea = (props) => {
    const { input, meta, children, ...resProps } = props
    return <FormControl {...props}><textarea {...input} {...resProps} /></FormControl>
}

export const Input = (props) => {
    const { input, meta, children, ...resProps } = props

    return <FormControl {...props}><input {...input} {...resProps} /></FormControl>
}

export const createField = (placeholder, name, component, validate, props = {}, text = "") => (
    <div>
        <Field placeholder={placeholder}
            name={name} component={component}
            validate={validate} {...props} /> {text}
    </div>
)