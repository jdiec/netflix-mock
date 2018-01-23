import React, { Component } from 'react';
import '../App.css';

class MyList extends Component {

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
                                    <div 
                                        onClick={ () => this.removeMyListItem(movie) }
                                        className="movie-menu">
                                        <p className="movie-text">
                                            { movie.title }
                                        </p>
                                        <span className="movie-remove">
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