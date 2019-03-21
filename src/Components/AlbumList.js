import React, { Component } from 'react';
import axios from 'axios';

export default class AlbumList extends Component {
    state = {
        userId: this.props.selectedUser,
        userName: '',
        albums: []
    };

    //This method is used because this.state.albums depends on changes in props over time.
    // Any time the current user changes,
    // Reset any parts of state that are tied to that user.
    static getDerivedStateFromProps(props, state) {
        if (props.selectedUser !== state.userId) {
            console.log('This is props.selectedUser: ' + props.selectedUser);
            console.log('This is state.userId: ' + state.userId);
            return {
                userId: props.selectedUser
            };
        }
        return null;
    }

    //After this.state.userId is updated use this method to call server
    // Then filter response which is a Json and update this.state.albums
    //WARNING => DO NOT USE: if (prevState.selectedUser !== this.state.userId) {
    //This will call server in an infinite loop
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.selectedUser !== this.state.userId) {
            axios
                .get(
                    `https://jsonplaceholder.typicode.com/albums?userId=${
                        this.state.userId
                    }`
                )
                .then(response => {
                    console.log(
                        'This is axios response for albums: ',
                        response
                    );
                    this.setState({ albums: response.data });
                })
                .catch(error => console.log(error));

            axios
                .get(
                    `https://jsonplaceholder.typicode.com/users/${
                        this.state.userId
                    }`
                )
                .then(res => {
                    console.log('This is axios response for username: ', res);
                    this.setState({ userName: res.data.name });
                    console.log(
                        'This is axios response for username: ',
                        this.state.userName
                    );
                })
                .catch(error => console.log(error));
        }
    }

    render() {
        return (
            <React.Fragment>
                <h2 className="albumList">{this.state.userName}</h2>
                <select
                    className="albumList"
                    onChange={event => {
                        ////Check if user select different 'Album'
                        //If so reassign the album Id: this.props.onAlbumSelect(event.target.value);
                        //event.target.value = album.id from Json
                        this.props.onAlbumSelect(event.target.value);
                        console.log(
                            'This is event target value: ',
                            event.target.value
                        );
                        console.log(
                            'This is event target key: ',
                            event.target.key
                        );
                    }}
                >
                    <option defaultValue>Select Album</option>
                    {this.state.albums.map(album => {
                        console.log(
                            'This is state.userId: ' + this.state.userId
                        );
                        return (
                            <option
                                className="albumList"
                                key={album.id}
                                value={album.id}
                            >
                                {album.title}
                            </option>
                        );
                    })}
                </select>
            </React.Fragment>
        );
    }
}
