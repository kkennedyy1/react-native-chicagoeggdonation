import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Button } from 'react-native';
import { Card, CardHeader } from 'react-native-elements';
import { DONORS } from '../shared/Donors.js';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            donors: DONORS
        };
    }

    static navigationOptions = {
        title: 'Home'
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <Text style={styles.text}>Chicago Egg Donation</Text>
                <Card
                    featuredTitle='About Us'
                    image={require('./images/aboutus.jpg')}
                >
                </Card>
                <Card
                    featuredTitle='Find a Donor'
                    image={require('./images/image3.jpg')}
                >
                    <Text style={{margin: 10, textAlign: 'center'}}>Search and save your favorite egg donors</Text>
                </Card>
                <Card
                    featuredTitle='Become a Donor'
                    image={require('./images/image4.jpg')}
                >
                    <Text style={{margin: 10, textAlign: 'center'}}> Answer questions to see if you qualify</Text>
                </Card>
            </ScrollView>
        );
    } 
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#aaffc3',
    },
    text: {
        textAlign: 'center',
        marginTop: 35,
        marginBottom: 35,
        fontSize: 32,
        fontStyle: 'italic',
        color: '#383838'
    }
});

export default Home;