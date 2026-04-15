# Informazioni Chiave

Questa pagina delinea informazioni importanti e sottolinea aspetti di cui dovresti essere a conoscenza prima di iniziare col processo di modifica.

## Brick e rischi comuni

Seguendo la guida o usando qualsiasi tipo di homebrew, c'è il rischio di poter brickare la tua console - o metterla in uno stato dove è parzialmente o totalmente inusabile. Per prevenire ciò, segui questa guida **esattamente come è stata scritta** e segui le precauzioni quando indicato. I richi comuni dei brick sono elencati sotto:

- Seguire tutorial sulla modifica vecchio o videoguide a causa di informazioni obsolete o non corrette, a meno che non siano esplicitamente raccomandati
- Ripristinare backup della NAND da altre console
- Installare pacchetti di cIOS come DARKCORP
- Installare aggiornamenti intesi per altre regioni, o cambiare quella della tua console
- Modificare i file di sistema

Consulta la [guida sui brick](bricks) per maggiori informazioni.

## Compatibilià con console

Questa guida funzionerà con tutte le console Wii sul mercato, incluse Wii mini e la modalità Wii di Wii U.
**NON** funzionerà con kit di sviluppo, come:

- RVT-001 (NDEV)
- RVT-002 (facciata verde)
- RVT-005 (facciata rossa)

Note importanti su Wii specifiche sono elencate sotto.

:::: details E se sono in possesso di una console WIi coreana?

Le console Wii coreane sono completamente supportate da questa guida e possono essere modificate usando le procedure normali. Possono anche essere cambiate di regione.
Fai attenzione quando modifichi la regione e segui la guida attentamente per evitare brick.

::::

:::: details E se sono in possesso di una console Wii U e voglio modificare la modalità Wii?

La modalità Wii su Wii U (chiamata vWii nella comunità homebrew) è completamente supportata da questa guida, anche se è consigliato configurare l'ambiente Aroma prima di iniziare.
Le funzioni Wii mancanti possono essere ripristinate. Quasi tutti gli homebrew esistenti sono al momento supportati (eccetto per gli homebrew GameCube).
I dispositivi di archiviazione necessiteranno di energia aggiuntiva (tramite un cavo a Y o alimentazione esterna), poiché le porte USB di Wii U non ne forniscono a sufficienza da sole.
Assicurati di usare gli IOS e gli homebrew progettati specificamente per la vWii al fine di evitare brick.

::::

:::: details E se sono in possesso di una console WIi mini?

Le console Wii mini sono completamente supportate da questa guida e hanno compatibilità con la maggior parte degli homebrew esistenti.
Le funzioni Wii mancanti possono essere ripristinate. Un adattatore LAN e un hub USB sono consigliati.
Assicurati di usare gli IOS e gli homebrew progettati specificamente per Wii mini al fine di evitare brick.

::::

## Compatibilità con unità di archiviazione

Per schede SD, è sufficiente una da 128MB per eseguire un exploit. In media, tuttavia, si desidera una SD di dimensioni pari o superiori a 2GB. La console Wii può leggere schede SD di molte capienze (anche quelle più larghe di 32GB), ma devono essere [formattate in FAT32/MS-DOS](https://wiki.hacks.guide/wiki/Formatting_an_SD_card) (**non** exFAT o NTFS).

Per dispositivi USB, dovresti usare un disco rigido USB o un disco solido [formattato in FAT32/MS-DOS](https://wiki.hacks.guide/wiki/Formatting_an_SD_card). Non consigliamo l'uso di chiavette USB in quando sono proni a fallire o non funzionare correttamente con la console Wii.

I dischi da 2,5 pollici dovrebbero funzionare con l'elettricità data dalla porta USB della console Wii stessa; quelli da 3,5 pollici consumano più energia e necessiteranno quasi sicuramente di un alimentatore esterno. Per utenti Wii U e Wii mini, dovreste usare un hub USB alimentato esternamente o un cavo a Y per unità che richiedono più energia di quel che le porte USB della console possono fornire.

Consulta le [domande frequenti sull'archiviazione](faq#storage-device-faq) per maggiori informazioni.

## Compatibilità di rete

La console Wii è abbastanza vecchia e, in quanto tale, potrebbe avere difficoltà a connettersi alle reti wireless moderne.

Il suo hardware di rete si basa su 802.11g (retroattivamente chiamato Wi-Fi 3), che opera sulla banda 2.4 GHz. Supporta anche un massimo di crittografia di rete personale WPA2-PSK (AES). Assicurati che la tua rete supporti questi standard se desideri usare il Wi-Fi con la tua console Wii.

Per Wii U, la vWii utilizza le impostazioni Internet impostate nelle impostazioni di Wii U, ma può essere opzionalmente separato con il plugin Aroma [Wii VC Launch](https://hb-app.store/wiiu/WiiVCLaunch).

Consulta le [domande frequenti di rete](faq#networking-faq) per maggiori informazioni.

## Ottenere assistenza

Hai riscontrato un problema sequendo la guida, ne avevi già una con la tua Wii modificata, o hai una domanda?

- Se la tua domanda non è già stata risposta in questa pagina, potrebbe esserlo nella sezione [domande frequenti](faq) della guida.
- Se la tua domanda non è ancora soddisfatta e hai bisogno di supporto, unisciti al server Discord di [Nintendo Homebrew](https://discord.gg/C29hYvh) (in inglese) e vai al canale `#wii-vwii-assistance`.

::: tip

Continua con [Cominciamo](get-started)

Una volta finito di leggere le note sopra, procedi con Cominciamo e seleziona la tua console e l'exploit da usare.

:::
