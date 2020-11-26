import React from 'react';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: " "}
    }

    callAPI() {
        fetch("http://localhost:3001/testAPI")
            .then(res => res.text())
            .then(res => this.setState( { apiResponse: res }))
    }

    componentWillMount() {
        this.callAPI();
    }

    render() {
        return (
            <div className="App">
                <div className="search-container">
                    <p>{this.state.apiResponse}</p>
                </div>
                <div className="posts-container">
                    <div className="posts">
                        <div className="card-test">
                            fsdfdsfs
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
