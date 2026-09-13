// ---------------------------------------------------------------
// App logic. No build step needed — plain JS.
// Progress lives only in memory for this tab session by design
// (kept out of localStorage so this also behaves inside a Claude
// artifact preview). Once this is hosted on GitHub Pages, ask
// Claude to swap `state` for localStorage if you want progress to
// persist across visits.
// ---------------------------------------------------------------

const state = {
  apiKey: null,
  quizFilter: "all",
  quizPool: [],
  quizIndex: 0,
  quizAnswered: false,
  quizScore: 0,
  quizAttempts: 0,
  cardFilter: "all",
  cardPool: [],
  cardIndex: 0,
  cardsSeen: new Set(),
  chatHistory: [],
};

// ---------- Navigation ----------
function goto(viewId) {
  document.querySelectorAll(".view").forEach(v => v.classList.remove("is-active"));
  document.querySelectorAll(".rail-tab").forEach(t => t.classList.remove("is-active"));
  document.getElementById("view-" + viewId).classList.add("is-active");
  const tab = document.querySelector(`.rail-tab[data-view="${viewId}"]`);
  if (tab) tab.classList.add("is-active");
  if (viewId === "progress") renderProgress();
}

document.querySelectorAll(".rail-tab").forEach(btn => {
  btn.addEventListener("click", () => goto(btn.dataset.view));
});
document.querySelectorAll("[data-goto]").forEach(btn => {
  btn.addEventListener("click", () => goto(btn.dataset.goto));
});

// ---------- Helpers ----------
function subjectMeta(id) {
  return SUBJECTS.find(s => s.id === id);
}

