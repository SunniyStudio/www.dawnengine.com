+++
title = "HTN AI System"
description = "Explainable AI based on Hierarchical Task Networks (HTN), making agent decisions traceable, debuggable, and extensible."
translationKey = "feature-htn-ai"
weight = 40

[params]
slug = "htn-ai"
icon = "brain-circuit"
accent = "#FFB347"
tagline = "Explainable, hierarchical intelligence"
heroImage = "/media/features/htn-ai.jpg"
related = ["flight-navigation-3d", "vehicle-system", "world-partition"]
[[params.specs]]
k = "Planning method"
v = "Hierarchical Task Network"
[[params.specs]]
k = "Explainability"
v = "Traceable task-decomposition chains"
[[params.specs]]
k = "Extensibility"
v = "Reusable domains and methods"
[[params.specs]]
k = "Runtime"
v = "Supports large-scale concurrent agents"
+++

## Overview

Agent behavior in games and simulation is often implemented with behavior trees (BT) or finite-state machines (FSM), but as complexity grows the logic becomes hard to maintain and explain. **HTN (Hierarchical Task Network)** decomposes high-level goals layer by layer into executable atomic tasks, making AI decision-making **structured, explainable, and reusable**.

DawnEngine ships an HTN planner, well suited to simulation and advanced NPCs that need complex, auditable behavior.

## Key Capabilities

- **Hierarchical decomposition**: plan from abstract goals down to concrete actions.
- **Explainable decisions**: every decision has a clear decomposition chain for debugging and auditing.
- **Domain reuse**: methods and operators are reusable across scenarios.
- **Dynamic replanning**: replan when the environment changes to keep behavior sensible.
- **Scale**: supports concurrent planning for large numbers of agents.

## Use Cases

- Military / emergency / traffic simulation that needs **explainable decisions**.
- Advanced NPCs and cooperative agents driven by complex tasks.
- Projects that want to capture domain knowledge as a reusable planning library.

## Related Features

HTN planning often pairs with motion: [3D flight navigation](flight-navigation-3d/) provides aerial pathfinding and the [vehicle system](vehicle-system/) provides physical movement — HTN decides "what to do" while navigation and vehicles handle "how to move".
