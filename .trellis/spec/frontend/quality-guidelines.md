# Quality Guidelines

> Code quality standards for frontend development.

---

## Overview

这是一个小型 Astro 静态站点，质量标准以“最小改动、风格统一、构建通过、移动端可用”为主。
重点不是复杂测试覆盖，而是避免无必要复杂度，并保持展示内容与外链准确。

---

## Forbidden Patterns

- 不要猜测或编造外链地址；外链必须使用用户明确提供的 URL。
- 不要无故引入新依赖、状态库、UI 框架或样式方案。
- 不要把简单静态页面改造成客户端重交互页面。
- 不要新增与现有深色 + 橙色强调风格明显不一致的视觉实现。
- 不要保留或复制 Astro 默认模板内容到业务页面，`src/components/Welcome.astro:1` 仅为遗留示例。
- 不要忘记 GitHub Pages base 路径，站内链接必须保持 `/robomaster-lab/...` 形式，如 `src/pages/index.astro:36`。

---

## Required Patterns

- 新页面必须包在 `src/layouts/Layout.astro` 下，保持统一外壳和主题变量。
- 外链新窗口打开时必须带 `rel="noreferrer"`。
- 响应式改动必须同时检查桌面与移动端断点。
- 优先复用 `var(--accent)`、`var(--card)`、`var(--border)` 等现有设计令牌：`src/layouts/Layout.astro:147`
- 页面内容较少时，继续使用 frontmatter 常量 + 模板直接渲染。

---

## Testing Requirements

当前以前端手工验证 + 构建验证为主：

1. 修改页面后运行 `npm run build`
2. 检查所有站内链接是否仍带 `/robomaster-lab` base
3. 检查外链是否正确、是否来自用户提供
4. 检查移动端断点下导航、卡片栅格、按钮是否正常换行
5. 检查主题切换未被破坏：`src/layouts/Layout.astro:98`

自动化测试目前不是现状要求，不要为了 bootstrap 指南虚构不存在的测试体系。

---

## Code Review Checklist

- 是否遵循“小站点最小改动”原则？
- 是否复用了 `Layout.astro` 和既有 CSS 变量？
- 是否避免了不必要的组件拆分和目录扩张？
- 所有站内链接是否包含 `/robomaster-lab` base？
- 所有外链是否准确且已加 `target`/`rel`？
- 新增样式是否保持深色背景 + 暖白文字 + 橙色强调？
- 移动端布局是否仍可读、可点？
