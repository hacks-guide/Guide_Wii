---
title: "A Homebrew Channel és BootMii telepítése"
---

{% include toc title="Tartalomjegyzék" %}

{% capture technical_info %}
<summary><em>Technikai részletek (nem kötelező)</em></summary>
A Homebrew Channel egy olyan program, ami listázza és képes elindítani a konzolon található nemhivatalos („homebrew”) alkalmazásokat. A BootMii egy olyan program, ami képes biztonsági mentést készíteni vagy visszatölteni a Wii belső tárhelyéről. Ha a rendszer boot2-es részébe telepíted, még védelmet is nyújthat a konzol elrontása ellen.

A BootMiit kétféle módon telepítheted: közvetlenül a Wii bootloaderének boot2-es részébe, vagy egy IOS-on keresztül. A programot javasolt a boot2-be telepíteni, ugyanis így szélesebb körű védelmet nyújthat. Ehhez egy olyan Wiivel kell rendelkezned, ami egy olyan biztonsági réssel rendelkezik a boot1-es részében, amely csak a 2009 előtt gyártott példányokon fordul elő. A legtöbb esetben elégséges az IOS-es telepítés a [Priiloader](priiloader) mellett.

{% endcapture %}
<details>{{ technical_info | markdownify }}</details>
{: .notice--info}

SD kártya nélkül a módszertől függetlenül nem telepítheted a BootMiit. A későbbi telepítés viszont lehetséges.
{: .notice--warning}

### Útmutató

1. Ennél a lépésnél a konzolodnak már mutatnia kell az előző részben elindított HackMii-telepítőt.
    + A telepítő fel fog mutatni egy átverésekre figyelmeztető üzenetet.

    ![](/images/hackmii/scam.png)

1. Várj 30 másodpercet, amíg meg nem jelenik a „Press 1 to continue”-üzenet, majd nyomd meg az 1-es gombot!
1. Nyomd meg a „`Continue`”-gombot!

    ![](/images/hackmii/test_results.png)

1. Nyomd meg az „`Install the Homebrew Channel`”-gombot!

    ![](/images/hackmii/hbc_install.png)

1. Miután a folyamat lezáródott, nyomd meg a „`Continue`”-gombot!

    ![](/images/hackmii/hbc_install_ok.png)

1. Nyomd meg a „`Back`”, majd a „`BootMii`”-gombot!

    ![](/images/hackmii/bootmii_install.png)

1. Nyomd meg az „`Install BootMii as IOS`”-gombot!

    ![](/images/hackmii/bootmii_install1.png)

    ![](/images/hackmii/bootmii_install2.png)

    ![](/images/hackmii/bootmii_install3.png)

    ![](/images/hackmii/bootmii_install_ok.png)

1. Miután a folyamat lezáródott, nyomd meg a „`Continue`”-gombot!
1. Ha a konzolod megfelel a korábban leírt boot2-s követelményeknek, nyomd meg az „`Install BootMii as boot2`”-gombot!

    ![](/images/hackmii/bootmii_install4.png)

1. Nyomd meg az „`Exit`”-gombot!
1. Ezután a konzol el fogja indítani a Homebrew Channelt.

### Olvass el!

You can now use the Homebrew Channel to launch homebrew apps, as well as BootMii for backing up and restoring your NAND if you were able to install it.

Note: When installing homebrew applications on your SD Card or USB drive, your folder structure should look like this:

```
💾 SD Card or USB Drive
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

`AppName1` and `AppName2` are placeholder names. Do not nest multiple `apps` folders inside the `apps` folder itself.

[Continue to making a NAND Backup using BootMii](bootmii)<br> Making a NAND backup at this point is highly recommended, as they can be used to recover from bricks.
{: .notice--info}

Tip: If a Wii has BootMii installed as boot2, your disc drive will flash very briefly after the immediate flash that happens when you press the POWER Button.
{: .notice--info}
