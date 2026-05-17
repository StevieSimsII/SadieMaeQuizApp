# Sadie Mae Quiz App

Sadie Mae Quiz App is a kid-friendly React quiz game for quick subject practice at home or in the classroom. Players pick a subject, choose a quiz, answer multiple-choice questions, and get instant results with the option to retry or pick another quiz.

Live site: [https://steviesimsii.github.io/SadieMaeQuizApp](https://steviesimsii.github.io/SadieMaeQuizApp)

## Subjects

- Math
- Spelling
- Reading
- Science
- History
- Social Studies
- Music
- Art

Quiz content lives under `src/data`, with each subject maintaining its own quiz set for straightforward updates and expansion.

## Tech Stack

- React
- Create React App
- Tailwind CSS
- GitHub Pages for deployment

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### Install

```bash
npm install
```

### Run Locally

```bash
npm start
```

The app will be available at [http://localhost:3000](http://localhost:3000).

## Available Scripts

### `npm start`

Starts the development server.

### `npm test`

Runs the test watcher through Create React App.

### `npm run build`

Creates a production build in the `build` folder.

### `npm run deploy`

Builds the app and publishes the `build` folder to GitHub Pages using `gh-pages`.

## Project Structure

```text
src/
|- components/  Reusable UI for home, quiz selection, questions, progress, and results
|- data/        Subject-specific quiz content
`- App.js       Screen flow and app state
```

## Deployment

This project is configured for GitHub Pages through the `homepage`, `predeploy`, and `deploy` settings in `package.json`.

To publish the latest version:

```bash
npm run deploy
```

## Updating Quiz Content

To add or revise questions, update the relevant file in `src/data/<subject>/index.js`. Each subject exports its quizzes into the shared subject list in `src/data/index.js`.
