import React from 'react'

export default function Alert(props) {
    return (
    
        props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
    {props.alert.type} : {props.alert.msg} 
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>

    )
}
© 2021 GitHub, Inc.
