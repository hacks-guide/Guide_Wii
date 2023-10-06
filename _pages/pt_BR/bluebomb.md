---
title: "BlueBomb"
---

{% include toc title="Sumário" %}

É **fortemente** não recomendado o uso de **qualquer tutorial por vídeo** para desbloquear seu Wii Mini, já que há uma grande chance de você **brickar** seu console.
{: .notice--warning}

Se você precisar de ajuda com qualquer coisa relacionada a este tutorial, junte-se ao [servidor do Wii Mini Hacking do Discord](https://discord.gg/6ryxnkS) (recomendado)
{: .notice--info}

BlueBomb é um exploit que tira proveito de uma falha nas bibliotecas Bluetooth do Wii e Wii Mini. Embora seja o único exploit que funciona para o Wii Mini, o BlueBomb também pode rodar no Wii original. Esse exploit também permite a recuperação de certos bricks, como o Korean Kii/Error 003.

Se você está usando o Wii original, você provavelmente deveria encontrar [outro exploit para usar](get-started) pois existem maneiras mais fáceis de chegar ao Instalador do HackMii. No entanto, existem exceções em circunstâncias como a recuperação de brick.
{: .notice--info}

Certifique-se de que o console esteja perto do computador rodando o exploit, o ideal é que a distância seja de menos de 1 metro.
{: .notice--info}

### Requisitos

* Uma máquina com Linux
    * Uma máquina virtual pode funcionar, mas não é recomendado devido à sua complexidade em obter o funcionamento do Bluetooth. Se possível, use um LiveUSB como descrito abaixo.
    * Se você tem um Raspberry Pi, você pode usá-lo, visto que provavelmente já tem Linux instalado.
    * Windows Subsystem for Linux ou um Chromebook rodando o modo Linux *não funcionará* , pois eles não têm acesso direto aos adaptadores Bluetooth ou portas USB.
    * Se você não tem Linux, o [Ubuntu](https://ubuntu.com/download/desktop) é a opção mais amigável e pode ser executado em computadores rodando Windows ou Mac.
        * Dispositivos 32 bits exigirão [Ubuntu 16.04](http://releases.ubuntu.com/16.04/).
        * Para dispositivos de 64 bits é recomendável usar a edição de LTS devido à sua estabilidade, mas a última versão também funciona.
    * Você pode [rodar um ambiente Live do Linux através do Pen Drive](https://ubuntu.com/tutorials/tutorial-create-a-usb-stick-on-windows#1-overview) ao invés de instalá-lo no seu computador.
* Um adaptador Bluetooth.
    * Um adaptador Bluetooth interno funcionará.
    * Se você não tiver um, certifique-se de conseguir um compatível com Linux.
* Um Pen Drive formatado como FAT32.
    * Não pode ser o mesmo Pen Drive usado para a sua máquina Linux.
* [Instalador HackMii v1.2](https://bootmii.org/download/)

### Instruções

1. Copie o `boot.elf` do hackmii_installer_v1.2 `.zip` para a raiz do seu Pen Drive.
    + (Se tentar corrigir um brick, você também deve copiar o homebrew que você deseja usar para /apps/)
    + (Mesmo para um Wii mini, bootmini.elf **não irá funcionar** , seu propósito é completamente diferente e não relacionado. Use boot.elf em todos os casos).
1. Reinsira seu Pen Drive no seu console.
    + Para um Wii mini, a porta USB está na parte de trás.
    + Para um Wii normal, use a porta inferior (ou a porta direita, se o Wii estiver na vertical).
1. Ligue o seu console.
1. Vá para `Wii Settings`.
1. Perceba no canto superior direito a letra próxima da versão do sistema.
    + Esta letra corresponde à região de menu do seu sistema, que você precisará saber para os passos correspondentes.

    ![](/images/wii/SystemMenuVersion.png)

1. Desligue seu console.
1. Inicie sua distribuição Linux e verifique se você está conectado à internet.
1. Abra o Terminal
1. Execute os seguintes comandos:

    ```bash
    wget https://wii.hacks.guide/assets/files/bluebomb-helper.sh
    chmod +x bluebomb-helper.sh
    ./bluebomb-helper.sh
    ```

1. O Terminal, então, irá baixar os arquivos necessários e pedirá informações sobre o console.
    + Se você selecionou um Wii mini você será solicitado a fornecer sua região. Isso pode ser determinado pela última letra da versão do Menu Wii (`U` para **EUA** e `E` para modelos **PAL**).
    + Se você selecionou um Wii você será solicitado a fornecer sua versão de menu Wii (o que você decidiu no passo 4)
1. Ligue o seu console.
    + **Não** conecte qualquer Wii Remote.
1. Pressione o botão de sincronização repetidamente até que o terminal mostre `got connection handle`.
    + Isto pode levar inúmeras tentativas.
1. Se o exploit foi bem sucedido, seu console irá carregar o Instalador HackMii.
    + Se você não está planejando usá-lo mais tarde, você pode desligar sua distribuição Linux.

Se usando um Wii: [Continuar para o Homebrew Channel e para a Instalação do BootMii](hbc)<br>
{: .notice--info}

Se usando um Wii mini: [Continuar para a instalação do Homebrew Channel](hbc-mini)
{: .notice--info}