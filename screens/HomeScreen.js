import {
  Button,
  StyleSheet,
  TextInput,
  View
} from 'react-native'

// SignUp.js
import React from 'react'

export default class SignUp extends React.Component {
  state = {
    username: '', password: '', email: ''
  }
  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }
  signUp = async () => {
    const { username, password, email, phone_number } = this.state
    try {
      // here place your signup logic
      console.log('user successfully signed up!: ', success)
    } catch (err) {
      console.log('error signing up: ', err)
    }
  }
 
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
      <View style={styles.square}>
      <View style={styles.oo}>
        <TextInput
          style={styles.input}
          placeholder='Username'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('username', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Password'
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('password', val)}
        />

        <TextInput
          style={styles.input}
          placeholder='Email'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('email', val)}
        />


        </View>
        </View>
        
        <View style={styles.ooc}>
        <Button
          title='Sign Up'
          onPress={() => navigate('Welcome', {username: this.state.username, email:this.state.email})}
        />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    width: 150,
    height: 40,
    backgroundColor: '#42A5F5',
    margin: 15,
    marginLeft: 40,
    padding: 8,
    color: 'white',
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '500',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  square: {
    width: 250,
    height: 250,
    backgroundColor: 'rebeccapurple',
    borderWidth: 3.5,
    borderColor: '#000000',
    transform: [
      {rotate: '45deg'}
    ]
  },
oo:{
  transform: [
    {rotate: '315deg'}
  ]
},
ooc:{
  marginTop: 100,
  width: 350,
}
})
