+++
title = "3D Flight Navigation"
description = "True 3D aerial pathfinding for drones and aircraft, breaking past the planar limits of traditional ground navigation meshes."
translationKey = "feature-flight-navigation-3d"
weight = 50

[params]
slug = "flight-navigation-3d"
icon = "navigation"
accent = "#FF7A00"
tagline = "True 3D aerial pathfinding"
heroImage = "/media/features/flight-navigation-3d.jpg"
related = ["htn-ai", "vehicle-system", "world-partition"]
[[params.specs]]
k = "Space representation"
v = "Voxel / octree 3D space"
[[params.specs]]
k = "Pathfinding"
v = "3D A* / any-angle path smoothing"
[[params.specs]]
k = "Avoidance"
v = "Dynamic obstacles and altitude constraints"
[[params.specs]]
k = "Targets"
v = "Drones, aircraft, aerial agents"
+++

## Overview

Traditional navigation meshes (NavMesh) target ground walking and are essentially a 2D planar problem. For **drones, aircraft, and aerial agents**, navigation must happen in true 3D space — considering free space and obstacles both horizontally and vertically.

DawnEngine provides **3D flight navigation**, representing navigable 3D space with voxels/octrees to support genuine aerial pathfinding, obstacle avoidance, and route smoothing.

## Key Capabilities

- **3D space representation**: voxel / octree description of flyable space, supporting complex vertical structures.
- **True 3D pathfinding**: algorithms such as 3D A* plan routes through space rather than hugging the ground.
- **Dynamic avoidance**: real-time avoidance of moving obstacles and no-fly zones.
- **Altitude and corridor constraints**: support ceilings, corridors, and takeoff/landing points.
- **Path smoothing**: generate smooth routes consistent with aircraft dynamics.

## Use Cases

- Drone swarms, air traffic, and low-altitude economy simulation.
- Autonomous cruising, inspection, and search-and-rescue for aircraft.
- Aerial unit scheduling combined with situational analysis.

## Related Features

3D flight navigation solves "how to fly", typically with the [HTN AI system](htn-ai/) deciding "where to go and what to do", and the [vehicle system](vehicle-system/) applying realistic flight dynamics.
