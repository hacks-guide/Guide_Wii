# A Homebrew Channel és BootMii telepítése

:::details Technikai részletek (opcionális)

A BootMiit kétféle módon telepítheted: közvetlenül a Wii bootloaderének boot2-es részébe, vagy egy IOS-on keresztül. A programot javasolt a boot2-be telepíteni, ugyanis így szélesebb körű védelmet nyújthat. Ehhez egy olyan Wiivel kell rendelkezned, ami egy olyan biztonsági réssel rendelkezik a boot1-es részében, amely csak a 2009 előtt gyártott példányokon fordul elő. A legtöbb esetben elégséges a BootMii telepítés IOS-ként, egészen addig, amíg a [Priiloader](priiloader) is telepítve van.

:::

::: warning

SD kártya nélkül nem telepítheted a BootMii-t, függetlenül attól, hogy IOS-ként vagy boot2-ként telepítetted.
Bármikor telepítheted később](hackmii).

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

9. Ha van `Install BootMii as boot2` opciód, azt is hatjsd végre.

    ![](/images/hackmii/bootmii_install4.png)

10. Válaszd az `Exit`-et.

11. Ezután a konzol el fogja indítani a Homebrew Channelt.

    ![](/images/hbc/blank.png)

## Kötelező olvasnivaló

Az útmutató befejezése után képes leszel homebrew alkalmazásokat futtatni – ezek között, ha sikerült telepítened, a BootMiit is, amellyel biztonsági mentéseket készíthetsz és tölthetsz vissza a Wii belső tárhelyéről.

Megjegyzés: Ha homebrew alkalmazásokat telepítesz SD kártyára vagy USB drive-ra, a könyvtárfelépítésed így kell, hogy kinézzen:

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

[Folytatás a NAND biztonsági mentés készítése a BootMii segítségével](bootmii) fejezettel

A NAND biztonsági mentés ezen a ponton erősen ajánlott, mivel használható arra, hogy helyreállitsunk vele brickelésből.

:::

::: tip

Tipp: Ha egy Wii-re telepítve van a BootMii boot2 néven, akkor a lemezegység ismét felvillan a POWER gomb megnyomása utáni első villanást követően.

:::
