+++
title = "增强双精度渲染"
description = "64 位双精度世界坐标，让城市级乃至星球级的大世界在远离原点时依然稳定无抖动。"
translationKey = "feature-double-precision-rendering"
weight = 20

[params]
slug = "double-precision-rendering"
icon = "ruler"
accent = "#FFB347"
tagline = "星球级坐标，远景无抖动"
heroImage = "/media/features/double-precision-rendering.jpg"
related = ["world-partition", "cesium-geospatial", "built-on-o3de"]
[[params.specs]]
k = "坐标精度"
v = "64-bit 双精度世界坐标"
[[params.specs]]
k = "原点策略"
v = "相机相对原点 / 分区局部坐标"
[[params.specs]]
k = "适用尺度"
v = "城市级 → 星球级"
[[params.specs]]
k = "兼容"
v = "与 World Partition、Cesium 协同"
+++

## 概述

传统引擎多采用 32 位单精度浮点表示世界坐标。当物体远离世界原点（数公里之外）时，浮点精度急剧下降，导致**画面抖动、Z-fighting、物理不稳定**。这对城市级数字孪生与星球级仿真是致命的。

DawnEngine 增强了**双精度（64-bit）世界坐标**管线，结合**相机相对渲染**与**分区局部坐标**策略，使物体无论距离原点多远，都能保持稳定精确的呈现。

## 核心能力

- **64 位世界坐标**：从米级到上万公里尺度保持精度。
- **相机相对渲染**：以相机为参考重建局部坐标，规避 GPU 单精度限制。
- **稳定的远景**：消除远离原点时的抖动与 Z-fighting。
- **物理一致**：高精度坐标同步驱动物理与碰撞，避免大世界下的数值漂移。

## 适用场景

- 城市 / 园区级数字孪生与可视化。
- 航空航天、地球与星球尺度仿真。
- 与真实地理坐标对齐的 GIS / BIM 融合场景。

## 协同特性

双精度是大世界的基石，通常与 [World Partition](world-partition/) 的分区流式加载、[Cesium 地理系统](cesium-geospatial/) 的真实地球坐标协同使用，共同支撑无缝、精确的大尺度世界。
