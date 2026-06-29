# 01 · 项目概述（Overview）

> DawnEngine 官方网站开发设计文档 · 第 1 部分
> 关联文档：[02 架构](02-architecture.md) · [03 设计系统](03-design-system.md) · [04 内容架构](04-content-architecture.md) · [05 国内访问与 CDN](05-china-cdn-performance.md) · [06 部署与 CI](06-deployment-ci.md)

## 1.1 背景

DawnEngine（破晓引擎）是一款基于开源引擎 [O3DE（Open 3D Engine）](https://o3de.org/) 二次开发的国产实时 3D 引擎，面向数字孪生、仿真推演、游戏与工业可视化等场景。官方网站（dawnengine.com）是品牌门户与开发者入口，需要：

- 清晰传达引擎的核心技术差异化（双精度渲染、World Partition、HTN AI、地理信息等）。
- 服务**国内**开发者与企业客户，确保**国内访问流畅**。
- 提供试用申请、商业授权、文档、社区、新闻等运营所需的内容载体（DawnEngine 为商业引擎，不提供公开免费下载）。

视觉与信息架构以 [CryEngine 官网](https://www.cryengine.com/) 为参考标杆：深色电影感基调、全屏视频 Hero、模块化特性展示、作品/生态墙、新闻卡片流、顶部透明渐变导航、暖色强调色。

## 1.2 目标（Goals）

| 编号 | 目标 | 衡量标准 |
| --- | --- | --- |
| G1 | 高质量品牌门户 | 视觉对标 CryEngine，达到电影级第一印象 |
| G2 | 国内访问流畅 | 国内主要城市首屏 LCP < 2.5s，无被墙第三方资源 |
| G3 | 内容可维护 | 全站内容为 Markdown，按章节解耦，运营可独立编辑 |
| G4 | 双语支持 | 中文（默认）+ 英文，结构镜像、可独立翻译 |
| G5 | 技术可信度 | 完整呈现 10 项核心特性，含技术说明与适用场景 |
| G6 | 易于扩展 | 新增特性 / 新闻 / 文档无需改动模板结构 |

## 1.3 非目标（Non-Goals）

- 不在本网站内实现账号体系与在线购买流程（首期试用申请与授权咨询通过商务联系/表单完成）。
- 不实现在线文档全文检索后端（首期用静态索引 + Lunr/Pagefind 等前端方案，详见 04）。
- 不做后台 CMS（采用 Git + Markdown 工作流）。

## 1.4 目标受众（Audience）

| 人群 | 关注点 | 对应栏目 |
| --- | --- | --- |
| 游戏 / 仿真开发者 | 引擎能力、上手成本、文档 | 特性、学习、申请试用 |
| 技术决策者 / CTO | 自主可控、国产化、稳定性 | 特性（国产化）、生态、关于 |
| 政企客户 | 合规、地理信息、信创适配 | 特性（Cesium、国产化）、生态 |
| 社区贡献者 | 路线图、参与方式 | 社区、路线图、新闻 |

## 1.5 范围（Scope）

本仓库交付物分两类：

- **(A) 开发设计文档**：`docs/` 下的 6 个 Markdown 文件（即本系列）。
- **(B) 网站正文内容**：`content/zh/`、`content/en/` 下按章节拆分的双语 Markdown，以及支撑用的 `hugo.toml` 与 `i18n/` 文案。

**自研主题（模板/CSS/JS）在本期仅做规格化说明（见 [03](03-design-system.md)），不落地模板代码。**

## 1.6 核心特性清单（用于全站内容映射）

| # | 特性 | 内容页 slug | 一句话定位 |
| --- | --- | --- | --- |
| 1 | 基于 O3DE 二次开发 | `built-on-o3de` | 成熟开源底座 + 自主商业化增强（商业授权） |
| 2 | 增强双精度渲染 | `double-precision-rendering` | 大世界无抖动，星球级坐标精度 |
| 3 | World Partition | `world-partition` | 自动分区流式加载的超大世界 |
| 4 | HTN AI 系统 | `htn-ai` | 分层任务网络驱动的可解释 AI |
| 5 | 3D 飞行导航 | `flight-navigation-3d` | 真三维空中寻路（无人机/飞行器） |
| 6 | 载具系统 | `vehicle-system` | 物理驱动的车辆/飞行器/船舶 |
| 7 | 像素流 | `pixel-streaming` | 云端渲染、浏览器零安装访问 |
| 8 | 多通道渲染 | `multi-channel-rendering` | 多视口/多屏/多 GPU 协同输出 |
| 9 | Cesium 地理系统 | `cesium-geospatial` | 真实地球 + 倾斜摄影 + 3D Tiles |
| 10 | 国产化支持 | `domestic-os` | 银河麒麟 / UOS / 鸿蒙 OS 信创适配 |

## 1.7 术语表（Glossary）

| 术语 | 含义 |
| --- | --- |
| O3DE | Open 3D Engine，Linux 基金会托管的开源 3D 引擎 |
| HTN | Hierarchical Task Network，分层任务网络（AI 规划方法） |
| World Partition | 世界分区，按网格自动切分与流式加载的大世界方案 |
| Pixel Streaming | 像素流，服务端渲染、客户端仅接收视频流的交互方式 |
| 3D Tiles | OGC 标准的三维地理空间数据瓦片格式 |
| 信创 | 信息技术应用创新，国产软硬件自主可控生态 |
| ICP 备案 | 国内网站合法运营所需的工信部备案 |
| LCP | Largest Contentful Paint，最大内容绘制（性能指标） |

## 1.8 文档导航

1. [01 概述](01-overview.md) — 本文
2. [02 架构与技术栈](02-architecture.md)
3. [03 设计系统（对标 CryEngine）](03-design-system.md)
4. [04 内容架构与信息架构](04-content-architecture.md)
5. [05 国内访问优化与 CDN](05-china-cdn-performance.md)
6. [06 部署与 CI/CD](06-deployment-ci.md)
