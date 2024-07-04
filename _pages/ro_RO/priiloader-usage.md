---
title: Folosirea Priiloader
---

{% include toc title="Tabel de Conținut" %}

Priiloader este un tool esențial care adaugă un nivel de protecție la „brick” consolei tale Wii. Acesta se încarcă înaintea lui Wii System Menu. Acest tool poate aplica și modificări ce sunt folosite pentru îmbunătățirea, deblocare și/sau repararea unor funcții din System Menu.

În plus, poate fi folosit pentru lansarea rapidă a orice Titlu sau Homebrew, sau pentru a schimba modul în care Wii autobootează.

Această pagină prezintă câteva funcții utile ale Priiloader care ar putea fi de interes.

### Hack-uri pentru System Menu

Priiloader are o selecție mare de opțiuni care, odată activată, schimbă modul de folosire a console Wii la una din alegerile tale. Mai multe informații despre fiecare hack [aici](https://dacotaco.github.io/priiloader/docs/HACKS.html#currently-supported-hacks). În plus, poți vizita [Priiloader FAQ](https://dacotaco.github.io/priiloader/docs/FAQ.html) care conține informații mai relevante despre hack-urile din System Menu.

### Opțiuni suplimentare

Acestea sunt niște lucruri suplimentare pe care le poți face cu Priiloader pentru a îmbunătăți experiența de homebrew. Acest lucru este opţional.

#### Autobotare cu Priiloader

Priiloader îți permite să pornești automat în Homebrew Channel, o aplicație de homebrew sau Priiloader în sine. Acest lucru este opţional.

##### Autobootare o aplicatie Hoembrew

<div id="autobooting-usbloadergx" class="notice--warning" markdown="1">
Dacă ți-ar plăcea să autobootezi USB loader GX, fă acest lucru mai întâi:
  + Descarcă WAD-ul USB Loader GX ([Wii](https://github.com/wiidev/usbloadergx/raw/updates/USBLoaderGX_forwarder%5BUNEO%5D_Wii.wad), [vWii](https://github.com/wiidev/usbloadergx/raw/updates/USBLoaderGX_forwarder%5BUNEO%5D_vWii.wad)).
  + Descarcă [UNEO Channel Booter pentru Priiloader](https://sourceforge.net/projects/usbloadergx/files/Releases/Forwarders%20dols/UNEO%20Channel%20Booter%20for%20Priiloader.zip/download).
  + Instalează WAD-ul cu un WAD manager ca [YAWM ModMii Edition](yawmme).
  + Extrage fișierul `UNEO Channel Booter for Priiloader.zip` oriunde.
  + Copiază `uneoboot.dol` în directorul principal al cardului SD.
Vei instala `uneoboot.dol` în pasul 3.
</div>

1. Deschide Homebrew Channel
1. Deschide „Load Priiloader” din lista de aplicații homebrew.
1. Mergi la opțiunea `Load/Install file` și apasă A.

    ![](/images/priiloader/menu_install_file.png)

1. Mergi prin meniu până când aplicația homebrew dorită este evidențiată, apoi apasă A pentru instalare.

    ![](/images/priiloader/installing_file.png)

    ![](/images/priiloader/installing_file_ok.png)

1. Apasă `B` pentru a te întoarce în meniul principal.
1. Derulează în jos până la `Settings` și apasă A.

    ![](/images/priiloader/menu_settings.png)

1. Apasă dreapta pentru a parcurge opțiunile Autoboot până ce opțiunea `Installed file` este selectat.

    ![](/images/priiloader/autoboot_installed_file.png)

1. Derulează în jos până la `save settings` și apasă A.

    ![](/images/priiloader/settings_save.png)

1. Apasă `B` pentru a te întoarce în meniul principal.
1. Scroll înapoi la `System Menu` apoi apasă A.

Wii-ul tău ar trebui să pornească automat în oricare aplicație de homebrew instalată.

##### Autobootare Homebrew Channel sau Priiloader

1. Deschide Homebrew Channel
1. Deschide „Load Priiloader” din lista de aplicații homebrew.
1. Derulează în jos până la `Settings` și apasă A.

    ![](/images/priiloader/menu_settings.png)

1. Apasă dreapta pentru a parcurge opțiunile Autoboot până ce opțiunea dorită este selectat.
    + Dezactivat va autoboota în meniul Priiloader.

    Te rog nu seta Autoboot la `BootMii IOS`. Vei rămâne blocat într-o buclă până când ții continuu butonul RESET pentru a intra în meniul Priiloader.
    {: .notice--warning}

    ![](/images/priiloader/autoboot_disabled.png)

1. Derulează în jos până la `save settings` și apasă A.

    ![](/images/priiloader/settings_save.png)

1. Apasă `B` pentru a te întoarce în meniul principal.
1. Scroll înapoi la `System Menu` apoi apasă A.
