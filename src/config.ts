import type { NavigationLink, Site, User } from './types.ts'

export const SITE: Site = {
    author: 'SAMLI',
    url: 'https://godruoyi.com',
    title: 'AIGC提示词大全',
    description: '天天开心',
    shortDescription: '',
}

export const NavigationLinks: NavigationLink[] = [
    { name: '提示词大全', url: '/posts' },
    { name: '系列', url: '/categories' },
    { name: '时间线', url: '/timeline' },
    { name: '友好链接', url: '/posts/url' },
]

export const FooterLinks = [
    {
        section: '汇总',
        links: [
            { name: '提示词大全', url: '/posts' },
            { name: '系列', url: '/timeline' },
            { name: '时间线', url: '/categories' },
        ],
    },
    {
        section: '友好链接',
        links: [
            { name: 'chatgpt', url: 'https://openai.com/chatgpt/' },
            { name: 'kimi', url: 'https://kimi.moonshot.cn/' },
            { name: '讯飞星火', url: 'https://xinghuo.xfyun.cn/' },
            { name: 'deepseek', url: 'https://www.deepseek.com/zh' },
            { name: '文心一言', url: 'https://yiyan.baidu.com/welcome?tn=39042058_34_oem_dg&ie=utf-8' },
        ],
    },
]

export const GoogleAnalytics = {
    enable: false,
    id: 'G-TKQ4L3ZDSF',
}

export const SEO = {
    title: SITE.title,
    description: SITE.description,
    structuredData: {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        'inLanguage': 'en-US',
        '@id': SITE.url,
        'url': SITE.url,
        'name': SITE.title,
        'description': SITE.description,
        'isPartOf': {
            '@type': 'WebSite',
            'url': SITE.url,
            'name': SITE.title,
            'description': SITE.description,
        },
    },
}
