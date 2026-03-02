# Vá para Nintendo DS Wi-Fi settings.

<a href="https://wiimmfi.de">Wiimmfi</a> é um serviço destinado a substituir o extinto Nintendo Wi-Fi Connection. Foi desenvolvido por Wiimm e Leseratte. This service was discontinued in 2013, but there are reverse-engineered servers that you can connect to which restore this functionality. This guide provides details on two trusted services, WiiLink WFC and Wiimmfi - for most users, we recommend Wiimmfi for their larger userbase (especially with Mario Kart Wii).

## WiiLink WFC

WiiLink WFC is an open-source service created by the WiiLink team that restores online play, with less support and less players than Wiimmfi (listed below). In some cases, WiiLink WFC server code may already be utilized in a game mod - such as with Mario Kart Retro Rewind. Instructions on how to use WiiLink WFC are listed below, or can alternatively be found [on the WiiLink WFC setup page](https://wfc.wiilink.ca/setup).

### Automatic Disc Patching via Homebrew Channel

::: details

A method for WiiLink WFC patching which runs on retail disc games, but must be manually launched via the Homebrew Channel.

#### Requirements

- Um Wii conectado a Internet
- [WiiLink WFC Patcher](https://oscwii.org/library/app/WiiLink-WFC-Patcher)

#### Instructions

1. Simply extract the `apps` folder in this archive to the root of your SD card or USB drive.
2. Insert your SD Card into your Wii, and launch WiiLink WFC Patcher from the Homebrew Channel.
3. Insira o disco do jogo (você pode inseri-lo antes ou depois da inicialização, não importa).

:::

## Wiimmfi

::: warning

If you get error `23904` while connecting to Wiimmfi, then you are using an outdated patch and must update to continue playing online. Follow the steps below for the method you're using to connect to Wiimmfi again.

See [the Wiimmfi patcher update page](https://wiimmfi.de/update) for an explanation on why an update is needed.

:::

Wiimmfi is a closed-source service created and maintained by Wiimm and Leseratte, which restores online play to a significant amount of games that support this functionality on the Wii. A list of games with currently online players can be found on the [Wiimmfi status page](https://wiimmfi.de/stat?m=8). In some cases, Wiimmfi support may already be built into a game mod - such as with CTGP-R. Instructions on how to use Wiimmfi are listed below, or can alternatively be found [on the Wiimmfi patcher page](https://wiimmfi.de/patcher/).

### Patching automático do Disc Channel utilizando o Priiloader

::: details

A method for Wiimmfi patching which runs on retail disc games automatically via the Disc Channel.

#### Requirements

- A Wii with an Internet connection, on System Menu version 4.3
- [Priiloader](priiloader) 0.9 or later

#### Instructions

1. Hold the RESET button while turning on your Wii. Se você estiver usando um Wii mini, conecte um teclado USB e segure Escape nele enquanto o liga.

2. Você deve ver o menu do Priiloader.

   ![](/images/priiloader/mainmenu.png)

3. Go to `System Menu Hacks`.

   ::: info

   Se você estiver usando um armazenamento USB para instalar o Priiloader, certifique-se que você não tem um cartão SD inserido no seu Wii ao mesmo tempo.
   Isso fará com que o Priiloader não consiga encontrar o arquivo hacks_hash.ini.

   :::

4. Make sure the `Wiimmfi patch v4` hack is enabled.

   ![](/images/priiloader/hacks.png)

5. Scroll to `Save Settings` and save your changes.

6. Return to the main menu, and press `System Menu` to return to the Wii Menu.

7. Inicie o jogo original do Mario Kart Wii (sem o patch Wiimmfi).

::: warning

If the `Wiimmfi Patch` displays as anything other than v4, you do not have the latest version of the hacks_hash.ini file and the patch will not work. You must reinstall Priiloader, the guide to which can be found in the requirements section.

:::

### Patching automático usando um USB Loader

::: details

Há um metodo fácil para patchear seus jogos utilizando o Wiimmfi que pode ser usado você tendo ou não homebrew no seu Wii.

#### Requirements

- Competições no Mario Kart Wii
- [USB Loader GX or WiiFlow Lite](wii-loaders)

#### Instructions

1. Open the game or global settings for your specific USB loader and search for the `Private Server` option. By default, it will be set to `Off`.
2. Set the option to `Wiimmfi` and save the settings. By default, games should now be automatically patched for Wiimmfi.

:::

### Automatic Disc Patching via Custom DNS

::: details

A method for Wiimmfi patching which runs on retail game discs automatically through the usage of a custom DNS server. While convenient, it only works with a small selection of games including Mario Kart Wii and SSBB. Due to the nature of this process, it can be run on Wiis without homebrew.

#### Requirements

- Competições no Mario Kart Wii

#### Instructions

1. Go to `Wii Settings` > `Internet` > `Connection Settings` and select whatever connection you are using. Then, `Change Settings` > `Auto-Obtain DNS NO` > `Advanced Settings`. Set your primary DNS to `95.217.77.181`, and your secondary DNS to `1.1.1.1`.
2. Se você estiver usando o Wii U, você terá que executar o patcher de competições sempre que quiser checar por uma competição, pois o WiiConnect24 não está habilitado no Wii U.
3. Inicie o jogo original do Mario Kart Wii (sem o patch Wiimmfi).

::: warning

If you get error `20100` or `20110`, the game you are trying to play is not supported by this method.

If you get error `23400`, your ISP or network is blocking the use of a custom DNS. To resolve this issue, Wiimmfi has a custom DNS server that can be ran on your PC - you can read about it [on the Wiimmfi website](https://wiimmfi.de/patcher/dnspatch#customdns).

:::

### Manual Disc Patching via Homebrew Channel

::: details

A method for Wiimmfi patching which runs on retail disc games, but must be manually launched via the Homebrew Channel.

#### Requirements

- Um cartão SD ou armazenamento USB
- [Auto Wiimmfi Patcher](https://oscwii.org/library/app/wiimmfipatcher)

#### Instructions

1. Simply extract the `apps` folder in this archive to the root of your SD card or USB drive.
2. Insira seu cartão SD no Wii e inicie o Auto Wiimmfi Patcher pelo Homebrew Channel.
3. Insira o disco do jogo (você pode inseri-lo antes ou depois da inicialização, não importa).

:::

### Manual Disc Patching via EULA User Agreement

::: details

A method for Wiimmfi patching which runs on retail game discs, but must be manually launched via the EULA User Agreement (derives from [str2hax](str2hax)). Graças ao exploit str2hax por Fullmetal5, Leseratte foi capaz de adaptá-lo ao patcher do Wiimmfi, isso permite que você jogue com Wiimmfi sem ter nenhum homebrew no seu console.

#### Requirements

- Competições no Mario Kart Wii

#### Instructions

1. Insira o disco do jogo.

2. Go to `Wii Settings > Internet > Connection Settings` and select whatever connection you are using. Then, `Change Settings > Auto-Obtain DNS NO > Advanced Settings`. Set your primary DNS to `95.217.77.151`, and your secondary DNS to `1.1.1.1`.

   ![](/images/wiimmfi/dns-str2hax-wiimmfi.png)

3. Se você estiver usando o Wii U, você terá que executar o patcher de competições sempre que quiser checar por uma competição, pois o WiiConnect24 não está habilitado no Wii U.

4. Go back twice to `Internet`, and press `User Agreements`. Confirme que você deseja usar o WC24 e o shop channel

5. A página de patcher do Wiimmfi deve aparecer. Caso contrário, e você ainda veja o contrato de licença padrão, seu roteador pode ser incompatível com este método.

6. Você pode aplicar patch em jogos de WiiWare para jogá-los com Wiimmfi.

:::

### Manual Disc Patching via Internet Channel

::: details

A method for Wiimmfi patching which runs on retail game discs, but must be manually launched via the Internet Channel (derives from [Flashhax](flashhax)). Graças ao exploit str2hax por Fullmetal5, Leseratte foi capaz de adaptá-lo ao patcher do Wiimmfi, isso permite que você jogue com Wiimmfi sem ter nenhum homebrew no seu console. [This](nintendowfc#manual-disc-patching-via-eula-user-agreement) method is generally more reliable, and is recommended instead.

#### Requirements

- A Wii with an internet connection, running in 60Hz mode
- O Internet Channel

#### Instructions

1. Open the following webpage in the Internet Channel: `http://chadsoft.co.uk/wiimmfi`
2. Add the page to the browser favorites by clicking the Star icon, then the `Add Favorite` button.
3. Segure o botão RESET enquanto liga o seu Wii.
4. Open the Internet Channel again and access the favorite you just made.
5. It should be patched with Wiimmfi. Be patient, as Flashhax can be very unreliable - it may take several tries to get right.

::: warning

If you run into UPnP-related issues (such as the patcher getting stuck at "Init network..." or "add UPnP port forward" steps for more than 10 seconds), you can press the - button on your Wii Remote, or the Y button on your GameCube controller as soon as the patcher loads to circumvent this.

:::

### Patching de WiiWare

::: details

A method for Wiimmfi patching which runs on WiiWare games, but must be manually run on a PC via a script.

#### Requirements

- Permite que você copie arquivos normalmente não permitidos no seu cartão SD pelo Gerenciamento de Dados
- Uma cópia do seu jogo (em formato WAD)
- [WiiWare Patcher](https://github.com/RiiConnect24/WiiWare-Patcher/releases/latest) (cross platform)
- [YAWM ModMii Edition](https://oscwii.org/library/app/yawmme)

#### Instructions

1. Extraia o .zip da versão mais recente do WiiWare Patcher, e coloque seu WAD nele.
2. Run the patch script for your OS: usually it will end in `.bat` for Windows and `.sh` for Mac/Linux. Se você estiver utilizando o RiiConnect24 Patcher, selecione seu dispositivo (Wii, vWii ou Dolphin) e escolha o patcher para seu jogo.
3. If it completed successfully, install the WAD that was made in `wiiware-wads` with [YAWM ModMii Edition](yawmme).

:::

### Manual Disc Image Patching via PC

::: details

A method for Wiimmfi patching which runs on game disc images, but must be manually run on a PC via a script.

#### Requisitos

- Um computador com Windows nele (ou usando Mono ou Wine no Mac/Linux)
- A copy of the game you want to patch - supported formats are `ISO`, `WDF`, `WIA`, `CISO (=WBI)`, `WBFS`, `GCZ`, and `FST` - `NKIT` is NOT supported
- [Wiimmfi ISO Patcher](https://download.wiimmfi.de/patcher/wiimmfi-patcher-latest.zip)

#### Passos:

1. Download the patcher and extract the `.zip` file.
2. Insira o cartão SD ou armazenamento USB no Wii.
   - If you're on Windows, double-click the `patch-images.bat` file (this may also be displayed as "patch-images" Batch File). If you run into Cygwin-related issues, try the `patch-images-32.bat` file instead.
   - If you're on macOS, open a command line prompt in the current folder, make the shell script executable through the command `chmod +x *.sh` and then execute `./patch-images.sh`.
   - If you're on Linux, double-click the `patch-images.desktop` file (this may also be displayed as "Patch Images") or execute the `./patch-images.sh` file in a terminal after making it executable through the command `chmod +x *.sh`.
3. If the above was successful, you should see a window pop-up that displays the patching process. Once the process finishes, you will find the patched images in a folder called `wiimmfi-images`.

:::

---

::: tip

Continue to [Recommended Homebrew](recommended-homebrew)

This guide provides a selection of homebrew that highlights some of the things you can now do with your Wii. These include emulators, game hacks, and more.

:::
