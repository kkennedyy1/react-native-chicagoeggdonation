import React, {Component} from 'react';
import { FlatList, View, Text, StyleSheet, ScrollView } from 'react-native';
import { ListItem } from 'react-native-elements';
import { DONORS } from '../shared/Donors.js';

class Directory extends Component {

    constructor(props) {
        super(props);
        this.state = {
            donors: DONORS
        };
    }

    static navigationOptions = {
        title: 'Directory'
    }

    render() {
        const { navigate } = this.props.navigation;
        const renderDirectoryItem = ({item}) => {
            return (
                <ListItem
                    title={item.name}
                    subtitle={item.description}
                    onPress={() => navigate('DonorInfo', { donorId: item.id })}
                    leftAvatar={{ source: require('./images/image7.jpg')}}
                />
            );
        };

        return (
            <FlatList
                data={this.state.donors}
                renderItem={renderDirectoryItem}
                keyExtractor={item => item.id.toString()}
            />
        );
    }
}

export default Directory;
