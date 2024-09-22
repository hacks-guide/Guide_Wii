---
title: "Wilbrand"
---

Wilbrand is an exploit for the Wii that is triggered using the Wii Message Board. It is compatible with Wii menu versions 3.0 through 4.3 in all regions.

There are two methods listed on this page used to create the proper Wilbrand exploit. Wilbrand Web is recommended for its ease of use.
{: .notice--info}

{% capture wilbrand-web %}

### Wilbrand Web

#### Requisitos

* An SD card formatted to FAT32/MS-DOS
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
1. Open the Wii Message Board.
1. Open the green letter with a bomb.

    ![](/images/exploits/wilbrand/msgboard.png)

    + Certifique-se que a data em seu Wii está correta, caso contrário você não poderá encontrar a carta.
    + In some cases, you may need to check the messages for tomorrow or yesterday for the letter to show up.
    + Se você não vê a carta verde, cheque se algum erro aparece nas sessões do cartão SD em `Data Management`. Se quaisquer aparecerem, talvez haja um erro com o formato do seu cartão SD ou o leitor de SD do Wii.


1. O console deverá iniciar o instalador do HackMii.
    + If your Wii gets stuck on a black screen, power it off by holding the POWER button, then try again.
    + If you get sent back to the Wii Menu after opening the letter, ensure that the lock switch on your SD card is in the unlocked position.

[Continue para a Instalação do Homebrew Channel e do BootMii](hbc)
{: .notice--info}

{% endcapture %}

{% capture wilbrand-cli %}

### Wilbrand CLI

#### Requisitos

* Um PC executando Windows, MacOS ou Linux
* An SD card formatted to FAT32/MS-DOS
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
        + Se você não abriu o terminal diretamente na pasta que Wilbrand foi extraido, use `cd` para entrar nela primeiro, ex. `cd ~/Desktop/Wilbrand` `cd ~/Desktop/Wilbrand` `cd ~/Desktop/Wilbrand`
        + `/media/mount_dir` é a pasta que seu cartão SD está montado. Isso talvez mude de acordo com a sua distro do Linux.

        ![](/images/exploits/wilbrand/linux.png)

1. Extraia o HackMii Installer v1.2 para uma pasta no seu PC.
1. Localize o arquivo `boot.elf`, e coloque-o na raíz do seu cartão SD.
1. Pegue seu cartão SD e insira-o no seu Wii.
    + O cartão SD deve ser inserido no slot de cartão SD localizado na frente do Wii. O uso de um adaptador USB conectado à porta USB do Wii não funcionará.
1. No seu Wii, retorne ao Menu do Wii e então abra o Wii Message Board.
1. Open the Wii Message Board.
1. Open the green letter with a bomb.
    + Certifique-se que a data em seu Wii está correta, caso contrário você não poderá encontrar a carta.
    + In some cases, you may need to check the messages for tomorrow or yesterday for the letter to show up.
    + Se você não vê a carta verde, cheque se algum erro aparece nas sessões do cartão SD em `Data Management`. Se quaisquer aparecerem, talvez haja um erro com o formato do seu cartão SD ou o leitor de SD do Wii.

    ![](/images/exploits/wilbrand/msgboard.png)

1. O console deverá iniciar o instalador do HackMii.
    + If your Wii gets stuck on a black screen, power it off by holding the POWER button, then try again.
    + If you get sent back to the Wii Menu after opening the letter, ensure that the lock switch on your SD card is in the unlocked position.

[Continue para a Instalação do Homebrew Channel e do BootMii](hbc)
{: .notice--info}

{% endcapture %}

<button class="btn btn--large btn--primary tabLink" onClick="select_tab(event, 'wilbrand-web')"> Wilbrand Web </button>
<button class="btn btn--large btn--info tabLink" onClick="select_tab(event, 'wilbrand-cli')"> Wilbrand CLI </button>

<div class="tabContent tabDefualt" id="wilbrand-web" markdown="1">

{{ wilbrand-web }}
</div>
<div class="tabContent" id="wilbrand-cli" markdown="1">
{{ wilbrand-cli }}
</div>

<script>
    const tabContents = document.getElementsByClassName('tabContent');
    const tabLinks    = document.getElementsByClassName('tabLink');

    for (tab of tabContents) { tab.style.display = 'none'; }
    document.getElementsByClassName('tabDefault')[0].style.display = 'block';

    function select_tab(event, tab_id)
    {
        for (tab of tabContents) { tab.style.display = 'none'; }
        for (btn of tabLinks) { btn.className = btn.className.replace('btn--primary', 'btn--info'); }

        document.getElementById(tab_id).style.display = 'block';
        event.currentTarget.className = event.currentTarget.className.replace('btn--info', 'btn--primary');
    }
</script>
