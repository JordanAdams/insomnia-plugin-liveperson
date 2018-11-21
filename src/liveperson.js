const axios = require('axios');

const fetchDomain = async (accountId, service) => {
  const url = `https://api.liveperson.net/api/account/${accountId}/service/${service}/baseURI.json`;

  const { data } = await axios.get(url, { params: { version: '1.0' } }); 
  return data.baseURI;
};

const fetchBearer = async (accountId, username, appKey, secret, accessToken, accessTokenSecret) => {
  const domain = await fetchDomain(accountId, 'agentVep');

  const url = `https://${domain}/api/account/${accountId}/login`;
  const credentials = { username, appKey, secret, accessToken, accessTokenSecret };

  const { data } = await axios.post(url, credentials, { params: { v: '1.3' } });

  return data.bearer;
};

module.exports = { fetchDomain, fetchBearer };
