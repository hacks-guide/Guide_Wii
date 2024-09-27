# LetterBomb

LetterBomb은 Wii 메시지 보드를 사용하여 트리거되는 Wii용 취약점 공격입니다.

::: info

For instructions on how to format your SD card correctly, please see [this guide](https://wiki.hacks.guide/wiki/Formatting_an_SD_card). It is highly recommended to check it due to problems with formatting as FAT32.

:::

::: warning

Do NOT use any of the MAC address examples shown in this guide, as they will simply cause an error on the HackMii website. Use your own!

:::

## 필요한 것

- An SD card formatted as FAT32 that is 32GB or less
- 시스템 메뉴 4.3의 Wii
- A Windows/MacOS/Linux computer with an Internet connection

## 진행 방법

1. 콘솔의 전원을 켜 주세요.

2. Go to `Wii Settings`.

3. Take note in the top right corner of the letter next to the system version.

   - This letter corresponds to your system menu region, which you will need to know for the corresponding steps.
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

16. 그런 다음 HackMii 설치 프로그램을 다운로드하고 로드합니다.

![](/images/exploits/letterbomb/LetterBomb-Wii.png)

::: tip

[Continue to Homebrew Channel and BootMii Installation](hbc)

:::
