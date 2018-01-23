import React, { Component } from 'react';
import '../App.css';

class Recommendations extends Component {

    addRecommendationToMyList(movie) {
        this.props.addRecommendationToMyList(movie);
    }

    render() {
        return (
            <div
                className="Recommendations container">
                <h4 className="section-title">Recommendations ({this.props.recommendations.length})</h4>
                <hr /> 
                <div className="content-wrapper container">   
                {
                    this.props.recommendations.length > 0
                    ?
                    this.props.recommendations.map(movie => {
                        return (
                            <div 
                                className="movie"
                                key={ movie.id }>
                                <div className="movie-content">
                                    <img 
                                        src={ movie.img }
                                        alt={ movie.title }/>
                                    <div 
                                        onClick={ () => this.addRecommendationToMyList(movie) }
                                        className="movie-menu">
                                        <p className="movie-text">
                                            { movie.title }
                                        </p>
                                        <span 
                                            className="movie-add">
                                            <i className="glyphicon glyphicon-plus"></i>
                                            Add
                                        </span>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                    :
                    <div>No Recommendations...</div>
                }
                </div>
            </div>
        );
    }
}

export default Recommendations;