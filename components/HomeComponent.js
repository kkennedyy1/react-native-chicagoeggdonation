import React, {Component} from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';
// import { ListItem } from 'react-native-elements';

class Home extends Component {

    render() {
        return (
            <ScrollView style={styles.container}>
                <Text style={styles.text}>Chicago Egg Donation</Text>
            </ScrollView>
        );
    } 
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'pink',
    },
    text: {
        textAlign: 'center',
        marginTop: 100,
        fontSize: 32,
        fontStyle: 'italic',
        color: '#383838'
    }
});

export default Home;