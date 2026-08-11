// ===== 루틴 데이터: 성별(남/여) x 목표모드(벌크업/균형/감량) = 6가지 세트 =====
// 균형 모드가 기존 기본 루틴, 벌크업은 저반복·고중량·낮은 유산소, 감량은 고반복·서킷형·높은 유산소로 변형
const ROUTINES_MALE = {
  balance: {
    1: {
      name: "가슴 + 삼두",
      exercises: [
        { name: "바벨 벤치프레스", target: "5세트 x 6~8회" },
        { name: "덤벨 플랫 프레스", target: "4세트 x 8~10회" },
        { name: "덤벨 플라이", target: "3세트 x 10~12회" },
        { name: "밴드 트라이셉 푸시다운", target: "4세트 x 10~12회" },
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
        { name: "바벨 데드리프트", target: "4세트 x 10~12회" },
        { name: "레그프레스", target: "4세트 x 12~15회" },
        { name: "덤벨 불가리안 스플릿 스쿼트", target: "3세트 x 8회 (좌우)" },
        { name: "케틀벨 고블릿 스쿼트", target: "3세트 x 12회" },
        { name: "덤벨 루마니안 데드리프트", target: "3세트 x 15회" },
        { name: "카프레이즈", target: "4세트 x 15~20회" }
      ]
    },
    4: {
      name: "어깨 + 이두",
      exercises: [
        { name: "덤벨 숄더 프레스", target: "4세트 x 8~10회" },
        { name: "사이드 레터럴 레이즈", target: "4세트 x 12~15회" },
        { name: "밴드 페이스풀", target: "3세트 x 15회" },
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
        { name: "덤벨 플랫 프레스", target: "4세트 x 6~8회" },
        { name: "벤치 딥스", target: "4세트 x 8~10회" },
        { name: "밴드 트라이셉 푸시다운", target: "3세트 x 10~12회" },
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
        { name: "바벨 데드리프트", target: "5세트 x 4~6회" },
        { name: "레그프레스", target: "4세트 x 8~10회" },
        { name: "덤벨 불가리안 스플릿 스쿼트", target: "4세트 x 8회 (좌우)" },
        { name: "케틀벨 고블릿 스쿼트", target: "3세트 x 10회" },
        { name: "덤벨 루마니안 데드리프트", target: "3세트 x 12회" },
        { name: "카프레이즈", target: "4세트 x 12~15회" }
      ]
    },
    4: {
      name: "어깨 + 이두",
      exercises: [
        { name: "덤벨 숄더 프레스", target: "5세트 x 6~8회" },
        { name: "사이드 레터럴 레이즈", target: "3세트 x 12~15회" },
        { name: "밴드 페이스풀", target: "3세트 x 15회" },
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
        { name: "덤벨 플랫 프레스", target: "3세트 x 12~15회" },
        { name: "덤벨 플라이", target: "3세트 x 15회" },
        { name: "밴드 트라이셉 푸시다운", target: "3세트 x 15회" },
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
        { name: "바벨 데드리프트", target: "3세트 x 12~15회" },
        { name: "레그프레스", target: "4세트 x 15~20회" },
        { name: "덤벨 불가리안 스플릿 스쿼트", target: "3세트 x 12회 (좌우)" },
        { name: "케틀벨 고블릿 스쿼트", target: "3세트 x 15회" },
        { name: "덤벨 루마니안 데드리프트", target: "3세트 x 20회" },
        { name: "카프레이즈", target: "4세트 x 20회" }
      ]
    },
    4: {
      name: "어깨 + 이두",
      exercises: [
        { name: "덤벨 숄더 프레스", target: "3세트 x 12~15회" },
        { name: "사이드 레터럴 레이즈", target: "4세트 x 15~20회" },
        { name: "밴드 페이스풀", target: "3세트 x 20회" },
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

// ===== 운동 설명 데이터베이스 =====
// target: 주요 타겟 부위 / how: 수행 방법 / tip: 자세·안전 팁
const EXERCISE_GUIDES = {
  // 가슴
  "바벨 벤치프레스": { target: "가슴, 삼두, 전면 어깨", how: "벤치에 누워 견갑을 모아 고정하고, 바를 가슴 중하단까지 내렸다가 밀어 올려요.", tip: "손목은 곧게, 팔꿈치는 45도 정도로 벌려야 어깨 부담이 적어요." },
  "덤벨 플랫 프레스": { target: "가슴, 삼두, 전면 어깨", how: "플랫 벤치에 누워 덤벨을 가슴 옆까지 내렸다가 위로 밀어 올려요.", tip: "바벨보다 가동범위가 커서 밑에서 살짝 스트레칭 느낌까지 내려도 좋아요." },
  "덤벨 디클라인 프레스": { target: "가슴 하부, 삼두", how: "디클라인 벤치에 누워 덤벨을 가슴 하단까지 내렸다가 밀어 올려요.", tip: "발을 벤치 끝에 잘 고정하고 시작해요." },
  "덤벨 플라이": { target: "가슴 (스트레칭 자극)", how: "플랫 벤치에 누워 팔꿈치를 살짝 굽힌 채 양팔을 원을 그리듯 벌렸다 모아요.", tip: "팔꿈치를 너무 펴면 관절에 부담되니 살짝 굽힌 상태 유지." },
  "덤벨 디클라인 플라이": { target: "가슴 하부", how: "디클라인 벤치에서 플라이 동작을 수행해요.", tip: "무게는 가볍게, 자극 위주로." },
  "밴드 트라이셉 푸시다운": { target: "삼두", how: "밴드를 위쪽에 고정하고 팔꿈치를 몸통에 붙인 채 아래로 펴줘요.", tip: "팔꿈치가 앞뒤로 움직이지 않게 고정." },
  "덤벨 오버헤드 익스텐션": { target: "삼두 (장두 위주)", how: "덤벨을 양손으로 잡고 머리 위로 올린 뒤 팔꿈치만 굽혀 뒤로 내렸다 펴요.", tip: "팔꿈치가 벌어지지 않게 고정." },
  "덤벨 라잉 익스텐션": { target: "삼두", how: "벤치에 누워 덤벨을 이마 방향으로 내렸다가 펴요.", tip: "팔꿈치 위치 고정, 얼굴 쪽으로 너무 가깝게 내리지 않기." },
  "덤벨 클로즈그립 프레스": { target: "삼두, 가슴 안쪽", how: "벤치프레스보다 좁은 그립으로 덤벨을 몸 옆에 붙여 밀어 올려요.", tip: "손목이 꺾이지 않게 주의." },
  "벤치 딥스": { target: "삼두, 가슴 하부", how: "벤치에 손을 짚고 엉덩이를 내렸다 올려요. 발은 바닥이나 다른 벤치에.", tip: "어깨가 안 좋으면 너무 깊게 내려가지 않기." },
  "덤벨 킥백": { target: "삼두", how: "상체를 숙이고 팔꿈치를 몸통에 고정한 채 덤벨을 뒤로 펴요.", tip: "팔꿈치 각도 고정이 핵심, 무게보다 자극에 집중." },
  // 등
  "랫풀다운": { target: "광배근, 이두", how: "바를 어깨너비보다 살짝 넓게 잡고 가슴 쪽으로 당겨요.", tip: "상체를 너무 뒤로 젖히지 말고 광배로 당기는 느낌." },
  "바벨 벤트오버 로우": { target: "등 전체, 이두", how: "상체를 45도 정도 숙이고 바벨을 배꼽 쪽으로 당겨요.", tip: "허리는 곧게 펴고 코어에 힘을 줘야 부상 예방." },
  "덤벨 벤트오버 로우": { target: "등 전체, 이두", how: "상체를 숙이고 양손 덤벨을 허리 쪽으로 동시에 당겨요.", tip: "허리 중립 유지가 제일 중요." },
  "덤벨 원암 로우": { target: "광배근, 이두", how: "벤치에 한 손·한 무릎을 대고 반대손 덤벨을 허리 쪽으로 당겨요.", tip: "몸통 회전 없이 순수하게 팔로만 당기기." },
  "케이블 시티드 로우": { target: "등 중앙, 이두", how: "머신에 앉아 손잡이를 배 쪽으로 당겨요.", tip: "등을 둥글게 말지 말고 가슴을 펴고 당기기." },
  "바벨 컬": { target: "이두", how: "바벨을 어깨너비로 잡고 팔꿈치 고정한 채 컬 동작.", tip: "몸을 흔들어 반동 주지 않기." },
  "덤벨 컬": { target: "이두", how: "덤벨을 양손 또는 교대로 컬 동작.", tip: "손목을 살짝 바깥으로 돌리면(수피네이션) 자극이 더 잘 들어와요." },
  "밴드 컬": { target: "이두", how: "밴드를 발로 밟고 팔꿈치 고정한 채 당겨 올려요.", tip: "밴드 장력이 일정하게 유지되도록 천천히." },
  "덤벨 해머컬": { target: "이두, 전완", how: "손바닥이 마주보는 그립으로 덤벨을 컬 동작.", tip: "전완근까지 같이 자극돼요." },
  "밴드 해머컬": { target: "이두, 전완", how: "밴드를 해머그립(엄지 위)으로 잡고 컬 동작.", tip: "팔꿈치 고정 유지." },
  "덤벨 컨센트레이션 컬": { target: "이두 (고립)", how: "앉아서 팔꿈치를 허벅지에 고정하고 한 팔씩 컬.", tip: "천천히, 수축 지점에서 짜듯이 힘주기." },
  "덤벨 컬 21s": { target: "이두 (풀레인지 자극)", how: "하위 절반 7회 + 상위 절반 7회 + 풀 레인지 7회, 총 21회를 연속으로.", tip: "가벼운 무게로, 마지막 세트 마무리용." },
  "바벨 21s": { target: "이두", how: "바벨로 21s 방식(하위7+상위7+풀7) 수행.", tip: "펌핑 목적이라 무게는 평소보다 낮게." },
  // 하체
  "바벨 데드리프트": { target: "둔근, 햄스트링, 등 전체", how: "바벨을 정강이 앞에 두고 허리를 곧게 편 채 바닥에서 들어올려요.", tip: "바가 몸에서 멀어지지 않게, 힙힌지로 시작." },
  "레그프레스": { target: "대퇴사두, 둔근", how: "발판에 발을 어깨너비로 딛고 무릎이 90도 정도 될 때까지 내렸다 밀어요.", tip: "무릎이 안쪽으로 모이지 않게 주의." },
  "덤벨 불가리안 스플릿 스쿼트": { target: "대퇴사두, 둔근 (편측)", how: "뒷발을 벤치에 올리고 앞다리로 스쿼트 동작.", tip: "상체를 살짝 숙이면 둔근에 더 자극이 가요." },
  "덤벨 워킹 런지": { target: "대퇴사두, 둔근", how: "덤벨을 양손에 들고 앞으로 걸으며 런지 동작을 반복.", tip: "무릎이 발끝을 많이 넘지 않게." },
  "덤벨 스텝업": { target: "대퇴사두, 둔근", how: "벤치나 박스에 한 발을 올리고 밀어 올라가요.", tip: "반대 발로 밀지 말고 올라가는 다리 힘으로." },
  "케틀벨 고블릿 스쿼트": { target: "대퇴사두, 둔근, 코어", how: "케틀벨을 가슴 앞에 들고 스쿼트 동작.", tip: "가슴을 세우고 무릎과 발끝 방향 맞추기." },
  "덤벨 고블릿 스쿼트": { target: "대퇴사두, 둔근, 코어", how: "덤벨 한쪽을 세워 양손으로 가슴 앞에 들고 스쿼트.", tip: "케틀벨 고블릿과 동일한 자세." },
  "덤벨 스모 스쿼트": { target: "둔근, 내전근", how: "발을 넓게 벌리고 덤벨을 다리 사이로 늘어뜨린 채 스쿼트.", tip: "발끝을 바깥으로 살짝 돌리기." },
  "덤벨 루마니안 데드리프트": { target: "햄스트링, 둔근", how: "무릎을 살짝만 굽히고 엉덩이를 뒤로 빼며 덤벨을 정강이 옆으로 내려요.", tip: "허리 말리지 않게, 햄스트링 스트레칭 느낌까지만." },
  "바벨 루마니안 데드리프트": { target: "햄스트링, 둔근", how: "바벨로 RDL 동작. 무릎은 살짝만 굽히고 힙힌지.", tip: "바가 다리에서 멀어지지 않게 붙여서." },
  "케틀벨 스윙": { target: "둔근, 햄스트링, 코어", how: "케틀벨을 다리 사이로 흔들었다가 힙 파워로 앞으로 스윙.", tip: "팔 힘이 아니라 골반 힘으로 튕기듯." },
  "카프레이즈": { target: "종아리", how: "발끝으로 서서 뒤꿈치를 최대한 들었다 내려요.", tip: "레그프레스 발판에서 발끝만 걸치고 해도 좋아요." },
  // 어깨
  "덤벨 숄더 프레스": { target: "어깨 전체", how: "덤벨을 어깨 높이에서 머리 위로 밀어 올려요.", tip: "허리가 과하게 꺾이지 않게 코어 긴장." },
  "덤벨 아놀드 프레스": { target: "어깨 전체 (회전 포함)", how: "손바닥이 몸 쪽을 향한 상태로 시작해 밀어 올리며 손바닥이 앞을 보게 회전.", tip: "회전 타이밍보다 부드러운 궤적이 중요." },
  "사이드 레터럴 레이즈": { target: "어깨 측면", how: "덤벨을 양옆으로 어깨 높이까지 들어올려요.", tip: "팔꿈치를 살짝 굽히고, 반동 없이 천천히." },
  "밴드 레터럴 레이즈": { target: "어깨 측면", how: "밴드를 발로 밟고 옆으로 들어올려요.", tip: "밴드 장력이 최상단에서 최대가 되게." },
  "밴드 페이스풀": { target: "후면 삼각근, 승모근 하부", how: "밴드를 눈높이에 고정하고 얼굴 쪽으로 당기며 팔꿈치를 벌려요.", tip: "직각어깨 만들기에 핵심적인 자세교정 운동." },
  "덤벨 리어 델트 플라이": { target: "후면 삼각근", how: "상체를 숙이고 덤벨을 양옆으로 들어올려요.", tip: "허리 말지 않고 등 평평하게 유지." },
  "밴드 풀어파트": { target: "후면 삼각근, 등 상부", how: "밴드 양끝을 잡고 가슴 앞에서 양옆으로 벌려요.", tip: "가벼운 밴드로 워밍업이나 마무리용으로 좋아요." },
  // 코어/유산소
  "스텝밀": { target: "심폐지구력, 하체", how: "계단 오르듯 페달을 밟는 유산소 기구.", tip: "손잡이에 체중 싣지 말고 다리 힘으로 밟기." },
  "플랭크": { target: "코어 전체", how: "팔꿈치와 발끝으로 몸을 일직선으로 버텨요.", tip: "엉덩이가 뜨거나 처지지 않게 일직선 유지." },
  "데드버그": { target: "코어, 요추 안정성", how: "누워서 반대쪽 팔·다리를 동시에 뻗었다 제자리로.", tip: "허리가 바닥에서 뜨지 않게." },
  "러시안 트위스트": { target: "복사근", how: "앉아서 상체를 살짝 젖히고 좌우로 회전.", tip: "허리보다 갈비뼈를 회전시키는 느낌." },
  "마운틴 클라이머": { target: "코어, 심폐", how: "플랭크 자세에서 무릎을 번갈아 가슴 쪽으로 당겨요.", tip: "엉덩이가 너무 들리지 않게." }
};

function getExerciseGuide(name) {
  return EXERCISE_GUIDES[name] || null;
}

// ===== 자극 부위 인체 다이어그램 (정면/후면 실루엣 + 부위별 하이라이트) =====
// 공통 몸통/팔다리 베이스 실루엣 (정면·후면 동일 외곽선)
const BODY_BASE_SHAPE = `
  <ellipse cx="80" cy="24" rx="16" ry="20"/>
  <rect x="73" y="41" width="14" height="12" rx="4"/>
  <path d="M50,54 L110,54 Q128,54 127,72 L124,140 Q123,158 116,166 L112,178 Q112,182 108,182 L52,182 Q48,182 48,178 L44,166 Q37,158 36,140 L33,72 Q32,54 50,54 Z"/>
  <rect x="10" y="62" width="17" height="60" rx="8.5"/>
  <rect x="8" y="118" width="16" height="58" rx="8"/>
  <rect x="133" y="62" width="17" height="60" rx="8.5"/>
  <rect x="136" y="118" width="16" height="58" rx="8"/>
  <path d="M50,182 C43,186 40,195 39,208 L37,278 L55,278 L58,215 L60,198 L74,198 L74,182 Z"/>
  <path d="M110,182 C117,186 120,195 121,208 L123,278 L105,278 L102,215 L100,198 L86,198 L86,182 Z"/>
  <rect x="35" y="276" width="21" height="66" rx="10"/>
  <rect x="104" y="276" width="21" height="66" rx="10"/>
  <ellipse cx="45" cy="352" rx="13" ry="9"/>
  <ellipse cx="115" cy="352" rx="13" ry="9"/>
`;

// 정면에서 보이는 부위: 가슴, 전면삼각근, 이두, 전완, 복근/옆구리, 대퇴사두, 내전근, 종아리
const BODY_FRONT_REGIONS = `
  <ellipse class="muscle-region" data-region="front_delt" cx="24" cy="68" rx="11" ry="13"/>
  <ellipse class="muscle-region" data-region="front_delt" cx="136" cy="68" rx="11" ry="13"/>
  <rect class="muscle-region" data-region="forearm" x="9" y="122" width="14" height="48" rx="7"/>
  <rect class="muscle-region" data-region="forearm" x="137" y="122" width="14" height="48" rx="7"/>
  <path class="muscle-region" data-region="chest" d="M52,62 Q45,62 44,72 L45,92 Q46,100 56,100 L78,100 L78,64 L64,62 Z"/>
  <path class="muscle-region" data-region="chest" d="M108,62 Q115,62 116,72 L115,92 Q114,100 104,100 L82,100 L82,64 L96,62 Z"/>
  <rect class="muscle-region" data-region="biceps" x="11" y="80" width="15" height="38" rx="7"/>
  <rect class="muscle-region" data-region="biceps" x="134" y="80" width="15" height="38" rx="7"/>
  <rect class="muscle-region" data-region="abs" x="66" y="104" width="12" height="16" rx="3"/>
  <rect class="muscle-region" data-region="abs" x="82" y="104" width="12" height="16" rx="3"/>
  <rect class="muscle-region" data-region="abs" x="66" y="123" width="12" height="16" rx="3"/>
  <rect class="muscle-region" data-region="abs" x="82" y="123" width="12" height="16" rx="3"/>
  <rect class="muscle-region" data-region="abs" x="67" y="142" width="26" height="16" rx="3"/>
  <path class="muscle-region" data-region="obliques" d="M50,108 Q47,130 52,158 L60,158 L58,108 Z"/>
  <path class="muscle-region" data-region="obliques" d="M110,108 Q113,130 108,158 L100,158 L102,108 Z"/>
  <path class="muscle-region" data-region="quads" d="M50,186 C45,192 42,200 41,212 L40,272 L56,272 L58,215 Z"/>
  <path class="muscle-region" data-region="quads" d="M110,186 C115,192 118,200 119,212 L120,272 L104,272 L102,215 Z"/>
  <path class="muscle-region" data-region="adductor" d="M60,198 L74,198 L72,240 L64,240 Z"/>
  <path class="muscle-region" data-region="adductor" d="M86,198 L100,198 L96,240 L88,240 Z"/>
  <rect class="muscle-region" data-region="calf" x="36" y="278" width="19" height="62" rx="9"/>
  <rect class="muscle-region" data-region="calf" x="105" y="278" width="19" height="62" rx="9"/>
`;

// 후면에서 보이는 부위: 승모근하부, 후면삼각근, 광배근, 등중앙, 삼두, 전완, 둔근, 햄스트링, 종아리
const BODY_BACK_REGIONS = `
  <path class="muscle-region" data-region="traps" d="M66,56 L94,56 L100,78 L80,90 L60,78 Z"/>
  <ellipse class="muscle-region" data-region="rear_delt" cx="24" cy="68" rx="11" ry="13"/>
  <ellipse class="muscle-region" data-region="rear_delt" cx="136" cy="68" rx="11" ry="13"/>
  <path class="muscle-region" data-region="lats" d="M42,80 Q36,110 44,150 L60,160 L58,84 Z"/>
  <path class="muscle-region" data-region="lats" d="M118,80 Q124,110 116,150 L100,160 L102,84 Z"/>
  <rect class="muscle-region" data-region="lats" x="66" y="100" width="28" height="70" rx="6"/>
  <rect class="muscle-region" data-region="triceps" x="11" y="80" width="15" height="38" rx="7"/>
  <rect class="muscle-region" data-region="triceps" x="134" y="80" width="15" height="38" rx="7"/>
  <rect class="muscle-region" data-region="forearm" x="9" y="122" width="14" height="48" rx="7"/>
  <rect class="muscle-region" data-region="forearm" x="137" y="122" width="14" height="48" rx="7"/>
  <path class="muscle-region" data-region="glutes" d="M48,184 Q42,192 41,206 L44,216 L74,216 L74,184 Z"/>
  <path class="muscle-region" data-region="glutes" d="M112,184 Q118,192 119,206 L116,216 L86,216 L86,184 Z"/>
  <path class="muscle-region" data-region="hamstrings" d="M42,220 L58,220 L56,272 L42,272 Z"/>
  <path class="muscle-region" data-region="hamstrings" d="M118,220 L102,220 L104,272 L118,272 Z"/>
  <rect class="muscle-region" data-region="calf" x="36" y="278" width="19" height="62" rx="9"/>
  <rect class="muscle-region" data-region="calf" x="105" y="278" width="19" height="62" rx="9"/>
`;

function buildBodySvg(regionsMarkup, label) {
  return `
    <svg viewBox="0 0 160 400" class="body-diagram-svg">
      <g class="body-outline">${BODY_BASE_SHAPE}</g>
      <g>${regionsMarkup}</g>
    </svg>
    <div class="body-diagram-label">${label}</div>
  `;
}

// target 문자열의 한글 부위 키워드를 스캔해서 다이어그램 부위 id 목록으로 변환
const MUSCLE_KEYWORD_MAP = [
  ["전면 어깨", ["front_delt"]],
  ["어깨 측면", ["front_delt", "rear_delt"]],
  ["어깨 전체", ["front_delt", "rear_delt"]],
  ["후면 삼각근", ["rear_delt"]],
  ["승모근 하부", ["traps"]],
  ["등 상부", ["traps", "lats"]],
  ["등 전체", ["lats", "traps"]],
  ["등 중앙", ["lats"]],
  ["광배근", ["lats"]],
  ["가슴", ["chest"]],
  ["삼두", ["triceps"]],
  ["이두", ["biceps"]],
  ["전완", ["forearm"]],
  ["둔근", ["glutes"]],
  ["대퇴사두", ["quads"]],
  ["햄스트링", ["hamstrings"]],
  ["내전근", ["adductor"]],
  ["종아리", ["calf"]],
  ["하체", ["quads", "hamstrings", "calf", "glutes"]],
  ["복사근", ["obliques"]],
  ["코어", ["abs"]],
  ["요추", ["abs"]]
];

function getRegionsForTarget(target) {
  if (!target) return [];
  const regions = new Set();
  MUSCLE_KEYWORD_MAP.forEach(([keyword, ids]) => {
    if (target.includes(keyword)) {
      ids.forEach(id => regions.add(id));
    }
  });
  return [...regions];
}

function renderBodyDiagramHTML(target) {
  const regions = getRegionsForTarget(target);
  if (regions.length === 0) return "";

  const frontSvg = buildBodySvg(BODY_FRONT_REGIONS, "정면");
  const backSvg = buildBodySvg(BODY_BACK_REGIONS, "후면");

  return `
    <div class="body-diagram-wrap" data-active-regions="${regions.join(",")}">
      <div class="body-diagram-col">${frontSvg}</div>
      <div class="body-diagram-col">${backSvg}</div>
    </div>
  `;
}

function activateBodyDiagramRegions(container) {
  const wrap = container.querySelector(".body-diagram-wrap");
  if (!wrap) return;
  const activeRegions = (wrap.dataset.activeRegions || "").split(",").filter(Boolean);
  wrap.querySelectorAll(".muscle-region").forEach(el => {
    const region = el.dataset.region;
    if (activeRegions.includes(region)) {
      el.classList.add("active");
    }
  });
}

// ===== 보조 운동 로테이션 풀 =====
// 벤치프레스/데드리프트/랫풀다운/레그프레스/힙쓰러스트/스텝밀 등 대체 불가 메인 운동은
// 여기 등록하지 않음 → 자동으로 고정(앵커) 처리됨.
// 아래 등록된 이름의 운동만 "운동 완료 후 다음 사이클"에 풀에서 랜덤 교체됨.
// 각 배열의 첫 번째 항목이 오리지널이며, 매 사이클마다 배열 전체(오리지널 포함) 중 하나가 랜덤 선택됨.
// ===== 보조 운동 로테이션 풀 (실제 보유 기구 기준) =====
// 보유 기구: 바벨, 덤벨 랙, 케틀벨, 플랫/디클라인 벤치, 레그프레스, 랫풀다운+시티드로우 콤보머신, 저항밴드, 유산소 기구
// 없는 기구: 스탠딩 케이블(풀리스택), 스미스머신, 레그익스텐션/레그컬 머신, 핵스쿼트, 티바로우, 프리처컬 벤치, 딥스 전용 스테이션
const ROTATION_POOLS_MALE = {
  // 가슴 보조
  "덤벨 플랫 프레스": ["덤벨 플랫 프레스", "덤벨 디클라인 프레스"],
  "덤벨 플라이": ["덤벨 플라이", "덤벨 디클라인 플라이"],
  "밴드 트라이셉 푸시다운": ["밴드 트라이셉 푸시다운", "덤벨 킥백", "벤치 딥스"],
  "덤벨 오버헤드 익스텐션": ["덤벨 오버헤드 익스텐션", "덤벨 라잉 익스텐션", "벤치 딥스"],
  "덤벨 클로즈그립 프레스": ["덤벨 클로즈그립 프레스", "밴드 트라이셉 푸시다운", "벤치 딥스"],
  "벤치 딥스": ["벤치 딥스", "밴드 트라이셉 푸시다운", "덤벨 킥백"],
  // 등 보조
  "바벨 벤트오버 로우": ["바벨 벤트오버 로우", "덤벨 벤트오버 로우", "케이블 시티드 로우"],
  "덤벨 원암 로우": ["덤벨 원암 로우", "케이블 시티드 로우"],
  "바벨 컬": ["바벨 컬", "덤벨 컬", "밴드 컬"],
  "덤벨 해머컬": ["덤벨 해머컬", "밴드 해머컬"],
  "덤벨 컨센트레이션 컬": ["덤벨 컨센트레이션 컬", "밴드 컬"],
  "덤벨 컬 21s": ["덤벨 컬 21s", "바벨 21s"],
  // 하체 보조
  "덤벨 불가리안 스플릿 스쿼트": ["덤벨 불가리안 스플릿 스쿼트", "덤벨 워킹 런지", "덤벨 스텝업"],
  "케틀벨 고블릿 스쿼트": ["케틀벨 고블릿 스쿼트", "덤벨 고블릿 스쿼트", "덤벨 스모 스쿼트"],
  "덤벨 루마니안 데드리프트": ["덤벨 루마니안 데드리프트", "케틀벨 스윙", "바벨 루마니안 데드리프트"],
  // 어깨 보조
  "덤벨 숄더 프레스": ["덤벨 숄더 프레스", "덤벨 아놀드 프레스"],
  "사이드 레터럴 레이즈": ["사이드 레터럴 레이즈", "밴드 레터럴 레이즈"],
  "밴드 페이스풀": ["밴드 페이스풀", "덤벨 리어 델트 플라이", "밴드 풀어파트"]
};

const ROTATION_POOLS_FEMALE = {
  "덤벨 워킹 런지": ["덤벨 워킹 런지", "덤벨 스텝업", "덤벨 스모 스쿼트"],
  "레그 익스텐션": ["레그 익스텐션"], // 여성 루틴은 헬스장 무관 참고용, 별도 확인 전까지 유지
  "케이블 시티드 로우": ["케이블 시티드 로우", "덤벨 벤트오버 로우"],
  "사이드 레터럴 레이즈": ["사이드 레터럴 레이즈", "밴드 레터럴 레이즈"],
  "페이스풀": ["밴드 페이스풀", "덤벨 리어 델트 플라이"],
  "리어 델트 플라이": ["덤벨 리어 델트 플라이", "밴드 페이스풀"],
  "덤벨 컬": ["덤벨 컬", "밴드 컬"],
  "케이블 킥백": ["덤벨 킥백"],
  "러시안 트위스트": ["러시안 트위스트", "마운틴 클라이머"]
};

function getRotationPools() {
  return getGender() === "female" ? ROTATION_POOLS_FEMALE : ROTATION_POOLS_MALE;
}

// ===== 로테이션 상태 저장 (성별_모드_Day 별로 이번 사이클에 뽑힌 운동명을 기억) =====
const ROTATION_STATE_KEY = "monster-project-rotation-state";

function getRotationState() {
  try {
    const raw = localStorage.getItem(ROTATION_STATE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    return {};
  }
}

function saveRotationState(state) {
  localStorage.setItem(ROTATION_STATE_KEY, JSON.stringify(state));
}

function getRotationCycleKey(day) {
  return `${getGender()}_${getGoalMode()}_${day}`;
}

// 해당 Day의 운동 완료 후 호출 → 다음 방문 시 새로 랜덤 선택되도록 캐시 삭제
function clearRotationForDay(day) {
  const state = getRotationState();
  delete state[getRotationCycleKey(day)];
  saveRotationState(state);
}

// 이번 사이클에 쓸 운동명 맵 반환: { 원래이름: 이번에 뽑힌이름 }
// 이미 이번 사이클에 뽑아둔 게 있으면 그대로 재사용(세션 중 안 바뀜), 없으면 새로 뽑아서 저장
function getOrGenerateRotationPicks(day, exercises) {
  const pools = getRotationPools();
  const cycleKey = getRotationCycleKey(day);
  const state = getRotationState();

  if (state[cycleKey]) {
    return state[cycleKey];
  }

  const picks = {};
  exercises.forEach(ex => {
    const pool = pools[ex.name];
    if (pool && pool.length > 0) {
      picks[ex.name] = pool[Math.floor(Math.random() * pool.length)];
    }
  });

  state[cycleKey] = picks;
  saveRotationState(state);
  return picks;
}

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

// ===== 시작 기준 무게 (170cm/70kg 복귀 중급자 기준, 첫 실행시 1회만 채워짐) =====
const DEFAULT_BASE_WEIGHTS_MALE = {
  // Day 1 — 가슴/삼두
  "바벨 벤치프레스": 40,
  "덤벨 플랫 프레스": 16,
  "덤벨 디클라인 프레스": 16,
  "덤벨 플라이": 12,
  "덤벨 디클라인 플라이": 12,
  "덤벨 오버헤드 익스텐션": 10,
  "덤벨 라잉 익스텐션": 10,
  "덤벨 클로즈그립 프레스": 14,
  "덤벨 킥백": 6,
  // Day 2 — 등/이두
  "랫풀다운": 40,
  "바벨 벤트오버 로우": 40,
  "덤벨 벤트오버 로우": 16,
  "덤벨 원암 로우": 16,
  "케이블 시티드 로우": 35,
  "바벨 컬": 20,
  "덤벨 컬": 10,
  "덤벨 해머컬": 10,
  "덤벨 컨센트레이션 컬": 8,
  "덤벨 컬 21s": 8,
  "바벨 21s": 15,
  // Day 3 — 하체
  "바벨 데드리프트": 50,
  "레그프레스": 60,
  "덤벨 불가리안 스플릿 스쿼트": 10,
  "덤벨 워킹 런지": 8,
  "덤벨 스텝업": 10,
  "케틀벨 고블릿 스쿼트": 16,
  "덤벨 고블릿 스쿼트": 16,
  "덤벨 스모 스쿼트": 16,
  "덤벨 루마니안 데드리프트": 20,
  "바벨 루마니안 데드리프트": 40,
  "케틀벨 스윙": 16,
  "카프레이즈": 40,
  // Day 4 — 어깨/팔
  "덤벨 숄더 프레스": 12,
  "덤벨 아놀드 프레스": 10,
  "사이드 레터럴 레이즈": 6,
  "덤벨 리어 델트 플라이": 6,
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
  "러시안 트위스트": 5,
  // ===== 로테이션 풀 대체 종목 기준무게 =====
  "스텝업": 6,
  "덤벨 스모 스쿼트": 12,
  "레그컬": 14,
  "티바 로우": 20,
  "케이블 레터럴 레이즈": 3,
  "벤트오버 레터럴 레이즈": 3,
  "이지바 컬": 10,
  "케이블 컬": 8,
  "덤벨 킥백": 4
  // 플랭크·데드버그·마운틴 클라이머·스텝밀은 맨몸/유산소라 기준무게 없음
};

const PROFILE_KEY = "monster-project-profile";

// ===== BMI 7단계 x 운동량 3단계 칭호 시스템 =====
const BMI_TIERS = [
  { max: 18,
    base: { title: "루키", emoji: "🌱" },
    mid: { title: "성장형", emoji: "📈" },
    high: { title: "노력파", emoji: "⭐" } },
  { max: 19.5,
    base: { title: "라이트급", emoji: "🍃" },
    mid: { title: "라이트 파이터", emoji: "🤺" },
    high: { title: "라이트 챔피언", emoji: "🏅" } },
  { max: 21,
    base: { title: "슬림 타입", emoji: "🎯" },
    mid: { title: "슬림 파이터", emoji: "💫" },
    high: { title: "슬림 마스터", emoji: "👑" } },
  { max: 23,
    base: { title: "밸런스 타입", emoji: "⚖️" },
    mid: { title: "밸런스 마스터", emoji: "🧘" },
    high: { title: "밸런스 갓", emoji: "🔱" } },
  { max: 25,
    base: { title: "볼륨 타입", emoji: "💪" },
    mid: { title: "파워 빌더", emoji: "🔥" },
    high: { title: "파워 마스터", emoji: "🏆" } },
  { max: 27,
    base: { title: "헤비급", emoji: "🛡️" },
    mid: { title: "헤비 파이터", emoji: "⚔️" },
    high: { title: "헤비 챔피언", emoji: "🦾" } },
  { max: Infinity,
    base: { title: "챌린저", emoji: "🎖️" },
    mid: { title: "다이나믹 챌린저", emoji: "🏋️" },
    high: { title: "레전드 챌린저", emoji: "🏆" } }
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

// "N세트 x M회" 형식이 아닌 경우(예: 스텝밀 "600스텝") 세트 기반 빠른채우기 대상에서 제외
function isSetBasedTarget(target) {
  return parseTargetSetCount(target) !== null;
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
  document.getElementById("fill-all-btn").addEventListener("click", fillAllExercisesQuick);
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
  document.getElementById("close-exercise-info-btn").addEventListener("click", closeExerciseInfoModal);
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

  const rotationPicks = currentMode === "bodyweight" ? {} : getOrGenerateRotationPicks(day, routines[day].exercises);

  const base = routines[day].exercises.map(ex => {
    const displayName = rotationPicks[ex.name] || ex.name;
    const baseWeight = getBaseWeight(displayName);
    return {
      name: displayName,
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

    const infoBtn = document.createElement("button");
    infoBtn.className = "exercise-info-btn";
    infoBtn.textContent = "ⓘ";
    infoBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      openExerciseInfoModal(ex.name);
    });

    row.appendChild(checkBtn);
    row.appendChild(nameSpan);
    row.appendChild(infoBtn);

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

      // ---- 이미 기록된 세트 인라인 수정/삭제 + 세트 추가 (타이머 없이 바로 편집) ----
      const setsBlock = document.createElement("div");
      setsBlock.className = "logged-sets-block";

      // ---- 빠른 채우기 (놓친 날 기록을 세트 수 x 무게 x 횟수로 한 번에 채움) ----
      // "N세트 x M회" 형식이 아닌 유산소 종목(스텝밀 등)은 세트 개념이 없어 이 UI를 표시하지 않음
      if (isSetBasedTarget(ex.target)) {
      const quickFill = document.createElement("div");
      quickFill.className = "quick-fill-block";

      const quickFillLabel = document.createElement("div");
      quickFillLabel.className = "logged-sets-label";
      quickFillLabel.textContent = "빠른 채우기 · 놓친 기록 한 번에 입력";
      quickFill.appendChild(quickFillLabel);

      const quickFillRow = document.createElement("div");
      quickFillRow.className = "quick-fill-row";

      const defaultSetCount = parseTargetSetCount(ex.target) || 3;
      const defaultReps = parseSuggestedReps(ex.target) || "10";
      const defaultWeight = ex.weight !== "" ? ex.weight : (getBaseWeight(ex.name) || 0);

      const qfSetsInput = document.createElement("input");
      qfSetsInput.type = "number";
      qfSetsInput.inputMode = "numeric";
      qfSetsInput.className = "quick-fill-input";
      qfSetsInput.value = defaultSetCount;
      qfSetsInput.addEventListener("click", (e) => e.stopPropagation());
      quickFillRow.appendChild(qfSetsInput);

      const qfSetsLabel = document.createElement("span");
      qfSetsLabel.className = "quick-fill-unit";
      qfSetsLabel.textContent = "세트 ×";
      quickFillRow.appendChild(qfSetsLabel);

      let qfWeightInput = null;
      if (!isBodyweight) {
        qfWeightInput = document.createElement("input");
        qfWeightInput.type = "number";
        qfWeightInput.inputMode = "decimal";
        qfWeightInput.className = "quick-fill-input";
        qfWeightInput.value = defaultWeight;
        qfWeightInput.addEventListener("click", (e) => e.stopPropagation());
        quickFillRow.appendChild(qfWeightInput);

        const qfKgLabel = document.createElement("span");
        qfKgLabel.className = "quick-fill-unit";
        qfKgLabel.textContent = "kg ×";
        quickFillRow.appendChild(qfKgLabel);
      }

      const qfRepsInput = document.createElement("input");
      qfRepsInput.type = "number";
      qfRepsInput.inputMode = "numeric";
      qfRepsInput.className = "quick-fill-input";
      qfRepsInput.value = defaultReps;
      qfRepsInput.addEventListener("click", (e) => e.stopPropagation());
      quickFillRow.appendChild(qfRepsInput);

      const qfRepsLabel = document.createElement("span");
      qfRepsLabel.className = "quick-fill-unit";
      qfRepsLabel.textContent = "회";
      quickFillRow.appendChild(qfRepsLabel);

      quickFill.appendChild(quickFillRow);

      const quickFillBtn = document.createElement("button");
      quickFillBtn.className = "quick-fill-btn";
      quickFillBtn.textContent = "한 번에 채우기";
      quickFillBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        const count = Math.max(1, parseInt(qfSetsInput.value) || 1);
        const weightVal = qfWeightInput ? (parseFloat(qfWeightInput.value) || 0) : 0;
        const repsVal = qfRepsInput.value || "";

        const existing = currentExercises[idx].completedSets || [];
        if (existing.length > 0 && !confirm(`이미 ${existing.length}개 세트가 있어요. 덮어쓸까요?`)) {
          return;
        }

        const newSets = [];
        for (let i = 0; i < count; i++) {
          newSets.push({ weight: weightVal, reps: repsVal });
        }
        currentExercises[idx].completedSets = newSets;
        currentExercises[idx].checked = true;
        if (qfWeightInput) currentExercises[idx].weight = weightVal;
        renderExercises();
      });
      quickFill.appendChild(quickFillBtn);

      setsBlock.appendChild(quickFill);
      }

      const setsLabel = document.createElement("div");
      setsLabel.className = "logged-sets-label";
      setsLabel.textContent = "기록된 세트";
      setsBlock.appendChild(setsLabel);

      const setsList = document.createElement("div");
      setsList.className = "logged-sets-list";

      const renderSetsList = () => {
        setsList.innerHTML = "";
        const sets = currentExercises[idx].completedSets || [];

        if (sets.length === 0) {
          const empty = document.createElement("div");
          empty.className = "logged-sets-empty";
          empty.textContent = "기록된 세트 없음";
          setsList.appendChild(empty);
        }

        sets.forEach((set, setIdx) => {
          const setRow = document.createElement("div");
          setRow.className = "logged-set-row";

          const setNum = document.createElement("span");
          setNum.className = "logged-set-num";
          setNum.textContent = `${setIdx + 1}세트`;
          setRow.appendChild(setNum);

          if (!isBodyweight) {
            const weightInput = document.createElement("input");
            weightInput.type = "number";
            weightInput.inputMode = "decimal";
            weightInput.className = "logged-set-input";
            weightInput.value = set.weight;
            weightInput.addEventListener("click", (e) => e.stopPropagation());
            weightInput.addEventListener("change", (e) => {
              const v = parseFloat(e.target.value);
              currentExercises[idx].completedSets[setIdx].weight = isNaN(v) ? 0 : v;
            });
            setRow.appendChild(weightInput);

            const kgLabel = document.createElement("span");
            kgLabel.className = "logged-set-unit";
            kgLabel.textContent = "kg ×";
            setRow.appendChild(kgLabel);
          }

          const repsInput = document.createElement("input");
          repsInput.type = "number";
          repsInput.inputMode = "numeric";
          repsInput.className = "logged-set-input";
          repsInput.value = set.reps;
          repsInput.addEventListener("click", (e) => e.stopPropagation());
          repsInput.addEventListener("change", (e) => {
            currentExercises[idx].completedSets[setIdx].reps = e.target.value;
          });
          setRow.appendChild(repsInput);

          const repsLabel = document.createElement("span");
          repsLabel.className = "logged-set-unit";
          repsLabel.textContent = "회";
          setRow.appendChild(repsLabel);

          const deleteSetBtn = document.createElement("button");
          deleteSetBtn.className = "logged-set-delete";
          deleteSetBtn.textContent = "✕";
          deleteSetBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            currentExercises[idx].completedSets.splice(setIdx, 1);
            renderExercises();
          });
          setRow.appendChild(deleteSetBtn);

          setsList.appendChild(setRow);
        });
      };
      renderSetsList();
      setsBlock.appendChild(setsList);

      const addSetBtn = document.createElement("button");
      addSetBtn.className = "logged-set-add-btn";
      addSetBtn.textContent = "+ 세트 추가";
      addSetBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        if (!currentExercises[idx].completedSets) currentExercises[idx].completedSets = [];
        const lastSet = currentExercises[idx].completedSets.slice(-1)[0];
        currentExercises[idx].completedSets.push({
          weight: lastSet ? lastSet.weight : (currentExercises[idx].weight || 0),
          reps: lastSet ? lastSet.reps : (currentExercises[idx].currentReps || "")
        });
        currentExercises[idx].checked = true;
        renderExercises();
      });
      setsBlock.appendChild(addSetBtn);

      detail.appendChild(setsBlock);

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
  if (currentMode !== "bodyweight") {
    clearRotationForDay(currentDay);
  }
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

  const nameRow = document.createElement("div");
  nameRow.className = "hero-ex-name-row";

  const nameEl = document.createElement("div");
  nameEl.className = "hero-ex-name";
  nameEl.textContent = ex.name;

  const heroInfoBtn = document.createElement("button");
  heroInfoBtn.className = "exercise-info-btn hero-info-btn";
  heroInfoBtn.textContent = "ⓘ";
  heroInfoBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    openExerciseInfoModal(ex.name);
  });

  nameRow.appendChild(nameEl);
  nameRow.appendChild(heroInfoBtn);
  card.appendChild(nameRow);

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

