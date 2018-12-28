Vue.component('fruits-list-title', {
    template: '<h1>フルーツ一覧</h1>',
});

Vue.component('fruits-list-description', {
    template: '季節のフルーツ',
});

Vue.component('fruits-list-table', {
    template: '<table>\n' +
        '            <tr>\n' +
        '                <th>季節</th>\n' +
        '                <th>フルーツ</th>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>春</td>\n' +
        '                <td>もも</td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>夏</td>\n' +
        '                <td>すいか</td>\n' +
        '            </tr>\n' +
        '        </table>'
});

new Vue({
    el: '#example'
});