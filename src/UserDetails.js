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
            <div className='row m-0'>
            <div className="col " style={{"max-width": "50rem"}}>
 <div className="card border-primary m-3" >
  <div className="card-header">NYC</div>
  <div className="card-body">
    <h4 className="card-title">Name: {this.state.name}</h4>
    <p className="card-text">Phone: {this.state.phone}</p>
    <p className="card-text">Age: {this.state.age}</p>
    <p className="card-text">Convinient time to call: {this.state.convinientTimeToCall}</p>
  </div>
</div>
</div>
<div className="col " style={{"max-width": "20rem"}}>
<div className="card border-primary m-3" >
  <div className="card-header">Cupon ID</div>
  <div className="card-body">
    <h4 className="card-title">XTYEX135BC</h4>
  </div>
</div>
</div>
<div className="col " style={{"max-width": "20rem"}}>
<div className="card border-primary m-3" >
  <div className="card-header">Bike</div>
  <div className="card-body">
    <h4 className="card-title">Honda</h4>
  </div>
</div>
</div>
</div>



        )
    }
}
