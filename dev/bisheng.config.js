module.exports = {
    exclude: /should-be-ignore/,
    source: [
        './article', './api'
    ],
    theme: './_theme',
    themeConfig: {
        home: '/',
        sitename: 'SDK',
        tagline: '帮助文档',
        navigation: [{
            title: 'Home',
            link: '/'
        }, {
            title: 'About',
            link: '/About'
        }, {
            title: 'Hello',
            link: '/Hello'
        }],
        footer: 'doozi',
        hideBisheng: true,
        // github: 'https://github.com/benjycui/bisheng'
    },
    root: '/'
};
