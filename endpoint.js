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
  wallet: api + '/wallet',
  verifyWallet: api + '/wallet/verify/',
  getMembers: api + '/member/all',
  getAMember: api + '/member/get',
  getTransactionByMonthInterval: api + '/transaction/interval/month',
  getTransactionByWeekInterval: api + '/transaction/interval/week',
  getRecentTransactions: api + '/transaction/recent',
  getTransactionActivityYear: api + '/transaction/activity',
  getTransactionByMember: api + '/transaction/member',
  getAllTransactionHistory: api + '/transaction',
  getAllBanks: api + '/transaction/bank/list',
  linkBank: api + '/bank',
  bankVerify: api + '/bank/verify',
  walletVerify: api + '/wallet/verify'
};