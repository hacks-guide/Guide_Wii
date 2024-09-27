# Credits

::::: tabs

:::: tab BlueBomb Classic

## BlueBomb Classic

:::details Technical Details (optional)

BlueBomb este un exploit care "profită" de un defect găsit în librăriile Bluetooth folosite în Wii și Wii mini. Chiar dacă este singurul exploit folosit pentru Wii mini, el poate fi rulat și pe un Wii obișnuit (regular Wii).

Acest exploit ajută și repararea consolei din anumite stricări, cum ar fi defecțiuni de banner și (unor) defecțiuni de teme.

:::

::: warning

It is **strongly** advised against using **any** video guide for hacking your Wii mini console, as there is an extremely large chance of **bricking** it.

:::

::: info

If you need help with anything regarding this tutorial, please join [the Wii mini Hacking Discord server](https://discord.gg/6ryxnkS) (recommended)

:::

::: info

If you are using the original revision of the Wii, you should probably find [another exploit to use](get-started) as there are much easier ways to get to the HackMii installer. Cu toate acestea, există excepții în situații precum recuperarea distrugerii.

:::

::: info

Asigură-te că consola este aproape de calculator care rulează exploit-ul, ideal ar trebui să fie mai puțin de un metru.

:::

### Instrumente necesare

- Un calculator cu Linux
  - O mașină virtuală ar merge, dar nu este recomandată din cauza complexității sale în a face ca Bluetooth să funcționeze. Dacă este posibil, te rog să folosești un LiveUSB așa cum este descris mai jos.
  - Dacă ai un Raspberry Pi, îl poți folosi pentru că, cel mai probabil, are Linux instalat deja.
  - Windows Subsystem for Linux or a Chromebook running Linux mode will _not work_ as they don't have direct access to the Bluetooth adapter or USB ports.
  - If you do not have Linux, [Ubuntu](https://ubuntu.com/download/desktop) is the most user-friendly option and can be ran on computers running Windows or Mac.
    - 32-bit devices will require [Ubuntu 16.04](http://releases.ubuntu.com/16.04/).
    - Pentru dispozitivele 64-bit este recomandat să folosești ediția LTS din cauza stabilității, dar și cele recente vor funcționa.
  - You can [flash a Linux Live environment to a USB flash drive](https://ubuntu.com/tutorials/tutorial-create-a-usb-stick-on-windows#1-overview) instead of installing it to your computer.
- Un adaptor Bluetooth.
  - Un adaptor Bluetooth intern va funcționa.
  - Dacă nu ai unul, asigură-te să iei unul compatibil cu Linux.
- Un stick USB formatat ca FAT32.
  - Acest stick este folosit anume pentru Wii.
- [HackMii Installer v1.2](https://bootmii.org/download/)

### Instrucțiuni

1. Copy `boot.elf` from the hackmii_installer_v1.2 `.zip` to the root of your flash drive.
   - (Dacă încerci să repari consola, trebuie să copiezi și aplicațiile homebrew de care ai nevoie în folder-ul /apps/)
   - (Even for a Wii mini, bootmini.elf will **not** work, its purpose is entirely different and unrelated. Folosește fișierul boot.elf în toate cazurile).

2. Re-inserați stick-ul în consolă.
   - Pentru Wii mini, portul USB este pe spate.
   - Pentru Wii normal, folosește portul de jos (sau portul din dreapta dacă este în picioare).

3. Pornește consola.

4. Go to `Wii Settings`.

5. Notează litera care este notată după versiunea sistemului.

   - Acea literă corespunde cu regiunea consolei, pe care trebuie să-l știi pentru pașii corespunzători.

   ![](/images/wii/SystemMenuVersion.png)

6. Download the Priiloader installer and LoadPriiloader apps.

7. Pornește Linux-ul și asigură-te că ești conectat la internet.

8. Deschide terminalul

9. Rulează următoarele comenzi:

   ```bash
   wget https://wii.hacks.guide/assets/files/bluebomb-helper.sh
   chmod +x bluebomb-helper.sh
   ./bluebomb-helper.sh
   ```

10. Helper-ul va descărca apoi fișierele necesare și îți va cere informații despre consola ta.
    - Dacă ai selectat Wii mini, îți va cere să introduci regiunea consolei. This can be determined by the last letter of the Wii Menu version (`U` for **USA** and `E` for **PAL** models).
    - Dacă ai selectat Wii, îți va cere să introduci versiunea Wii Menu (Ce ai determinat în pasul 4)

11. Pornește consola.
    - **Do not** connect any Wii Remotes.

12. Press the Sync button repeatedly until the terminal shows `got connection handle`.
    - Acest lucru ar putea necesita numeroase încercări.

13. Dacă exploit-ul a funcționat, dispozitivul va intra în HackMii Installer.
    - Dacă nu intenţionezi să o utilizezi mai târziu, poți închide acum Linux-ul.

::: info

If using a Wii: [Continue to Homebrew Channel and BootMii Installation](hbc)<br>

:::

::: info

If using a Wii mini: [Continue to Homebrew Channel installation](hbc-mini)

:::

::::

:::: tab BlueBomb Micro

## BlueBomb Micro

:::details Technical Details (optional)

Acest exploit ajută și repararea consolei din anumite stricări, cum ar fi defecțiuni de banner și (unor) defecțiuni de teme.

:::

::: warning

It is **strongly** advised against using **any** video guide for hacking your Wii mini console, as there is an extremely large chance of **bricking** it.

:::

::: info

If you need help with anything regarding this tutorial, please join [the Wii mini Hacking Discord server](https://discord.gg/6ryxnkS) (recommended)

:::

::: info

If you are using the original revision of the Wii, you should probably find [another exploit to use](get-started) as there are much easier ways to get to the HackMii installer. Cu toate acestea, există excepții în situații precum recuperarea distrugerii.

:::

::: info

Asigură-te că consola este aproape de calculator care rulează exploit-ul, ideal ar trebui să fie mai puțin de un metru.

:::

### Instrumente necesare

- A Rasperry Pi Pico W or an ESP32 with BR/EDR (Classic) support.
- Un stick USB formatat ca FAT32.
- [The HackMii Installer](https://bootmii.org/download/)

::: info

A normal Rasperry Pi Pico will not work. It MUST to be the wireless model. Additionally, an ESP32 with a BLE only controller will not work.

:::

### Instrucțiuni

1. Copy `boot.elf` from the hackmii_installer_v1.2 `.zip` to the root of your flash drive.
   - (Dacă încerci să repari consola, trebuie să copiezi și aplicațiile homebrew de care ai nevoie în folder-ul /apps/)
   - (Even for a Wii mini, bootmini.elf will **not** work, its purpose is entirely different and unrelated. Folosește fișierul boot.elf în toate cazurile).

2. Re-inserați stick-ul în consolă.
   - Pentru Wii mini, portul USB este pe spate.
   - Pentru Wii normal, folosește portul de jos (sau portul din dreapta dacă este în picioare).

3. Pornește consola.

4. Go to `Wii Settings`.

5. Notează litera care este notată după versiunea sistemului.

   - Acea literă corespunde cu regiunea consolei, pe care trebuie să-l știi pentru pașii corespunzători.

   ![](/images/wii/SystemMenuVersion.png)

6. Download the Priiloader installer and LoadPriiloader apps.

#### Rasperry Pi Pico W

1. Download [The latest Pre-Compiled Binaries](https://github.com/GaryOderNichts/bluebomb_micro/releases) from the releases page, and extract it to your PC.
2. Plug in your Pico W to your PC while holding down the `BOOTSEL` button. Your Pico should now show up as a drive on your PC.
3. Unzip the downloaded file and copy the file which matches your Wii or Wii mini to the drive. For example, if you have a European Wii running version 4.3, you would copy bluebomb_WII_SM4_3E.uf2, or if you have a European Wii Mini, you would copy bluebomb_MINI_SM_PAL.uf2, etc...
4. The drive should disconnect and your Pico is ready. You may unplug the device from your PC.

#### ESP32

1. Set up the latest [ESP IDF](https://docs.espressif.com/projects/esp-idf/en/stable/esp32/get-started/index.html).
2. Build the binary [from source](https://github.com/GaryOderNichts/bluebomb_micro/tree/main/ports/esp32#building-from-source).
3. [Flash the binary](https://github.com/GaryOderNichts/bluebomb_micro/tree/main/ports/esp32#flashing) to your ESP32.
4. Your device is now ready. You may unplug the device from your PC.

### Performing the Exploit

1. Plug your flashed device back into your PC.
2. Pornește consola.
   - **Do not** connect any Wii Remotes.
3. Press the Sync button repeatedly until the bluebomb screen shows up.
   - Acest lucru ar putea necesita numeroase încercări.
4. Dacă exploit-ul a funcționat, dispozitivul va intra în HackMii Installer.

::: tip

If using a Wii: [Continue to Homebrew Channel and BootMii Installation](hbc)<br>

:::

::: tip

If using a Wii mini: [Continue to Homebrew Channel installation](hbc-mini)

:::

::::

:::::
