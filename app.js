// ===== 루틴 데이터 =====
const ROUTINES = {
  1: {
    name: "가슴 + 삼두",
    exercises: [
      { name: "바벨 벤치프레스", target: "5세트 x 6~8회" },
      { name: "덤벨 인클라인 프레스", target: "4세트 x 8~10회" },
      { name: "머신/덤벨 플라이", target: "3세트 x 10~12회" },
      { name: "케이블 푸시다운", target: "4세트 x 10~12회" },
      { name: "덤벨 오버헤드 익스텐션", target: "3세트 x 10~12회" },
      { name: "덤벨 클로즈그립 프레스", target: "3세트 x 10~12회" },
      { name: "스텝밀", target: "600스텝" }
    ]
  },
  2: {
    name: "등 + 이두",
    exercises: [
      { name: "랫풀다운", target: "5세트 x 6~8회" },
      { name: "바벨 벤트오버 로우", target: "4세트 x 8~10회" },
      { name: "덤벨 원암 로우", target: "4세트 x 8회 (좌우)" },
      { name: "바벨 컬", target: "4세트 x 8~10회" },
      { name: "덤벨 해머컬", target: "3세트 x 10~12회" },
      { name: "덤벨 컨센트레이션 컬", target: "3세트 x 12회" },
      { name: "스텝밀", target: "600스텝" }
    ]
  },
  3: {
    name: "하체",
    exercises: [
      { name: "헥스바 데드리프트", target: "4세트 x 10~12회" },
      { name: "레그프레스", target: "4세트 x 12~15회" },
      { name: "덤벨 불가리안 스플릿 스쿼트", target: "3세트 x 8회 (좌우)" },
      { name: "케틀벨 고블릿 스쿼트", target: "3세트 x 12회" },
      { name: "레그 익스텐션", target: "3세트 x 15회" },
      { name: "카프레이즈", target: "4세트 x 15~20회" }
    ]
  },
  4: {
    name: "어깨 + 팔",
    exercises: [
      { name: "덤벨 숄더 프레스", target: "4세트 x 8~10회" },
      { name: "사이드 레터럴 레이즈", target: "4세트 x 12~15회" },
      { name: "페이스풀", target: "3세트 x 15회" },
      { name: "바벨컬+푸시다운 슈퍼세트", target: "4세트 x 10회" },
      { name: "해머컬+오버헤드 익스텐션 슈퍼세트", target: "3세트 x 12회" },
      { name: "덤벨 컬 21s", target: "2세트" },
      { name: "스텝밀", target: "600스텝" }
    ]
  }
};

const STORAGE_KEY = "monster-project-logs";
const BASEWEIGHT_KEY = "monster-project-baseweights";

// ===== 시작 기준 무게 (183cm/80kg 복귀 중급자 기준, 첫 실행시 1회만 채워짐) =====
const DEFAULT_BASE_WEIGHTS = {
  // Day 1 — 가슴/삼두
  "바벨 벤치프레스": 40,
  "덤벨 인클라인 프레스": 16,
  "머신/덤벨 플라이": 12,
  "케이블 푸시다운": 20,
  "덤벨 오버헤드 익스텐션": 10,
  "덤벨 클로즈그립 프레스": 14,
  // Day 2 — 등/이두
  "랫풀다운": 40,
  "바벨 벤트오버 로우": 40,
  "덤벨 원암 로우": 16,
  "바벨 컬": 20,
  "덤벨 해머컬": 10,
  "덤벨 컨센트레이션 컬": 8,
  // Day 3 — 하체
  "헥스바 데드리프트": 40,
  "레그프레스": 60,
  "덤벨 불가리안 스플릿 스쿼트": 10,
  "케틀벨 고블릿 스쿼트": 16,
  "레그 익스텐션": 20,
  "카프레이즈": 40,
  // Day 4 — 어깨/팔
  "덤벨 숄더 프레스": 12,
  "사이드 레터럴 레이즈": 6,
  "페이스풀": 15,
  "바벨컬+푸시다운 슈퍼세트": 20,
  "해머컬+오버헤드 익스텐션 슈퍼세트": 10,
  "덤벨 컬 21s": 8
};

const PROFILE_KEY = "monster-project-profile";

// ===== BMI 7단계 x 운동량 3단계 칭호 시스템 =====
const BMI_TIERS = [
  { max: 18, emoji: "💀", base: "스켈레톤", mid: "좀비파이터", high: "본마스터" },
  { max: 19.5, emoji: "🐟", base: "육수용 멸치", mid: "건멸치", high: "멸치들의 왕" },
  { max: 21, emoji: "🥢", base: "홀쭉이", mid: "젓가락전사", high: "황금젓가락킹" },
  { max: 23, emoji: "⚖️", base: "정상인", mid: "밸런스마스터", high: "밸런스갓" },
  { max: 25, emoji: "🍚", base: "통통이", mid: "묵직맨", high: "든든국밥킹" },
  { max: 27, emoji: "🐗", base: "돼지", mid: "돼지전사", high: "아이언보어" },
  { max: Infinity, emoji: "🐷", base: "뚱돼지", mid: "운동한돼지", high: "운동많이한 돼지" }
];

