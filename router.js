const Router = require('koa-router');
const router = new Router();

module.exports = function(app, render) {
    router
        .get('/', (ctx, next) => {
            var title = 'home';
            return ctx.render('home', { title });
        })

        .get('/board', (ctx, next) => {
            var title = 'board';
            return ctx.render('board', { title });
        })

        .get('/btc/:id', (ctx, next) => {
            var id = ctx.params.id;
            var title = 'btc';
            return ctx.render('btc', { title, id });
        });

    return router.routes();
    
}