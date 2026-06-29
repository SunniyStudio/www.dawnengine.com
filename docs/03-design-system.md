# 03 · 设计系统（Design System，对标 CryEngine）

> DawnEngine 官方网站开发设计文档 · 第 3 部分
> 上一篇：[02 架构](02-architecture.md) · 下一篇：[04 内容架构](04-content-architecture.md)

本节将自研 Hugo 主题完整规格化：色彩、字体、间距、组件、动效与模板清单。**本期只输出规格，不实现模板代码**——但所有令牌与组件都可直接落地为 `assets/scss/` 与 `layouts/`。

## 3.1 设计基调

参考 [CryEngine 官网](https://www.cryengine.com/)：深色电影感、全屏视频 Hero、高对比影像、模块化特性块、暖色强调色、顶部透明渐变导航。

DawnEngine 在此基础上注入「破晓（Dawn）」品牌语义——以**日出暖色渐变**为强调色（橙→琥珀），区别于 CryEngine 的纯橙，呼应引擎名称。

| 关键词 | 应用 |
| --- | --- |
| Cinematic（电影感） | 全屏视频/大图 Hero，深色留白，大字标题 |
| Technical（技术感） | 等宽数字、栅格线、参数化数据展示 |
| Dawn（破晓） | 橙→琥珀渐变强调，区别于纯红橙 |
| Professional（专业） | 克制动效、强对比、清晰层级 |

## 3.2 色彩令牌（Color Tokens）

深色为默认主题（OLED 友好），令牌定义于 `assets/scss/_tokens.scss`：

```scss
:root {
  /* 基底 / Surfaces */
  --c-bg:            #0B0B0D;   /* 页面底 */
  --c-surface:       #121214;   /* 卡片/区块 */
  --c-surface-2:     #1A1B1F;   /* 抬升层 */
  --c-border:        #26272C;   /* 分隔线/描边 */

  /* 文本 */
  --c-text:          #F5F6F8;   /* 主文本，对比≥ 12:1 */
  --c-text-muted:    #9AA0A8;   /* 次级文本，对比≥ 4.5:1 */
  --c-text-faint:    #6B7178;   /* 占位/禁用 */

  /* 品牌强调：破晓渐变 */
  --c-accent:        #FF7A00;   /* 主橙（CTA/链接/高亮） */
  --c-accent-2:      #FFB347;   /* 琥珀（渐变终点） */
  --c-accent-grad:   linear-gradient(135deg, #FF7A00 0%, #FFB347 100%);
  --c-accent-ink:    #0B0B0D;   /* 强调底上的文字色（橙底用深色） */

  /* 语义 */
  --c-success:       #22C55E;
  --c-warning:       #F59E0B;
  --c-danger:        #EF4444;
  --c-info:          #38BDF8;
}
```

对比度校验（WCAG AA，≥ 4.5:1 正文 / 3:1 大字）：
- `--c-text` on `--c-bg`：约 15:1（AAA）。
- `--c-text-muted` on `--c-bg`：约 6.5:1（AA）。
- `--c-accent-ink` on `--c-accent`：橙底用深色文字，约 8:1（AAA）。
- **强调橙严禁作为深色底上的小号正文色**（橙 on 黑约 4:1，仅可用于大字/图标/边框/CTA 背景）。

> 浅色模式：本期默认仅深色（与 CryEngine 一致）。若后续需要浅色，按 `prefers-color-scheme` 增加令牌覆盖层，遵守 ui-ux-pro-max 浅色对比规则（正文 `#0F172A`、次级 `#475569`、边框 `#E2E8F0`）。

## 3.3 字体与排版（Typography）

中英混排，**全部自托管子集化**以规避 Google Fonts 在国内不可用（详见 [05](05-china-cdn-performance.md)）。

| 角色 | 拉丁字体 | 中文字体 | 用途 |
| --- | --- | --- | --- |
| 标题 Display | **Outfit**（几何无衬线，700/600） | 思源黑体 / Noto Sans SC（700） | H1–H3、Hero 标语 |
| 正文 Body | **Inter** / Work Sans（400/500） | Noto Sans SC（400/500） | 段落、列表 |
| 数据 Mono | **JetBrains Mono** / IBM Plex Mono | — | 版本号、参数、代码 |

字阶（模块化比例 1.25，移动端略收紧）：

```scss
--fs-display: clamp(2.5rem, 5vw, 4.5rem);  /* Hero 标题 */
--fs-h1: clamp(2rem, 3.5vw, 3rem);
--fs-h2: clamp(1.5rem, 2.5vw, 2.25rem);
--fs-h3: 1.5rem;
--fs-body: 1.0625rem;   /* 17px，正文 */
--fs-small: 0.875rem;
--lh-tight: 1.1;        /* 标题 */
--lh-body: 1.7;         /* 中文正文需较大行高 */
```

排版规则：
- 中文正文行高 1.7–1.8，西文 1.5–1.6；段落间距 ≥ 1em。
- 标题用 `letter-spacing: -0.02em`，大写英文标签用 `letter-spacing: 0.08em`。
- 正文测量宽度 ≤ 72ch（`max-width: 72ch`）。

## 3.4 间距、栅格与圆角

```scss
/* 8px 基准间距阶 */
--space-1: 4px;  --space-2: 8px;  --space-3: 12px; --space-4: 16px;
--space-6: 24px; --space-8: 32px; --space-12: 48px; --space-16: 64px;
--space-24: 96px; --space-32: 128px;  /* 大区块间距 48px+ */

--container: 1200px;     /* 内容最大宽度，全站统一 */
--container-wide: 1440px;
--radius-sm: 6px; --radius: 12px; --radius-lg: 20px; --radius-full: 9999px;

/* 响应式断点 */
--bp-sm: 375px; --bp-md: 768px; --bp-lg: 1024px; --bp-xl: 1440px;
```

- 12 列流式栅格，gutter 24px；区块（section）垂直间距 96–128px（电影感留白）。
- 全站统一容器宽度 `--container`，避免宽度不一致。

## 3.5 阴影、玻璃与动效

```scss
--shadow-card: 0 8px 30px rgba(0,0,0,0.35);
--shadow-glow: 0 0 40px rgba(255,122,0,0.25);  /* 破晓辉光，克制使用 */
--glass: rgba(20,21,25,0.72);                   /* 深色玻璃卡，配 backdrop-filter: blur(12px) */
--ease: cubic-bezier(0.22, 1, 0.36, 1);
--dur: 220ms;                                    /* 150–300ms */
```

动效规范：
- 过渡使用 `transition: color/background/transform var(--dur) var(--ease)`。
- **hover 用颜色/透明度/辉光位移，不用会引发布局抖动的 scale**（卡片如需缩放限 `scale(1.02)` 且 `will-change: transform`）。
- 滚动揭示：Intersection Observer 触发 `opacity + translateY(16px)`，错峰 60ms。
- **必须实现 `prefers-reduced-motion: reduce` 回退**（关闭位移与视差，仅保留淡入）。

## 3.6 组件清单（Components）

| 组件 | 说明 | 关键状态/无障碍 |
| --- | --- | --- |
| Navbar（顶部导航） | 初始透明、滚动后实色 `--c-surface` + 描边；含 Logo、主导航、语言切换、申请试用 CTA；移动端抽屉 | `cursor-pointer`、焦点可见、`aria-expanded`、键盘可达 |
| Hero（全屏视频） | 全屏视频背景 + poster + 渐变遮罩 + 大标题 + 双 CTA；视频懒加载、移动端降级为静态图 | 视频 `muted/loop/playsinline`、提供 poster、动效尊重 reduced-motion |
| FeatureBlock（特性交替块） | 左右交替的图文区块（图/视频 + 标题 + 描述 + 链接） | 语义 `<section>`、图片 alt |
| BentoGrid（特性宫格） | 首页核心特性宫格，大小不一的卡片 | 卡片整体可点击、`cursor-pointer`、hover 描边/辉光 |
| FeatureCard（特性卡） | 图标 + 标题 + 摘要 + 强调色描边 | SVG 图标（非 emoji）、统一 24×24 viewBox |
| LogoWall（生态墙） | 合作伙伴灰度 logo，hover 还原彩色 | `<img alt>`、grayscale→color 过渡 |
| NewsCard（新闻卡） | 封面 + 分类标签 + 标题 + 日期 + 摘要 | 整卡链接、日期 `<time>` |
| StatStrip（数据条） | 关键指标（如「双精度 64-bit」「PB 级地理数据」） | 等宽数字、对比强调 |
| CTASection（行动召唤） | 渐变背景 + 标题 + 按钮 | 强调底深色文字 |
| Footer（页脚） | 多列链接、备案号、语言切换、版权 | 备案号必须可见（见 05） |
| Button | primary（橙渐变）/secondary（描边）/ghost | 焦点环、`cursor-pointer`、≥ 44px 触达 |
| Breadcrumb / TOC | 特性与文档内页 | `aria-current` |
| LangSwitcher（语言切换） | 跳转到当前页对应 `translationKey` 译文 | `hreflang` |

图标统一采用 **Lucide / Heroicons SVG**（24×24 viewBox，`w-6 h-6`），**禁止使用 emoji 作为图标**。品牌 logo 使用官方 SVG（如需第三方 logo 从 Simple Icons 取）。

## 3.7 模板清单（仅规格）

落地时建议的 `layouts/` 结构：

```
layouts/
├── baseof.html              # 文档骨架：head(资源管线/字体preload)、header、main、footer
├── index.html               # 首页（home）：Hero + Bento + FeatureBlock×N + LogoWall + News + CTA
├── _default/
│   ├── list.html            # 栏目列表（features/news/...）
│   ├── single.html          # 通用内页
│   └── taxonomy.html        # 分类/标签
├── features/
│   ├── list.html            # 特性总览（Bento/网格）
│   └── single.html          # 单个特性详情（Hero + 段落 + 规格表 + 相关特性）
├── news/
│   ├── list.html            # 新闻流（NewsCard 网格 + 分页）
│   └── single.html          # 文章详情（封面 + 正文 + 分享）
├── partials/
│   ├── head.html  header.html  footer.html
│   ├── navbar.html  lang-switcher.html
│   ├── hero.html  bento.html  feature-card.html
│   ├── news-card.html  logo-wall.html  cta.html
│   ├── seo.html（meta/OG/JSON-LD）  analytics.html（国内统计，见 05）
│   └── image.html（响应式 srcset/WebP 封装）
└── shortcodes/
    ├── feature-grid.html    # 在 Markdown 中嵌入特性宫格
    ├── stat.html            # 数据指标
    ├── video.html           # 自托管/Bilibili 视频（见 05）
    ├── note.html            # 提示框
    └── spec-table.html      # 规格参数表
```

## 3.8 SCSS 组织

```
assets/scss/
├── main.scss          # 入口（import 顺序）
├── _tokens.scss       # 3.2–3.5 全部 CSS 变量
├── _reset.scss        # 现代化 reset + box-sizing
├── _typography.scss   # 字阶/中文优化/标题
├── _layout.scss       # 容器/栅格/section 间距
├── _utilities.scss    # 间距/对齐/可见性工具类
└── components/         # 每组件一个文件（与 3.6 对应）
```

## 3.9 交付前检查清单（ui-ux-pro-max）

落地主题与每个页面交付前必须逐项确认：

- [ ] 无 emoji 作图标，统一 Lucide/Heroicons SVG
- [ ] 所有可点击元素有 `cursor-pointer`，且 hover 有清晰反馈
- [ ] 过渡 150–300ms，hover 不引发布局抖动
- [ ] 深色文本对比 ≥ 4.5:1；强调橙不用于小号正文
- [ ] 键盘焦点态可见（focus-visible 焦点环）
- [ ] `prefers-reduced-motion` 已处理
- [ ] 响应式覆盖 375 / 768 / 1024 / 1440，无移动端横向滚动
- [ ] 所有图片有 alt，表单控件有 label
- [ ] 颜色不作为唯一信息载体（标签同时带文字/图标）
- [ ] 顶部固定导航不遮挡内容（main 预留高度）