function getBMITier(bmi) {
  return BMI_TIERS.find(t => bmi < t.max) || BMI_TIERS[BMI_TIERS.length - 1];
}

function getWorkoutLevel(count) {
  if (count >= 16) return "high";
  if (count >= 8) return "mid";
  return "base";
}

function getMonthlyWorkoutCount() {
  const logs = getLogs();
  const ym = new Date().toISOString().slice(0, 7);
  return Object.keys(logs).filter(k => k.startsWith(ym) && logs[k].day !== "rest").length;
}

function getProfile() {
  try {
    const raw = localStorage.getItem(PROFILE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    return null;
  }
}

function saveProfileData(profile) {
  localStorage.setItem(PROFILE_KEY, JSON.stringify(profile));
}

// ===== 이스터에그 (특정 이름 최초 입력시 1회 문구) =====
const EASTER_EGG_SEEN_KEY = "monster-project-easteregg-seen";
const EASTER_EGGS = {
  "임주호": "🐟 스켈레톤의 후손, 멸치들의 왕, 백골부대에서 개꿀빤 사람 임주호 환영합니다.",
  "하진석": "🐷 돼지들의 왕, 뭘 믿고 맨날 살찌는지 모르겠는 사람, 원딜 잡고 딜꼴찌하는 하진석 환영합니다.",
  "김병주": "🕵️ 아동복지관의 비밀 에이전트, 결혼 전에 살뺀다 해놓고 하나도 안뺀 김병주 환영합니다."
};

function checkEasterEgg(name) {
  if (!name || !EASTER_EGGS[name]) return;

  let seen = {};
  try {
    seen = JSON.parse(localStorage.getItem(EASTER_EGG_SEEN_KEY)) || {};
  } catch (e) {
    seen = {};
  }

  if (seen[name]) return;

  seen[name] = true;
  localStorage.setItem(EASTER_EGG_SEEN_KEY, JSON.stringify(seen));

  setTimeout(() => alert(EASTER_EGGS[name]), 200);
}

// ===== 운동 검색용 마스터 리스트 =====
const MASTER_EXERCISES = [
  { category: "가슴", name: "바벨 벤치프레스" },
  { category: "가슴", name: "덤벨 인클라인 프레스" },
  { category: "가슴", name: "덤벨 디클라인 프레스" },
  { category: "가슴", name: "머신 체스트 프레스" },
  { category: "가슴", name: "머신 플라이" },
  { category: "가슴", name: "덤벨 플라이" },
  { category: "가슴", name: "케이블 크로스오버" },
  { category: "가슴", name: "딥스" },
  { category: "가슴", name: "덤벨 클로즈그립 프레스" },
  { category: "등", name: "랫풀다운" },
  { category: "등", name: "바벨 벤트오버 로우" },
  { category: "등", name: "덤벨 원암 로우" },
  { category: "등", name: "케이블 시티드 로우" },
  { category: "등", name: "풀업" },
  { category: "등", name: "티바 로우" },
  { category: "어깨", name: "덤벨 숄더 프레스" },
  { category: "어깨", name: "바벨 밀리터리 프레스" },
  { category: "어깨", name: "사이드 레터럴 레이즈" },
  { category: "어깨", name: "프론트 레이즈" },
  { category: "어깨", name: "리어 델트 플라이" },
  { category: "어깨", name: "페이스풀" },
  { category: "어깨", name: "케이블 숄더 프레스" },
  { category: "팔", name: "바벨 컬" },
  { category: "팔", name: "덤벨 컬" },
  { category: "팔", name: "덤벨 해머컬" },
  { category: "팔", name: "덤벨 컨센트레이션 컬" },
  { category: "팔", name: "덤벨 컬 21s" },
  { category: "팔", name: "케이블 푸시다운" },
  { category: "팔", name: "덤벨 오버헤드 익스텐션" },
  { category: "팔", name: "스컬크러셔" },
  { category: "하체", name: "헥스바 데드리프트" },
  { category: "하체", name: "바벨 데드리프트" },
  { category: "하체", name: "레그프레스" },
  { category: "하체", name: "바벨 스쿼트" },
  { category: "하체", name: "덤벨 불가리안 스플릿 스쿼트" },
  { category: "하체", name: "덤벨 런지" },
  { category: "하체", name: "케틀벨 고블릿 스쿼트" },
  { category: "하체", name: "레그 익스텐션" },
  { category: "하체", name: "레그 컬" },
  { category: "하체", name: "카프레이즈" },
  { category: "하체", name: "루마니안 데드리프트" },
  { category: "코어", name: "플랭크" },
  { category: "코어", name: "행잉 레그레이즈" },
  { category: "코어", name: "케이블 크런치" },
  { category: "코어", name: "케틀벨 러시안 트위스트" },
  { category: "유산소", name: "스텝밀" },
  { category: "유산소", name: "트레드밀" },
  { category: "유산소", name: "사이클" }
];

// ===== 맨몸 운동 루틴 =====
const BODYWEIGHT_ROUTINES = {
  1: {
    name: "가슴 + 삼두 (맨몸)",
    exercises: [
      { name: "푸시업", target: "4세트 x 15~20회" },
      { name: "와이드 푸시업", target: "3세트 x 12~15회" },
      { name: "다이아몬드 푸시업", target: "3세트 x 10~12회" },
      { name: "디클라인 푸시업", target: "3세트 x 10~12회" },
      { name: "벤치 딥스", target: "3세트 x 12~15회" },
      { name: "플랭크", target: "3세트 x 45~60초" }
    ]
  },
  2: {
    name: "등 + 이두 (맨몸)",
    exercises: [
      { name: "풀업", target: "4세트 x 최대" },
      { name: "친업", target: "3세트 x 최대" },
      { name: "인버티드 로우", target: "4세트 x 10~12회" },
      { name: "슈퍼맨", target: "3세트 x 15회" },
      { name: "타올 컬", target: "3세트 x 15회" },
      { name: "도어프레임 로우", target: "3세트 x 12회" }
    ]
  },
  3: {
    name: "하체 (맨몸)",
    exercises: [
      { name: "맨몸 스쿼트", target: "4세트 x 20회" },
      { name: "런지", target: "3세트 x 15회 (좌우)" },
      { name: "불가리안 스플릿 스쿼트", target: "3세트 x 12회 (좌우)" },
      { name: "점프 스쿼트", target: "3세트 x 15회" },
      { name: "글루트 브릿지", target: "3세트 x 20회" },
      { name: "카프레이즈", target: "4세트 x 25회" }
    ]
  },
  4: {
    name: "어깨 + 팔 (맨몸)",
    exercises: [
      { name: "파이크 푸시업", target: "4세트 x 10~12회" },
      { name: "플랭크 숄더탭", target: "3세트 x 20회" },
      { name: "친업 (이두 집중)", target: "3세트 x 최대" },
      { name: "딥스 (삼두 집중)", target: "3세트 x 12~15회" },
      { name: "파이크 홀드", target: "3세트 x 30초" },
      { name: "밴드/타올 컬", target: "3세트 x 15회" }
    ]
  }
};

const BODYWEIGHT_MASTER_EXERCISES = [
  { category: "가슴", name: "푸시업" },
  { category: "가슴", name: "와이드 푸시업" },
  { category: "가슴", name: "다이아몬드 푸시업" },
  { category: "가슴", name: "디클라인 푸시업" },
  { category: "가슴", name: "인클라인 푸시업" },
  { category: "가슴", name: "벤치 딥스" },
  { category: "등", name: "풀업" },
  { category: "등", name: "친업" },
  { category: "등", name: "인버티드 로우" },
  { category: "등", name: "슈퍼맨" },
  { category: "등", name: "도어프레임 로우" },
  { category: "어깨", name: "파이크 푸시업" },
  { category: "어깨", name: "핸드스탠드 푸시업" },
  { category: "어깨", name: "플랭크 숄더탭" },
  { category: "어깨", name: "파이크 홀드" },
  { category: "팔", name: "딥스" },
  { category: "팔", name: "클로즈그립 푸시업" },
  { category: "팔", name: "타올 컬" },
  { category: "팔", name: "밴드 컬" },
  { category: "하체", name: "맨몸 스쿼트" },
  { category: "하체", name: "런지" },
  { category: "하체", name: "불가리안 스플릿 스쿼트" },
  { category: "하체", name: "점프 스쿼트" },
  { category: "하체", name: "피스톨 스쿼트" },
  { category: "하체", name: "글루트 브릿지" },
  { category: "하체", name: "카프레이즈" },
  { category: "코어", name: "플랭크" },
  { category: "코어", name: "사이드 플랭크" },
  { category: "코어", name: "레그레이즈" },
  { category: "코어", name: "마운틴 클라이머" },
  { category: "코어", name: "V업" },
  { category: "유산소", name: "버피" },
  { category: "유산소", name: "제자리 뛰기" }
];

// ===== 모드에 따라 루틴/마스터리스트 선택 =====
function getRoutines() {
  return currentMode === "bodyweight" ? BODYWEIGHT_ROUTINES : ROUTINES;
}

function getMasterList() {
  return currentMode === "bodyweight" ? BODYWEIGHT_MASTER_EXERCISES : MASTER_EXERCISES;
}

const CONDITION_CONFIG = {
  1: {
    label: "컨디션 안좋음",
    note: "무게 10~20% 낮추고 자세에 집중해. 세트 수도 살짝 줄였어.",
    setAdjust: -1,
    weightHint: "평소 대비 80~90%"
  },
  2: {
    label: "컨디션 보통",
    note: "평소 루틴 그대로 진행하면 돼.",
    setAdjust: 0,
    weightHint: "평소 무게"
  },
  3: {
    label: "컨디션 좋음",
    note: "오늘 컨디션 최고! 무게 살짝 올려서 도전해봐.",
    setAdjust: 0,
    weightHint: "평소 대비 +2.5~5kg 시도"
  }
};

let currentDay = 1;
let currentCondition = 2;
let currentMode = "gym";
let currentExercises = [];
let editingDateKey = null;

// ===== 기준 무게 관리 =====
function getBaseWeights() {
  try {
    const raw = localStorage.getItem(BASEWEIGHT_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    return {};
  }
}

function saveBaseWeights(weights) {
  localStorage.setItem(BASEWEIGHT_KEY, JSON.stringify(weights));
}

function getBaseWeight(name) {
  const weights = getBaseWeights();
  return weights[name] !== undefined ? weights[name] : null;
}

function seedDefaultBaseWeights() {
  const existing = localStorage.getItem(BASEWEIGHT_KEY);
  if (existing) return; // 이미 값이 있으면(직접 수정했든 아니든) 덮어쓰지 않음
  saveBaseWeights({ ...DEFAULT_BASE_WEIGHTS });
}

// ===== 체중 기반 기준무게 자동 계산 (DEFAULT_BASE_WEIGHTS는 80kg 기준으로 잡은 값) =====
const AUTO_WEIGHT_REFERENCE_BODYWEIGHT = 80;

function computeAutoBaseWeights(bodyweight) {
  const scale = bodyweight / AUTO_WEIGHT_REFERENCE_BODYWEIGHT;
  const result = {};
  Object.entries(DEFAULT_BASE_WEIGHTS).forEach(([name, val]) => {
    const scaled = Math.max(0, Math.round((val * scale) / 2.5) * 2.5);
    result[name] = scaled;
  });
  return result;
}

function promptSetBaseWeight(name, idx) {
  const current = getBaseWeight(name);
  const input = prompt(`${name}의 기준 무게를 kg로 입력해줘:`, current !== null ? current : "");
  if (input === null || input.trim() === "") return;
  const num = parseFloat(input);
  if (isNaN(num)) return;

  const weights = getBaseWeights();
  weights[name] = num;
  saveBaseWeights(weights);

  currentExercises[idx].weight = num;
  renderExercises();
}

// ===== 목표 세트 텍스트에서 세트 수 조정 =====
function adjustTarget(target, setAdjust) {
  if (setAdjust === 0) return target;
  const match = target.match(/^(\d+)(세트.*)$/);
  if (!match) return target;
  const originalSets = parseInt(match[1]);
  const newSets = Math.max(2, originalSets + setAdjust);
  return newSets + match[2];
}

// ===== 초기화 =====
function init() {
  seedDefaultBaseWeights();

  const today = new Date();
  const dateStr = today.toLocaleDateString("ko-KR", { year: "numeric", month: "long", day: "numeric", weekday: "long" });
  document.getElementById("today-date").textContent = dateStr;

  document.querySelectorAll(".day-tab").forEach(btn => {
    btn.addEventListener("click", () => selectDay(parseInt(btn.dataset.day)));
  });

  document.querySelectorAll(".condition-tab").forEach(btn => {
    btn.addEventListener("click", () => selectCondition(parseInt(btn.dataset.condition)));
  });

  document.querySelectorAll(".mode-tab").forEach(btn => {
    btn.addEventListener("click", () => selectMode(btn.dataset.mode));
  });

  document.getElementById("add-exercise-btn").addEventListener("click", openExerciseModal);
  document.getElementById("save-log-btn").addEventListener("click", saveLog);
  document.getElementById("rest-day-btn").addEventListener("click", saveRestDay);
  document.getElementById("close-modal-btn").addEventListener("click", closeExerciseModal);
  document.getElementById("cancel-edit-btn").addEventListener("click", cancelEditing);
  document.getElementById("exercise-search").addEventListener("input", (e) => {
    renderExerciseModalList(e.target.value);
  });

  document.getElementById("profile-btn").addEventListener("click", openProfileModal);
  document.getElementById("close-profile-btn").addEventListener("click", closeProfileModal);
  document.getElementById("save-profile-btn").addEventListener("click", handleSaveProfile);
  ["profile-name", "profile-height", "profile-weight"].forEach(id => {
    document.getElementById(id).addEventListener("input", renderProfileResultFromInputs);
  });

  document.getElementById("tip-btn").addEventListener("click", openTipModal);
  document.getElementById("close-tip-btn").addEventListener("click", closeTipModal);

  selectMode("gym");
  selectCondition(2);
  initCalendarNav();
  renderHistory();
}

// ===== 모드 선택 (기구 / 맨몸) =====
function selectMode(mode) {
  currentMode = mode;
  document.querySelectorAll(".mode-tab").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.mode === mode);
  });
  selectDay(currentDay);
}

