import React, {Component} from 'react';
import {FlatList, Text, ScrollView, View} from 'react-native';
import {list as listSelector} from "../../redux/selectors/users";
import {connect} from 'react-redux';

class Storage extends Component {
  static navigationOptions = {
    title: 'Storage Redux',
  };

  constructor(props) {
    super(props);

    this.state = {items: []};
  }

  render() {
    const {users} = this.props;
    const {items} = this.state;
    return (
      <ScrollView>
        <View>
          <Text>
            Users {users.length}
          </Text>
        </View>
        <FlatList
          data={items}
          keyExtractor={(item) => item.email}
          renderItem={({item}) => <Text>{item.email}</Text>}
        />
      </ScrollView>
    )
  }
}

const mapStateToProps = state => {
  return {
    users: listSelector(state),
  }
};

export default connect(mapStateToProps, null)(Storage);
