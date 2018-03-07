import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'


type Props = {};

class HomeScreen extends Component<Props> {


    render() {
        return(
            <View style={styles.container}>
            <Text>This is Home screen, everybody can access here.</Text>
            <Text style={styles.welcome}>{this.props.isNew ? 'New to here? Please register to proceed.' : 'Hello world!'}</Text>
            </View>
        )
    }
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcome: {
    marginTop: 20
  }
});
