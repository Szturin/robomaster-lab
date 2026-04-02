# State Management

> How state is managed in this project.

---

## Overview

当前项目没有 Zustand、Redux、Pinia、Context 等全局状态方案。
状态管理非常轻：

- 静态内容：frontmatter 常量数组
- 主题偏好：`localStorage` + `documentElement.dataset`
- 简单视图切换：HTML radio + CSS

这是一个内容展示型静态站点，默认保持“无全局状态”。

---

## State Categories

### 1. 静态页面数据

直接定义在页面 frontmatter 中。

- 首页亮点和小组概览：`src/pages/index.astro:4`
- 小组方向列表：`src/pages/teams.astro:4`
- 文档页分组与公共资料：`src/pages/docs.astro:4`

### 2. 全站 UI 偏好

仅主题模式属于跨页面 UI 偏好，存储在浏览器本地：

- 初始化主题：`src/layouts/Layout.astro:50`
- 读写 `theme-preference`：`src/layouts/Layout.astro:52`、`src/layouts/Layout.astro:108`

### 3. 页面内临时显示状态

优先不用 JS 状态对象，而是用 HTML/CSS 表达：

- 首页小组翻页：`src/pages/index.astro:112`

### 4. Server state

当前没有 server state，也没有客户端缓存同步逻辑。

---

## When to Use Global State

默认不要引入全局状态。
仅当一个浏览器端状态同时满足以下条件时，才考虑升级为共享状态：

1. 被多个页面或多个独立组件共同读写
2. 不能只靠 URL、props 或本地 DOM 状态表达
3. 不能用 `localStorage` 这类轻量方案解决

以当前代码看，主题切换已经是“共享状态”的上限，而且仍由原生脚本处理即可。

---

## Server State

- 当前无 API 拉取、无客户端轮询、无缓存层。
- 如果后续接入文档或公告接口，优先使用 Astro 构建期数据获取。
- 在确有实时交互需求前，不要引入请求缓存框架。

---

## Common Mistakes

- 不要为纯静态文案引入 store。
- 不要把页面内 1-2 个切换状态升级成全局状态。
- 不要把 `localStorage` 主题偏好改造成复杂状态管理系统。
- 不要在没有真实后端数据同步需求时加入 server-state 库。
