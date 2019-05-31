import React, {Component} from 'react';
import {ScrollView, View, TextInput, Button, FlatList} from 'react-native';
import {connect} from 'react-redux';
import ListItem from './ListItem';
import {addPlace} from '../../redux/actions/place';
import styles from './styles';

class Main extends Component {
  static navigationOptions = {
    title: 'Places',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  constructor(props) {
    super(props);

    this.state = {
      placeName: '',
    }
  }

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === '') {
      return;
    }
    this.props.add(this.state.placeName);
  };

  placeNameChangeHandler = (value) => {
    this.setState({
      placeName: value
    });
  };

  placesOutput = () => {
    return (<FlatList style={styles.listContainer}
                      data={this.props.places}
                      keyExtractor={(item, index) => index.toString()}
                      renderItem={info => (
                        <ListItem placeName={info.item.value}/>
                      )}
    />)
  };

  render() {
    const {navigation} = this.props;

    return (
      <ScrollView style={styles.scrollViewContainer}>
        <View style={styles.listContainer}>
          {this.placesOutput()}
        </View>
        <View style={styles.inputContainer}>
          <TextInput placeholder="Search Places" style={styles.placeInput} value={this.state.placeName} onChangeText={this.placeNameChangeHandler}/>
          <Button title='Add' style={styles.placeButton} onPress={this.placeSubmitHandler}/>
        </View>
        <View style={styles.inputContainer}>
          <Button
            title="Go to Details"
            onPress={() => navigation.navigate('UsersStack')}
          />
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  return {
    places: state.places.places
  }
};

const mapDispatchToProps = dispatch => {
  return {
    add: (name) => {
      dispatch(addPlace(name))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Main)