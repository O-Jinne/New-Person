// ===== 루틴 데이터: 성별(남/여) x 목표모드(벌크업/균형/감량) = 6가지 세트 =====
// 균형 모드가 기존 기본 루틴, 벌크업은 저반복·고중량·낮은 유산소, 감량은 고반복·서킷형·높은 유산소로 변형
const ROUTINES_MALE = {
  balance: {
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
        { name: "바벨 벤트오버 로우", target: "3세트 x 8~10회" },
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
      name: "어깨 + 이두",
      exercises: [
        { name: "덤벨 숄더 프레스", target: "4세트 x 8~10회" },
        { name: "사이드 레터럴 레이즈", target: "4세트 x 12~15회" },
        { name: "페이스풀", target: "3세트 x 15회" },
        { name: "바벨 컬", target: "4세트 x 8~10회" },
        { name: "덤벨 해머컬", target: "3세트 x 10~12회" },
        { name: "덤벨 컬 21s", target: "2세트" },
        { name: "스텝밀", target: "600스텝" }
      ]
    }
  },
  bulk: {
    1: {
      name: "가슴 + 삼두",
      exercises: [
        { name: "바벨 벤치프레스", target: "5세트 x 4~6회" },
        { name: "덤벨 인클라인 프레스", target: "4세트 x 6~8회" },
        { name: "딥스", target: "4세트 x 8~10회" },
        { name: "케이블 푸시다운", target: "3세트 x 10~12회" },
        { name: "덤벨 클로즈그립 프레스", target: "3세트 x 8~10회" },
        { name: "스텝밀", target: "300스텝" }
      ]
    },
    2: {
      name: "등 + 이두",
      exercises: [
        { name: "랫풀다운", target: "5세트 x 4~6회" },
        { name: "바벨 벤트오버 로우", target: "4세트 x 6~8회" },
        { name: "덤벨 원암 로우", target: "4세트 x 8회 (좌우)" },
        { name: "바벨 컬", target: "4세트 x 6~8회" },
        { name: "덤벨 해머컬", target: "3세트 x 8~10회" },
        { name: "스텝밀", target: "300스텝" }
      ]
    },
    3: {
      name: "하체",
      exercises: [
        { name: "헥스바 데드리프트", target: "5세트 x 4~6회" },
        { name: "레그프레스", target: "4세트 x 8~10회" },
        { name: "덤벨 불가리안 스플릿 스쿼트", target: "4세트 x 8회 (좌우)" },
        { name: "케틀벨 고블릿 스쿼트", target: "3세트 x 10회" },
        { name: "레그 익스텐션", target: "3세트 x 12회" },
        { name: "카프레이즈", target: "4세트 x 12~15회" }
      ]
    },
    4: {
      name: "어깨 + 이두",
      exercises: [
        { name: "덤벨 숄더 프레스", target: "5세트 x 6~8회" },
        { name: "사이드 레터럴 레이즈", target: "3세트 x 12~15회" },
        { name: "페이스풀", target: "3세트 x 15회" },
        { name: "바벨 컬", target: "4세트 x 6~8회" },
        { name: "덤벨 해머컬", target: "3세트 x 8~10회" },
        { name: "스텝밀", target: "300스텝" }
      ]
    }
  },
  cut: {
    1: {
      name: "가슴 + 삼두",
      exercises: [
        { name: "바벨 벤치프레스", target: "4세트 x 10~12회" },
        { name: "덤벨 인클라인 프레스", target: "3세트 x 12~15회" },
        { name: "머신/덤벨 플라이", target: "3세트 x 15회" },
        { name: "케이블 푸시다운", target: "3세트 x 15회" },
        { name: "덤벨 오버헤드 익스텐션", target: "3세트 x 15회" },
        { name: "스텝밀", target: "900스텝" }
      ]
    },
    2: {
      name: "등 + 이두",
      exercises: [
        { name: "랫풀다운", target: "4세트 x 10~12회" },
        { name: "바벨 벤트오버 로우", target: "3세트 x 12~15회" },
        { name: "덤벨 원암 로우", target: "3세트 x 12회 (좌우)" },
        { name: "바벨 컬", target: "3세트 x 12~15회" },
        { name: "덤벨 해머컬", target: "3세트 x 15회" },
        { name: "스텝밀", target: "900스텝" }
      ]
    },
    3: {
      name: "하체",
      exercises: [
        { name: "헥스바 데드리프트", target: "3세트 x 12~15회" },
        { name: "레그프레스", target: "4세트 x 15~20회" },
        { name: "덤벨 불가리안 스플릿 스쿼트", target: "3세트 x 12회 (좌우)" },
        { name: "케틀벨 고블릿 스쿼트", target: "3세트 x 15회" },
        { name: "레그 익스텐션", target: "3세트 x 20회" },
        { name: "카프레이즈", target: "4세트 x 20회" }
      ]
    },
    4: {
      name: "어깨 + 이두",
      exercises: [
        { name: "덤벨 숄더 프레스", target: "3세트 x 12~15회" },
        { name: "사이드 레터럴 레이즈", target: "4세트 x 15~20회" },
        { name: "페이스풀", target: "3세트 x 20회" },
        { name: "바벨 컬", target: "3세트 x 15회" },
        { name: "덤벨 해머컬", target: "3세트 x 15~20회" },
        { name: "스텝밀", target: "900스텝" }
      ]
    }
  }
};

