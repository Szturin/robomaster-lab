# 科来战队 Robomaster Lab

一个基于 **Astro** 构建的 RoboMaster 战队展示站与文档站，用于展示战队信息、团队方向、技术资料与协作入口。

## 项目特性

- 战队主页展示
- 关于我们 / 小组方向独立页面
- 技术文档入口页
- 飞书文档与飞书群入口接入
- GitHub Pages 静态部署
- 深色工程风 + 亮橙点缀视觉设计
- 适合“个人仓库 + 团队协作维护”的轻量内容站模式

## 页面结构

当前主要页面包括：

- `/` - 首页
- `/about` - 关于我们
- `/teams` - 小组方向
- `/docs` - 技术文档

## 当前站点范围

当前网站定位是：

- 战队对外展示站
- 资料与文档入口站
- 招新与协作信息承载页

当前**不是**：

- 论坛系统
- 用户登录系统
- 评论社区
- 复杂后端驱动站点

后续扩展建议优先围绕静态页面、资料入口、项目展示和团队介绍推进，而不是先做重型交互系统。

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

## 团队维护说明

当前仓库仍托管在个人 GitHub 账号下，但网站内容可以服务团队协作。

推荐维护方式：

- 仓库归个人账号维护
- 页面内容、文档入口、公开链接由团队协作补充
- 变更优先小步提交，避免一次改太多页面
- 合并前至少先运行一次 `npm run build`
- 外部链接必须由团队确认后再写入仓库

这个站点更适合做：

- 战队介绍
- 小组方向说明
- 比赛成绩与项目展示
- 招新信息
- 文档与资料入口

## 贡献方式

如果你是团队成员，准备参与这个网站维护，请先阅读：

- [CONTRIBUTING.md](./CONTRIBUTING.md) —— 团队协作与提交流程
- [CLAUDE.md](./CLAUDE.md) —— AI 助手与前端改动约束

## 开发建议

如果你准备继续扩展这个站点，推荐优先增加：

- 比赛成绩页
- 成员介绍页
- 招新页
- 项目展示页
- 更统一的图标系统

## 许可证

如需开源发布，可根据团队需求补充许可证信息。

## AI 协作说明

本项目已补充 `CLAUDE.md` 与 `.trellis/spec/frontend/` 作为 AI 开发约束。
后续若使用 Claude Code、Cursor 或其他 AI 助手修改页面，建议优先遵循这些项目内规则，而不是按通用 Astro 模板自由发挥。
