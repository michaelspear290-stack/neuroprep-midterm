# NeuroPrep — Nervous System Midterms 1 & 2

**[Open the single NeuroPrep study hub](https://michaelspear290-stack.github.io/neuroprep-midterm/)** to switch between Midterm 1 (Weeks 1–3) and Midterm 2 (Weeks 4–5) without losing browser-local practice history. Both can be viewed inside the hub's course switcher or opened full-page.

## November 20, 2026 — Midterm 2 practice upgrade

- **225 individually authored five-answer Midterm 2 questions**, covering all **27 Exam 2 blueprint sessions** using Weeks 4–5 lecture learning objectives, including 21 more anatomy questions across the same original schematic regions (225 total bank; figures remain simplified schematics, not lab specimens).
- **True Study Mode:** select an answer, click **Check Answer**, and immediately receive the correct mechanism, separate explanations for **all five options**, a high-yield takeaway and topic-aligned learning-objective focus. Answer choices can be crossed out, flagged, bookmarked, and revisited.
- **Test Mode:** choose 10, 20, 40, 59 or 100 questions, select subjects and difficulty (all/second+third/third only), optionally use a time limit, and see answers **only after submission**.
- **Official 59-question Blueprint Test:** maintains exactly the faculty topic counts, nine practical positions and an 18/27/14 first-/second-/third-order **practice difficulty distribution**. Each session samples available variants of the same topic and estimated difficulty while preferentially using items you have seen less often; no faculty endorsement or psychometric validation is claimed.
- **27-topic filter** grouped into movement, hearing/vestibular, eye/visual, and anatomy. Includes Week 4, Week 5, visual system and anatomy quick-select filters; unseen-only practice and a study-missed review workflow.
- New dashboard with XP, streak awards, per-topic performance, **Neuro Sprint** challenge mode, keyboard shortcuts, subtle confetti and hidden **brain-click, DOPA, and Konami** Easter eggs.
- Prior Midterm 2 sessions saved under `neuroprep-midterm2-v1` remain accessible, and the unchanged Midterm 1 HTML/question bank is still available in the unified hub.
- **Honest scope:** questions are independent medical-school-style practice vignettes. Not every item has been faculty-validated, and some related scenarios revisit the same underlying concept. The bank does not replace reviewing the original lectures or anatomy specimens.

Midterm 2 page files: `midterm2.html`, `midterm2-questions.js`, `midterm2-week5.js`, `midterm2-practical.js`, `midterm2-extra-motor.js`, `midterm2-extra-motor2.js`, `midterm2-extra-auditory.js`, `midterm2-extra-vision.js`, `midterm2-extra-clinical.js`, `midterm2-app-v2.js`, and `midterm2-v2.css`.

---

## Midterm 2 — Weeks 4–5

**[Open the new Midterm 2 practice site](https://michaelspear290-stack.github.io/neuroprep-midterm/midterm2.html)**

Built directly from the supplied Week 4 and Week 5 lecture notes and the NSCO30 Exam 2 student blueprint:

- **225 independently authored five-option questions:** 204 lecture-topic questions and 21 anatomy practical questions, distributed across 27 blueprint categories., assigned to all 27 blueprint categories in the official proportions.
- **Full 59-question blueprint simulation** retaining 18 first-order, 27 second-order, and 14 third-order practice labels. The question-difficulty labels are independent educational estimates, **not faculty-certified cognitive ratings**.
- **Study mode** (20), **clinical drill** (40), and **selected-topic practice** (20).
- Clinical vignettes, detailed rationale for *every* answer option, key takeaways, hidden hints, choice cross-outs, and A–E shuffling.
- Light/dark modes, bookmarks, browser-local progress, immediate study feedback, submitted exam review, and separate history storage.
- Nine anatomy-practical positions use simplified original SVG schematics of the mouth/pharynx, eye, and ear. **They are not a substitute for the faculty's gross-anatomy photographs or lab specimens.**
- The root homepage is now one unified study hub with Overview, Midterm 1, and Midterm 2 tabs. The original Midterm 1 HTML is preserved unchanged at `midterm1.html`; the two modules use separate progress keys on the same origin. Midterm 2 remains at `midterm2.html` for direct access.

Files: `midterm2.html`, `midterm2-questions.js` (Week 4 + blueprint), `midterm2-week5.js`, and `midterm2-practical.js`. No framework or build tool is required; GitHub Pages serves the static files directly.

Questions are student practice aids, not validated or endorsed by faculty, the college, or USMLE. Review with original lecture objectives. The expanded 225-item bank includes multiple unique questions per blueprint category, with some closely related concepts, not a bank of hundreds of independent Midterm 2 items; new attempts randomize item and answer order rather than guaranteeing unseen stems.

---

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

- `index.html` contains the deployed interface, embedded question bank and anatomy figures. It loads `enhancements.js` for editorial improvements, and no build system is required.
- `questions.json` is the **editable master question snapshot**.
- `blueprint.json` documents the per-lecture and per-practical quotas and difficulty totals.
- To change site questions, the embedded question bank in `index.html` must also be rebuilt or updated. Editing only `questions.json` does **not** change the live site.

New practice items are independently authored from curated clinical concepts and learning objectives. Some revisit the same concept from complementary clinical directions; they are not 644 wholly independent facts. The bank is not faculty-approved and should be cross-checked with lecture materials if a discrepancy arises.

## Privacy and copyright

Progress is saved to your own browser using the original `neuroprep-midterm-v1` storage key, maintaining existing history and bookmarks. No data is sent to a backend. The site contains anatomy images extracted from provided lecture materials that may include third-party illustrations: **confirm public redistribution rights, or remove/replace those images.**

## November 2026 clinical review improvements

- The original **100 case-based medical school questions** now have a dedicated study launch button.
- The full **92-question blueprint simulation** prioritizes original clinical cases not yet completed, then explores unused variants. The 77 lecture/15 practical and 34/45/13 difficulty totals remain unchanged.
- Reviewed questions display **rationales for each of the five answer choices**, a clinical reasoning summary, key takeaway and lecture-objective focus (paraphrased).
- Strike-out buttons beside answers eliminate choices visually; tap again to restore. Keyboard **Shift + 1–5** eliminates/restores and **1–5** selects.
- Existing generated stems have been converted to clinical context prompts while retaining their original test concepts and keyed answers. These are practice aids, **not faculty-authored or validated exam items**.
- Corrected the **Action Potentials lecture to Week 3**, as stated in supplied lecture PDFs.
- The deployed `index.html` loads `enhancements.js` from the repository root. Both files must be present.
- `questions.json` remains the baseline editable question snapshot; the live editorial refinements are implemented in `enhancements.js`.


## November 4, 2026 — clinical practice upgrade

- **Original 100** case vignettes and their stems are preserved.
- **22 more authored clinical cases** replace weaker autogenerated items, including a redesigned LTD/LTP question with mechanistically plausible alternatives. The site identifies **122 curated clinical cases** across the 644-question bank.
- **40-case clinical drill:** Launch a randomized Study Mode session from the curated clinical cases on the dashboard.
- **65 additional generated stems** were rewritten to remove leading cues and replace them with targeted clinical, anatomical, developmental or electrophysiological scenarios (these remain concept-reinforcement items until manually reviewed end-to-end).
- **Every original 100-question case now has specific explanations for all four incorrect choices** instead of generic elimination text.
- Remaining generated questions have been reworded as patient, anatomy, or experimental questions when possible. **They are marked "Concept reinforcement" rather than being represented as individually reviewed clinical exam cases.** Automated conversions should not be mistaken for medical faculty review.
- Explanations now include question-level reasoning, per-option rationales, a key takeaway, and topic-specific high-yield mechanism/exam discrimination notes for the Weeks 1–3 curriculum.
- **Answer order is scrambled deterministically and balanced across A–E** (129, 128, 129, 129, 129). Existing local completed-session answers and active-session cross-outs are remapped on first load after the change; there is no new account or cloud storage.
- On-screen study features: **smaller question text** (approximately 14.5px on phones), optional reasoning hints in Study Mode, **Focus Mode**, and a six-question **Neuro Sprint** mini-game. The game never changes exam scores.
- The main HTML page's enhancement script link is versioned to reduce the chance of old JavaScript being reused by the browser.

**Important editorial note:** This is an independent study aid, not a question bank validated by faculty, USMLE, or item-analysis statistics. The 22 additional authored cases were individually written and checked for defensible answer/rationale pairings; the other generated variants still need full lecture-by-lecture editorial validation. The live question improvements are applied by the enhancement script to the embedded bank; the standalone JSON question file is a baseline snapshot and does not automatically reflect live question wording or option order. Previously saved performance on *rewritten* questions is not strictly comparable to future attempts because the questions have changed, even though stored answer history is migrated.

