import React, { Component } from 'react';
import axios from 'axios';

export default class UserList extends Component {
    state = {
        users: []
    };

    componentDidMount() {
        axios
            .get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                // console.log(response);
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
                                    //Check if user select different 'User' and if so reassign the user Id: this.props.onUserSelect(user.id)
                                    if (this.props.selectedUser !== user.id) {
                                        this.props.onUserSelect(user.id);
                                    }

                                    //**** This code created an issue for select user functionality
                                    //**** If you click 2 times on the same user it will reassign the state to nothing: this.props.onUserSelect('');

                                    // this.props.selectedUser !== user.id
                                    //     ? this.props.onUserSelect(user.id)
                                    //     : this.props.onUserSelect('');
                                    // console.log(this.props.selectedUser);
                                    // console.log(this.state.users);
                                }}
                                //Style the selected user
                                style={{
                                    cursor: 'pointer',
                                    backgroundColor:
                                        user.id === this.props.selectedUser
                                            ? '#aaaaaa'
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
