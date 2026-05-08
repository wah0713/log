---
name: "content-syncer"
description: "同步年份文件夹内容到collections目录。调用时机：用户要求整理log文件、按类型分类整理到collections时使用。"
---

# Content Syncer

这个skill用于将年份文件夹（如25/、26/）中的内容整理到collections目录中，按类型分类管理。

## 核心功能

1. **读取年份文件夹内容**
   - 读取年份文件夹中的所有markdown文件
   - 分析文件内容，识别类型（CSS、JS、Git、Software等）

2. **非md文件处理**
   - 将非md文件复制到对应的collections子文件夹
   - 例如：JS文件复制到 `collections/Js/` 目录
   - CSS文件复制到 `collections/Css/` 目录

3. **md内容整理**
   - 将markdown内容分类整理到对应的index.md文件中
   - 按照已有文件的格式添加新内容
   - 避免重复内容

## 工作流程

### 步骤1：分析年份文件夹结构
```
d:/code/log/26/
├── 01/
│   ├── 05.md
│   └── 21.md
├── 02/
│   ├── 09.md
│   └── 19.md
└── 03/
    ├── 02.md
    └── 18.md
```

### 步骤2：读取并分类内容
- CSS相关 → `progress()`、`anchor()`、`grid-lanes`等
- JavaScript相关 → `SoA`、`Promise.withResolvers()`、`Element.moveBefore()`等
- Git相关 → `git add -p`、`git worktree`、`git bisect`等
- Software工具 → `AirScan-QR`、`Magic Resume`、`Page Agent`等

### 步骤3：更新collections文件
使用 `Edit` 工具在对应index.md文件末尾添加新内容：
```markdown
### [新特性名称](URL)

> 特性描述

```代码示例
```
```

## 类型分类规则

| 内容类型 | 目标文件 | 说明 |
|---------|---------|------|
| CSS特性/属性 | `collections/Css/index.md` | 样式、布局、动画等 |
| JavaScript API/特性 | `collections/Js/index.md` | JS新特性、DOM API等 |
| Git命令/技巧 | `collections/Git/index.md` | Git操作、命令等 |
| 开发工具/网站 | `collections/Software/index.md` | 工具、资源网站等 |
| Vue相关 | `collections/Vue/index.md` | Vue特性、组件等 |
| 正则表达式 | `collections/RegExp/index.md` | RegExp技巧等 |

## 非md文件复制规则

- **.js文件** → 复制到 `collections/Js/` 目录
- **.css文件** → 复制到 `collections/Css/` 目录
- **其他代码文件** → 根据扩展名分类到对应目录

## 使用示例

当用户说：
- "整理25年的内容到collections"
- "帮我完善collections目录"
- "同步26年的新特性到collections"
- "把日期文件夹的内容整理分类"

时，调用此skill。

## 注意事项

1. **避免重复**：添加新内容前检查是否已存在
2. **保持格式**：遵循目标文件的已有格式
3. **内容验证**：确保URL和代码示例正确
4. **类型准确**：正确识别内容类型，避免分类错误
5. **非md优先**：非md文件应该复制到对应目录，而不是写入md文件

## 错误处理

- 如果目标文件不存在，先创建目录结构
- 如果内容已存在，跳过该条目
- 如果无法识别类型，归入Software或创建一个新的分类目录
