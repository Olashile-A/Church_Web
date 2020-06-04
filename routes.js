const routes = require('next-routes')


module.exports = routes()
  .add("index", "/")
  .add("dashboard", "/dashboard/in")
  .add("eventplanner", "/dashboard/eventplanner")
  .add("pastorplanner", "/dashboard/pastorplanner")
  .add("prayerrequest", "/dashboard/prayerrequest")
  // .add("inboxview", "/dashboard/prayerrequest/inboxview")
  .add("inboxreply", "/dashboard/prayerrequest/inboxreply")
  .add("resources", "/dashboard/resources")
  .add("upload-form", "/dashboard/resources/upload-form")
  .add("livestream", "/dashboard/livestream")
  .add("livestreamform", "/dashboard/livestream/livestreamform")
  .add("livestreamview", "/dashboard/livestream/livestreamview")
  .add("wallet", "/dashboard/wallet")
  .add("all-wallet-view", "/dashboard/wallet/all-wallet-view")
  .add("push-notification", "/dashboard/push-notification")
  .add("register-user", "/dashboard/register-user")
  .add("registered-user-view", "/dashboard/register-user/registered-user-view/:id")
  .add("admin-user", "/dashboard/admin-user")
  .add("admin-add-staff", "/dashboard/admin-user/admin-add-staff")
  .add("user-profile", "/dashboard/user-profile")
  .add("notifications", "/dashboard/notifications")

  