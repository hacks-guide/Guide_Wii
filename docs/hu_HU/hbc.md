---
outline: false
---

# A Homebrew Channel és BootMii telepítése

<br>

::::: tabs

:::: tab Wii

## A Homebrew Channel és BootMii telepítése a Wii-hez

Ez az útmutató végig vezet a Homebrew Channeé és a BootMii telepítésén. A Homebrew Channel az ahova mész a homebrew alkalmazásaid indításához; a BootMii lehetővé teszi a Wii NAND tárolójának mentését és helyreállítását.

::: warning

SD kártya nélkül nem telepítheted a BootMii-t, függetlenül attól, hogy IOS-ként vagy boot2-ként telepítetted.

Bármikor telepítheted később](hackmii).

:::

:::details Nyilatkozat a boot2-vel használt BootMii-ről

A BootMiit kétféle módon telepítheted: közvetlenül a Wii bootloaderének boot2-es részébe, vagy egy IOS-on keresztül. Ha lehetésges, akkor boot2-ként javasolt telepíteni, mert bővített brick védelmet ad és korábban tölthető be más brick lehetőségeknék, azonban az ilyen a sérülékeny boot1-gyel rendelkező Wii-ok egyre ritkábbak; mindegyik 2009 előtt gyártott.

A legtöbb esetben nem tudod telepíteni a BootMii-t a boot2 alá. A BootMii telepítése IOS-ként általában elég jó akkor, ha a [Priiloader](priiloader)-t is telepíted. Ha VAN boot2-re telepítés opciód, akkor boot2-ként és IOS-ként os telepíteni kellene, ahogy alább leírt, így el tudod indítani a BootMii-t más módon is, mint a konzol indításával.

Ne felejtsd el, ha telepítve van a BootMii boot2-ként, akkor a lemezegység ismét felvillan a POWER gomb megnyomása utáni első villanást követően.

:::

## Lépések

1. Ennél a lépésnél a konzolodnak már mutatnia kell az előző részben elindított HackMii-telepítőt.

   - A telepítő fel fog mutatni egy átverésekre figyelmeztető üzenetet.

   ![](/images/hackmii/scam.png)

2. Várj 30 másodpercet, amíg meg nem jelenik a „Press 1 to continue”-üzenet, majd nyomd meg az 1-es gombot!

3. Válaszd a `Continue`-t.

   ![](/images/hackmii/test_results.png)

4. Válaszd az `Install the Homebrew Channel`-t.

   ![](/images/hackmii/hbc_install.png)

5. Miután befejeződött, nyomd meg a `Continue` gombot.

   ![](/images/hackmii/hbc_install_ok.png)

6. Válaszd a `BootMii...`-t.

   ![](/images/hackmii/bootmii_install.png)

7. Nyomd meg `Install BootMii as IOS` gombot.

   ![](/images/hackmii/bootmii_install1.png)

   ![](/images/hackmii/bootmii_install2.png)

   ![](/images/hackmii/bootmii_install3.png)

   ![](/images/hackmii/bootmii_install_ok.png)

8. Miután befejeződött, nyomd meg a `Continue` gombot.

9. Ha van `Install BootMii as boot2` opciód, azt is hatjsd végre.

   ![](/images/hackmii/bootmii_install4.png)

10. Válaszd a `Return to the main menu`-t, majd válaszd az `Exit`-et.

11. Ezután a konzol el fogja indítani a Homebrew Channelt.

    ![](/images/hbc/blank.png)

### Kötelező olvasnivaló

Az útmutató befejezése után képes leszel homebrew alkalmazásokat futtatni – ezek között, ha sikerült telepítened, a BootMiit is, amellyel biztonsági mentéseket készíthetsz és tölthetsz vissza a Wii belső tárhelyéről.

Megjegyzés: Ha homebrew alkalmazásokat telepítesz SD kártyára vagy USB drive-ra, a könyvtárfelépítésed így kell, hogy kinézzen:

```shell
💾 SD kártya vagy pendrive
| ╸📁 apps
    | ╸📁 EgyikAlkalmazás
        | ╸📄 boot.dol
        | ╸📄 meta.xml
        | ╸📄 icon.png
    | ╸📁 MásikAlkalmazás
        | ╸📄 boot.dol
        | ╸📄 meta.xml
        | ╸📄 icon.png
```

`AppName1` és `AppName2` helyfoglaló nevek. Az `apps` mappában ne hozz létre egy másik `apps` nevű mappát.

---

::: tip

[Folytatás a NAND biztonsági mentés készítése a BootMii segítségével](bootmii) fejezettel

A NAND biztonsági mentés ezen a ponton erősen ajánlott, mivel használható arra, hogy helyreállitsunk vele brickelésből.

:::

::::

:::: tab Wii mini

## Homebrew Channel telepítés a Wii mini-hez

Ez az útmutató bemutatja, hogyan telepíthed a Homebrew Channel-t, ahova menned kell, ha homebrew alkalmazásokat indítanál.

::: warning

Ugyan egy Wii minire is lehetséges telepíteni a BootMiit, de egy SD kártya-olvasó felhegesztését igényli. Ehhez különleges szerszámokkal kell kinyitnod a Wii minidet, ezért nem ajánlott.

:::

### Lépések

1. Ennél a lépésnél a konzolodnak már mutatnia kell az előző részben elindított HackMii-telepítőt.

   - A telepítő fel fog mutatni egy átverésekre figyelmeztető üzenetet.

   ![](/images/hackmii/scam.png)

2. Várj 30 másodpercet, amíg meg nem jelenik a „Press 1 to continue”-üzenet, majd nyomd meg az 1-es gombot!

3. Válaszd a `Continue`-t.

   ![](/images/hackmii/test_results.png)

4. Válaszd az `Install the Homebrew Channel`-t.

   ![](/images/hackmii/hbc_install.png)

5. Miután befejeződött, nyomd meg a `Continue` gombot

   ![](/images/hackmii/hbc_install_ok.png)

6. Válaszd az `Exit`-et.

7. Ezután a konzol el fogja indítani a Homebrew Channelt.

   ![](/images/hbc/blank.png)

### Kötelező olvasnivaló

Most már tudod használni a Homebrew Channel-t arra, hogy homebrew appokat indíts.

Megjegyzés: Ha homebrew alkalmazásokat telepítesz az USB drive-odra, a könyvtárfelépítésed így kell, hogy kinézzen:

```shell
💾 USB drive
| ╸📁 apps
    | ╸📁 AppName1
        | ╸📄 boot.dol
        | ╸📄 meta.xml
        | ╸📄 icon.png
    | ╸📁 AppName2
        | ╸📄 boot.dol
        | ╸📄 meta.xml
        | ╸📄 icon.png
```

`AppName1` és `AppName2` helyfoglaló nevek. Az `apps` mappában ne hozz létre egy másik `apps` nevű mappát.

---

::: tip

[Folytatás a NAND biztonsági mentés készítése a [RealWnd segítségével](wnd-mini) fejezettel

A NAND biztonsági mentés ezen a ponton erősen ajánlott, mivel használható arra, hogy helyreállitsunk vele brickelésből.

:::

::::
