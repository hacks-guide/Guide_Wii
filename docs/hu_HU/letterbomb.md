# LetterBomb

A LetterBomb egy exploit a Wii-hoz ami a Wii Message Board-on keresztül kerül kiváltásra.

::: info

For instructions on how to format your SD card correctly, please see [this guide](https://wiki.hacks.guide/wiki/Formatting_an_SD_card). Erősen ajánlott, hogy ellenőrizd, a FAT32 formázás problémái miatt.

:::

::: warning

NE használd a példákban megadott MAC cmeket, mert azok simán hibát okoznak a HackMii weboldalon. Használd a sajátod!

:::

## Követelmények

- Egy 32GB vagy annál kisebb FAT32-re formázott SD kártya
- Egy Wii System Menu 4.3 verzióval
- Egy Windowst/macOS-t/Linuxot futtató számítógép internet-hozzáféréssel

## Lépések

1. Kapcsold be a konzolod.

2. Menj a `Wii Settings`-hez.

3. Take note in the top right corner of the letter next to the system version.

   - This letter corresponds to your system menu region, which you will need to know for the corresponding steps.
   - Továbbá biztosítsd, hogy System Menu 4.3-on vagy.

   ![](/images/wii/SystemMenuVersion.png)

4. Navigate to `Internet` > `Console Information`.

5. Jegyezd fel a FULL MAC address-ed.

   ![](/images/wii/MacAddress.png)

6. On your computer, open the browser and go to [the HackMii website](https://please.hackmii.com/).

7. Add meg a Wii-od MAC-jét és régióját.

8. Ensure `Bundle the HackMii Installer for me!` is checked.

9. Vágd el mindkét drótot.

   ![](/images/exploits/letterbomb/LetterBomb-PC.png)

10. Csatlakoztasd az SD kártyád a számítógépedhez.

11. Copy the `private` folder and the `boot.elf` file from the LetterBomb `.zip` to the root of your SD card.

12. Helyezd vissza az SD kártyád a konzolodba.
    - Az SD kártyát a SD kártya slot-ba kell belerakni a Wii elején. Egy USB > SD kártya átalakító az Wii USB portjába dugva nem fog működni.

13. A Wii-odon térj vissza a Wii Menu-be.

14. Indítsd el a Wii Message Board-ot.

15. Nyisd meg a piros levelet a bombával.
    - Biztosítsd, hogy a Wii-odon a dátum helyes, különben nem fogod megtalálni a levelet.
    - Bizonyos esetekben szükséges lehet a holnapi vagy a tegnapi levelek ellenőrzése is a levél megtalálásához.
    - If you don't see the red letter, check if any errors appear in the SD card section of `Data Management`. Ha hibák vannak itt, lehet, hogy probléma van at SD kártya formátumával vagy a Wii SD kártya olvasójával.
    - Ha a Wii-od lefagy a levélre kattintás után, valószíműleg rossz system menu regiót válsztottál a LetterBomb-hoz. Menj vissza a 2. lépshez, és ellenőriz, hogy a jó régiót választottad-e.
    - Ha minden megfelelő és van fagyás, próbáld addig, amíg nem sikerül.

16. If the exploit was successful, your device will have loaded the HackMii Installer.

![](/images/exploits/letterbomb/LetterBomb-Wii.png)

::: tip

[Tovább a Homebrew Channel és BootMii telepítéséhez](hbc)

:::
