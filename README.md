# 🧩 BitsPlay

BitsPlay is a minimalist, daily puzzle platform designed for quick, clever breaks. The platform is built entirely in Vanilla web technologies and features cloud-synced progression, global leaderboards, and an optimistic UI.

> **Status (v3.0 Workshop):** BitsPlay is currently undergoing a complete game redesign. The initial v1 prototypes (*ReWorded*, *Circuit*, and *GridRule*) have been moved to the `/archive/` directory while new tactile, pattern-deduction mechanics are being ideated.

---

## 🏛️ Archived Games (v1)

The initial generation of prototypes are preserved and playable in the archive:
* **ReWorded** (`archive/reworded.html`): Answer trivia clues to reveal 5 letters and unscramble the word.
* **Circuit** (`archive/circuit.html`): Fill in mathematical operators to complete the logical circuit equation.
* **GridRule** (`archive/GridRule.html`): Place colored tokens onto a 5×5 grid satisfying logical spatial constraints.

Access the archive anytime at [`/archive/index.html`](archive/index.html).

---

## ✨ Platform Features
* **Zero-Dependency Frontend:** Built entirely with standard HTML, CSS, and Vanilla JavaScript. No React, no Vue, no build steps required.
* **Native Audio Engine:** Custom-built Web Audio API integration for satisfying UI sounds and chords without relying on external `.mp3` files.
* **Cloud Sync:** Google Authentication via Firebase allows players to safely back up streaks and times across devices.
* **Real-time Leaderboards & Comments:** Optimistic UI backed by Firestore.
* **Theme Support:** Clean light and dark modes with persistent local preferences.

## 🛠️ Tech Stack
* **Frontend:** HTML5, CSS3, Vanilla JavaScript (ES6+)
* **Backend / Database:** Firebase (Firestore)
* **Authentication:** Firebase Auth (Google Sign-In)
* **Analytics:** Firebase Analytics
* **Hosting:** GitHub Pages
