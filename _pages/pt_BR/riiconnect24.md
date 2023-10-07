---
title: "RiiConnect24"
---

{% include toc title="Sumário" %}

Para suporte (em inglês) com RiiConnect24, bem como RiiTag, entre no [RiiConnect24 no Discord](https://discord.gg/rc24).
{: .notice--primary}

[RiiConnect24](https://rc24.xyz/) permite que você use serviços descontinuados do WiiConnect24, que incluem News, Forecast, Everybody Votes, Nintendo e Check Mii Out Channel, junto com Wii Mail.

Recomenda-se definir seu Wii para a hora atual antes de prosseguir. Siga [este tutorial](rtc) para configurá-lo.
{: .notice--warning}

NÃO INSTALE RIICONNECT24 EM UM WII MINI! Não irá funcionar e irá brickar seu console.
{: .notice--danger}

### Requisitos

Se você estiver no vWii, você precisará também do [Priiloader](priiloader) instalado com os WC24 hacks.
{: .notice--primary}

+ Um cartão SD ou um armazenamento USB
+ Um Wii com uma conexão à Internet
+ Um PC com uma conexão à Internet
+ [RiiConnect24 Patcher (Windows, Mac e Linux)](https://github.com/riiconnect24/RiiConnect24-Patcher/releases)
+ [YAWM ModMii Edition](https://oscwii.org/library/app/yawmme)

### Instruções

#### Seção I - Usando o RiiConnect24 Patcher

1. Clique no link acima para ir para a página do GitHub onde está o patcher.
1. Baixe o `RiiConnect24Patcher.bat` se você está no Windows, e `RiiConnect24Patcher.sh` se você está em um sistema macOS/Linux.
1. Execute o RiiConnect24 patcher.
    + No Windows execute `RiiConnect24Patcher.bat`.
    + Nos sistemas macOS/Linux, abra o Terminal e digite `bash`, e então arraste `RiiConnect24Patcher.sh` para o terminal e então pressione enter. Deve ficar assim: `bash <directory>/<directory>/RiiConnect24Patcher.sh`.
1. Pressione 1 para escolher "`Start`" e confirme sua escolha pressionando `ENTER`.

    ![](/images/riiconnect24/patcher/1.JPG)

1. Selecione o dispositivo para o qual você está patcheando.

    ![](/images/riiconnect24/patcher/2.JPG)

1. Para este guia, escolha "`Install RiiConnect24 on your Wii`"

    ![](/images/riiconnect24/patcher/3.JPG)

1. Escolha "`Express (Recommended)`". Ele dará tudo que você precisa.

    ![](/images/riiconnect24/patcher/4.JPG)

1. Selecione a sua região.

    ![](/images/riiconnect24/patcher/5.JPG)

1. Enquanto estiver nele, O RiiConnect24 Patcher pode também baixar alguns outros canais opcionais que não usam RiiConnect24. `[X]` representam as opções selecionadas. Basta pressionar 5 e `ENTER` se você não estiver interessado.

    ![](/images/riiconnect24/patcher/6.JPG)

1. Conecte seu cartão SD ou unidade USB no seu computador e selecione "`1`".

    ![](/images/riiconnect24/patcher/7.JPG)

1. Se seu dispositivo foi detectado com sucesso, selecione "`1`". Caso contrário, certifique-se de que há uma pasta chamada `apps` no seu cartão SD ou armazenamento USB e tente novamente.

    ![](/images/riiconnect24/patcher/8.JPG)

1. O patcher irá baixar aplicativos agora - por favor seja paciente.

    ![](/images/riiconnect24/patcher/9.JPG)

1. Uma vez que você chegar na tela que diz `Patching done`, você poderá sair do patcher. Todos os arquivos já devem estar no seu cartão SD.

    ![](/images/riiconnect24/patcher/10.JPG)

    ![](/images/riiconnect24/patcher/11.PNG)

1. Caso não tenha copiado tudo automaticamente para o seu cartão SD ou dispositivo USB, copie a pasta `WAD` e `apps` ao lado da pasta `RiiConnect24Patcher.bat` ou `RiiConnect24Patcher.sh` para o seu cartão SD ou dispositivo USB.

#### Seção II - Instalando WADs

Se estiver usando o Dolphin, você terminou o guia. Instale a WADs indo para `Tools -> Install WAD` dentro do Dolphin.
{: .notice--primary}

Agora você irá instalar as IOS e WADs dos Canais que são necessários para usar RiiConnect24.

1. Extraia o arquivo YAWM ModMii Edition `.zip` e copie a pasta `apps` para o seu cartão SD ou armazenamento USB.
1. Insira seu cartão SD ou armazenamento USB no seu Wii.
1. Abra o Homebrew Channel no seu Wii.
1. Execute o YAWM ModMii Edition.
1. Selecione o dispositivo que você colocou os arquivos RiiConnect24.
1. Destaque todas as WADs na pasta `wad` pressionando o botão + para selecioná-los. Quando todas as WADs forem selecionadas, pressione duas vezes para instalar as WADs.
1. Depois que elas forem instalados com sucesso, pressione o botão HOME para sair para o Homebrew Channel.

#### Seção III - Patcheando o nwc24msg.cfg

Agora você irá patchear seu arquivo `nwc24msg.cfg` que é necessário para usar o Wii Mail.

1. Abra o RiiConnect24 Mail Patcher.
1. Deve levar alguns segundo para patchear sua nwc24msg.cfg. Quando terminar, pressione o botão HOME para sair.

#### Seção IV - Conectando ao RiiConnect24

O antigo servidor de DNS `164.132.44.106` foi desativado em `1° de Junho de 2023` e não está mais disponível para uso.
{: .notice--warning}

Se você estiver recebendo erros como `WiiConnect24 and Wii Shop Channel currently not being offered in your country`, vá para Wii Settings -> Última Página -> Country e altere o país para Reino Unido. Você receberá esse erro ao usar um país que RiiConnect24 não suporta.
{: .notice--warning}

Se você receber o erro 107245, você não instalou o IOS patcheado.<br> Se você receber erro 220602, consulte [esta página](faq#for-riiconnect24-users).<br> Se você receber o erro 107304, veja [esta página](faq#for-riiconnect24-users-1).<br>
{: .notice--warning}

Agora você vai definir seu DNS para servidores RiiConnect24. Isso é opcional, mas recomendado, porque melhora o uso de RiiConnect24 e Wiimmfi tornando alguns outros recursos disponíveis.

1. Vá para `Wii Options`.
1. Vá para `Wii Settings`.
1. Vá para a `Página 2`, então, clique em `Internet`.
1. Vá para `Connection Settings`.
1. Selecione sua conexão atual.
1. Vá para `Change Settings`.
1. Vá para `Auto-Obtain DNS` (Não IP Address), então escolha `No`, e depois `Advanced Settings`.
1. Digite `167.86.108.126` como DNS primário.
1. Digite `1.1.1.1` como DNS secundário.
1. Selecione `Confirm`, então selecione `Save`.
1. Selecione `OK` para executar o teste de conexão.
1. Se o teste de conexão foi bem-sucedido, selecione `No` para ignorar a atualização do sistema Wii.
1. Go to `WiiConnect24`, then `WiiConnect24` again, and make sure it is enabled.
1. Back on the WiiConnect24 menu, go to `Standby Connection` and make sure it is enabled.
1. At `Slot Illumination`, it is recommend you set the disc light to `Dim` or `Bright`, but this is optional.
1. Finally, go to the `Internet` section, then `User Agreements` or `Agreement/Contact`, then `Yes`. Please read through this.

[Return to WiiConnect24](wiiconnect24)
{: .notice--info}

[Clique aqui para voltar ao índice do site.](site-navigation)
{: .notice--info}
