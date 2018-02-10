const Router = require('koa-router');
const router = new Router();

module.exports = function(app, render) {
    router
        .get('/', (ctx, next) => {
            var title = 'MARON crypto currency blog | home';
            return ctx.render('home', { title });
        })

        .get('/ccy', (ctx, next) => {
            var title = 'MARON crypto currency blog | crypto currency';
            return ctx.render('list_page', { title });
        })

        .get('/ccy/:id', (ctx, next) => {
            var title = 'MARON crypto currency blog | crypto currency';
            var id = ctx.params.id;
            return ctx.render('article_page', { title, id });
        })
        
        .get('/tech', (ctx, next) => {
            var title = 'MARON crypto currency blog | technology';
            return ctx.render('list_page', { title });
        })
        
        .get('/tech/:id', (ctx, next) => {
            var title = 'MARON crypto currency blog | technology';
            var id = ctx.params.id;
            return ctx.render('article_page', { title, id });
        })

        .get('/article', (ctx, next) => {
            var title = 'MARON crypto currency blog | article';
            return ctx.render('list_page', { title });
        })

        .get('/article/:id', (ctx, next) => {
            var title = 'MARON crypto currency blog | article';
            var id = ctx.params.id;
            return ctx.render('article_page', { title, id });
        })

        .get('*', (ctx, next) => {
            var title = 'MARON crypto currency blog | notfound';
            return ctx.render('notfound', { title });
        });

    return router.routes();
    
}