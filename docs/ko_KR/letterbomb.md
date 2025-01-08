# LetterBomb

LetterBomb은 Wii 메시지 보드를 사용하여 트리거되는 Wii용 취약점 공격입니다.

::: info

For instructions on how to format your SD card correctly, please see [this guide](https://wiki.hacks.guide/wiki/Formatting_an_SD_card). It is highly recommended to check it due to problems with formatting as FAT32.

:::

::: warning

Do NOT use any of the MAC address examples shown in this guide, as they will simply cause an error on the HackMii website. Use your own!

:::

## Requirements

- An SD card formatted as FAT32 that is 32GB or less
- 시스템 메뉴 4.3의 Wii
- A Windows/MacOS/Linux computer with an Internet connection

## Instructions

1. Power on your console.

2. `Wii 설정`으로 갑니다.

3. 시스템 버전 옆에 있는 글자의 오른쪽 상단에 적혀 있는 내용을 참고하세요.

   - 이 문자는 여러분의 시스템 메뉴 지역에 해당하며, 해당 단계를 진행하기 위해 해당 시스템 메뉴 지역을 알아야 합니다.
   - Also, ensure that you are on System Menu version 4.3.

   ![](/images/wii/SystemMenuVersion.png)

4. Navigate to `Internet` > `Console Information`.

5. Take note of your FULL MAC address.

   ![](/images/wii/MacAddress.png)

6. On your computer, open the browser and go to [the HackMii website](https://please.hackmii.com/).

7. Visit <a href="https://please.hackmii.com/">please.hackmii.com</a>, input your Wii MAC and region, ensure <code>Bundle the HackMii Installer for me!</code> is checked, and cut either wire.

8. Ensure `Bundle the HackMii Installer for me!` is checked.

9. Cut either wire.

   ![](/images/exploits/letterbomb/LetterBomb-PC.png)

10. Extract the contents of the downloaded ZIP to the root of your SD card.

11. Copy the `private` folder and the `boot.elf` file from the LetterBomb `.zip` to the root of your SD card.

12. Extract the contents of the downloaded ZIP to the root of your SD card.
    - SD 카드는 Wii 전면에 있는 SD 카드 슬롯에 연결해야 합니다. Using a USB adapter plugged into the Wii's USB port will not work.

13. Take out your SD card and insert it in your Wii.

14. On your Wii, return to the Wii Menu and then open the Wii Message Board.

15. Load the red letter with a bomb icon.
    - Ensure the date on your Wii is correct, otherwise you might be unable to find the letter.
    - In various scenarios, you may need to look at the previous or next day to find it.
    - If you don't see the red letter, check if any errors appear in the SD card section of `Data Management`. If any do, there may be an issue with the SD card format or the Wii’s SD card reader.
    - If your Wii freezes after clicking on the letter, you probably chose the wrong region when downloading the exploit. Redo Step 2 and select the correct region.
    - If all is correct and there is freezing, keep on trying until it works.

16. If the exploit was successful, your device will have loaded the HackMii Installer.

![](/images/exploits/letterbomb/LetterBomb-Wii.png)

::: tip

[Continue to Homebrew Channel and BootMii Installation](hbc)

:::
