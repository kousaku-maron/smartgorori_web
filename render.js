const render = require('koa-ejs');
const path = require('path');

module.exports = function(app) {
    render(app, {
        root: path.join(__dirname, './views'),
        layout: 'template',
        viewExt: 'html',
        cache: false,
        debug: true
    });

    return render;
}