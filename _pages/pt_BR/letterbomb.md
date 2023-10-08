---
title: "LetterBomb"
---

{% include toc title="Sumário" %}

Para instruções sobre como formatar seu cartão SD corretamente, por favor veja [este guia](https://wiki.hacks.guide/wiki/Formatting_an_SD_card). É altamente recomendável verificá-lo devido a problemas na formatação como FAT32.
{: .notice--info}

NÃO use nenhum dos exemplos de endereços MAC mostrados neste guia, pois eles simplesmente causarão um erro no site HackMii. Use o seu próprio!
{: .notice--warning}

LetterBomb é um exploit para o Wii que é acionado usando o Board de Mensagens do Wii.

### Requisitos
* Um cartão SD formatado como FAT32
* Um Wii no Menu do Sistema versão 4.3
* Um computador Windows/macOS/Linux com conexão à internet

### Instruções

1. Ligue o seu console.
1. Vá para `Wii Settings`.
1. Perceba no canto superior direito a letra próxima da versão do sistema.
    + Esta letra corresponde à região de menu do seu sistema, que você precisará saber para os passos correspondentes.
    + Além disso, certifique-se de que você está no Menu do Sistema versão 4.3.

    ![](/images/wii/SystemMenuVersion.png)

1. Navegue para `Internet` > `Console Information`.
1. Anote seu endereço MAC INTEIRO.

    ![](/images/wii/MacAddress.png)

1. No seu computador, abra o navegador e vá para [o site HackMii](https://please.hackmii.com/).
1. Digite o endereço MAC e região do seu Wii.
1. Assegure-se de que `Bundle the HackMii Installer for me!` está verificado.
1. Corte qualquer "wire".

    ![](/images/exploits/letterbomb/LetterBomb-PC.png)

1. Insira seu cartão SD no seu computador.
1. Copie a pasta `private` e o arquivo `boot.elf` do LetterBomb `.zip` para a raiz do seu cartão SD.
1. Reinsira seu cartão SD no seu console.
    + O cartão SD deve ser inserido no slot do cartão SD localizado na frente do Wii. O uso de um adaptador USB para SD conectado à porta USB do Wii não funcionará.
1. No seu Wii, volte ao Menu Wii.
1. Abra o Wii Message Board.
1. Abra a carta vermelha com uma bomba.
    + Verifique se a data no seu Wii está correta, caso contrário você pode não conseguir encontrar a carta.
    + Em alguns casos, talvez seja necessário verificar as mensagens do dia anterior ou dia seguinte para que a carta apareça.
    + Se você não ver a carta vermelha, verifique se algum erro aparece na seção do cartão SD do `Data Management`. Se houver, pode haver um problema com o formato do cartão SD ou com o leitor do cartão SD do Wii.
    + Se o seu Wii congela depois de clicar na carta, você provavelmente escolheu a região de menu do sistema errada para LetterBomb. Volte ao Passo 2 e verifique se você escolheu a região certa.
    + Se tudo estiver certo e se houver congelamento, continue a tentar até que isso funcione.
1. Se o exploit foi bem sucedido, seu console irá carregar o Instalador HackMii.

![](/images/exploits/letterbomb/LetterBomb-Wii.png)

[Continue para a instalação do Homebrew Channel e BootMii](hbc)
{: .notice--info}
