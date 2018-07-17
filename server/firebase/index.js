const admin = require('firebase-admin');

const firebase = admin.initializeApp({
  credential: admin.credential.cert(JSON.parse(process.env.FIREBASE))
});

export default firebase;
