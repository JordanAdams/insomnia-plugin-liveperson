const { fetchDomain } = require('../liveperson');

module.exports = {
  name: 'liveperson_domain',
  displayName: 'LivePerson Domain',
  args: [
    { displayName: 'Account ID', type: 'string' }, 
    { displayName: 'Service', type: 'string' }, 
  ],
  run: async (context, ...args) => fetchDomain(...args)
}

