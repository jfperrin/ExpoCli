import React, {Component} from 'react';
import {View, Text} from 'react-native';
import { connect } from 'react-redux';
import {getUsersList} from "../../redux/actions/users";
import {list as listSelector} from "../../redux/selectors/users";

class Users extends Component {
  static navigationOptions = {
    title: 'Links',
  };

  componentDidMount() {
    const { get } = this.props;
    get();
  }

  render() {
    const { users } = this.props;
    return (
      <View>
        <Text>
          Users {users.length}
        </Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: listSelector(state),
  }
};

const mapDispatchToProps = dispatch => {
  return {
    get: () => {
      dispatch(getUsersList())
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);