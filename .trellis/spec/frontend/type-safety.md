# Type Safety

> Type safety patterns in this project.

---

## Overview

项目使用 Astro + TypeScript frontmatter，但当前类型使用非常轻量。
主要体现在：

- 组件 props 用 `interface` 描述
- 页面静态数据依赖 TypeScript 推断
- 没有单独的共享类型目录，也没有运行时校验库

对这个项目来说，类型安全目标是“足够清晰”，不是建立复杂类型体系。

---

## Type Organization

- 与单个组件强相关的类型，直接定义在该 `.astro` 文件的 frontmatter 顶部。
- 当前唯一明确的 props 类型示例在 `src/layouts/Layout.astro:2`。
- 页面内小型数组对象通常直接让 TS 推断，不额外声明接口，如：
  - `src/pages/index.astro:4`
  - `src/pages/docs.astro:4`
  - `src/pages/teams.astro:4`
- 只有当多个页面共享同一结构且重复明显时，才考虑抽公共类型。

---

## Validation

- 当前没有 Zod/Yup/io-ts 等运行时校验。
- 原因是页面数据基本是源码内静态常量，不来自用户输入或外部 API。
- 若后续引入表单或远程数据，再在边界处增加运行时校验。

---

## Common Patterns

- `interface Props` + `Astro.props`：`src/layouts/Layout.astro:2`
- 给可选 props 提供默认值：`src/layouts/Layout.astro:6`
- 对静态数组对象使用字面量推断，避免无意义类型样板：`src/pages/about.astro:4`
- 浏览器脚本中的局部函数使用清晰命名，靠上下文保持可读性：`src/layouts/Layout.astro:54`

---

## Forbidden Patterns

- 不要为简单静态对象强行建立一堆共享 interface/type。
- 不要在没有必要时使用 `any`。
- 不要用类型断言掩盖真实结构问题。
- 不要引入运行时校验库去校验源码里手写的静态常量。
- 不要把小型内容站写成重类型驱动项目。
