# Hook Guidelines

> How hooks are used in this project.

---

## Overview

当前项目不是 React/Solid/Vue SPA，而是 Astro 静态站点。
**现状是没有自定义 hooks，也没有 hooks 目录。**
交互逻辑主要通过少量内联原生脚本完成，例如主题切换与基于 radio 的内容切换。

因此，AI 在这个项目里默认不应引入 `useXxx` 风格 hooks。

---

## Custom Hook Patterns

当前没有可复用 hook 模式，新增交互时遵循以下优先级：

1. 纯静态展示：直接用 Astro 模板
2. 简单展示切换：优先用 HTML/CSS 能力解决
3. 少量浏览器行为：在 `.astro` 文件中用短小 `script is:inline` 处理
4. 只有在后续明确引入 UI 框架时，才建立真正的 hook 体系

现有参考：

- 主题切换脚本：`src/layouts/Layout.astro:50`
- 主题按钮事件绑定：`src/layouts/Layout.astro:98`
- 小组分页切换使用 radio + CSS，而不是 JS 状态管理：`src/pages/index.astro:112`

---

## Data Fetching

- 当前站点没有客户端数据抓取。
- 页面内容以本地静态数组为主，如 `src/pages/index.astro:4`、`src/pages/docs.astro:4`。
- 若后续增加数据源，优先考虑 Astro 构建期获取，而不是在客户端引入请求库。
- 现阶段不要引入 React Query、SWR、Apollo 等数据层依赖。

---

## Naming Conventions

- 当前项目不存在 `use*` 命名约定，因为没有 hooks。
- 若将来明确引入某个 UI 框架，再按框架生态定义 hook 规则。
- 在当前项目中，交互辅助函数直接用语义化 camelCase 命名，如 `getSystemTheme`、`apply`：`src/layouts/Layout.astro:54`、`src/layouts/Layout.astro:104`

---

## Common Mistakes

- 不要把其他 React 项目的 `useState` / `useEffect` / `useMemo` 思路机械迁移到这里。
- 不要为了主题切换、Tab 切换这类小交互引入前端框架。
- 不要创建空的 `hooks/` 目录占位。
- 不要把本可由 CSS 完成的交互改写成大量 JS。
