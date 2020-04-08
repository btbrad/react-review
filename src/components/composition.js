import React from 'react'

function Dialog(props) {
  return (
    <div style={{border: `4px solid ${props.color || 'blue'}`}}>
      {props.children}
      <div className="footer">{props.footer}</div>
    </div>
  )
}

function WelcomeDialog(props) {

  return (
    <Dialog {...props} >
      <h1>Welcome</h1>
      <p>React World</p>
    </Dialog>
  )
}

export default WelcomeDialog