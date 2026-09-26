# FitLog — Workout Library

A dark, no-nonsense gym companion built with Next.js. Browse a library of
twelve lifts, dive into detailed instructions for each one, and build out
today's workout plan — complete with live stats, saved-for-later lifts, and
progress tracking that survives a page reload.

## Description

FitLog lets users explore a workout library pulled from a live API, view
full exercise details (equipment, difficulty, sets/reps, instructions), and
manage a daily training plan capped at five lifts. Users can mark lifts as
done, save others for later, search and sort their list, and track live
totals for exercises, minutes, and calories — all without an account, since
everything persists locally in the browser.

## Technologies Used

- **Next.js** (App Router) — routing, server components, and data fetching
- **React** — client-side interactivity (Context API, hooks)
- **TypeScript** — type safety across components and API data
- **Tailwind CSS** — styling and full responsive layout
- **Fetch API** — pulling live workout data from a REST endpoint
- **localStorage** — persisting the plan and saved lists across reloads

## Features

1. **Dynamic workout library** — twelve lifts fetched live from an API and
   rendered as a responsive 3-column grid, each with category tags,
   equipment, and a duration/calories/rating stats row.
2. **Detailed workout pages** — a dedicated page per lift with a full specs
   panel and numbered step-by-step instructions, generated dynamically from
   the API by ID.
3. **Today's Plan & Saved lists** — add any workout to a 5-lift daily plan
   or save it for later, with live badge counters in the navbar and a
   metrics summary (exercises, minutes, calories) that updates instantly.
4. **Sort and search** — sort Today's Plan or Saved by duration, calories,
   or rating, and search either list — or the whole library — by workout
   name or muscle-group tag.
5. **Persistent state with localStorage** — the plan and saved lists survive
   a full page reload, so progress is never lost.
6. **Mark as done / remove workouts** — check off completed lifts or remove
   them entirely from the plan, each with a toast confirmation.
7. **Toast notifications** — instant feedback for every action (added,
   saved, marked done, removed) via a lightweight custom toast system.
8. **Fully responsive design** — the layout adapts cleanly across mobile,
   tablet, and desktop, including a collapsible mobile navigation menu.
9. **Custom 404 and error handling** — a branded not-found page for invalid
   routes or workout IDs, plus a graceful retry screen if the API is
   temporarily unavailable.
10. **Loading states** — a spinner and message while workout data is being
    fetched on the home page, so the app never feels frozen.

## Getting Started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.