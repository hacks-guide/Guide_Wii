---
outline: false
---

# A Homebrew Channel és BootMii telepítése

<br>

::::: tabs

:::: tab Wii

## A Homebrew Channel és BootMii telepítése a Wii-hez

This guide instructs you on how to install the Homebrew Channel and BootMii. The Homebrew Channel is where you will go to launch homebrew applications, and BootMii allows you to create and restore backups of your Wii's NAND storage.

::: warning

SD kártya nélkül nem telepítheted a BootMii-t, függetlenül attól, hogy IOS-ként vagy boot2-ként telepítetted.

Bármikor telepítheted később](hackmii).

:::

:::details Disclaimer for BootMii with boot2

A BootMiit kétféle módon telepítheted: közvetlenül a Wii bootloaderének boot2-es részébe, vagy egy IOS-on keresztül. If possible, it is urged to install as boot2 as it provides extended brick protection and can be loaded prior to most major brick errors, but Wiis with a vulnerable boot1 that allows this installation are considerably rarer; all having been manufactured before 2009.

In most cases, you will not be able to install BootMii under boot2. Installing BootMii as IOS will usually be good enough, as long as you also install [Priiloader](priiloader). If you DO have the option to install as boot2, you should install both boot2 and IOS as instructed below so that you can launch BootMii in ways other than starting the console.

Please note that if you install Bootmii as boot2, your disc drive will flash very briefly after the immediate flash that happens when you press the POWER Button.

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

This guide instructs you on how to install the Homebrew Channel, which is where you will go to launch homebrew applications.

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

[Folytatás a NAND biztonsági mentés készítése a [RealWnd segítségével](wnd-mini) fejezettel

A NAND biztonsági mentés ezen a ponton erősen ajánlott, mivel használható arra, hogy helyreállitsunk vele brickelésből.

:::

::::
