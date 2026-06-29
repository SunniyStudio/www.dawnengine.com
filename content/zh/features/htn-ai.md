+++
title = "HTN AI 系统"
description = "基于分层任务网络（HTN）的可解释 AI，让智能体的决策有据可循、易于调试与扩展。"
translationKey = "feature-htn-ai"
weight = 40

[params]
slug = "htn-ai"
icon = "brain-circuit"
accent = "#FFB347"
tagline = "可解释的分层智能"
heroImage = "/media/features/htn-ai.jpg"
related = ["flight-navigation-3d", "vehicle-system", "world-partition"]
[[params.specs]]
k = "规划方法"
v = "Hierarchical Task Network（分层任务网络）"
[[params.specs]]
k = "可解释性"
v = "可追溯的任务分解链路"
[[params.specs]]
k = "扩展性"
v = "领域(domain)与方法(method)可复用"
[[params.specs]]
k = "运行"
v = "支持大规模智能体并发"
+++

## 概述

游戏与仿真中的智能体行为，常用行为树（BT）或状态机（FSM）实现，但随着复杂度上升，逻辑容易变得难以维护、难以解释。**HTN（Hierarchical Task Network，分层任务网络）** 通过将"高层目标"逐层分解为"可执行的原子任务"，让 AI 的决策过程**结构化、可解释、可复用**。

DawnEngine 内置 HTN 规划器，适合需要复杂、可审计行为的仿真推演与高级 NPC。

## 核心能力

- **分层任务分解**：从抽象目标到具体动作逐层规划。
- **可解释决策**：每个决策都有清晰的任务分解链路，便于调试与审计。
- **领域复用**：方法（method）与算子（operator）可在不同场景间复用。
- **动态重规划**：环境变化时重新规划，保持行为合理。
- **规模化**：支持大量智能体并发规划。

## 适用场景

- 军事 / 应急 / 交通等需要**可解释决策**的仿真推演。
- 复杂任务驱动的高级 NPC 与协作智能体。
- 需要把领域知识沉淀为可复用规划库的项目。

## 协同特性

HTN 规划常与运动能力结合：由 [3D 飞行导航](flight-navigation-3d/)提供空中寻路、[载具系统](vehicle-system/)提供物理移动，HTN 负责"做什么"，导航与载具负责"怎么动"。
