---
outline: false
---

# cIOS-ek telepítése

A cIOS, vagy egyedi IOS, patchelt és módosított verziója bizonyos IOS-oknak (vagy egyszerűen részei a Wii rendszer szoftverének) amik lehetővé teszik a homebrew appok számára, mint például az USB loaderek, hogy működjenek ott, ahol esetleg nem tudnának. Habár ez nem szükséges a egy működő homebrew telepítéshez, erősen ajánlott a CIOS-ok telepítése, mert kierejesztik a Wii-d funkcionalitását kevés, vagy semmi hátránnyal.

::::: tabs

:::: tab Wii/Family Edition

::: danger

Ne próbálj meg vWii/Wii minire tervezett IOS-t vagy rendszermenüt Wiire telepíteni! Ha mégis így tennél, azzal [brickelheted](bricks#ios-brick) a konzolod.

:::

::: warning

Biztosítsd, hogy olyan SD kártyát használsz, ahol az írásvédelem a feloldott pozícióban van. Egyébként nem fogod tudni kiválasztani a szükséges opciókat a telepítőben.

:::

## Követelmények

- Egy Wii telepített Homebrew Channel-lel
- Egy SD kártya vagy pendrive
- A [d2x cIOS Installer](https://oscwii.org/library/app/d2x-cios-installer)

## Lépések

### I. rész - Letöltés

::: tip

A böngésződ vagy a vírusírtó szoftvered elképzelhető, hogy a NUSGet-et malware-nek jelöli - ez hamis pozitív. A NUSGet NEM tartalmaz malware-t.

:::

::: info

Ha képes vagy csatlakoztatni a Wii-odat az internetre, átugorgathatsz a [II. részre](cios#section-ii---installing).

:::

1. Kapcsold ki a konzolod és csatlakoztasd az SD kártyád vagy USB driveod a számítógépedhez.
2. A számítógépeden töltsd le a [NUSGet](https://github.com/NinjaCheetah/NUSGet/releases/latest/) rendszerednek megfelelő verzióját. A Windows felhasználók a `NUSGet-Windows-x86_64-bin.zip` fájlt kell válasszák.
3. Csomagold ki a NUSGet futtatható állományt és indítsd el.
4. Navigálz az `IOS` > `IOS 38` > `World`-höz és válaszd a `v4123` opciót. Vedd ki a pipát a `Keep encrypted contents` elől. Jelöld be a `Use a custom download directory` opciót és válaszd a mappát ahol a NUSGet futtatható állomány is található, majd kattints a `Start Download` opcióra.

   ![](/images/desktop-apps/nusget/nusget-4123.png)
5. Ismételd meg a fenti lépéseket az `IOS 56 (v5661)`, `IOS 57 (v5918)` és az `IOS 58 (v6175)` beszerzéséhez is.
6. Ha befejeződött a fenti IOS fájlok letöltése, navigálj a mappába, ahol a NUSGet futtatható állomány található. Ez most négy könyvtárat kell tartalmazzon a title ID-jukkal a fenti IOS-oknak.

   ![](/images/desktop-apps/nusget/nusget-folder-ios.png)
7. Lépj be mind a négy könyvtárba és keresd meg az `IOS-XX-vXXXX-Wii.wad` fájlt mindegyikben.

   ![](/images/desktop-apps/nusget/nusget-ios-output.png)
8. Helyezd az összes WAD-fájlt az SD kártya vagy USB drive gyökerére.
   - Ezen az eszközön legyen a d2x cIOS-telepítő is.
9. Biztosítsd, hogy minden WAD fájl úgy nevezett mint a listában alább, a d2x-cios-installer-rel kompatiblitáshoz:

   |   IOS  |               Fájlnév              |
   | :----: | :--------------------------------: |
   | IOS 38 | IOS38-64-v4123.wad |
   | IOS 56 | IOS56-64-v5661.wad |
   | IOS 57 | IOS57-64-v5918.wad |
   | IOS 58 | IOS58-64-v6175.wad |

::: info

A WAD fájlok az SD kártyád gyökerében így fognak kinézni:

![](/images/desktop-apps/nusget/nusget-ios-on-sd.png)

:::

### II. rész – Telepítés

1. Másold az `apps` mappát a d2x-cios-installer `.zip` fájlból az SD kártya vagy az USB drive gyökerébe.

2. Csatlakoztasd az SD kártyát vagy a pendrive-ot a konzolodba!

3. Kapcsold be a konzolod.

4. Indítsd el a Homebrew Channelt.

5. Indítsd el a homebrew listáról a „d2x cIOS Installer”-t.

6. Állíts be mindent az alábbiak szerint:

   ```html
   Select cIOS <d2x-v11-beta3>
   Select cIOS base <38>
   Select cIOS slot <248>
   Select cIOS revision <65535>
   ```

   ![](/images/cios/d2x_v11_248.png)

   ::: info

   Ha nem látod a `d2x-v11-beta3`-at, lépj ki a telepítőből B-vel, és biztosítsd, hogy az SD kártyád írható legyen.

   :::

   ::: info

   A „`(c)IOS detected in slot ### will be overwritten`” figyelmeztetést figyelmen kívül hagyhatod.

   :::

   ::: info

   Ha a telepítő a "`Slot ### already used in batch settings`" vagy a "`cIOS already added in batch with revision ##### and slot ###`" figyelmeztetést írja ki, akkor nyomd meg a `-` gombot a kötegelt mód kikapcsolásához.

   (Ha ki szeretnél lépni a telepítőből, azt a Home gomb helyett a B gombbal teheted meg.)

   :::

7. Nyomj `A` gombot. Erre a program meg fogja mutatni a helykiosztást:

   ![](/images/cios/d2x_summary.png)

8. Ismét nyomd meg az `A` gombot.

   ![](/images/cios/d2x_installation.png)

9. A telepítés befejezése után ismét a helykiosztást fogod látni. Ellenőrizd, hogy az imént telepített IOS helye zölden van kiemelve.

   ![](/images/cios/d2x_log.png)

   ::: info

   Ha a slot pirossal van kiemelve, próbáld újra a cIOS telepítését.

   Ha hibát kapsz a letöltési fázisok előtt/alatt, (pl. `tcp_connect timeout`, `net_gethostbyname failed: ...`), nyomj B gombot a kilépéshez és folytasd az [I. résszel](#section-i---downloading).

   :::

10. Nyomj `A` gombot. Ezzel visszajutsz a konfigurációs képernyőre.

11. Ismételd meg az előző 5 lépést az alábbi beállításokkal:

    - A cIOS 249 telepítéséhez

      ```html
      Select cIOS <d2x-v11-beta3>
      Select cIOS base <56>
      Select cIOS slot <249>
      Select cIOS revision <65535>
      ```

      ![](/images/cios/d2x_v11_249.png)

    - A cIOS 250 telepítéséhez

      ```html
      Select cIOS <d2x-v11-beta3>
      Select cIOS base <57>
      Select cIOS slot <250>
      Select cIOS revision <65535>
      ```

      ![](/images/cios/d2x_v11_250.png)

    - A cIOS 251 telepítéséhez

      ```html
      Select cIOS <d2x-v11-beta3>
      Select cIOS base <58>
      Select cIOS slot <251>
      Select cIOS revision <65535>
      ```

      ![](/images/cios/d2x_v11_251.png)

12. Ha végeztél mind a négy cIOS telepítésével, nyomd meg a B gombot a Homebrew Channelbe való visszatéréshez.

::: info

Ha letöltötted a 4 WAD fájlt az I. részben, most törölheted őket az SD kártyádról/USB drive-odról.

:::

---

::: tip

[Folytatás az Open Shop Channel telepítésével](osc)

Most, hogy a konzol megfelelő védelemmel rendelkezik, telepítheted az Open Shop Channelt, ami a homebrew programok megbízható tárháza és hozzáférhető mind egy Wiiről vagy egy számítógépről.

:::

::::

:::: tab vWii (Wii U)

::: danger

Ne próbálj meg Wii/Wii minire tervezett IOS-t vagy rendszermenüt vWiire telepíteni! Ha mégis így tennél, azzal [brickelheted](bricks#ios-brick) a konzolod.

:::

::: warning

Biztosítsd, hogy olyan SD kártyát használsz, ahol az írásvédelem a feloldott pozícióban van. Egyébként nem fogod tudni kiválasztani a szükséges opciókat a telepítőben.

:::

## Requirements

- Egy Wii U, aminek a vWii-jére telepítve van a Homebrew Channel
- Egy SD kártya vagy pendrive
- A [d2x cIOS Installer for vWii](https://oscwii.org/library/app/d2x-cios-installer-vwii)

## Lépések

### I. rész – Telepítés

1. Másold az `apps` mappát a d2x-cios-installer-vwii `.zip` fájlból az SD kártya vagy az USB drive gyökerébe.

2. Csatlakoztasd az SD kártyát vagy a pendrive-ot a konzolodba!

3. Kapcsold be a konzolod.

4. Indítsd el a Homebrew Channelt.

5. Indítsd el a homebrew listáról a „d2x cIOS Installer”-t.

6. Állíts be mindent az alábbiak szerint:

   ```html
   Select cIOS <d2x-v11-beta3-vWii>
   Select cIOS base <38>
   Select cIOS slot <248>
   ```

   ![](/images/cios/d2x_v11_248_vwii.png)

   ::: info

   Ha nem látod a `d2x-v11-beta3-vWii`-t, lépj ki a telepítőből B-vel, és biztosítsd, hogy az SD kártyád írható legyen.

   :::

7. Nyomj `A` gombot a telepítéshez.

   ![](/images/cios/d2x_installation.png)

8. Ismételd meg az előző 2 lépést az alábbi beállításokkal:

   - A cIOS 249 telepítéséhez

     ```html
     Select cIOS <d2x-v11-beta3-vWii>
     Select cIOS base <56>
     Select cIOS slot <249>
     ```

   ![](/images/cios/d2x_v11_249_vwii.png)

   - A cIOS 250 telepítéséhez

     ```html
     Select cIOS <d2x-v11-beta3-vWii>
     Select cIOS base <57>
     Select cIOS slot <250>
     ```

     ![](/images/cios/d2x_v11_250_vwii.png)

   - A cIOS 251 telepítéséhez

     ```html
     Select cIOS <d2x-v11-beta3-vWii>
     Select cIOS base <58>
     Select cIOS slot <251>
     ```

     ![](/images/cios/d2x_v11_251_vwii.png)

9. Ha végeztél mind a négy cIOS telepítésével, nyomd meg a B gombot a Homebrew Channelbe való visszatéréshez.

---

::: tip

[Folytatás a telepítés befejezésével](vwii-finalizing-setup)

Most, hogy már a Homebrew Channel, Priiloader, és cIOS telepítve, folytathatod azon funkcionalitás helyreállításával, ami normális esetben hiányzik a vWii menüből.

:::

::::

:::: tab Wii mini

::: danger

Ne próbálj meg Wii/vWiire tervezett IOS-t vagy System Menu-t a Wii minire telepíteni. Ha mégis így tennél, azzal [brickelheted](bricks#ios-brick) a konzolod.

:::

::: warning

Biztosítsd, hogy olyan SD kártyát használsz, ahol az írásvédelem a feloldott pozícióban van. Egyébként nem fogod tudni kiválasztani a szükséges opciókat a telepítőben.

:::

::: info

Ha az útmutatóval kapcsolatban segítségre lenne szükséged, kérjük csatlakozz a [Wii mini Hacking Discord szerver](https://discord.gg/6ryxnkS)-hez.

:::

## Követelmények

- Egy Wii mini, amire telepítve van a Homebrew Channel
- Egy USB drive
- A [d2xl cIOS Installer](/assets/files/d2xl-cios-installer-mini.zip)

## Lépések

### I. rész - Letöltés

1. Kapcsold ki a konzolod.
2. Csatlakoztasd az USB drive-ot a számítógépedhez.
3. Másold át az `apps` mappát a d2x-cios-installer-mini `.zip` fájlból az USB drive-od gyökerébe.
4. Helyezd be a pendrive-ot a konzolba!
5. Kapcsold be a konzolod.
6. Indítsd el a Homebrew Channelt.
7. Indítsd el a listáról a „d2x cIOS Installer”-t!

### II. rész – Telepítés

1. Válaszd a `Continue`-t.
2. Állíts be mindent az alábbiak szerint:

   ```html
   Select cIOS <d2xl-v1-beta2>
   Select cIOS base <57>
   Select cIOS slot <249>
   ```

   ![](/images/cios/d2x_v1_249_mini_NTSC.png)
   ![](/images/cios/d2x_v1_249_mini_PAL.png)

   - A megjegyzések alatt látni fogsz egy IOS verzió számot, ami vagy `v31775`-re vagy `v31776`-ra végződik. Az `IOS57-64-v31775` az NTSC (észak-amerikai) konzolokhoz, míg az `IOS57-64-v31776` a PAL (európai) konzolokhoz. Legyél biztos abban, hogy a megfelelő verziószámot választod a konzolodhoz.
3. A telepítés indításához nyomd meg az A gombot.
   - Ha a telepítés megszakad `TMD version mismatch` hibával, akkor a Control Pad jobb- és bal nyílgombjaival állítsd át a `Select cIOS base` opciót amíg verziószám más nem lesz, mint amit korábban próbáltál. Az 57-es szám nem változik.
4. A folyamat végén lépj ki a telepítőből.

---

::: tip

[Folytatás a telepítés befejezésével](mini-finalizing-setup)

:::

::::

:::::
