---
title: "cIOS"
---

{% include toc title="Tabel de Conținut" %}

{% capture technical_info %}
<summary><em>Technical Details (optional)</em></summary>
cIOS (Custom IOS) are IOS that are patched to allow custom functionality. Chiar dacă [cIOS](https://wiibrew.org/wiki/Custom_IOS) a fost în mare înlocuit de AHBPROT, care oferă acces complet a hardware-ului, acesta încă are aplicații folositoare. De exemplu, acesta permite folosirea unor USB loader-e precum USB Loader GX și WiiFlow, precum și alte aplicații homebrew precum SaveGame Manager GX. Poți sări acest proces dacă vrei, dar în general îți îmbunătățește consola Wii fără niciun dezavantaj.

{% endcapture %}
<details>{{ technical_info | markdownify }}</details>
{: .notice--info}

This guide is only intended for Wii users. If you have a Wii mini, follow [this guide](cios-mini) instead. Dacă ai un Wii U (vWii), urmărește în schimb [acest ghid](cios-vwii).
{: .notice--warning}

Do not attempt to install a vWii/Wii mini IOS or System Menu on the Wii. Făcând acest lucru este foarte probabil să cauzezi [brick](bricks#ios-brick) consolei tale.
{: .notice--warning}

### Instrumente necesare

* Un Wii
* Un card SD sau o unitate USB
* [d2x cIOS Installer](/assets/files/d2x-cios-installer.zip)

Asigură-te că dacă folosești un card SD, comutatorul de blocare este în poziția deblocată, altfel nu vei putea alege opțiunile corecte în instalator.
{: .notice--warning}

### Instrucțiuni

#### Secțiunea I - Descărcare

Dacă nu folosește Windows, poți descărca & rula [acest script](/assets/files/d2x_offline_ios.sh) și îți va descărca fișierele WAD pentru tine.
{: .notice--info}

If you are able to connect your Wii to the internet, you may skip to [Section II](cios#section-ii---installing)
{: .notice--info}

1. Oprește-ți consola.
1. Introdu cardul tău SD sau unitatea ta USB în calculator.
1. Pe calculator, descarcă [NUS Downloader](https://github.com/WiiDatabase/nusdownloader/releases/latest/download/NUSD-Mod-NUS-Fix.zip).
1. Copiază toate fișierele din fișierul `.zip` NUS Downloader într-un dosar din calculatorul tău.
1. Rulează `NUS Downloader.exe`.
1. Navighează la `Database` > `IOS` > `IOS38`, apoi alege `v4123`.
    + Asigură-te că "Pack WAD" este bifat.
    + *Nu* bifa "Patch IOS". Asta este sarcina Instalatorului de cIOS.
1. Apasă pe `Start NUS Download!`.
1. Repetă pașii de mai sus pentru `IOS56 v5661`, `IOS57 v5918` și `IOS58 v6175`.
1. Odată ce procesul este complet, va apărea un dosar numit `titles` în același dosar cu NUS Downloader.
1. Deschide dosarul `titles` și navighează prin ele până când găsești cele patru fișiere WAD pe care le-ai descărcat.
1. Pune fiecare fișier WAD în rădăcina cardului tău SD sau unității tale USB.
    + Acesta trebuie să fie același dispozitiv care conține aplicația d2x cIOS Installer.

Fișierele WAD ar trebui să fie în cardul tău SD în felul următor: ![](/images/cios/d2x_offline_ios.png)
{: .notice--info}

#### Secțiunea II – Instalare


1. Copiază dosarul `apps` din fișierul `.zip` d2x-cios-installer în rădăcina cardului tău SD sau unității tale USB.
1. Reintrodu cardul tău SD sau unitatea ta USB în consolă.
1. Pornește-ți consola.
1. Rulează Homebrew Channel.
1. Rulează d2x cIOS Installer din lista de aplicații homebrew.
1. Setează opțiunile astfel:

    ```
    Select cIOS <d2x-v11-beta1>
    Select cIOS base <38>
    Select cIOS slot <248>
    Select cIOS revision <65535>
    ```

    ![](/images/cios/d2x_v11_248.png)

    Avertismentul "`(c)IOS detected in slot ### will be overwriitten`" poate fi ignorat în siguranță.
    {: .notice--info}

    Dacă vezi mesajul "`Slot ### already used in batch settings`" sau "`cIOS already added in batch with revision ##### and slot ###`", apasă `-` pentru a dezactiva modul batch. <br> (Dacă încerci să ieși din instalator, butonul este B, nu Home.)
    {: .notice--info}

1. Apasă `A`. Acest lucru te va aduce la harta sloturilor:

    ![](/images/cios/d2x_summary.png)

1. Apasă `A` din nou.

    ![](/images/cios/d2x_installation.png)

1. Odată ce instalarea este finalizată, vei fi adus înapoi la harta sloturilor. Asigură-te că slotul care tocmai a fost instalat este evidențiat verde.

    ![](/images/cios/d2x_log.png)

    Dacă slotul este evidențiat roșu, încearcă să mai instalezi cIOS-ul din nou. <br> Dacă primești o eroare înainte/după etapa de descărcare, apasă B pentru a ieși și întoarce-te la [Secțiunea I](#section-i---downloading).
    {: .notice--info}

1. Apasă `A`. Asta te va întoarce la ecranul de configurare.
1. Repetă ultimii 5 pași cu următoarele configurații:

    + Instalarea cIOS 249

        ```
        Select cIOS <d2x-v11-beta1>
        Select cIOS base <56>
        Select cIOS slot <249>
        Select cIOS revision <65535>
        ```

        ![](/images/cios/d2x_v11_249.png)

    + Instalarea cIOS 250

        ```
        Select cIOS <d2x-v11-beta1>
        Select cIOS base <57>
        Select cIOS slot <250>
        Select cIOS revision <65535>
        ```

        ![](/images/cios/d2x_v11_250.png)

    + Instalarea cIOS 251

        ```
        Select cIOS <d2x-v11-beta1>
        Select cIOS base <58>
        Select cIOS slot <251>
        Select cIOS revision <65535>
        ```

        ![](/images/cios/d2x_v11_251.png)

1. Odată ce ai terminat cu toate cele 4 cIOS-uri, apasă B pentru a te întoarce în Homebrew Channel.

Continuă la [Instalarea Open Shop Channel](osc) <br> Acum că sistemul tău Wii are protecție anti-brick adecvată, poți instala Open Shop Channel, o sursă de încredere pentru aplicații homebrew care poate fi accesată atât din cât și din afara consolei Wii.
{: .notice--info}
