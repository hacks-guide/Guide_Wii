---
title: "Credite"
---

{% include toc title="Tabel de Conținut" %}

{% capture technical_info %}
<summary>Detalii Tehnice (opțional)</em></summary>
BlueBomb este un exploit care profită de un flaw din librăriile Bluetooth pentru Wii și Wii mini. Chiar dacă este singurul exploit folosit pentru Wii mini, el poate fi rulat și pe un Wii obișnuit (regular Wii).

Acest exploit ajută și repararea consolei din anumite stricări, cum ar fi defecțiuni de banner și (unor) defecțiuni de teme.

{% endcapture %}
<details>{{ technical_info | markdownify }}</details>
{: .notice--info}

Este **foarte** recomandat să nu folosiți **niciun** tutorial video pentru modarea consolei Wii mini, având o șansă extrem de mare de a-l **distruge**.
{: .notice--warning}

Dacă ai nevoie de ajutor referitor la acest tutorial, te rog să intri pe [serverul de Discord Wii mini Hacking](https://discord.gg/6ryxnkS) (recomandat)
{: .notice--info}

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
1. Re-inserați stick-ul în consolă.
    + Pentru Wii mini, portul USB este pe spate.
    + Pentru Wii normal, folosește portul de jos (sau portul din dreapta dacă este în picioare).
1. Pornește consola.
1. Mergi la `Wii Settings`.
1. Notează litera care este notată după versiunea sistemului.
    + Acea literă corespunde cu regiunea consolei, pe care trebuie să-l știi pentru pașii corespunzători.

    ![](/images/wii/SystemMenuVersion.png)

1. Oprește consola.
1. Pornește Linux-ul și asigură-te că ești conectat la internet.
1. Deschide terminalul
1. Rulează următoarele comenzi:

    ```bash
    wget https://wii.hacks.guide/assets/files/bluebomb-helper.sh
    chmod +x bluebomb-helper.sh
    ./bluebomb-helper.sh
    ```

1. Helper-ul va descărca apoi fișierele necesare și îți va cere informații despre consola ta.
    + Dacă ai selectat Wii mini, îți va cere să introduci regiunea consolei. Acest lucru poate fi determinat de ultima literă a versiunii Wii Menu (`U` pentru modelul **USA** și `E` pentru modelul **PAL**).
    + Dacă ai selectat Wii, îți va cere să introduci versiunea Wii Menu (Ce ai determinat în pasul 4)
1. Pornește consola.
    + **NU** conecta niciun Wii Remote.
1. Apasă butonul Sync în mod repetat până ce terminalul afișează `got connection handle` (are conexiune).
    + Acest lucru ar putea necesita numeroase încercări.
1. Dacă exploit-ul a funcționat, dispozitivul va intra în HackMii Installer.
    + Dacă nu intenţionezi să o utilizezi mai târziu, poți închide acum Linux-ul.

Dacă folosești un Wii: [Continuă cu Instalarea Homebrew Channel și BootMii](hbc)<br>
{: .notice--info}

Dacă folosești un Wii mini: [Continuă cu Instalarea Homebrew Channel](hbc-mini)
{: .notice--info}
