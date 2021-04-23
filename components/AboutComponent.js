import React, { Component } from 'react';
import { Card, Text } from 'react-native-elements';

class About extends Component {

    static navigationOptions = {
        title: 'About Us'
    }

    render() {
        return (
            <Card title="Our Mission">
                <Text style={{margin: 10}}>
                    We present a curated database of the best donors across the midwestern United States, centered in the most American city of all - Chicago. We increase access to in-demand egg donors for the intended parents while promoting safe and ethical family building practices. The expert matchmakers on our staff personally verify each donor to make sure that they meet or exceed our high standards. We also present a platform for intended parents to share reviews on their experience with us.
                </Text>
            </Card>
        );
    }
}

export default About;