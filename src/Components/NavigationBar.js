import { MDBCol, MDBIcon } from 'mdbreact'
import React from 'react'
import { Route } from 'react-router-dom'
import Form from './Form'

function NavigationBar() {
    return (
        <div>

<nav class="navbar navbar-light bg-warning justify-content-between">
  
  <MDBCol md="6">
      <form className="form-inline mt-4 mb-4">
        <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search" />
      </form>
    </MDBCol>
    <img src="https://img.icons8.com/ios-filled/28/ffffff/add-user-group-man-man--v1.png"/>
    <img src="https://img.icons8.com/android/28/ffffff/appointment-reminders.png"/>
    <img src="https://img.icons8.com/material-sharp/28/ffffff/video-message.png"/>
    

</nav>

<Route exact path="/" component={Form}/>
            
        </div>
    )
}

export default NavigationBar
