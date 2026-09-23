# Portfolio de Nour El Houda Karray

Portfolio one-page bilingue présentant mon parcours, mes compétences et mes projets en développement web, data et intelligence artificielle.

## Stack

- React 19 et Vite 8
- Framer Motion
- React Icons
- CSS responsive personnalisé

## Fonctionnalités

- Français et anglais avec préférence mémorisée
- Thèmes clair et sombre
- Navigation responsive et suivi de la section active
- Filtres de projets, animations accessibles et téléchargement du CV
- Liens vers les dépôts GitHub des projets disponibles

## Développement

```bash
npm install
npm run dev
```

## Validation et build

```bash
npm run lint
npm run build
npm run preview
```

## Structure

```text
public/                 Images, certificats et CV
src/components/         Sections et composants React
src/data/               Contenu du portfolio et traductions
src/hooks/              Gestion du thème et de la langue
src/styles/             Styles globaux et responsive design
.github/workflows/      Validation continue
```

## Déploiement GitHub Pages

Vite utilise le chemin de base `/Software-Engineering-Portfolio/`. Le build produit dans `dist/` est compatible avec :

https://nour-karray.github.io/Software-Engineering-Portfolio/

La CI exécute automatiquement `npm ci`, `npm run lint` et `npm run build` sur chaque push et pull request. La publication GitHub Pages doit être activée dans les paramètres du dépôt si elle ne l’est pas encore.
