import React, { Fragment, useContext } from 'react'
import { ModalsContext } from './modal'



const MessageBox = () => {
  const {showWindow,
    windowMessages,
    fnMouseOverLockMessageBox, 
    fnLeaveMouseCloseMessageBox
  } = useContext(ModalsContext)

  return (
    <div
      className={'message-box-window' + ` ${showWindow ? ' message-box-show' : ''}`}
      onMouseEnter={() => fnMouseOverLockMessageBox()}
      onMouseLeave={() => fnLeaveMouseCloseMessageBox()}
    >
      <label>{windowMessages.topMessage}</label>
      <hr />
      {windowMessages.mainMessage.map((item, index) =>
        <p key={index}>{item}</p>
      )}
    </div>
  )
}

export default MessageBox