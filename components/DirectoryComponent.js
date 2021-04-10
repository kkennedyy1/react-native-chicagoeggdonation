import React from 'react';
import { Flatlist } from 'react-native';
import { ListItem } from 'react-native-elements';

function Directory(props) {

    const renderDirectoryItem = ({item}) => {
        return (
            <ListItem 
                title={item.name}
                subtitle={item.description}
                leftAvatar={{ source: require('./images/image1.jpg')}}
            />
        )
    };

    return (
        <Flatlist
            data={props.donors}
            renderItem={renderDirectoryItem}
            keyExtractor={item => item.id.toString()}
        />
    );
}

export default Directory;