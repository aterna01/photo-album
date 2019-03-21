import React, { Component } from 'react';
import axios from 'axios';

export default class PhotoList extends Component {
    state = {
        albumId: this.props.selectedAlbum,
        photos: []
    };

    //This method is used because this.state.photos depends on changes in props over time.
    // Any time the current album changes,
    // Reset any parts of state that are tied to that album.
    static getDerivedStateFromProps(props, state) {
        if (props.selectedAlbum !== state.albumId) {
            console.log('This is props.selectedAlbum: ' + props.selectedAlbum);
            console.log('This is state.albumId: ' + state.albumId);
            return {
                albumId: props.selectedAlbum
            };
        }
        return null;
    }

    //After this.state.albumId is updated use this method to call server
    // Then filter response which is a Json and update this.state.photos
    //WARNING => DO NOT USE: if (prevState.selectedAlbum !== this.state.albumId) {
    //This will call server in an infinite loop
    componentDidUpdate(prevProps, prevState) {
        console.log('This is state.albumId: ' + this.state.albumId);
        if (prevProps.selectedAlbum !== this.state.albumId) {
            axios
                .get(
                    `https://jsonplaceholder.typicode.com/photos?albumId=${
                        this.state.albumId
                    }`
                )
                .then(response => {
                    console.log(
                        'This is axios response for photos: ',
                        response
                    );
                    this.setState({
                        photos: response.data
                    });
                })
                .catch(err => console.log(err));
        }
    }

    render() {
        return (
            <React.Fragment>
                <article className="photoList">
                    <h2>PhotoList</h2>
                    {this.state.photos.map(item => {
                        return <img key={item.id} src={item.thumbnailUrl} />;
                    })}
                </article>
            </React.Fragment>
        );
    }
}
