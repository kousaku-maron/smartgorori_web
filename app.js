const koa = require('koa');
const app = new koa();

const serve = require('koa-static');
const path = require('path');

const render = require('./render');
const router = require('./router');

var r = require('./render')(app);

app.use(serve(path.join(__dirname, '/views/assets')));
console.log('root => ' + path.join(__dirname, '/views/assets'));

app.use(router(app, r));

app.listen(process.env.PORT || 3000);