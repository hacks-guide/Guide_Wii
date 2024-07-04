---
title: "Homebrew Channel și Instalare BootMii"
---

{% include toc title="Tabel de Conținut" %}

{% capture technical_info %}
<summary><em>Technical Details (optional)</em></summary>
Homebrew Channel este locul unde poți lansa aplicații homebrew. BootMii este o bucată de software care poate crea un backup și restaura memoria NAND a consolei tale Wii, iar dacă este instalată în boot2, poate oferi protecție anti-brick.

BootMii poate fi instalat în două moduri: direct pe o parte a bootloader-ului consolei Wii numit boot2 sau către un IOS. BootMii ca boot2 este preferat deoarece oferă o protecție anti-brick puternică, însă consolele Wii cu un boot1 vulnerabil care permite această instalare sunt destul de rare, acestea fiind fabricate înainte de 2009. În majoritatea cazurilor, instalarea BootMii ca IOS ar trebui să fie în regulă cât timp instalezi și [Priiloader](priiloader).

{% endcapture %}
<details>{{ technical_info | markdownify }}</details>
{: .notice--info}

Dacă nu ai un card SD, nu poți instala sau folosi BootMii, indiferent că îl instalezi ca IOS sau boot2. Poți întotdeauna să-l [instalezi mai târziu](hackmii).
{: .notice--warning}

### Instrucțiuni

1. Consola ta ar trebui să fie pornită și să afișeze Instalatorul HackMii din partea trecută a ghidului.
    + Vei vedea un ecran de avertizare pentru înșelăciune.

    ![](/images/hackmii/scam.png)

1. Așteaptă 30 de secunde pentru ca mesajul "Press 1 to continue" să apară, apoi apasă 1.
1. Alege `Continue`.

    ![](/images/hackmii/test_results.png)

1. Alege `Install the Homebrew Channel`.

    ![](/images/hackmii/hbc_install.png)

1. Odată ce este complet, alege `Continue`.

    ![](/images/hackmii/hbc_install_ok.png)

1. Alege `Back`, apoi alege `BootMii`.

    ![](/images/hackmii/bootmii_install.png)

1. Alege `Install BootMii as IOS`.

    ![](/images/hackmii/bootmii_install1.png)

    ![](/images/hackmii/bootmii_install2.png)

    ![](/images/hackmii/bootmii_install3.png)

    ![](/images/hackmii/bootmii_install_ok.png)

1. Odată ce este complet, alege `Continue`.
1. Dacă ai opțiunea `Install BootMii as boot2`, te rugăm să faci și acest lucru.

    ![](/images/hackmii/bootmii_install4.png)

1. Alege `Exit`.
1. Consola ta va rula Homebrew Channel.

### Citire necesară

Acum poți să folosești Homebrew Channel pentru a rula aplicații homebrew cât și BootMii pentru a crea un backup și a restaura memoria ta NAND în cazul în care ai putut să-l instalezi.

Notă: Când instalezi aplicații homebrew pe cardul tău SD sau unitatea ta USB, structura dosarului tău ar trebui să arate astfel:

```
💾 Card SD sau Unitate USB
| ╸📁 apps
    | ╸📁 NumeAplicație1
        | ╸📄 boot.dol
        | ╸📄 meta.xml
        | ╸📄 icon.png
    | ╸📁 NumeAplicație2
        | ╸📄 boot.dol
        | ╸📄 meta.xml
        | ╸📄 icon.png
```

`NumeAplicație1` și `NumeAplicație2` sunt nume înlocuitoare. Nu crea mai multe dosare `apps` înăuntrul dosarului `apps` în sine.

[Continuă la crearea unui Backup a memoriei NAND folosind BootMii](bootmii)<br> Crearea unui backup a memoriei NAND în acest moment este foarte recomandat pentru că pot fi folosite pentru a repara un brick.
{: .notice--info}

Sfat: Dacă un Wii are BootMii instalat ca boot2, unitatea de discuri va clipi foarte puțin în urma clipirii imediate care se întâmplă când apeși pe Butonul POWER.
{: .notice--info}
