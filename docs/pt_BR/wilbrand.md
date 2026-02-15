# WilBrand

Wilbrand é um exploit para o Wii que é acionado usando o Wii Message Board. É compatível com as versões do menu do Wii 3.0 até 4.3 de todas as regiões.

::: info

Existem dois métodos listados nesta página usados para criar o exploit adequado do Wilbrand

Wilbrand Web é recomendado pela sua facilidade de uso.

:::

::::: tabs

:::: tab Wilbrand Web

## Wilbrand Web

### Requisitos

- Um cartão SD [formatado para FAT32/MS-DOS](https://wiki.hacks.guide/wiki/Formatting_an_SD_card)
- Um Wii pelo menos na versão 3.0

::: warning

Cartões SD maiores que 2GB não funcionarão nas versões do menu do Wii antes da 4.0.

:::

### Instruções

1. Ligue o seu console.

2. Vá para `Wii Settings`.

3. Anote a letra ao lado da versão do sistema, no canto superior direito da tela.

   - Esta letra corresponde à região de menu do seu sistema, que você precisará saber para os passos correspondentes.

   ![](/images/wii/SystemMenuVersion.png)

4. Navegue para `Internet` > `Console Information`.

5. Anote seu endereço MAC INTEIRO.

   ![](/images/wii/MacAddress.png)

6. No seu computador, abra o navegador e vá para [wilbrand.donut.eu.org](https://wilbrand.donut.eu.org/).

7. executar Wilbrand no Linux

8. Certifique-se de que o `Bundle the HackMii Installer para mim!` esteja marcado.

9. Corte qualquer "wire".

   ![](/images/exploits/wilbrand/web.png)

10. Clique em "Download your .zip".

11. 1 Insira seu cartão SD no seu computador.

12. Copie a pasta `private` e o arquivo `boot.elf` do arquivo `.zip` baixado para a raiz do seu cartão SD.

13. 1 Pegue seu cartão SD e insira-o no seu Wii.
    - - O cartão SD deve ser inserido no slot de cartão SD localizado na frente do Wii. O uso de um adaptador USB conectado à porta USB do Wii não funcionará.

14. Menu do Wii do LetterBomb

15. Abra o painel de mensagens do Wii.

16. Abra a carta verde com uma bomba.

    ![](/images/exploits/wilbrand/msgboard.png)

    - Certifique-se que a data em seu Wii está correta, caso contrário você não poderá encontrar a carta.
    - Em alguns casos, talvez seja necessário verificar as mensagens do dia anterior ou do dia seguinte para que a carta apareça.
    - Se você não vê a carta verde, cheque se algum erro aparece na seção do cartão SD em Data Management\`. Se quaisquer aparecerem, talvez haja um erro com o formato do seu cartão SD ou o leitor de SD do Wii.

17. If the exploit was successful, your device will have loaded the HackMii Installer.
    - Se seu Wii ficar preso em uma tela preta, desligue-o segurando o botão POWER, e então tente novamente.
    - Se você for enviado de volta para o Menu do Wii depois de abrir a carta, Certifique-se de que a trava de bloqueio do cartão SD esteja na posição desbloqueada.

::: tip

[Continue para a Instalação do Homebrew Channel e do BootMii)

:::

::::

:::: tab Wilbrand CLI

## Wilbrand CLI

### Requisitos

- Um PC executando Windows, MacOS ou Linux
- Um cartão SD [formatado para FAT32/MS-DOS](https://wiki.hacks.guide/wiki/Formatting_an_SD_card)
- Um Wii pelo menos na versão 3.0
- [Wilbrand](https://static.wiidatabase.de/Wilbrand.zip)
- [HackMii Installer v1.2](https://bootmii.org/download/)

::: warning

Cartões SD maiores que 2GB não funcionarão nas versões do menu do Wii antes da 4.0.

:::

### Instruções

1. Ligue o seu console.

2. Vá para `Wii Settings`.

3. Anote a letra ao lado da versão do sistema, no canto superior direito da tela.

   - Esta letra corresponde à região de menu do seu sistema, que você precisará saber para os passos correspondentes.

   ![](/images/wii/SystemMenuVersion.png)

4. Navegue para `Internet` > `Console Information`.

5. Anote seu endereço MAC INTEIRO.

   ![](/images/wii/MacAddress.png)

6. Copie todos os arquivos do `.zip` do Wilbrand para uma pasta no seu computador

7. 1 Insira seu cartão SD no seu computador.

8. Abra um terminal dentro da pasta que Wilbrand foi extraído para.

9. Usando a versão do seu Wii e MAC address, execute o seguinte comando:

   - Windows: `.\Wilbrand.exe AA-BB-CC-DD-EE-FF MM/DD/YYYY VERSION X:`

     - `X:` é a letra da unidade do seu cartão SD.

     ![](/images/exploits/wilbrand/windows.png)

   - Linux/macOS: `./Wilbrand AA-BB-CC-DD-EE-FF MM/DD/YYYY VERSION /media/mount_dir`

     - Se você não abriu seu terminal diretamente na pasta Wilbrand foi extraído, use `cd` para digitá-lo primeiro, por exemplo. `cd ~/Desktop/Wilbrand`
     - `/media/mount_dir` é a pasta na qual o seu cartão SD está instalado. Isso talvez mude de acordo com a sua distro do Linux.

     ![](/images/exploits/wilbrand/linux.png)

10. Copie todos os arquivos do hackmii_installer_v1.2 `.zip`  para uma pasta no seu computador.

11. Copie o `boot.elf` do hackmii_installer_v1.2 `.zip`  para a raiz do seu cartão SD.

12. 1 Pegue seu cartão SD e insira-o no seu Wii.
    - - O cartão SD deve ser inserido no slot de cartão SD localizado na frente do Wii. O uso de um adaptador USB conectado à porta USB do Wii não funcionará.

13. Menu do Wii do LetterBomb

14. Abra o painel de mensagens do Wii.

15. Abra a carta verde com uma bomba.

    - Certifique-se que a data em seu Wii está correta, caso contrário você não poderá encontrar a carta.
    - Em alguns casos, talvez seja necessário verificar as mensagens do dia anterior ou do dia seguinte para que a carta apareça.
    - Se você não vê a carta verde, cheque se algum erro aparece na seção do cartão SD em Data Management\`. Se quaisquer aparecerem, talvez haja um erro com o formato do seu cartão SD ou o leitor de SD do Wii.

    ![](/images/exploits/wilbrand/msgboard.png)

16. If the exploit was successful, your device will have loaded the HackMii Installer.
    - Se seu Wii ficar preso em uma tela preta, desligue-o segurando o botão POWER, e então tente novamente.
    - Se você for enviado de volta para o Menu do Wii depois de abrir a carta, Certifique-se de que a trava de bloqueio do cartão SD esteja na posição desbloqueada.

::: tip

[Continue para a Instalação do Homebrew Channel e do BootMii](hbc)

:::

::::

:::::
