new Vue({
    el: '#app',
    data: function () {
        return {
            //inputに表示する初期テキスト
            animationClass: 'bounce',
            //v-showでtrue/falseで表示/非表示を切り替えるために使用するデータ
            isShown: false
        }
    },
    computed: {
        activeClass: function () {
            // "animationClass(inputの値) + animated"をクラス名として指定する
            //enter-active-class, leave-active-classのカスタムトランジションクラスにクラス名を付与する
            return this.animationClass + ' animated'
        }
    }
});