---
title: "LetterBomb"
---

{% include toc title="Sumário" %}

LetterBomb é um exploit para o Wii que é acionado usando o Wii Message Board.

Para instruções sobre como formatar seu cartão SD corretamente, por favor veja [este guia](https://wiki.hacks.guide/wiki/Formatting_an_SD_card). É altamente recomendável verificá-lo devido a problemas na formatação como FAT32.
{: .notice--info}

NÃO use nenhum dos exemplos de endereços MAC mostrados neste guia, pois eles simplesmente causarão um erro no site HackMii. Use o seu próprio!
{: .notice--warning}

### Requisitos
* An SD card formatted as FAT32 that is 32GB or less
* Um Wii no Menu do Sistema na versão 4.3
* Um computador Windows/macOS/Linux com conexão à internet

### Instruções

1. Ligue o seu console.
1. No seu Wii, vá para `Wii Settings` -> `Internet` -> `Console Information` e tome nota do seu MAC address.
1. Perceba no canto superior direito a letra próxima da versão do sistema.
    + Esta letra corresponde à região de menu do seu sistema, que você precisará saber para os passos correspondentes.
    + Além disso, certifique-se de que você está no Menu do Sistema versão 4.3.

    ![](/images/wii/SystemMenuVersion.png)

1. Navegue para `Internet` > `Console Information`.
1. Anote seu endereço MAC INTEIRO.

    ![](/images/wii/MacAddress.png)

1. Visite
please.hackmii.</p></li> 
   
   1 Pegue seu cartão SD e insira-o no seu Wii.
1 1 Assegure-se de que `Bundle the HackMii Installer for me!` está verificado.
1 Corte qualquer "wire".
  
  ![](/images/exploits/letterbomb/LetterBomb-PC.png)

1 1 Insira seu cartão SD no seu computador.

1 1 Copie a pasta `private` e o arquivo `boot.elf` do LetterBomb `.zip` para a raiz do seu cartão SD.
1 1 Pegue seu cartão SD e insira-o no seu Wii. 
      + + O cartão SD deve ser inserido no slot de cartão SD localizado na frente do Wii. O uso de um adaptador USB conectado à porta USB do Wii não funcionará.
1 Menu do Wii do LetterBomb
1 1 Menu do Wii do LetterBomb 1 No seu Wii, retorne ao Menu do Wii e então abra o Wii Message Board.
1 Carregue a carta vermelha com um ícone de bomba. 
      + + Certifique-se que a data em seu Wii está correta, caso contrário você não poderá encontrar a carta.
    + Em alguns casos, talvez seja necessário verificar as mensagens do dia anterior ou dia seguinte para que a carta apareça.
    + + Se você não vê a carta vermelha. cheque se algum erro aparece nas sessões do cartão SD em `Data Management`. Se quaisquer aparecerem, talvez haja um erro com o formato do seu cartão SD ou o leitor de SD do Wii.
    + + Se o seu Wii congela após clicar na carta, você provavelmente escolheu a região errada quando baixou o exploit. Refaça o segundo passo e selecione a região correta.
    + Se tudo estiver certo e se houver congelamento, continue a tentar até que isso funcione.
1 1 Se o exploit foi bem sucedido, seu console irá carregar o Instalador HackMii.</ol> 

![](/images/exploits/letterbomb/LetterBomb-Wii.png)

[Continue para a Instalação do Homebrew Channel e do BootMii](hbc) 

{: .notice--info}
