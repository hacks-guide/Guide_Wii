# vWii용 d2x cIOS

:::details 기술 세부사항 (선택 사항)

cIOS (커스텀 IOS)는 커스텀 기능을 허용하도록 패치된 IOS입니다. [cIOS](https://wiibrew.org/wiki/Custom_IOS)는 완전한 하드웨어 접속을 제공하는 AHBPROT로 대체되었지만 여전히 유용한 응용 프로그램을 제공합니다. 예를 들어 이를 통해 SaveGame Manager GX와 같은 홈브류 제품과 함께 USB Loader GX 및 WiiFlow와 같은 USB 로더의 기능을 사용할 수 있습니다. 원하면 이 과정을 건너뛸 수 있지만, 일반적으로 이 과정은 단점이 거의 없거나 전혀 없이 Wii의 기능을 확장해줍니다.

:::

::: warning

이 가이드는 Wii U 사용자를 대상으로 합니다.

Wii가 있다면 대신 [이 가이드](cios)를 따릅니다.

Wii 미니가 있다면 대신 [이 가이드](cios-mini)를 따릅니다.

:::

::: warning

vWii에 Wii/Wii 미니 IOS나 시스템 메뉴를 설치하려고 하지 마세요. 그렇게 하면 콘솔이 [벽돌](bricks#ios-brick)될 가능성이 높습니다.

:::

## 요구 사항

- vWii에 홈브류 채널이 설치된 Wii U
- SD 카드
- [d2x cIOS 설치 프로그램](/assets/files/d2x_cIOS_Installer-vWii.zip).

::: warning

SD 카드를 사용하는 경우 잠금 스위치가 잠금 해제 위치에 있는지 확인합니다. 그렇지 않으면 설치 프로그램에서 올바른 옵션을 선택할 수 없습니다.

:::

## 지침

### 섹션 I - 설치

1. d2x-cios-installer `.zip` 파일의 `apps` 폴더를 SD 카드의 루트에 복사합니다.
2. PC에서 SD 카드를 꺼내 Wii U에 연결합니다.
3. Wii U의 전원을 켜고 vWii를 실행합니다.
4. 홈브류 채널을 시작합니다.
5. d2x cIOS 설치 프로그램을 실행합니다.
6. 다음 사항에 맞게 모든 것을 설정합니다:
   - cIOS 선택: `d2x-v11-beta1-vWii`
   - cIOS 기반 선택: `56`
   - cIOS 기반 선택: `249`
7. `A` 버튼을 눌러 설치합니다.
8. 다음 사항에 맞게 모든 것을 설정합니다:
   - cIOS 선택: `d2x-v11-beta1-vWii`
   - cIOS 기반 선택: `57`
   - cIOS 기반 선택: `250`
9. `A` 버튼을 눌러 설치합니다.
10. 다음 사항에 맞게 모든 것을 설정합니다:
    - cIOS 선택: `d2x-v11-beta1-vWii`
    - cIOS 기반 선택: `58`
    - cIOS 기반 선택: `251`
11. `A` 버튼을 눌러 설치합니다.
12. `B` 버튼을 눌러 나갑니다.

- 3 개의 cIOS를 모두 완료한 후 B 버튼을 눌러 홈브류 채널로 돌아갑니다.

::: tip

[설정 마무리](vwii-finalizing-setup)를 계속하기

:::
