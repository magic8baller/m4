import React, { Component } from 'react'

class RegistrationForm extends Component {
  state = {
    username: '',
    password: ''
  }
  post '/users', to: 'users#create'
  post '/login', to: 'auth#create'
  get '/profile', to: 'users#show'
  get '/home', to: 'application#welcome'

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()

    fetch(`http://localhost:3000/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
      .then(res => res.json())
      .then(json => {
        console.log(json)
        localStorage.setItem('token', json.token)
        this.props.history.push('/')
      })
  }

  render() {
    return (
      <div>
      register
      <div className="registration">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={this.handleChange}
            value={this.state.username}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={this.handleChange}
            value={this.state.password}
          />
          <input type="submit" value="Register" />
        </form>
      </div>
      </div>
    )
  }
}

export default RegistrationForm
