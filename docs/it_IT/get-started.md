# Cominciamo

::: info

È consigliato avere almeno una scheda SD a portata di mano dopo aver modificato la console, in quanto questo ti permetterà di effettuare un backup della NAND usando BootMii e trarre vantaggio da varie tipologie di homebrew.

:::

Gli exploit elencati per Wii e Wii mini ti porteranno all'installer di HackMii. L'installer installerà l'Homebrew Channel (usato per eseguire homebrew) e BootMii (usato per creare e ripristinare i backup della NAND), dipendentemente dalla tua console.

La modalità Wii di Wii U ha un exploit leggermente diverso e non farà partire l'installer di HackMii. Invece, farai l'exploit della modalità Wii attraverso il menu Wii U e procederai come indicato.

## La tua console Wii è già softmoddata?

Se hai una console Wii o Wii mini che è già stata softmoddata e vorresti aggiornare la tua configurazione, segui [questa](hackmii) guida per accedere all'installer di HackMii dall'Homebrew Channel o da Priiloader.

## Identifica la revisione della console

<!--@include: @/_include/identify-console.html -->

## Seleziona l'exploit

Seleziona l'exploit che corrisponde alla tua console e situazione migliore.

| Revisione console               | Exploit Consigliato                                                                                                                                                                                                                                                                                                                             |
| ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Wii/Wii Family Edition          | <hr>Se puoi usare un PC Windows:<br> Configurazione automatica — [Exploit con ModMii](modmii)<br><hr> Se puoi usare una scheda SD:<br> Configurazione manuale — [Exploit con Wilbrand](wilbrand)<br><hr> Se non puoi usare una scheda SD:<br> Configurazione manuale — [Exploit con str2hax](str2hax)<br><hr>                                   |
| Wii mini                        | <hr>Configurazione manuale — [Exploit con Bluebomb](bluebomb)<hr>                                                                                                                                                                                                                                                                               |
| Wii U (vWii) | <hr>Se puoi usare un PC Windows:<br> Configurazione automatica — [Exploit con ModMii](modmii)<br><hr> Se non hai modificato Wii U, ma vuoi:<br> Configurazione manuale — [Exploitare Wii U](https://wiiu.hacks.guide)<br><hr> Se hai già modificato Wii U, o non vuoi:<br> Configurazione manuale — [Exploitare vWii](wiiu-nand-dumper)<br><hr> |
| Emulatore Dolphin               | <hr>Configurazione manuale — [Usare l'Homebrew Channel su Dolphin](homebrew-dolphin)<hr>                                                                                                                                                                                                                                                        |

## Metodi alternativi

Se possibile, dovresti seguire uno dei metodi elencati sopra.

Se l'opzione consigliata non funziona per te, o sei curioso sugli altri exploit, dai un'occhiata agli [exploit legacy](legacy-exploits).
