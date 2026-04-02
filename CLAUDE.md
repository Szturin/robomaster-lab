# robomaster-lab

## 项目概述

这是一个基于 Astro 构建的 RoboMaster 战队展示站与文档站，面向“科来战队 Robomaster Lab”的对外展示、资料沉淀与招新协作。

站点当前部署目标为 GitHub Pages：
- 生产地址基于 `https://szturin.github.io/robomaster-lab`
- 构建方式为静态生成

## 当前目标

- 展示战队主页与基础介绍
- 提供关于我们 / 小组方向 / 技术文档等页面
- 接入飞书文档与飞书群入口
- 保持页面风格简洁、偏工程感、适度使用橙色强调

## 目录结构

```text
robomaster-lab/
├── public/
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       ├── index.astro
│       ├── about.astro
│       ├── teams.astro
│       └── docs.astro
├── astro.config.mjs
├── package.json
└── README.md
```

## 页面说明

### `src/pages/index.astro`
首页。包含：
- 顶部导航
- 赛事官网入口
- 飞书文档入口
- 关于我们简介
- 小组方向简介
- 飞书群加入入口

### `src/pages/about.astro`
“关于我们”详细页。

### `src/pages/teams.astro`
“小组方向”详细页。

### `src/pages/docs.astro`
文档导航页，当前包含飞书公开文档入口。

### `src/layouts/Layout.astro`
全站共享布局：
- HTML 外壳
- 全局背景与主题色
- 页脚与常用图标入口

## 运行命令

在项目根目录执行：

```bash
npm install
npm run dev
npm run build
npm run preview
```

## 部署说明

GitHub Pages 配置在：
- `astro.config.mjs`
- `.github/workflows/deploy.yml`（如已存在）

关键配置：
- `site: 'https://szturin.github.io'`
- `base: '/robomaster-lab'`

新增页面或导航时，注意使用带 base 的站内路径，例如：
- `/robomaster-lab/about`
- `/robomaster-lab/teams`
- `/robomaster-lab/docs`

## 设计与实现约定

- 保持简洁，不做无必要抽象
- 优先在现有页面基础上最小改动
- 视觉风格：深色背景 + 暖白文字 + 亮橙点缀
- 橙色只用于关键按钮、强调链接、图标 hover 等位置，避免大面积滥用
- 移动端导航优先保持横向换行，不做复杂菜单交互，除非用户明确要求

## 修改建议

后续若继续扩展，建议优先按以下顺序进行：
1. 完善 about / teams 页面内容
2. 增加比赛成绩页 / 招新页 / 成员页
3. 统一图标体系与视觉语言
4. 如内容增多，再考虑抽取共享数据或组件

## 注意事项

- 不要猜测外链地址，外部链接必须以用户提供为准
- 修改导航时，注意桌面端与移动端同时检查
- 构建完成后运行 `npm run build` 验证静态路由是否正常生成
