# Informazioni chiave

Questa pagina fornisce informazioni importanti e sottolinea aspetti che dovresti conscere prima di iniziare il processo di modifica.

## Brick e rischi comuni

Seguendo la guida o utilizzando un tipo specifico di homebrew, c'è il rischio di brickare la console o di metterla in uno stato in cui è parzialmente o totalmente inutilizzabile. Per evitare ciò, segui questa guida **esattamente come è stata scritta** e segui le precauzioni quando indicato. Di seguito sono riportati i rischi comuni per brickare:

- Seguire tutorial vecchi o videoguide sulla modifica a meno che non sia esplicitamente indicato, a causa di informazioni obsolete o non corrette
- Ripristinare i backup della NAND di altre console
- Installare i pacchetti di cIOS come DARKCORP
- Installare gli aggiornamenti per le altre regioni o cambiare la regione della console
- Modificare i file di sistema

Consulta la [guida sui brick](bricks) per maggiori informazioni.

## Compatibilià con le console

Questa guida funziona con tutte le console Wii in commercio, incluse Wii mini e la modalità Wii di Wii U.
**NON** funziona con kit di sviluppo come:

- RVT-001 (NDEV)
- RVT-002 (fronte verde)
- RVT-005 (fronte rossa)

Di seguito sono riportate alcune note relative a specifiche console Wii.

:::: details E se fossi in possesso di una console Wii coreana?

Le console Wii coreane sono completamente supportate da questa guida e possono essere modificate usando le procedure normali. È anche possibile cambiarne la regione.
Fai attenzione se lo fai e segui attentamente la guida per evitare brick.

::::

:::: details E se fossi in possesso di una console Wii U e volessi modificare la modalità Wii?

La modalità Wii su Wii U (chiamata vWii nella comunità homebrew) è completamente supportata da questa guida, anche se si consiglia di configurare l'ambiente Aroma prima di iniziare.
Le funzioni mancanti da Wii possono essere ripristinate. Al momento, quasi tutti gli homebrew esistenti sono supportati (tranne quelli per GameCube).
I dispositivi di archiviazione esterni necessiteranno un'alimentazione aggiuntiva (tramite un cavo a Y o un'alimentazione esterna), in quanto le porte USB di Wii U non ne forniscono energia a sufficienza da sole.
Assicurati di usare gli IOS e gli homebrew progettati specificamente per vWii al fine di evitare brick.

::::

:::: details E se fossi in possesso di una console Wii mini?

Le console Wii mini sono completamente supportate da questa guida e hanno compatibilità con la maggior parte degli homebrew esistenti.
Le funzioni mancanti da Wii possono essere ripristinate. Si consiglia anche l'uso di un adattatore LAN e un hub USB.
Assicurati di usare gli IOS e gli homebrew progettati specificamente per Wii mini al fine di evitare brick.

::::

## Compatibilità con le unità di archiviazione

Per le schede SD, è sufficiente una da 128MB per eseguire un exploit. In media, tuttavia, se ne consiglia una con una capacità di almeno 2GB. Le console Wii possono leggere la maggior parte delle schede SD (anche con una capacità superiore a 32GB), ma devono essere [formattate in FAT32/MS-DOS](https://wiki.hacks.guide/wiki/Formatting_an_SD_card) (**non** exFAT o NTFS).

Per le unità USB, si consiglia di usare un disco rigido (HDD) o un'unità a stato solido (SSD) [formattato in FAT32/MS-DOS](https://wiki.hacks.guide/wiki/Formatting_an_SD_card). Non consigliamo l'uso di chiavette USB in quanto sono soggette a guasti o malfunzionamenti con la console Wii.

I dischi da 2,5 pollici dovrebbero funzionare alimentandosi dalla porta USB della console, mentre quelli da 3,5 pollici necessitano di un'alimentazione esterna. Per chi ha Wii U o Wii mini, si consiglia di usare un hub USB alimentato esternamente o un cavo a Y per le unità che richiedono più energia di quanta ne possano fornire le porte USB della console.

Consulta le [domande frequenti sull'archiviazione](faq#storage-device-faq) per maggiori informazioni.

## Compatibilità di rete

La console Wii è ormai datata e, in quanto tale, potrebbe avere difficoltà a connettersi alle reti wireless moderne.

Il suo hardware di rete si basa su 802.11g (retroattivamente chiamato Wi-Fi 3), che opera sulla banda 2,4 GHz. Supporta inoltre la crittografia di rete personale WPA2-PSK (AES). Assicurati che la tua rete supporti questi standard se desideri utilizzare il Wi-Fi con la tua console.

Per Wii U, vWii utilizza le impostazioni Internet impostate nelle impostazioni di Wii U, ma può essere opzionalmente separato tramite il plugin di Aroma [Wii VC Launch](https://hb-app.store/wiiu/WiiVCLaunch).

Consulta le [domande frequenti sul collegamento di rete](faq#networking-faq) per maggiori informazioni.

## Ricevere assistenza

Hai riscontrato un problema seguendo la guida, ne avevi già uno con la console modificata o hai una domanda?

- Se la tua domanda non ha trovato risposta in questa pagina, potrebbe essere presente nella sezione [Domande frequenti (FAQ)](faq) della guida.
- Se non hai ancora trovato risposta e hai bisogno di supporto, unisciti al [server Discord di Nintendo Homebrew](https://discord.gg/C29hYvh) (in inglese) e vai nel canale `#wii-vwii-assistance`.

::: tip

Continua con [Cominciamo!](get-started)

Una volta finito di leggere le note sopra, procedi con Cominciamo! e seleziona la console e l'exploit da usare.

:::
