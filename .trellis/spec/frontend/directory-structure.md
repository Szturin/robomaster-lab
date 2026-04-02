# Directory Structure

> How frontend code is organized in this project.

---

## Overview

这是一个小型 Astro 静态站点，当前以前台页面为中心组织代码，不做按 feature 的复杂拆分。
优先复用 `src/layouts/Layout.astro` 提供全站外壳，其余页面直接在 `src/pages/` 下按路由组织。

当前项目没有自定义 hooks、全局状态目录或共享工具目录；新增结构前先确认是否真的必要。

---

## Directory Layout

```text
src/
├── assets/                  # Astro 静态资源，由组件直接 import
├── components/
│   └── Welcome.astro        # Astro 默认示例组件，当前业务未使用
├── layouts/
│   └── Layout.astro         # 全站布局、页脚、主题脚本、全局样式变量
└── pages/
    ├── index.astro          # 首页
    ├── about.astro          # 关于我们
    ├── teams.astro          # 小组方向
    └── docs.astro           # 技术文档
```

---

## Module Organization

- 新页面直接放在 `src/pages/`，文件名对应路由。
- 全站共享框架、主题切换、页脚、全局 CSS 变量放在 `src/layouts/Layout.astro`。
- 只有当一段 UI 被两个及以上页面复用时，才考虑抽到 `src/components/`。
- 当前页面内容数据量较小，页面内常量数组直接定义在 frontmatter 中，不额外拆数据文件。
- 外部链接、分组列表、卡片文案等与单页强相关的数据，和页面放在同文件中维护。

---

## Naming Conventions

- 页面文件：使用小写路由名，如 `about.astro`、`teams.astro`。
- 布局文件：使用 PascalCase，如 `Layout.astro`。
- 组件文件：使用 PascalCase，如 `Welcome.astro`。
- CSS class：语义化小写 kebab-case，如 `.site-footer`、`.team-switcher`、`.section-head`。
- 页面内数据常量：使用 camelCase，如 `footerSections`、`highlights`、`commonDocs`。

---

## Examples

- 全站布局与共享主题：`src/layouts/Layout.astro:1`
- 首页作为“页面 + 局部数据 + 局部样式”主模式：`src/pages/index.astro:1`
- 次级内容页的简化页面结构：`src/pages/about.astro:1`
- 文档导航页的分组卡片布局：`src/pages/docs.astro:1`

## Anti-patterns

- 不要为了小站点过早引入 `features/`、`stores/`、`services/` 等复杂目录层级。
- 不要把只在一个页面使用的文案和卡片数据抽成单独文件。
- 不要继续保留 Astro 默认模板风格的新页面；`src/components/Welcome.astro:1` 仅是遗留示例，不应作为业务实现参考。
