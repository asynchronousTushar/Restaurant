import React, { Component } from 'react';
import List from '../Body/List';

class Home extends Component {
    render() {
        document.title = "Grand Restaurant";
        return (
            <div>
                <List />
            </div>
        );
    }
}

export default Home;