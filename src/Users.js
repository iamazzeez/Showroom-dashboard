import React, { Component } from 'react'
// import {Link} from 'react-router-dom'
import Example from './Modal';

export default class Users extends Component {
    state = {
    data: ''
    }

    componentDidMount(){
  this.getAll()
    
    }


    getAll = () => {
        fetch('https://user-auth-task.herokuapp.com/api/showusers', {
            method: 'GET',
            body: null,
            headers: {
              'Content-Type': 'application/json',
          
            }
          })
          .then(
            (response) => {
              if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' +
                  response.status);
                return;
              }
          
              // Examine the text in the response
              response.json().then((data) => {
                if (data.error) {
                  return this.setState({ error: data.message });
                }
              
               console.log(data)
                  return this.setState({ data: data })
              
            
              })
            }
            )
    }
  

   
    
    render() {
       
            return (
<div className='row  m-1 '>
        {Object.values(this.state.data).map(user => (   
    
        
        <div className="col-md-4.6 m-1">
    <div className="card">
<div className="card-body">
<h4 className="card-title">{user.name}</h4>
<p className="card-text">Email: {user.email}</p>
<p className="card-text">Phone No: {user.password}</p>
<p className="card-text">Recent FollowUp: Coming for Service</p>

    <Example phone={user.password} name={user.name}/>
    
</div>
</div>
    
    </div>
    
    ))}
    
</div>
)

         
       
    
}
}