// 여성용: 하체+힙(둔근) 비중을 늘리고, 힙 쓰러스트/케이블 킥백을 하체 데이에 추가
// ===== 여성 미용 특화 3분할 =====
// Day 1: 하체+힙 (스쿼트계) / Day 2: 등+직각어깨+팔 / Day 3: 힙+코어+유산소
// 목표: 잘록한 허리, 힙업, 승모 없는 직각 어깨, 자세교정
// 가슴 계열(벤치/체스트프레스 등) 완전 제거
const ROUTINES_FEMALE = {
  balance: {
    1: {
      name: "하체 + 힙 (스쿼트계)",
      exercises: [
        { name: "케틀벨 고블릿 스쿼트", target: "3세트 x 15회" },
        { name: "레그프레스", target: "3세트 x 15회" },
        { name: "힙 쓰러스트", target: "3세트 x 12회" },
        { name: "덤벨 워킹 런지", target: "3세트 x 12회 (좌우)" },
        { name: "레그 익스텐션", target: "3세트 x 15회" },
        { name: "스텝밀", target: "400스텝" }
      ]
    },
    2: {
      name: "등 + 직각어깨 + 팔",
      exercises: [
        { name: "랫풀다운", target: "3세트 x 12~15회" },
        { name: "케이블 시티드 로우", target: "3세트 x 12회" },
        { name: "사이드 레터럴 레이즈", target: "3세트 x 15회" },
        { name: "페이스풀", target: "3세트 x 15회" },
        { name: "리어 델트 플라이", target: "3세트 x 15회" },
        { name: "덤벨 컬", target: "3세트 x 12~15회" },
        { name: "스텝밀", target: "400스텝" }
      ]
    },
    3: {
      name: "힙 + 코어 + 유산소",
      exercises: [
        { name: "힙 쓰러스트", target: "4세트 x 12회" },
        { name: "덤벨 루마니안 데드리프트", target: "3세트 x 12회" },
        { name: "케이블 킥백", target: "3세트 x 15회 (좌우)" },
        { name: "케이블 힙 어브덕션", target: "3세트 x 20회 (좌우)" },
        { name: "카프레이즈", target: "3세트 x 15회" },
        { name: "러시안 트위스트", target: "3세트 x 20회" },
        { name: "플랭크", target: "3세트 x 45초" },
        { name: "데드버그", target: "3세트 x 10회 (좌우)" },
        { name: "스텝밀", target: "600스텝" }
      ]
    }
  },
  bulk: {
    1: {
      name: "하체 + 힙 (스쿼트계)",
      exercises: [
        { name: "케틀벨 고블릿 스쿼트", target: "4세트 x 10회" },
        { name: "레그프레스", target: "4세트 x 12회" },
        { name: "힙 쓰러스트", target: "4세트 x 10회" },
        { name: "덤벨 워킹 런지", target: "3세트 x 10회 (좌우)" },
        { name: "레그 익스텐션", target: "3세트 x 12회" },
        { name: "스텝밀", target: "300스텝" }
      ]
    },
    2: {
      name: "등 + 직각어깨 + 팔",
      exercises: [
        { name: "랫풀다운", target: "4세트 x 8~10회" },
        { name: "케이블 시티드 로우", target: "3세트 x 10~12회" },
        { name: "사이드 레터럴 레이즈", target: "4세트 x 12회" },
        { name: "페이스풀", target: "3세트 x 12~15회" },
        { name: "리어 델트 플라이", target: "3세트 x 12회" },
        { name: "덤벨 컬", target: "3세트 x 10~12회" },
        { name: "스텝밀", target: "300스텝" }
      ]
    },
    3: {
      name: "힙 + 코어 + 유산소",
      exercises: [
        { name: "힙 쓰러스트", target: "5세트 x 8회" },
        { name: "덤벨 루마니안 데드리프트", target: "4세트 x 10회" },
        { name: "케이블 킥백", target: "3세트 x 12회 (좌우)" },
        { name: "케이블 힙 어브덕션", target: "3세트 x 15회 (좌우)" },
        { name: "카프레이즈", target: "3세트 x 12회" },
        { name: "플랭크", target: "3세트 x 60초" },
        { name: "데드버그", target: "3세트 x 10회 (좌우)" },
        { name: "스텝밀", target: "400스텝" }
      ]
    }
  },
  cut: {
    1: {
      name: "하체 + 힙 (스쿼트계)",
      exercises: [
        { name: "케틀벨 고블릿 스쿼트", target: "3세트 x 20회" },
        { name: "레그프레스", target: "3세트 x 20회" },
        { name: "힙 쓰러스트", target: "3세트 x 15회" },
        { name: "덤벨 워킹 런지", target: "3세트 x 15회 (좌우)" },
        { name: "레그 익스텐션", target: "3세트 x 20회" },
        { name: "스텝밀", target: "900스텝" }
      ]
    },
    2: {
      name: "등 + 직각어깨 + 팔",
      exercises: [
        { name: "랫풀다운", target: "3세트 x 15회" },
        { name: "케이블 시티드 로우", target: "3세트 x 15회" },
        { name: "사이드 레터럴 레이즈", target: "4세트 x 20회" },
        { name: "페이스풀", target: "3세트 x 20회" },
        { name: "리어 델트 플라이", target: "3세트 x 20회" },
        { name: "덤벨 컬", target: "3세트 x 15회" },
        { name: "스텝밀", target: "900스텝" }
      ]
    },
    3: {
      name: "힙 + 코어 + 유산소",
      exercises: [
        { name: "힙 쓰러스트", target: "3세트 x 15회" },
        { name: "덤벨 루마니안 데드리프트", target: "3세트 x 15회" },
        { name: "케이블 킥백", target: "3세트 x 20회 (좌우)" },
        { name: "케이블 힙 어브덕션", target: "3세트 x 25회 (좌우)" },
        { name: "러시안 트위스트", target: "3세트 x 25회" },
        { name: "마운틴 클라이머", target: "3세트 x 30초" },
        { name: "플랭크", target: "3세트 x 45초" },
        { name: "데드버그", target: "3세트 x 15회 (좌우)" },
        { name: "스텝밀", target: "1000스텝" }
      ]
    }
  }
};

const ROUTINE_SETS = { male: ROUTINES_MALE, female: ROUTINES_FEMALE };

const STORAGE_KEY = "monster-project-logs";
const BASEWEIGHT_KEY = "monster-project-baseweights";

// ===== 날짜 키 생성 (로컬 시간 기준 — toISOString()은 UTC라 자정~오전9시 기록이 전날로 밀리는 버그가 있어 이걸 사용) =====
function getLocalDateKey(date) {
  const d = date || new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function getLocalYearMonth(date) {
  return getLocalDateKey(date).slice(0, 7);
}

// ===== 시작 기준 무게 (183cm/80kg 복귀 중급자 기준, 첫 실행시 1회만 채워짐) =====
const DEFAULT_BASE_WEIGHTS_MALE = {
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
  "덤벨 컬 21s": 8
};

// 여성 미용 3분할 기준 (60kg 체중 기준)
// 가슴 계열 완전 제거. 하체·힙·자세교정·직각어깨 위주 종목만 포함.
const DEFAULT_BASE_WEIGHTS_FEMALE = {
  // Day 1 — 하체 + 힙 (스쿼트계)
  "케틀벨 고블릿 스쿼트": 10,
  "레그프레스": 45,
  "힙 쓰러스트": 30,
  "덤벨 워킹 런지": 6,
  "레그 익스텐션": 14,
  // Day 2 — 등 + 직각어깨 + 팔
  "랫풀다운": 25,
  "케이블 시티드 로우": 15,
  "사이드 레터럴 레이즈": 3,
  "페이스풀": 8,
  "리어 델트 플라이": 4,
  "덤벨 컬": 5,
  // Day 3 — 힙 + 코어 + 유산소
  "덤벨 루마니안 데드리프트": 12,
  "케이블 킥백": 4,
  "케이블 힙 어브덕션": 15,
  "카프레이즈": 30,
  "러시안 트위스트": 5
  // 플랭크·데드버그·마운틴 클라이머·스텝밀은 맨몸/유산소라 기준무게 없음
};

const PROFILE_KEY = "monster-project-profile";

// ===== BMI 7단계 x 운동량 3단계 칭호 시스템 =====
const BMI_TIERS = [
  { max: 18,
    base: { title: "스켈레톤", emoji: "💀" },
    mid: { title: "좀비파이터", emoji: "🧟" },
    high: { title: "본마스터", emoji: "☠️" } },
  { max: 19.5,
    base: { title: "육수용 멸치", emoji: "🐟" },
    mid: { title: "건멸치", emoji: "🍤" },
    high: { title: "멸치들의 왕", emoji: "🐋" } },
  { max: 21,
    base: { title: "홀쭉이", emoji: "🥢" },
    mid: { title: "젓가락전사", emoji: "🤺" },
    high: { title: "황금젓가락킹", emoji: "👑" } },
  { max: 23,
    base: { title: "정상인", emoji: "⚖️" },
    mid: { title: "밸런스마스터", emoji: "🧘" },
    high: { title: "밸런스갓", emoji: "🔱" } },
  { max: 25,
    base: { title: "통통이", emoji: "🍚" },
    mid: { title: "묵직맨", emoji: "💪" },
    high: { title: "든든국밥킹", emoji: "🍲" } },
  { max: 27,
    base: { title: "돼지", emoji: "🐖" },
    mid: { title: "돼지전사", emoji: "🐗" },
    high: { title: "아이언보어", emoji: "🦾" } },
  { max: Infinity,
    base: { title: "뚱돼지", emoji: "🐷" },
    mid: { title: "운동한돼지", emoji: "🏋️" },
    high: { title: "운동많이한 돼지", emoji: "🏆" } }
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
  const ym = getLocalYearMonth();
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
  { category: "하체", name: "힙 쓰러스트" },
  { category: "하체", name: "케이블 킥백" },
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
    name: "어깨 + 이두 (맨몸)",
    exercises: [
      { name: "파이크 푸시업", target: "4세트 x 10~12회" },
      { name: "플랭크 숄더탭", target: "3세트 x 20회" },
      { name: "친업 (이두 집중)", target: "3세트 x 최대" },
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

function getGender() {
  const p = getProfile();
  return (p && p.gender) || "male";
}

function getGoalMode() {
  const p = getProfile();
  return (p && p.goalMode) || "balance";
}

// ===== 모드에 따라 루틴/마스터리스트 선택 =====
function getRoutines() {
  if (currentMode === "bodyweight") return BODYWEIGHT_ROUTINES;
  return ROUTINE_SETS[getGender()][getGoalMode()];
}

function getMasterList() {
  return currentMode === "bodyweight" ? BODYWEIGHT_MASTER_EXERCISES : MASTER_EXERCISES;
}

// 성별별 루틴 Day 개수에 맞춰 Day 탭을 동적으로 숨김/표시
// 여성 3분할 → Day 4 탭 숨김. 남성 4분할 → 전부 표시.
function updateDayTabsForGender() {
  const routines = ROUTINE_SETS[getGender()][getGoalMode()];
  const dayCount = Object.keys(routines).length;
  document.querySelectorAll(".day-tab").forEach(btn => {
    const dayNum = parseInt(btn.dataset.day);
    btn.style.display = dayNum > dayCount ? "none" : "";
  });
  // 현재 선택된 Day가 유효 범위를 벗어나면 Day 1로 리셋
  if (currentDay > dayCount) {
    currentDay = 1;
  }
}

let currentDay = 1;
let currentMode = "gym";
let currentType = "gym";
let currentExercises = [];
let editingDateKey = null;
let openExerciseIndex = null;
let heroActive = false;
let workoutStartTime = null;
let heroIndex = 0;
let timerIntervalId = null;
let restEndTime = null;
let restIntervalId = null;

// ===== 진행 중 세션 영속화 (앱 리로드에도 세션 유지) =====
const SESSION_KEY = "monster-project-active-session";

function persistActiveSession() {
  if (!heroActive) return;
  const snapshot = {
    startTime: workoutStartTime,
    heroIndex: heroIndex,
    day: currentDay,
    mode: currentMode,
    exercises: currentExercises
  };
  localStorage.setItem(SESSION_KEY, JSON.stringify(snapshot));
}

function clearActiveSession() {
  localStorage.removeItem(SESSION_KEY);
}

function restoreActiveSession() {
  let saved = null;
  try {
    saved = JSON.parse(localStorage.getItem(SESSION_KEY));
  } catch (e) {
    saved = null;
  }
  if (!saved || !saved.startTime || !Array.isArray(saved.exercises)) return false;

  currentDay = saved.day || 1;
  currentMode = saved.mode || "gym";
  currentType = currentMode;
  currentExercises = saved.exercises;
  heroIndex = saved.heroIndex || 0;
  workoutStartTime = saved.startTime;
  heroActive = true;

  document.querySelectorAll(".type-tab").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.type === currentType);
  });
  document.querySelectorAll(".day-tab").forEach(btn => {
    btn.classList.toggle("active", parseInt(btn.dataset.day) === currentDay);
  });
  document.getElementById("day-routine-caption").textContent = `Day ${currentDay} · ${getRoutines()[currentDay].name}`;
  document.getElementById("rest-only-group").classList.remove("show");
  document.getElementById("workout-detail-group").classList.add("show");

  document.getElementById("workout-setup-view").style.display = "none";
  document.querySelector(".type-select").style.display = "none";
  document.getElementById("hero-session").classList.add("active");

  updateHeroTimerDisplay();
  timerIntervalId = setInterval(updateHeroTimerDisplay, 1000);
  renderHeroSession();
  switchScreen("screen-workout");
  showToast("진행 중이던 운동 세션을 복원했어요 💪");
  return true;
}

