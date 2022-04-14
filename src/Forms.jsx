import React, { Component } from "react";
import { Container } from "react-bootstrap"

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
      event.preventDefault();
  }


  render() {
    return (
      <Container>
          <div>
          {
                
                <div className='p-3'>
                    You are Submitting the following: 
                    <ul>
                        
                        {Object.entries(this.state.body).map(([name,value]) => (
                            <li key={name}><strong>{name}</strong>: {value.toString()} </li>
                        ))}
                    </ul>
                </div>
            }
          </div>
        <form onSubmit={this.handleSubmit} >  
          
            <label htmlFor="firstName">
                <div>Name</div>
                <input
              type="text"
              className="form-control"
              id="firstName"
              name="firstName"
              placeholder="First Name"
              onChange={this.handleChange}
            />
            </label>
            
          
          
            <label htmlFor="lastName">
                <div>Last Name</div>
                <input
              type="text"
              className="form-control"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              onChange={this.handleChange}
            />
            </label>
            
            <label htmlFor="email">
                <div>Email</div>
                <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Email"
              onChange={this.handleChange}
            />
            </label>
            
            <label htmlFor="gender">
                <div>Gender</div>
                <input type="text" name="gender" className="form-control" id="gender"  onChange={this.handleChange} />
            </label>
            
          
            <label htmlFor="bio">
                <div>Bio</div>
                <textarea className="form-control" name="bio" id="biog" rows="3" onChange={this.handleChange}></textarea>
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


