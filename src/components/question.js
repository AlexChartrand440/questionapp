import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  Text,
  TouchableHighlight,
  TextInput
} from 'react-native'

export default class Question extends Component {

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
      <Text style={styles.questiontext}>What Is The Length Of A Football Field?</Text>
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
  questiontext: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  choice: {
    fontSize: 10,
    textAlign: 'center',
    margin: 10
  }
})
