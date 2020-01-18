import React from 'react';
import { connect } from 'react-redux';

export class UserRow extends React.Component {
    render() {
        return (
            <tr>
                <td data-label="Login">{this.props.login}</td>
                <td data-label="Email">{this.props.email}</td>
                <td data-label="Admin">{this.props.admin}</td>
                <td data-label="Admin">
                    <button class="ui secondary button"><i class="edit icon"></i></button> 
                    <button class="ui button"><i class="trash alternate outline icon"></i></button>
                </td>
            </tr>
        );
    }
}

export class UserTable extends React.Component {
    render() {
        return (
            <table class="ui celled table">
  <thead>
    <tr><th>Login</th>
    <th>Email</th>
    <th>Admin</th>
  </tr></thead>
  <tbody>
      <UserRow login="Jan Fasola" email="mrbean@gmail.com" admin='false' />
      <UserRow login="Kaczor Donald" email="donald@duck.com" admin='false' />
      <UserRow login="Prezes" email="prezes@gmail.com" admin='true' />
  </tbody>
</table>
        );
    }
}
