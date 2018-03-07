import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
    View,
    StyleSheet,
    Text
} from 'react-native'
import _ from 'lodash'

import { validate, isEmpty } from '../utils/validate'
import Input from './Input'
import Button from './Button'

import styles from './styles/InputFormStyles'

class InputForm extends Component {
    constructor(props) {
        super(props)
        const fields = props.fields
        const error = props.error
        const state = {}

        fields.forEach((field) => {
            let { key, type, value } = field
            state[key] = { type, value }
        })

        state['error'] = error
        this.state = state
        this.onSubmit = this.onSubmit.bind(this)

    }

    componentWillReceiveProps(nextProps) {
        const { error } = nextProps

        if(error) {
            this.setState({ error })
        }
    }

    onSubmit() {
        const data = this.state;
        const result = validate(data);
        if(!result.success) this.setState({ error: result.error })
        else this.props.onSubmit(this.extractData(data))
    }

    extractData(data) {
        let result = {}
        Object.keys(data).forEach((key) => {
            if (key !== "error"){
                let { value } = data[key];
                result[key] = value;
            }
        })

        return result
    }

    onChange(key, text) {
        const state = this.state;
        state[key]['value'] = text;
        this.setState(state);
    }

    render() {
        const { fields, buttonLabel } = this.props
        return (
            <View style={styles.container}>
                <View style={styles.inputContainer} >
                {
                    fields.map((data, index) => {
                        let { key, label, placeholder, secureTextEntry } = data
                        return (
                            <Input
                                key={key}
                                label={label}
                                placeholder={placeholder}
                                onChangeText={(text) => this.onChange(key, text)}
                                secureTextEntry={secureTextEntry}
                                value={this.state[key]['value']}
                                error={this.state.error[key]}
                            />
                        )
                    })
                }
                </View>
                <View style={[styles.section, styles.centering]}>
                    <Button text={buttonLabel} onPress={this.onSubmit} />
                </View>
                {
                    (!isEmpty(this.state.error['general'])) &&
                    <Text style={styles.error}>{this.state.error['general']}</Text>
                }
            </View>
        )
    }
}

InputForm.propTypes = {
    fields: PropTypes.array.isRequired,
    buttonLabel: PropTypes.string,
    onSubmit: PropTypes.func.isRequired,
    error: PropTypes.object
}

export default InputForm