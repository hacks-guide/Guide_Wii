---
title: "BlueBomb"
---

{% include toc title="Tabel de Conținut" %}

Este **foarte** recomandat să nu folosiți **niciun** tutorial video pentru modarea consolei Wii mini, având o șansă extrem de mare de a-l **distruge**.
{: .notice--warning}

Dacă ai nevoie de ajutor referitor la acest tutorial, te rog să intri pe [serverul de Discord Wii mini Hacking](https://discord.gg/6ryxnkS) (recomandat)
{: .notice--info}

BlueBomb este un exploit care "profită" de un defect găsit în librăriile Bluetooth folosite în Wii și Wii mini. Chiar dacă este singurul exploit folosit pentru Wii mini, el poate fi rulat și pe un Wii obișnuit (regular Wii). Acest exploit ajută la repararea consolei de la anumite "distrugeri", cum ar fi Korean Kii/Eroare 003.

Dacă folosești revizia original a lui Wii, trebuie probabil să cauți [un alt exploit](get-started), deoarece sunt modalități mai ușoare de a ajunge la installer-ul HackMii. Cu toate acestea, există excepții în situații precum recuperarea distrugerii.
{: .notice--info}

Asigură-te că consola este aproape de calculator care rulează exploit-ul, ideal ar trebui să fie mai puțin de un metru.
{: .notice--info}

### Instrumente necesare

* Un calculator cu Linux
    * O mașină virtuală ar merge, dar nu este recomandată din cauza complexității sale în a face ca Bluetooth să funcționeze. Dacă este posibil, te rog să folosești un LiveUSB așa cum este descris mai jos.
    * Dacă ai un Raspberry Pi, îl poți folosi pentru că, cel mai probabil, are Linux instalat deja.
    * Windows Subsystem pentru Linux sau un Chromebook ce rulează modul Linux *nu va funcționa*, deoarece acestea nu au acces direct către adaptor Bluetooth sau porturi USB.
    * Dacă nu aveți Linux, [Ubuntu](https://ubuntu.com/download/desktop) este opțiunea cel mai user-friendly ce poate rula pe PC-urile cu Windows sau MacOS.
        * Dispozitivele 32-bit vor avea nevoie de [Ubuntu 16.04](http://releases.ubuntu.com/16.04/).
        * Pentru dispozitivele 64-bit este recomandat să folosești ediția LTS din cauza stabilității, dar și cele recente vor funcționa.
    * Poți să [flash-uieși un Linux Live pe un stick USB](https://ubuntu.com/tutorials/tutorial-create-a-usb-stick-on-windows#1-overview) fără de a-l instala în calculatorul tău.
* Un adaptor Bluetooth.
    * Un adaptor Bluetooth intern va funcționa.
    * Dacă nu ai unul, asigură-te să iei unul compatibil cu Linux.
* Un stick USB formatat ca FAT32.
    * Acest stick este folosit anume pentru Wii.
* [HackMii Installer v1.2](https://bootmii.org/download/)

### Instrucțiuni

1. Copiază fișierul `boot.elf` din arhiva `hackmii_installer_v1.2.zip` în root-ul stick-ului.
    + (Dacă încerci să repari consola, trebuie să copiezi și aplicațiile homebrew de care ai nevoie în folder-ul /apps/)
    + (Chiar și pentru un Wii mini, bootmii.elf **nu** va funcționa, motivul acesta fiind cu totul diferit și nerelevant. Folosește fișierul boot.elf în toate cazurile).
1. Reinsert your flash drive into your console.
    + For a Wii mini, the USB port is on the back.
    + For a normal Wii, use the bottom port (or the right port if it's upright).
1. Power on your console.
1. Go to `Wii Settings`.
1. Take note in the top right corner of the letter next to the system version.
    + This letter corresponds to your system menu region, which you will need to know for the corresponding steps.

    ![](/images/wii/SystemMenuVersion.png)

1. Power off your console.
1. Start your Linux distro, and ensure you are connected to the internet.
1. Open the Terminal
1. Run the following commands:

    ```bash
    wget https://wii.hacks.guide/assets/files/bluebomb-helper.sh
    chmod +x bluebomb-helper.sh
    ./bluebomb-helper.sh
    ```

1. The helper will then download the required files, and ask for information about your console.
    + If you have selected a Wii mini you will be asked to provide your region. This can be determined by the last letter of the Wii Menu version (`U` for **USA** and `E` for **PAL** models).
    + If you have selected a Wii you will be asked to provide your Wii Menu Version (What you determined in step 4)
1. Power on your console.
    + **Do not** connect any Wii Remotes.
1. Press the Sync button repeatedly until the terminal shows `got connection handle`.
    + This could take numerous attempts.
1. If the exploit was successful, your device will have loaded the HackMii Installer.
    + If you are not planning to use it later, you can now shut down your Linux distro.

If using a Wii: [Continue to Homebrew Channel and BootMii Installation](hbc)<br>
{: .notice--info}

If using a Wii mini: [Continue to Homebrew Channel installation](hbc-mini)
{: .notice--info}