// ===== 목표 텍스트에서 세트 수 / 추천 반복수 파싱 =====
function parseTargetSetCount(target) {
  const match = target.match(/^(\d+)세트/);
  return match ? parseInt(match[1]) : null;
}

function parseSuggestedReps(target) {
  const match = target.match(/(\d+)(?:~\d+)?\s*회/);
  return match ? match[1] : "";
}

// ===== 무게 증감 단위 (0.5kg 고정, 꾹 누르면 연속 증가) =====
function getWeightStep(weight) {
  return 0.5;
}

// ===== 버튼 꾹 누르면 연속 반복 실행 + 오래 누를수록 가속 =====
// 0~1.5초: 0.5kg씩, 0.1초 간격 / 1.5~3초: 1kg씩, 0.08초 간격 / 3초~: 2.5kg씩, 0.06초 간격
let activeHoldStop = null;

function getHoldStage(elapsedMs) {
  if (elapsedMs < 1500) return { delay: 100, multiplier: 1 };
  if (elapsedMs < 3000) return { delay: 80, multiplier: 2 };
  return { delay: 60, multiplier: 5 };
}

function bindHoldRepeat(el, fn) {
  const start = (e) => {
    e.preventDefault();
    if (activeHoldStop) activeHoldStop();

    const startTime = Date.now();
    let timeoutId = null;
    let stopped = false;

    fn(1);

    const scheduleNext = () => {
      const stage = getHoldStage(Date.now() - startTime);
      timeoutId = setTimeout(() => {
        if (stopped) return;
        fn(stage.multiplier);
        scheduleNext();
      }, stage.delay);
    };

    const initialDelayId = setTimeout(scheduleNext, 400);
    activeHoldStop = () => {
      stopped = true;
      clearTimeout(initialDelayId);
      clearTimeout(timeoutId);
      activeHoldStop = null;
    };
  };
  el.addEventListener("pointerdown", start);
}

document.addEventListener("pointerup", () => { if (activeHoldStop) activeHoldStop(); });
document.addEventListener("pointercancel", () => { if (activeHoldStop) activeHoldStop(); });

// ===== 전역 버튼 눌림 시각효과 (iOS Safari는 :active가 안정적이지 않아 JS로 처리) =====
document.addEventListener("pointerdown", (e) => {
  const btn = e.target.closest("button");
  if (btn) btn.classList.add("pressed");
});

function clearPressedButtons() {
  document.querySelectorAll("button.pressed").forEach(b => b.classList.remove("pressed"));
}

document.addEventListener("pointerup", clearPressedButtons);
document.addEventListener("pointercancel", clearPressedButtons);

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

function getDefaultBaseWeightsForGender() {
  return getGender() === "female" ? DEFAULT_BASE_WEIGHTS_FEMALE : DEFAULT_BASE_WEIGHTS_MALE;
}

function seedDefaultBaseWeights() {
  const existing = localStorage.getItem(BASEWEIGHT_KEY);
  if (existing) return; // 이미 값이 있으면(직접 수정했든 아니든) 덮어쓰지 않음
  saveBaseWeights({ ...getDefaultBaseWeightsForGender() });
}

// ===== 체중 기반 기준무게 자동 계산 (남성표는 80kg, 여성표는 60kg 기준으로 잡은 값) =====
const AUTO_WEIGHT_REFERENCE_BODYWEIGHT_MALE = 80;
const AUTO_WEIGHT_REFERENCE_BODYWEIGHT_FEMALE = 60;

function computeAutoBaseWeights(bodyweight) {
  const isFemale = getGender() === "female";
  const table = isFemale ? DEFAULT_BASE_WEIGHTS_FEMALE : DEFAULT_BASE_WEIGHTS_MALE;
  const reference = isFemale ? AUTO_WEIGHT_REFERENCE_BODYWEIGHT_FEMALE : AUTO_WEIGHT_REFERENCE_BODYWEIGHT_MALE;
  const scale = bodyweight / reference;
  const result = {};
  Object.entries(table).forEach(([name, val]) => {
    const scaled = Math.max(0, Math.round((val * scale) / 2.5) * 2.5);
    result[name] = scaled;
  });
  return result;
}

