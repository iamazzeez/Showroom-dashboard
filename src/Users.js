import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import DetailsModel from './Modal';
import db from "./firebase";
// import { Button } from 'react-bootstrap';


export default class Users extends Component {
    state = {
    data: '',
    users: [],
    time: [],
    userobj: {},
    username: [],
      text: '',
      number: '',
  
    }

componentDidMount(){

db.ref('dealer_demo/users').on('value', (snapshot) => {
  snapshot.val()
 

    this.setState({
      users: snapshot.val(),
    })

  
 
});
    
    }


   
    onChangeHandler = (e) => {
      this.setState({
        text : [e.target.value]
      })
    }
    
  
   
   
   
    
    render() {
      console.log(this.state.users)
            return (
<div className='row  m-1 '>
        {Object.values(this.state.users).map(user => (   
    
       
        <div className="col-md-4.6 m-1">
    <div className="card">
<div className="card-body">
<h4 className="card-title">{user.username}</h4>
<p className="card-text">Time to Call: {user.convinientTimeToCall}</p>
<p className="card-text">Phone No: {user.phone}</p>
<p className="card-text">FollowUp: Comming for Service</p>


    <DetailsModel phone={user.phone} name={user.name} />
    
    <Link className="btn btn-primary m-1" to={`/users/${user.phone}`}>See more</Link>

    {/* <Button variant="primary" className="btn btn-info" onClick={this.handleShow}>
            Follow Up
          </Button> */}
    
</div>
</div>
    
    </div>
    
    ))}
    
</div>
)

         
       
    
}
}