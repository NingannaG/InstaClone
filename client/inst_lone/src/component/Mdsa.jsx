import React from 'react'
import './message.css';
import { format } from 'timeago.js';

const Mdsa = ({ own,message }) => {
  console.log(message.conversationId)
  return (
    <>
      <div className={own?"message own":"message"}>
        <div className="messageTop">
          <img src='' className='messageImg' />
          <div className='chat'>
            {message.text}
          </div>
        </div>
        <div className="chatTime">
          {format(message.createdAt)}
        </div>
      </div>

    </>
  )
}

export default Mdsa