---
title: "Priiloader"
---

{% include toc title="Tabel de Conținut" %}

[Priiloader](https://github.com/DacoTaco/priiloader) este o unealtă esențială creată de [DacoTaco](https://github.com/DacoTaco) care adaugă un nivel de protecție anti-brick pentru consola ta Wii. Acesta se încarcă înaintea Meniului de Sistem Wii. Această unealtă poate de asemenea să aplice modificări care sunt folosite pentru a îmbunătății, debloca și repara multe funcții ale Meniului de Sistem.

De asemenea, poate fi folosit pentru a rula rapid orice aplicație Wii sau aplicație Homebrew, sau pentru a schimba modul în care sistemul Wii pornește.

### Installing Priiloader

* Un card SD sau o unitate USB
* Installing a theme after installing Priiloader **will brick your vWii.**
* [Load Priiloader](https://oscwii.org/library/app/loadpriiloader) (fișierul `.zip`)

#### What you need

* Un card SD
* [Priiloader Wii U Forwarder](https://github.com/DacoTaco/priiloader/releases/download/0.10.0/PriiloaderWiiUForwarder.zip) (descărcare directă)
    * [Aroma](https://wiiu.hacks.guide/#/aroma/getting-started) trebuie să fie instalat pe consola ta pentru ca Priiloader Wii U Forwader să funcționeze.

### Instrucțiuni

#### Secțiunea I - Pregătire

1. Download the Priiloader installer and LoadPriiloader apps.
1. Extract both apps to the root of your SD card or USB drive.
1. Copiază dosarul `apps` din fișierul `.zip` LoadPriiloader către rădăcina cardului tău SD sau unității tale USB.
1. Copiază dosarul `apps` din fișierul `.zip` priiloader către rădăcina cardului tău SD sau unității tale USB.
1. (Doar pentru vWii) Copiază dosarul `wiiu` din fișierul `.zip` PriiloaderWiiUForwarder către rădăcina cardului tău SD.
1. Reintrodu cardul tău SD sau unitatea ta USB în consolă.

#### Secțiunea II – Instalarea Priiloader

1. Launch the Homebrew Channel on your Wii.
1. Launch the Priiloader installer.
1. Launch Priiloader Installer from the list of homebrew.

    ![](/images/hbc/priiloader-and-loadpriiloader.png)

1. Apasă butonul + pe Wii Remote sau butonul A pe un controller GameCube.

    ![](/images/priiloader/installer.png)

    ![](/images/priiloader/installing.png)

1. Apasă A pentru a te întoarce în Homebrew Channel.

#### Secțiunea III - Intrarea în Priiloader

1. Launch the Homebrew Channel, and launch the Load Priiloader app.
1. Dispozitivul tău va încărca meniul Priiloader.

    ![](/images/priiloader/menu.png)

În viitor, pentru a intra în Priiloader vei putea:

+ Ține apăsat RESET pe un Wii în timp ce îl pornești
    + Doar pentru Wii
+ Ține apăsat tasta ESC pe o tastatură USB conectată în timp ce pornești consola
    + Wii, vWii și Mini
+ Rula unealta "Load Priiloader" din HBC
    + Wii, vWii și Mini
+ Rula unealta "Priiloader Wii U Forwarder"
    + Doar pentru vWii

#### Secțiunea IV - Configurarea Priiloader

1. Derulează în jos până la `System Menu Hacks` și apasă `A`.

    ![](/images/priiloader/menu_hacks.png)

    Dacă ai pus instalatorul Priiloader pe o unitate USB, asigură-te că nu ai un card SD introdus în același timp. <br> Dacă faci asta, Priiloader va eșua să găsească fișierul `hacks_hash.ini`.
    {: .notice--warning}

1. Pentru următoarele opțiuni, activează opțiunile în funcție de consola ta:
    + Wii:
        + Dacă folosești modul 480p: `480p graphics fix in the system menu`
        + Block Disc Updates
        + Block Online Updates
        + Dacă NU folosești un monitor CRT: `Remove Deflicker`
    + vWii:
        + Block Online Updates
        + Wii System Settings via Options Button
        + Dacă NU folosești un monitor CRT: `Remove Deflicker`
    + Wii mini:
        + Block Disc Updates
        + Dacă NU folosești un monitor CRT: `Remove Deflicker`
1. Derulează în jos până la `save settings` și apasă A.
1. Apasă `B` pentru a te întoarce în meniul principal.

Poți vedea pagina [Folosirea Priiloader](priiloader-usage) pentru mai multe informații despre celelalte opțiuni din Priiloader și System Menu Hacks.
{: .notice--info}

[View the Brick Prevention Guidelines](bricks#brick-prevention)<br> These guidelines list ways that will help avoid bricking your Wii, beyond just having BootMii and Priiloader installed.
{: .notice--info}

### Wii: Următorii Pași

Continue to [cIOS](cios)<br> This guide provides steps on how to get a basic set of cIOS installed on your Wii, enabling functionality on apps like USB loaders.
{: .notice--info}

### vWii: Următorii Pași

Continuă la [vWii cIOS](cios-vwii)<br> Acest ghid oferă pași despre cum să instalezi un set de cIOS-uri pe vWii, activând funcționalitatea pentru aplicații precum USB loadere.
{: .notice--info}

### Additional options

Continuă la [vWii cIOS](cios-mini)<br> Acest ghid oferă pași despre cum să instalezi un set de cIOS-uri pe Wii mini, activând funcționalitatea pentru aplicații precum USB loadere.
{: .notice--info}
