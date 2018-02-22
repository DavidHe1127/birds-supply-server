import Cognito from './cognito';
import config from './config';

const auth = new Cognito({
  region: config.region,
  cognitoUserPoolId: config.userPoolId,
  tokenUse: 'access'
});

export default auth;
