const fs = require('fs');
const Router = require('koa-router');
const router = new Router();

module.exports = function(app, render) {
    router
        .get('/', (ctx, next) => {
            var json = JSON.parse(fs.readFileSync('views/assets/json/tiles.json', 'utf8')).tiles;
            var title = 'MARON crypto currency blog | ホーム';
            var data = {description: 'マロ〜ンの仮想通貨ブログです', image: '/images/icon.JPG', src: '/'};
            return ctx.render('home', { title, json, data });
        })

        .get('/ccy', (ctx, next) => {
            var json = JSON.parse(fs.readFileSync('views/assets/json/ccys.json', 'utf8')).articles;
            var title = 'MARON crypto currency blog | 仮想通貨一覧';
            var list_title = '仮想通貨一覧';
            var data = {description: 'マロ〜ンの仮想通貨ブログの仮想通貨一覧です', image: '/images/icon.JPG', src: '/ccy'};
            return ctx.render('list_page', { title, list_title, json, data });
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
                var title = 'MARON crypto currency blog | notfound';
                var data = {description: 'お探しのページはありません', image: '/images/notfound_ghost', 'src': '/notfound'};
                return ctx.render('notfound', { title, data });
            }
        })
        
        .get('/tech', (ctx, next) => {
            var json = JSON.parse(fs.readFileSync('views/assets/json/techs.json', 'utf8')).articles;
            var title = 'MARON crypto currency blog | 技術一覧';
            var list_title = '技術一覧';
            var data = {description: 'マロ〜ンの仮想通貨ブログの技術一覧です', image: '/images/icon.JPG', src: '/tech'};
            return ctx.render('list_page', { title, list_title, json, data });
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
                var title = 'MARON crypto currency blog | notfound';
                var data = {description: 'お探しのページはありません', image: '/images/notfound_ghost', src: '/notfound'};
                return ctx.render('notfound', { title, data });
            }
        })

        .get('/article', (ctx, next) => {
            var json = JSON.parse(fs.readFileSync('views/assets/json/articles.json', 'utf8')).articles;
            var title = 'MARON crypto currency blog | 記事一覧';
            var list_title = '記事一覧';
            var data = {description: 'マロ〜ンの仮想通貨ブログの記事一覧です', image: '/images/icon.JPG', src: '/article'};
            return ctx.render('list_page', { title, list_title, json });
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
                var title = 'MARON crypto currency blog | notfound';
                var data = {description: 'お探しのページはありません', image: '/images/notfound_ghost', src: '/notfound'};
                return ctx.render('notfound', { title, data });
            }
        })

        .get('*', (ctx, next) => {
            var title = 'MARON crypto currency blog | notfound';
            var data = {description: 'お探しのページはありません', image: '/images/notfound_ghost', src: '/notfound'};
            return ctx.render('notfound', { title, data });
        });

    return router.routes();
    
}