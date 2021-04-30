import React, { Component } from 'react';
import { Text, View, ScrollView, FlatList } from 'react-native';
import { Card } from 'react-native-elements';
import { DONORS } from '../shared/Donors.js';

function RenderDonor({donor}) {

    if (donor) {
        return (
            <Card
                featuredTitle={donor.name}
                image={require('./images/image1.jpg')}
                containerStyle={{margin: 0}}
            >
                <Text style={{marginTop: 20, textAlign: 'center'}}> Age: {donor.age}</Text>
                <Text style={{textAlign: 'center'}}> Hair: {donor.hairColor}</Text>
                <Text style={{marginBottom: 20, textAlign: 'center'}}> Height: {donor.height}</Text>
                <Text style={{marginLeft: 30, fontSize: 24}}>{donor.description}</Text>
            </Card>
        );
    }
    return <View />;
}

class DonorInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            donors: DONORS
        };
    }

    static navigationOptions = {
        title: 'Donor Information'
    }

    render() {
        const donorId = this.props.navigation.getParam('donorId');
        const donor = this.state.donors.filter(donor => donor.id === donorId)[0];
        return <RenderDonor donor={donor} />;
    }
}

export default DonorInfo;