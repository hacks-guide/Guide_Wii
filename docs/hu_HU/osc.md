# Az Open Shop Channel telepítése

::: info

Az angol nyelvű Open Shop Channel-támogatáshoz csatlakozz az [Open Shop Channel Discord](https://discord.gg/osc) szerverére.

:::

Az [Open Shop Channel](https://oscwii.org/) egy dhtdht020 által készített program, ami a homebrew alkalmazások jelenleg legmegbízhatóbb forrása.

Az Open Shop Channel használatához két módszer közül választhatsz: futtathatod közvetlenül a Wiin a Homebrew Channelen keresztül vagy a számítógépeden az OSCDL-en keresztül.

## I. módszer – Homebrew Browser

### Követelmények

- Egy internetkapcsolattal rendelkező, feltört Wii
- Egy SD kártya vagy pendrive
- [Homebrew Browser](https://oscwii.org/library/app/homebrew_browser)

### Lépések

1. Töltsd le a „RECOMMENDED DOWNLOAD” címke alatt található `.zip` fájlt az Open Shop Channel honlapjáról.

   ![](/images/osc/zip-download-HBB.png)

2. Csomagold ki az `apps` mappát a tömörített fájlból az SD kártyád vagy USB drive-od gyökerébe. Ha szeretnéd, elolvashatod a .zip-fájlban található (angol nyelvű) útmutatót a Homebrew Browser használatáról.

3. Csatlakoztasd az SD kártyát vagy az USB drive-ot a Wiihez és nyisd meg a Homebrew Channelt. Ha minden jól sikerült, a Homebrew Browser most el fog indulni.

## II. módszer – OSCDL

### Követelmények

- Egy Windowst/macOS-t/Linuxot futtató számítógép internet-hozzáféréssel
- Egy SD kártya vagy pendrive
- Az [OSCDL](https://github.com/dhtdht020/osc-dl/releases/latest) legutolsó verziója

### Windowsos lépések

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

3. Keress egy alkalmazást, amit le szeretnél tölteni, majd nyomd meg a „Download” gombot. Ha szeretnéd, akkor a „Send to Wii”-gombbal egyenesen a Wiire küldheted az alkalmazást (ehhez a Wiinek és a számítógépnek ugyanazon a hálózaton kell lennie).

   ![](/images/osc/app-download-OSCDL.png)

4. Ha közvetlenül került letöltésre egy párbeszéd ablak jelenik meg, érdeklődve a letöltési helyéről. Az OSCDL jelez számodra, ha olyan tárolót észlel, ahol van apps mappa, és ha ide töltöttél le, akkor automatikusan kicsomagolja a homebrew-ot és az készen is áll a használatra. Egyébként megadhatsz egy kézi letöltési helyet, és kicsomagolhatod magadnak.

   ![](/images/osc/download-prompt-OSCDL.png)

5. Csatlakoztasd az SD kártyát vagy az USB drive-ot a Wiihez és nyisd meg a Homebrew Channelt. Ha minden jól ment, akkor a letöltött program meg fog jelenni a listán.

### macOS-es/Linuxos lépések

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

7. Ha az OSCDL már meg van nyitva, akkor keress egy alkalmazást, amit le szeretnél tölteni, majd nyomd meg a Download gombot. Ha szeretnéd, akkor a „Send to Wii”-gombbal egyenesen a Wiire küldheted az alkalmazást (ehhez a Wiinek és a számítógépnek ugyanazon a hálózaton kell lennie).

   ![](/images/osc/app-download-OSCDL-linux.png)

8. Ha közvetlenül került letöltésre egy párbeszéd ablak jelenik meg, érdeklődve a letöltési helyéről. Az OSCDL jelez számodra, ha olyan tárolót észlel, ahol van apps mappa, és ha ide töltöttél le, akkor automatikusan kicsomagolja a homebrew-ot és az készen is áll a használatra. Egyébként megadhatsz egy kézi letöltési helyet, és kicsomagolhatod magadnak.

   ![](/images/osc/download-prompt-OSCDL-linux.png)

9. Csatlakoztasd az SD kártyát vagy az USB drive-ot a Wiihez és nyisd meg a Homebrew Channelt. Ha minden jól ment, akkor a letöltött program meg fog jelenni a listán.

::: tip

Folytatás az [ajánlott Homebrew](recommended-homebrew)-okkal

Ebben az útmutatóban listázzuk a szerintünk beszerezni érdemes homebrew alkalmazásokat. Ezek között vannak segédeszközök, emulátorok és még sok más.

:::

::: tip

[Vissza a Honlap navigációra](site-navigation)

:::
