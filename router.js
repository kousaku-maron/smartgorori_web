const fs = require('fs');
const Router = require('koa-router');
const router = new Router();

// JSON FILE
// -------------------------------------------------------------------------------------------
const homeJson = JSON.parse(fs.readFileSync('views/assets/json/home.json', 'utf8'));
const ccyJson = JSON.parse(fs.readFileSync('views/assets/json/ccys.json', 'utf8'));;
const techJson = JSON.parse(fs.readFileSync('views/assets/json/techs.json', 'utf8'));
const articleJson = JSON.parse(fs.readFileSync('views/assets/json/articles.json', 'utf8'));
const errorJson = JSON.parse(fs.readFileSync('views/assets/json/error.json', 'utf8'));
// -------------------------------------------------------------------------------------------

module.exports = function(app, render) {
    router
        .get('/', (ctx, next) => {
            var json = homeJson;
            var meta = json.meta;
            var tiles = json.tiles;
            return ctx.render('home', { meta, tiles });
        })

        .get('/ccy', (ctx, next) => {
            var json = ccyJson;
            var meta = json.list.meta;
            var contentTitle = json.list.title; 
            var articles = json.articles;
            return ctx.render('ccy_list', { meta, articles, contentTitle });
        })

        .get('/ccy/:pair', (ctx, next) => {
            var json = ccyJson;
            var pair = ctx.params.pair;
            
            if(pair in json.articles){
                var article = json.articles[pair];
                var meta = article.meta;
                return ctx.render('article', { meta, article });
            }
            else{
                var json = errorJson;
                var meta = json.meta;
                return ctx.render('error', { meta });
            }
        })
        
        .get('/tech', (ctx, next) => {
            var json = techJson;
            var meta = json.list.meta;
            var contentTitle = json.list.title;
            var articles = json.articles;
            return ctx.render('list', { meta, articles, contentTitle });
        })
        
        .get('/tech/:id', (ctx, next) => {
            var json = techJson;
            var id = ctx.params.id;
            
            if(id <= json.articles.length){
                var article = json.articles[id-1];
                var meta = article.meta;
                return ctx.render('article', { meta, article });
            }
            else{
                var json = errorJson;
                var meta = json.meta;
                return ctx.render('error', { meta });
            }
        })

        .get('/article', (ctx, next) => {
            var json = articleJson;
            var meta = json.list.meta;
            var contentTitle = json.list.title;
            var articles = json.articles;
            return ctx.render('list', { meta, articles, contentTitle });
        })

        .get('/article/:id', (ctx, next) => {
            var json = articleJson;
            var id = ctx.params.id;
        
            if(id <= json.articles.length){
                var article = json.articles[id-1]
                var meta = article.meta;
                return ctx.render('article', { meta, article });
            }
            else{
                var json = errorJson;
                var meta = json.meta;
                return ctx.render('error', { meta });
            }
        })

        .get('/vr', (ctx, next) => {
            var meta = {title: 'VRインターフェース', url: '/vr', description: 'VRインターフェーステスト中・・・'}
            return ctx.render('vr', {meta});
        })

        .get('*', (ctx, next) => {
            var json = errorJson;
            var meta = json.meta;
            return ctx.render('error', { meta });
        })

    return router.routes();
    
}