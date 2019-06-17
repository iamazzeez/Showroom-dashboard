import React from 'react'
import { Modal, Button } from 'react-bootstrap';


export default class Example extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);
  
      this.state = {
        show: false,
      };
    }
  
    handleClose() {
      this.setState({ show: false });
    }
  
    handleShow() {
      this.setState({ show: true });
    }
  
    render() {
      return (
        <>
          <Button variant="primary" className="btn btn-info" onClick={this.handleShow}>
            Follow Up
          </Button>
  
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{this.props.phone}</Modal.Title>
            </Modal.Header>
            <Modal.Body>Follow Ups</Modal.Body>
            <div class="form-group container">    

  <label class="form-label" for="inputDefault">Comments</label>
  <input type="text" class="form-control" placeholder="Type Comments" id="inputDefault"></input>
</div>
            <Modal.Footer>
            

              <Button className="btn btn-success" variant="primary" onClick={this.handleClose}>
                Save
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
    }
  }
  
