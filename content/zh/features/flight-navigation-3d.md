+++
title = "3D 飞行导航"
description = "面向无人机与飞行器的真三维空中寻路，突破传统地面导航网格的平面限制。"
translationKey = "feature-flight-navigation-3d"
weight = 50

[params]
slug = "flight-navigation-3d"
icon = "navigation"
accent = "#FF7A00"
tagline = "真三维空中寻路"
heroImage = "/media/features/flight-navigation-3d.jpg"
related = ["htn-ai", "vehicle-system", "world-partition"]
[[params.specs]]
k = "空间表示"
v = "体素 / 八叉树三维空间"
[[params.specs]]
k = "寻路"
v = "三维 A* / 任意角度路径平滑"
[[params.specs]]
k = "避障"
v = "动态障碍与高度约束"
[[params.specs]]
k = "适用"
v = "无人机、飞行器、空中智能体"
+++

## 概述

传统导航网格（NavMesh）面向地面行走，本质是二维平面问题。对**无人机、飞行器、空中智能体**而言，导航必须在真三维空间中进行——需要同时考虑水平与垂直方向的可行空间与障碍。

DawnEngine 提供**3D 飞行导航**，以体素/八叉树表示三维可行空间，支持真正的空中寻路、避障与航线平滑。

## 核心能力

- **三维空间表示**：用体素 / 八叉树描述可飞行空间，支持复杂高度结构。
- **真三维寻路**：三维 A* 等算法在空间中规划航线，而非贴地绕行。
- **动态避障**：对移动障碍与禁飞区实时规避。
- **高度与航线约束**：支持限高、走廊、起降点等约束。
- **路径平滑**：生成符合飞行器动力学的平滑航线。

## 适用场景

- 无人机蜂群、空中交通与低空经济仿真。
- 飞行器自主巡航、巡检与搜救。
- 与态势推演结合的空中单位调度。

## 协同特性

3D 飞行导航解决"怎么飞"，常由 [HTN AI 系统](htn-ai/)决定"飞去哪、去做什么"，并通过[载具系统](vehicle-system/)施加真实飞行动力学。
