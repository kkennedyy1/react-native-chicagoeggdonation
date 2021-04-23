import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import { DONORS } from '../shared/Donors.js';

function RenderDonor({donor}) {

    if (donor) {
        return (
            <Card
                featuredTitle={donor.name}
                image={require('./images/image1.jpg')}
            >
                <Text style={{margin: 10}}>
                    {donor.description}
                </Text>
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