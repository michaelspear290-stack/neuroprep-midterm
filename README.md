# NeuroPrep — Nervous System Midterm 1

Interactive medical-school practice website aligned with the University of Arizona Week 1–3 nervous system learning objectives and supplied faculty exam blueprint.

## Website

**https://michaelspear290-stack.github.io/neuroprep-midterm/**

## What's included

- **644 five-choice questions:** **539 lecture** and **105 anatomy practical**, including the original 100 practice items.
- **Blueprint Exam:** exactly **92 questions** in the faculty topic proportions, **77 lecture + 15 practical**.
- Each blueprint position has **7 question variants**; repeated full-length attempts prioritize unanswered variants.
- Overall difficulty mix reproduced per simulation: **34 Level 1**, **45 Level 2**, **13 Level 3**.
- **Important:** The faculty blueprint does not specify difficulty by individual lecture; the question-level difficulty assignments are NeuroPrep practice estimates, not official or psychometrically validated ratings.
- Study and exam modes; timed sessions; custom quizzes; explanations; bookmarks; saved browser progress; results history; CSV export.

## Content and files

- `index.html` is the **self-contained deployed site**, with embedded code, question bank, and images. No build or dependencies required.
- `questions.json` is the **editable master question snapshot**.
- `blueprint.json` documents the per-lecture and per-practical quotas and difficulty totals.
- To change site questions, the embedded question bank in `index.html` must also be rebuilt or updated. Editing only `questions.json` does **not** change the live site.

New practice items are independently authored from curated clinical concepts and learning objectives. Some revisit the same concept from complementary clinical directions; they are not 644 wholly independent facts. The bank is not faculty-approved and should be cross-checked with lecture materials if a discrepancy arises.

## Privacy and copyright

Progress is saved to your own browser using the original `neuroprep-midterm-v1` storage key, maintaining existing history and bookmarks. No data is sent to a backend. The site contains anatomy images extracted from provided lecture materials that may include third-party illustrations: **confirm public redistribution rights, or remove/replace those images.**
