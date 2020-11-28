import React from 'react';
import { getSubredditData } from "./api/reddit-api";
import { Post } from "./components/Post";
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: [] }
    }

    componentWillMount() {
        getSubredditData().then(res => {
            this.setState({ apiResponse: res })
        });
    }

    render() {
        return (
            <div className="App">
                <div className="search-container">
                    <p>{this.state.apiResponse.length}</p>
                </div>
                <div className="posts-container">
                    <div className="posts">
                        {this.state.apiResponse.map(post => (<Post />))}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
