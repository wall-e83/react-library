export const oktaConfig = {
    clientId: '0oab4vicyxofz360D5d7',
    issuer: 'https://dev-58222043.okta.com/oauth2/default',
    redirectUri: 'http://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true,
}