function buildFilterChips(container, onChange) {
  container.innerHTML = "";
  const chips = [{ id: "all", short: "All papers" }, ...SUBJECTS];
  chips.forEach(s => {
    const chip = document.createElement("button");
    chip.className = "filter-chip" + (s.id === "all" ? " is-active" : "");
    chip.textContent = s.short;
    chip.dataset.id = s.id;
    chip.addEventListener("click", () => {
      container.querySelectorAll(".filter-chip").forEach(c => c.classList.remove("is-active"));
      chip.classList.add("is-active");
      onChange(s.id);
    });
    container.appendChild(chip);
  });
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ---------- Quiz ----------
function startQuiz(filterId) {
  state.quizFilter = filterId;
  state.quizPool = shuffle(
    filterId === "all" ? QUESTIONS : QUESTIONS.filter(q => q.subject === filterId)
  );
  state.quizIndex = 0;
  state.quizAnswered = false;
  renderQuiz();
}

function renderQuiz() {
  const area = document.getElementById("quizArea");
  if (state.quizPool.length === 0) {
    area.innerHTML = `<p>No questions in this set yet.</p>`;
    return;
  }
  if (state.quizIndex >= state.quizPool.length) {
    area.innerHTML = `
      <div class="quiz-card quiz-done">
        <h3>Set complete</h3>
        <p>${state.quizScore} / ${state.quizPool.length} correct this round.</p>
        <button class="btn btn-primary" id="quizRestart">Try another set</button>
      </div>`;
    document.getElementById("quizRestart").addEventListener("click", () => startQuiz(state.quizFilter));
    return;
  }

  const item = state.quizPool[state.quizIndex];
  const meta = subjectMeta(item.subject);
  state.quizAnswered = false;

  area.innerHTML = `
    <div class="quiz-card">
      <div class="quiz-meta" style="color:${meta.color}">${meta.short} &middot; Question ${state.quizIndex + 1} of ${state.quizPool.length}</div>
      <h3 class="quiz-q">${item.q}</h3>
      <div class="quiz-options">
        ${item.options.map((opt, i) => `<button class="quiz-option" data-i="${i}">${opt}</button>`).join("")}
      </div>
      <div class="quiz-explain" style="display:none" id="quizExplain"></div>
      <div class="quiz-foot">
        <span class="quiz-progress">Score so far: ${state.quizScore} / ${state.quizAttempts}</span>
        <button class="btn" id="quizNext" style="display:none">Next question</button>
      </div>
    </div>`;

  area.querySelectorAll(".quiz-option").forEach(btn => {
    btn.addEventListener("click", () => {
      if (state.quizAnswered) return;
      state.quizAnswered = true;
      state.quizAttempts++;
      const chosen = parseInt(btn.dataset.i, 10);
      const correct = item.answer;
      area.querySelectorAll(".quiz-option").forEach((b, i) => {
        b.disabled = true;
        if (i === correct) b.classList.add("is-correct");
        else if (i === chosen) b.classList.add("is-wrong");
      });
      if (chosen === correct) state.quizScore++;
      const explain = document.getElementById("quizExplain");
      explain.style.display = "block";
      explain.textContent = item.explain;
      document.getElementById("quizNext").style.display = "inline-block";
      document.querySelector(".quiz-progress").textContent = `Score so far: ${state.quizScore} / ${state.quizAttempts}`;
    });
  });

  const nextBtn = document.getElementById("quizNext");
  nextBtn.addEventListener("click", () => {
    state.quizIndex++;
    renderQuiz();
  });
}

buildFilterChips(document.getElementById("quizFilters"), (id) => startQuiz(id));
startQuiz("all");

// ---------- Flashcards ----------
function startCards(filterId) {
  state.cardFilter = filterId;
  state.cardPool = filterId === "all" ? FLASHCARDS : FLASHCARDS.filter(c => c.subject === filterId);
  state.cardIndex = 0;
  renderCards();
}

function renderCards() {
  const area = document.getElementById("cardArea");
  if (state.cardPool.length === 0) {
    area.innerHTML = `<p>No cards in this set yet.</p>`;
    return;
  }
  const card = state.cardPool[state.cardIndex];
  const meta = subjectMeta(card.subject);

  area.innerHTML = `
    <div class="card-stage">
      <div class="flip-card" id="flipCard">
        <div class="flip-inner">
          <div class="flip-face flip-front">${card.front}</div>
          <div class="flip-face flip-back">${card.back}</div>
        </div>
      </div>
      <div class="card-nav">
        <button class="btn" id="cardPrev">&larr; Prev</button>
        <span class="card-count">${state.cardIndex + 1} / ${state.cardPool.length}</span>
        <button class="btn" id="cardNext">Next &rarr;</button>
      </div>
      <div class="quiz-meta" style="color:${meta.color}">${meta.short}</div>
    </div>`;

  document.getElementById("flipCard").addEventListener("click", (e) => {
    e.currentTarget.classList.toggle("is-flipped");
    state.cardsSeen.add(state.cardFilter === "all" ? card.front : card.subject + "::" + card.front);
  });
  document.getElementById("cardPrev").addEventListener("click", () => {
    state.cardIndex = (state.cardIndex - 1 + state.cardPool.length) % state.cardPool.length;
    renderCards();
  });
  document.getElementById("cardNext").addEventListener("click", () => {
    state.cardIndex = (state.cardIndex + 1) % state.cardPool.length;
    renderCards();
  });
}

buildFilterChips(document.getElementById("cardFilters"), (id) => startCards(id));
startCards("all");

// ---------- Progress ----------
function renderProgress() {
  const area = document.getElementById("progressArea");
  const quizPct = state.quizAttempts ? Math.round((state.quizScore / state.quizAttempts) * 100) : 0;
  const cardPct = Math.round((state.cardsSeen.size / FLASHCARDS.length) * 100);

  area.innerHTML = `
    <div class="progress-grid">
      <div class="progress-row" style="flex-direction:column; align-items:stretch;">
        <div style="display:flex; justify-content:space-between;">
          <span class="progress-label">Quiz accuracy this session</span>
          <span class="progress-value">${quizPct}%</span>
        </div>
        <div class="bar-track"><div class="bar-fill" style="width:${quizPct}%"></div></div>
      </div>
      <div class="progress-row" style="flex-direction:column; align-items:stretch;">
        <div style="display:flex; justify-content:space-between;">
          <span class="progress-label">Flashcards flipped</span>
          <span class="progress-value">${state.cardsSeen.size} / ${FLASHCARDS.length}</span>
        </div>
        <div class="bar-track"><div class="bar-fill" style="width:${cardPct}%"></div></div>
      </div>
      <div class="progress-row">
        <span class="progress-label">Questions attempted</span>
        <span class="progress-value">${state.quizAttempts}</span>
      </div>
    </div>`;
}

// ---------- Chat tutor ----------
const SYSTEM_PROMPT = `You are a warm, encouraging tutor helping a student named Rey prepare for the ICSI CS Executive Programme, Group 2 (2022 syllabus): Capital Market & Securities Laws, Economic/Commercial & IP Laws, and Tax Laws & Practice. Explain concepts plainly and briefly, use short examples where helpful, and where relevant mention that recent amendments should be cross-checked against the latest ICSI study material since law and tax rules change often. Keep answers focused and exam-relevant, not overly long.`;

document.getElementById("saveKeyBtn").addEventListener("click", () => {
  const input = document.getElementById("apiKeyInput");
  const val = input.value.trim();
  if (!val) return;
  state.apiKey = val;
  input.value = "";
  input.placeholder = "Key saved for this session";
  const box = document.getElementById("keyBox");
  box.classList.add("is-saved");
  box.querySelector(".key-row").style.display = "none";
});

function appendMsg(text, cls) {
  const log = document.getElementById("chatLog");
  const div = document.createElement("div");
  div.className = "msg " + cls;
  div.textContent = text;
  log.appendChild(div);
  log.scrollTop = log.scrollHeight;
  return div;
}

document.getElementById("chatForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const input = document.getElementById("chatInput");
  const text = input.value.trim();
  if (!text) return;
  input.value = "";

  if (!state.apiKey) {
    appendMsg("Add your Anthropic API key above first — see the box at the top of this tab.", "msg-error");
    return;
  }

  appendMsg(text, "msg-user");
  state.chatHistory.push({ role: "user", content: text });
  const thinking = appendMsg("Thinking…", "msg-bot");

  try {
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": state.apiKey,
        "anthropic-version": "2023-06-01",
        "anthropic-dangerous-direct-browser-access": "true",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-6",
        max_tokens: 700,
        system: SYSTEM_PROMPT,
        messages: state.chatHistory,
      }),
    });

    if (!res.ok) {
      const errBody = await res.text();
      throw new Error(`API error ${res.status}: ${errBody.slice(0, 200)}`);
    }

    const data = await res.json();
    const reply = (data.content || [])
      .filter(b => b.type === "text")
      .map(b => b.text)
      .join("\n")
      .trim() || "(No text in response.)";

    thinking.textContent = reply;
    state.chatHistory.push({ role: "assistant", content: reply });
  } catch (err) {
    thinking.remove();
    appendMsg("Couldn't reach the tutor: " + err.message, "msg-error");
  }
});

// Auto-resize chat textarea a little
document.getElementById("chatInput").addEventListener("input", (e) => {
  e.target.style.height = "auto";
  e.target.style.height = Math.min(e.target.scrollHeight, 140) + "px";
});
