import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/messaging';

// NOTE: These are placeholder values as per the README. For the app to function fully with Firebase,
// these must be replaced with a real Firebase project configuration from the Firebase Console.
const firebaseConfig = {
  apiKey: "AIza...",
  authDomain: "your-project-id.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:12345..."
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Export Firebase services for use throughout the app
export const auth = firebase.auth();
export const db = firebase.firestore();

// messaging() can throw if not supported, so it's best to export it conditionally.
let messagingInstance: firebase.messaging.Messaging | null = null;
try {
  if (firebase.messaging.isSupported()) {
    messagingInstance = firebase.messaging();
  }
} catch (e) {
  console.warn("Firebase Messaging is not supported in this browser.", e);
}
export const messaging = messagingInstance;
