# FAQ e Risoluzione dei problemi

## FAQ Principali

### Quanto è rischioso modificare la mia console?

Non molto rischioso, dipende dalla tua console. Il Wii ha molte meno barriere da oltrepassare rispetto ad altre console, con exploit che richiedono solamente un Wii e una connessione a internet. As long as you follow the general advice laid out [here](bricks#brick-prevention), install [BootMii](bootmii) and [Priiloader](priiloader), and use common sense, you should be completely fine!

### Ricevo un errore XXXXXX, come lo sistemo?

In order to check what the error means, please visit the [Wiimmfi error page](https://wiimmfi.de/error). Gli errori più comuni hanno le correzioni elencate sotto:

#### Errore 051330/51330

Run an Internet connection test by going to `Wii Settings > Internet > Connection settings > Connection > Test this connection`

#### Errore 220602

##### Per utenti di RiiConnect24

Stai usando il vecchio server DNS per RiiConnect24. Follow [this](riiconnect24#section-iv---connecting) guide for instructions on how to change it.

##### Per utenti senza RiiConnect24

Your Primary DNS server is incorrect or not working.

This can also happen if you use a proxy server and it is down.

#### Errore 107304

##### Per utenti di RiiConnect24

Se ottieni questo errore o vedi l'Accordo Utente di Nintendo senza il logo di RiiConnect24, significa che il tuo ISP (Internet Service Provider) o la rete sta bloccando l'utilizzo del DNS di RC24. You can set `Auto-Obtain DNS` to `On` to solve this. RiiConnect24 funzionerà anche senza di esso. Or, you can use the [RiiConnect24 DNS-Server](https://github.com/RiiConnect24/DNS-Server/releases/latest) program.

##### Per utenti senza RiiConnect24

Se ottieni questo errore, il server DNS che hai scelto o il tuo internet nella sua interezza sta avendo problemi. Riprova più tardi.

#### FORE000006

Se ottieni l'errore FORE000006, il tuo orologio del Wii è probabilmente impostato incorrettamente. See [this](wiiconnect24#updating-rtc-clock) on instructions for how to properly reset it. Se il problema persiste, rimuovi la batteria dell'orologio del Wii (si trova nella parte inferiore del sistema dietro a una vite) per un'ora e reinseriscila. Poi, resetta l'orologio del Wii.

### Come si rimuove il Filtro Famiglia?

The [mkey generator](https://mkey.nintendohomebrew.com/) can generate the code required to remove parental controls.

### Penso che il mio Wii sia brickato, o che abbia qualcosa di davvero sbagliato, cosa faccio?

See [this](bricks) page.

## FAQ Dispositivi di Archiviazione

::: info

For the [BlueBomb](bluebomb), [str2hax](str2hax), or [FlashHax](flashhax) exploits, you do not need an SD card to hack your Wii; it is highly recommended to grab one anyway for homebrew and other tasks.

:::

::: info

FAT32 is the recommended file system for SD cards, see [this guide](https://wiki.hacks.guide/wiki/Formatting_an_SD_card) on formatting instructions.

For USB devices, FAT32 is also recommended, although users should be aware of FAT32 limitations which only allow volumes up to 2TB in size. WBFS era precedentemente un file system usato per backup Wii (da non confondere con file WBFS) - oggi, è obsoleto e non dovrebbe essere usato.

:::

::: warning

For stock Wii Menu versions lower than 4.0, a limitation in the Wii system software prevents SD cards bigger than 2GB from being used.

For stock Wii Menu versions 4.0 or higher, this limitation is removed and SD cards of various sizes can be used.

Your highest chance of getting a working SD card on any Wii is at sizes 32GB or lower, but success has been reported various times on cards ranging up to 256GB.

:::

::: warning

Per i dispositivi USB, le unità flash hanno ampie probabilità di non funzionare su console Wii. È consigliato, invece, di usare un disco rigido USB o un'unità a stato solido.

:::

### Linee Guida Generali Di Storage

Quando si considera comprare o usare una scheda SD o unità USB, ha senso tenere in considerazione le cose per cui si sta usando un tipo di memoria rispetto a un'altra. Utilizzi differenti occupane diverse quantità di spazio, alcuni esempi comuni sono mostrati di seguito:

- L'utente medio per un dispositivo con backup di giochi Wii ha probabilmente bisogno di uno spazio maggiore o uguale a 128GB. Wii Backups: The largest Wii games (dual-layer DVD) are up to sizes of 8.5GB, more normal games are closer to sizes of 4.7GB or lower.
- Backup GameCube: I backup più grandi di GameCube arrivano a occupare fino a 1.3GB di spazio. I file ISO sono normalmente di queste dimensioni indipendentemente dal gioco, ma può essere decisamente più leggero se viene invece usato il formato NKIT. L'utente medio per un dispositivo con backup di giochi GameCube ha probabilmente bisogno di uno spazio maggiore o uguale a 64GB.
- Emulazione Generale: Ci sono una varietà di emulatori disponibili sul Wii. Poiché le dimensioni delle diverse ROM di gioco differiscono drammaticamente, l'utente medio che vuole emulare i giochi probabilmente vorrebbe 32GB o più di spazio.
- Homebrew Generali: Per homebrew, l'utente medio ha probabilmente bisogno di uno spazio maggiore o uguale a 2GB.
- Backup della NAND: Per eseguire backup della NAND con BootMii, l'utente medio ha probabilmente bisogno di un minimo di 512MB di spazio libero, ma più di 1GB è consigliato.
- L'essenziale, solo l'exploit: La quantità di spazio minimo per eseguire un exploit compatibile con una scheda SD sul Wii è di 128MB.

### Comprare Schede SD

::: danger

Attualmente, non esistono schede SD con dimensioni maggiori o uguali a 2TB, chiunque te ne stia cercando di vendere una ti sta truffando.

:::

Nell'acquisto delle schede SD, è generalmente consigliato comprare dispositivi di marche ben conosciute e dal prezzo e dimensioni più alte che puoi permetterti. Mentre puoi comprarte una scheda SD generica da 2GB ed essere probabilmente al sicuro, non si può dire lo stesso per le schede SD da 512MB. I prezzi generali per schede SD si aggira attorno a €9.45-€18.91 per schede da 256GB e inferiori, mentre le schede da 512GB costano circa €37.81. When buying off of Amazon, make sure that your card is either `Sold by/Shipped by Amazon` or `Sold by [brand], Shipped by Amazon`. Abbi cautela nel comprare dispositivi di memoria su eBay.

Marche consigliate:

- Samsung (EVO Select, EVO Plus, PRO Plus)
- SanDisk (Extreme, Ultra, etc)
- Lexar (E-Series, Professional)
- Silicon Power (schede "3D NAND", normalmente maggiore è la capacità maggiore la qualità)
- PNY (Elite, Elite-X, etc)

### Comprare dispositivi USB - Dischi Rigidi

Nel comprare dischi rigidi USB, ci sono solo tre produttori di HDD a oggi: Western Digital, Seagate, e Toshiba. Qualsiasi altra compagni è morta ed è andata in bancarotta, o è stata assorbita da una delle tre sopracitate. Detto ciò, se hai un disco rigido in più in giro di un'altra compagnia, dovrebbe comunque funzionare! Le tecnologie dei dischi rigidi sono rimaste le stesse dagli ultimi 10 anni circa. Assicurati solamente di controllare i dati S.M.A.R.T per assicurarti che il dispositivo non stia fallendo prima di buttarci dentro tutti i tuoi dati.

Per le dimensioni dei dischi rigidi, quelli da 63.5cm dovrebbero funzionare con l'elettricità del cavo USB collegato al Wii da solo; quelli da 88.9cm consumano molta più energia e necessiteranno quasi sicuramente di un alimentatore esterno. Assicurati di tenere questo a mente nel determinare cosa vuoi fare con un dispositivo esterno.

Per quanto riguarda le tue scelte nell'acquisto, questo si riassume in tre scenari diversi:

- Comprare un disco rigido esterno da zero: dispositivi nuovi di zecca costano circa €56.72 per 2TB, €47.26 per 1TB, e intorno ai €28.36 per dimensioni inferiori a 1TB. Indipendentemente da cosa faccia, prova a comprare da una delle tre marche sopracitate, ma tieni a mente che le offerte sono scarse per dimensioni inferiori a 1TB.
- Comprare un nuovo disco rigido, e un nuovo involucro: I dischi rigidi nuovi sono meno costosi dei dischi prefabbricati, e puoi comprare un involucro per chiudere il nuovo disco rigido. Gli involucri da 63.5cm sono di solito dovrebbero funzionare con l'elettricità del solo cavo USB, mentre quelli da 88.9cm richiedono quasi sempre un alimentatore esterno. Un prezzo di esempio è per comprare un disco rigido da 500GB e un involucro di 63.5cm da Amazon - in tutto, circa €28.36.
- Buying an enclosure for an already existing hard drive: If you already have a hard drive laying around, you can put it in an enclosure and use it for your Wii. Gli involucri possono essere trovati per prezzi che spaziano da €9.45 a €18.91 su Amazon, se hai un disco rigido con cui fornirlo.

### Comprare dispositivi USB - Unità a Stato Solido

::: warning

Per lo scopo di un dispositivo da usare su un Wii, gli SSD esterni sono spesso più costosi dei dischi rigidi classici e non c'è un vero guadagno di velocità sul Wii (la console supporta solo velocità fino a quelle di USB 2.0). Se desideri comprarne uno o ne hai uno già in giro, è un'opzione, ma generalmente è consigliato usare un disco rigido se non ne hai già uno.

:::
