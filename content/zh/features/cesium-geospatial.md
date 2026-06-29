+++
title = "Cesium 地理系统"
description = "集成 Cesium 真实地球，支持全球地形影像、倾斜摄影与 3D Tiles，构建厘米级到星球级的地理世界。"
translationKey = "feature-cesium-geospatial"
weight = 90

[params]
slug = "cesium-geospatial"
icon = "globe"
accent = "#FF7A00"
tagline = "真实地球，从厘米到星球"
heroImage = "/media/features/cesium-geospatial.jpg"
related = ["double-precision-rendering", "world-partition", "pixel-streaming"]
[[params.specs]]
k = "地球模型"
v = "WGS84 真实地球椭球"
[[params.specs]]
k = "数据格式"
v = "3D Tiles / 倾斜摄影 / 地形影像"
[[params.specs]]
k = "坐标"
v = "地理坐标与双精度对齐"
[[params.specs]]
k = "规模"
v = "PB 级海量地理数据流式加载"
+++

## 概述

数字孪生与 GIS 应用要求场景与**真实地理坐标**精确对齐。DawnEngine 集成 **Cesium** 地理能力，支持全球地形、卫星影像、倾斜摄影模型与 **3D Tiles** 海量数据，让你在真实地球之上构建从厘米级精度到星球级范围的地理世界。

## 核心能力

- **真实地球**：基于 WGS84 椭球的全球地理框架。
- **3D Tiles**：流式加载海量倾斜摄影、点云与 BIM 模型。
- **地形与影像**：全球地形高程与卫星/航拍影像叠加。
- **地理坐标对齐**：与[双精度渲染](double-precision-rendering/)协同，经纬度/高程精确无抖动。
- **海量数据**：PB 级地理数据按视距流式调度。

## 适用场景

- 城市级 / 流域级 / 全国域数字孪生。
- 智慧城市、应急、交通、能源等 GIS 融合可视化。
- 实景三维与倾斜摄影的大规模承载与浏览。

## 协同特性

Cesium 提供"真实地理底座"，与[增强双精度渲染](double-precision-rendering/)保证精度、[World Partition](world-partition/)保证规模，再经[像素流](pixel-streaming/)交付到 Web 端，构成完整的地理孪生方案。
