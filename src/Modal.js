import React from 'react'
import { Modal, Button } from 'react-bootstrap';


export default class DetailsModel extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);
      this.onChangeComment = this.onChangeComment.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
  
      this.state = {
        show: false,
        comment: '',
        submitComment: ''
      };
    }
  
    handleClose() {
      this.setState({ show: false });
    }
  
    handleShow() {
      this.setState({ show: true });
    }

    onChangeComment(e) {
        this.setState({
            comment: e.target.value
        })
    }

   onSubmit(e) {
    e.preventDefault()
    this.setState({
        submitComment: this.state.comment,
        comment: ''
    });
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
            <Modal.Body>
                <h6>Follow Ups</h6>
                <p>{this.state.submitComment}</p>
                </Modal.Body>
            <form className="form-group container" >    
            <label className="form-label" for="inputDefault">Comments</label>
            <input  type="text"
                                className="form-control"
                                value={this.state.comment}
                                onChange={this.onChangeComment}
                                placeholder="Type Comments"
                                />
            <Modal.Footer>
            <button type="submit" onClick={this.onSubmit} class="btn btn-success">Submit</button>
            </Modal.Footer>
            </form>
          </Modal>
        </>
      );
    }
  }
  