function promptSetBaseWeight(name, idx) {
  const current = getBaseWeight(name);
  const input = prompt(`${name}의 기준 무게를 kg로 입력해주세요:`, current !== null ? current : "");
  if (input === null || input.trim() === "") return;
  const num = parseFloat(input);
  if (isNaN(num)) return;

  const weights = getBaseWeights();
  weights[name] = num;
  saveBaseWeights(weights);

  currentExercises[idx].weight = num;
  renderExercises();
}

const THEME_KEY = "monster-project-theme";

function getTheme() {
  return localStorage.getItem(THEME_KEY) || "dark";
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem(THEME_KEY, theme);
  document.getElementById("theme-toggle-btn").textContent = theme === "dark" ? "🌙" : "☀️";
}

function toggleTheme() {
  applyTheme(getTheme() === "dark" ? "light" : "dark");
}

// ===== 이미 저장된 데이터 중 잘못된 durationMinutes 값 정리 (1회성 마이그레이션) =====
function migrateCorruptedDurations() {
  const logs = getLogs();
  let changed = false;

  Object.keys(logs).forEach(dateKey => {
    const raw = logs[dateKey].durationMinutes;
    if (raw === undefined) return;
    const clean = toValidMinutes(raw);
    if (clean !== raw) {
      logs[dateKey].durationMinutes = clean;
      changed = true;
    }
  });

  if (changed) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(logs));
  }
}

// ===== 초기화 =====
function init() {
  seedDefaultBaseWeights();
  migrateCorruptedDurations();
  applyTheme(getTheme());

  const today = new Date();
  const dateStr = today.toLocaleDateString("ko-KR", { year: "numeric", month: "long", day: "numeric", weekday: "long" });
  document.getElementById("today-date").textContent = dateStr;

  document.querySelectorAll(".day-tab").forEach(btn => {
    btn.addEventListener("click", () => selectDay(parseInt(btn.dataset.day)));
  });

  document.querySelectorAll(".type-tab").forEach(btn => {
    btn.addEventListener("click", () => selectType(btn.dataset.type));
  });

  document.getElementById("add-exercise-btn").addEventListener("click", openExerciseModal);
  document.getElementById("save-log-btn").addEventListener("click", () => saveLog());
  document.getElementById("start-workout-btn").addEventListener("click", startWorkoutSession);
  document.getElementById("finish-workout-btn").addEventListener("click", finishWorkoutSession);
  document.getElementById("rest-day-btn").addEventListener("click", saveRestDay);
  document.getElementById("close-modal-btn").addEventListener("click", closeExerciseModal);
  document.getElementById("cancel-edit-btn").addEventListener("click", cancelEditing);
  document.getElementById("exercise-search").addEventListener("input", (e) => {
    renderExerciseModalList(e.target.value);
  });

  document.getElementById("profile-btn").addEventListener("click", openProfileModal);
  document.getElementById("close-profile-btn").addEventListener("click", closeProfileModal);
  document.getElementById("save-profile-btn").addEventListener("click", handleSaveProfile);

  document.querySelectorAll("#gender-select .segmented-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("#gender-select .segmented-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
    });
  });

  document.querySelectorAll("#goalmode-select .segmented-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("#goalmode-select .segmented-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
    });
  });
  ["profile-name", "profile-height", "profile-weight"].forEach(id => {
    document.getElementById(id).addEventListener("input", renderProfileResultFromInputs);
  });

  document.getElementById("tip-btn").addEventListener("click", openTipModal);
  document.getElementById("close-tip-btn").addEventListener("click", closeTipModal);
  document.getElementById("theme-toggle-btn").addEventListener("click", toggleTheme);

  document.getElementById("export-data-btn").addEventListener("click", exportData);
  document.getElementById("import-data-btn").addEventListener("click", () => {
    document.getElementById("import-file-input").click();
  });
  document.getElementById("import-file-input").addEventListener("change", (e) => {
    if (e.target.files && e.target.files[0]) {
      importData(e.target.files[0]);
      e.target.value = "";
    }
  });

  document.querySelectorAll(".nav-tab").forEach(btn => {
    btn.addEventListener("click", () => switchScreen(btn.dataset.screen));
  });

  document.getElementById("history-profile-summary").addEventListener("click", openProfileModal);

  selectType("gym");
  initCalendarNav();
  switchScreen("screen-history");
  renderHistory();

  restoreActiveSession();
}

// ===== 하단 탭 화면 전환 =====
function switchScreen(screenId) {
  document.querySelectorAll(".screen").forEach(el => {
    el.classList.toggle("active", el.id === screenId);
  });
  document.querySelectorAll(".nav-tab").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.screen === screenId);
  });
}

// ===== 타입 선택 (기구 / 맨몸 / 휴식) =====
function selectType(type) {
  if (heroActive) return;

  currentType = type;
  document.querySelectorAll(".type-tab").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.type === type);
  });

  const restGroup = document.getElementById("rest-only-group");
  const detailGroup = document.getElementById("workout-detail-group");

  if (type === "rest") {
    restGroup.classList.add("show");
    detailGroup.classList.remove("show");
  } else {
    restGroup.classList.remove("show");
    detailGroup.classList.add("show");
    currentMode = type;
    updateDayTabsForGender();
    selectDay(currentDay);
  }
}

// ===== Day 선택 =====
function selectDay(day) {
  const routines = getRoutines();
  // 존재하지 않는 Day 선택 시 Day 1로 fallback (여성 3분할에서 Day 4 방어)
  if (!routines[day]) {
    day = 1;
  }
  currentDay = day;
  document.querySelectorAll(".day-tab").forEach(btn => {
    btn.classList.toggle("active", parseInt(btn.dataset.day) === day);
  });

  const captionEl = document.getElementById("day-routine-caption");
  if (captionEl) {
    captionEl.textContent = `Day ${day} · ${routines[day].name}`;
  }

  const base = routines[day].exercises.map(ex => {
    const baseWeight = getBaseWeight(ex.name);
    return {
      name: ex.name,
      baseTarget: ex.target,
      target: ex.target,
      checked: false,
      weight: baseWeight !== null ? baseWeight : "",
      completedSets: [],
      currentReps: parseSuggestedReps(ex.target),
      custom: false
    };
  });

  currentExercises = base;
  openExerciseIndex = null;
  renderExercises();
}

