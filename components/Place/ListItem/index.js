import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const ListItem = (props) => {
  return (
    <TouchableOpacity>
      <View style={styles.listItem}>
        <Text>{props.placeName}</Text>
      </View>
    </TouchableOpacity>
  );
};


export default ListItem;