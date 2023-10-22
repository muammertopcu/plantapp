import React from 'react';
import WebView from 'react-native-webview';

// TODO: Fix this ts-ignore
// @ts-ignore
const Webview = ({route}) => {
  return <WebView source={{uri: route.params.uri}} />;
};

export default Webview;
