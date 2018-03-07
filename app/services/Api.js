import firebase from '../config/Firebase'


const auth = firebase.auth()
const database = firebase.database()

export function login(data, callback) {
    const { email, password } = data;
    auth.signInWithEmailAndPassword(email, password)
        .then((user) => getUser(user, callback))
        .catch((error) => callback(false, null, error))
}

export function getUser(user, callback) {
    database.ref('users')
            .child(user.uid)
            .once('value')
            .then(function(snapshot) {
                const exists = (snapshot.val() !== null)

                if(exists) user = snapshot.val()

                const data = { exists, user }
                callback(true, data, null)
            })
            .catch((error) => callback(false, null, error))
}