---
title: "Instalando Homebrew Channel no Emulador Dolphin"
---

{% include toc title="Sumário" %}

Na versão do emulador do Dolphin `5.0-4588` ou posterior, o menu do Wii pode ser facilmente instalado através do próprio Dolphin. Uma vez que isso for feito, o Homebrew Channel pode ser instalado, embora não da mesma maneira que um Wii físico.

### Requisitos

* Um computador Windows/macOS/Linux com conexão à internet
* [O emulador Dolphin](https://dolphin-emu.org/download/) versão `5.0-4588` ou posterior
* A última versão do [Open Homebrew Channel](https://github.com/Wii-Mini-Hacking/hbc/releases)

### Instruções

1. Se você ainda não o fez, instale o Menu Wii no Emulador Dolphin indo para `Tools > Perform System Update`.

    ![](/images/homebrew-dolphin/system-update.png)

1. Baixe `Open_HBC_(version)_LULZ.wad` da página vinculada acima.
1. Abra o emulador Dolphin.
1. Selecione `Tools > Install WAD` e selecione o arquivo `Open_HBC_(version)_LULZ.wad` que foi baixado.

    ![](/images/homebrew-dolphin/ohbc-file.png)

1. Selecione `Tools > Load Wii System Menu`. O canal deve agora aparecer.

    ![](/images/homebrew-dolphin/hbc-installed.png)

### Pós-instalação, instalando Homebrews através do Open Shop Channel

1. Baixe o Open Shop Channel [aqui](https://oscwii.org/library/app/homebrew_browser) para uso no Dolphin. Como alternativa, você pode obter OSCDL e fazer esse processo manualmente.
1. Pare a emulação (se executando), e abra a janela `Config > Wii` no emulador Dolphin.
1. Habilite `Automatically Sync with Folder`. Opcionalmente, você também pode querer ajustar o tamanho do `tamanho do arquivo do cartão SD` para um parâmetro maior - no entanto, na maioria dos casos `Auto` deve estar bem.
1. Abra a `SD Sync Folder`. No Windows, isso pode ser feito colando o caminho da pasta no Menu Iniciar, no Windows Explorer ou Executar.
1. Extraia qualquer homebrew app para a pasta `WiiSDSync`. O resultado final deve ser algo como isto:

    ![](/images/homebrew-dolphin/apps-folder.png)

1. Carregue o Menu do Wii e abra o Homebrew Channel. Seus aplicativos recém-instalados devem aparecer!

    ![](/images/homebrew-dolphin/hbc-apps.png)
