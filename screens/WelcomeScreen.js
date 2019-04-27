import { Button, ScrollView, StyleSheet, Text } from 'react-native';

import { ExpoLinksView } from '@expo/samples';
import React from 'react';

export default class WelcomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };

  render() {
    const {navigate} = this.props.navigation;
    const {state} = this.props.navigation;
      console.log(state.params.username);
    return (
      <ScrollView style={styles.container}>
        {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */}
        <Text style={styles.textStyle}>
                Welcome to my page
               
             </Text>
             <Text style={styles.textStyle}>
          Name : {state.params.username}
        </Text>

        <Text style={styles.textStyle}>
          Email : {state.params.email}
        </Text>

             <Button
        title="Image View"
                  // onPress={this.signUp}
        onPress={() => navigate('Detail')}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  textStyle: {
    color: '#000',
    textAlign: 'center',
    fontSize: 20

  },
});
