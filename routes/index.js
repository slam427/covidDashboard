const apiRoutes = require ('./API');
const router = require('express').Router();


//troubleshoot here instead of passing => function we would normally pass an object (/api !=/api/books) review router class examples
app.use(app.router);
routes.initialize(app);

module.exports = router;