+++
title = "像素流"
description = "云端渲染、浏览器零安装访问，让高画质 3D 应用在任意设备上即开即用。"
translationKey = "feature-pixel-streaming"
weight = 70

[params]
slug = "pixel-streaming"
icon = "monitor-play"
accent = "#FF7A00"
tagline = "云端渲染，浏览器即达"
heroImage = "/media/features/pixel-streaming.jpg"
related = ["multi-channel-rendering", "cesium-geospatial", "world-partition"]
[[params.specs]]
k = "传输"
v = "基于 WebRTC 的低延迟视频流"
[[params.specs]]
k = "客户端"
v = "现代浏览器，零安装"
[[params.specs]]
k = "交互"
v = "键鼠 / 触控输入回传"
[[params.specs]]
k = "扩展"
v = "多实例并发、可弹性伸缩"
+++

## 概述

高画质 3D 应用通常对终端硬件要求很高，难以在低配设备或移动端流畅运行。**像素流（Pixel Streaming）** 把渲染放到云端 GPU，将画面以低延迟视频流推送到客户端，用户**仅用浏览器即可访问**，输入实时回传到云端。

## 核心能力

- **云端渲染**：算力集中在服务器 GPU，终端无需高配。
- **零安装访问**：现代浏览器直接打开，免下载、免部署。
- **低延迟交互**：基于 WebRTC 传输画面，键鼠/触控输入实时回传。
- **弹性伸缩**：按并发数启动多实例，匹配访问峰值。
- **跨设备**：PC、移动端、大屏一致体验。

## 适用场景

- 数字孪生 / GIS 平台的 Web 端高画质展示。
- 面向客户的产品演示、在线评审与协同。
- 受限终端（瘦客户端、移动端）访问重型 3D 应用。

## 协同特性

像素流是"交付方式"，常承载[Cesium 地理系统](cesium-geospatial/)与[World Partition](world-partition/)构建的大世界；在指挥大屏等场景再结合[多通道渲染](multi-channel-rendering/)。
