import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import axios from 'axios';

export default class UserList extends Component {
    state = {
        users: []
    };

    componentDidMount() {
        axios
            .get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                //console.log(response);
                this.setState({ users: response.data });
            })
            .catch(error => console.log(error));
    }

    render() {
        return (
            <React.Fragment>
                <section className="userContainer">
                    <h2> Users</h2>
                    {this.state.users.map(user => {
                        return (
                            <section
                                className="userList"
                                key={user.id}
                                onClick={() => {
                                    this.props.selectedUser !== user.id
                                        ? this.props.onUserSelect(user.id)
                                        : this.props.onUserSelect('');
                                }}
                                style={{
                                    cursor: 'pointer',
                                    backgroundColor:
                                        user.id === this.props.selectedUser
                                            ? 'yellow'
                                            : null
                                }}
                            >
                                {user.name}
                            </section>
                        );
                    })}
                </section>
            </React.Fragment>
        );
    }
}
