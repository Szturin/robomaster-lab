# 科来战队 Robomaster Lab

一个基于 **Astro** 构建的 RoboMaster 战队展示站与文档站，用于展示战队信息、团队方向、技术资料与协作入口。

## 项目特性

- 战队主页展示
- 关于我们 / 小组方向独立页面
- 技术文档入口页
- 飞书文档与飞书群入口接入
- GitHub Pages 静态部署
- 深色工程风 + 亮橙点缀视觉设计

## 页面结构

当前主要页面包括：

- `/` - 首页
- `/about` - 关于我们
- `/teams` - 小组方向
- `/docs` - 技术文档

## 技术栈

- [Astro](https://astro.build/)
- TypeScript（Astro 默认配置）
- GitHub Pages

## 本地运行

先安装依赖：

```bash
npm install
```

启动开发服务器：

```bash
npm run dev
```

默认可在本地访问：

```text
http://localhost:4321/robomaster-lab/
```

## 构建与预览

生产构建：

```bash
npm run build
```

本地预览构建结果：

```bash
npm run preview
```

## 部署

项目面向 GitHub Pages 部署，核心配置位于：

- `astro.config.mjs`

当前配置：

- `site: https://szturin.github.io`
- `base: /robomaster-lab`

部署成功后，站点地址应为：

```text
https://szturin.github.io/robomaster-lab/
```

## 项目结构

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

## 当前站点内容

- 战队主页展示
- RoboMaster 赛事官网入口
- 关于我们简介与详细页
- 小组方向简介与详细页
- 飞书公开文档入口
- 飞书群加入入口

## 开发建议

如果你准备继续扩展这个站点，推荐优先增加：

- 比赛成绩页
- 成员介绍页
- 招新页
- 项目展示页
- 更统一的图标系统

## 许可证

如需开源发布，可根据团队需求补充许可证信息。
