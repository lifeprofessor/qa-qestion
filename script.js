// 소프트웨어 테스팅 용어집 데이터
const testingTerms = {
    basic: [
        {
            term: "테스팅",
            definition: "소프트웨어 제품과 관련 직업 산출물이 특정 요구명세를 만족하는지 결정하고, 목적에 부합하는지 입증하고 결함을 찾아내기 위해 해당 산출물을 계획, 준비, 평가하는 정적/동적인 모든 수명주기 활동으로 구성된 프로세스",
            extended: "테스팅은 단순히 버그를 찾는 것이 아니라, 품질을 보증하고 리스크를 줄이는 체계적인 활동입니다."
        },
        {
            term: "오류(Error)",
            definition: "부정확한 결과를 초래하는 인간의 활동",
            extended: "개발자가 코드를 잘못 작성하거나 요구사항을 잘못 이해할 때 발생합니다."
        },
        {
            term: "장애(Failure)",
            definition: "컴포넌트나 시스템이 예상된 인도(delivery)나 서비스 또는 예상 결과와 실제적인 편차를 보이는 것",
            extended: "사용자가 실제로 경험하는 문제로, 시스템이 기대한 대로 동작하지 않는 상황입니다."
        },
        {
            term: "결함",
            definition: "필요한 기능을 수행하지 못하도록 하는 컴포넌트나 시스템 상의 결점. 실행 중에 결함이 발생한 경우, 컴포넌트나 시스템의 장애를 야기할 수 있다",
            extended: "Bug라고도 불리며, 코드 내의 문제점으로 장애의 원인이 됩니다."
        },
        {
            term: "리스크(Risk)",
            definition: "미래에 부정적 결과로 끝날 수 있는 요소(영향력이나 발생가능성으로 표현됨)",
            extended: "프로젝트 리스크와 제품 리스크로 나누어 관리하며, 테스팅 전략 수립의 기초가 됩니다."
        },
        {
            term: "살충제 패러독스",
            definition: "같은 테스트 케이스를 가지고, 테스트를 계속해서 반복하는 경우 어느 시점부터는 더 이상 결함을 발견하지 못한다는 이론",
            extended: "지속적인 테스트 케이스 갱신과 다양한 테스트 기법 적용의 필요성을 시사합니다."
        }
    ],
    lifecycle: [
        {
            term: "V 모델",
            definition: "요구사항 명세부터 유지보수까지의 소프트웨어 개발 수명주기 활동을 기술한 프레임워크",
            extended: "각 개발 단계에 대응하는 테스트 레벨을 명확히 정의하여 체계적인 테스팅을 가능하게 합니다."
        },
        {
            term: "컴포넌트 테스팅",
            definition: "개별적인 소프트웨어 컴포넌트에 대한 테스트",
            extended: "단위 테스팅이라고도 하며, 가장 작은 테스트 가능한 소프트웨어 부분을 검증합니다."
        },
        {
            term: "통합 테스팅",
            definition: "통합된 컴포넌트나 시스템 간의 인터페이스와 상호작용에서의 결함을 중점적으로 찾는 테스팅",
            extended: "Big Bang, Top-down, Bottom-up, 샌드위치 등 다양한 통합 전략이 있습니다."
        },
        {
            term: "시스템 테스팅",
            definition: "명시된 요구사항을 만족하는지 확인하기 위해 통합된 시스템을 테스트하는 절차",
            extended: "전체 시스템의 기능적, 비기능적 요구사항을 실제 운영 환경과 유사한 조건에서 검증합니다."
        },
        {
            term: "인수 테스팅",
            definition: "시스템이 인수조건을 만족시키는지, 사용자, 고객 또는 다른 인가된 개체가 시스템을 인수할지 결정할 수 있도록 사용자의 필요, 요구, 그리고 비즈니스 프로세스를 고려하여 수행하는 공식적인 테스팅",
            extended: "알파, 베타, 계약 인수, 규정 인수, 운영 인수 테스팅 등으로 분류됩니다."
        }
    ],
    static: [
        {
            term: "정적 테스팅",
            definition: "리뷰 또는 정적 코드 분석과 같이 소프트웨어의 실행 없이 명세 또는 구현, 개발 단계에서 컴포넌트나 시스템을 테스팅하는 것",
            extended: "코드를 실행하지 않고 문서나 코드를 검토하여 결함을 찾는 방법입니다."
        },
        {
            term: "동적 테스팅",
            definition: "컴포넌트나 시스템 소프트웨어를 실행하면서 수행하는 테스팅",
            extended: "실제 소프트웨어를 실행하여 입력값에 대한 출력값을 확인하는 테스팅 방법입니다."
        },
        {
            term: "인스펙션",
            definition: "개발 표준 위반과 상위 레벨 개발 문서와의 불일치 등과 같은 결함을 발견하기 위해 문서를 눈으로 검사하는 리뷰의 한 종류",
            extended: "가장 공식적인 리뷰 형태로, 체크리스트와 정해진 역할을 바탕으로 체계적으로 진행됩니다."
        }
    ],
    design: [
        {
            term: "블랙박스 테스팅",
            definition: "테스트를 수행할 때 소프트웨어의 내부 구조나 작동 원리에 대해 사전 지식이 없는 상태에서 테스트 케이스를 설계하고 실행하는 방법론",
            extended: "명세 기반 테스팅이라고도 하며, 입력과 출력에만 집중하여 기능을 검증합니다."
        },
        {
            term: "화이트박스 테스팅",
            definition: "테스트를 수행할 때 내부 구조와 동작을 이해하여 테스트 케이스를 설계하는 방법론",
            extended: "구조 기반 테스팅이라고도 하며, 코드의 내부 로직을 기반으로 테스트 케이스를 설계합니다."
        },
        {
            term: "동등 분할",
            definition: "소프트웨어의 입력값을 몇 개의 동등한 그룹으로 나누고, 각 그룹에서 대표값을 선택하여 테스트하는 기법",
            extended: "각 분할은 동일한 방식으로 처리되므로, 하나의 대표값만 테스트해도 전체 분할을 커버할 수 있습니다."
        },
        {
            term: "경계값 분석",
            definition: "경계값에 기반하여 테스트 케이스를 설계하는 블랙박스 테스트 설계 기법",
            extended: "경계값과 그 주변값에서 오류가 자주 발생한다는 경험을 바탕으로 한 기법입니다."
        }
    ],
    management: [
        {
            term: "형상 관리",
            definition: "변경 프로세스에 기술 및 관리 차원의 지시와 감독을 적용하는 원칙",
            extended: "소프트웨어 개발 과정에서 산출물의 변경사항을 체계적으로 관리하는 활동입니다."
        },
        {
            term: "결함 관리",
            definition: "결함을 인지하고, 조사하고, 행동을 취해 처리하는 절차",
            extended: "결함의 발견부터 수정, 재테스트까지의 전체 생명주기를 관리하는 프로세스입니다."
        },
        {
            term: "독립성",
            definition: "객관적인 테스팅을 완수하기 위한 책임의 분리",
            extended: "개발자가 자신의 코드를 테스트하는 것보다 독립적인 테스터가 테스트하는 것이 더 효과적입니다."
        }
    ],
    tools: [
        {
            term: "테스트 도구",
            definition: "소프트웨어 테스트를 자동화하고 효율적으로 수행하기 위해 사용되는 소프트웨어",
            extended: "테스트 실행, 관리, 설계 지원 등 다양한 영역에서 테스트 효율성을 높이는 도구들입니다."
        },
        {
            term: "테스트 자동화",
            definition: "테스트 활동을 수행하거나 지원하는 소프트웨어 툴의 사용하여 테스팅 하는 것",
            extended: "반복적인 테스트 작업을 자동화하여 효율성을 높이고 인적 오류를 줄일 수 있습니다."
        },
        {
            term: "스텁(Stub)",
            definition: "골격만 있는 또는 특별한 목적의 소프트웨어 컴포넌트를 구현한 것",
            extended: "테스트 대상이 호출하는 하위 컴포넌트를 대체하는 가짜 객체입니다."
        }
    ]
};

