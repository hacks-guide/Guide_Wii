# Cominciamo!

Gli exploit elencati per Wii e Wii mini ti porteranno all'HackMii Installer. Questo, dipendentemente dalla tua console, installerà l'Homebrew Channel (usato per eseguire homebrew) e BootMii (usato per creare e ripristinare i backup della NAND).

La modalità Wii di Wii U ha un exploit leggermente diverso e non farà partire l'HackMii Installer. Invece, l'exploit avverrà tramite il menu Wii U.

::: danger

**Disclaimer sui backup della NAND**

Si consiglia vivamente di tenere a disposizione una scheda SD o un'unità USB per creare un backup della NAND. La tabella seguente illustra ciò che puoi utilizzare in base alla tua console:

|             CONSOLE             | UNITÀ USB | SCHEDA SD |
| :-----------------------------: | :-------: | :-------: |
|       Wii / Family Edition      |     ✅     |     ✅     |
| Wii U (vWii) |     ⛔     |     ✅     |
|             Wii mini            |     ✅     |     ⛔     |

:::

## La console è già modificata?

Se hai una console Wii o Wii mini che è già stata modificata e vorresti aggiornarne la configurazione, segui [questa](hackmii) guida per accedere all'HackMii Installer dall'Homebrew Channel o da Priiloader. I possibili segni che la tua console sia già stata modificata sono:

- L'Homebrew Channel è visibile nel menu Wii
- Altri homebrew, come gli USB loader o gli emulatori, sono visibili nel menu Wii
- [Priiloader](priiloader#section-iii---entering-priiloader) si avvia quando lo provi a fare
- Appare la schermata di BootMii quando avvii la console
- Nella console è già inserita una scheda SD con cartelle come `apps` al suo interno

## Identifica la revisione della console

<!--@include: @/_include/identify-console.html -->

## Seleziona l'exploit

Seleziona l'exploit che corrisponde alla tua console e situazione migliore.

<!--@include: @/_include/exploit-select.html -->
