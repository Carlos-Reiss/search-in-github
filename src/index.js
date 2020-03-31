import React from 'react';
import './config/reactotronConfig';
import 'react-native-gesture-handler';
import { StatusBar } from 'react-native';
import Routes from './routes';

export default function FirstApp() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#666" />
      <Routes />
    </>
  );
}