// 전역 변수
let currentCards = [];
let currentCardIndex = 0;
let isFlipped = false;
let completedCards = new Set();
let studyMode = 'term-to-definition';

// DOM 요소
const flashcard = document.getElementById('flashcard');
const frontContent = document.getElementById('frontContent');
const backContent = document.getElementById('backContent');
const categorySelect = document.getElementById('category');
const studyModeSelect = document.getElementById('studyMode');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const markKnownBtn = document.getElementById('markKnownBtn');
const markUnknownBtn = document.getElementById('markUnknownBtn');
const shuffleBtn = document.getElementById('shuffleBtn');
const resetBtn = document.getElementById('resetBtn');
const totalCardsSpan = document.getElementById('totalCards');
const currentCardSpan = document.getElementById('currentCard');
const completedCardsSpan = document.getElementById('completedCards');
const progressFill = document.getElementById('progressFill');

// 초기화
function init() {
    loadCards('all');
    setupEventListeners();
    updateDisplay();
}

// 카드 로드
function loadCards(category) {
    currentCards = [];
    
    if (category === 'all') {
        Object.values(testingTerms).forEach(categoryTerms => {
            currentCards.push(...categoryTerms);
        });
    } else {
        const categoryMap = {
            'basic': 'basic',
            'lifecycle': 'lifecycle', 
            'static': 'static',
            'design': 'design',
            'management': 'management',
            'tools': 'tools'
        };
        
        if (testingTerms[categoryMap[category]]) {
            currentCards = [...testingTerms[categoryMap[category]]];
        }
    }
    
    currentCardIndex = 0;
    completedCards.clear();
    updateDisplay();
    updateStats();
}

