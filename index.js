const express = require('express');
const app = express();
const routeDays = require('./days/route');
const routeTasks = require('./tasks/route');
const routeLogin = require('./login/route');
const bp = require('body-parser')

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

app.use('/days', routeDays);
app.use('/tasks', routeTasks);
app.use('/login', routeLogin)

app.listen(5500, () => console.log('Server started: 5500'));