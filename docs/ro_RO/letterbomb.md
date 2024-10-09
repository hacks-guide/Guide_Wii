# Donations

LetterBomb este un exploit pentru Wii care este declanșat folosind Wii Message Board.

::: info

For instructions on how to format your SD card correctly, please see [this guide](https://wiki.hacks.guide/wiki/Formatting_an_SD_card). Este foarte recomandat să verifici probleme cu formatarea ca FAT32.

:::

::: warning

NU folosi niciun exemplu de adrese MAC afișate în acest ghid, deoarece acestea pot cauza erori pe website-ul HackMii. Folosește-te pe al tău!

:::

## Requirements

- Un card SD formatat ca FAT32 care este 32GB sau mai puțin
- Un Wii cu System Menu versiunea 4.3
- Un calculator Windows/MacOS/Linux cu conexiune la Internet

## Instructions

1. Power on your console.

2. Go to `Wii Settings`.

3. Take note in the top right corner of the letter next to the system version.

   - This letter corresponds to your system menu region, which you will need to know for the corresponding steps.
   - Asigură-te că ești pe System Menu versiunea 4.3.

   ![](/images/wii/SystemMenuVersion.png)

4. Navigate to `Internet` > `Console Information`.

5. Notează adresa MAC completă.

   ![](/images/wii/MacAddress.png)

6. On your computer, open the browser and go to [the HackMii website](https://please.hackmii.com/).

7. Introdu adresa MAC și regiunea consolei Wii.

8. Ensure `Bundle the HackMii Installer for me!` is checked.

9. Taie oricare din fire.

   ![](/images/exploits/letterbomb/LetterBomb-PC.png)

10. Introdu cardul tău SD în calculator.

11. Copy the `private` folder and the `boot.elf` file from the LetterBomb `.zip` to the root of your SD card.

12. Re-introdu cardul tău SD în calculator.
    - Cardul SD trebuie introdus în slotul SD localizat pe partea de față a consolei Wii. Utilizarea adaptorului USB la SD, introdus în portul USB din Wii nu va funcționa.

13. Pe Wii, întoarce-te la meniul Wii.

14. Deschide Wii Message Board.

15. Deschide plicul roșu cu o bombă.
    - Asigură-te că data de pe Wii este corectă, altfel este posibil să nu găsești scrisoarea.
    - În unele cazuri, trebuie să verifici mesajele pentru ziua de mâine sau ieri ca scrisoarea să apară.
    - If you don't see the red letter, check if any errors appear in the SD card section of `Data Management`. Dacă apare o eroare, s-ar putea să existe o problemă cu formatul cardului SD sau cu cititorul de carduri SD a consolei Wii.
    - Dacă sistemul Wii îngheață după ce apeși pe scrisoare, cel mai probabil ai ales regiunea greșită a meniului de sistem pentru LetterBomb. Întoarce-te la Pasul 2 și verifică dacă ai ales regiunea corectă.
    - Dacă totul este corect și consola tot îngheață, continuă să încerci până funcționează.

16. If the exploit was successful, your device will have loaded the HackMii Installer.

![](/images/exploits/letterbomb/LetterBomb-Wii.png)

::: tip

[Continue to Homebrew Channel and BootMii Installation](hbc)

:::
