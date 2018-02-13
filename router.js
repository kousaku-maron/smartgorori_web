const fs = require('fs');
const Router = require('koa-router');
const router = new Router();

function notFound(){
    var title = 'MARON crypto currency blog | Not Found';
    var data = {title: 'Not Found', src: '/notfound'};
    return ctx.render('notfound', { title, data });
}

module.exports = function(app, render) {
    router
        .get('/', (ctx, next) => {
            var json = JSON.parse(fs.readFileSync('views/assets/json/tiles.json', 'utf8')).tiles;
            var home = 'ホーム';
            var title = 'MARON crypto currency blog | ' + home;
            var data = {title: home, src: '/'};
            return ctx.render('home', { title, json, data });
        })

        .get('/ccy', (ctx, next) => {
            var json = JSON.parse(fs.readFileSync('views/assets/json/ccys.json', 'utf8')).articles;
            var list_title = '仮想通貨一覧';
            var title = 'MARON crypto currency blog | ' + list_title;
            var data = {title: list_title, src: '/ccy'};
            return ctx.render('list_page', { title, data, json });
        })

        .get('/ccy/:id', (ctx, next) => {
            var json = JSON.parse(fs.readFileSync('views/assets/json/ccys.json', 'utf8')).articles;
            var id = ctx.params.id;
            
            if(id <= json.length){
                var data = json[id-1]
                var title = 'MARON crypto currency blog | ' + data.title;
                return ctx.render('article_page', { title, data });
            }
            else{
                notFound();
            }
        })
        
        .get('/tech', (ctx, next) => {
            var json = JSON.parse(fs.readFileSync('views/assets/json/techs.json', 'utf8')).articles;
            var list_title = '技術一覧';
            var title = 'MARON crypto currency blog | ' + list_title;
            var data = {title: list_title, src: '/tech'};
            return ctx.render('list_page', { title, data, json });
        })
        
        .get('/tech/:id', (ctx, next) => {
            var json = JSON.parse(fs.readFileSync('views/assets/json/techs.json', 'utf8')).articles;
            var id = ctx.params.id;
            
            if(id <= json.length){
                var data = json[id-1]
                var title = 'MARON crypto currency blog | ' + data.title;
                return ctx.render('article_page', { title, data });
            }
            else{
                notFound();
            }
        })

        .get('/article', (ctx, next) => {
            var json = JSON.parse(fs.readFileSync('views/assets/json/articles.json', 'utf8')).articles;
            var list_title = '記事一覧';
            var title = 'MARON crypto currency blog | ' + list_title;
            var data = {title: list_title, src: '/article'};
            return ctx.render('list_page', { title, list_title, json, data });
        })

        .get('/article/:id', (ctx, next) => {
            var json = JSON.parse(fs.readFileSync('views/assets/json/articles.json', 'utf8')).articles;
            var id = ctx.params.id;
        
            if(id <= json.length){
                var data = json[id-1]
                var title = 'MARON crypto currency blog | ' + data.title;
                return ctx.render('article_page', { title, data });
            }
            else{
                notFound();
            }
        })

        .get('*', (ctx, next) => {
            notFound();
        });

    return router.routes();
    
}