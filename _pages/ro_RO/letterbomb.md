---
title: "Donations"
---

If you need help for anything regarding this tutorial, please join [the RiiConnect24 Discord server](https://discord.gg/rc24) (recommended) or [e-mail us at support@riiconnect24.net](mailto:support@riiconnect24.net).

LetterBomb este un exploit pentru Wii care este declanșat folosind Wii Message Board.

Pentru instrucțiuni de formatare corectă a cardului SD, te rog verifică [acest ghid](https://wiki.hacks.guide/wiki/Formatting_an_SD_card). Este foarte recomandat să verifici probleme cu formatarea ca FAT32.
{: .notice--info}

NU folosi niciun exemplu de adrese MAC afișate în acest ghid, deoarece acestea pot cauza erori pe website-ul HackMii. Folosește-te pe al tău!
{: .notice--warning}

### Instrumente necesare
* Un card SD formatat ca FAT32 care este 32GB sau mai puțin
* Un Wii cu System Menu versiunea 4.3
* Un calculator Windows/MacOS/Linux cu conexiune la Internet

### Instrucțiuni

1. Pornește consola.
1. Mergi la `Wii Settings`.
1. Notează litera care este notată după versiunea sistemului.
    + Acea literă corespunde cu regiunea consolei, pe care trebuie să-l știi pentru pașii corespunzători.
    + Asigură-te că ești pe System Menu versiunea 4.3.

    ![](/images/wii/SystemMenuVersion.png)

1. Navighează spre `Internet` > `Console Information`.
1. Notează adresa MAC completă.

    ![](/images/wii/MacAddress.png)

1. Pe calculatorul tău, deschide browser-ul și mergi pe [site-ul HackMii](https://please.hackmii.com/).
1. Introdu adresa MAC și regiunea consolei Wii.
1. Asigură-te `Bundle the HackMii Installer for me!` este bifată.
1. Taie oricare din fire.

    ![](/images/exploits/letterbomb/LetterBomb-PC.png)

1. Introdu cardul tău SD în calculator.
1. Copiază folderul `privat` și fișierul `boot.elf` din LetterBomb `.zip` în directorul principal al cardului SD.
1. Re-introdu cardul tău SD în calculator.
    + Cardul SD trebuie introdus în slotul SD localizat pe partea de față a consolei Wii. Utilizarea adaptorului USB la SD, introdus în portul USB din Wii nu va funcționa.
1. Pe Wii, întoarce-te la meniul Wii.
1. Deschide Wii Message Board.
1. Deschide plicul roșu cu o bombă.
    + Asigură-te că data de pe Wii este corectă, altfel este posibil să nu găsești scrisoarea.
    + În unele cazuri, trebuie să verifici mesajele pentru ziua de mâine sau ieri ca scrisoarea să apară.
    + Dacă nu vezi scrisoarea roșie, verifică daca apar erori în secțiunea card SD a `Data Management`. If any do, there may be an issue with the SD card format or the Wii’s SD card reader.
    + If your Wii freezes after clicking on the letter, you most likely chose the wrong system menu region for LetterBomb. Go back to Step 2 and verify that you chose the right region.
    + If all is correct and there is freezing, keep on trying until it works.
1. Dacă exploit-ul a funcționat, dispozitivul va intra în HackMii Installer.

![](/images/exploits/letterbomb/LetterBomb-Wii.png)

[Continuă la Homebrew Channel și Instalarea BootMii](hbc)
{: .notice--info}
