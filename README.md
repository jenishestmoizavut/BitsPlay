# 🧩 BitsPlay

BitsPlay is a minimalist, daily puzzle platform designed for quick, clever breaks. The platform is built entirely in Vanilla web technologies and features cloud-synced progression, global leaderboards, and an optimistic UI.

Currently featuring the flagship game: **ReWorded**.

## 🎮 How to Play ReWorded
1. **Solve the Clues:** Answer five daily trivia prompts.
2. **Reveal the Letters:** Each correct trivia answer reveals one letter of the final puzzle.
3. **Unscramble:** Rearrange the 5 revealed letters to guess the final word of the day.

## ✨ Features
* **Zero-Dependency Frontend:** Built entirely with standard HTML, CSS, and Vanilla JavaScript. No React, no Vue, no build steps required.
* **Native Audio Engine:** Custom-built Web Audio API integration for satisfying UI sounds and win chords without relying on external `.mp3` files.
* **Cloud Sync:** Google Authentication via Firebase allows players to safely back up their streaks and best times across devices.
* **Real-time Leaderboards:** Compete on a daily global leaderboard backed by Firestore.
* **Optimistic UI:** Post-game comments render instantly on the client side while syncing to the cloud in the background.
* **Offline Fallbacks:** Includes a local bank of seeded fallback puzzles in case the cloud connection fails.

## 🛠️ Tech Stack
* **Frontend:** HTML5, CSS3, Vanilla JavaScript (ES6+)
* **Backend / Database:** Firebase (Firestore)
* **Authentication:** Firebase Auth (Google Sign-In)
* **Analytics:** Firebase Analytics
* **Hosting:** GitHub Pages
