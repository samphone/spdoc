import { defineConfig } from 'vuepress/config'

module.exports = defineConfig({
    title: '前端知识点集合',
    description: '个人前端学习知识点总结',
    themeConfig: {
        sidebarDepth: 3,
        activeHeaderLinks: true,
        nav: [
            {
                text: 'markdown',
                link: '/markdown/'
            },
            {
                text: '设计模式',
                link: '/designMode/'
            },
            {
                text: '相关文档',
                items: [
                    {
                        text: 'vuepress',
                        link: 'https://vuepress.vuejs.org/zh'
                    },
                    {
                        text: 'md速查',
                        link: 'https://markdown.com.cn/cheat-sheet.html#%E6%80%BB%E8%A7%88'
                    },
                    {
                        text: 'ts-axios',
                        link: 'https://www.wjsljc.com/document/ts-axios/'
                    },
                ]
            }
        ],
        // sidebar: [
        //     {
        //         title: '设计模式',
        //         path: '/designMode',
        //         children: [
        //             ''
        //         ]
        //     },
        //     {
        //         title: 'markdown',
        //         path: '/markdown',
        //         children: [
        //             ''
        //         ]
        //     }
        // ]
    },
    markdown: {
        lineNumbers: true
    }
})