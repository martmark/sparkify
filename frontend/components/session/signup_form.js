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

  componentWillUnmount() {
    this.props.receiveSessionErrors([]);
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
    const errorsList = this.props.errors.length > 0 ? 
      (<ul className="session-errors">{this.props.errors.map((error, idx) => (<li key={idx}>{error}</li>))} </ul>) : null
    return (
      <div className='sessionform'>
        <div className="signup">
          <header className="signup-header">
            <Link to={"/"}>Sparkify</Link>
          </header>
          <section className="signup-main">
            <div className="signup-demo-button">
              <button onClick={this.props.demoLogin}>
                SIGN IN AS DEMO USER
              </button>
            </div>
            <h3 id="form-or">or</h3>
            <h1>Sign up for Sparkify</h1>
            {errorsList}
            <form className="signup-form">
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

              <button onClick={this.handleSubmit}>SIGN UP</button>
            </form>
            <h2>
              Already have an account?{" "}
              <Link className="green-link" to={"/login"}>
                Log in
              </Link>
            </h2>
          </section>
        </div>
      </div>
    );
  }

}

export default SignupForm;