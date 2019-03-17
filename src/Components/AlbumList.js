import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import axios from 'axios';

export default class AlbumList extends Component {
    render() {
        return (
            <React.Fragment>
                <article className="albumList">
                    <h2>AlbumList</h2>
                </article>
            </React.Fragment>
        );
    }
}
