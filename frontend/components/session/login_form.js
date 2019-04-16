import React from 'react';
import { Link } from 'react-router-dom';


class LoginForm extends React.Component {

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
    this.props.login(this.state);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    }
  }

  render() {

    return (
      <div className="login">
        <header className='login-header'>Sparkify</header>
        <section className="login-main">
          <h1>To continue, log in to Sparkify.</h1>
          <div className='login-demo-button'>
            <button onClick={this.props.demoLogin}>LOG IN AS DEMO USER</button>
          </div>
          <h3>OR</h3>
          <form className="login-form">
            <input type="text" value={this.state.username} placeholder={'Username'} onChange={this.update('username')} />


            <input type="password" value={this.state.password} onChange={this.update('password')} placeholder={'Password'} />

            <button onClick={this.handleSubmit}>LOG IN</button>
          </form>
          <h2>Don't have an account?</h2>
        </section>
      </div>
    )
  }

}

export default LoginForm;