// ===== 컨디션 선택 =====
function selectCondition(condition) {
  currentCondition = condition;
  document.querySelectorAll(".condition-tab").forEach(btn => {
    btn.classList.toggle("active", parseInt(btn.dataset.condition) === condition);
  });
  document.getElementById("condition-note").textContent = CONDITION_CONFIG[condition].note;

  const setAdjust = CONDITION_CONFIG[condition].setAdjust;
  currentExercises.forEach(ex => {
    if (!ex.custom && ex.baseTarget) {
      ex.target = adjustTarget(ex.baseTarget, setAdjust);
    }
  });
  renderExercises();
}

// ===== Day 선택 =====
function selectDay(day) {
  currentDay = day;
  document.querySelectorAll(".day-tab").forEach(btn => {
    btn.classList.toggle("active", parseInt(btn.dataset.day) === day);
  });

  const setAdjust = CONDITION_CONFIG[currentCondition].setAdjust;
  const base = getRoutines()[day].exercises.map(ex => {
    const baseWeight = getBaseWeight(ex.name);
    return {
      name: ex.name,
      baseTarget: ex.target,
      target: adjustTarget(ex.target, setAdjust),
      checked: false,
      weight: baseWeight !== null ? baseWeight : "",
      sets: "",
      custom: false
    };
  });

  currentExercises = base;
  renderExercises();
}

