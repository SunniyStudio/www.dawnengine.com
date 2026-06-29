+++
title = "载具系统"
description = "物理驱动的载具框架，统一支持车辆、飞行器与船舶的动力学、操控与仿真。"
translationKey = "feature-vehicle-system"
weight = 60

[params]
slug = "vehicle-system"
icon = "car-front"
accent = "#FFB347"
tagline = "物理驱动的多类载具"
heroImage = "/media/features/vehicle-system.jpg"
related = ["flight-navigation-3d", "htn-ai", "double-precision-rendering"]
[[params.specs]]
k = "载具类型"
v = "车辆 / 飞行器 / 船舶"
[[params.specs]]
k = "驱动"
v = "刚体物理 + 动力学模型"
[[params.specs]]
k = "操控"
v = "玩家操控 / AI 自主驾驶"
[[params.specs]]
k = "扩展"
v = "可配置底盘、轮系、推进与浮力"
+++

## 概述

载具是仿真与游戏中的高频需求。DawnEngine 提供统一的**载具系统**，以刚体物理与动力学模型为基础，框架化支持**车辆、飞行器、船舶**等多类载具的运动、操控与仿真。

## 核心能力

- **多类载具**：地面车辆（悬挂/轮胎）、空中飞行器（升力/推力）、水面船舶（浮力/阻力）。
- **物理驱动**：基于刚体物理与动力学参数，行为真实可信。
- **玩家与 AI 双模式**：既可玩家直接操控，也可接入 AI 自主驾驶。
- **可配置**：底盘、轮系、推进、浮力等参数化，便于复用与调校。
- **大世界友好**：与[双精度渲染](double-precision-rendering/)配合，远距高速运动依旧稳定。

## 适用场景

- 交通仿真、自动驾驶训练与可视化。
- 低空 / 海上载具的运行与调度推演。
- 含载具驾驶玩法的游戏与互动体验。

## 协同特性

载具系统提供"物理移动"，常由 [HTN AI 系统](htn-ai/)做高层决策、[3D 飞行导航](flight-navigation-3d/)（空中）或地面导航提供路径，三者协同实现自主载具。
