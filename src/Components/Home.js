import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import UserList from './UserList';
import AlbumList from './AlbumList';
import PhotoList from './PhotoList';

export default class Home extends Component {
    state = {
        User: '',
        Album: ''
    };

    onsUserSelect = userId => {
        this.setState({
            User: userId
        });
    };

    onAlbumSelect = albumId => {
        this.setState({
            Album: albumId
        });
    };

    render() {
        return (
            <React.Fragment>
                <main>
                    <h1>Photo Album</h1>

                    <UserList
                        selectedUser={this.state.User}
                        onUserSelect={this.onsUserSelect}
                    />

                    <AlbumList
                        selectedAlbum={this.state.Album}
                        onAlbumSelect={this.onAlbumSelect}
                    />

                    <PhotoList selectedAlbum={this.state.Album} />
                </main>
            </React.Fragment>
        );
    }
}
