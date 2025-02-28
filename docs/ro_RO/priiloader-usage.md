# Folosirea Priiloader

Priiloader este un tool esențial care adaugă un nivel de protecție la „brick” consolei tale Wii. Acesta se încarcă înaintea lui Wii System Menu. Acest tool poate aplica și modificări ce sunt folosite pentru îmbunătățirea, deblocare și/sau repararea unor funcții din System Menu.

În plus, poate fi folosit pentru lansarea rapidă a orice Titlu sau Homebrew, sau pentru a schimba modul în care Wii autobootează.

Această pagină prezintă câteva funcții utile ale Priiloader care ar putea fi de interes.

## Hack-uri pentru System Menu

Priiloader are o selecție mare de opțiuni care, odată activată, schimbă modul de folosire a console Wii la una din alegerile tale. You can find more information on each hack [here](https://dacotaco.github.io/priiloader/docs/HACKSLIST.html). Additionally, you can visit the [Priiloader FAQ](https://dacotaco.github.io/priiloader/docs/FAQ.html) which has more relevant information regarding System Menu hacks.

## Opțiuni suplimentare

Acestea sunt niște lucruri suplimentare pe care le poți face cu Priiloader pentru a îmbunătăți experiența de homebrew. Acest lucru este opţional.

### Autobotare cu Priiloader

Priiloader îți permite să pornești automat în Homebrew Channel, o aplicație de homebrew sau Priiloader în sine. Acest lucru este opţional.

#### Autobootare o aplicatie Hoembrew

::: warning

Dacă ți-ar plăcea să autobootezi USB loader GX, fă acest lucru mai întâi:

- Download the USB Loader GX forwarder WAD ([Wii](https://github.com/wiidev/usbloadergx/raw/updates/USBLoaderGX_forwarder%5BUNEO%5D_Wii.wad), [vWii](https://github.com/wiidev/usbloadergx/raw/updates/USBLoaderGX_forwarder%5BUNEO%5D_vWii.wad)).
- Download the [UNEO Channel Booter for Priiloader](https://sourceforge.net/projects/usbloadergx/files/Releases/Forwarders%20dols/UNEO%20Channel%20Booter%20for%20Priiloader.zip/download).
- Install the forwarder WAD with a WAD manager like [YAWM ModMii Edition](yawmme).
- Extract the `UNEO Channel Booter for Priiloader.zip` file anywhere.
- Copy `uneoboot.dol` to the root of your SD card.

You will be installing `uneoboot.dol` in step 3.

:::

1. Deschide Homebrew Channel

2. Deschide „Load Priiloader” din lista de aplicații homebrew.

3. Scroll down to `Load/Install file` and press A.

   ![](/images/priiloader/menu_install_file.png)

4. Mergi prin meniu până când aplicația homebrew dorită este evidențiată, apoi apasă A pentru instalare.

   ![](/images/priiloader/installing_file.png)

   ![](/images/priiloader/installing_file_ok.png)

5. Press `B` to return to the main menu.

6. Scroll down to `Settings` and press A.

   ![](/images/priiloader/menu_settings.png)

7. Press Right to cycle through the Autoboot options until the `Installed file` option is selected.

   ![](/images/priiloader/autoboot_installed_file.png)

8. Scroll down to `save settings` and press A.

   ![](/images/priiloader/settings_save.png)

9. Press `B` to return to the main menu.

10. Scroll back up to `System Menu` and press A.

Wii-ul tău ar trebui să pornească automat în oricare aplicație de homebrew instalată.

#### Autobootare Homebrew Channel sau Priiloader

1. Deschide Homebrew Channel

2. Deschide „Load Priiloader” din lista de aplicații homebrew.

3. Scroll down to `Settings` and press A.

   ![](/images/priiloader/menu_settings.png)

4. Apasă dreapta pentru a parcurge opțiunile Autoboot până ce opțiunea dorită este selectat.

   - Dezactivat va autoboota în meniul Priiloader.

   ::: warning

   Please don't set Autoboot to `BootMii IOS`. Vei rămâne blocat într-o buclă până când ții continuu butonul RESET pentru a intra în meniul Priiloader.

   :::

   ![](/images/priiloader/autoboot_disabled.png)

5. Scroll down to `save settings` and press A.

   ![](/images/priiloader/settings_save.png)

6. Press `B` to return to the main menu.

7. Scroll back up to `System Menu` and press A.