// ===== 놓친 날 전체를 루틴 목표(세트수·기준무게·목표횟수)로 한 번에 채우기 =====
function fillAllExercisesQuick() {
  const alreadyFilled = currentExercises.filter(ex => (ex.completedSets || []).length > 0);
  if (alreadyFilled.length > 0) {
    if (!confirm(`이미 ${alreadyFilled.length}개 운동에 기록이 있어요. 비어있는 운동만 채울까요?\n(취소하면 아무것도 바뀌지 않아요)`)) {
      return;
    }
  }

  const isBodyweight = currentMode === "bodyweight";

  currentExercises.forEach(ex => {
    if ((ex.completedSets || []).length > 0) return; // 이미 기록된 건 건드리지 않음

    if (!isSetBasedTarget(ex.target)) {
      // 스텝밀 등 "N세트 x M회" 형식이 아닌 유산소 종목은 체크만 표시, 가짜 세트는 만들지 않음
      ex.checked = true;
      return;
    }

    const count = parseTargetSetCount(ex.target) || 3;
    const reps = parseSuggestedReps(ex.target) || "10";
    const weight = isBodyweight ? 0 : (ex.weight !== "" ? ex.weight : (getBaseWeight(ex.name) || 0));

    const sets = [];
    for (let i = 0; i < count; i++) {
      sets.push({ weight: weight, reps: reps });
    }
    ex.completedSets = sets;
    ex.checked = true;
    if (!isBodyweight) ex.weight = weight;
  });

  renderExercises();
  showToast("루틴 목표대로 전체 채웠어요 · 필요하면 개별 수정 후 저장하세요");
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
      cell.classList.add("logged");
    }
    if (dateKey === todayStr) cell.classList.add("today");
    if (dateKey === selectedCalendarDate) cell.classList.add("selected");

    cell.innerHTML = `<span class="cal-day-num">${d}</span>`;

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

// ===== 운동 설명 모달 =====
function openExerciseInfoModal(name) {
  const guide = getExerciseGuide(name);
  document.getElementById("exercise-info-title").textContent = name;

  const body = document.getElementById("exercise-info-body");
  if (!guide) {
    body.innerHTML = `<div class="placeholder-text">이 운동에 대한 설명이 아직 준비되지 않았어요.</div>`;
  } else {
    body.innerHTML = `
      <div class="info-section-label">타겟 부위</div>
      <div>${guide.target}</div>
      ${renderBodyDiagramHTML(guide.target)}
      <div class="info-section-label">방법</div>
      <div>${guide.how}</div>
      <div class="info-section-label">팁</div>
      <div>${guide.tip}</div>
    `;
    activateBodyDiagramRegions(body);
  }

  document.getElementById("exercise-info-modal").classList.add("open");
}

function closeExerciseInfoModal() {
  document.getElementById("exercise-info-modal").classList.remove("open");
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
