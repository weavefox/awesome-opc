# README.md 内容规范

本规范用于约束 `README.md` 的内容格式，便于 AI 进行 Code Review 时自动检查。

## 整体结构

README.md 必须包含以下章节，按顺序排列：

1. **Header** — 项目标题、描述、徽章（可选）
2. **Policies** — 各国一人公司法律信息
3. **Inspiration** — 成功案例、知名 OPC、访谈演讲
4. **Tools** — 工具分类汇总
5. **Resources** — 学习资源
6. **OPC Products** — 真实 OPC 产品案例
7. **Contributing** — 贡献指南
8. **License** — 许可证

## 章节格式规范

### 标题格式

- 主标题使用 `##` 二级标题，格式为 `## 🏷️ Section Name`
- 子标题使用 `###` 三级标题，格式为 `### Subsection Name`
- 标题后紧跟一个空行

### 链接条目格式

每个链接条目必须遵循以下格式：

```markdown
- [标题](URL) — 简短描述（1-2 句话，说明该资源的核心价值）
```

**要求：**
- 标题用方括号包裹，URL 用圆括号包裹
- 标题和 URL 之间无空格
- URL 和描述之间用 `—`（空格 + 破折号 + 空格）分隔
- 描述必须简洁，不超过 2 句话
- 描述应说明该资源的**核心价值**或**独特性**，而非简单重复标题

### 工具类条目格式（Tools 章节）

Tools 章节的条目需额外包含 favicon 图标：

```markdown
- <img src="https://www.google.com/s2/favicons?domain=example.com&sz=16" width="16" height="16" /> [标题](URL) — 描述
```

**要求：**
- favicon URL 格式固定为 `https://www.google.com/s2/favicons?domain={域名}&sz=16`
- 图片尺寸固定为 `width="16" height="16"`
- 图片标签后跟一个空格，再接链接条目
- 每个子分类下的工具条目按**标题字母字典顺序**（A-Z）排列

### 子标题分组

每个主章节下应使用 `###` 子标题对内容进行逻辑分组：

- **Policies** 按地区分组（China, United States, Europe, Others）
- **Inspiration** 按类型分组（Success Stories, Notable One-Person Companies, Interviews & Talks）
- **Tools** 按功能分组（Building & Development, Design & UI, Marketing & Growth, Finance & Accounting, Productivity & Operations, AI-Powered）
- **Resources** 按类型分组（Books, Newsletters, Podcasts, Communities, Courses, Reports）

### 分隔线

- 每个主章节之间使用 `---` 分隔线
- 分隔线独占一行，前后各有一个空行

### 排序规则

- 各子标题下的条目按**字母顺序**排列
- 同一子标题下的条目不应重复

## AI Code Review 检查项

AI 在 Review 时应检查以下问题：

1. **结构完整性** — 是否包含所有必需章节，顺序是否正确
2. **标题格式** — 主标题是否使用 `##`，子标题是否使用 `###`
3. **链接格式** — 每个条目是否遵循 `[标题](URL) — 描述` 格式
4. **描述质量** — 描述是否简洁且有信息量，是否说明了核心价值
5. **工具图标** — Tools 章节条目是否包含正确格式的 favicon
6. **分隔线** — 章节间是否有 `---` 分隔线
7. **排序** — 子标题下条目是否按字母顺序排列
8. **重复检查** — 同一子标题下是否有重复条目
9. **URL 有效性** — URL 格式是否正确（以 http/https 开头）
10. **空行规范** — 标题后、分隔线前后是否有正确的空行

## 禁止事项

- 禁止在描述中使用过于笼统的表述（如 "这是一个很好的资源"）
- 禁止缺少描述字段
- 禁止使用非标准的 Markdown 格式
- 禁止在 Tools 章节遗漏 favicon 图标
- 禁止章节顺序混乱
