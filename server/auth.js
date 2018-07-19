import Cognito from './cognito';

const config = JSON.parse(process.env.AWS_COGNITO);

const auth = new Cognito({
  region: config.region,
  cognitoUserPoolId: config.userPoolId,
  tokenUse: 'access'
});

export default auth;
