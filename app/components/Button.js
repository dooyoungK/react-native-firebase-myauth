import React from 'react'
import PropTypes from 'prop-types'

import {
    View,
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native'

import defaultStyles from './styles/ButtonStyles'


const Button = (props) => {
    const { text, onPress, styles } = props
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[defaultStyles.container, styles]}>
                <Text style={defaultStyles.text}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}


Button.propTypes = {
    text: PropTypes.string,
    onPress: PropTypes.func.isRequired,
    styles: PropTypes.number
}

export default Button