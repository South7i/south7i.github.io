import { defineConfig, DefaultTheme } from 'vitepress'

const nav = [
  {
    text: '📝 Doc',
    items: [
      {
        items: [{ text: "🦊 学习记录", link: "/doc/study/" }],
      },
      {
        items: [{ text: "🐛 BUG笔记", link: "/doc/bug/" }],
      },
      {
        items: [{ text: "💻 Env", link: "/doc/env/scoop" }],
      },
    ],
    activeMatch: '/doc/'
  },
  {
    text: '✍️ Prog',
    items: [
      { text: "💻 后端", link: "/prog/server/java" },
      { text: "🎨 前端", link: "/prog/web/vue" },
      { text: "🐋 Sql", link: "/prog/sql/mysql" },
      { text: "📢 MQ", link: "/prog//mq/active" },
      { text: "🌏 DevOps", link: "/prog/dev/linux" },
    ],
    activeMatch: '/prog/'
  },
  { text: "🎉 项目", link: "/project/wealth" },
  { text: '🍂 杂记', link: '/life/', activeMatch: '/life/' },
  { text: '😶‍🌫️ 目标', link: '/goal/2023', activeMatch: '/goal/' },
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
      '/doc/env/': envSidebar(),
      '/prog/server/': serverSidebar(),
      '/prog/web/': webSidebar(),
      '/prog/sql/': sqlSidebar(),
      '/prog/mq/': mqSidebar(),
      '/prog/dev/': devOpsSidebar(),
      'goal': goalSidebar()
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/South7i" },
    ],
    footer: {
      copyright: "Copyright © 2022-present Caleb",
    },
  },
  markdown: {
    config: (md) => {
      md.use(require('markdown-it-task-checkbox'))
    }
  }
})

function envSidebar() {
  return [
    {
      text: 'Windows',
      items: [
        { text: 'Scoop-Windows包管理', link: '/doc/env/scoop' },
      ]
    },
    {
      text: '开发',
      items: [
        {
          text: '5分钟开发环境搭建',
          link: '/doc/env/quickEnv'
        }, {
          text: 'Git配置/常用命令',
          link: '/doc/env/git'
        },
        {
          text: 'Node Version Manager',
          link: '/doc/env/nvm'
        },
        {
          text: 'IDEA配置/插件推荐',
          link: '/doc/env/idea'
        }
      ]
    },
  ]
}

function serverSidebar() {
  return [
    {
      text: '☕ Java',
      items: [
        { text: '', link: '' },
      ]
    },
    {
      text: '✅ Go',
      items: [
        { text: '', link: '' },
      ]
    },
    {
      text: '☘️ Node',
      items: [
        { text: '', link: '' },
      ]
    },
    {
      text: '✝️ Python',
      items: [
        { text: '', link: '' },
      ]
    }
  ]
}

function webSidebar() {
  return [
    {
      text: '🔰 VUE',
      items: [
        { text: '', link: '' },
      ]
    },
    {
      text: '✡️ REACT',
      items: [
        { text: '', link: '' },
      ]
    },
    {
      text: '🛫 Flutter',
      items: [
        { text: '', link: '' },
      ]
    },
    {
      text: '🟦 Ts',
      items: [
        { text: '', link: '' },
      ]
    },
    {
      text: '🟨 Js',
      items: [
        { text: '', link: '' },
      ]
    }
  ]
}

function sqlSidebar() {
  return [
    {
      text: '🐬 MySql',
      items: [
        { text: '', link: '' },
      ]
    },
    {
      text: '🍃 MongoDb',
      items: [
        { text: '', link: '' },
      ]
    },
    {
      text: '🏮 Redis',
      items: [
        { text: '', link: '' },
      ]
    },
    {
      text: '🔍️ Elasticsearch',
      items: [
        { text: '', link: '' },
      ]
    }
  ]
}

function mqSidebar() {
  return [
    {
      text: '🎠 ActiveMq',
      items: [
        { text: '', link: '' },
      ]
    },
    {
      text: '🐇 RabbitMq',
      items: [
        { text: '', link: '' },
      ]
    },
    {
      text: '🚀 RocketMQ',
      items: [
        { text: '', link: '' },
      ]
    },
    {
      text: '🔱 Kafka',
      items: [
        { text: '', link: '' },
      ]
    }
  ]
}

function devOpsSidebar() {
  return [
    {
      text: '🐧 Linux',
      items: [
        { text: '', link: '' },
      ]
    },
    {
      text: '🐈 Git',
      items: [
        { text: '', link: '' },
      ]
    },
    {
      text: '📗 Nginx',
      items: [
        { text: '', link: '' },
      ]
    },
    {
      text: '🐋 Docker',
      items: [
        { text: '', link: '' },
      ]
    },
    {
      text: '👴 Jenkins',
      items: [
        { text: '', link: '' },
      ]
    },
    {
      text: '🎡 Kubernetes',
      items: [
        { text: '', link: '' },
      ]
    }
  ]
}

function goalSidebar(){
  return [
    {
      text: '🐌 年度目标',
      items: [
        { text: '2023', link: '/goal/2023' },
      ]
    }
  ]
}

