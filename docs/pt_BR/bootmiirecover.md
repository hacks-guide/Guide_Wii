---
title: "BootMii Recovery (RestoreMii)"
---

{% include toc title="Sumário" %}

Este guia fornecerá instruções sobre como restaurar um backup da sua NAND com o BootMii. Por favor, tenha em mente que este é geralmente o  <strong>último método de reparo</strong> para consertar um brick se você tiver um, e se não resolver o seu problema, você pode ter que procurar suporte. Se você ainda puder entrar no BootMii, tente entrar no Homebrew Channel, assim você poderá fazer uma tentativa de [identificar e reparar o brick](bricks) usando outros métodos.

Se você instalou o BootMii como Boot2 na última etapa, será necessário iniciar o BootMii reiniciando o console. Pule as etapas 1-2 se esse for o caso.
{: .notice--info}

Se a tela ficar preta e a luz azul do disco estiver piscando, quer dizer os arquivos do BootMii estão faltando no seu cartão SD. Baixe [esse arquivo zip](https://static.hackmii.com/bootmii_sd_files.zip) e extraia ele para a raiz do seu cartão SD, então, tente novamente.
{: .notice--warning}

Wiis "Family Edition" (Wiis sem portas GameCube) NÃO PODEM restaurar backups da NAND. Isso ocorre devido à falta de portas GameCube que são necessárias em Wiis sem boot2 para entrar no código de confirmação de restauração. Para ajuda adicional, por favor procure suporte.
{: .notice--danger}

NÃO restaure um backup da NAND não verificado, ou um que não seja do seu Wii: isso pode levar a um BRICK PIOR. O mesmo se aplica ao uso de cartões SD defeituosos.
{: .notice--danger}

### Requisitos

* Um backup anterior da NAND feito pelo [BootMii](bootmii)

### Restaurando dados individuais de um backup da NAND

Existe provavelmente uma maneira muito mais segura e rápida de trazer os dados individuais de volta ao seu Wii, provavelmente envolvendo o uso do emulador Dolphin.

Por exemplo, se você quiser restaurar seus dados do Wii Message Board, use o Dolphin para importar seu backup da NAND. Np Dolphin, vá para `Arquivo -> Abrir Pasta de Usuário`e encontre `Wii/title/00000001/00000002/data/cdb.vff`, copie-o para o seu cartão SD e use o[WiiXplorer](https://oscwii.org/library/app/wiixplorer) para restaurá-lo no local correspondente.

Se você quiser restaurar os dados salvos de um jogo, use o Dolphin para importar seu backup da NAND, use `Ferramentas > Exportar Todos os Dados Salvos do Wii` para exportar todos os seus saves para o seu cartão SD, e use o Gerenciamento de Dados para movê-lo para seu Wii.

### Notas importantes

+ Se você não fez nada para causar um brick (ou você está ligando seu Wii depois de um longo tempo), então é provavelmente um [Wi-Fi Brick](bricks#wi-fi-brick).

+ Se você tiver o BootMii como IOS instalado, o RestoreMii irá pedir-lhe o Konami Code através de um Controle de GameCube.

+ Você deve usar os botões POWER (direita) e RESET (selecionar) no seu console, ou um controle de GameCube conectado na porta 1 para navegar no BootMii. Para navegar com um controle de GameCube, clique esquerda/direita no +Control Pad em um controle de GameCube. Para selecionar, pressione A.

### Instruções

1. Abra o Homebrew Channel.
1. Pressione o botão HOME, depois selecione "Launch BootMii".
    + Se o Homebrew Channel não está acessível e você tem o Priiloader instalado, você também pode acessá-lo na inicialização e selecionar o `BootMii IOS` para carregar o BootMii.

    ![](/images/bootmii/BootMii_HBC.png)

1. Selecione o botão Options (o ícone com as engrenagens).

    ![](/images/bootmii/BootMii_Gears.png)

1. Selecione o botão RestoreMii.

    ![](/images/bootmii/BootMii_Restore.png)

1. O BootMii informará que ele será executado no modo SIMULATION, você pode pressionar A ou Reset para continuar.

    ![](/images/bootmii/BootMii_NAND_Simulation.png)

1. Se o BootMii estiver instalado como IOS, entre com o Konami Code no seu controle de GameCube: ↑, ↑, ↓, ↓, ←, →, ←, →, B, A, START

    ![](/images/bootmii/BootMii_NAND_Konami.png)

1. O BootMii será executado através do processo de restauração como uma simulação, detalhando o que será apagado e reescrito. Assim que isso for feito, você tem uma última chance de se afastar do processo de restauração. Caso contrário, pressione o botão INICIAR ou Eject para começar.

    ![](/images/bootmii/BootMii_NAND_Restore.png)

1. Depois do processo terminar, você deverá ver um texto escrito `I HAZ SUCCESS!`, caso contrário `I HAZ FAIL`. Aperte qualquer botão no seu console Wii ou no controle de GCN.

    ![](/images/bootmii/BootMii_NAND_Restore_Success.png)

1. Pressione o botão Voltar (o botão com uma seta), então pressione o botão de Menu do Wii ou o botão do Homebrew Channel para sair do BootMii.

    ![](/images/bootmii/BootMii_Return.png)

Se você estava restaurando um backup da NAND para reparar um brick e isso não resolveu seu problema, por favor consulte [a parte dos bricks](bricks) deste guia.
{: .notice--info}

[Clique aqui para voltar ao índice do site.](site-navigation)
{: .notice--info}
