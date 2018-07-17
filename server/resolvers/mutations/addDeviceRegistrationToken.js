import firebase from '../../firebase';

const db = firebase.firestore();

const addDeviceRegistrationToken = async (obj, args, ctx) => {
  const {value: token} = args.input;

  let tokenDoc = await db
    .collection('users')
    .doc(ctx.user.sub)
    .get();

  let tokens = [];

  if (tokenDoc.exists) {
    tokens = [...tokenDoc.data.registration_tokens, token];
  } else {
    tokens.push(token);
  }

  await db
    .collection('users')
    .doc(ctx.user.sub)
    .set({
      registration_tokens: tokens,
    });

  return {
    deviceRegistrationToken: {
      value: token,
    },
  };
};

module.exports = addDeviceRegistrationToken;
