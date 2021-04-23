import React, { Component } from 'react';
import  { ScrollView, Text } from 'react-native';
import { Card } from 'react-native-elements';

class Contact extends Component {

    static navigationOptions = {
        title: 'Contact Us'
    }

    render() {
        return (
            <ScrollView>
                <Card
                    title="Contact Information"
                    wrapperStyle={{margin: 20}}    
                >
                    <Text> 606 Eggselent Ave</Text>
                    <Text> Chicago, IL 60637</Text>
                    <Text  style={{marginBottom: 10}}> U.S.A.</Text>
                    <Text> Phone: 1-847-555-1234</Text>
                    <Text> Email: contact@chicagoeggdonation.co</Text>
                </Card>
            </ScrollView>
        )
    }
}

export default Contact;