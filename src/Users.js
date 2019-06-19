import React, { Component } from 'react'
// import {Link} from 'react-router-dom'
import DetailsModel from './Modal';
import db from "./firebase";


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
       console.log(Object.values(this.state.users).map(obj => obj.age))
      //  let u =console.log( Array.from(this.state.users))
      // console.log(this.state.userobj)
      let userobj =  Object.values(this.state.users).map(obj => obj ) 
      console.log(this.state.users, this.state.time)
            return (
<div className='row  m-1 '>
        {Object.values(this.state.users).map(user => (   
    
        
        <div className="col-md-4.6 m-1">
    <div className="card">
<div className="card-body">
<h4 className="card-title">{user.username}</h4>
<p className="card-text">Time to Call: {user.convinientTimeToCall}</p>
<p className="card-text">Phone No: {user.phone}</p>
<p className="card-text">Recent FollowUp: Comming for Service</p>


    <DetailsModel phone={user.phone} name={user.name} />
    
</div>
</div>
    
    </div>
    
    ))}
    
</div>
)

         
       
    
}
}