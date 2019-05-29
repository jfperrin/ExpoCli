import React, {Component} from 'react';
import {View, TextInput, Button, FlatList} from 'react-native';
import {connect} from 'react-redux';
import ListItem from './ListItem';
import {addPlace} from '../../redux/actions/place';
import styles from './styles';

class Main extends Component {
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
    return (
      <FlatList style={styles.listContainer}
                data={this.props.places}
                keyExtractor={(item, index) => index.toString()}
                renderItem={info => console.log('info', info) || (
                  <ListItem placeName={info.item.value} />
                )}
      />
    )
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput placeholder="Search Places" style={styles.placeInput} value={this.state.placeName} onChangeText={this.placeNameChangeHandler}/>
          <Button title='Add' style={styles.placeButton} onPress={this.placeSubmitHandler}/>
        </View>
        <View style={styles.listContainer}>
          {this.placesOutput()}
        </View>
      </View>
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