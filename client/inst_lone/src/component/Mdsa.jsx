import React from 'react'
import './message.css';

const Mdsa = ({ own }) => {
  // console.log("post")
  return (
    <>
      <div className={own?"message own":"message"}>
        <div className="messageTop">
          <img src='' className='messageImg' />
          <div className='chat'>
            Text message will be here
          </div>
        </div>
        <div className="chatTime">
          9h ago
        </div>
      </div>

    </>
  )
}

export default Mdsa