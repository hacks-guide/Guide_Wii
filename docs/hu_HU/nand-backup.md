---
outline: false
---

# NAND mentés készítése (Wii)

Annak érdekében, hogy megvédjük a Wii-odat egy permanens bricktől az az útmutató arra fog kérni, hogy készíts egy NAND mentést. A legtöbb felhasználó a **nanddumper@ios** válassza, a **BootMii**-vel mint pót opcióval, ha a felhasználó SD kártyát használ.

:::details A NAND mentés importálása a Dolphin Emulátorba

A NAND mentésed használható a Dolphin Emulátorban, ha úgy döntenél.

1. Töltsd le a legutolsó verzióját a Dolphin Emulátornak a [Dolphin Weboldaláról](https://dolphin-emu.org/) és telepítsd az eszközödre.
2. Indítsd el a Dolphin Emulátort.
3. Kattints a `Tools` fülre, görgess le a `Manage NAND`-ig majd válaszd az `Import BootMii NAND backup...` opciót.
4. Keresd meg és jelöld ki a `nand.bin` fájlt, amit az SD kártyád gyökerében találtál és válaszd az Open-t.
5. Ha egy `keys.bin` állományt kér, keresd meg az SD kártyádon és válaszd az Open-t.

Ne felejtsd, hogy át kell nevezen a NAND dumpodat a fenti fájlnevekre ha a **nanddumper@ios** használtad, ahogy leírásra került a követekező szakaszban.

:::

::::: tabs

::::tab nanddumper@ios (dumpolás USB drive-ra vagy SD kártyára)

A használható USB portú vagy SD kártya slotos Wii konzolokon a nanddumper@ios lehetővé teszi a Wii-od NAND-jának mentését. A nanddumper@ios ajánlott a BootMii helyett, mert gyorsabban készíti a NAND mentést. Ez a rész végig vezet a Wii NAND menétésének folyamatán, amit utána úgy használsz, ahogy szeretnél.

Kérjük olvasd el az alábbi információkat mielőtt tovább haladsz.

::: info

**Fontos információ**

- Az útmutató befejeztéve 4 fájl jön létre a `/wii/backups` mappában az USB drive-odon. A `DATE_SERIAL_nand_XX.bin` a NAND mentésed és a `SERIAL_keys.bin` fájl tartalmazza a konzolod kulcsait. `DATE_SERIAL_nand_XX.bin.sha1` és `sha1sums.txt` fájlok ellenőrző összeget tartalmaznak a mentések integritásának ellenőrzéséhez és nem használt egy NAND helyreállításnál.

- Kérjük jegyezd meg **egy biztonsági mentés visszatöltése általában a legvégső megoldás**. Ennek fényében használhatod a [BootMii helyreállítási útmutató](bootmiirecover) a NAND mentésed helyreállításához, ahol további információ és nyújtott a kockázatokról és az alternatívákról. CSAK a BootMii-t tudod használni NAND helyreállításra, ha van egy használható SD kártya slotod, ahogy alább leírt.

- Ha Wii mini felhasználó vagy vagy NINCS használható SD kártya slotod, NEM TUDOD HELYREÁLLÍTANI a NAND mentésedet hardver módosítás nélkül. Ez azért van, mert a [BootMii Restore](bootmiirecover) egy SD kártya slotot igényel a NAND olvasásához forrásként.

- Ha NINCS használható GameCube controller portod, akkor NEM vagy képes visszaállítani a NAND mentésed hardver módosítás nélkül. Ez azért, mert a [BootMii Restore](bootmiirecover)-nak szüksége van egy GameCube controller portra, hogy beírja a Konami kódot azokhoz a konzolokhoz, amiknél nincs BootMii, mint boot2.

:::

## Követelmények

- Egy USB drive vagy SD kártya FAT32-re formázva legalább 512 MB szabad hellyel (1 GB vagy több ajánlott)
- [nanddumper@ios](https://oscwii.org/library/app/nanddumper_ios)

## Lépések

1. Töltsd le a „RECOMMENDED DOWNLOAD” címke alatt található `.zip` fájlt az Open Shop Channel honlapjáról.

2. Csomagold ki az `apps` mappát a tömörített fájlból az SD kártyád vagy USB drive-od gyökerébe.

3. Csatlakoztasd az SD kártyád vagy az USB drive-od a Wiihez és indítsd el a Homebrew Channelt. Nyomj `1`-est és biztosítsd, hogy a használt eszköz legyen kiválasztva, majd nyisd meg a nanddumper@ios-t.

   - Ha **Exception IOS occurred!** hibát kapsz, indítsd újra a Wii-od és próbáld újra.

   ![](/images/nanddumper@ios/select-hbc.png)

4. A nanddumper@ios el fog indulni és dumpolni fogja a konzolod kulcsait a megnyitásakor, ha még nem lennének a meghajtódon. Nyomj bármilyen gombot, ami NEM `HOME`, `START`, vagy `EJECT` gomb a konzolod NAND tárolójának dumpolásához.

   - Ha **No storage devices are attached** hibát kapsz, biztosítsd, hogy az SD kártyád vagy az USB drive-ot közvetelnül csatlakozzon a Wii-odhoz. Ha egy USB drive-ot használsz, NEM ajánlott, hogy egy USB hubhoz legyen kötve.

   ![](/images/nanddumper@ios/dump-startup.png)

5. A konzolod NAND-ja most dumpolásra fog kerülni. Kérjük várj, amíg a NAND dump befejeződik, mielőtt folytatnád.

   ![](/images/nanddumper@ios/dump-in-progress.png)

6. Ha a NAND mentés megtörtént, nyomj tetszőleges gombot a nanddumper@ios-ból kilépéshez. A NAND mentésed és a konzol kulcsok az USB drive `/wii/backups/` könyvtárába fog kerülni.

   ![](/images/nanddumper@ios/dump-complete.png)

7. A számítógépeden nevedz át a `DATE_SERIAL_nand_XX.bin` fájlt `nand.bin` fájlra, és a `SERIAL_keys.bin`-t `keys.bin`-né. Ez biztosítja, hogy a BootMii megfelelően értelmezi-e a NAND mentésed arra az esetre, ha vissza kellene állítani.

   ![](/images/nanddumper@ios/rename-files.png)

---

::: tip

[Folytatás a Priiloader telepítésével](priiloader)

A Priiloader egy második réteg védelemmel látja el a Wiit és erősen javasolt a beállítása, még ha boot2 alá is telepítetted a BootMiit. A BootMii IOS-es felhasználóinak számára kiemelten fontos.

Ha Wii mini-n vagy ez az elsődleges brick védelmed.

:::

::::

::::tab BootMii (alternatív metódus)

Az SD kártya slottal rendelkező Wii konzolokon a BootMii lehetővé teszi a Wii-on NAND tárolójának mentését. Ez a rész végigvezet az SD kártyára biztonsági mentés készítésén, amivel aztán úgy cselekedhetsz, ahogy szeretnél.

Kérjük olvasd el az alábbi információkat mielőtt tovább haladsz.

::: info

**Fontos információ**

- Az útmutató befejeztével két fájl lesz létrehozva az SD kártyád gyökerén: a `nand.bin` és a `keys.bin`. A `nand.bin` a belső tárhely másolata, míg a `keys`.bin tartalmazza a konzol biztonsági kulcsait.

- Ha boot2 alá telepítetted a BootMiit, akkor a konzol újraindításával kell megnyitnod azt. Ha ez a követelmény teljesül, akkor kihagyhatod az 1. és 2. lépést.

- Vagy a konzol gombokat, vagy egy az 1. csatlakozóba dugott GameCube-vezérlőt kell használnod a BootMii-ben navigáláshoz. A GameCube vezérlővel navigáláshoz, kattintsd bal/jobb gombbal a +Control Pad-on a mozgáshoz és nyomj A gombot a kiválasztáshoz. A konzol gombokkal navigáláshoz nyomd meg a `POWER`-t a jobbra mozgáshoz és a `RESET`-et a kiválasztáshoz.

- Kérjük jegyezd meg **egy biztonsági mentés visszatöltése általában a legvégső megoldás**. Ennek fényében használhatod a [BootMii helyreállítási útmutató](bootmiirecover) a NAND mentésed helyreállításához, ahol további információ és nyújtott a kockázatokról és az alternatívákról.

- A Family Edition Wii-kon NEM LEHETSÉGES NAND mentéseket visszaállítani hardveres módosítások nélkül. A biztonsági mentés visszaállításához egy olyan megerősítő kódot kell megadnod, amihez egy GameCube-vezérlő szükséges.

:::

::: danger

**Fontos figyelmeztetések**

- Ez egy pótmegoldás, mivel a BootMii lassabb, mint a nanddumper@ios. Szükséged van egy **SD kártyára** a BootMii használatához. Ha nincs nálad SD kártya épp most, de van használható USB drive-od használhatod a nanddumper@ios útmutató helyette.

- Ha a `Launch BootMii` gomb nem jelenik meg a Homebew Channelben, [indítsd újra a HackMii-telepítőt](hackmii) és telepítsd újra a BootMiit.

- Ha a BootMii elindítása után a képernyő fekete marad és a lemezolvasó fénye kéken villog, az azt jelenti, hogy hiányoznak a BootMii-fájlok az SD kártyáról. Töltsd le [ezt a zip fájlt](/assets/files/bootmii_sd_files.zip) és csomagold ki az SD kártyád gyökerébe, majd próbáld újra.

- A BootMii nem használható a Wii mini-n hardver módosítás nélkül. Használd a **nanddumper@ios**-t ha egy Wii mini felhasználó vagy.

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
