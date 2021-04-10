import React, {Component} from 'react';
import Directory from './DirectoryComponent';
import { DONORS } from '../shared/Donors';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            donors: DONORS
        };
    }

    render() {
        return <Directory donors={this.state.donors} />
    }
}

export default Main;