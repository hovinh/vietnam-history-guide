# PROJECT RULES — Vietnam History Guide

## Tech Stack
- React (Vite)
- TailwindCSS
- No additional libraries unless explicitly required

## Core Features
- Timeline page (primary)
- Entity page (secondary)
- Language toggle (vi/en)

## Timeline Rules
- Vertical timeline
- Nodes alternate left/right
- Each node must include:
  - timestamp (YYYY/MM/DD)
  - title
  - description
  - image
- Max ~50 nodes
- Organized into 3 phases (10 / 20 / 20)

## Entity Rules
- Entities grouped by category (e.g., Political, Battles)
- Each entity:
  - square card
  - caption
  - expandable dropdown
- Dropdown must link to timeline nodes

## Navigation Rules
- Clicking entity → show related events
- Clicking event → scroll to correct timeline node

## Data Rules
- Use file-based JSON (Phase 1)
- events.json and entities.json
- Maintain relationships (many-to-many)

## UI Rules
- Clean, modern layout
- No over-design
- No unnecessary animation
- Consistent spacing (8px system)

## Code Rules
- Functional components only
- No inline CSS
- Reusable components
- No duplicated logic

## Strict Constraints
- Do NOT invent new features
- Do NOT redesign UI
- Do NOT add extra components not required
- Do NOT over-engineer

## Workflow Rules
1. DESIGN.md must be created first
2. Code must strictly follow DESIGN.md