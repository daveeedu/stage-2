import React, { Component } from "react";
import { Card, Container } from "react-bootstrap"

export class forms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      gender: "",
      bio: "",
    };
  };
  handleChange = (event) => {
      let body = {},
      name = event.target.name,
      value = event.target.value;

      body[name] = value;
      
    this.setState(body);
  }

  

  handleSubmit = (event) => {
    console.log(this.state);
      alert('form submitted');
      event.preventDefault();
  }


  render() {
    return (
      <Container>
          <h1 className="text-center text-secondary mt-4">SIMPLE FORM</h1>
          <Card style={{ width: "18rem" }} className="bg-light text-danger m-auto">
    <Card.Body>
      <Card.Title>Full Name: {this.state.firstName} {this.state.lastName}</Card.Title>
      <Card.Text>
        Email: {this.state.email}
      </Card.Text>
      <Card.Text>
        Gender: {this.state.gender}
        </Card.Text>
        <Card.Text>
          Bio: {this.state.bio}
          </Card.Text>
          </Card.Body>
          </Card>
        <form onSubmit={this.handleSubmit} className="0 h-100 m-auto my-5 p-5 border border-2 bg-secondary" style={{width: "80%"}} >  
          
            <label htmlFor="firstName" className="w-100 "> 
                <div className="my-3 ">Name</div>
                <input
              type="text"
              className="form-control border-0 bg-light text-black"
              id="firstName"
              name="firstName"
              placeholder="First Name"
              onChange={this.handleChange}
            />
            </label>
            
          
          
            <label htmlFor="lastName" className="w-100">
                <div className="my-3">Last Name</div>
                <input
              type="text"
              className="form-control border-0 bg-light text-black"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              onChange={this.handleChange}
            />
            </label>
            
            <label htmlFor="email" className="w-100">
                <div className="my-3">Email</div>
                <input
              type="email"
              className="form-control border-0 bg-light text-black"
              id="email"
              name="email"
              placeholder="Email"
              onChange={this.handleChange}
            />
            </label>
            
            <label htmlFor="gender" className="w-100">
                <div className="my-3"> Gender</div>
                <input type="text" name="gender" className="form-control border-0 bg-light text-black" id="gender"  onChange={this.handleChange} />
            </label>
            
          
            <label htmlFor="bio" className="w-100">
                <div className="my-3">Bio</div>
                <textarea className="form-control border-0 bg-light text-black" name="bio" id="biog" rows="3" onChange={this.handleChange}></textarea>
            </label>
            
          
          <div
          style={{ marginTop: "20px" }}>
          <button type="submit" className="btn btn-primary" >
            Submit
          </button>
          </div>
        </form>
      </Container>
    );
  }
}

export default forms;


