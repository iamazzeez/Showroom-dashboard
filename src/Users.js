import React, { Component } from 'react'
import {Link} from 'react-router-dom'

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
    <div class="card">
<div class="card-body">
<h4 class="card-title">{user.name}</h4>
<p class="card-text">Username: {user.username}</p>
<p class="card-text">Email: {user.email}</p>
<p class="card-text">Phone No: {user.password}</p>

    <Link  className="btn btn-info " to= {`/edit/${user.username}`} >Details</Link>
    
</div>
</div>
    
    </div>
    
    ))}
    
</div>
)

         
       
    
}
}