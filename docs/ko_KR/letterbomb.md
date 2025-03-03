# LetterBomb

LetterBomb은 Wii 메시지 보드를 사용하여 트리거되는 Wii용 취약점 공격입니다.

::: info

SD 카드를 올바르게 포맷하는 방법에 대한 지침은 [이 가이드](https://wiki.hacks.guide/wiki/Formatting_an_SD_card)를 참조합니다. FAT32로 포맷하면 문제가 발생할 수 있으므로 확인하는 것이 좋습니다.

:::

::: warning

이 가이드에 표시된 MAC 주소 예시를 사용하지 마십시오. 그렇지 않으면 HackMii 웹사이트에서 오류가 발생할 뿐입니다. 여러분의 것을 사용하세요!

:::

## 요구 사항

- 32GB 이하 FAT32로 포맷된 SD 카드
- 시스템 메뉴 4.3의 Wii
- 인터넷 연결이 가능한 윈도우/맥OS/리눅스 컴퓨터

## 지침

1. 콘솔의 전원을 켭니다.

2. `Wii 설정`으로 갑니다.

3. 시스템 버전 옆에 있는 글자의 오른쪽 상단에 적혀 있는 내용을 참고하세요.

   - 이 문자는 여러분의 시스템 메뉴 지역에 해당하며, 해당 단계를 진행하기 위해 해당 시스템 메뉴 지역을 알아야 합니다.
   - 또한, 시스템 메뉴 버전 4.3을 사용하고 있는지 확인합니다.

   ![](/images/wii/SystemMenuVersion.png)

4. `인터넷` > `콘솔 정보`로 이동합니다.

5. 전체 MAC 주소를 기록해 봅니다.

   ![](/images/wii/MacAddress.png)

6. 컴퓨터에서 브라우저를 열고 [HackMii 웹사이트](https://please.hackmii.com/)로 이동합니다.

7. Visit <a href="https://please.hackmii.com/">please.hackmii.com</a>, input your Wii MAC and region, ensure <code>Bundle the HackMii Installer for me!</code> is checked, and cut either wire.

8. `HackMii 설치 프로그램을 나에게 번들로 제공!`이 체크되어 있는지 확인합니다.

9. 두 개의 전선 중 하나를 자릅니다.

   ![](/images/exploits/letterbomb/LetterBomb-PC.png)

10. Extract the contents of the downloaded ZIP to the root of your SD card.

11. LetterBomb `.zip`에서 `private` 폴더와 `boot.elf` 파일을 SD 카드의 루트로 복사합니다.

12. Extract the contents of the downloaded ZIP to the root of your SD card.
    - SD 카드는 Wii 전면에 있는 SD 카드 슬롯에 연결해야 합니다. Using a USB adapter plugged into the Wii's USB port will not work.

13. Take out your SD card and insert it in your Wii.

14. On your Wii, return to the Wii Menu and then open the Wii Message Board.

15. Load the red letter with a bomb icon.
    - Wii에 표시된 날짜가 정확한지 확인합니다. 그렇지 않으면 편지를 찾을 수 없을 수도 있습니다.
    - In various scenarios, you may need to look at the previous or next day to find it.
    - 빨간색 글자가 보이지 않으면 `데이터 관리`의 SD 카드 섹션에 오류가 표시되었는지 확인합니다. 그렇다면 SD 카드 포맷이나 Wii의 SD 카드 리더에 문제가 있을 수 있습니다.
    - If your Wii freezes after clicking on the letter, you probably chose the wrong region when downloading the exploit. Redo Step 2 and select the correct region.
    - 모든 것이 올바르고 프리징 현상이 나타나면 작동할 때까지 계속 시도합니다.

16. If the exploit was successful, your device will have loaded the HackMii Installer.

![](/images/exploits/letterbomb/LetterBomb-Wii.png)

::: tip

[홈브류 채널 및 BootMii 설치 계속하기](hbc)

:::
