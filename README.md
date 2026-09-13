# Rey's Case File — CS Executive, Group 2

A small personal study site: an AI doubt-solving tutor, quizzes, flashcards, and a
progress view, covering the three Group 2 papers (ICSI Syllabus 2022):

- Capital Market & Securities Laws
- Economic, Commercial and Intellectual Property Laws
- Tax Laws & Practice

It's plain HTML/CSS/JS — no build tools, no server required. That means it can be
hosted for free on **GitHub Pages**, and you (the two of you) can keep editing it
together with Claude's help.

## Files

```
index.html   — page structure and all four sections
style.css    — the visual design
app.js       — navigation, quiz/flashcard engine, chat tutor, progress
data.js      — the question bank and flashcards (edit this to add more!)
```

## Try it locally first

Just open `index.html` in a browser — everything runs client-side. No install needed.

## Put it on GitHub (one-time setup)

1. Go to [github.com/new](https://github.com/new) and create a repository — e.g.
   `rey-cs-study`. Keep it **private** if you plan to ever hardcode anything
   sensitive (though this project is designed not to need that).
2. On the new repo's page, click **"uploading an existing file"** and drag in
   all five files above. Commit.
3. In the repo, go to **Settings → Pages**. Under "Build and deployment", set
   **Source** to "Deploy from a branch", branch `main`, folder `/ (root)`. Save.
4. GitHub gives you a live URL after a minute or two, like
   `https://<your-username>.github.io/rey-cs-study/`. Share that with Rey.

## Making changes later, together

Whenever you want a change — more questions, a new subject, a different look,
a new feature — just describe it to Claude in a chat. A few ways to keep it
smooth:

- **Simplest:** paste the current file(s) you want changed into the chat (or
  re-upload them), describe the change, and Claude will give you the updated
  file to re-upload to GitHub (drag-and-drop again, it overwrites by filename).
- **Smoother for ongoing work:** use **Claude Code** (desktop or CLI) connected
  to a local clone of the GitHub repo. Then Claude can edit files directly and
  you `git commit` / `git push` from there — no manual re-uploading.
- Either way, GitHub keeps every version, so nothing is ever really lost —
  you can always roll back from the repo's commit history.

## About the AI tutor tab

It calls the Anthropic API **directly from the browser**, using a key you
paste in yourself each session (Anthropic explicitly supports this
"bring-your-own-key" pattern via a special header). A few things worth
knowing:

- The key is kept in memory for that browser tab only — it's not saved to
  disk, not written into the code, and not sent anywhere except Anthropic.
- Because it's a client-side call, anyone who inspects the page's network
  traffic while you're using it could see the key. That's fine for a private,
  two-person project — just don't publish your own key anywhere, and get a
  fresh one from [console.anthropic.com](https://console.anthropic.com) if
  you ever think it leaked.
- If you'd rather not deal with keys at all, the quizzes, flashcards, and
  progress tracker work completely without one — only the chat tab needs it.

## Adding more questions or flashcards

Open `data.js`. Each quiz question and flashcard is a small object — copy an
existing one, change the `subject` (`cmsl`, `ecipl`, or `tlp`), and fill in
your own text. No other file needs to change.

## A note on accuracy

The starter questions cover core concepts, but tax and securities-law details
change with amendments. Always cross-check against the latest ICSI study
material and amendment supplements before an exam — treat this site as a way
to practise and revise, not as the primary source.
