# A Homebrew Channel és BootMii telepítése

:::details Technikai részletek (opcionális)

A BootMiit kétféle módon telepítheted: közvetlenül a Wii bootloaderének boot2-es részébe, vagy egy IOS-on keresztül. A programot javasolt a boot2-be telepíteni, ugyanis így szélesebb körű védelmet nyújthat. Ehhez egy olyan Wiivel kell rendelkezned, ami egy olyan biztonsági réssel rendelkezik a boot1-es részében, amely csak a 2009 előtt gyártott példányokon fordul elő. In most cases, installing BootMii as IOS should be fine, as long as you also install [Priiloader](priiloader).

:::

::: warning

SD kártya nélkül a módszertől függetlenül nem telepítheted a BootMiit.
You can always [install it later](hackmii).

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

6. Nyomd meg a `Back`, majd a `BootMii` gombot.

   ![](/images/hackmii/bootmii_install.png)

7. Nyomd meg `Install BootMii as IOS` gombot.

   ![](/images/hackmii/bootmii_install1.png)

   ![](/images/hackmii/bootmii_install2.png)

   ![](/images/hackmii/bootmii_install3.png)

   ![](/images/hackmii/bootmii_install_ok.png)

8. Miután befejeződött, nyomd meg a `Continue` gombot.

9. If you have the option to `Install BootMii as boot2`, please do so as well.

   ![](/images/hackmii/bootmii_install4.png)

10. Válaszd az `Exit`-et.

11. Ezután a konzol el fogja indítani a Homebrew Channelt.

    ![](/images/hbc/blank.png)

## Olvass el!

Az útmutató befejezése után képes leszel nemhivatalos alkalmazásokat futtatni – ezek között, ha sikerült telepítened, a BootMiit is, amellyel biztonsági mentéseket készíthetsz és tölthetsz vissza a Wii belső tárhelyéről.

Megjegyzés: Ha nemhivatalos alkalmazásokat telepítesz SD kártyára vagy pendrive-ra, a könyvtárfelépítésed így kell, hogy kinézzen:

```
💾 SD kártya vagy USB Drive
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

::: tip

[Continue to making a NAND Backup using BootMii](bootmii)

Making a NAND backup at this point is highly recommended, as they can be used to recover from bricks.

:::

::: tip

Tipp: Ha egy Wii-re telepítve van a BootMii boot2 néven, akkor a lemezegység ismét felvillan a POWER gomb megnyomása utáni első villanást követően.

:::
