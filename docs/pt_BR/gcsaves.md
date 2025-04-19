# Saves de GameCube

Este é um guia completo para gerenciar seus saves de GameCube.

::: info

Usar qualquer periférico de GameCube com um Family Edition Wii ou Wii Mini requer que sejam soldadas portas de GameCube e/ou slots de cartão de memória.

:::

## Fazendo Upload de um Save Individual (Arquivo .gci) para um Cartão de Memória Físico

### Requirements

- Um Wii com portas de GameCube
- Um cartão SD ou USB
- [GCMM](https://oscwii.org/library/app/gcmm)

::: info

If you are looking for 100% completion saves online, you can find them [here](https://gamefaqs.gamespot.com/).

:::

::: info

If you are looking for save game exploits for booting into [Swiss](https://github.com/emukidid/swiss-gc/releases), you can find a list of them [here](https://www.gc-forever.com/wiki/index.php?title=Booting_homebrew#Game_Save_Exploits).

:::

### Instructions

#### Baixando

1. Extract GCMM and put it in the `apps` folder on your SD card or USB drive.
2. Place the `.gci` file in a folder called `MCBACKUP` on the root of the SD card or USB drive.
3. Insira seu cartão SD ou armazenamento USB no seu Wii e inicie GCMM através do Homebrew Channel.

#### Restaurando

1. Insira seu cartão de memória físico no Slot A ou Slot B.

2. Selecione o dispositivo no qual você deseja restaurar.

    ![](/images/homebrew/gcsaves/gcmm-select-device.jpg)

3. No GCMM, aperte X em um controle de GameCube ou + em um Wii remote.

    ![](/images/homebrew/gcsaves/gcmm-menu.jpg)

4. Selecione o slot no qual seu cartão de memória se encontra.

    ![](/images/homebrew/gcsaves/gcmm-mem-select.jpg)

5. Selecione o save no qual você deseja fazer o backup. Se você tem múltiplos saves a fazer backup, você pode apertar R em um controle de GameCube ou 1 em um Wii remote para fazer um backup de todos os seus saves.

    ![](/images/homebrew/gcsaves/gcmm-select-save.jpg)

6. Assim que a restauração for completa, aperte qualquer botão para continuar.

## Fazendo Backup de um Save (Arquivo .gci) para um SD ou USB de um Cartão de Memória Físico

### Requirements

- Um Wii com portas de GameCube
- Um cartão SD ou USB
- [GCMM](https://oscwii.org/library/app/gcmm)

### Instructions

#### Baixando

1. Extract GCMM and put it in the `apps` folder on your SD card or USB drive.
2. Place the `.gci` file in a folder called `MCBACKUP` on the root of the SD card or USB drive.
3. Insira seu cartão SD ou armazenamento USB no seu Wii e inicie GCMM através do Homebrew Channel.

#### Fazendo Backup

1. Insira seu cartão de memória físico no Slot A ou Slot B.

2. Selecione o dispositivo no qual você deseja fazer o backup.

    ![](/images/homebrew/gcsaves/gcmm-select-device.jpg)

3. No GCMM, aperte Y em um controle de GameCube ou - em um Wii remote.

    ![](/images/homebrew/gcsaves/gcmm-menu.jpg)

4. Selecione o slot no qual seu cartão de memória se encontra.

    ![](/images/homebrew/gcsaves/gcmm-mem-select.jpg)

5. Selecione o save que quer restaurar. Se você tem múltiplos saves a restaurar, você pode apertar R em um controle de GameCube ou 1 em um Wii remote para restaurar todos os seus saves.

    ![](/images/homebrew/gcsaves/gcmm-select-save.jpg)

6. Assim que o backup for completo, aperte qualquer botão para continuar.

## Fazendo Backup do seu Cartão de Memória Físico em um Cartão de Memória Emulado (arquivo .raw)

### Requirements

- Um Wii com portas de GameCube
- Um cartão SD ou USB
- [GCMM](https://oscwii.org/library/app/gcmm)

### Instructions

#### Baixando

1. Extract GCMM and put it in the `apps` folder on your SD card or USB drive.
2. Insira seu cartão SD ou armazenamento USB no seu Wii e inicie GCMM através do Homebrew Channel.

#### Extraindo o .raw

1. Insira seu cartão de memória no Slot A ou Slot B.

2. Selecione o dispositivo no qual você deseja extrair.

    ![](/images/homebrew/gcsaves/gcmm-select-device.jpg)

3. Pressione L e Y ao mesmo tempo em um controle de GameCube ou B e - ao mesmo tempo em um Wii remote para fazer um backup do seu arquivo .raw e selecionar o slot no qual o seu cartão de memória se encontra.

    ![](/images/homebrew/gcsaves/gcmm-mem-select.jpg)

4. Assim que a extração for completa, aperte qualquer botão para continuar. It should be saved in a folder on the root of your SD or USB called `MCBACKUP`.

## Restaurando um Save de Memória Emulada para um Cartão de Memória Físico

### Requirements

- Um Wii com portas de GameCube
- Um cartão SD ou USB
- [GCMM](https://oscwii.org/library/app/gcmm)

### Instructions

1. If you are trying to restore a save from Dolphin, go to the `File` tab in Dolphin, select open user folder, open the GC folder, and find the `.raw` file.

2. If you are restoring a Nintendont emulated memory card save, navigate to the `saves` folder on the root of your SD card or USB.

3. Insira seu cartão de memória no Slot A ou Slot B.

4. Selecione o dispositivo no qual você deseja restaurar.

    ![](/images/homebrew/gcsaves/gcmm-select-device.jpg)

5. Pressione L e X ao mesmo tempo em um controle de GameCube ou B e + ao mesmo tempo em um Wii remote.

6. Selecione o slot no qual seu cartão de memória se encontra.

    ![](/images/homebrew/gcsaves/gcmm-mem-select.jpg)

7. Deve restaurar seu arquivo .raw para seu cartão de memória. Assim que a restauração for completa, aperte qualquer botão para continuar.

## Transferindo Saves Entre 2 Cartões de Memória Físicos

### Requirements

- Um Wii com portas de GameCube
- Pelo menos 2 cartões de memória físicos

### Instructions

1. Insira ambos cartões de memória no Wii.

2. From the System menu, navigate into `Wii Options`, `Data Management`, `Save Data`, `Nintendo GameCube`.

    ![](/images/homebrew/gcsaves/sysmenu.jpg)

    ![](/images/homebrew/gcsaves/settings.jpg)

    ![](/images/homebrew/gcsaves/data-management.jpg)

    ![](/images/homebrew/gcsaves/save-data.jpg)

3. Find the save you want, select it and select `Move or Copy`.

::: tip

[Click here to go back to the site index.](site-navigation)

:::
