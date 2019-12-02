import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router-dom";


class LoginForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    this.props.receiveSessionErrors([]);
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

  goToSignup() {
    window.location.hash = "#/signup";
  }

  render() {
    const errorsList = this.props.errors.length > 0 ?
      (<ul className="session-errors">{this.props.errors.map((error, idx) => (<li key={idx}>{error}</li>))} </ul>) : null
    return (
      <div className='sessionform'>
        <div className="login">
          <header className="login-header">
            <Link to={"/"}>Sparkify</Link>
          </header>
          <section className="login-main">
            <h1>To continue, log in to Sparkify.</h1>
            <div className="login-demo-button">
              <button onClick={this.props.demoLogin}>
                LOG IN AS DEMO USER
              </button>
            </div>
            <h3 id="form-or">OR</h3>
            {errorsList}
            <form className="login-form">
              <input
                type="text"
                value={this.state.username}
                placeholder={"Username"}
                onChange={this.update("username")}
              />

              <input
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
                placeholder={"Password"}
              />

              <button onClick={this.handleSubmit}>LOG IN</button>
            </form>
            <h1>Don't have an account?</h1>
            <div className="to-signup-button">
              <button onClick={this.goToSignup}>SIGN UP FOR SPARKIFY</button>
            </div>
          </section>
        </div>
      </div>
    );
  }

}

export default withRouter(LoginForm);