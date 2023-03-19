import React, { createContext, useMemo, useRef, useState, useCallback } from 'react'

export const ModalsContext = createContext() 

const ModalsContextProvider = ({children}) => {
  const timeout = useRef(() => setTimeout(() => {}, 1))

  const [showWindow, setShowWindow] = useState(false)
  
  //ignoring setCloseWindowTime because we are not using currently
  // eslint-disable-next-line
  const [closeWindowTime, setCloseWindowTime] = useState(2000)
  const [windowMessages, setWindowMessages] = useState({
    topMessage: '',
    mainMessage: []
  })

  const fnCloseWindow = useCallback(() => setShowWindow(false) ,[setShowWindow])
  const fnMouseOverLockMessageBox = () => clearTimeout(timeout.current)
  const fnLeaveMouseCloseMessageBox = () => setShowWindow(false)

  const fnTimeCloseWindow = useCallback(() => {
    clearTimeout(timeout.current)
    timeout.current = setTimeout(() => fnCloseWindow(), closeWindowTime)
  }, [closeWindowTime, fnCloseWindow])
  
  const fnShowWindow = useCallback((topMessage, mainMessage) => {
    setWindowMessages({topMessage, mainMessage})
    setShowWindow(true)
    fnTimeCloseWindow()
  }, [fnTimeCloseWindow])

  

  const contextValue = useMemo(() => {
    return {
      fnShowWindow,
      fnCloseWindow,
      fnTimeCloseWindow,
      fnMouseOverLockMessageBox,
      fnLeaveMouseCloseMessageBox,

      showWindow,
      windowMessages,
      
      setWindowMessages
    }
  }, [
    fnShowWindow,
    fnCloseWindow,
    fnTimeCloseWindow,
    fnMouseOverLockMessageBox,
    fnLeaveMouseCloseMessageBox,

    showWindow,
    windowMessages,
      
    setWindowMessages
  ])
  return  <ModalsContext.Provider value={contextValue}>
    {children}
  </ModalsContext.Provider>
}

export default ModalsContextProvider