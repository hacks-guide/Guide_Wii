# 복원 모드

복원 모드는 하드 개조와 수동 낸드 프로그래밍에 의존하기 전에 벽돌에서 Wii 콘솔을 복구하는 마지막 방법입니다. 이 모드는 닌텐도 직원이 공장에서 특수 동글을 사용하여 접속했지만, 접속에 필요한 입력은 게임큐브 컨트롤러로 쉽게 복제할 수 있습니다. 기본적으로 복원 모드는 Wii 메뉴를 디스크에서 프로그램을 실행할 수 있는 상태로 만듭니다.

## 복원 모드 작동 방식

시스템 메뉴 버전 2.1 이상에서 복원 모드로 부팅하면 화면 오른쪽 하단에 버전 번호가 표시되고, 디스크를 넣을 때까지 화면이 유휴 상태로 유지됩니다. 기본적으로 복구 모드는 두 가지 유형의 디스크만 부팅합니다:

- 타이틀 ID가 0이나 1과 같은 숫자로 시작하는 디스크 - 자동 부팅 디스크입니다. 모든 판매용 게임 디스크는 **자동 부팅 디스크가 아닙니다.** 대신 문자로 시작합니다.
- 낸드에 있는 것보다 높은 버전의 유효한 업데이트 파티션이 있는 판매용 게임 디스크입니다.

Priiloader를 사용하면 이런 검사를 우회할 수 있으며, 이를 통해 복구 모드에서 Wii에 삽입된 모든 디스크를 부팅할 수 있습니다. 유감스럽게도, 이미 Priiloader에 접속할 수 있다면 복원 모드를 사용할 필요가 전혀 없습니다. 복원 모드에서 홈브류 앱을 부팅하여 문제를 해결할 수 있기 때문입니다. 즉, 복원 모드를 사용하는 것이 유일한 방법인 경우 디스크 검사를 우회하려면 드라이브칩이 필요합니다. 어떤 식으로든 이 검사를 우회할 수 있다면 아래 지침에 따라 복원 모드에서 시작하여 HackMii 설치 프로그램을 실행할 수 있습니다.

## 복원 모드 접속 및 사용

### 요구 사항

- 게임큐브 컨트롤러
- 이전에 Priiloader로 진단 디스크 검사를 제거했거나 드라이브 칩이 있는 경우:
    - 대난투 스매시 브라더스X ([Smash Stack](legacy-exploits#smash-stack)) 또는
    - 콘솔에 현재 익스플로잇 게임이 저장된 다른 익스플로잇 된 Wii 게임 ([레거시 익스플로잇](legacy-exploits) 참조) 또는
    - 모든 판매용 게임 및 [Bluebomb](bluebomb) 익스플로잇에 대한 접속
- 오리지널 개정판 Wii(Family Edition Wii는 케임큐브 포트가 없기 때문에 작동하지 않음 - 그렇지 않으면 일부를 납땜해야 함)
- 인터넷 연결이 가능한 윈도우/맥OS/리눅스 PC
- FAT32로 포맷된 SD 카드

### 준비

::: warning

게임큐브 컨트롤러의 4 개 십자 패드 버튼을 모두 누르려면 케이스를 분해해야 할 수도 있습니다.

:::

우선, Wii가 복원 모드로 부팅될 수 있는지 확인합니다. 여기에는 게임큐브 컨트롤러를 가져와 Wii의 네 번째 컨트롤러 포트에 연결하고 부팅 시 4 개의 십자 패드 버튼을 동시에 누르고 있어야 합니다. 모든 것이 정상적으로 진행되면 위와 비슷한 화면이 나올 것입니다. 위에서 설명한 대로 시스템 메뉴 버전이 2.0 이하인 경우 버전 번호가 전혀 표시되지 않으며 디스크로 부팅할 수 없습니다.

### 방법 I - Smash Stack으로 복원 메뉴

1. 대난투 스매시 브라더스X 게임 디스크가 있으면 [Smash Stack](legacy-exploits#smash-stack)을 사용하여 SD 카드에서 HackMii 설치 프로그램을 로드할 수 있습니다.
2. 복원 모드로 부팅하고 대난투 스매시 브라더스X 게임 디스크를 넣습니다. 이 시점에서 부팅이 이루어져야 합니다.
3. Wiibrew에서 익스플로잇에 대한 지침을 따릅니다.

### 방법 2 - 게임 익스플로잇 저장을 위한 복원 메뉴

1. [레거시 익스플로잇](legacy-exploits)에 나열된 저장 게임 익스플로잇을 위해 Wii에 이미 저장 게임이 있는 경우, 해당 익스플로잇을 사용하여 HackMii 설치 프로그램을 로드할 수 있습니다.
2. 복원 모드로 부팅하고 해당 게임 디스크를 넣으세요. 이 시점에서 부팅이 이루어져야 합니다.
3. Wiibrew에서 익스플로잇에 대한 지침을 따릅니다.

### 방법 III - Bluebomb에 대한 복원 메뉴

Bluebomb을 복원 수단으로 사용할 수도 있습니다. 현재 우리는 아직 이 섹션에 대한 지침을 작성 중입니다.

::: info

이 시점에서 홈브류 채널을 설치하고 SD 카드에서 홈브류에 접속하여 벽돌을 되돌릴 수 있어야 합니다.

:::

::: tip

[벽돌로 돌아가기](bricks)

:::

::: tip

[여기를 눌러 사이트 색인으로 돌아갑니다.](site-navigation)

:::
