const bodyParser = require('body-parser');

//HTTPリクエストのbody内容をJSONとして解析する
module.exports = app => {
    app.use(bodyParser.json())

    //APIの実装内容を書いていく
};