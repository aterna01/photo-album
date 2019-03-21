import React, { Component } from 'react';
import UserList from './UserList';
import AlbumList from './AlbumList';
import PhotoList from './PhotoList';

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

    //  updateName() {
    //     axios
    //         .get(
    //             `https://jsonplaceholder.typicode.com/users/${
    //                 this.state.user
    //             }`
    //         )
    //         .then(res => {
    //             console.log('This is axios response for username: ', res);
    //             this.setState({ userName: res.name });
    //             console.log('This is axios response for username: ', res);
    //         })
    //         .catch(error => console.log(error));
    // }

    render() {
        return (
            <React.Fragment>
                <main>
                    <h1>Photo Album</h1>

                    <UserList
                        selectedUser={this.state.user}
                        onUserSelect={this.onsUserSelect}
                    />

                    <AlbumList
                        selectedUser={this.state.user}
                        selectedAlbum={this.state.album}
                        onAlbumSelect={this.onAlbumSelect}
                    />

                    <PhotoList selectedAlbum={this.state.album} />
                </main>
            </React.Fragment>
        );
    }
}
