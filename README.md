# Arjun's CTP 5 Prep

A 14-day study plan for the CTP 5 with concept lessons, a 3-question mini check after every lesson,
topic quizzes, vocabulary flashcards, a challenge round, a weak-spot drill, and two full-length hard practice tests.

All questions are original and modeled on the CTP 5 subtest types. They are not real ERB items,
so treat scores as study signals, not predictions.

## Put it online with GitHub Pages (no tools needed)

The site is already built. `index.html` and `app.js` are included both at the top level and in `docs/`,
so it works with either Pages setting below.

1. Create a new repository on GitHub (for example `arjun-ctp5-prep`).
2. Open the repository, click **Add file > Upload files**, and drag in everything from this folder.
   The files `index.html` and `app.js` must end up at the top of the repository (not inside another folder).
3. Click **Commit changes**.
4. Go to **Settings > Pages**. Under **Build and deployment**, set **Source** to **Deploy from a branch**,
   choose branch **main** and folder **/ (root)**, then **Save**. (**/docs** also works.)
5. Wait a minute or two. The site will be at `https://YOUR-USERNAME.github.io/REPOSITORY-NAME/`.

Or from a terminal:

```bash
git init
git add .
git commit -m "CTP 5 prep app"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/REPOSITORY-NAME.git
git push -u origin main
```

Then do step 4.

## If the page is blank or says "Loading..." forever

- Open `https://YOUR-USERNAME.github.io/REPOSITORY-NAME/app.js` in the browser. If you see "404", the file `app.js`
  is not at the same level as `index.html` in your repository. Upload it again (it is in this folder).
- Hard refresh the page (Ctrl+Shift+R, or Cmd+Shift+R on a Mac) after any change.
- Make sure the Pages source branch and folder match where `index.html` and `app.js` actually are.

## What is new in this version

- **Mini check after every lesson.** Each of the 31 lessons now ends with a short 3-question check (93 new questions, separate
from the topic quizzes). A lesson counts as learned when its check is finished. The Learn tab and the lesson page show the
best check score, and the Review tab has a "Mini check scores" table so a parent can see them at a glance.
- **Flashcards stay on today's set.** Opening Cards from a day of the plan shows only that day's words (no looping, no
  All words tab). Cards have Back and Next buttons plus numbered dots to jump to any card. At the end there is a summary with
  options to study the still-learning cards again, go through the set again, or return to the plan. The Words tab still has
  All words and Still learning, but it no longer wraps around either.

## Progress and devices

Progress (lessons learned, quiz and test scores, missed questions, flashcards) saves in the browser
on each device. To move to another device, open the **Review** tab, tap **Show backup code**,
copy it, and paste it into **Restore** on the other device.

## Changing things

Everything lives in `src/App.jsx`.

- **Test date and plan start:** `START` and `TEST_DATE` near the top of the plan section. The plan assumes the test is Thursday, Oct. 29, 2026.
- **Questions and lessons:** the `MOD_*` objects (lessons and topic quizzes), `TEST1` and `TEST2` (practice tests), and `WORDS` (flashcards).
- **Mini checks:** `src/checks.js`. Each lesson has three entries: the question, the correct answer, three wrong answers, and an explanation.
- **Rebuild after editing:**

```bash
npm install
npm run build
```

This regenerates `index.html` and `app.js` (and the copies in `docs/`). Commit and push, and the site updates.

## Project layout

```
index.html        built page (generated)
app.js            built app (generated)
docs/             copy of the built page and app, so Pages can also use /docs
src/App.jsx       the app (data and screens)
src/checks.js     the mini check questions (3 per lesson)
src/main.jsx      entry point
src/index.template.html   page template used by the build
build.mjs         build script (esbuild)
```
