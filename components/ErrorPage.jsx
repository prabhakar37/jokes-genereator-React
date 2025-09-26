import React from 'react'
import {useRouteError} from 'react-router-dom'

function ErrorPage() {
    const err = useRouteError();
    
  return (
    <div style= {{color:"red", fontSize: "30px"}}>
        <p>{err.status} page Not Found</p>
    </div>
  )
}

export default ErrorPage