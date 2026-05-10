---
name: "content-syncer"
description: "同步年月目录中的日志文件到 collections 目录，按类型分类管理。"
---

# Content Syncer

将年月目录（如 `25/01/`、`26/03/`）中的日志文件整理到 `collections` 目录，按类型分类管理。

---

## 一、目录结构

```
log-master/
├── 25/                    # 年份目录（两位年份）
│   └── 01/                # 月份目录（两位月份）
│       └── 01.md          # 日志文件（两位日期）
└── collections/           # 分类整理目录
    ├── Css/ Js/ Git/ Software/ Idea/
    ├── Vue/ React/ RegExp/ Chrome/
    ├── Markdown/ Emoji/ Html/ Log/
```

### 命名规则

| 层级 | 格式 | 示例 |
|-----|------|------|
| 年份 | 两位数字 | `25` = 2025年 |
| 月份 | 两位数字 | `03` = 3月 |
| 日期 | 两位数字 | `15` = 15日 |

---

## 二、分类规则

### 分类列表

| 分类 | 内容类型 | 目标文件 |
|-----|---------|---------|
| **Css** | CSS特性、属性、CSS Tricks | `collections/Css/index.md` |
| **Js** | JavaScript API、语言特性 | `collections/Js/index.md` |
| **Git** | Git命令、版本控制技巧 | `collections/Git/index.md` |
| **Software** | 开发工具、网站、插件、配置 | `collections/Software/index.md` |
| **Idea** | 想法、观点、知识、设计原则 | `collections/Idea/index.md` |
| **Vue** | Vue框架相关知识 | `collections/Vue/index.md` |
| **React** | React框架相关知识 | `collections/React/index.md` |
| **RegExp** | 正则表达式语法、用法 | `collections/RegExp/index.md` |
| **Chrome** | Chrome浏览器、DevTools | `collections/Chrome/index.md` |
| **Markdown** | Markdown语法、使用技巧 | `collections/Markdown/index.md` |
| **Html** | HTML标签、语义化、SEO相关 | `collections/Html/index.md` |
| **Emoji** | 表情符号、符号组合 | `collections/Emoji/index.md` |

### 边界条目优先级

| 关键词 | 优先分类 |
|-------|---------|
| favicon | **Html** |
| iframe | **Js** |
| 性能/优化 | **Js** |
| 面试题 | **Js** |
| 字体/颜色/布局 | **Css** |

---

## 三、工作流程

1. **前置检查**：验证工作目录、collections 目录及各分类 index.md 存在
2. **确定范围**：支持"同步26年3月"、"整理25年"、"同步所有"
3. **文件读取**：遍历目录，读取所有 .md 文件内容
4. **条目解析**：按 `#/##/###` 标题分割条目，移除数字前缀，保留链接完整
5. **去重检查**：链接、标题、内容三层去重
6. **分类写入**：按规则归类到对应 index.md，写入后验证
7. **非MD文件**：.js→Js/，.css/.less→Css/，其他按扩展名分类
8. **更新记录**：追加同步日期到 `collections/Log/todo.md`
9. **生成报告**：输出处理统计

---

## 四、核心规则

| 规则 | 说明 |
|-----|------|
| **禁止修改标题** | 仅允许移除数字序号前缀（如 `1、`），标题内容必须100%保持原样 |
| **保持链接完整** | Markdown 链接 `[文本](url)` 必须完整保留在标题内 |
| **禁止省略内容** | 每个条目必须完整包含标题到下一个标题之间的所有内容 |
| **禁止跳过条目** | 所有条目必须归入某个分类，边界条目需用户确认 |
| **单一分类** | 每个条目只能归入一个分类 |

---

## 五、触发示例

- "整理25年的内容到collections"
- "同步26年3月"
- "把26年1月到3月的日志分类"
- "同步所有未处理的日志"
理方案

