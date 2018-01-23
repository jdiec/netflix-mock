import React, { Component } from 'react';
import '../App.css';

class MyList extends Component {

    getMyList() {
        // const FETCH_URL = 'http://localhost:3000/mockData/myList.json';//'../mockData/myList';
        // const myOptions = {
        //     method: 'GET',
        //     headers:  {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     }
        // };
        // fetch(FETCH_URL, myOptions)
        //     .then(response => response.json())
        //     .then(json => {
        //         console.log('json', json);
        //         const { myList } = json;
        //         this.setState({ myList });
        //     })
        //     .catch(error => {
        //         console.log('Error fetching myList', error);
        // });
    }

    removeMyListItem(movie) {
        this.props.removeMyListItem(movie);
    }

    render() {
        console.log('this.props in myList', this.props);
        return (
            <div 
                className="MyList container">
                <h4 className="section-title">My List ({this.props.myList.length})</h4>
                <hr />
                <div className="content-wrapper container">
                { 
                    this.props.myList.length > 0
                    ? this.props.myList.map((movie, index) => {
                        return (
                            <div 
                                className="movie" 
                                key={ movie.id }>
                                <div className="movie-content">
                                    <img 
                                        className="img-responsive"
                                        src={ movie.img } 
                                        alt={ movie.title }/>
                                    <div className="movie-menu">
                                        <p className="movie-text">
                                            { movie.title }
                                        </p>
                                        <span 
                                            className="movie-remove"
                                            onClick={ () => this.removeMyListItem(movie) }>
                                            <i className="glyphicon glyphicon-remove"></i>
                                            Remove
                                        </span>
                                    </div>
                                </div>
                            </div>
                        );
                    }) 
                    : <div>Your list is empty.</div> 
                }
                </div>
            </div>
        );
    }
}

export default MyList;