// ===== 운동 목록 렌더링 =====
function renderExercises() {
  const view = document.getElementById("routine-view");
  view.innerHTML = "";

  currentExercises.forEach((ex, idx) => {
    const card = document.createElement("div");
    card.className = "exercise-card";

    const header = document.createElement("div");
    header.className = "exercise-header";

    const nameBlock = document.createElement("div");
    nameBlock.innerHTML = `<div class="exercise-name">${idx + 1}. ${ex.name}</div><div class="exercise-target">${ex.target}</div>`;

    const checkBtn = document.createElement("button");
    checkBtn.className = "exercise-check" + (ex.checked ? " checked" : "");
    checkBtn.addEventListener("click", () => {
      currentExercises[idx].checked = !currentExercises[idx].checked;
      renderExercises();
    });

    header.appendChild(nameBlock);
    header.appendChild(checkBtn);
    card.appendChild(header);

    const inputRow = document.createElement("div");
    inputRow.className = "exercise-inputs";

    const weightControl = document.createElement("div");
    weightControl.className = "weight-control";

    const baseWeight = getBaseWeight(ex.name);
    const baseLine = document.createElement("div");
    baseLine.className = "weight-base-line";
    baseLine.innerHTML = `<span>${baseWeight !== null ? `기준무게 ${baseWeight}kg` : "기준무게 미설정"} · ${CONDITION_CONFIG[currentCondition].weightHint}</span>`;
    const editBtn = document.createElement("button");
    editBtn.className = "weight-edit-btn";
    editBtn.textContent = "설정";
    editBtn.addEventListener("click", () => promptSetBaseWeight(ex.name, idx));
    baseLine.appendChild(editBtn);
    weightControl.appendChild(baseLine);

    const adjustRow = document.createElement("div");
    adjustRow.className = "weight-adjust-row";

    const minusBtn = document.createElement("button");
    minusBtn.className = "weight-adjust-btn";
    minusBtn.textContent = "－2.5";
    minusBtn.addEventListener("click", () => {
      const cur = parseFloat(currentExercises[idx].weight) || 0;
      currentExercises[idx].weight = Math.round((Math.max(0, cur - 2.5)) * 10) / 10;
      renderExercises();
    });

    const weightDisplay = document.createElement("div");
    weightDisplay.className = "weight-display";
    weightDisplay.textContent = ex.weight !== "" ? `${ex.weight} kg` : "무게 미입력";

    const plusBtn = document.createElement("button");
    plusBtn.className = "weight-adjust-btn";
    plusBtn.textContent = "+2.5";
    plusBtn.addEventListener("click", () => {
      const cur = parseFloat(currentExercises[idx].weight) || 0;
      currentExercises[idx].weight = Math.round((cur + 2.5) * 10) / 10;
      renderExercises();
    });

    adjustRow.appendChild(minusBtn);
    adjustRow.appendChild(weightDisplay);
    adjustRow.appendChild(plusBtn);
    weightControl.appendChild(adjustRow);

    card.appendChild(weightControl);

    const setsInput = document.createElement("input");
    setsInput.type = "text";
    setsInput.placeholder = "세트 x 회";
    setsInput.value = ex.sets;
    setsInput.style.marginTop = "8px";
    setsInput.addEventListener("input", (e) => {
      currentExercises[idx].sets = e.target.value;
    });

    inputRow.appendChild(setsInput);
    card.appendChild(inputRow);

    if (ex.custom) {
      const removeBtn = document.createElement("button");
      removeBtn.className = "remove-exercise";
      removeBtn.textContent = "삭제";
      removeBtn.addEventListener("click", () => {
        currentExercises.splice(idx, 1);
        renderExercises();
      });
      card.appendChild(removeBtn);
    }

    view.appendChild(card);
  });
}

