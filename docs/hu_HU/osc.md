# Az Open Shop Channel telepítése

::: info

Az angol nyelvű Open Shop Channel-támogatáshoz csatlakozz az [Open Shop Channel Discord](https://discord.gg/osc) szerverére.

:::

Az [Open Shop Channel](https://oscwii.org/) egy dhtdht020 által készített program, ami a nemhivatalos alkalmazások jelenleg legmegbízhatóbb forrása.

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

3. Csatlakoztasd az SD kártyát vagy a pendrive-ot a Wiihez és nyisd meg a Homebrew Channelt! Ha minden jól sikerült, a Homebrew Browser most el fog indulni.

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

3. Keress meg egy alkalmazást, amit le szeretnél tölteni, majd nyomd meg a „Download” („letöltés”)-gombot! Ha szeretnéd, akkor a „Send to Wii”-gombbal egyenesen a Wiire küldheted az alkalmazást (ehhez a Wiinek és a számítógépnek ugyanazon a hálózaton kell lennie).

   ![](/images/osc/app-download-OSCDL.png)

4. If downloaded directly, a dialog box will pop up asking you for a download location. OSCDL will prompt you if it detects a storage device with an apps directory, and if downloaded there, it will automatically unzip the homebrew and be ready to use. Otherwise, you may specify a manual download location and unzip it yourself.

   ![](/images/osc/download-prompt-OSCDL.png)

5. Csatlakoztasd az SD kártyát vagy a pendrive-ot a Wiihez és nyisd meg a Homebrew Channelt! Ha minden jól ment, akkor a letöltött program meg fog jelenni a listán.

### macOS-es/Linuxos lépések

::: warning

You will need Python 3 installed in order to use OSCDL on these platforms.

:::

1. Download the source code for OSCDL, either the `.zip` or the `.tar.gz`.

   ![](/images/osc/source-code-download-OSCDL.png)

2. Extract the archive to a location on your computer that you would like to use OSCDL in.

3. Open the location of the extracted files in a terminal and run the command `pip install -r requirements.txt`. This will download Python packages needed to run OSCDL.

   ![](/images/osc/satisfy-requirements-OSCDL.png)

4. Futtasd a `python3 oscdl.py` parancsot. This will open the program. Optionally, you can also create a desktop shortcut that runs this command for easier access.

   ![](/images/osc/run-OSCDL-terminal.png)

5. Keress meg egy alkalmazást, amit le szeretnél tölteni, majd nyomd meg a „Download” („letöltés”)-gombot! Ha szeretnéd, akkor a „Send to Wii”-gombbal egyenesen a Wiire küldheted az alkalmazást (ehhez a Wiinek és a számítógépnek ugyanazon a hálózaton kell lennie).

   ![](/images/osc/app-download-OSCDL-linux.png)

6. If downloaded directly, a dialog box will pop up asking you for a download location. OSCDL will prompt you if it detects a storage device with an apps directory, and if downloaded there, it will automatically unzip the homebrew and be ready to use. Otherwise, you may specify a manual download location and unzip it yourself.

   ![](/images/osc/download-prompt-OSCDL-linux.png)

7. Csatlakoztasd az SD kártyát vagy a pendrive-ot a Wiihez és nyisd meg a Homebrew Channelt! Ha minden jól ment, akkor a letöltött program meg fog jelenni a listán.

::: tip

Folytatás az [ajánlott Homebrew](recommended-homebrew)-okkal

Ebben az útmutatóban listázzuk a szerintünk beszerezni érdemes homebrew alkalmazásokat. Ezek között vannak segédeszközök, emulátorok és még sok más.

:::

::: tip

[Return to site index](site-navigation)

:::
