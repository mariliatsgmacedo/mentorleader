import firebase from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import 'firebase/firestore';
import { config } from '../../config/config';

export const Firebase = firebase.initializeApp(config.firebase);
export const Providers = {
    google: new GoogleAuthProvider()
}
export const auth = getAuth();

