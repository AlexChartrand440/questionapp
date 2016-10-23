import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  Text,
  TouchableHighlight,
  ListView
} from 'react-native'

export default class Question extends Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['100', '200', 'Spaghetti']),
    };
  }

  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.questiontext}>What Is The Length Of A Football Field?</Text>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text style={styles.choice}>{rowData}</Text>} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 50,
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
