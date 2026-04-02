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
│   ├── assets/
│   ├── components/
│   │   └── Welcome.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       ├── index.astro
│       ├── about.astro
│       ├── teams.astro
│       └── docs.astro
├── .trellis/
│   └── spec/
│       └── frontend/
├── astro.config.mjs
├── package.json
└── README.md
```

当前以前台页面为中心组织代码：
- `src/pages/` 放路由页面
- `src/layouts/` 放全站共享布局
- `src/components/` 仅放真正可复用组件
- `.trellis/spec/frontend/` 保存 AI 需遵循的前端开发规范

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
- 当前使用 Astro 单文件模式：frontmatter + 模板 + `<style>`，优先保持单文件可读性
- 全站主题变量、页脚和主题切换逻辑统一放在 `src/layouts/Layout.astro`
- 页面内少量静态数据直接写在 frontmatter，不提前抽共享数据文件
- 当前无自定义 hooks、无全局状态库、无客户端数据抓取；新增交互优先用 HTML/CSS 或少量原生脚本解决
- 站内链接必须保持 GitHub Pages base：`/robomaster-lab/...`

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
- 新页面默认包在 `src/layouts/Layout.astro` 下，保持统一外壳与主题变量
- 不要把 Astro 默认示例组件 `src/components/Welcome.astro` 当作当前业务实现规范
- AI 修改前端时，应优先参考 `.trellis/spec/frontend/` 下的已填写指南

## 推荐 subagent / skills

### 常用 subagent

- `Explore`：当需要在项目中做较大范围搜索、查找页面/样式/路由模式时使用
- `Plan`：当需求跨多个页面或需要先设计信息架构、导航结构时使用
- `ui-ux-designer`：当你要改首页布局、卡片层级、移动端体验、视觉风格时最合适
- `check` / `implement` / `debug`：更适合大规模流水线式开发；当前小站点通常不必默认启用

### 常用 skills

- `trellis:start`：新会话开始时读取 Trellis 上下文
- `trellis:before-frontend-dev`：前端开发前注入项目前端规范
- `trellis:check-frontend`：修改前端后检查是否符合当前规范
- `simplify`：当改动开始变复杂时，用来收敛实现复杂度

### 当前不推荐默认引入的能力

- 不默认使用 `claude-app-studio`、`obsidian-plugin-dev`、`openocd-debug` 等与本项目无关的 skill
- 不默认使用需要重型多代理流水线的命令，除非任务明显超过单页面/单功能修改范围
