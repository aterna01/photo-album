import React, { Component } from 'react';
import UserList from './UserList';
import AlbumList from './AlbumList';
import PhotoList from './PhotoList';
import axios from 'axios';

export default class Home extends Component {
    state = {
        user: '',
        album: '',
        userName: ''
    };

    //Funcion change state of this.state.user
    onsUserSelect = userId => {
        this.setState({
            user: userId
        });
    };

    //Function change state of this.state.album
    onAlbumSelect = albumId => {
        this.setState({
            album: albumId
        });
    };

    updateName = userId => {
        axios
            .get(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then(res => {
                console.log('This is axios response for username: ', res);
                this.setState({ userName: res.data.name });
                console.log(
                    'This is axios response for username: ',
                    this.userName
                );
            })
            .catch(error => console.log(error));
    };

    render() {
        return (
            <React.Fragment>
                <main>
                    <h1>Photo Album</h1>

                    <UserList
                        selectedUser={this.state.user}
                        onUserSelect={this.onsUserSelect}
                        displayName={this.updateName}
                    />

                    <AlbumList
                        selectedUser={this.state.user}
                        selectedAlbum={this.state.album}
                        onAlbumSelect={this.onAlbumSelect}
                        displayName={this.state.userName}
                    />

                    <PhotoList selectedAlbum={this.state.album} />
                </main>
            </React.Fragment>
        );
    }
}
