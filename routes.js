const routes = require('next-routes')


module.exports = routes()
  .add("index", "/")
  .add("dashboard", "/dashboard/in")
  .add("pastorplanner", "/pastorplanner")
