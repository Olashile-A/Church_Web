const api = 'http://api.churchesapp.com/api/v1';

export const endpoint = {
  login: api + '/auth',
  allPrayerRequest: api + '/prayer-request/branch/all',
  inboxPrayerRequest: api + '/prayer-request/branch/inbox',
  repliedPrayerRequest: api + '/prayer-request/branch/replied',
  replyPrayerRequest: api + '/prayer-request/church',
  getCountries: api + '/country',
  getCurrencies: api + '/currency',
  live: api + '/live',
  wallet: api + '/wallet'
};