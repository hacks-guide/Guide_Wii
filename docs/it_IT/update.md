# Aggiornare il menu Wii alla 4.3

Questa guida spiegherà come aggiornare il menu Wii alla versione 4.3, se hai la console già modificata.

::: warning

È molto più sicuro usare [ModMii](modmii) (solo per Windows) per aggiornare la console Wii alla versione 4.3.

:::

## Requisiti

- Una console Wii con Homebrew Channel 1.0.8 o versioni successive
  - Se non hai l'Homebrew Channel o è datato, [inizia da qui](get-started) per (re)installarlo.
- Una scheda SD o un'unità USB
- Un PC con Windows/macOS/Linux
- [NUSGet](https://github.com/NinjaCheetah/NUSGet/releases/latest/)
- [Priiloader](priiloader)
- [YAWM ModMii Edition](https://oscwii.org/library/app/yawmme)

## Istruzioni

### Sezione I - Scaricamento

1. Sul computer, scarica NUSGet dal link sopracitato, scegliendo l'archivio corrispondente al tuo sistema operativo. Per gli utenti Windows, provate `NUSGet-Windows-x86_64-bin.zip`.
2. Estrai l'archivio ed esegui NUSGet.
3. Vai su `Sistema` -> `0000000100000002 - System Menu` -> `La tua regione` e poi seleziona l'ultima versione 4.3 del menu (es. `v513 4.3E` per PAL). Deseleziona `Mantieni contenuti criptati`, poi clicca `Avvia download`.

   ![](/images/desktop-apps/nusget/nusget-wiimenu-dl-update.png)
4. Vai su `IOS` -> `000000010000003A - IOS 58` -> `World` -> `Ultima versione`. Deseleziona `Mantieni contenuti criptati`, poi clicca `Avvia download`.

   ![](/images/desktop-apps/nusget/nusget-ios58-dl.png)
5. Vai su `IOS` -> `0000000100000050 - IOS 80` -> `World` -> `Ultima versione`. Deseleziona `Mantieni contenuti criptati`, poi clicca `Avvia download`.

   ![](/images/desktop-apps/nusget/nusget-ios80-dl.png)
6. Quando hai finito, clicca la cartella vicino ad `Avvia download`. Questo aprirà il gestore file alla cartella download di NUSGet.

   ![](/images/desktop-apps/nusget/nusget-open-downloads.png)
7. Questa cartella dovrebbe contenerne altre tre con gli ID degli IOS e i file del menu Wii scaricati.

   ![](/images/desktop-apps/nusget/nusget-folder-update.png)
8. Vai in ciascuna cartella e trova il singolo file WAD per ognuna. Dovrai copiare questi file su una cartella chiamata `wad` sulla scheda SD o sull'unità USB. Il risultato finale dovrebbe includere i seguenti file nella cartella:

   ![](/images/desktop-apps/nusget/nusget-copy-wiimenu-sd.png)
9. Una volta copiati tutti e 3 i file WAD, rimuovi la scheda SD o l'unità USB dal PC e inseriscila nella console.

### Sezione II - Installazione

1. Spegni la console. Tieni premuto RESET, poi accendila di nuovo.
2. Nel menu di Priiloader, seleziona `Homebrew Channel`.
   - Se il menu di Priiloader non appare, [installalo immediatamente](priiloader). Priiloader è obbligatorio per questa guida.
3. Avvia YAWM ModMii Edition.
4. Seleziona la scheda SD o l'unità USB.
5. Premi `+` sui WAD IOS80 e IOS58 per evidenziarli, poi premi `A` due volte per installarli.
6. Naviga sul WAD del menu Wii e premi `A` due volte per installarlo.
7. Quando ti viene chiesto di tenere Priiloader, premi `A` per confermare.
8. Dopo aver installato tutti i file, premi il pulsante HOME per tornare all'Homebrew Channel.

---

::: tip

[Clicca qui per tornare all'indice.](site-navigation)

:::
