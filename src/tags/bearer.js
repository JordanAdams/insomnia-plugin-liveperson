const { fetchBearer } = require('../liveperson');

module.exports = {
  name: 'liveperson_bearer',
  displayName: 'LivePerson Bearer Token',
  args: [
    { displayName: 'Account ID', type: 'string' }, 
    { displayName: 'Username', type: 'string' }, 
    { displayName: 'App Key', type: 'string' },
    { displayName: 'App Secret', type: 'string' },
    { displayName: 'Token', type: 'string' },
    { displayName: 'Token Secret', type: 'string' }
  ],
  run: async (context, ...args) => fetchBearer(...args)
}
