import { firebase, googleAuthProvider } from "../firebase/firebase-config";
import { finishLoading, startLoading } from "./ui";
import Swal from 'sweetalert2'
import { types } from "../types/types";

export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {
        dispatch(startLoading())
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(({ user }) => {
                dispatch(login(user.uid, user.displayName))
                dispatch(finishLoading())
            })
            .catch(e => {
                dispatch(finishLoading())
                Swal.fire({
                    title: 'Error!',
                    text: e.message,
                    icon: 'error',
                    confirmButtonText: 'Acept'
                })
            })
    }
}

export const startRegisterWithEmailPasswordName = (email, password, name) => {
    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(async ({ user }) => {
                await user.updateProfile({ displayName: name })

                dispatch(login(user.uid, user.displayName))
            })
            .catch(e => {
                Swal.fire({
                    title: 'Error!',
                    text: e.message,
                    icon: 'error',
                    confirmButtonText: 'Acept'
                })
            })
    }
}

export const startGoogleLogin = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup(googleAuthProvider)
            .then(({ user }) => {
                dispatch(login(user.uid, user.displayName))
            })
    }
}

export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
})

export const startLogout = () => {
    return async (dispatch) => {
        await firebase.auth().signOut()
        dispatch(logout())
    }
}

export const logout = () => ({
    type: types.logout,
})