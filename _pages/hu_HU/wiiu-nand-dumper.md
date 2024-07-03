---
title: vWii Modding útmutató
---

{% include toc title="Tartalomjegyzék" %}

This page will guide you through the process of modding your vWii without modding the Wii U side. Wii U custom firmware will be used for this guide, however, nothing will actually be installed onto the Wii U side itself. You can also visit the [legacy exploits](legacy-exploits) page for more exploits that work on the vWii.

If your Wii U side is already modded, proceed to [Installing the Homebrew Channel](vwii-homebrew-channel)
{: .notice--info}

Your SD Card will need to be formatted as FAT32. If your SD Card is not formatted to FAT32, use [GUIFormat](http://ridgecrop.co.uk/index.htm?guiformat.htm) with 32k (32768) Allocation unit size to format it. **Do not** label the SD Card as `wiiu` or it will cause issues with homebrew.
{: .notice--info}

### Követelmények

- A legutolsó fájlok az [Aroma for your café](https://aroma.foryour.cafe/) oldalról.
  - Olvasd el a megelőző lépéseket, majd pipáld be mind a négy dobozt.
  - Duplán ellenőrizd, hogy a nanddumper van kiválasztva.
  - Kattints a `Download Payloads`-ra.
  - Kattints a `Download Base Aroma`-ra.
- A [Compat Title Installer](https://hb-app.store/wiiu/CompatTitleInstaller) legutolsó kiadása.

### Útmutató

#### I. rész - SD kártya előkészítés

1. Helyezd be a Wii U-d SD kártyáját a PC-dbe.
2. Másold a tartalmát a letöltött Aroma _`.zip`_ fájlnak az SD kártyád gyökerébe.
3. Másold a tartalmát a `CompatTitleInstaller.zip` fájlnak az SD kártyád gyökerébe.

SD kártya kiosztás

<details id="Aroma Layout" class="notice--info" markdown="1">
<summary><a>Kattints ide végső SD kártya kiosztás megtekintéséhez.</a></summary>

```
💾sd:
 ┗ 📁 wiiu
   ┣ 📁 apps
   ┃ ┣ 📄 AromaUpdater.wuhb
   ┃ ┗ 📄 PayloadLoaderInstaller.wuhb
   ┣ 📁 environments
   ┃ ┗ 📁 aroma
   ┃   ┣ 📁 modules
   ┃   ┃ ┗ 📁 setup
   ┃   ┃   ┣ 📄 00_mocha.rpx
   ┃   ┃   ┣ 📄 10_wums_loader.rpx
   ┃   ┃   ┗ 📄 99_autoboot.rpx
   ┃   ┣ 📁 plugins
   ┃   ┃ ┣ 📄 AromaBasePlugin.wps
   ┃   ┃ ┣ 📄 drc_region_free.wps
   ┃   ┃ ┣ 📄 homebrew_on_menu.wps
   ┃   ┃ ┗ 📄 regionfree.wps
   ┃   ┗ 📄 root.rpx
   ┣ 📁 payloads
   ┃ ┣ 📁 default
   ┃ ┃ ┗ 📁 payload.elf
   ┃ ┗ 📁 nanddumper
   ┃   ┗ 📄 payload.elf
   ┣ 📄 payload.rpx
   ┗ 📄 payload.elf
```

</details>

#### II. rész - Az exploit indítása

Biztosítsd, hogy a Wii U-dnak legyen internet hozzáférése ennél a lépésnél.
{: .notice--info}

1. Vedd ki az SD kártyád a számítógépedből, majd dugd vissza a Wii U konzolodba.
2. Launch the Internet Browser and navigate to the website `wiiuexploit.xyz`.
3. Click on `Run Exploit!` and hold the B button until you see a screen that says `Please choose your payload:`, this will be necessary for the next steps.
   - If your Wii U gets stuck on a white or otherwise frozen screen, wait a few seconds. If nothing happens, reboot the console, [reset the browser's save data](https://en-americas-support.nintendo.com/app/answers/detail/a_id/1507/~/how-to-delete-the-internet-browser-history) and try again.
   - Ha az EnvironmentLoader-t látod, nem tartottad elég hosszan nyomva a B gombot. Próbáld újra.

#### III. rész - NAND mentés

Ha valami rosszul sül el a későbbi folyamatban és a vWii brickelődik, a visszaállítása egy korábban készített NAND mentésből megjavítja azt.

1. Használd a Wii U GamePad D-Pad-jét a kövtkező konfiguráció beviteléhez:
   - Dump SLC: **optional**
   - Dump SLCCMPT: **yes**
   - Dump MLC: **optional**
   - Dump OTP: **yes**
   - Dump SEEPROM: **optional**
2. Nyomj A gombot a dumpolás elkezdéséhez.
3. Ha a folyamat végzett, kapcsold ki a Wii U-dat, vedd ki az SD kártyád a Wii U-ból és csatlakoztasd a PC-dhez.
4. To make sure you don't lose the files, copy the `slccmpt.bin` and `otp.bin` files (and if you chose to go with a full backup, `seeprom.bin`, `slc.bin`, and `every mlc.bin.part` file) to your computer.
5. Töröld a fájloat az SD kártyádról hely felszabadításához.
6. Vedd ki az SD kártyád a számítógépedből, majd dugd vissza a Wii U konzolodba.

[Folytatás a Homebrew Channel telepítésével](vwii-homebrew-channel-no-wiiu-mods)<br>
{: .notice--info}
