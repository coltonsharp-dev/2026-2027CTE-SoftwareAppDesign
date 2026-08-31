# Assignment 01 — This Is Me

**App Design 1 · Units 01–02**

You are going to take a working website and make it yours.

Everything in here already works. Nothing is broken and nothing is missing. Your job is
not to build it from nothing — it is to **change the words and the colours until the page
is about you** and could not be about anyone else.

This is not your landing page. That is the `index.html` in the root of the repo, and you
should leave it alone for now. This assignment lives in its own folder so the two never
interfere.

---

## Before you start

You need to be in **your own copy** of this repo, not Mr. Sharp's. If you have not done
that yet, go read **Step 0** in the [root README](../../README.md) — it tells you how to
make your copy and exactly what to name it. Nothing you do here saves until that is done.

Then open your codespace: green **`< > Code`** button → **Codespaces** →
**Create codespace on main**.

---

## See it while you work

In the terminal at the bottom of the codespace, from the **root** of the repo:

```
python -m http.server 8000
```

Click **Open in Browser** when the box pops up, then add this to the end of the address:

```
/assignments/01-this-is-me/
```

Change a file, save with **Ctrl+S**, reload that tab. Your change is there.

That loop — **change, save, look** — is the whole job. Do it constantly. Do not write
twenty lines and then check.

> The terminal is now busy running the server. To type another command press **Ctrl+C**,
> or click **+** for a second terminal. It is not frozen.

---

## What you are changing

### `index.html` — the WORDS

**10 numbered TODOs.** Press **Ctrl+F** and search for `TODO` to find them. Each one tells
you exactly what to replace. Do all ten.

### `styles.css` — the LOOK

**4 more TODOs**, numbered 11 to 14. This is where the colours, sizes and spacing live.
Change anything you like. If you break it badly, **Ctrl+Z** until it works again.

### `app.js` — DO NOT EDIT

This file makes the theme buttons, the layout buttons and the Pick One questions work.
Read it if you are curious — genuinely, have a look. **But do not change it for this
assignment.** We open it properly in Unit 03, and by then most of it will make sense.

---

## What "done" looks like

- [ ] All **10 TODOs** in `index.html` replaced with your real content
- [ ] All **4 TODOs** in `styles.css` done
- [ ] Nothing anywhere still says *Your Name*, *Change me*, or *Replace this*
- [ ] The browser tab says your name, not mine
- [ ] You picked a theme and **changed at least three of its colours**
- [ ] You tried all three Layout buttons and left it on the one you like best
- [ ] Your page still works — nothing blank, no dead button
- [ ] You opened it on your phone

## What earns the top marks

Anyone can replace placeholder text. The difference between finished and good:

- **Specific beats general.** "I play guitar" is fine. "I have been failing the same
  Hendrix solo for four months" is a website worth reading.
- **Short beats long.** Three real things beats nine vague ones. You are allowed to
  delete a card.
- **You made a design decision and can say why.** Not "I picked blue" but "I picked the
  paper theme because the dark ones felt like a game and this is more like a book."

---

## Rules

- **Say as much or as little about yourself as you want.** This page goes on the
  internet. No address, no phone number, no class schedule, nothing you would not want a
  stranger reading. Being interesting is not the same as being personal.
- Write nothing here you would not want **me and your family** to read.
- If a section does not fit you, change what it asks rather than filling it with someone
  else's answer.

---

## If something goes wrong

| What you see | What it actually is |
|---|---|
| Page is blank or white | You deleted a `<` or a `>` in `index.html`. **Ctrl+Z**. |
| All the styling vanished | You removed a `;` or a `}` in `styles.css`. **Ctrl+Z**. |
| The buttons stopped working | You edited `app.js`. **Ctrl+Z** until they come back, and do not save it again. |
| The three cards are empty boxes | They fade in as you scroll. Scroll down, or wait two seconds. |
| 404 at that address | Check the folder name in the URL: `assignments/01-this-is-me/`, all lower case, with the hyphens. |
| Terminal will not take a command | The server is running in it. **Ctrl+C**, or **+** for a second terminal. |
| Codespace disappeared | It did not. **Code → Codespaces** and reopen it. Your work is saved. |

**I broke it so badly I want to start over.** Tell me. Ten seconds, no penalty, no
lecture. Starting over is a normal part of this and it is not a failure.

---

## Turning it in

Editing is not saving to GitHub. Your work sits on that machine until you **commit** it.

1. Click **Source Control** in the left bar — the branch-looking icon.
2. Type a message saying **what you changed**. `Finished all TODOs and rewrote the sunset
   colours` is good. `update` and `asdf` are not.
3. Click **Commit**, then **Sync Changes**.

That is a commit: a save point with your name and a timestamp on it, permanent, and the
way every professional software team on earth records work. **Commit often** — every time
you finish one thing. It is free, and it is the only way back if you break something.

Once Pages is switched on for your repo, this page is live for anyone at:

```
https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/assignments/01-this-is-me/
```
