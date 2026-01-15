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

Python 3 telepítésre van szükséged az OSCDL haszmálatához ezeken a platformokon.

:::

1. Töltsd le az OSCDL forráskódját, akár `.zip` akár `.tar.gz` formátumban.

   ![](/images/osc/source-code-download-OSCDL.png)

2. Csomagold ki az állományt a számítógépedre egy olyan helyre ahonnan használnád.

3. Nyisd meg a kicsomagolt fájlok helyét egy terminalban és futtasd a `pip install -r requirements.txt` parancsot. Ez letölti az OSCDL futtatásához szükséges csomagokat.

   ![](/images/osc/satisfy-requirements-OSCDL.png)

4. Futtasd a `python3 oscdl.py` parancsot. Ez megnyitja a programot. Opcionálisan, a kényelmesebb használathoz létrehozhatsz egy asztali parancsikont, ami ezt a parancsot futtatja.

   ![](/images/osc/run-OSCDL-terminal.png)

5. Keress egy alkalmazást, amit le szeretnél tölteni, majd nyomd meg a „Download” gombot. Ha szeretnéd, akkor a „Send to Wii”-gombbal egyenesen a Wiire küldheted az alkalmazást (ehhez a Wiinek és a számítógépnek ugyanazon a hálózaton kell lennie).

   ![](/images/osc/app-download-OSCDL-linux.png)

6. Ha közvetlenül került letöltésre egy párbeszéd ablak jelenik meg, érdeklődve a letöltési helyéről. Az OSCDL jelez számodra, ha olyan tárolót észlel, ahol van apps mappa, és ha ide töltöttél le, akkor automatikusan kicsomagolja a homebrew-ot és az készen is áll a használatra. Egyébként megadhatsz egy kézi letöltési helyet, és kicsomagolhatod magadnak.

   ![](/images/osc/download-prompt-OSCDL-linux.png)

7. Csatlakoztasd az SD kártyát vagy az USB drive-ot a Wiihez és nyisd meg a Homebrew Channelt. Ha minden jól ment, akkor a letöltött program meg fog jelenni a listán.

::: tip

Folytatás az [ajánlott Homebrew](recommended-homebrew)-okkal

Ebben az útmutatóban listázzuk a szerintünk beszerezni érdemes homebrew alkalmazásokat. Ezek között vannak segédeszközök, emulátorok és még sok más.

:::

::: tip

[Vissza a Honlap navigációra](site-navigation)

:::
