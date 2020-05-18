const routes = require('next-routes')


module.exports = routes()
  .add("index", "/")
  .add("dashboard", "/dashboard/in")
  .add("eventplanner", "/dashboard/eventplanner")
  .add("prayerrequest", "/dashboard/prayerrequest")
  .add("inboxview", "/dashboard/prayerrequest/inboxview")
  .add("livestream", "/dashboard/livestream")
  .add("livestreamform", "/dashboard/livestream/livestreamform")
  .add("livestreamview", "/dashboard/livestream/livestreamview")
  .add("wallet", "/dashboard/wallet")
