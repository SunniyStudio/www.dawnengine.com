+++
title = "Pixel Streaming"
description = "Cloud rendering with zero-install browser access, so high-fidelity 3D apps run instantly on any device."
translationKey = "feature-pixel-streaming"
weight = 70

[params]
slug = "pixel-streaming"
icon = "monitor-play"
accent = "#FF7A00"
tagline = "Cloud rendering, reachable from any browser"
heroImage = "/media/features/pixel-streaming.jpg"
related = ["multi-channel-rendering", "cesium-geospatial", "world-partition"]
[[params.specs]]
k = "Transport"
v = "Low-latency video over WebRTC"
[[params.specs]]
k = "Client"
v = "Modern browser, zero install"
[[params.specs]]
k = "Interaction"
v = "Mouse / keyboard / touch input upstream"
[[params.specs]]
k = "Scaling"
v = "Concurrent instances, elastic scaling"
+++

## Overview

High-fidelity 3D apps usually demand powerful client hardware and struggle on low-end or mobile devices. **Pixel Streaming** moves rendering to cloud GPUs and pushes frames to the client as a low-latency video stream — users **access it from a browser alone**, with input sent back to the cloud in real time.

## Key Capabilities

- **Cloud rendering**: compute concentrated on server GPUs; no high-end client needed.
- **Zero-install access**: open directly in a modern browser — no download or deployment.
- **Low-latency interaction**: frames over WebRTC, with mouse/keyboard/touch input streamed back in real time.
- **Elastic scaling**: spin up multiple instances by concurrency to match peak traffic.
- **Cross-device**: consistent experience on PC, mobile, and large displays.

## Use Cases

- High-fidelity web presentation for digital-twin / GIS platforms.
- Customer-facing product demos, online reviews, and collaboration.
- Access to heavy 3D apps from constrained endpoints (thin clients, mobile).

## Related Features

Pixel streaming is a "delivery method", often carrying large worlds built with [Cesium geospatial](cesium-geospatial/) and [World Partition](world-partition/); for command-center displays, combine with [multi-channel rendering](multi-channel-rendering/).
