# Permissionless Blockchain: Recent Trends, Privacy Concerns, Potential Solutions, and Secure Development Lifecycle

This repository contains the supporting materials for the review paper submitted to journal *MDPI Future Internet*.

## Structure
- **Figures_Mermaid** – Mermaid diagram source files (`.mmd`) for conceptual and architectural figures.  
- **Code** – Python scripts used to generate charts included in the paper.  
- **Figures** – Rendered charts (PNG/SVG) generated from the scripts.  
- **Data** – Small example data files (CSV/JSON) used for the visualizations.  
- **references.bib** – Citation file, reference mapping, and license information.

## Usage
To reproduce or view the figures:

```bash
# Render Mermaid diagram
mmdc -i diagrams/mermaid/fig1_architecture_layers.mmd -o fig1_architecture_layers.png

# Run Python chart
python diagrams/python/fig4_research_trends.py

```


## Data Availability Statement: 
All data used was already public. We have added a link to
a github repo containing scripts etc. that reproduce the
figures in the paper.


## Graphical Abstract

The graphical abstract was generated using React and Recharts.
- Source: `figures/graphical-abstract/App.tsx`
- Dependencies: React 18, Recharts 2.10
- Preview: https://stackblitz.com/edit/[your-project]
