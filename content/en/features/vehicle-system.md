+++
title = "Vehicle System"
description = "A physics-driven vehicle framework unifying dynamics, control, and simulation for cars, aircraft, and vessels."
translationKey = "feature-vehicle-system"
weight = 60

[params]
slug = "vehicle-system"
icon = "car-front"
accent = "#FFB347"
tagline = "Physics-driven vehicles of every kind"
heroImage = "/media/features/vehicle-system.jpg"
related = ["flight-navigation-3d", "htn-ai", "double-precision-rendering"]
[[params.specs]]
k = "Vehicle types"
v = "Cars / aircraft / vessels"
[[params.specs]]
k = "Driven by"
v = "Rigid-body physics + dynamics models"
[[params.specs]]
k = "Control"
v = "Player control / AI autonomous driving"
[[params.specs]]
k = "Extensibility"
v = "Configurable chassis, wheels, propulsion, buoyancy"
+++

## Overview

Vehicles are a frequent need in simulation and games. DawnEngine provides a unified **vehicle system** built on rigid-body physics and dynamics models, with a framework supporting motion, control, and simulation for **cars, aircraft, and vessels**.

## Key Capabilities

- **Multiple vehicle types**: ground vehicles (suspension/tires), aircraft (lift/thrust), surface vessels (buoyancy/drag).
- **Physics-driven**: behavior grounded in rigid-body physics and dynamics parameters.
- **Player and AI modes**: drive directly, or hook up AI autonomous driving.
- **Configurable**: parameterized chassis, wheels, propulsion, and buoyancy for reuse and tuning.
- **Large-world friendly**: paired with [double-precision rendering](double-precision-rendering/), high-speed motion stays stable at distance.

## Use Cases

- Traffic simulation, autonomous-driving training, and visualization.
- Operation and scheduling analysis for low-altitude / maritime vehicles.
- Games and interactive experiences with vehicle-driving gameplay.

## Related Features

The vehicle system provides "physical movement", typically with the [HTN AI system](htn-ai/) for high-level decisions and [3D flight navigation](flight-navigation-3d/) (aerial) or ground navigation for paths — together enabling autonomous vehicles.
