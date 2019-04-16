import React from 'react';
import { Link } from 'react-router-dom';


class SignupForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    }
  }

  render() {

    return (
      <div className="signup">
        <header className='signup-header'><Link to={'/'}>Sparkify</Link></header>
        <section className="signup-main">
          <div className='signup-demo-button'>
            <button onClick={this.props.demoLogin}>SIGN IN AS DEMO USER</button>
          </div>
          <h3>or</h3>
          <h1>Sign up for Sparkify</h1>
          <form  className="signup-form">
            <input type="text" value={this.state.username} placeholder={'Username'} onChange={this.update('username')} />
            
            
            <input type="password" value={this.state.password} onChange={this.update('password')} placeholder={'Password'} />
            
            <button onClick={this.handleSubmit}>SIGN UP</button>
          </form>
          <h2>Already have an account? <Link className="green-link" to={'/login'}>Log in</Link></h2>
        </section>
      </div>
    )
  }

}

export default SignupForm;