---
title: "RiiConnect24"
---

{% include toc title="Sumário" %}

Para suporte (em inglês) com RiiConnect24, bem como RiiTag, entre no [RiiConnect24 no Discord](https://discord.gg/rc24).
{: .notice--primary}

[RiiConnect24](https://rc24.xyz/) lhe permite utilizar os serviços descontinuados do WiiConnect24, que incluem os Channels News, Forecast, Everybody Votes, Nintendo e Check Mii Out Channel, junto com o Wii Mail.

É recomendado configurar o horário atual em seu Wii antes de prosseguir. Siga [este tutorial](rtc) para configurá-lo.
{: .notice--warning}

NÃO INSTALE RIICONNECT24 EM UM WII MINI! Não irá funcionar e causará um brick no sistema.
{: .notice--danger}

### Requisitos

Siga [este tutorial](riiconnect24-vwii) se você quiser instalar o RiiConnect24 no vWii (Modo Wii no Wii U).
{: .notice--primary}

+ Um cartão SD ou armazenamento USB
+ Um Wii conectado à internet
+ Um PC com uma conexão à Internet
+ [RiiConnect24 Patcher (Windows, Mac e Linux)](https://github.com/riiconnect24/RiiConnect24-Patcher/releases)
+ [YAWM ModMii Edition](https://oscwii.org/library/app/yawmme)

### Instruções

#### Seção I - Usando RiiConnect24 Patcher

1. Clique no link acima para ir para a página do GitHub onde está o patcher.
1. Baixe `RiiConnect24Patcher.bat` se estiver no Windows e `RiiConnect24Patcher.sh` se estiver em um sistema Unix
1. Tela principal do RiiConnect24 Patcher
    + No Windows execute `RiiConnect24Patcher.bat`.
    + Em sistemas Unix, abra Terminal e digite `bash`, então arraste `RiiConnect24Patcher.sh` para o terminal e então pressione enter. Deve ficar assim: `bash <directory>/<directory>/RiiConnect24Patcher.sh`.
1. Pressione 1 para escolher "`Start`" e confirme sua seleção pressionando `ENTER`.

    ![](/images/riiconnect24/patcher/1.JPG)

1. Selecione o dispositivo que você vai patchear.

    ![](/images/riiconnect24/patcher/2.JPG)

1. Para este guia, escolha "`Install RiiConnect24 on your Wii`"

    ![](/images/riiconnect24/patcher/3.JPG)

1. Escolha "`Express (Recomemended)`". Ele vai te dar tudo que você precisa.

    ![](/images/riiconnect24/patcher/4.JPG)

1. Selecione sua região.

    ![](/images/riiconnect24/patcher/5.JPG)

1. Enquanto estiver nisso, o RiiConnect24 Patcher pode também baixar alguns outros canais opcionais que não usam o RiiConnect24. `[X]` representa as opções selecionadas. Basta pressionar 5 e `ENTER` se você não estiver interessado.

    ![](/images/riiconnect24/patcher/6.JPG)

1. Conecte seu cartão SD ou armazenamento USB em seu computador e selecione "`1`".

    ![](/images/riiconnect24/patcher/7.JPG)

1. Se seu dispositivo foi detectado com sucesso, selecione "`1`". Caso contrário, certifique-se de que há uma pasta chamada `apps` no seu cartão SD ou armazenamento USB e tente novamente.

    ![](/images/riiconnect24/patcher/8.JPG)

1. O patcher irá baixar aplicativos agora - por favor seja paciente.

    ![](/images/riiconnect24/patcher/9.JPG)

1. Uma vez que você chegar na tela que diz `Patching done`, você poderá sair do patcher. Todos os arquivos já devem estar no seu cartão SD.

    ![](/images/riiconnect24/patcher/10.JPG)

    ![](/images/riiconnect24/patcher/11.PNG)

1. Se ele não copiou tudo automaticamente para o seu cartão SD ou dispositivo USB, copie a pasta `WAD` e `apps` ao lado de `RiiConnect24Patcher.bat` para o seu cartão SD ou armazenamento USB.

#### Seção II - Instalando WADs

Se estiver usando o Dolphin, você terminou o guia. Instale a WADs indo para `Tools -> Install WAD` dentro do Dolphin.
{: .notice--primary}

Agora você irá instalar o IOS com patch e WADs de Channels que são necessários para usar o RiiConnect24.

1. Extraia o arquivo YAWM ModMii Edition `.zip` e copie a pasta `apps` para o seu cartão SD ou armazenamento USB.
1. Insira seu cartão SD ou armazenamento USB no seu Wii.
1. Inicie o Homebrew Channel no Wii.
1. Execute o YAWM ModMii Edition.
1. Selecione o dispositivo que você colocou os arquivos RiiConnect24.
1. Destaque todas as WADs na pasta `wad` pressionando o botão + para selecioná-los. Quando todas as WADs forem selecionadas, pressione duas vezes para instalar as WADs.
1. Depois que eles forem instalados com sucesso, pressione o botão HOME para sair para o Homebrew Channel.

#### Seção III - Patching nwc24msg.cfg

Agora você irá aplicar um patch em seu arquivo `nwc24msg.cfg` que é necessário para usar o Wii Mail.

1. Inicie o RiiConnect24 Mail Patcher.
1. Deve demorar apenas alguns segundos para aplicar o patch seu nwc24msg.cfg. Quando terminado, pressione o botão HOME para sair.

#### Seção IV - Conectando

Nosso antigo servidor DNS foi descontinuado desde `1º de Junho, 2023` e não está mais disponível para uso.
{: .notice--warning}

Se você estiver recebendo erros como o `WiiConnect24 and Wii Shop Channel currently not being offered in your country`, vá para Wii Settings -> Última Página -> Country e mude-o para United Kingdom. Você receberá este erro ao usar um país que não suportamos. Contate-nos em [support@riiconnect24.net](mailto:support@riiconnect24.net) se você precisar de mais ajuda.
{: .notice--warning}

Se você receber o erro 107245, então você não instalou a IOS com patch.<br>
{: .notice--warning}

Agora você irá definir seu DNS para nossos servidores. Isso é opcional, mas é recomendado, porque melhora o uso do RiiConnect24 e do Wiimmfi tornando algumas outras funcionalidades disponíveis.

1. Vá para `Wii Options`.
1. Vá para `Wii Settings`.
1. Vá para a `Página 2` e clique em `Internet`.
1. Vá para `Connection Settings`.
1. Selecione sua conexão atual.
1. Vá em `Change Settings`.
1. Vá para `Auto-Obtain DNS` (não Endereço IP), então selecione `No`, e então `Advanced Settings`.
1. Digite `167.86.108.126` como DNS primário.
1. Digite `1.1.1.1` como DNS secundário.
1. Selecione `Confirm`, depois selecione `Save`.
1. Selecione `OK` para executar um teste de conexão.
1. Se o teste de conexão foi bem-sucedido, selecione `No` para ignorar a Atualização do Sistema Wii.
1. Vá para o `WiiConnect24`, depois `WiiConnect24` novamente, e certifique-se de que ele está habilitado.
1. Volte no menu WiiConnect24, vá para `Standy Connection` e certifique-se de que está habilitada.
1. Em `Slot Illumination`, recomendamos que você coloque a luz do disco para `Dim` ou `Bright`, mas isso é opcional.
1. Finalmente, vá para a seção `Internet` e, em seguida, `User Agreements` ou `Agreement/Contact`, e `Yes`. Por favor, leia isto.

[Retorne para WiiConnect24](wiiconnect24)
{: .notice--info}

[Clique aqui para voltar ao índice do site.](site-navigation)
{: .notice--info}
