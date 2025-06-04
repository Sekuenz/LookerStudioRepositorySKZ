# Random Bar Chart – Google Looker Studio Community Visualization

This is a **minimal starter viz** that accepts

* Dimension 1 → Date  
* Dimension 2 → Category  
* Metric 1 → Number  

and renders a plain bar chart using [Chart.js](https://www.chartjs.org/).  
Swap the code inside `index.js` to create any custom chart you like.

---

## Demo

After you add it to a report you will see something like:

![screenshot]()

---

## Repo layout
├── manifest.json   # tells Looker Studio how to load the viz
├── index.js        # rendering logic (Chart.js in this sample)
├── style.css       # optional styling
└── README.md

---

## 1 · Quick start

1. Enable **Developer mode** in your Looker Studio report  
   File ▸ Settings ▸ “Enable developer mode”.

2. Publish this repo with **GitHub Pages**  
   Settings ▸ Pages ▸ Source = “main / (root)”.

3. Grab the manifest URL  
https://YOUR-USER.github.io/YOUR-REPO/manifest.json
4. In the report choose  
Insert ▸ Community visualizations ▸ **Build your own** ▸ paste the URL.

5. Drag fields into the data panel:  
• Date → Dimension 1  
• Category → Dimension 2  
• Number → Metric 1

Done! The bar chart should appear.

---

## 2 · Editing & re-deploying

* Edit `index.js` or `style.css`.
* `git add . && git commit -m "tweak"`  
`git push`
* GitHub Pages re-builds automatically (≈ 30 s).  
Refresh the report (⇧ Reload) to pick up the new code.

---

## 3 · Local development tips

For hot-reload, TypeScript, bundling, etc. you can scaffold a full tool-chain:

```bash
npm i -g @google/dscc-scripts
npx @google/dscc-scripts create --type viz --name myChart
