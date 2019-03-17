import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import axios from 'axios';

export default class PhotoList extends Component {
    render() {
        return (
            <React.Fragment>
                <article className="photoList">
                    <h2>PhotoList</h2>
                </article>
            </React.Fragment>
        );
    }
}
