---
title: "Wilbrand"
---

{% include toc title="Sumário" %}

Wilbrand, assim como o LetterBomb, é um exploit para o Wii que pode ser acionado usando o Wii Message Board.

Diferente do Letterbomb, Wilbrand suporta versões do menu do Wii anteriores ou iguais a 3.0.
{: .notice--info}

There are two methods listed on this page used to create the proper Wilbrand exploit. Wilbrand Web is recommended for its ease of use.
{: .notice--info}

### Wilbrand Web (Recommended)

#### Requisitos

* Um cartão SD formatado para FAT32/MS-DOS
* Um Wii pelo menos na versão 3.0

SD cards larger than 2GB will not work on Wii menu versions before 4.0.
{: .notice--warning}

#### Instruções

1. Ligue o seu console.
1. No seu Wii, vá para `Wii Settings`, e tome nota da versão no canto superior direito.
1. Take note of the letter next to the system version, in the top-right corner of the screen.
    + Esta letra corresponde à região de menu do seu sistema, que você precisará saber para os passos correspondentes.

    ![](/images/wii/SystemMenuVersion.png)

1. Vá para `Internet` -> `Console Information` e também tome nota do seu MAC address.
1. Anote seu endereço MAC INTEIRO.

    ![](/images/wii/MacAddress.png)

1. On your computer, open the browser and go to [wilbrand.donut.eu.org](https://wilbrand.donut.eu.org/).
1. executar Wilbrand no Linux
1. Visit [wilbrand.donut.eu.org](https://wilbrand.donut.eu.org/), input your Wii MAC, version, region, ensure `Bundle the HackMii Installer for me!` is checked, and cut either wire.
1. Corte qualquer "wire".

    ![](/images/exploits/wilbrand/web.png)

1. Click on "Download your .zip".
1. Extraia o zip do Wilbrand para uma pasta no seu PC, de preferência na sua Área de Trabalho.
1. Copy the `private` folder and the `boot.elf` file from the downloaded `.zip` file to the root of your SD card.
1. Extraia o conteúdo do ZIP baixado para a raiz do seu cartão SD.
    + O cartão SD deve ser inserido no slot de cartão SD localizado na frente do Wii. O uso de um adaptador USB conectado à porta USB do Wii não funcionará.
1. Pegue seu cartão SD e insira-o no seu Wii.
1. No seu Wii, retorne ao Menu do Wii e então abra o Wii Message Board.
1. Open the green letter with a bomb.
    + Certifique-se que a data em seu Wii está correta, caso contrário você não poderá encontrar a carta.
    + In some cases, you may need to check the messages for tomorrow or yesterday for the letter to show up.
    + Se você não vê a carta verde, cheque se algum erro aparece nas sessões do cartão SD em `Data Management`. Se quaisquer aparecerem, talvez haja um erro com o formato do seu cartão SD ou o leitor de SD do Wii.

    ![](/images/exploits/wilbrand/msgboard.png)

1. O console deverá iniciar o instalador do HackMii.
    + If this didn't work for you, [try another exploit](get-started) or try [Wilbrand CLI](#wilbrand-cli).

[Continue para a Instalação do Homebrew Channel e do BootMii](hbc)
{: .notice--info}

### Wilbrand CLI

#### Requisitos

* Um PC executando Windows, MacOS ou Linux
* Um cartão SD formatado para FAT32/MS-DOS
* Um Wii pelo menos na versão 3.0
* [Wilbrand](https://static.wiidatabase.de/Wilbrand.zip)
* [Para o Wii original, nós não recomendamos utilizar BlueBomb se você pretende instalar o Homebrew Channel e BootMii, já que existem exploits mais convenientes disponíveis.](https://bootmii.org/download/)

SD cards larger than 2GB will not work on Wii menu versions before 4.0.
{: .notice--warning}

#### Instruções

1. Ligue o seu console.
1. No seu Wii, vá para `Wii Settings`, e tome nota da versão no canto superior direito.
1. Take note of the letter next to the system version, in the top-right corner of the screen.
    + Esta letra corresponde à região de menu do seu sistema, que você precisará saber para os passos correspondentes.

    ![](/images/wii/SystemMenuVersion.png)

1. Vá para `Internet` -> `Console Information` e também tome nota do seu MAC address.
1. Anote seu endereço MAC INTEIRO.

    ![](/images/wii/MacAddress.png)

1. Copy all files from the Wilbrand `.zip` to a folder on your computer
1. Insira o cartão SD no seu PC.
1. Abra um terminal dentro da pasta que Wilbrand foi extraído para.
1. Usando a versão do seu Wii e MAC address, execute o seguinte comando:

    + Windows: `.\Wilbrand.exe AA-BB-CC-DD-EE-FF MM/DD/AAAA VERSION X:`
        + `X:` é a letra do seu cartão SD.

        ![](/images/exploits/wilbrand/windows.png)

    + Linux/MacOS: `./Wilbrand AA-BB-CC-DD-EE-FF MM/DD/AAAA VERSION /media/mount_dir`
        + Se você não abriu o terminal diretamente na pasta que Wilbrand foi extraido, use `cd` para entrar nela primeiro, ex. `cd ~/Desktop/Wilbrand` `cd ~/Desktop/Wilbrand`
        + `/media/mount_dir` é a pasta que seu cartão SD está montado. Isso talvez mude de acordo com a sua distro do Linux.

        ![](/images/exploits/wilbrand/linux.png)

1. Extraia o HackMii Installer v1.2 para uma pasta no seu PC.
1. Localize o arquivo `boot.elf`, e coloque-o na raíz do seu cartão SD.
1. Pegue seu cartão SD e insira-o no seu Wii.
    + O cartão SD deve ser inserido no slot de cartão SD localizado na frente do Wii. O uso de um adaptador USB conectado à porta USB do Wii não funcionará.
1. No seu Wii, retorne ao Menu do Wii e então abra o Wii Message Board.
1. Carregue a carta verde com um ícone de Bob-omb.
1. Open the green letter with a bomb.
    + Certifique-se que a data em seu Wii está correta, caso contrário você não poderá encontrar a carta.
    + Em alguns casos, talvez seja necessário verificar as mensagens do dia anterior ou dia seguinte para que a carta apareça.
    + Se você não vê a carta verde, cheque se algum erro aparece nas sessões do cartão SD em `Data Management`. Se quaisquer aparecerem, talvez haja um erro com o formato do seu cartão SD ou o leitor de SD do Wii.

    ![](/images/exploits/wilbrand/msgboard.png)

1. O console deverá iniciar o instalador do HackMii.

[Continue para a Instalação do Homebrew Channel e do BootMii](hbc)
{: .notice--info}
