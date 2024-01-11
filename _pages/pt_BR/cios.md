---
title: "cIOS"
---

{% include toc title="Sumário" %}

Embora as [cIOS](https://wiibrew.org/wiki/Custom_IOS) tenham sido amplamente suplantadas pela AHBPROT, que oferece acesso completo ao hardware, ele ainda tem aplicativos úteis. Por exemplo, isso permite a funcionalidade de Loaders USB como o USB Loader GX e WiiFlow, juntamente com outras partes de homebrew como o SaveGame Manager GX. Você pode ignorar este processo se você quiser, mas, geralmente, ele estende seu Wii com pouco ou nenhum lado negativo.

Se você tem um Wii Mini installe esta [cIOS](cios-mini) ao invés disso. Tentar instalar qualquer outra cIOS em um Wii mini não ira funcionar.
{: .notice--warning}

### Requisitos

* Um Wii
* Um cartão SD ou armazenamento USB
* [d2x cIOS Installer](/assets/files/d2x-cios-installer.zip)

Certifique-se de que se você estiver usando um cartão SD, a trava de bloqueio está na posição desbloqueada, caso contrário, você não será capaz de selecionar as opções corretas no instalador.
{: .notice--warning}

### Instruções

#### Section I - Downloading (Only required if your Wii doesn't have Internet)

If your Wii has an Internet connection, you may skip this section.
{: .notice--warning}

Se você não estiver no Windows, pode baixar & rodar [este script](/assets/files/d2x_offline_ios.sh)e ele vai baixar os arquivos WAD para você.
{: .notice--info}

1. Desligue seu console.
1. Insira seu cartão SD ou armazenamento USB no seu computador.
1. Baixe, extraia e execute o [NUS Downloader](https://github.com/WiiDatabase/nusdownloader/releases/latest/download/NUSD-Mod-NUS-Fix.zip).
1. Copie todos os arquivos de NUS Downloader `.zip` para uma pasta em seu computador.
1. Execute `NUS Downloader.exe`.
1. Selecione "Database", "IOS" e, em seguida, "IOS38", e selecione "v4123".
    + Verifique se a caixa "Pack WAD" está habilitada.
    + *Não* habilite "Patch IOS". Esse é o trabalho do instalador de cIOS.
1. Clique em `Start NUS Download!`.
1. Repeat the step 2 & 3 for `IOS56 v5661`, `IOS57 v5918` and `IOS58 v6175`.
1. Once you have downloaded all four IOS, there will be a folder named `titles` in the same folder as the NUS Downloader.
1. <br/> Open the folder and navigate through them until you locate the four WAD files you downloaded.
1. Você agora poderá usar homebrew como o [USB Loader GX](usbloadergx) e [WiiFlow](wiiflow).
    + Esse deve ser o mesmo dispositivo contendo o d2x cIOS Installer.

The WAD files should be on your SD card like this: ![](/images/cios/d2x_offline_ios.png)
{: .notice--info}

#### Seção II - Instalando


1. Baixe o d2x cIOS installer e extraia o zip da raíz do seu cartão SD ou armazenamento USB.
1. Reinsira seu cartão SD ou armazenamento USB no seu console.
1. Ligue o seu console.
1. Abra o Homebrew Channel.
1. Insira o cartão SD ou armazenamento USB no seu Wii, então inicie o d2x cIOS Installer através do Homebrew Channel
1. Set everything to match the following:

    ```
    Digite o slot do IOS a ser usado.
    ```

    ![](/images/cios/d2x_v11_248.png)

    The warning "`(c)IOS detected in slot ### will be overwriitten`" can be safely ignored.
    {: .notice--info}

    If you are seeing "`Slot ### already used in batch settings`" or "`cIOS already added in batch with revision ##### and slot ###`", press `-` to disable batch mode. <br> (If you are trying to exit the installer, the button is B, not Home.)
    {: .notice--info}

1. Press `A`. This will bring you to the slot map:

    ![](/images/cios/d2x_summary.png)

1. Press `A` again.

    ![](/images/cios/d2x_installation.png)

1. After the installation has finished, you will be brought back to the slot map. Ensure that the slot that was just installed is highlighted green.

    ![](/images/cios/d2x_log.png)

    If the slot is highlighted red, try install the cIOS again. <br> If you are getting an error before/during the downloading stages, press B to exit and continue from [Section I](#section-i---downloading).
    {: .notice--info}

1. Press `A`. This will return you to the configuration screen.
1. Repeat the previous 5 steps with the following configurations:

    + Install cIOS 248

        ```
        A more comprehensive (although still incomplete) list can be found <a href="https://wiki.gbatemp.net/wiki/Wii_cIOS_base_Compatibility_List"><strong x-id="1">here</strong></a><br> To change the cIOS used for a specific game, follow these instructions:
        ```

        ![](/images/cios/d2x_v11_249.png)

    + Install cIOS 250

        ```
        Install cIOS 249
        ```

        ![](/images/cios/d2x_v11_250.png)

    + Install cIOS 251

        ```
        Vá para cIOS e use as setas para selecionar o slot do IOS que usará.
        ```

        ![](/images/cios/d2x_v11_251.png)

1. Once you have finished with all 4 cIOSes, press B to return to the Homebrew Channel.

[Continue to the Homebrew Browser](hbb)<br> The Homebrew Browser is a good place to get homebrew on your Wii. A instalação é opcional.
{: .notice--info}