// ===== 운동 검색 모달 =====
function openExerciseModal() {
  document.getElementById("exercise-modal").classList.add("open");
  const searchInput = document.getElementById("exercise-search");
  searchInput.value = "";
  renderExerciseModalList("");
  searchInput.focus();
}

function closeExerciseModal() {
  document.getElementById("exercise-modal").classList.remove("open");
}

function renderExerciseModalList(query) {
  const list = document.getElementById("exercise-list");
  list.innerHTML = "";

  const q = query.trim().toLowerCase();
  const filtered = getMasterList().filter(ex => ex.name.toLowerCase().includes(q));

  if (filtered.length === 0) {
    list.innerHTML = `<div class="modal-empty">검색 결과가 없어. 아래에서 직접 추가해봐.</div>`;
    const addDirectBtn = document.createElement("div");
    addDirectBtn.className = "modal-item";
    addDirectBtn.textContent = `"${query}" 직접 추가하기`;
    addDirectBtn.addEventListener("click", () => selectExerciseFromModal(query.trim()));
    if (query.trim()) list.appendChild(addDirectBtn);
    return;
  }

  let lastCategory = null;
  filtered.forEach(ex => {
    if (ex.category !== lastCategory) {
      const catLabel = document.createElement("div");
      catLabel.className = "modal-cat-label";
      catLabel.textContent = ex.category;
      list.appendChild(catLabel);
      lastCategory = ex.category;
    }

    const item = document.createElement("div");
    item.className = "modal-item";
    item.textContent = `${ex.category} - ${ex.name}`;
    item.addEventListener("click", () => selectExerciseFromModal(ex.name));
    list.appendChild(item);
  });
}