// ===== 운동 목록 렌더링 (아코디언 + 실시간 세트 로깅) =====
function renderExercises() {
  const view = document.getElementById("routine-view");
  view.innerHTML = "";

  const isBodyweight = currentMode === "bodyweight";

  currentExercises.forEach((ex, idx) => {
    const isOpen = openExerciseIndex === idx;
    const completedSets = ex.completedSets || [];
    const targetSetCount = parseTargetSetCount(ex.target);

    const card = document.createElement("div");
    card.className = "exercise-card" + (isOpen ? " open" : "");

    // ---- 압축 행 (체크박스 + 이름 + 진행 배지, 탭하면 펼침) ----
    const row = document.createElement("div");
    row.className = "exercise-row";

    const checkBtn = document.createElement("button");
    checkBtn.className = "exercise-check" + (ex.checked ? " checked" : "");
    checkBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      currentExercises[idx].checked = !currentExercises[idx].checked;
      renderExercises();
    });

    const nameSpan = document.createElement("div");
    nameSpan.className = "exercise-name";
    nameSpan.textContent = `${idx + 1}. ${ex.name}`;

    row.appendChild(checkBtn);
    row.appendChild(nameSpan);

    if (completedSets.length > 0) {
      const badge = document.createElement("span");
      badge.className = "set-progress-badge";
      badge.textContent = targetSetCount ? `${completedSets.length}/${targetSetCount}` : `${completedSets.length}세트`;
      row.appendChild(badge);
    }

    const chevron = document.createElement("span");
    chevron.className = "exercise-chevron";
    chevron.textContent = "▸";
    row.appendChild(chevron);

    row.addEventListener("click", () => {
      openExerciseIndex = isOpen ? null : idx;
      renderExercises();
    });

    card.appendChild(row);

    // ---- 펼쳐진 상세 (목표 + 기준무게 설정만 — 세트 기록은 "운동 시작" 후 진행) ----
    if (isOpen) {
      const detail = document.createElement("div");
      detail.className = "exercise-detail";

      const targetLine = document.createElement("div");
      targetLine.className = "exercise-target";
      targetLine.textContent = ex.target;
      detail.appendChild(targetLine);

      if (!isBodyweight) {
        const weightControl = document.createElement("div");
        weightControl.className = "weight-control";

        const baseWeight = getBaseWeight(ex.name);
        const baseLine = document.createElement("div");
        baseLine.className = "weight-base-line";
        baseLine.innerHTML = `<span>${baseWeight !== null ? `기준무게 ${baseWeight}kg` : "기준무게 미설정"}</span>`;
        const editBtn = document.createElement("button");
        editBtn.className = "weight-edit-btn";
        editBtn.textContent = "설정";
        editBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          promptSetBaseWeight(ex.name, idx);
        });
        baseLine.appendChild(editBtn);
        weightControl.appendChild(baseLine);

        const adjustRow = document.createElement("div");
        adjustRow.className = "weight-adjust-row";

        const step = getWeightStep(ex.weight);

        const weightDisplay = document.createElement("div");
        weightDisplay.className = "weight-display";

        const renderWeightDisplay = () => {
          const w = currentExercises[idx].weight;
          weightDisplay.innerHTML = w !== ""
            ? `<span class="num">${w}</span><span class="unit">kg</span>`
            : `<span class="placeholder-text">무게 미입력</span>`;
        };
        renderWeightDisplay();

        const minusBtn = document.createElement("button");
        minusBtn.className = "weight-adjust-btn";
        minusBtn.textContent = `－${step}`;
        minusBtn.addEventListener("click", (e) => e.stopPropagation());
        bindHoldRepeat(minusBtn, (multiplier) => {
          const cur = parseFloat(currentExercises[idx].weight) || 0;
          const s = getWeightStep(cur) * multiplier;
          currentExercises[idx].weight = Math.round((Math.max(0, cur - s)) * 10) / 10;
          renderWeightDisplay();
        });

        const plusBtn = document.createElement("button");
        plusBtn.className = "weight-adjust-btn";
        plusBtn.textContent = `+${step}`;
        plusBtn.addEventListener("click", (e) => e.stopPropagation());
        bindHoldRepeat(plusBtn, (multiplier) => {
          const cur = parseFloat(currentExercises[idx].weight) || 0;
          const s = getWeightStep(cur) * multiplier;
          currentExercises[idx].weight = Math.round((cur + s) * 10) / 10;
          renderWeightDisplay();
        });

        adjustRow.appendChild(minusBtn);
        adjustRow.appendChild(weightDisplay);
        adjustRow.appendChild(plusBtn);
        weightControl.appendChild(adjustRow);

        detail.appendChild(weightControl);
      }

      const removeBtn = document.createElement("button");
      removeBtn.className = "remove-exercise";
      removeBtn.textContent = ex.custom ? "운동 삭제" : "오늘 목록에서 제외";
      removeBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        currentExercises.splice(idx, 1);
        openExerciseIndex = null;
        renderExercises();
      });
      detail.appendChild(removeBtn);

      card.appendChild(detail);
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
    list.innerHTML = `<div class="modal-empty">검색 결과가 없어요. 아래에서 직접 추가해보세요.</div>`;
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
    completedSets: [],
    currentReps: "",
    custom: true
  });

  closeExerciseModal();
  openExerciseIndex = currentExercises.length - 1;
  renderExercises();
}

// ===== 운동 시작 (히어로 세션) =====
function startWorkoutSession() {
  if (currentExercises.length === 0) {
    alert("운동 목록이 비어있어요. 운동을 하나 이상 추가해주세요.");
    return;
  }

  heroActive = true;
  workoutStartTime = Date.now();
  const firstUnchecked = currentExercises.findIndex(ex => !ex.checked);
  heroIndex = firstUnchecked === -1 ? 0 : firstUnchecked;

  document.getElementById("workout-setup-view").style.display = "none";
  document.querySelector(".type-select").style.display = "none";
  document.getElementById("hero-session").classList.add("active");

  updateHeroTimerDisplay();
  timerIntervalId = setInterval(updateHeroTimerDisplay, 1000);

  persistActiveSession();
  renderHeroSession();
}

function finishWorkoutSession() {
  if (!confirm("운동을 종료하고 저장할까요?")) return;

  const durationMinutes = Math.max(1, Math.round((Date.now() - workoutStartTime) / 60000));

  clearInterval(timerIntervalId);
  timerIntervalId = null;
  stopRestTimer();
  heroActive = false;
  clearActiveSession();

  document.getElementById("hero-session").classList.remove("active");
  document.getElementById("workout-setup-view").style.display = "block";
  document.querySelector(".type-select").style.display = "grid";

  saveLog(durationMinutes);
  selectDay(currentDay);
  switchScreen("screen-history");
}

function formatElapsed(ms) {
  const totalSec = Math.floor(ms / 1000);
  const h = Math.floor(totalSec / 3600);
  const m = Math.floor((totalSec % 3600) / 60);
  const s = totalSec % 60;
  const pad = (n) => String(n).padStart(2, "0");
  return h > 0 ? `${h}:${pad(m)}:${pad(s)}` : `${pad(m)}:${pad(s)}`;
}

function updateHeroTimerDisplay() {
  const el = document.getElementById("hero-timer");
  if (el && workoutStartTime) {
    el.textContent = formatElapsed(Date.now() - workoutStartTime);
  }
}

// ===== 히어로 세션 렌더링 (칩 스트립 + 큰 카드) =====
// ===== 히어로 카드 좌우 스와이프로 운동 이동 =====
let heroTouchStartX = null;

function setupHeroSwipe() {
  const card = document.getElementById("hero-card");
  if (!card || card.dataset.swipeBound) return;
  card.dataset.swipeBound = "true";

  card.addEventListener("touchstart", (e) => {
    heroTouchStartX = e.touches[0].clientX;
  }, { passive: true });

  card.addEventListener("touchend", (e) => {
    if (heroTouchStartX === null) return;
    const deltaX = e.changedTouches[0].clientX - heroTouchStartX;
    heroTouchStartX = null;

    if (Math.abs(deltaX) < 50) return;

    if (deltaX < 0 && heroIndex < currentExercises.length - 1) {
      heroIndex++;
      persistActiveSession();
      renderHeroSession();
    } else if (deltaX > 0 && heroIndex > 0) {
      heroIndex--;
      persistActiveSession();
      renderHeroSession();
    }
  }, { passive: true });
}

