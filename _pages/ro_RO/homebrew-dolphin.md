---
title: "Instalarea Homebrew Channel pe Dolphin Emulator"
---

{% include toc title="Tabel de Conținut" %}

Pe versiunea Dolphin Emulator `5.0-4588` sau mai târziu, Wii Menu poate fi instalat ușor cu acesta. Odată ce este gata, Homebrew Channel poate fi instalat, deși nu în aceeași manieră ca un Wii fizic.

### Instrumente necesare

* Un calculator Windows/MacOS/Linux cu conexiune la Internet
* [Dolphin Emulator](https://dolphin-emu.org/download/) versiunea `5.0-4588` sau mai târziu
* Cea mai recentă versiune de [Open Homebrew Channel](https://github.com/Wii-Mini-Hacking/hbc/releases)

### Instrucțiuni

1. Dacă nu ai făcut deja acest lucru, instalează Wii Menu în Dolphin Emulator mergând la `Tools > Perform System Update`.

    ![](/images/homebrew-dolphin/system-update.png)

1. Descarcă `Open_HBC_(version)_LULZ.wad` din pagina de mai sus.
1. Deschide Dolphin Emulator.
1. Selectează `Tools > Install WAD` și selectează fișierul `Open_HBC_(version)_LULZ.wad` care a fost descărcat.

    ![](/images/homebrew-dolphin/ohbc-file.png)

1. Selectează `Tools >  Load Wii System Menu`. Canalul trebuie să apară acum.

    ![](/images/homebrew-dolphin/hbc-installed.png)

### Post-instalare, instalarea aplicațiilor homebrew prin Open Shop Channel

1. Descarcă Open Shop Channel [here](https://oscwii.org/library/app/homebrew_browser) pentru utilizarea în Dolphin. Alternativ, poți obține OSCDL și să faci acest proces manual.
1. Oprește emulatorul (dacă rulează), și deschide fereastra `Config > Wii` în Dolphin Emulator.
1. Activează `Automatically Sync with Folder`. Opțional, poate dorești să adjustezi `Dimensiunea Fișierului cu Cardul SD` la un parametru mai mare - cu toate acestea, opțiunea `Auto` ar trebui să fie în regulă.
1. Deschide `SD Sync Folder`. În Windows, acest lucru poate fi făcut cu ușurință prin inserarea folder-ului path în Start Menu, Windows Explorere, sau Run.
1. Extrage orice aplicație homebrew în folder-ul `WiiSDSync`. Rezultatul final ar trebui să arate cam așa:

    ![](/images/homebrew-dolphin/apps-folder.png)

1. Deschide Wii Menu apoi Homebrew Channel. Noile aplicații instalate ar trebui să apară!

    ![](/images/homebrew-dolphin/hbc-apps.png)