function selectExerciseFromModal(name) {
  if (!name) return;

  const baseWeight = getBaseWeight(name);
  currentExercises.push({
    name: name,
    target: "직접 기록",
    checked: false,
    weight: baseWeight !== null ? baseWeight : "",
    sets: "",
    custom: true
  });

  closeExerciseModal();
  renderExercises();
}

// ===== 로그 저장 =====
function saveLog() {
  const logs = getLogs();
  const dateKey = editingDateKey || new Date().toISOString().slice(0, 10);

  logs[dateKey] = {
    day: currentDay,
    dayName: getRoutines()[currentDay].name,
    mode: currentMode,
    condition: currentCondition,
    conditionLabel: CONDITION_CONFIG[currentCondition].label,
    exercises: currentExercises.map(ex => ({
      name: ex.name,
      checked: ex.checked,
      weight: ex.weight,
      sets: ex.sets
    })),
    timestamp: new Date().toISOString()
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(logs));

  const weights = getBaseWeights();
  currentExercises.forEach(ex => {
    if (ex.weight !== "" && ex.weight !== null && !isNaN(parseFloat(ex.weight))) {
      weights[ex.name] = parseFloat(ex.weight);
    }
  });
  saveBaseWeights(weights);

  showToast(editingDateKey ? `${dateKey} 기록 수정 완료 ✓` : "오늘 기록 저장 완료 💪");

  if (editingDateKey) {
    editingDateKey = null;
    updateEditingBanner();
  }

  renderHistory();
}

// ===== 과거 날짜 기록 불러와서 수정 =====
function loadEntryForEditing(dateKey, entry) {
  editingDateKey = dateKey;
  currentDay = entry.day;
  currentCondition = entry.condition || 2;
  currentMode = entry.mode || "gym";

  document.querySelectorAll(".mode-tab").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.mode === currentMode);
  });
  document.querySelectorAll(".day-tab").forEach(btn => {
    btn.classList.toggle("active", parseInt(btn.dataset.day) === currentDay);
  });
  document.querySelectorAll(".condition-tab").forEach(btn => {
    btn.classList.toggle("active", parseInt(btn.dataset.condition) === currentCondition);
  });
  document.getElementById("condition-note").textContent = CONDITION_CONFIG[currentCondition].note;

  const routines = getRoutines();

  currentExercises = entry.exercises.map(ex => {
    const routineMatch = routines[currentDay].exercises.find(r => r.name === ex.name);
    return {
      name: ex.name,
      baseTarget: routineMatch ? routineMatch.target : undefined,
      target: routineMatch ? routineMatch.target : "직접 기록",
      checked: ex.checked,
      weight: ex.weight,
      sets: ex.sets,
      custom: !routineMatch
    };
  });

  updateEditingBanner();
  renderExercises();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ===== 과거 빈 날짜에 새 기록 시작 =====
function startNewEntryForDate(dateKey) {
  editingDateKey = dateKey;
  selectCondition(2);
  selectDay(1);
  updateEditingBanner();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function cancelEditing() {
  editingDateKey = null;
  updateEditingBanner();
  selectDay(currentDay);
}

function updateEditingBanner() {
  const banner = document.getElementById("editing-banner");
  const saveBtn = document.getElementById("save-log-btn");
  const restBtn = document.getElementById("rest-day-btn");

  if (editingDateKey) {
    document.getElementById("editing-banner-text").textContent = `${editingDateKey} 기록 편집 중`;
    banner.classList.add("show");
    saveBtn.textContent = `${editingDateKey} 기록 저장`;
    restBtn.textContent = `${editingDateKey}를 휴식일로 기록 💤`;
  } else {
    banner.classList.remove("show");
    saveBtn.textContent = "오늘 기록 저장";
    restBtn.textContent = "오늘은 휴식일이야 💤";
  }
}

// ===== 기록 삭제 =====
function deleteLogEntry(dateKey) {
  if (!confirm(`${dateKey} 기록을 삭제할까? 되돌릴 수 없어.`)) return;

  const logs = getLogs();
  delete logs[dateKey];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(logs));

  if (editingDateKey === dateKey) {
    editingDateKey = null;
    updateEditingBanner();
  }

  showToast("기록 삭제 완료");
  renderHistory();
}

