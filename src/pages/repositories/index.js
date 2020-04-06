import React, { Component } from 'react';
import { WebView } from 'react-native-webview';
// import { Container } from './styles';

export default class repositories extends Component {
  state: {};

  render() {
    const { route } = this.props;
    const { params } = route;
    const { starred } = params;
    return <WebView source={{ uri: starred.html_url }} style={{ flex: 1 }} />;
  }
}
