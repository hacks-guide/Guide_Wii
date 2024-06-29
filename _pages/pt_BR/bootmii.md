---
title: "Backup com BootMii"
---

{% include toc title="Sumário" %}

Um dos recursos mais importantes do BootMii é a habilidade de backup e restaurar o armazenamento NAND do seu Wii. Esta página irá guiá-lo no backup da sua NAND de Wii para um cartão SD, que você pode usar como preferir.

Você irá precisar de um **cartão SD** para criar o backup da NAND utilizando o BootMii. Se você não tiver um, você pode pular essa página, entretanto é muito recomendado fazer um backup de NAND se você puder.
{: .notice--warning}

### Requisitos

* Um cartão SD com pelo menos 512MB de espaço livre

### Instruções

Se você instalou o BootMii como Boot2 na última etapa, será necessário iniciar o BootMii reiniciando o console. Pule as etapas 1-2 se esse for o caso.
{: .notice--info}

1. Ligue o seu console.
1. Launch the Homebrew Channel, and launch the Load Priiloader app.
1. Pressione o botão HOME, depois selecione "Launch BootMii".

    ![](/images/bootmii/BootMii_HBC.png)

    Se o botão `Launch BootMii` não aparecer, por favor [reinicie o HackMii Installer](hackmii) e instale o BootMii.
    {: .notice--warning}

    Se a tela ficar preta e a luz azul do disco estiver piscando, quer dizer os arquivos do BootMii estão faltando no seu cartão SD. Baixe [este arquivo zip](https://static.hackmii.com/bootmii_sd_files.zip) e extraia-o para a raiz do seu cartão SD e tente novamente.
    {: .notice--warning}

1. Você deve ver uma imagem semelhante ao abaixo agora na sua tela:

    ![](/images/bootmii/BootMii_Main.png)

    Não é possível navegar o BootMii usando um Wii Remote. Você deve utilizar os botões POWER e RESET do seu console, ou um controle de Gamecube conectado na porta 1. Para navegar entre as opções, pressione POWER. Para selecionar uma opção, pressione RESET.
    {: .notice--info}

1. Selecione o botão Options (o ícone com as engrenagens).

    ![](/images/bootmii/BootMii_Gears.png)

1. Selecione o primeiro botão à esquerda.

    ![](/images/bootmii/BootMii_Backup.png)

1. Um backup da NAND será iniciado. Você pode acompanhar o progresso na tela.
    + "Bad Blocks" são normais. Não se preocupe quando você ver um em uma backup da NAND.

    ![](/images/bootmii/BootMii_NAND_Backup.png)

1. Depois desta etapa, o backup irá ser verificado. Idealmente, todos os blocos devem ser verdes após o processo de verificação.
    + Se você tem bad blocks de fábrica com páginas incorretas, esses blocks podem não ser verificados. Uma vez que todos os não-bad blocks sejam verificados com sucesso, está tudo ok.

    ![](/images/bootmii/BootMii_NAND_Backup_Verify.png)

1. Para sair do BootMii, aperte o botão Back (o que tem uma seta) e então você pode apertar o botão do Wii Menu ou o botão do Homebrew Channel para sair aonde deseja.

    ![](/images/bootmii/BootMii_Return.png)

<div id="restore-notice" class="notice" markdown="1">
Please be reminded that <strong>restoring a NAND backup is usually a last resort,</strong> and that there often better ways to fix your brick. Muitas vezes, existem maneiras melhores de desbrickar seu console.
Tente o seu melhor para [identificar sua condição de brick](bricks) e reverter a ação que a causou em primeiro lugar.
Para restaurar de um backup da NAND no seu cartão SD, você pode seguir as instruções para o [RestoreMii](bootmiirecover). **Wiis "Family Edition" (Wiis sem portas GameCube) NÃO PODEM restaurar backups da NAND sem modificações de hardware.**
</div>

Dois arquivos serão criados na raiz do cartão SD: `nand.bin` e `keys.bin`. `nand.bin` é um backup da memória interna do seu console, enquanto `keys.bin` são as chaves do console.
{: .notice--info}

### Autoinicialização

Se você conseguiu instalar o BootMii como boot2, mas não quer carregar a tela do BootMii toda vez que você ligar o Wii, você tem a opção de configurá-lo para iniciar automaticamente no menu de sistema. Isso deve fazer com que você não perceba que você tem o BootMii instalado como boot2.

1. Abra `SD:/bootmii/bootmii.ini` com um editor de texto, como o bloco de notas.
1. Altere `#AUTOBOOT=SYSMENU` para `AUTOBOOT=SYSMENU` excluindo o `#`.
1. Em seguida, altere `#BOOTDELAY=5` para `BOOTDELAY=1` excluindo o `#` e transformando o `5` em um `1`.
1. Salve o arquivo e saia.

Você também pode usar o aplicativo [BootMii Config Editor](https://oscwii.org/library/app/BootMiiConfigurationEditor) no Wii para alterar essas configurações.
{: .notice--info}

### Uploading NAND Backup to Dolphin Emulator

Your NAND backup can be utilized in Dolphin Emulator.

1. Get the latest beta or developement release of Dolphin Emulator from the [Dolphin Website](https://dolphin-emu.org/) and install it to your device.
1. Open dolphin emulator
1. Click on the `Tools` tab, scroll down to `Manage NAND`, then select `Import BootMii NAND backup...`.
1. Locate the `nand.bin` found on the root of your SD card and select open.
1. If it asks for a `keys.bin`, locate it on the root of your SD and select open.

[Continue to Priiloader Installation](priiloader)<br> Priiloader adds a level of brick protection, and is highly recommended, especially if you were only able to install BootMii as IOS. É especialmente importante para os usuários do BootMii na IOS.
{: .notice--info}
