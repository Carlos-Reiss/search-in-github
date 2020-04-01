import React, { Component } from 'react';
import { View, Text } from 'react-native';

// import { Container } from './styles';

export default class User extends Component {
  componentDidMount() {
    const { navigation, route } = this.props;
    navigation.setOptions({ title: route.params.user.name });
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Users Page</Text>
      </View>
    );
  }
}
