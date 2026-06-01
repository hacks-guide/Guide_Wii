# Cominciamo!

::: info

È consigliato avere una scheda SD a portata di mano dopo aver modificato la console, in quanto ti permetterà di effettuare un backup della NAND con BootMii e trarre vantaggio da varie tipologie di homebrew.

:::

Gli exploit elencati per Wii e Wii mini ti porteranno all'HackMii Installer. Questo, dipendentemente dalla tua console, installerà l'Homebrew Channel (usato per eseguire homebrew) e BootMii (usato per creare e ripristinare i backup della NAND).

La modalità Wii di Wii U ha un exploit leggermente diverso e non farà partire l'HackMii Installer. Invece, l'exploit avverrà tramite il menu Wii U.

## La tua console è già modificata?

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

| Revisione                       | Exploit consigliato                                                                                                                                                                                                                                                                                                                                       |
| ------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Wii/Wii Family Edition          | <hr>Se puoi usare un PC Windows:<br> Configurazione automatica — [Exploit tramite ModMii](modmii)<br><hr> Se puoi usare una scheda SD:<br> Configurazione manuale — [Exploit tramite Wilbrand](wilbrand)<br><hr> Se non puoi usare una scheda SD:<br> Configurazione manuale — [Exploit tramite str2hax](str2hax)<br><hr>                                 |
| Wii mini                        | <hr>Configurazione manuale — [Exploit tramite Bluebomb](bluebomb)<hr>                                                                                                                                                                                                                                                                                     |
| Wii U (vWii) | <hr>Se puoi usare un PC Windows:<br> Configurazione automatica — [Exploit tramite ModMii](modmii)<br><hr> Se non hai modificato Wii U, ma vuoi:<br> Configurazione manuale — [Exploit su Wii U](https://wiiu.hacks.guide/it_IT)<br><hr> Se hai già modificato Wii U, o non vuoi:<br> Configurazione manuale — [Exploit su vWii](wiiu-nand-dumper)<br><hr> |
| Emulatore Dolphin               | <hr>Configurazione manuale — [Usare l'Homebrew Channel su Dolphin](homebrew-dolphin)<hr>                                                                                                                                                                                                                                                                  |

## Metodi alternativi

Se possibile, dovresti seguire uno dei metodi elencati sopra.

Se non dovessero funzionare per te o se sei curioso di conoscere gli altri exploit, dai un'occhiata agli [exploit legacy](legacy-exploits).
