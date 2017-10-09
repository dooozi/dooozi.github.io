module.exports = {
    exclude: /should-be-ignore/,
    source: [
        './article', './api'
    ],
    theme: './_theme',
    themeConfig: {
        home: '/',
        sitename: 'JRAPP-Bridge-SDK',
        tagline: '帮助使用文档',
        navigation: [
            {
                title: 'Home',
                link: '/'
            }, {
                title: 'About',
                link: '/About'
            }, {
                title: 'Hello',
                link: '/Hello'
            }
        ],
        footer: '京东金融移动研发部前端开发组',
        hideBisheng: true,
        // github: 'https://github.com/benjycui/bisheng'
    },
    root: '/lht/wiki/'
};
