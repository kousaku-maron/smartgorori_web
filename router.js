const fs = require('fs');
const Router = require('koa-router');
const router = new Router();

module.exports = function(app, render) {
    router
        .get('/', (ctx, next) => {
            var title = 'MARON crypto currency blog | home';
            return ctx.render('home', { title });
        })

        .get('/ccy', (ctx, next) => {
            var json = JSON.parse(fs.readFileSync('views/assets/json/ccy.json', 'utf8')).articles;
            var title = 'MARON crypto currency blog | crypto currency';
            var list_title = '仮想通貨一覧';
            return ctx.render('list_page', { title, list_title, json });
        })

        .get('/ccy/:id', (ctx, next) => {
            var title = 'MARON crypto currency blog | crypto currency';
            var id = ctx.params.id;
            return ctx.render('article_page', { title, id });
        })
        
        .get('/tech', (ctx, next) => {
            var json = JSON.parse(fs.readFileSync('views/assets/json/tech.json', 'utf8')).articles;
            var title = 'MARON crypto currency blog | technology';
            var list_title = '技術一覧';
            return ctx.render('list_page', { title, list_title, json });
        })
        
        .get('/tech/:id', (ctx, next) => {
            var title = 'MARON crypto currency blog | technology';
            var id = ctx.params.id;
            return ctx.render('article_page', { title, id });
        })

        .get('/article', (ctx, next) => {
            var json = JSON.parse(fs.readFileSync('views/assets/json/articles.json', 'utf8')).articles;
            var title = 'MARON crypto currency blog | article';
            var list_title = '記事一覧';
            return ctx.render('list_page', { title, list_title, json });
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