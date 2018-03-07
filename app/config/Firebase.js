import * as firebase from 'firebase'
import AppConfig from './AppConfig'

firebase.initializeApp(AppConfig.firebaseConfig)

export default firebase