// 이벤트 리스너 설정
function setupEventListeners() {
    flashcard.addEventListener('click', flipCard);
    flashcard.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            flipCard();
        }
    });
    
    prevBtn.addEventListener('click', previousCard);
    nextBtn.addEventListener('click', nextCard);
    markKnownBtn.addEventListener('click', markAsKnown);
    markUnknownBtn.addEventListener('click', markAsUnknown);
    shuffleBtn.addEventListener('click', shuffleCards);
    resetBtn.addEventListener('click', resetProgress);
    
    categorySelect.addEventListener('change', (e) => {
        loadCards(e.target.value);
    });
    
    studyModeSelect.addEventListener('change', (e) => {
        studyMode = e.target.value;
        updateDisplay();
    });
    
    // 키보드 단축키
    document.addEventListener('keydown', (e) => {
        if (e.target.tagName === 'SELECT') return;
        
        switch(e.key) {
            case 'ArrowLeft':
                e.preventDefault();
                previousCard();
                break;
            case 'ArrowRight':
                e.preventDefault();
                nextCard();
                break;
            case 'Enter':
            case ' ':
                if (e.target !== flashcard) {
                    e.preventDefault();
                    flipCard();
                }
                break;
            case '1':
                markAsKnown();
                break;
            case '2':
                markAsUnknown();
                break;
        }
    });
}

// 이 함수는 아래의 향상된 버전으로 대체되었습니다.

// 디스플레이 업데이트
function updateDisplay() {
    if (currentCards.length === 0) {
        frontContent.textContent = '선택된 카테고리에 카드가 없습니다';
        backContent.textContent = '';
        return;
    }
    
    const currentCard = currentCards[currentCardIndex];
    isFlipped = false;
    flashcard.classList.remove('flipped');
    
    // 학습 모드에 따라 앞뒤 내용 결정
    let frontText, backText;
    
    switch(studyMode) {
        case 'definition-to-term':
            frontText = currentCard.definition;
            backText = currentCard.term + (currentCard.extended ? '\n\n💡 ' + currentCard.extended : '');
            break;
        case 'random':
            const isTermFirst = Math.random() < 0.5;
            if (isTermFirst) {
                frontText = currentCard.term;
                backText = currentCard.definition + (currentCard.extended ? '\n\n💡 ' + currentCard.extended : '');
            } else {
                frontText = currentCard.definition;
                backText = currentCard.term + (currentCard.extended ? '\n\n💡 ' + currentCard.extended : '');
            }
            break;
        default: // term-to-definition
            frontText = currentCard.term;
            backText = currentCard.definition + (currentCard.extended ? '\n\n💡 ' + currentCard.extended : '');
    }
    
    frontContent.textContent = frontText;
    backContent.innerHTML = backText.replace(/\n\n/g, '<br><br>');
    
    // 버튼 상태 업데이트
    prevBtn.disabled = currentCardIndex === 0;
    nextBtn.disabled = currentCardIndex === currentCards.length - 1;
    
    // 완료된 카드 표시
    if (completedCards.has(currentCardIndex)) {
        flashcard.style.opacity = '0.7';
    } else {
        flashcard.style.opacity = '1';
    }
}

