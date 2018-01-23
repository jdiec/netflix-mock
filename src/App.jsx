import React, { Component} from 'react';
import Navbar from './components/Navbar';
import MyList from './components/MyList';
import Recommendations from './components/Recommendations';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        //Uncomment this section and set the initial state accordingly
        //if mock server is not working
        //
        // let myList = [
        //     {
        //     "title": "Futurama",
        //     "id": 1,
        //     "img": "http://cdn1.nflximg.net/webp/7621/3787621.webp"
        //     },
        //     {
        //     "title": "The Interview",
        //     "id": 2,
        //     "img": "http://cdn1.nflximg.net/webp/1381/11971381.webp"
        //     },
        //     {
        //     "title": "Gilmore Girls",
        //     "id": 3,
        //     "img": "http://cdn1.nflximg.net/webp/7451/11317451.webp"
        //     }
        // ];
        // let recommendations = [
        //     {
        //     "title": "Family Guy",
        //     "id": 4,
        //     "img": "http://cdn5.nflximg.net/webp/5815/2515815.webp"
        //     },
        //     {
        //     "title": "The Croods",
        //     "id": 5,
        //     "img": "http://cdn3.nflximg.net/webp/2353/3862353.webp"
        //     },
        //     {
        //     "title": "Friends",
        //     "id": 6,
        //     "img": "http://cdn0.nflximg.net/webp/3200/9163200.webp"
        //     }
        // ];

        this.state = {
            myList: [],
            recommendations: []
        };
        this.removeMyListItem = this.removeMyListItem.bind(this);
        this.addRecommendationToMyList = this.addRecommendationToMyList.bind(this);
    }

    componentWillMount() {
        const FETCH_URL = 'http://localhost:8000/mock';
        const options = {
            method: 'GET',
            headers:  {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        };
        fetch(FETCH_URL, options)
            .then(response => response.json())
            .then(json => {
                const { myList, recommendations } = json;
                this.setState({myList, recommendations});
            })
            .catch(error => {
                console.log('Error fetching data...', error);
            });
    }

    removeMyListItem(movie) {
        let { myList, recommendations } = this.state;
        myList = myList.filter(item => {
            return movie.id !== item.id;
        });
        recommendations.push(movie);
        this.setState({myList, recommendations});
    }

    addRecommendationToMyList(movie) {
        let { recommendations, myList } = this.state;
        recommendations = recommendations.filter(rec => {
            return rec.id !== movie.id;
        });
        myList.push(movie);
        this.setState({recommendations, myList});
    }

    render() {
        return (
            <div>
                <Navbar />
                <div style={{padding:'30px'}} />
                <MyList 
                    myList={ this.state.myList} 
                    recommendations={ this.state.recommendations }
                    removeMyListItem={ this.removeMyListItem } />
                <Recommendations 
                    recommendations={ this.state.recommendations } 
                    myList={ this.state.myList }
                    addRecommendationToMyList={ this.addRecommendationToMyList }/>
                <div style={{padding: '30px'}}/>
            </div>
        );
    }
}

export default App;