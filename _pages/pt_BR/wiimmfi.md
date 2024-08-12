---
title: "Vá para Nintendo DS Wi-Fi settings."
---

{% include toc title="Sumário" %}

[Wiimmfi](https://wiimmfi.de) é um serviço destinado a substituir o extinto Nintendo Wi-Fi Connection. Foi desenvolvido por Wiimm e Leseratte. Enquanto jogos diferentes foram suportados por mais tempo do que outros, todos os jogos já não são capazes de jogar pelos meios convencionais a partir de agosto de 2023. Para recuperar as funcionalidades do Nintendo WFC, este guia fornece instruções sobre como instalar o Wiimmfi. Existem muitos métodos diferentes para se conectar ao Wiimmfi. Escolha o que melhor se adeque às suas necessidades.

Se você receber o erro 23904 enquanto conecta ao Wiimmfi, então você está usando um patch desatualizado. <br>Siga os passos abaixo para o método que você está usando para se conectar ao Wiimmfi novamente.<br> Veja [esta página](https://wiimmfi.de/update) para mais detalhes.<br>
{: .notice--warning}

### Patching automático do Disc Channel utilizando o Priiloader

If you see the hack `Wiimmfi patch v2` or `Wiimmfi patch v3` instead, then you do not have the latest version of the hacks_hash.ini file, and you need to [re-install Priiloader](priiloader). You must reinstall Priiloader, the guide to which can be found in the requirements section.
{: .notice--warning}

A method for Wiimmfi patching which runs on retail disc games automatically via the Disc Channel.

#### Requisitos
+ A Wii with an internet connection, on System Menu version 4.3
+ [Priiloader](priiloader) 0.9 or later

#### Instruções

1. Hold the RESET button while turning on your Wii. Se você estiver usando um Wii mini, conecte um teclado USB e segure Escape nele enquanto o liga.
1. Você deve ver o menu do Priiloader.

    ![](/images/priiloader/mainmenu.jpg)

1. Vá para `System Menu Hacks`. Se você estiver usando um armazenamento USB para instalar o Priiloader, certifique-se que você não tem um cartão SD inserido no seu Wii ao mesmo tempo. Isso fará com que o Priiloader não consiga encontrar o arquivo hacks_hash.ini.
    {: .notice--info}
1. Certifique-se de que o hack `Wiimmfi patch v4` está ligado.

    ![](/images/priiloader/hacks.jpg)

1. Vá em `Change Settings`.
1. Return to the main menu, and press `System Menu` to return to the Wii Menu.
1. Inicie o jogo original do Mario Kart Wii (sem o patch Wiimmfi).

### Patching automático usando um USB Loader

Há um metodo fácil para patchear seus jogos utilizando o Wiimmfi que pode ser usado você tendo ou não homebrew no seu Wii.

#### Requisitos

+ Competições no Mario Kart Wii
+ [Um Wii com Priiloader 0.9 ou superior instalado](wii-loaders)

#### Instruções

1. Open the game or global settings for your specific USB loader and search for the `Private Server` option. By default, it will be set to `Off`.
1. Set the option to `Wiimmfi` and save the settings. By default, games should now be automatically patched for Wiimmfi.

### Automatic Disc Patching via Custom DNS

A method for Wiimmfi patching which runs on retail game discs automatically through the usage of a custom DNS server. Funciona em alguns jogos mais antigos, como Mario Kart Wii e Super Smash Bros. Brawl, mas não em todos os jogos. Due to the nature of this process, it can be run on Wiis without homebrew.

Se você receber error 20100 ou 20110, significa que o jogo é muito recente para este método.
{: .notice--warning}

Se você obter error 23400, significa que sua provedora de internet ou rede está bloqueando o uso de um DNS. <br> Wiimmfi tem um servidor de DNS que você pode executar em seu PC para resolver isso. [Saiba mais aqui.](https://wiimmfi.de/patcher/dnspatch#customdns)
{: .notice--warning}

#### Requisitos

+ Um Wii conectado à internet

#### Instruções

1. Go to `Wii Settings > Internet > Connection Settings` and select whatever connection you are using. Then, `Change Settings > Auto-Obtain DNS NO > Advanced Settings`. Digite `95.217.77.181` como DNS primário.
1. Se você estiver usando o Wii U, você terá que executar o patcher de competições sempre que quiser checar por uma competição, pois o WiiConnect24 não está habilitado no Wii U.
1. O jogo agora deve iniciar com o patch Wiimmfi incluído

### Manual Disc Patching via Homebrew Channel

A method for Wiimmfi patching which runs on retail disc games, but must be manually launched via the Homebrew Channel.

#### Requisitos

+ Um cartão SD ou armazenamento USB
+ [Auto Wiimmfi Patcher](https://oscwii.org/library/app/wiimmfipatcher)

#### Instruções

1. Simply extract the `apps` folder in this archive to the root of your SD card or USB drive.
1. Insira seu cartão SD no Wii e inicie o Auto Wiimmfi Patcher pelo Homebrew Channel.
1. Insira o disco do jogo (você pode inseri-lo antes ou depois da inicialização, não importa).

### Manual Disc Patching via EULA User Agreement

A method for Wiimmfi patching which runs on retail game discs, but must be manually launched via the EULA User Agreement (derives from [str2hax](str2hax)). Due to the nature of this process, it can be ran on Wiis without homebrew.

#### Requisitos

+ Wii U (vWii)

#### Instruções

1. Insira o disco do jogo.
1. Vá para `Wii Settings`. Vá para `Auto-Obtain DNS` (não Endereço IP), então selecione `No`, e então `Advanced Settings`. Set your primary DNS to `95.217.77.151`, and your secondary DNS to `1.1.1.1`.

    ![](/images/wiimmfi/dns-str2hax-wiimmfi.png)

1. Se o teste de conexão foi bem-sucedido, selecione `No` para ignorar a Atualização do Sistema Wii.
1. Vá para a `Página 2` e clique em `Internet`. Confirme que você deseja usar o WC24 e o shop channel
1. A página de patcher do Wiimmfi deve aparecer. Caso contrário, e você ainda veja o contrato de licença padrão, seu roteador pode ser incompatível com este método.
1. Você pode aplicar patch em jogos de WiiWare para jogá-los com Wiimmfi.

### Manual Disc Patching via Internet Channel

If you run into UPnP-related issues (such as the patcher getting stuch at "Init network..." or "add UPnP port forward" steps for more than 10 seconds), you can press the - button on your Wii Remote, or the Y button on your GameCube controller as soon as the patcher loads to circumvent this.
{: .notice--warning}

A method for Wiimmfi patching which runs on retail game discs, but must be manually launched via the Internet Channel (derives from [Flashhax](flashhax)). Graças ao exploit str2hax por Fullmetal5, Leseratte foi capaz de adaptá-lo ao patcher do Wiimmfi, isso permite que você jogue com Wiimmfi sem ter nenhum homebrew no seu console. [This](wiimmfi#manual-disc-patching-via-eula-user-agreement) method is generally more reliable, and is recommended instead.

#### Requisitos

+ A Wii with an internet connection, running in 60Hz mode
+ O Internet Channel

#### Instruções

1. Open the following webpage in the Internet Channel: `http://chadsoft.co.uk/wiimmfi`
1. Add the page to the browser favorites by clicking the Star icon, then the `Add Favorite` button.
1. Segure o botão RESET enquanto liga o seu Wii.
1. Open the Internet Channel again and access the favorite you just made.
1. It should be patched with Wiimmfi. Be patient, as Flashhax can be very unreliable - it may take several tries to get right.

### Patching de WiiWare

A method for Wiimmfi patching which runs on WiiWare games, but must be manually run on a PC via a script.

#### Requisitos

* Um cartão SD
* Uma cópia do seu jogo (em formato WAD)
* [WiiWare Patcher](https://github.com/RiiConnect24/WiiWare-Patcher/releases) (múltiplas plataformas)
* [YAWM ModMii Edition](https://oscwii.org/library/app/yawmme)

#### Passos:

1. Extraia o .zip da versão mais recente do WiiWare Patcher, e coloque seu WAD nele.
1. Execute o script com patch para seu Sistema Operacional: geralmente vai terminar com `.bat` para Windows e `.sh` para Mac/Linux. Se você estiver utilizando o RiiConnect24 Patcher, selecione seu dispositivo (Wii, vWii ou Dolphin) e escolha o patcher para seu jogo.
1. If it completed successfully, install the WAD that was made in `wiiware-wads` with [YAWM ModMii Edition](yawmme).

### Manual Disc Image Patching via PC

A method for Wiimmfi patching which runs on game disc images, but must be manually run on a PC via a script.

#### Requisitos

+ Um computador com Windows nele (ou usando Mono ou Wine no Mac/Linux)
+ A copy of the game you want to patch - supported formats are `ISO`, `WDF`, `WIA`, `CISO (=WBI)`, `WBFS`, `GCZ`, and `FST` - `NKIT` is NOT supported
+ [Patching para ISO](https://download.wiimmfi.de/patcher/wiimmfi-patcher-latest.zip)

#### Instruções (para Wii)

1. Download the patcher and extract the `.zip` file.
1. Insira o cartão SD ou armazenamento USB no Wii.
    + If you're on Windows, double-click the `patch-images.bat` file (this may also be displayed as "patch-images" Batch File). If you run into Cygwin-related issues, try the `patch-images-32.bat` file instead.
    + If you're on MacOS, open a command line prompt in the current folder, make the shell script executable through the command `chmod +x *.sh` and then execute `./patch-images.sh`.
    + If you're on Linux, double-click the `patch-images.desktop` file (this may also be displayed as "Patch Images") or execute the `./patch-images.sh` file in a terminal after making it executable through the command `chmod +x *.sh`.
1. If the above was successful, you should see a window pop-up that displays the patching process. Assim que terminado, pegue a versão da pasta `wiimmfi-images` (talvez esteja na pasta fora do patcher - ../wiimmfi-images) e copie-o de volta para seu USB.

Congrats on making it to the end of the optional section of the main guide! You can go to the site index below if you would like to look for other guides.
{: .notice--success}

[Clique aqui para voltar ao índice do site.](site-navigation)
{: .notice--info}
