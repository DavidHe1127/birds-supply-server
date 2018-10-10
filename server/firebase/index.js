const admin = require('firebase-admin');
import serviceAccountKeys from './notifications_service_account_key.json';

const firebase = admin.initializeApp({
  credential: admin.credential.cert(serviceAccountKeys)
});

export default firebase;
