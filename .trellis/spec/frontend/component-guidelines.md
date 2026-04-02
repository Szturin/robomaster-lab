# Component Guidelines

> How components are built in this project.

---

## Overview

本项目使用 Astro 组件与页面组件，主模式是：

1. frontmatter 中声明 import、类型与页面数据
2. 模板部分直接渲染静态内容和少量数组映射
3. 文件底部使用 `<style>` 写同文件局部样式

当前项目组件层级很浅，优先保持单文件可读性，不引入额外抽象。

---

## Component Structure

标准顺序：

1. `---` frontmatter
2. `import` 语句
3. `interface Props` 与 `Astro.props` 解构（仅布局/可配置组件需要）
4. 页面/组件所需常量数组
5. 模板结构
6. `<style>` 局部样式

真实示例：

- 带 Props 的布局组件：`src/layouts/Layout.astro:1`
- 页面内声明小型数据数组后直接渲染：`src/pages/index.astro:4`
- 简单内容页不额外拆组件：`src/pages/about.astro:1`

---

## Props Conventions

- 仅在确实需要复用或可配置时定义 `Props`。
- 使用 TypeScript `interface Props` 描述 props，而不是内联松散对象。
- 通过 `const { ... } = Astro.props;` 解构，并在需要时给默认值。
- 本项目当前没有复杂嵌套 props 传递；优先保持接口简单。

示例：

- `src/layouts/Layout.astro:2` 定义 `title?: string`
- `src/layouts/Layout.astro:6` 用默认值兜底页面标题

---

## Styling Patterns

- 使用 Astro 单文件 `<style>`，不使用 Tailwind、CSS Modules 或 styled-components。
- 全站主题变量定义在 `src/layouts/Layout.astro:131`，页面优先复用这些 CSS 变量。
- 页面自己的布局和样式写在页面文件底部，不单独拆 CSS 文件。
- 常用模式是卡片、panel、grid、topbar、back-link 这类语义类名。
- 响应式通过同文件 `@media` 处理，优先做简单断点适配。

示例：

- 全局变量与页脚样式：`src/layouts/Layout.astro:131`
- 首页复杂布局与响应式：`src/pages/index.astro:153`
- 次级页面的简化样式：`src/pages/teams.astro:50`

---

## Accessibility

- 装饰性图标统一加 `aria-hidden="true"`，如导航和页脚 SVG：`src/pages/index.astro:31`、`src/layouts/Layout.astro:80`
- 纯装饰图片使用空 `alt`，如 `src/components/Welcome.astro:7`
- 可点击按钮必须有可读标签；主题按钮使用 `aria-label` 与 `title`：`src/pages/index.astro:55`
- 外链打开新窗口时同时带 `target="_blank"` 和 `rel="noreferrer"`。
- 不要只靠颜色表达状态；如分页切换同时保留结构和 hover/active 反馈。

---

## Common Mistakes

- 不要为了单页内容再拆无复用价值的小组件。
- 不要复制 Astro 默认示例组件风格到业务页面；`src/components/Welcome.astro:1` 不是当前站点规范。
- 不要新增未提供来源的外链地址；外链必须沿用用户提供链接。
- 不要在页面里引入复杂客户端框架交互；当前站点以静态内容 + 少量原生脚本为主。
