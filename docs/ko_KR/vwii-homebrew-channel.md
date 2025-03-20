# vWii 개조 가이드

이 페이지에서는 vWii를 개조하는 과정을 안내합니다.

## SD 준비

::: info

과거에 Wii U를 해킹한 적이 있다면, 이 과정에 동일한 SD 카드를 사용할 수 있습니다.

:::

::: info

아직 하지 않았다면 [낸드 백업](https://wiiu.hacks.guide/#/aroma/nand-backup)을 했고 Wii ​​U에 [아로마 환경](https://aroma.foryour.cafe/)이 설치되어 있는지 확인합니다.

그렇지 않으면 [아로마 설치](https://wiiu.hacks.guide/#/aroma/getting-started) 또는 [Wii U 측을 개조하지 않고 vWii 개조](wiiu-nand-dumper)으로 진행합니다.

:::

## 요구 사항

- 개조된 Wii U
- [아로마 환경](https://aroma.foryour.cafe/)
- [Compat Title 설치 프로그램](https://hb-app.store/wiiu/CompatTitleInstaller)의 최신 릴리스입니다.
- (선택 사항) [향상된 vWii 아로마 플러그인](https://hb-app.store/wiiu/evWii)

::: warning

evWii 아로마 플러그인이 설치되지 않았고 홈브류 앱이 멈췄을 때 Wii U를 끌 수 있는 유일한 방법은 전원 코드를 뽑는 것입니다. 어떤 경우에는 전원 코드를 뽑으면 메모리가 손상될 수 있으므로 플러그인을 설치하는 것이 좋습니다.

:::

## 지침

### 섹션 I - 파일

1. Wii U의 SD 카드를 PC에 연결합니다.
2. `CompatTitleInstaller.zip` 파일의 내용을 SD 카드의 루트에 복사합니다.
3. `evWii.zip` 파일의 내용을 SD 카드의 루트에 복사합니다.

### 섹션 II - 홈브류 채널 설치

1. [아로마](https://wiiu.hacks.guide/#/aroma/finalizing-setup)를 부팅합니다.
2. Wii U 메뉴에서 vWii Compat 설치 프로그램을 실행합니다.
3. `A` 버튼을 눌러 홈브류 채널을 설치하고 `설치 성공`이 나올 때까지 기다립니다. 그런 다음 홈 버튼을 눌러 Wii U 메뉴로 돌아갑니다.
4. vWii (Wii 메뉴 아이콘)를 실행합니다.
 - 설치가 성공적으로 완료되면 Wii 메뉴에 홈브류 채널이 표시됩니다.

## 필수 읽기

이제 홈브류 채널을 사용하여 Wii 홈브류 앱을 실행할 수 있습니다.

참고: SD 카드나 USB 드라이브에 Wii 홈브류 응용 프로그램을 설치할 때 폴더 구조는 다음과 같아야 합니다:

```
💾 SD 카드
 ┗ 📁 apps
   ┣ 📁 <AppName1>
   ┃ ┣ 📄 boot.dol
   ┃ ┣ 📄 meta.xml
   ┃ ┗ 📄 icon.png
   ┗ 📁 <AppName2>
     ┣ 📄 boot.dol
     ┣ 📄 meta.xml
     ┗ 📄 icon.png
```

`AppName1`과 `AppName2`는 플레이스홀더 이름입니다. `apps` 폴더 자체 내에 여러 개의 `apps` 폴더를 중첩하지 마세요.
`wiiu` 폴더 내의 `apps` 폴더와 SD 카드 루트의 `apps` 폴더를 혼동하지 마세요.

::: tip

[Priiloader 설치](priiloader)를 계속합니다.

:::
