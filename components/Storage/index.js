import React, {Component} from 'react';
import {View, Text} from 'react-native';

class Storage extends Component {
  constructor(props) {
    super(props);

    this.state = {count: 0};
  }

  componentDidMount() {
    global.storage
      .load({
        key: 'usersList',

        // autoSync (default: true) means if data is not found or has expired,
        // then invoke the corresponding sync method
        autoSync: true,

        // syncInBackground (default: true) means if data expired,
        // return the outdated data first while invoking the sync method.
        // If syncInBackground is set to false, and there is expired data,
        // it will wait for the new data and return only after the sync completed.
        // (This, of course, is slower)
        syncInBackground: true,

        // you can pass extra params to the sync method
        // see sync example below
        syncParams: {
          extraFetchOptions: {
            // blahblah
          },
          someFlag: true
        }
      })
      .then(ret => {
        // found data go to then()
        this.setState({count: ret.length});
      })
      .catch(err => {
        // any exception including data not found
        // goes to catch()
        console.warn(err.message);
        switch (err.name) {
          case 'NotFoundError':
            // TODO;
            break;
          case 'ExpiredError':
            // TODO
            break;
        }
      });
  }

  render() {
    const {count} = this.state;
    return (<View>
      <Text>
        Storage {count}
      </Text>
    </View>)
  }
}

export default Storage;
