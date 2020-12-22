import React, { Component } from 'react';


class Login extends Component {
    state = {
      email: '',
      password:''
      };

      changeState=(e)=>{
        this.state({
          [e.target.name]:e.target.value
        })
      }

    render() { 
        return ( 
              <div className="card border-dark mb-3" style={{maxWidth: '18rem'}}>
                <div className="card-header">Header</div>
                <div className="card-body">
                  <form>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Email address</label>
                      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={this.state.email} onchange={this.changeState} />
                      <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1">Password</label>
                      <input type="password" className="form-control" id="exampleInputPassword1" name='password' value={this.state.password} onchange={this.changeState} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                  </form>
                </div>
              </div>
        );
    }
}

export default Login;