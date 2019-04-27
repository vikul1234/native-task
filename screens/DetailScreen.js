import { Image, StyleSheet, View } from 'react-native';

import { ExpoLinksView } from '@expo/samples';
import React from 'react';

export default class DetailScreen extends React.Component {
  static navigationOptions = {
    title: 'Photo',
  };

  render() {
    return (
      <View style={styles.container}>
        
        <Image
  style={{width: '100%', height: 200,resizeMode : 'stretch' }}
  source={require('./cart.png')}  
/> 
      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  
});
