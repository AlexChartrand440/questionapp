import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  Text,
  TouchableHighlight,
  TextInput
} from 'react-native'

export default class question extends Component {

  constructor(props){
    super(props)
    this.state = {
    textdata: ''
    }
  }
  onButtonPress(){
    this.props.navigator.push({
      id: 'question',
      passProps: this.state.textdata
    })
  }
  render(){
    return(
      <View style={styles.container}>
      <Text style={styles.welcome}>Hello</Text>
        <TouchableHighlight
          style={styles.button}
          onPress={this.onButtonPress.bind(this)}>
          <Text style={styles.welcome}>Next</Text>
        </TouchableHighlight>
        <TextInput
        style={styles.input}
          value={this.state.textdata}
          onChangeText={(textdata) => {
            this.setState({textdata})
          }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  input: {
    height: 50,
    width: 1000,
    padding: 15,
    backgroundColor: '#70c2d4',
    color: 'white'
  }
})
