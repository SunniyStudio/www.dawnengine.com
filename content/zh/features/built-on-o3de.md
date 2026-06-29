+++
title = "基于 O3DE 二次开发"
description = "DawnEngine 构建于开源引擎 O3DE 之上，继承其成熟模块化架构并进行自主商业化增强。"
translationKey = "feature-built-on-o3de"
weight = 10

[params]
slug = "built-on-o3de"
icon = "boxes"
accent = "#FF7A00"
tagline = "开放底座，自主增强"
heroImage = "/media/features/built-on-o3de.jpg"
related = ["double-precision-rendering", "world-partition", "domestic-os"]
[[params.specs]]
k = "上游引擎"
v = "O3DE（Open 3D Engine）"
[[params.specs]]
k = "上游许可"
v = "Apache 2.0 / MIT（开源底座）"
[[params.specs]]
k = "DawnEngine 授权"
v = "商业授权（试用 + 商业许可）"
[[params.specs]]
k = "架构"
v = "Gem 模块化、组件实体系统（ECS）"
[[params.specs]]
k = "渲染后端"
v = "Atom 渲染器（Vulkan / DX12 / Metal）"
+++

## 概述

DawnEngine 并非从零造轮子，而是站在 [O3DE（Open 3D Engine）](https://o3de.org/) 这一由 Linux 基金会托管的开源引擎肩膀上。O3DE 拥有现代化的 **Atom 渲染器**、**Gem 模块化体系**与**组件实体架构**，并采用对商业极为友好的 **Apache 2.0 / MIT** 许可。

DawnEngine 是基于该开放底座二次开发的**商业引擎**，在其之上做了面向大世界、仿真与国产化的深度增强。底层采用成熟开源引擎可降低供应链与底座锁定风险，而 DawnEngine 的增强能力与服务以商业授权方式提供，并配套专业技术支持。

## 核心能力

- **成熟底座**：继承 O3DE 的模块化 Gem 体系，按需裁剪与扩展，降低底座供应链风险。
- **自主增强**：双精度、World Partition、HTN AI 等均以 Gem 形式叠加，边界清晰（DawnEngine 专有能力）。
- **可持续升级**：保持与上游的兼容性策略，便于吸收社区进展。
- **商业保障**：以商业授权 + 技术支持交付，适合商业项目与政企交付。

## 适用场景

- 希望基于成熟底座快速搭建自主可控产品、并需要商业支持的团队。
- 需要在通用引擎之上扩展行业能力（仿真、地理、数字孪生）的项目。
- 关注供应链安全、合规与长期可维护性的企业与机构。

## 与上游的关系

DawnEngine 的增强以 **Gem / 模块**形式组织，尽量降低对上游核心的侵入，使关键能力可独立演进，同时持续跟进 O3DE 社区版本。前往[生态系统](/ecosystem/)了解我们与上游及国产生态的协作。