function renderHeroSession() {
  setupHeroSwipe();
  const chipStrip = document.getElementById("hero-chip-strip");
  chipStrip.innerHTML = "";

  currentExercises.forEach((ex, idx) => {
    const chip = document.createElement("div");
    const isDone = (ex.completedSets || []).length > 0 || ex.checked;
    chip.className = "chip" + (idx === heroIndex ? " current" : (isDone ? " done" : ""));
    chip.textContent = `${idx + 1}. ${ex.name}`;
    chip.addEventListener("click", () => {
      heroIndex = idx;
      persistActiveSession();
      renderHeroSession();
    });
    chipStrip.appendChild(chip);

    if (idx === heroIndex) {
      requestAnimationFrame(() => {
        chip.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      });
    }
  });

  const ex = currentExercises[heroIndex];
  if (!ex) return;

  const card = document.getElementById("hero-card");
  card.innerHTML = "";

  const isBodyweight = currentMode === "bodyweight";
  const completedSets = ex.completedSets || [];
  const targetSetCount = parseTargetSetCount(ex.target);
  const denom = targetSetCount || Math.max(completedSets.length, 1);
  const fraction = Math.min(1, completedSets.length / denom);

  const countLabel = document.createElement("div");
  countLabel.className = "hero-ex-count";
  countLabel.textContent = `EXERCISE ${heroIndex + 1} / ${currentExercises.length}`;
  card.appendChild(countLabel);

  const nameEl = document.createElement("div");
  nameEl.className = "hero-ex-name";
  nameEl.textContent = ex.name;
  card.appendChild(nameEl);

  const targetEl = document.createElement("div");
  targetEl.className = "hero-ex-target";
  targetEl.textContent = ex.target;
  card.appendChild(targetEl);

  const lastRecord = getLastRecordForExercise(ex.name);
  if (lastRecord) {
    const lastEl = document.createElement("div");
    lastEl.className = "hero-last-record";
    lastEl.textContent = `지난 기록 · ${lastRecord.date.slice(5).replace("-", "/")} · ${lastRecord.text}`;
    card.appendChild(lastEl);
  }

  const ringWrap = document.createElement("div");
  ringWrap.className = "hero-ring-wrap";
  const ring = document.createElement("div");
  ring.className = "hero-ring";
  const deg = Math.round(fraction * 360);
  ring.style.background = `conic-gradient(var(--accent) 0deg ${deg}deg, var(--surface-2) ${deg}deg 360deg)`;
  const ringInner = document.createElement("div");
  ringInner.className = "hero-ring-inner";
  if (isBodyweight) {
    ringInner.innerHTML = `
      <div><span class="hero-weight-num">${completedSets.length}</span><span class="hero-weight-unit"> / ${targetSetCount || "?"}</span></div>
      <div class="hero-set-fraction">세트 완료</div>
    `;
  } else {
    ringInner.innerHTML = `
      <div><span class="hero-weight-num">${ex.weight !== "" ? ex.weight : "-"}</span><span class="hero-weight-unit"> kg</span></div>
      <div class="hero-set-fraction">${completedSets.length} / ${targetSetCount || "?"} 세트</div>
    `;
  }
  ring.appendChild(ringInner);
  ringWrap.appendChild(ring);
  card.appendChild(ringWrap);

  const heroWeightNumEl = ringInner.querySelector(".hero-weight-num");

  const stepRow = document.createElement("div");
  stepRow.className = "hero-step-row";

  if (!isBodyweight) {
    const step = getWeightStep(ex.weight);

    const minusBtn = document.createElement("button");
    minusBtn.className = "hero-step-btn";
    minusBtn.textContent = `－${step}`;
    bindHoldRepeat(minusBtn, (multiplier) => {
      const cur = parseFloat(currentExercises[heroIndex].weight) || 0;
      const s = getWeightStep(cur) * multiplier;
      currentExercises[heroIndex].weight = Math.round((Math.max(0, cur - s)) * 10) / 10;
      if (heroWeightNumEl) heroWeightNumEl.textContent = currentExercises[heroIndex].weight;
      persistActiveSession();
    });
    stepRow.appendChild(minusBtn);
  }

  const repsInput = document.createElement("input");
  repsInput.type = "text";
  repsInput.className = "hero-reps-input";
  repsInput.placeholder = "반복수";
  repsInput.value = ex.currentReps || "";
  repsInput.addEventListener("input", (e) => {
    currentExercises[heroIndex].currentReps = e.target.value;
    persistActiveSession();
  });
  stepRow.appendChild(repsInput);

  if (!isBodyweight) {
    const step = getWeightStep(ex.weight);
    const plusBtn = document.createElement("button");
    plusBtn.className = "hero-step-btn";
    plusBtn.textContent = `+${step}`;
    bindHoldRepeat(plusBtn, (multiplier) => {
      const cur = parseFloat(currentExercises[heroIndex].weight) || 0;
      const s = getWeightStep(cur) * multiplier;
      currentExercises[heroIndex].weight = Math.round((cur + s) * 10) / 10;
      if (heroWeightNumEl) heroWeightNumEl.textContent = currentExercises[heroIndex].weight;
      persistActiveSession();
    });
    stepRow.appendChild(plusBtn);
  }

  card.appendChild(stepRow);

  const completeBtn = document.createElement("button");
  completeBtn.className = "hero-complete-btn";
  completeBtn.textContent = `세트 완료 (${completedSets.length + 1})`;
  completeBtn.addEventListener("click", () => {
    const target = currentExercises[heroIndex];
    const weightVal = target.weight !== "" ? target.weight : 0;
    const repsVal = target.currentReps || "";
    if (!target.completedSets) target.completedSets = [];
    target.completedSets.push({ weight: weightVal, reps: repsVal });
    target.checked = true;
    persistActiveSession();
    startRestTimer();
    renderHeroSession();
  });
  card.appendChild(completeBtn);

  const restPill = document.createElement("div");
  restPill.id = "rest-timer-pill";
  restPill.className = "rest-timer-pill";
  restPill.style.display = restEndTime ? "flex" : "none";
  restPill.addEventListener("click", () => {
    stopRestTimer();
  });
  card.appendChild(restPill);
  updateRestTimerDisplay();

  if (completedSets.length > 0) {
    const logList = document.createElement("div");
    logList.className = "hero-set-log-list";
    completedSets.forEach((s, sIdx) => {
      const item = document.createElement("div");
      item.className = "set-log-item";
      item.innerHTML = `<span>${sIdx + 1}세트 · ${isBodyweight ? "" : s.weight + "kg × "}${s.reps || "-"}회</span>`;
      const removeBtn = document.createElement("button");
      removeBtn.className = "set-log-remove";
      removeBtn.textContent = "✕";
      removeBtn.addEventListener("click", () => {
        currentExercises[heroIndex].completedSets.splice(sIdx, 1);
        if (currentExercises[heroIndex].completedSets.length === 0) {
          currentExercises[heroIndex].checked = false;
        }
        persistActiveSession();
        renderHeroSession();
      });
      item.appendChild(removeBtn);
      logList.appendChild(item);
    });
    card.appendChild(logList);
  }
}

// ===== 세트 간 휴식 타이머 (기본 90초, 탭하면 건너뛰기) =====
const REST_SECONDS = 90;

function startRestTimer() {
  restEndTime = Date.now() + REST_SECONDS * 1000;
  if (restIntervalId) clearInterval(restIntervalId);
  restIntervalId = setInterval(updateRestTimerDisplay, 500);
  updateRestTimerDisplay();
}

function stopRestTimer() {
  restEndTime = null;
  if (restIntervalId) {
    clearInterval(restIntervalId);
    restIntervalId = null;
  }
  const pill = document.getElementById("rest-timer-pill");
  if (pill) pill.style.display = "none";
}

function updateRestTimerDisplay() {
  const pill = document.getElementById("rest-timer-pill");
  if (!pill) return;

  if (!restEndTime) {
    pill.style.display = "none";
    return;
  }

  const remaining = restEndTime - Date.now();
  if (remaining <= 0) {
    stopRestTimer();
    return;
  }

  const sec = Math.ceil(remaining / 1000);
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  pill.style.display = "flex";
  pill.innerHTML = `💨 휴식 ${m}:${String(s).padStart(2, "0")} <span class="hint">탭하면 건너뛰기</span>`;
}

// ===== 해당 운동의 가장 최근 기록 조회 =====
function getLastRecordForExercise(name) {
  const logs = getLogs();
  const todayKey = getLocalDateKey();
  const dates = Object.keys(logs).filter(k => k !== todayKey).sort().reverse();

  for (const dateKey of dates) {
    const entry = logs[dateKey];
    if (!entry || entry.day === "rest" || !Array.isArray(entry.exercises)) continue;
    const match = entry.exercises.find(e => e.name === name);
    if (match && Array.isArray(match.sets) && match.sets.length > 0) {
      const best = match.sets[match.sets.length - 1];
      const text = currentMode === "bodyweight"
        ? `${best.reps || "-"}회 × ${match.sets.length}세트`
        : `${best.weight}kg × ${best.reps || "-"}회`;
      return { date: dateKey, text: text };
    }
  }
  return null;
}

