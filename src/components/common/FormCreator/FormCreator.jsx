import React from "react";
import classes from './FormCreator.module.css';

export const Textarea = ({input, meta,  ...props}) => {
    const hasError = meta.touched && meta.error;
    return <div>
        <div className={classes.wrapper + ' ' + hasError ? classes.error: ''}>
            <textarea {...input} {...meta} {...props}></textarea>
        </div>
        {hasError && <span className={classes.error}>{meta.error}</span>}
    </div>
}
export const Input = ({input, meta,  ...props}) => {
    const hasError = meta.touched && meta.error;
    return <div>
        <div className={classes.wrapper + ' ' + hasError ? classes.error: ''}>
            <input {...input} {...meta} {...props}></input>
        </div>
        {hasError && <span className={classes.error}>{meta.error}</span>}
    </div>
}