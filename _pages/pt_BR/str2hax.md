---
title: "str2hax"
---

{% include toc title="Sumário" %}

Note que se sua ISP ou sua internet previne que você use servidores DNS customizados, o str2hax não irá funcionar e você deveria [escolher outro exploit para utilizar](get-started).
{: .notice--warning}

O str2hax é um exploit para o Wii que é acionado ao carregar o Contrato de Licença de Usuário Final do Wii. Isso requer nada além de uma conexão de Internet que permite que você altere o DNS no seu Wii.

### Requisitos

* Um Wii com uma conexão à Internet

### Instruções

#### Problemas comuns

Se você receber os Termos de Usuário normais, seu provedor bloqueia o uso de DNS personalizado. Por favor, [use outro exploit](get-started).
{: .notice--warning}

Se o Instalador HackMii não carregar depois de mais de 2 minutos, ou receba um erro como `Hanging.` ou `ERROR! if_config (ret = ...)`, por favor reinicie o seu Wii e tente novamente.
{: .notice--warning}

Se você instalou um mod como CTGP Revolution ou Project+, a str2hax pode carregá-lo em vez disso. Caso positivo, reinicie o seu Wii e tente novamente sem o cartão SD inserido.
{: .notice--warning}

#### Seção I - Conectando

Este exploit exige que você configure seu DNS para se conectar a um servidor que contém o exploit.

1. Ligue o seu console.
1. Vá para `Wii Options`.

    ![](/images/riiconnect24/Internet_1.png)

1. Vá para `Wii Settings`.

    ![](/images/riiconnect24/Internet_2.png)

1. Navegue para a `Página 2` -> `Internet` -> `Connection Settings`.

    ![](/images/riiconnect24/Internet_3.png)

    ![](/images/riiconnect24/Internet_4.png)

1. Clique no slot de conexão da rede e navegue para `Change Settings`.

    ![](/images/riiconnect24/Internet_5.png)

    ![](/images/riiconnect24/Internet_6.png)

1. Definir `Auto-Obtain DNS` para `No`, depois clique em `Advanced Settings`.

    ![](/images/riiconnect24/Internet_7.png)

1. Defina o DNS primário para `18.188.135.9`.

    ![](/images/exploits/str2hax/dns.png)

    Se tiverem 3 campos ao invés de 2 (como acima), volte e tenha certeza que você está na página `Auto-Obtain DNS`.
    {: .notice--warning}

1. Clique `Confirm`, depois clique `Save`.

    ![](/images/riiconnect24/Internet_10.png)

1. Quando solicitado, clique em `OK` para executar o teste de conexão.

    ![](/images/riiconnect24/Internet_11.png)

    ![](/images/riiconnect24/Internet_12.png)

    + Se o teste de conexão foi bem-sucedido, selecione `No` para ignorar a atualização do sistema Wii.
    + Se ele falhar com o código de erro `521xx`, verifique se você digitou o DNS corretamente.
    + Se ainda não tiver sucesso, por favor [use outro exploit](get-started).

#### Seção II - Executando o Exploit

1. Navegue para `Internet` -> `User Agreements` ou `Agreement/Contract`.
1. Selecione `Yes`.
1. Clique em `Next`.
    + Você deve ser cumprimentado com a seguinte tela:

    ![](/images/exploits/str2hax/EULA.png)

1. Dê ao exploit de 1-2 minutos para baixar (e não pressione `I ACCEPT`/`I DO NOT ACCEPT`).
1. Se o exploit foi bem sucedido, seu console irá carregar o Instalador HackMii.

    ![](/images/hackmii/scam.png)

[Continue para a instalação do Homebrew Channel e BootMii](hbc)
{: .notice--info}