// ===== 운동 시간 값 안전 검증 (잘못된 값이 들어와도 숫자 또는 undefined만 반환) =====
function toValidMinutes(v) {
  const n = Number(v);
  return Number.isFinite(n) && n > 0 ? n : undefined;
}

// ===== 로그 저장 =====
function saveLog(explicitDurationMinutes) {
  const logs = getLogs();
  const dateKey = editingDateKey || getLocalDateKey();
  const existing = logs[dateKey];
  const rawDuration = explicitDurationMinutes !== undefined
    ? explicitDurationMinutes
    : (existing ? existing.durationMinutes : undefined);
  const durationMinutes = toValidMinutes(rawDuration);

  logs[dateKey] = {
    day: currentDay,
    dayName: getRoutines()[currentDay].name,
    mode: currentMode,
    durationMinutes: durationMinutes,
    exercises: currentExercises.map(ex => ({
      name: ex.name,
      checked: ex.checked || (ex.completedSets && ex.completedSets.length > 0),
      weight: ex.weight,
      sets: ex.completedSets || []
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
  currentMode = entry.mode || "gym";
  currentType = currentMode;

  document.getElementById("rest-only-group").classList.remove("show");
  document.getElementById("workout-detail-group").classList.add("show");
  document.querySelectorAll(".type-tab").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.type === currentType);
  });
  document.querySelectorAll(".day-tab").forEach(btn => {
    btn.classList.toggle("active", parseInt(btn.dataset.day) === currentDay);
  });
  document.getElementById("day-routine-caption").textContent = `Day ${currentDay} · ${getRoutines()[currentDay].name}`;

  const routines = getRoutines();

  currentExercises = entry.exercises.map(ex => {
    const routineMatch = routines[currentDay].exercises.find(r => r.name === ex.name);
    const restoredSets = Array.isArray(ex.sets) ? ex.sets : [];
    const target = routineMatch ? routineMatch.target : "직접 기록";
    const lastSet = restoredSets.length ? restoredSets[restoredSets.length - 1] : null;
    return {
      name: ex.name,
      baseTarget: routineMatch ? routineMatch.target : undefined,
      target: target,
      checked: ex.checked,
      weight: lastSet ? lastSet.weight : ex.weight,
      completedSets: restoredSets,
      currentReps: lastSet ? String(lastSet.reps) : parseSuggestedReps(target),
      custom: !routineMatch
    };
  });

  openExerciseIndex = null;
  switchScreen("screen-workout");

  updateEditingBanner();
  renderExercises();
  scrollWorkoutScreenToTop();
}

// ===== 과거 빈 날짜에 새 기록 시작 =====
function startNewEntryForDate(dateKey) {
  editingDateKey = dateKey;
  currentDay = 1;
  selectType("gym");
  updateEditingBanner();
  switchScreen("screen-workout");
  scrollWorkoutScreenToTop();
}

function scrollWorkoutScreenToTop() {
  const el = document.getElementById("screen-workout");
  if (el) el.scrollTo({ top: 0, behavior: "smooth" });
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

  saveBtn.textContent = "기록 편집";

  if (editingDateKey) {
    document.getElementById("editing-banner-text").textContent = `${editingDateKey} 기록 편집 중`;
    banner.classList.add("show");
    restBtn.textContent = `${editingDateKey}를 휴식일로 기록 💤`;
  } else {
    banner.classList.remove("show");
    restBtn.textContent = "오늘은 휴식일이야 💤";
  }
}

// ===== 기록 삭제 =====
function deleteLogEntry(dateKey) {
  if (!confirm(`${dateKey} 기록을 삭제할까요? 되돌릴 수 없어요.`)) return;

  const logs = getLogs();
  delete logs[dateKey];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(logs));

  if (editingDateKey === dateKey) {
    editingDateKey = null;
    updateEditingBanner();
  }

  if (selectedCalendarDate === dateKey) {
    selectedCalendarDate = null;
    document.getElementById("day-detail").innerHTML = "";
  }

  showToast("기록 삭제 완료");
  renderHistory();
}

// ===== 휴식일 저장 =====
function saveRestDay() {
  const logs = getLogs();
  const dateKey = editingDateKey || getLocalDateKey();

  logs[dateKey] = {
    day: "rest",
    dayName: "휴식",
    exercises: [],
    timestamp: new Date().toISOString()
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(logs));
  showToast(editingDateKey ? `${dateKey} 휴식일로 기록 완료` : "휴식일로 기록했어요 💤");

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
let selectedCalendarDate = null;

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

// ===== 표시 중인 달의 통계 (운동 횟수 / 총 시간 / 휴식일) =====
function renderMonthStats() {
  const container = document.getElementById("month-stats");
  if (!container) return;

  const logs = getLogs();
  const ym = `${calYear}-${String(calMonth + 1).padStart(2, "0")}`;
  const monthKeys = Object.keys(logs).filter(k => k.startsWith(ym));

  const workoutKeys = monthKeys.filter(k => logs[k].day !== "rest");
  const restKeys = monthKeys.filter(k => logs[k].day === "rest");
  const workoutCount = workoutKeys.length;

  container.innerHTML = `
    <div class="stat-cell"><div class="stat-num">${workoutCount}회</div><div class="stat-label">운동</div></div>
    <div class="stat-cell"><div class="stat-num">😴 ${restKeys.length}일</div><div class="stat-label">휴식</div></div>
  `;
}

// ===== 월별 캘린더 렌더링 =====
function renderHistory() {
  renderProfileSummaryCard();
  renderMonthStats();

  const logs = getLogs();
  document.getElementById("calendar-title").textContent = `${calYear}년 ${calMonth + 1}월`;

  const grid = document.getElementById("calendar-grid");
  grid.innerHTML = "";

  const firstDayOfWeek = new Date(calYear, calMonth, 1).getDay();
  const daysInMonth = new Date(calYear, calMonth + 1, 0).getDate();
  const todayStr = getLocalDateKey();

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
    cell.dataset.datekey = dateKey;
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
    if (dateKey === selectedCalendarDate) cell.classList.add("selected");

    cell.innerHTML = `<span class="cal-day-num">${d}</span>`;
    if (entry) {
      const label = entry.day === "rest" ? "휴식" : `D${entry.day}${entry.mode === "bodyweight" ? "🤸" : ""}`;
      cell.innerHTML += `<span style="font-size:10px;">${label}</span>`;
    }

    cell.addEventListener("click", () => showDayDetail(dateKey, entry));
    grid.appendChild(cell);
  }

  if (!selectedCalendarDate) {
    document.getElementById("day-detail").innerHTML = "";
  }
}

// ===== 세트 기록 표시용 포맷 (배열/레거시 문자열 둘 다 처리) =====
function formatSetsDetail(sets) {
  if (Array.isArray(sets) && sets.length) {
    return sets.map(s => `${s.weight}kg×${s.reps || "-"}`).join(", ");
  }
  if (typeof sets === "string" && sets) return sets;
  return "";
}

