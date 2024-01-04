---
title: "Backup com BootMii"
---

{% include toc title="Sumário" %}

Um dos recursos mais importantes do BootMii é a habilidade de backup e restaurar o armazenamento NAND do seu Wii. Esta página irá guiá-lo no backup da sua NAND de Wii para um cartão SD, que você pode usar como preferir.

Wiis "Family Edition" (Wiis sem portas GameCube) NÃO PODEM restaurar backups da NAND. Isso ocorre devido à falta de portas GameCube que são necessárias em Wiis sem boot2 para entrar no código de confirmação de restauração. Seja como for, ainda se recomenda que se faça um backup nestes consoles.
{: .notice--danger}

Você irá precisar de um **cartão SD** para criar o backup da NAND utilizando o BootMii. Se você não tiver um, você pode pular essa página, entretanto é muito recomendado fazer um backup de NAND se você puder.
{: .notice--warning}

Não é possível navegar o BootMii usando um Wii Remote. Você deve utilizar os botões POWER e RESET do seu console, ou um controle de Gamecube conectado na porta 1. Para navegar entre as opções, pressione POWER no seu Wii (ou direita/esquerda no +Control Pad em um controle de Gamecube). Para selecionar uma opção, aperte RESET no seu Wii ou A no seu controle de Gamecube. Você PRECISA usar um controle de GameCube para restaurar um backup da NAND no futuro se o BootMii estiver instalado como IOS.
{: .notice--info}

Se o botão `Launch BootMii` não aparecer, por favor [reinicie o HackMii Installer](hackmii) e instale o BootMii.
{: .notice--warning}

Se a tela ficar preta e a luz azul do disco estiver piscando, quer dizer os arquivos do BootMii estão faltando no seu cartão SD. Baixe [este arquivo zip](https://static.hackmii.com/bootmii_sd_files.zip) e extraia-o para a raiz do seu cartão SD e tente novamente.
{: .notice--warning}

### Requisitos

* Um cartão SD com pelo menos 512MB de espaço livre

### Instruções

Se você instalou o BootMii como Boot2 na última etapa, será necessário iniciar o BootMii reiniciando o console. Pule as etapas 1-2 se esse for o caso.
{: .notice--info}

1. Ligue o seu console.
1. Abra o Homebrew Channel.
1. Press the HOME Button, then select "Launch BootMii".

    ![](/images/bootmii/BootMii_HBC.png)

1. Você deve ver uma imagem semelhante ao abaixo agora na sua tela:

    ![](/images/bootmii/BootMii_Main.png)

1. Selecione o botão Options (o ícone com as engrenagens).

    ![](/images/bootmii/BootMii_Gears.png)

1. Selecione o primeiro botão à esquerda.

    ![](/images/bootmii/BootMii_Backup.png)

1. Um backup da NAND será iniciado. Você pode acompanhar o progresso na tela.
    + "Bad Blocks" são normais. Não se preocupe quando você ver um em uma backup da NAND.

    ![](/images/bootmii/BootMii_NAND_Backup.png)

1. Depois desta etapa, o backup irá ser verificado. Idealmente, todos os blocos devem ser verdes após o processo de verificação.
    + Se você tem bad blocks de fábrica com páginas incorretas, esses blocks podem não ser verificados. As long all non-bad blocks are successfully verified, this should be fine.

    ![](/images/bootmii/BootMii_NAND_Backup_Verify.png)

1. Para sair do BootMii, aperte o botão Back (o que tem uma seta) e então você pode apertar o botão do Wii Menu ou o botão do Homebrew Channel para sair aonde deseja.

    ![](/images/bootmii/BootMii_Return.png)

<div id="restore-notice" class="notice" markdown="1">
Please be reminded that <strong>restoring a NAND backup is usually a last resort,</strong> and that there often better ways to fix your brick. Muitas vezes, existem maneiras melhores de desbricar seu console.
Tente o seu melhor para [identificar sua condição de brick](bricks) e reverter a ação que a causou em primeiro lugar.
To restore from a NAND backup on your SD card, you can follow the instructions for [RestoreMii](bootmiirecover).
</div>

As stated earlier, if you have BootMii installed as boot2, it will launch every time you start your console. If you would like to change this, you can use the app [BootMii Config Editor](https://oscwii.org/library/app/BootMiiConfigurationEditor). Or, you can edit `sd:/bootmii/bootmii.ini` manually.
{: .notice--info}

To make sure you don’t lose the files, it's recommended to copy `nand.bin` and `keys.bin` from the root of your SD card to your computer. `nand.bin` é a memória interna do seu Wii, enquanto `keys.bin` são as chaves do console.
{: .notice--info}

[Continue to Priiloader Installation](priiloader)<br> Priiloader adds a level of brick protection, and is highly recommended, especially if you were only able to install BootMii as IOS. É especialmente importante para os usuários do BootMii na IOS.
{: .notice--info}
