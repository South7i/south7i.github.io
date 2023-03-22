import { defineConfig, DefaultTheme } from 'vitepress'

const nav = [
  {
    text: '📝 笔记',
    items: [
      {
        items: [{ text: "🦊 技术教程", link: "/doc/course/scoop" }],
      },
      {
        items: [{ text: "🎉 项目笔记", link: "/doc/project/" }],
      },
      {
        items: [{ text: "🐛 BUG笔记", link: "/doc/bug/" }],
      },
    ],
    activeMatch: '/doc/'
  },
  {
    text: '🎨 前端',
    items: [
      { text: "🔰 VUE", link: "/web/vue" },
      { text: "✡️ REACT", link: "/web/react" },
      { text: "🛫 Flutter", link: "/web/flutter" },
      { text: "🟦 Ts", link: "/web/ts" },
      { text: "🟨 Js", link: "/web/js" },
    ],
    activeMatch: '/web/'
  },
  {
    text: '💻 后端',
    items: [
      { text: "☕ Java", link: "/server/java" },
      { text: "✅ Go", link: "/server/go" },
      { text: "☘️ Node", link: "/server/node" },
      { text: "✝️ Python", link: "/server/python" },
    ],
    activeMatch: '/server/'
  },
  {
    text: '🐋 Sql',
    items: [
      { text: "🐬 MySql", link: "/sql/mysql/" },
      { text: "🍃 MongoDb", link: "/sql/mongodb" },
      { text: "🏮 Redis", link: "/sql/redis" },
      { text: "🔍️ Elasticsearch", link: "/sql/es" },
    ],
    activeMatch: '/sql/'
  },
  {
    text: '📢 MQ',
    items: [
      { text: "🎠 ActiveMq", link: "/mq/active" },
      { text: "🐇 RabbitMq", link: "/mq/rabbit" },
      { text: "🚀 RocketMQ", link: "/mq/rocket" },
      { text: "🔱 Kafka", link: "/mq/kafka" },
    ],
    activeMatch: '/mq/'
  },
  {
    text: '🌏 DevOps',
    items: [
      { text: "🐧 Linux", link: "/dev/linux" },
      { text: "🐈 Git", link: "/dev/git" },
      { text: "📗 Nginx", link: "/dev/nginx" },
      { text: "🐋 Docker", link: "/dev/docker" },
      { text: "👴 Jenkins", link: "/dev/jenkins" },
      { text: "🎡 Kubernetes", link: "/dev/k8s" },
    ],
    activeMatch: '/dev/'
  },
  { text: '🍂 杂记', link: '/life/', activeMatch: '/life/' },
]

export default defineConfig({
  lang: 'zn-CH',
  title: 'Caleb',
  description: '做個有素質的吊人',
  //上次更新时间 开启（需要git环境）
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    siteTitle: 'Caleb Blog',
    logo: '/logo.svg',
    //导航栏
    nav: nav,
    sidebar: {
      '/doc/course/': courseSidebar(),
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/South7i" },
    ],
    footer: {
      copyright: "Copyright © 2022-present Caleb",
    },
  },
})

function courseSidebar() {
  return [
    {
      text: 'Windows',
      items: [
        { text: 'Scoop-Windows包管理', link: '/doc/course/scoop' },
      ]
    },
    {
      text: '开发',
      items: [
        {
          text: '5分钟开发环境搭建',
          link: '/guide/api/start'
        }, {
          text: 'Git配置/常用命令',
          link: '/guide/api/oauth'
        },
        {
          text: 'Node Version Manager',
          link: '/guide/api/space-resource'
        }
        ,
        {
          text: 'IDEA配置推荐',
          link: '/guide/api/quick-card'
        }
      ]
    },
  ]
}