// ===== 날짜 클릭 시 상세 기록 표시 =====
function showDayDetail(dateKey, entry) {
  selectedCalendarDate = dateKey;
  document.querySelectorAll(".calendar-day").forEach(c => {
    c.classList.toggle("selected", c.dataset.datekey === dateKey);
  });

  const detail = document.getElementById("day-detail");

  if (!entry) {
    const todayStr = getLocalDateKey();
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
        <div class="h-summary">오늘은 쉬는 날이었어요</div>
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
    const setsDetail = formatSetsDetail(ex.sets);
    const detailStr = setsDetail ? ` — ${setsDetail}` : (ex.weight ? ` — ${ex.weight}kg` : "");
    return `<div class="h-ex-line ${statusClass}"><span class="h-mark">${mark}</span><span class="h-ex-name">${i + 1}. ${ex.name}${detailStr}</span></div>`;
  }).join("");

  detail.innerHTML = `
    <div class="history-entry">
      <div class="h-date">${dateKey} · Day ${entry.day} (${entry.dayName})${entry.mode === "bodyweight" ? " 🤸 맨몸" : ""}</div>
      <div class="h-summary">${doneCount}/${totalCount} 완료${toValidMinutes(entry.durationMinutes) ? ` · ⏱ ${toValidMinutes(entry.durationMinutes)}분` : ""}</div>
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

// ===== 칭호 카드 HTML 생성 (공용) =====
function buildTitleCardHTML(bmi, workoutCount, displayName, compact) {
  const tier = getBMITier(bmi);
  const level = getWorkoutLevel(workoutCount);
  const levelData = tier[level];
  const title = levelData.title;
  const emoji = levelData.emoji;

  let progressText, progressPct;
  if (level === "base") {
    const remaining = 8 - workoutCount;
    progressText = `1차 전직까지 ${remaining}회`;
    progressPct = Math.min(100, (workoutCount / 8) * 100);
  } else if (level === "mid") {
    const remaining = 16 - workoutCount;
    progressText = `2차 전직까지 ${remaining}회`;
    progressPct = Math.min(100, ((workoutCount - 8) / 8) * 100);
  } else {
    progressText = `최종 전직 달성 🎉`;
    progressPct = 100;
  }

  if (compact) {
    return `
      <div class="profile-title-card-compact">
        <div class="compact-emoji">${emoji}</div>
        <div class="compact-info">
          <div class="compact-name">${title} · BMI ${bmi.toFixed(1)}</div>
          <div class="compact-stats">이번 달 ${workoutCount}회 · ${progressText}</div>
          <div class="compact-bar-bg">
            <div class="compact-bar-fill" style="width:${progressPct}%;"></div>
          </div>
        </div>
      </div>
    `;
  }

  return `
    <div class="profile-title-card">
      <div class="profile-title-emoji">${emoji}</div>
      <div class="profile-title-name">${title}</div>
      <div class="profile-title-stats">${displayName} · BMI ${bmi.toFixed(1)} · 이번 달 ${workoutCount}회 운동</div>
      <div class="profile-progress-text">${progressText}</div>
      <div class="profile-progress-bar-bg">
        <div class="profile-progress-bar-fill" style="width:${progressPct}%;"></div>
      </div>
    </div>
  `;
}

// ===== 기록 화면 상단 프로필 요약 카드 (압축형) =====
function renderProfileSummaryCard() {
  const container = document.getElementById("history-profile-summary");
  const profile = getProfile();

  if (!profile || !profile.height || !profile.weight) {
    container.innerHTML = `<div class="profile-summary-placeholder"><div class="big">👤</div>탭해서 프로필을 설정해주세요</div>`;
    return;
  }

  const heightM = profile.height / 100;
  const bmi = profile.weight / (heightM * heightM);
  const workoutCount = getMonthlyWorkoutCount();
  const displayName = profile.name ? `${profile.name}의 칭호` : "칭호";

  container.innerHTML = buildTitleCardHTML(bmi, workoutCount, displayName, true);

  if (window.twemoji) {
    twemoji.parse(container, { folder: "svg", ext: ".svg" });
  }
}

// ===== 데이터 백업 (내보내기 / 가져오기) =====
function exportData() {
  const payload = {
    app: "monster-project",
    version: 1,
    exportedAt: new Date().toISOString(),
    logs: getLogs(),
    baseWeights: getBaseWeights(),
    profile: getProfile()
  };

  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `새사람프로젝트_백업_${getLocalDateKey()}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast("백업 파일을 내려받았어요 📤");
}

function importData(file) {
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const data = JSON.parse(e.target.result);
      if (!data || data.app !== "monster-project") {
        alert("이 앱의 백업 파일이 아니에요.");
        return;
      }
      if (!confirm("현재 데이터를 백업 파일 내용으로 덮어쓸까요? 되돌릴 수 없어요.")) return;

      if (data.logs) localStorage.setItem(STORAGE_KEY, JSON.stringify(data.logs));
      if (data.baseWeights) saveBaseWeights(data.baseWeights);
      if (data.profile) saveProfileData(data.profile);

      renderHistory();
      showToast("데이터 복원 완료 ✓");
      closeProfileModal();
    } catch (err) {
      alert("파일을 읽을 수 없어요. 올바른 백업 파일인지 확인해주세요.");
    }
  };
  reader.readAsText(file);
}

// ===== 프로필 모달 =====
function openProfileModal() {
  const profile = getProfile();
  document.getElementById("profile-name").value = profile ? profile.name : "";
  document.getElementById("profile-height").value = profile ? profile.height : "";
  document.getElementById("profile-weight").value = profile ? profile.weight : "";

  const gender = getGender();
  const goalMode = getGoalMode();
  document.querySelectorAll("#gender-select .segmented-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.gender === gender);
  });
  document.querySelectorAll("#goalmode-select .segmented-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.goalmode === goalMode);
  });

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
    alert("키와 몸무게를 정확히 입력해주세요.");
    return;
  }

  const genderBtn = document.querySelector("#gender-select .segmented-btn.active");
  const goalModeBtn = document.querySelector("#goalmode-select .segmented-btn.active");
  const gender = genderBtn ? genderBtn.dataset.gender : "male";
  const goalMode = goalModeBtn ? goalModeBtn.dataset.goalmode : "balance";

  const previousProfile = getProfile();
  const genderChanged = previousProfile && previousProfile.gender && previousProfile.gender !== gender;
  const goalModeChanged = previousProfile && previousProfile.goalMode && previousProfile.goalMode !== goalMode;

  saveProfileData({ name, height, weight, gender, goalMode });
  showToast("프로필 저장 완료");
  renderProfileResultFromInputs();
  renderProfileSummaryCard();
  checkEasterEgg(name);

  if (genderChanged) {
    if (confirm(`성별을 바꾸셨네요. 체중(${weight}kg) 기준으로 ${gender === "female" ? "여성" : "남성"} 평균 기준무게로 다시 맞춰줄까요?\n(직접 설정해둔 기존 값은 덮어써져요)`)) {
      const autoWeights = computeAutoBaseWeights(weight);
      const weights = getBaseWeights();
      Object.assign(weights, autoWeights);
      saveBaseWeights(weights);
      showToast("기준무게 자동 설정 완료 💪");
    }
  } else if (confirm(`체중(${weight}kg) 기준으로 각 운동의 기준무게도 자동으로 맞춰줄까요?\n(직접 설정해둔 기존 값은 덮어써져요)`)) {
    const autoWeights = computeAutoBaseWeights(weight);
    const weights = getBaseWeights();
    Object.assign(weights, autoWeights);
    saveBaseWeights(weights);
    showToast("기준무게 자동 설정 완료 💪");
  }

  if (!editingDateKey && (genderChanged || goalModeChanged)) {
    updateDayTabsForGender();
    selectDay(currentDay);
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
  const workoutCount = getMonthlyWorkoutCount();
  const displayName = name ? `${name}의 칭호` : "칭호";

  resultEl.innerHTML = buildTitleCardHTML(bmi, workoutCount, displayName) +
    `<div class="profile-credit">아이콘: Twemoji (CC-BY 4.0)</div>`;

  if (window.twemoji) {
    twemoji.parse(resultEl, { folder: "svg", ext: ".svg" });
  }
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
