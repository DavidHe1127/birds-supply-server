const admin = require('firebase-admin');
const serviceAccountKeys = require('./notifications_service_account_key');

const firebase = admin.initializeApp({
  credential: admin.credential.cert(serviceAccountKeys)
});

export default firebase;
