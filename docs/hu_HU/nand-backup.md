---
outline: false
---

# NAND mentés készítése (Wii)

Annak érdekében, hogy megvédjük a Wii-odat egy permanens bricktől az az útmutató arra fog kérni, hogy készíts egy NAND mentést. Most users will want to select **nanddumper@ios**, with **BootMii** as a backup option for users that can use an SD card.

:::details A NAND mentés importálása a Dolphin Emulátorba

Your NAND backup can be utilized in Dolphin Emulator, if you choose to do so.

1. Get the latest release of Dolphin Emulator from the [Dolphin Website](https://dolphin-emu.org/) and install it to your device.
2. Indítsd el a Dolphin Emulátort.
3. Kattints a `Tools` fülre, görgess le a `Manage NAND`-ig majd válaszd az `Import BootMii NAND backup...` opciót.
4. Keresd meg és jelöld ki a `nand.bin` fájlt, amit az SD kártyád gyökerében találtál és válaszd az Open-t.
5. Ha egy `keys.bin` állományt kér, keresd meg az SD kártyádon és válaszd az Open-t.

Note that you will need to rename your NAND dump to the files above if you used **nanddumper@ios**, as described in the below section.

:::

::::: tabs

::::tab nanddumper@ios (dump to USB drive or SD card)

On Wii consoles with a usable USB port or SD card slot, nanddumper@ios allows for backing up your Wii's NAND storage. nanddumper@ios is recommended over BootMii due to its quicker speed in creating a NAND backup. This section will guide you through the process to back up your Wii's NAND, which you can then use however you like.

Kérjük olvasd el az alábbi információkat mielőtt tovább haladsz.

::: info

**Fontos információ**

- After the completion of this guide, four files will have been created in the directory `/wii/backups` on your USB drive. `DATE_SERIAL_nand_XX.bin` is your NAND backup, and `SERIAL_keys.bin` is the file containing your console keys. `DATE_SERIAL_nand_XX.bin.sha1` and `sha1sums.txt` respectively are files containing checksums to verify the integrity of your backups, and will not be used in an actual NAND restoration.

- Kérjük jegyezd meg **egy biztonsági mentés visszatöltése általában a legvégső megoldás**. Ennek fényében használhatod a [BootMii helyreállítási útmutató](bootmiirecover) a NAND mentésed helyreállításához, ahol további információ és nyújtott a kockázatokról és az alternatívákról. You can ONLY use BootMii to restore a NAND backup if you have a usable SD card slot, as described below.

- If you are a Wii mini user or DO NOT have a usable SD card slot, you will be UNABLE to restore your NAND backup without hardware modification. This is because [BootMii Restore](bootmiirecover) requires an SD card slot to read the NAND from.

- If you DO NOT have a usable GameCube controller port, you will also be UNABLE to restore your NAND backup without hardware modification. This is because [BootMii Restore](bootmiirecover) requires a GameCube controller port to enter the Konami code with for consoles that do not have BootMii as boot2.

:::

## Requirements

- A USB drive or SD card formatted as FAT32, with a minimum 512MB of free space (1GB or more recommended)
- [nanddumper@ios](https://oscwii.org/library/app/nanddumper_ios)

## Lépések

1. Töltsd le a „RECOMMENDED DOWNLOAD” címke alatt található `.zip` fájlt az Open Shop Channel honlapjáról.

2. Csomagold ki az `apps` mappát a tömörített fájlból az SD kártyád vagy USB drive-od gyökerébe.

3. Insert the SD card or USB drive into your Wii, and start the Homebrew Channel. Press `1` and ensure that the device you are using is selected, and then open nanddumper@ios.

   - If you get an **Exception IOS occurred!** error, simply restart your Wii and try again.

   ![](/images/nanddumper@ios/select-hbc.png)

4. nanddumper@ios will start and dump your console keys upon opening, if they are not already on your drive. Press any button that is NOT the `HOME`, `START`, or `EJECT` buttons to begin dumping your console's NAND storage.

   - If you get a **No storage devices are attached** error, ensure that your SD card or USB drive is directly connected to your Wii. If using a USB drive, it should NOT be connected to a USB hub.

   ![](/images/nanddumper@ios/dump-startup.png)

5. Your console's NAND will now begin dumping. Please wait for the NAND dump to finish before proceeding.

   ![](/images/nanddumper@ios/dump-in-progress.png)

6. Once the NAND backup has concluded, press any button to exit nanddumper@ios. Your NAND backup and console keys will be output to your USB drive in directory `/wii/backups/`.

   ![](/images/nanddumper@ios/dump-complete.png)

7. On your computer, ensure that you rename `DATE_SERIAL_nand_XX.bin` to `nand.bin`, and `SERIAL_keys.bin` to `keys.bin`. This ensures that BootMii can properly parse your NAND backup in the event that it needs to be restored.

   ![](/images/nanddumper@ios/rename-files.png)

---

::: tip

[Folytatás a Priiloader telepítésével](priiloader)

A Priiloader egy második réteg védelemmel látja el a Wiit és erősen javasolt a beállítása, még ha boot2 alá is telepítetted a BootMiit. A BootMii IOS-es felhasználóinak számára kiemelten fontos.

If you are on Wii mini, this is your primary means of brick protection.

:::

::::

::::tab BootMii (backup method)

On Wii consoles with an SD card slot, BootMii allows for backing up and restoring your Wii's NAND storage. This section will guide you in backing up your Wii's NAND to an SD Card, which you can then use however you like.

Kérjük olvasd el az alábbi információkat mielőtt tovább haladsz.

::: info

**Fontos információ**

- Az útmutató befejeztével két fájl lesz létrehozva az SD kártyád gyökerén: a `nand.bin` és a `keys.bin`. A `nand.bin` a belső tárhely másolata, míg a `keys`.bin tartalmazza a konzol biztonsági kulcsait.

- Ha boot2 alá telepítetted a BootMiit, akkor a konzol újraindításával kell megnyitnod azt. Ha ez a követelmény teljesül, akkor kihagyhatod az 1. és 2. lépést.

- Vagy a konzol gombokat, vagy egy az 1. csatlakozóba dugott GameCube-vezérlőt kell használnod a BootMii-ben navigáláshoz. A GameCube vezérlővel navigáláshoz, kattintsd bal/jobb gombbal a +Control Pad-on a mozgáshoz és nyomj A gombot a kiválasztáshoz. A konzol gombokkal navigáláshoz nyomd meg a `POWER`-t a jobbra mozgáshoz és a `RESET`-et a kiválasztáshoz.

- Kérjük jegyezd meg **egy biztonsági mentés visszatöltése általában a legvégső megoldás**. Ennek fényében használhatod a [BootMii helyreállítási útmutató](bootmiirecover) a NAND mentésed helyreállításához, ahol további információ és nyújtott a kockázatokról és az alternatívákról.

- Family Edition Wiis CANNOT restore NAND backups without hardware modification. A biztonsági mentés visszaállításához egy olyan megerősítő kódot kell megadnod, amihez egy GameCube-vezérlő szükséges.

:::

::: danger

**Fontos figyelmeztetések**

- This is intended to be a backup option, as BootMii is slower than nanddumper@ios. You need an **SD card** to use BootMii. If you do not have an SD card on hand right now, but instead have a usable USB drive, you can use the nanddumper@ios guide instead.

- Ha a `Launch BootMii` gomb nem jelenik meg a Homebew Channelben, [indítsd újra a HackMii-telepítőt](hackmii) és telepítsd újra a BootMiit.

- Ha a BootMii elindítása után a képernyő fekete marad és a lemezolvasó fénye kéken villog, az azt jelenti, hogy hiányoznak a BootMii-fájlok az SD kártyáról. Töltsd le [ezt a zip fájlt](/assets/files/bootmii_sd_files.zip) és csomagold ki az SD kártyád gyökerébe, majd próbáld újra.

- BootMii cannot be used on the Wii mini without hardware modification. Use **nanddumper@ios** if you are a Wii mini user.

:::

## Requirements

- Egy SD kártya legalább 512 MB szabad hellyel (1 GB vagy több ajánlott)
- [BootMii](hbc)

## Lépések

1. Kapcsold be a konzolod.

2. Indítsd el a Homebrew Channelt.

3. Nyomd meg a HOME-gombot, majd válaszd ki a „Launch BootMii” menüpontot.

   ![](/images/bootmii/BootMii_HBC.png)

4. Ezek után az alábbihoz hasonló képernyőt fogsz látni a Wii képernyőjén:

   ![](/images/bootmii/BootMii_Main.png)

5. Válaszd ki az Options menüpontot (az ikon fogaskerékkel).

   ![](/images/bootmii/BootMii_Gears.png)

6. Válaszd ki a bal szélső gombot.

   ![](/images/bootmii/BootMii_Backup.png)

7. Ezután el fog kezdődni a belső tárhely biztonsági mentése. A folyamatot a képernyőn figyelemmel követheted.

   - A „Bad Blocks”-ok nomálisak és többnyire a gyárból származnak a NAND binning miatt. Ne aggódj – ez a gyárban történő adatosztályozás természetes mellékterméke és nem azt jelenti, hogy baj van.

   ![](/images/bootmii/BootMii_NAND_Backup.png)

8. Miután a folyamat lezáródott, a BootMii ellenőrizni fogja a biztonsági mentés minőségét. Ha minden jól sikerült, akkor az összes blokk zölden fog megjelenni az ábrán.

   - Ha a mentés tartalmaz olyan gyárilag sérült blokkokat, amelyekben vannak javíthatatlan oldalak, akkor azok nem fognak átmenni az ellenőrzésen. Addig amíg a nem-hibás blokkok sikeresen ellenőrzésre kerülnek, ez nem probléma.

   ![](/images/bootmii/BootMii_NAND_Backup_Verify.png)

9. Nyomd meg a Back gombot (a gomb egy nyíllal), majd a BootMii-ből kilépéshez nyomd meg a Wii menü vagy a Homebrew Channel gombot.

   ![](/images/bootmii/BootMii_Return.png)

---

::: tip

[Folytatás a Priiloader telepítésével](priiloader)

A Priiloader egy második réteg védelemmel látja el a Wiit és erősen javasolt a beállítása, még ha boot2 alá is telepítetted a BootMiit. A BootMii IOS-es felhasználóinak számára kiemelten fontos.

:::

::::

:::::
