import React, { Component } from 'react'
import db from "./firebase";

export default class UserDetails extends Component {
 state={
     age: null,
     username: null,
     convinientTimeToCall: null,
     phone: null,
     name: null,
 }
    componentDidMount(){
           console.log(this)
        db.ref('dealer_demo/users/'+this.props.match.params.id).once('value', (snapshot) => {
          snapshot.val()
           
        
            this.setState({
              age: snapshot.val().age,
              username: snapshot.val().username,
              convinientTimeToCall: snapshot.val().convinientTimeToCall,
              phone: snapshot.val().phone,
              name: snapshot.val().name,
            })
        
          
         
        });
            
            }
    render() {
        console.log(this.state.user)
        return (
            <div className='row'>
            <div className="m-2 col-lg-2 ">
 <div className="card border-primary mb-2" style={{"max-width": "40rem"}}>
  <div className="card-header">Header</div>
  <div className="card-body">
    <h4 className="card-title">Primary card title</h4>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
</div>
<div className="m-2 col-lg-2 ">
<div className="card border-primary" style={{"max-width": "15rem"}}>
  <div className="card-header">Header</div>
  <div className="card-body">
    <h4 className="card-title">Primary card title</h4>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
</div>
</div>



        )
    }
}
