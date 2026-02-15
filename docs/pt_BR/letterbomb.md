# LetterBomb

LetterBomb é um exploit para o Wii que é acionado usando o Wii Message Board.

::: info

For instructions on how to format your SD card correctly, please see [this guide](https://wiki.hacks.guide/wiki/Formatting_an_SD_card). É altamente recomendável verificá-lo devido a problemas na formatação como FAT32.

:::

::: warning

NÃO use nenhum dos exemplos de endereços MAC mostrados neste guia, pois eles simplesmente causarão um erro no site HackMii. Use o seu próprio!

:::

## Requirements

- An SD card formatted as FAT32 that is 32GB or less
- Um Wii no Menu do Sistema na versão 4.3
- A Windows/macOS/Linux computer with an Internet connection

## Instructions

1. Power on your console.

2. Go to `Wii Settings`.

3. Take note in the top right corner of the letter next to the system version.

   - This letter corresponds to your system menu region, which you will need to know for the corresponding steps.
   - Além disso, certifique-se de que você está no Menu do Sistema versão 4.3.

   ![](/images/wii/SystemMenuVersion.png)

4. Navigate to `Internet` > `Console Information`.

5. Anote seu endereço MAC INTEIRO.

   ![](/images/wii/MacAddress.png)

6. On your computer, open the browser and go to [the HackMii website](https://please.hackmii.com/).

7. Pegue seu cartão SD e insira-o no seu Wii.

8. Ensure `Bundle the HackMii Installer for me!` is checked.

9. Corte qualquer "wire".

   ![](/images/exploits/letterbomb/LetterBomb-PC.png)

10. 1 Insira seu cartão SD no seu computador.

11. Copy the `private` folder and the `boot.elf` file from the LetterBomb `.zip` to the root of your SD card.

12. 1 Pegue seu cartão SD e insira-o no seu Wii.
    - - O cartão SD deve ser inserido no slot de cartão SD localizado na frente do Wii. O uso de um adaptador USB conectado à porta USB do Wii não funcionará.

13. Menu do Wii do LetterBomb

14. 1 Menu do Wii do LetterBomb
    1 No seu Wii, retorne ao Menu do Wii e então abra o Wii Message Board.

15. Carregue a carta vermelha com um ícone de bomba.
    - - Certifique-se que a data em seu Wii está correta, caso contrário você não poderá encontrar a carta.
    - Em alguns casos, talvez seja necessário verificar as mensagens do dia anterior ou do dia seguinte para que a carta apareça.
    - If you don't see the red letter, check if any errors appear in the SD card section of `Data Management`. Se quaisquer aparecerem, talvez haja um erro com o formato do seu cartão SD ou o leitor de SD do Wii.
    - - Se o seu Wii congela após clicar na carta, você provavelmente escolheu a região errada quando baixou o exploit. Refaça o segundo passo e selecione a região correta.
    - Se tudo estiver certo e se houver congelamento, continue a tentar até que isso funcione.

16. If the exploit was successful, your device will have loaded the HackMii Installer.

![](/images/exploits/letterbomb/LetterBomb-Wii.png)

::: tip

[Continue to Homebrew Channel and BootMii Installation](hbc)

:::
