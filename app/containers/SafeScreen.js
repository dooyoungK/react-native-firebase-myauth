import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

import Button from '../components/Button'


type Props = {};

class SafeScreen extends Component<Props> {


    render() {
        return(
            <View style={styles.container}>
                <View style={styles.closeBtnContainer}>
                    <Button text={"X"} onPress={this.props.onClosePress} styles={styles.closeBtn} />
                </View>
                <Text>This is safe screen, restricted to specific users.</Text>
            </View>
        )
    }
}

export default SafeScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  closeBtnContainer: {
    position: 'absolute',
    right: 0,
    top: 30
  },
  closeBtn: {
    backgroundColor: 'transparent',
    width: 30,
    height: 30
  }
});
