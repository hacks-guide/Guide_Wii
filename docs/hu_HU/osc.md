# Az Open Shop Channel telepítése

::: tip

**A kötelező rész vége**

Ez jelzi a végét a kötelező részeknek a fő útmutatóban. Nem kell tovább követned az útmutatót e pont után, ha egy alap, működő homebrew konfigurációt szeretnél.

Továbbhaladva az úmtutató maradékán, az útmutató bemutatja, hogyan hozd ki a legtöbbet a Wii-dből:

- Az Open Shop Channel használata homebrew alkalmazások beszerzésére
- A WiiConnect24 funkcionalitásának visszaállítása a WiiLink-kel
- Az online játék lehetőségének visszaállítása a Wiimmfi-vel
- Kipróbálásra ajánlott homebrew alkalmazások listájának bemutatása

:::

::: info

Az angol nyelvű Open Shop Channel-támogatáshoz csatlakozz az [Open Shop Channel Discord](https://discord.gg/osc) szerverére.

:::

Az [Open Shop Channel](https://oscwii.org/) egy dhtdht020 által készített program, ami a homebrew alkalmazások jelenleg legmegbízhatóbb forrása.

Két módszer van az Open Shop Channel használatára:

- Magán a Wii-on, a következők közül valamelyik homebrew app használatával:
  - LibreShop (preferált)
  - Homebrew Browser (fallback)
- A számítógépeden, a következők közül valamelyik alkalmazás használatával:
  - TinyWiiBackupManager (preferált)
  - OSCDL (fallback)

## I. módszer - Open Shop Channel Wii-on

### LibreShop

A LibreShop egy szöveges alapú app repository, amit nulláról írt a LibreShop csapat, egy modern és megbízható módot biztosítva a homebrew letöltésére a Wii-on.

#### Követelmények

- Egy internetkapcsolattal rendelkező Wii
- Egy SD kártya vagy pendrive
- [LibreShop](https://oscwii.org/library/app/libreshop)

#### Használat lépései

1. Töltsd le a „RECOMMENDED DOWNLOAD” címke alatt található `.zip` fájlt az Open Shop Channel honlapjáról.

   ![](/images/osc/zip-download-LS.png)

2. Csomagold ki az `apps` mappát a tömörített fájlból az SD kártyád vagy USB drive-od gyökerébe.

3. Csatlakoztasd az SD kártyád vagy az USB drive-od a Wiihez és nyisd meg a LibreShop-ot. A LibreShop-nak meg kell jelennie.

   ![](/images/osc/libreshop.png)

### A Homebrew Browser

A Homebrew Browser egy grafikus app repository a Wii-hoz, amit eredetileg 2008 júniusában adtak ki, de patchelésre került az Open Shop Channel csapat által, hogy támogassa a szervereit. Instabil lehet, de alternatívaként szolgál a LibreShop helyett, ha az nem elérhető.

#### Követelmények

- Egy internetkapcsolattal rendelkező Wii
- Egy SD kártya vagy pendrive
- [Homebrew Browser](https://oscwii.org/library/app/homebrew_browser)

#### Használat lépései

1. Töltsd le a „RECOMMENDED DOWNLOAD” címke alatt található `.zip` fájlt az Open Shop Channel honlapjáról.

   ![](/images/osc/zip-download-HBB.png)

2. Csomagold ki az `apps` mappát a tömörített fájlból az SD kártyád vagy USB drive-od gyökerébe. Ha szeretnéd, elolvashatod a .zip-fájlban található (angol nyelvű) útmutatót a Homebrew Browser használatáról.

3. Csatlakoztasd az SD kártyát vagy az USB drive-ot a Wiihez és nyisd meg a Homebrew Channelt. Ha minden jól sikerült, a Homebrew Browser most el fog indulni.

   ![](/images/osc/homebrew-browser.png)

## II. módszer - Open Shop Channel PC-n

### TinyWiiBackupManager

A TinyWiiBackupManager egy beépített app letöltővel rendelkezik az Open Shop Channel homebrew alkalmazásokhoz és ez a preferált módja OSC appok letöltésének PC-ről a legtöbb felhasználónak, egyszerűsége miatt.

#### Requirements

- Egy Windowst/MacOS-t/Linuxot futtató számítógép internet-hozzáféréssel
- Egy SD kártya vagy pendrive
- A [TinyWiiBackupManager](https://github.com/mq1/TinyWiiBackupManager/releases/latest) legutolsó verziója

#### I. rész – Telepítés

Részletes telepítési lépések a TinyWiiBackupManager-hez az operációs rendszeredhez [Mentések kezelése](backups#using-tinywiibackupmanager) oldalon található. Ha befejezte, kövesd a lépéseket az alkalmazás használatáról az Open Shop Channel-hez.

#### II. rész - Használat

1. Csatlakoztasd az USB drive-od vagy az SD kártyátd a számítógépedhez.

2. Kattints a merevlemez ikonon baloldalt alul az appban a meghajtód kiválasztásához. Válaszd a meghatjó gyökerét (pl. `E:\`), ne a "wbfs" vagy a "games" mappát. Ha még nem tettél így kattints a shop ikonra, hogy megnyitsd az Open Shop Channel frontendjét.

   ![](/images/desktop-apps/TWBM/twbm-osc-home.png)

3. Keress egy alkalmazást, amit le szeretnél tölteni, majd nyomd meg a `Install app` gombot. Ha szeretnéd, akkor a „Send to Wii”-gombbal egyenesen a Wiire küldheted az alkalmazást (ehhez a Wiinek és a számítógépnek ugyanazon a hálózaton kell lennie).

   ![](/images/desktop-apps/TWBM/twbm-osc-search.png)

4. Egy párbeszéd ablak ugrik fel és érdezi, hogy szeretnéd-e talapíteni az alkalmazást. Nyomj `Yes`-t. Ha a telepítés befejeződött, egy üzenet jelenik meg az alkalmazásban alul jobbra, jelezve, hogy az app telepítésre került.

   ![](/images/desktop-apps/TWBM/twbm-osc-dialog.png)

5. Csatlakoztasd az SD kártyát vagy az USB drive-ot a Wiihez és nyisd meg a Homebrew Channelt. Ha minden jól ment, akkor a letöltött program meg fog jelenni a listán.

### OSCDL

Az OSCDL egy az Open Shop Channel csapat által fejlesztett alkalmazás PC-re, és vonzó lehet a power felhasználók számára a további szolgáltatásai miatt. A TinyWiiBackupManager alternatívája lehet, ha az nem működik.

#### Requirements

- Egy Windowst/MacOS-t/Linuxot futtató számítógép internet-hozzáféréssel
- Egy SD kártya vagy pendrive
- Az [OSCDL](https://github.com/dhtdht020/osc-dl/releases/latest) legutolsó verziója

#### Windows

<br>

##### I. rész – Telepítés

::: info

Microsoft SmartScreen képernyőt kaphatsz. Ez egy hamis pozitív, ignorált és futtasd mindenféleképpen.

:::

::: info

Ha felugrik egy Felhasználói Fiókok Felügyelete-ablak, ami megkérdezi, hogy szeretnéd-e megengedni, hogy a program módosításokat hajtson végre a számítógépen, válaszolj igennel! Az Open Shop Channel egy biztonságos alkalmazás.

:::

1. Töltsd le az `oscdl-installer.exe` fájlt és futtasd a telepítőt. Ha szeretnéd, ehelyett letöltheted az `oscdl-standalone.exe` fájlt, ami nem igényel telepítést és egy hordozható végrehajtható fájlként viselkedik.

   ![](/images/osc/exe-download-OSCDL.png)

2. Miután befejeződött a telepítés, futtasd az OSCDL-t!

   ![](/images/osc/install-finished-OSCDL.png)

##### II. rész - Használat

1. Keress egy alkalmazást, amit le szeretnél tölteni, majd nyomd meg a „Download” gombot. Ha szeretnéd, akkor a „Send to Wii”-gombbal egyenesen a Wiire küldheted az alkalmazást (ehhez a Wiinek és a számítógépnek ugyanazon a hálózaton kell lennie).

   ![](/images/osc/app-download-OSCDL.png)

2. Ha közvetlenül került letöltésre egy párbeszéd ablak jelenik meg, érdeklődve a letöltési helyéről. Az OSCDL jelez számodra, ha olyan tárolót észlel, ahol van apps mappa, és ha ide töltöttél le, akkor automatikusan kicsomagolja a homebrew-ot és az készen is áll a használatra. Egyébként megadhatsz egy letöltési helyet, és kicsomagolhatod magadnak.

   ![](/images/osc/download-prompt-OSCDL.png)

3. Csatlakoztasd az SD kártyát vagy az USB drive-ot a Wiihez és nyisd meg a Homebrew Channelt. Ha minden jól ment, akkor a letöltött program meg fog jelenni a listán.

#### macOS és Linux

<br>

##### I. rész – Telepítés

::: warning

Python 3 telepítésre van szükséged az OSCDL haszmálatához ezeken a platformokon. Fontos megjegyezni, hogy egyes disztribúciói a Python 3-na vagy a `python` vagy `python3` aliast-t használják, erre figyelj a 6. lépésnél. Továbbá létrehozol egy virtuális környezetet az OSCDL és függőségei elszigeteléséhez az alap Python telepítésedtől.

:::

1. Töltsd le az OSCDL forráskódját, akár `.zip` akár `.tar.gz` formátumban. Opcionálisan futtathato helyette a `git clone https://github.com/dhtdht020/osc-dl.git` parancsot a könyvtárban ahol szeretnéd használni az OSCDL-t.

   ![](/images/osc/source-code-download-OSCDL.png)

2. Ha a forráskód letöltését választottad, csomagold ki az archívumot arra a helyre a számítógépeden, ahol az OSCDL-t használni szeretnéd.

3. Nyisd meg a mappáját a kicsomagolt fájloknak terminálban, és futtasd a `python3 -m venv venv` parancsot a virtuális környezet létrehozásához. Fontos, ha az `ensurepip` nem elérhető üzenetet kapod, telepítendend kell a `python3-venv` csomagot a disztribúciódhoz. A Python biztosíthat ehhez egy parancsot.

   ![](/images/osc/create-virtual-environment.png)

4. Futtasd a `source venv/bin/activate` parancsot a virtuális környezet aktiválásához.

   ![](/images/osc/activate-virtual-environment.png)

5. Futtasd a `pip install -r requirements.txt` parancsot. Ez letölti az OSCDL futtatásához szükséges csomagokat.

   ![](/images/osc/satisfy-requirements-OSCDL.png)

6. Futtasd a `python3 oscdl.py` parancsot. Ez megnyitja a programot. Ha nyitva tartottad a terminált, a `deactivate`-tel tudsz kilépni a virtuális környezetből. További megjegyzés, hogy futtatnod kell a `source venv/bin/activate` parancsot abban a könyvtárban, ahova az OSCDL ki lett csomagolva, minden egyes alkalommal amikor új terminlat nyitsz. Ez azért van, hogy be lehessen tölteni a függőségeit az OSCDL futtatásához.

   ![](/images/osc/run-OSCDL-terminal.png)

##### II. rész - Használat

1. Ha az OSCDL már meg van nyitva, akkor keress egy alkalmazást, amit le szeretnél tölteni, majd nyomd meg a Download gombot. Ha szeretnéd, akkor a „Send to Wii”-gombbal egyenesen a Wiire küldheted az alkalmazást (ehhez a Wiinek és a számítógépnek ugyanazon a hálózaton kell lennie).

   ![](/images/osc/app-download-OSCDL-linux.png)

2. Ha közvetlenül került letöltésre egy párbeszéd ablak jelenik meg, érdeklődve a letöltési helyéről. Az OSCDL jelez számodra, ha olyan tárolót észlel, ahol van apps mappa, és ha ide töltöttél le, akkor automatikusan kicsomagolja a homebrew-ot és az készen is áll a használatra. Egyébként megadhatsz egy letöltési helyet, és kicsomagolhatod magadnak.

   ![](/images/osc/download-prompt-OSCDL-linux.png)

3. Csatlakoztasd az SD kártyát vagy az USB drive-ot a Wiihez és nyisd meg a Homebrew Channelt. Ha minden jól ment, akkor a letöltött program meg fog jelenni a listán.

---

::: tip

[Folytatás a WiiConnect24-gyel](wiiconnect24)

A WiiConnect24 egy a Nintendo futtatott online szolgáltatás volt, ami funkcionalitást biztosított az olyan appokhoz, mint a Forecast és News csatornák. Ez at útmutató a WiiLink szolgáltatást mutatja be, ami visszaállítja ezt a funkcionalitást és más információkat, amikre figyelni kell a használatakor.

:::
