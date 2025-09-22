import React from 'react'

function Button({clickFunction}) {
    
  return (
    <>
        <button className='jokeButton' onClick={()=>{clickFunction()}}> Get New Jokes</button>
    </>
  )
}
export default Button;