// 이전 카드
function previousCard() {
    if (currentCardIndex > 0) {
        currentCardIndex--;
        updateDisplay();
        updateStats();
    }
}

// 다음 카드
function nextCard() {
    if (currentCardIndex < currentCards.length - 1) {
        currentCardIndex++;
        updateDisplay();
        updateStats();
    }
}

// 이 함수들은 아래의 개선된 버전으로 대체되었습니다.

// 카드 섞기
function shuffleCards() {
    for (let i = currentCards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [currentCards[i], currentCards[j]] = [currentCards[j], currentCards[i]];
    }
    currentCardIndex = 0;
    updateDisplay();
    updateStats();
}

// 진행상황 초기화
function resetProgress() {
    completedCards.clear();
    currentCardIndex = 0;
    updateDisplay();
    updateStats();
}

// 이 함수는 위의 향상된 updateStats로 대체되었습니다.

// 새로 추가된 DOM 요소들
const completionRateSpan = document.getElementById('completionRate');
const guideToggle = document.getElementById('guideToggle');
const guideContent = document.getElementById('guideContent');
const achievement = document.getElementById('achievement');
const achievementMessage = document.getElementById('achievementMessage');

// 키보드 가이드 토글
function toggleKeyboardGuide() {
    guideContent.classList.toggle('show');
}

// 성취도 알림 표시
function showAchievement(message, duration = 3000) {
    achievementMessage.textContent = message;
    achievement.classList.add('show');
    
    setTimeout(() => {
        achievement.classList.remove('show');
    }, duration);
}

// 향상된 통계 업데이트
function updateStats() {
    totalCardsSpan.textContent = currentCards.length;
    currentCardSpan.textContent = currentCards.length > 0 ? currentCardIndex + 1 : 0;
    completedCardsSpan.textContent = completedCards.size;
    
    // 완료율 계산 및 표시
    const completionRate = currentCards.length > 0 ? Math.round((completedCards.size / currentCards.length) * 100) : 0;
    completionRateSpan.textContent = completionRate + '%';
    
    // 진행률 바 업데이트 (부드러운 애니메이션)
    const progress = currentCards.length > 0 ? (completedCards.size / currentCards.length) * 100 : 0;
    progressFill.style.width = progress + '%';
    
    // Progress bar aria 속성 업데이트
    const progressBar = document.querySelector('.progress-bar');
    progressBar.setAttribute('aria-valuenow', progress);
    
    // 성취도 체크
    checkAchievements();
}

// 성취도 시스템
function checkAchievements() {
    const completedCount = completedCards.size;
    const totalCount = currentCards.length;
    const completionRate = totalCount > 0 ? (completedCount / totalCount) * 100 : 0;
    
    // 첫 번째 카드 완료
    if (completedCount === 1 && !localStorage.getItem('achievement_first_card')) {
        showAchievement('🎉 첫 번째 카드를 완료했습니다!');
        localStorage.setItem('achievement_first_card', 'true');
    }
    
    // 10개 카드 완료
    if (completedCount === 10 && !localStorage.getItem('achievement_ten_cards')) {
        showAchievement('🔥 10개 카드를 완료했습니다! 대단해요!');
        localStorage.setItem('achievement_ten_cards', 'true');
    }
    
    // 50% 완료
    if (completionRate >= 50 && completionRate < 100 && !localStorage.getItem('achievement_half')) {
        showAchievement('🌟 절반을 완료했습니다! 계속 화이팅!');
        localStorage.setItem('achievement_half', 'true');
    }
    
    // 100% 완료
    if (completionRate === 100 && !localStorage.getItem('achievement_complete')) {
        showAchievement('🏆 모든 카드를 완료했습니다! 축하합니다!', 5000);
        localStorage.setItem('achievement_complete', 'true');
        
        // 축하 효과
        createConfetti();
    }
}

// 축하 효과 (간단한 파티클)
function createConfetti() {
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = '-10px';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57'][Math.floor(Math.random() * 5)];
        confetti.style.transform = 'rotate(' + Math.random() * 360 + 'deg)';
        confetti.style.animation = 'confetti-fall 3s ease-out forwards';
        confetti.style.zIndex = '9999';
        confetti.style.pointerEvents = 'none';
        
        document.body.appendChild(confetti);
        
        setTimeout(() => {
            confetti.remove();
        }, 3000);
    }
}

