import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
    TextInput,
    View,
    Text,
} from 'react-native'

import styles from './styles/InputStyles'
import { isEmpty } from '../utils/validate'

class Input extends Component {
    render() {
        const { label, onChangeText, secureTextEntry, error } = this.props

        return (
            <View style={styles.container}>
                <View style={styles.row}>
                    {label && <Text style={styles.label}>{label}</Text>}
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        secureTextEntry={secureTextEntry}
                        value={this.props.value}
                    />
                </View>
                <View style={styles.errorContainer}>
                 {
                    (!isEmpty(error)) &&
                    <Text style={styles.error}>
                        {error}
                    </Text>
                }
                </View>
            </View>
        )
    }
}

Input.propTypes = {
    label: PropTypes.string,
    onChangeText: PropTypes.func.isRequired,
    value: PropTypes.string,
    error: PropTypes.string
}

export default Input


