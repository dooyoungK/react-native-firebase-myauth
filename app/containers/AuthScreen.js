import React, { Component } from 'react'
import {
    View,
    ActivityIndicator,
    StyleSheet
} from 'react-native'
import { connect } from 'react-redux'

import * as AuthActions from '../store/auth/actions'
import * as selectors from '../store/auth/reducer'

import SafeScreen from './SafeScreen'
import HomeScreen from './HomeScreen'
import InputForm from '../components/InputForm'

type Props = {};

const fields = [
{
    key: 'email',
    label: 'Email address: ',
    placeholder: "abc@example.com",
    value: "",
    secureTextEntry: false,
    type: "email"
},
{
    key: 'password',
    label: 'Password: ',
    placeholder: "Password",
    value: "",
    secureTextEntry: true,
    type: "password"
}]
const error = { general: "", email: "", password: "" }

class AuthScreen extends Component<Props> {
    constructor() {
        super()
        this.state = {
            error,
            showSafe: false,
            showHome: false,
            isNew: false
        }

        this._submit = this._submit.bind(this)
        this._success = this._success.bind(this)
        this._error = this._error.bind(this)

    }

    _success = (data) => {
        console.log('login success, ', data)
        if(data.user.admin) {
            // Take this user to Safe screen.
            this.setState({ showSafe: true })
        } else {
            this.setState({ showHome: true, isNew: data.user.isNew })
        }
    }

    _error = (error) => {
       console.warn('login error, ', error)
        let errObj = this.state.error

        if (error.code == 'auth/wrong-password') {
            errObj['password'] = error.message
            errObj['general'] = ""
            this.setState({ error: errObj })
        } else {
            errObj['general'] = error.message
            this.setState({ error: errObj })
        }

    }

    _submit = (data) => {
        this.props.login(data, this._success, this._error)
    }

    _onInputChange = (values) => {
        this.setState({ input: values })
    }

    _toggleClose = () => {
        this.setState({ showHome: true, showSafe: false, isNew: false })
    }

    renderSafeScreen() {
        return (
            <SafeScreen  onClosePress={this._toggleClose} />
        )
    }

    renderHomeScreen() {
        return (
            <HomeScreen isNew={this.state.isNew} />
        )
    }

    renderAuthScreen() {
        return (
            <InputForm
                fields={fields}
                buttonLabel={'Log in'}
                onSubmit={this._submit}
                error={this.state.error}
            />
        )
    }

    render() {
        const { showSafe, showHome } = this.state
        return(
            <View style={styles.container}>
                {showSafe && this.renderSafeScreen()}
                {showHome && this.renderHomeScreen()}
                {!showSafe && !showHome && this.renderAuthScreen()}
            </View>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        login: (data, s, e) => dispatch(AuthActions.login(data, s, e))
    }
}

export default connect(null, mapDispatchToProps)(AuthScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
});