// 향상된 키보드 이벤트
function setupEnhancedKeyboardEvents() {
    document.addEventListener('keydown', (e) => {
        // 포커스가 입력 요소에 있을 때는 단축키 비활성화
        if (e.target.tagName === 'SELECT' || e.target.tagName === 'INPUT') return;
        
        switch(e.key.toLowerCase()) {
            case 'arrowleft':
            case 'a':
                e.preventDefault();
                previousCard();
                break;
            case 'arrowright':
            case 'd':
                e.preventDefault();
                nextCard();
                break;
            case 'enter':
            case ' ':
                if (e.target !== flashcard) {
                    e.preventDefault();
                    flipCard();
                }
                break;
            case '1':
                e.preventDefault();
                markAsKnown();
                break;
            case '2':
                e.preventDefault();
                markAsUnknown();
                break;
            case 's':
                e.preventDefault();
                shuffleCards();
                break;
            case 'r':
                e.preventDefault();
                resetProgress();
                break;
            case 'h':
            case '?':
                e.preventDefault();
                toggleKeyboardGuide();
                break;
            case 'escape':
                e.preventDefault();
                guideContent.classList.remove('show');
                achievement.classList.remove('show');
                break;
        }
    });
}

// 향상된 카드 뒤집기 애니메이션
function flipCard() {
    if (currentCards.length === 0) return;
    
    isFlipped = !isFlipped;
    flashcard.classList.toggle('flipped');
    
    // 카드 뒤집기 시 부드러운 진동 효과 (지원되는 브라우저에서)
    if (navigator.vibrate) {
        navigator.vibrate(50);
    }
}

// 향상된 초기화 함수
function enhancedInit() {
    loadCards('all');
    setupEventListeners();
    setupEnhancedKeyboardEvents();
    updateDisplay();
    
    // 키보드 가이드 이벤트
    guideToggle.addEventListener('click', toggleKeyboardGuide);
    
    // 가이드 외부 클릭 시 닫기
    document.addEventListener('click', (e) => {
        if (!guideToggle.contains(e.target) && !guideContent.contains(e.target)) {
            guideContent.classList.remove('show');
        }
    });
    
    // 성취도 알림 클릭 시 닫기
    achievement.addEventListener('click', () => {
        achievement.classList.remove('show');
    });
    
    // 로컬 스토리지에서 진행상황 복원 (선택적)
    restoreProgress();
}

// 진행상황 저장
function saveProgress() {
    const progressData = {
        completedCards: Array.from(completedCards),
        currentCategory: categorySelect.value,
        studyMode: studyMode
    };
    localStorage.setItem('study_progress', JSON.stringify(progressData));
}

// 진행상황 복원
function restoreProgress() {
    const savedProgress = localStorage.getItem('study_progress');
    if (savedProgress) {
        try {
            const progressData = JSON.parse(savedProgress);
            
            // 카테고리와 모드 복원
            categorySelect.value = progressData.currentCategory || 'all';
            studyModeSelect.value = progressData.studyMode || 'term-to-definition';
            studyMode = progressData.studyMode || 'term-to-definition';
            
            // 완료된 카드들 복원
            if (progressData.completedCards) {
                completedCards = new Set(progressData.completedCards);
            }
            
            loadCards(categorySelect.value);
        } catch (error) {
            console.log('진행상황 복원 중 오류:', error);
        }
    }
}

// 개선된 markAsKnown 함수
function markAsKnown() {
    const wasEmpty = completedCards.size === 0;
    completedCards.add(currentCardIndex);
    updateDisplay();
    updateStats();
    saveProgress();
    
    // 자동으로 다음 카드로 이동
    setTimeout(() => {
        if (currentCardIndex < currentCards.length - 1) {
            nextCard();
        }
    }, 500);
}

// 개선된 markAsUnknown 함수
function markAsUnknown() {
    completedCards.delete(currentCardIndex);
    updateDisplay();
    updateStats();
    saveProgress();
    
    // 자동으로 다음 카드로 이동
    setTimeout(() => {
        if (currentCardIndex < currentCards.length - 1) {
            nextCard();
        }
    }, 500);
}

// CSS 애니메이션 추가
const style = document.createElement('style');
style.textContent = `
    @keyframes confetti-fall {
        0% {
            transform: translateY(-100vh) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// 페이지 로드 시 향상된 초기화
document.addEventListener('DOMContentLoaded', enhancedInit); 