// ===== 휴식일 저장 =====
function saveRestDay() {
  const logs = getLogs();
  const dateKey = editingDateKey || new Date().toISOString().slice(0, 10);

  logs[dateKey] = {
    day: "rest",
    dayName: "휴식",
    condition: null,
    conditionLabel: "",
    exercises: [],
    timestamp: new Date().toISOString()
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(logs));
  showToast(editingDateKey ? `${dateKey} 휴식일로 기록 완료` : "휴식일로 기록했어 💤");

  if (editingDateKey) {
    editingDateKey = null;
    updateEditingBanner();
  }

  renderHistory();
}

function getLogs() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    return {};
  }
}

// ===== 캘린더 상태 =====
let calYear = new Date().getFullYear();
let calMonth = new Date().getMonth(); // 0-indexed

function initCalendarNav() {
  document.getElementById("prev-month").addEventListener("click", () => {
    calMonth--;
    if (calMonth < 0) { calMonth = 11; calYear--; }
    renderHistory();
  });
  document.getElementById("next-month").addEventListener("click", () => {
    calMonth++;
    if (calMonth > 11) { calMonth = 0; calYear++; }
    renderHistory();
  });
}

// ===== 월별 캘린더 렌더링 =====
function renderHistory() {
  const logs = getLogs();
  document.getElementById("calendar-title").textContent = `${calYear}년 ${calMonth + 1}월`;

  const grid = document.getElementById("calendar-grid");
  grid.innerHTML = "";

  const firstDayOfWeek = new Date(calYear, calMonth, 1).getDay();
  const daysInMonth = new Date(calYear, calMonth + 1, 0).getDate();
  const todayStr = new Date().toISOString().slice(0, 10);

  for (let i = 0; i < firstDayOfWeek; i++) {
    const empty = document.createElement("div");
    empty.className = "calendar-day empty";
    grid.appendChild(empty);
  }

  for (let d = 1; d <= daysInMonth; d++) {
    const dateKey = `${calYear}-${String(calMonth + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
    const entry = logs[dateKey];

    const cell = document.createElement("div");
    cell.className = "calendar-day";
    if (entry) {
      if (entry.day === "rest") {
        cell.classList.add("logged-rest");
      } else if (entry.mode === "bodyweight") {
        cell.classList.add("logged-bw");
      } else {
        cell.classList.add("logged-gym");
      }
    }
    if (dateKey === todayStr) cell.classList.add("today");

    cell.innerHTML = `<span class="cal-day-num">${d}</span>`;
    if (entry) {
      const label = entry.day === "rest" ? "휴식" : `D${entry.day}${entry.mode === "bodyweight" ? "🤸" : ""}`;
      cell.innerHTML += `<span style="font-size:10px;">${label}</span>`;
    }

    cell.addEventListener("click", () => showDayDetail(dateKey, entry));
    grid.appendChild(cell);
  }

  document.getElementById("day-detail").innerHTML = "";
}

// ===== 날짜 클릭 시 상세 기록 표시 =====
function showDayDetail(dateKey, entry) {
  const detail = document.getElementById("day-detail");

  if (!entry) {
    const todayStr = new Date().toISOString().slice(0, 10);
    const isFuture = dateKey > todayStr;
    detail.innerHTML = `
      <div class="history-entry">
        <div class="h-date">${dateKey}</div>
        <div class="h-summary">기록 없음</div>
        ${isFuture ? "" : `<div class="detail-actions"><button class="edit-btn" id="detail-new-btn">이 날짜 기록 추가하기</button></div>`}
      </div>
    `;
    if (!isFuture) {
      document.getElementById("detail-new-btn").addEventListener("click", () => startNewEntryForDate(dateKey));
    }
    return;
  }

  if (entry.day === "rest") {
    detail.innerHTML = `
      <div class="history-entry">
        <div class="h-date">${dateKey} · 휴식일 💤</div>
        <div class="h-summary">오늘은 쉬는 날이었어</div>
        <div class="detail-actions">
          <button class="delete-btn" id="detail-delete-btn">삭제</button>
        </div>
      </div>
    `;
    document.getElementById("detail-delete-btn").addEventListener("click", () => deleteLogEntry(dateKey));
    return;
  }

  const doneCount = entry.exercises.filter(e => e.checked).length;
  const totalCount = entry.exercises.length;

  const exLines = entry.exercises.map((ex, i) => {
    const statusClass = ex.checked ? "done" : "missed";
    const mark = ex.checked ? "✓" : "✗";
    const detailParts = [];
    if (ex.weight) detailParts.push(`${ex.weight}kg`);
    if (ex.sets) detailParts.push(ex.sets);
    const detailStr = detailParts.length ? ` — ${detailParts.join(" / ")}` : "";
    return `<div class="h-ex-line ${statusClass}"><span class="h-mark">${mark}</span><span class="h-ex-name">${i + 1}. ${ex.name}${detailStr}</span></div>`;
  }).join("");

  detail.innerHTML = `
    <div class="history-entry">
      <div class="h-date">${dateKey} · Day ${entry.day} (${entry.dayName})${entry.mode === "bodyweight" ? " 🤸 맨몸" : ""}</div>
      <div class="h-summary">${doneCount}/${totalCount} 완료 · ${entry.conditionLabel || ""}</div>
      ${exLines}
      <div class="detail-actions">
        <button class="edit-btn" id="detail-edit-btn">수정하기</button>
        <button class="delete-btn" id="detail-delete-btn">삭제</button>
      </div>
    </div>
  `;

  document.getElementById("detail-edit-btn").addEventListener("click", () => loadEntryForEditing(dateKey, entry));
  document.getElementById("detail-delete-btn").addEventListener("click", () => deleteLogEntry(dateKey));
}

// ===== 프로필 모달 =====
function openProfileModal() {
  const profile = getProfile();
  document.getElementById("profile-name").value = profile ? profile.name : "";
  document.getElementById("profile-height").value = profile ? profile.height : "";
  document.getElementById("profile-weight").value = profile ? profile.weight : "";

  document.getElementById("profile-modal").classList.add("open");
  renderProfileResultFromInputs();
}

function closeProfileModal() {
  document.getElementById("profile-modal").classList.remove("open");
}

function handleSaveProfile() {
  const name = document.getElementById("profile-name").value.trim();
  const height = parseFloat(document.getElementById("profile-height").value);
  const weight = parseFloat(document.getElementById("profile-weight").value);

  if (!height || !weight || height <= 0 || weight <= 0) {
    alert("키와 몸무게를 정확히 입력해줘.");
    return;
  }

  saveProfileData({ name, height, weight });
  showToast("프로필 저장 완료");
  renderProfileResultFromInputs();
  checkEasterEgg(name);

  if (confirm(`체중(${weight}kg) 기준으로 각 운동의 기준무게도 자동으로 맞춰줄까?\n(직접 설정해둔 기존 값은 덮어써져)`)) {
    const autoWeights = computeAutoBaseWeights(weight);
    const weights = getBaseWeights();
    Object.assign(weights, autoWeights);
    saveBaseWeights(weights);
    showToast("기준무게 자동 설정 완료 💪");

    if (!editingDateKey) {
      selectDay(currentDay);
    }
  }
}

function renderProfileResultFromInputs() {
  const name = document.getElementById("profile-name").value.trim();
  const height = parseFloat(document.getElementById("profile-height").value);
  const weight = parseFloat(document.getElementById("profile-weight").value);

  const resultEl = document.getElementById("profile-result");

  if (!height || !weight || height <= 0 || weight <= 0) {
    resultEl.innerHTML = `<div class="profile-empty-hint">키와 몸무게를 입력하면 칭호가 나와</div>`;
    return;
  }

  const heightM = height / 100;
  const bmi = weight / (heightM * heightM);
  const tier = getBMITier(bmi);
  const workoutCount = getMonthlyWorkoutCount();
  const level = getWorkoutLevel(workoutCount);
  const title = tier[level];
  const displayName = name ? `${name}의 칭호` : "칭호";

  let progressText, progressPct;
  if (level === "base") {
    const remaining = 8 - workoutCount;
    progressText = `1차 전직까지 ${remaining}회 남음`;
    progressPct = Math.min(100, (workoutCount / 8) * 100);
  } else if (level === "mid") {
    const remaining = 16 - workoutCount;
    progressText = `1차 전직 완료 ✓ · 2차 전직까지 ${remaining}회 남음`;
    progressPct = Math.min(100, ((workoutCount - 8) / 8) * 100);
  } else {
    progressText = `2차 전직 완료 ✓ · 최종 전직 달성 🎉`;
    progressPct = 100;
  }

  resultEl.innerHTML = `
    <div class="profile-title-card">
      <div class="profile-title-emoji">${tier.emoji}</div>
      <div class="profile-title-name">${title}</div>
      <div class="profile-title-stats">${displayName} · BMI ${bmi.toFixed(1)} · 이번 달 ${workoutCount}회 운동</div>
      <div class="profile-progress-text">${progressText}</div>
      <div class="profile-progress-bar-bg">
        <div class="profile-progress-bar-fill" style="width:${progressPct}%;"></div>
      </div>
    </div>
  `;
}

// ===== Tip 모달 =====
function openTipModal() {
  document.getElementById("tip-modal").classList.add("open");
}

function closeTipModal() {
  document.getElementById("tip-modal").classList.remove("open");
}

// ===== 토스트 알림 =====
function showToast(msg) {
  const existing = document.querySelector(".toast");
  if (existing) existing.remove();

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = msg;
  document.body.appendChild(toast);

  requestAnimationFrame(() => toast.classList.add("show"));
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 300);
  }, 2000);
}

init();
