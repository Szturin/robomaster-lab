# Frontend Development Guidelines

> robomaster-lab 前端开发约定索引。

---

## Overview

本目录记录当前 Astro 静态站点的真实前端模式，供 AI 助手和后续开发者复用。
重点是匹配现有项目，而不是引入通用模板式复杂架构。

---

## Guidelines Index

| Guide | Description | Status |
|-------|-------------|--------|
| [Directory Structure](./directory-structure.md) | 目录组织、页面与布局放置规则 | Filled |
| [Component Guidelines](./component-guidelines.md) | Astro 组件结构、props、样式与可访问性 | Filled |
| [Hook Guidelines](./hook-guidelines.md) | 当前无 hooks 体系时的处理原则 | Filled |
| [State Management](./state-management.md) | 静态数据、主题偏好与轻量交互状态 | Filled |
| [Quality Guidelines](./quality-guidelines.md) | 禁止模式、校验方式、评审清单 | Filled |
| [Type Safety](./type-safety.md) | Astro + TypeScript 的轻量类型约定 | Filled |

---

## Usage Notes

- 优先先读 `directory-structure.md` 和 `component-guidelines.md`
- 新增交互前先读 `hook-guidelines.md` 与 `state-management.md`
- 修改页面后按 `quality-guidelines.md` 做构建与移动端检查
- 所有规则都基于当前代码实际情况整理，后续应随项目演进更新
