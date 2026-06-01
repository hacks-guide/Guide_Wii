# FAQ e risoluzione dei problemi

## Domande frequenti

### Quanto è rischioso modificare la mia console?

I rischi non sono alti. La console Wii richiede di pochi strumenti per essere modificata e può essere effettuata interamente tramite software. Finché segui gli avvisi generali descritti nella [panoramica sui brick](bricks#brick-prevention), installi [BootMii](bootmii) e [Priiloader](priiloader) e segui le istruzioni per iscritto, non dovresti avere problemi. Se hai dubbi o preoccupazioni, sentiti libero di entrare nel server Discord di Nintendo Homebrew (in inglese) linkato in fondo a questa pagina.

### Come si rimuove il filtro famiglia?

Il [generatore di chiavi master (mkey)](https://mkey.nintendohomebrew.com/) può generare il codice necessario per rimuovere il filtro famiglia.

### Credo che la mia console sia brickata, o che ci sia qualcosa che non va, cosa devo fare?

Vedi [questa](bricks) pagina.

## Codici di errore

### Ricevo un errore XXXXXX, come posso risolverlo?

Per verificare il significato dell'errore, visita la pagina relativa sul [sito di Wiimmfi](https://wiimmfi.de/error). Di seguito sono riportate le soluzioni agli errori più comuni:

#### Errore 051330/51330

Esegui un test della connessione andando su `Impostazioni console Wii` --> `Internet` -> `Impostazioni di collegamento` -> `Connessione` -> `Prova di connessione`

#### Errore 220602

<br>

##### Per gli utenti di WiiLink

Stai utilizzando un server DNS obsoleto. Imposta il DNS su quello specificato sul [sito di WiiLink](https://wiilink.ca/guide/dns/).

##### Per gli utenti non di WiiLink

Il server DNS primario non è corretto o non funziona.

Ciò può accadere anche se si utilizza un server proxy che non è attivo.

#### Errore 107304

<br>

##### Per gli utenti di WiiLink

Se ricevi l'errore sopra o vedi l'Accordo/Contatto di Nintendo senza il logo di WiiLink, significa che il tuo ISP (Internet Service Provider) o la rete stanno bloccando l'uso del DNS di WiiLink. Imposta l'opzione `Ottieni automaticamente DNS` su `Sì` per risolvere. In alternativa, puoi usare il [server DNS di WiiLink](https://github.com/WiiLink24/DNS-Server/releases/latest).

##### Per gli utenti non di WiiLink

Se ricevi questo errore, significa che la tua connessione Internet o il server DNS stanno riscontrando dei problemi. Riprova più tardi.

#### FORE000006

Se ricevi l'errore FORE000006, probabilmente l'orologio della console è impostato in modo errato. Per istruzioni su come sincronizzarla correttamente, vedi [la guida su come aggiornare l'RTC](wiiconnect24#updating-rtc-clock). Se il problema persiste, rimuovi la batteria dell'orologio della console (si trova nella parte inferiore del sistema, dietro a una vite) per un'ora e poi reinseriscila. Dopo di che, imposta l'orologio di sistema sull'ora corretta.

## Dispositivi di archiviazione

::: danger

Le chiavette USB NON sono consigliate per l'uso su Wii, se possibile, a causa della loro imprevedibilità e del potenziale rischio di corrompersi sulla console. Usarne una potrebbe comportare nei seguenti comportamenti:

- I backup dei giochi non riescono a caricarsi
- Glitch o problemi nell'interfaccia delle applicazioni homebrew
- I dati vengono danneggiati a caso

Se riscontri uno dei problemi descritti sopra o altri non elencati, usa un disco rigido o una scheda SD.

:::

::: warning

Per le versioni del menu Wii precedenti alla 4.0, un limite del software di Wii impedisce l'utilizzo di schede SD più grandi di 2GB.

Per le versioni successive, questo limite è stato rimosso e possono essere utilizzate schede SD di qualsiasi dimensione.

:::

::: info

La console Wii può leggere le schede SD di qualsiasi capienza (anche quelle superiori a 32GB), ma devono essere [formattate in FAT32/MS-DOS](https://wiki.hacks.guide/wiki/Formatting_an_SD_card) (**non** exFAT o NTFS).

Lo stesso vale per le unità USB. Tuttavia, è necessario essere consapevoli delle limitazioni di FAT32, che consente solo volumi fino a 2TB e file fino a 4GB ciascuno. WBFS è un altro filesystem usato per i backup dei giochi Wii (da non confondere con i file WBFS) comunemente usato in passato, ma ormai obsoleto.

:::

::: info

Per gli exploit [BlueBomb](bluebomb), [str2hax](str2hax) e [FlashHax](flashhax) non è necessario usare una scheda SD per modificare la console. Tuttavia, è altamente consigliato averne una per gli homebrew e altri scopi.

:::

### Raccomandazioni per lo spazio di archiviazione

Quando si considera, si acquista, o si usa una scheda SD o un'unità USB, è importante tenere in considerazione l'uso che se ne vuole fare. In base a ciò che vorresti farci, le raccomandazioni sono elencate sotto:

| Uso del dispositivo |                 Spazio di archiviazione consigliato                |
| :-----------------: | :----------------------------------------------------------------: |
|  Solo per l'exploit |                                128MB                               |
|  Backup della NAND  | Minimo: 512MB<br>Consigliati: 1GB+ |
|   Per gli homebrew  |                                2GB+                                |
|  Per gli emulatori  |                                32GB+                               |
|   Backup GameCube   |                                64GB+                               |
|      Backup Wii     |                               128GB+                               |

### Acquistare schede SD

::: danger

Gli annunci dei negozi che vendono schede SD superiori a 2TB sono quasi certamente truffe, e non funzionerebbero comunque su Wii in quanto non è compatibile con lo standard SDUC.

:::

Quando si acquistano schede SD, è consigliabile comprare dispositivi di marche ben note, soprattutto per quelle con capacità elevata. Potresti acquistare una scheda SD generica da 2GB e funzionerebbe senza problemi, ma non si può dire lo stesso, ad esempio, per quelle da 512GB. I prezzi delle schede SD si aggirano intorno ai 10-35 euro per quelle da 256GB e inferiori, mentre le schede da 512GB costano €60 o più. Quando acquisti su Amazon, assicurati che la scheda sia venduta o spedita da loro. Fai attenzione quando acquisti dispositivi di archiviazione su eBay.

Le marche che consigliamo:

- [Samsung](https://www.amazon.com/stores/page/99A645D0-BE70-4DF8-A0C5-CDED2FA59DE9) (EVO Select, EVO Plus, PRO Plus)
- [SanDisk](https://www.amazon.it/stores/page/6187A5D4-11BE-4006-8AFB-6EC233258034) (Extreme, Ultra, ecc)
- [Lexar](https://www.amazon.it/stores/page/B1E6F5A7-1459-4D06-8FDA-963327D1B00C) (E-Series, Professional)
- [Silicon Power](https://www.amazon.it/stores/page/A2CCB3CD-8C18-46EC-8497-5A3FE2E3FC1D) (3D NAND, Elite)
- [PNY](https://www.amazon.it/stores/page/9F7889F9-FA53-4078-BA65-08F7F8104CF6) (Elite, Elite-X, ecc)
- [INLAND da Micro Center](https://www.amazon.it/stores/page/B43B257E-9D36-4368-B7E2-A4095BD5384B)

### Acquistare unità USB - Dischi rigidi

Ad oggi, ci sono solo tre produttori di HDD: Western Digital, Seagate, e Toshiba. Qualsiasi altra compagnia è fallita o è stata assorbita da una delle tre sopracitate. Detto questo, se hai in giro un disco rigido di un'altra marca, dovrebbe funzionare comunque! La tecnologia dei dischi rigidi è rimasta sostanzialmente invariata negli ultimi dieci anni circa. Assicurati solo di controllare i dati S.M.A.R.T. per verificare che l'unità non sia difettosa prima di copiarci tutti i tuoi dati.

Per quanto riguarda le dimensioni, i dischi da 2,5 pollici dovrebbero funzionare alimentandosi dalla porta USB della console, mentre quelli da 3,5 pollici necessitano di un'alimentazione esterna. Tienilo a mente quando decidi cosa farci con l'unità esterna.

Per chi ha Wii U, è altamente consigliato avere un disco rigido con alimentazione esterna o un hub USB e/o un cavo a Y per i dischi da 2,5 pollici. Ciò è dovuto al fatto che Wii U non fornisce un'adeguata alimentazione alle sue porte USB, a differenza di Wii.

Per chi ha Wii mini, si consiglia di avere un hub USB alimentato esternamente per collegarvi le unità USB, gli adattatori Internet e altre periferiche contemporaneamente. Per il disco rigido, è comunque meglio usare un cavo a Y.

Per quanto riguarda le scelte d'acquisto, queste si possono riassumere in tre scenari diversi:

- Acquistare un nuovo disco rigido: i modelli nuovi costano circa 60€ per 2TB, €47.26 per 1TB, 50€ per 1TB e intorno i 30€ per capacità inferiori. Limitati a una delle tre marche sopra elencate, ma tieni presente che l'offerta è piuttosto scarsa per le unità inferiori a 1TB.
- Acquistare un nuovo disco rigido e un nuovo case: è possibile acquistare un disco rigido e un case per contenerlo, con il vantaggio aggiunto di poter sostituire l'unità quando si desidera. I case per i dischi da 2,5 pollici possono essere alimentati anche da una singola porta USB, mentre quelli per i dischi da 3,5 pollici quasi sempre necessitano di un'alimentazione esterna. Un esempio è l'acquisto di un disco rigido da 2,5 pollici da 1TB e di un case per esso, che può costare intorno agli 80€.
- Acquistare un case per un disco rigido già in possesso: se hai già un disco rigido funzionante, puoi inserirlo in un case e usarlo con la console. I case si possono trovare su Amazon a un prezzo che va dai 10 ai 20 euro.

### Acquistare unità USB - Unità a stato solido

::: warning

Se si intende utilizzare un'unità USB su Wii, gli SSD sono spesso più costosi dei dischi rigidi tradizionali e non forniscono un aumento significativo della velocità (la console supporta solo le velocità supportate da USB 2.0). Se desideri acquistarne uno o ne hai già, è un'opzione, ma generalmente è consigliato utilizzare un disco rigido.

:::

## Connettività di rete

L'hardware di rete wireless di Wii supporta lo standard massimo 802.11g su banda 2,4 GHz (retroattivamente chiamato Wi-Fi 3) con un livello di sicurezza massimo WPA2-PSK (AES). Pertanto, la console NON sarà in grado di connettersi ai seguenti punti di accesso (AP):

- AP che forzano la crittografia WPA Enterprise o WPA3
- AP non retrocompatibili con WiFi 3 o che trasmettono solo sulla banda a 5 GHz
- AP che non supportano 802.11b o 802.11g (es. quelle che supportano solo 802.11n)

ISP americani noti per fornire router incompatibili con queste impostazioni:

- Xfinity
- Spectrum
- Cox

Se il tuo ISP non permette di modificare queste impostazioni o se l'hardware di rete attuale non è supportato, hai alcune opzioni:

- Puoi provare a utilizzare un hotspot del cellulare. Generalmente non è consigliato come prima scelta in quanto spesso risulta in una connessione instabile.
- Puoi usare un adattatore LAN. Deve avere il chipset `ASIX AX88772` o la dicitura “compatibile con Wii”. Qui un [adattatore LAN consigliato da Plugable](https://a.co/d/g8XvMDp).
  - Nota che le varianti del chipset (ad esempio `ASIX AX88772E`) **non funzioneranno**.
- In alternativa, puoi acquistare un router secondario e continuare a usare la rete che hai già. Qualsiasi router economico che soddisfi gli standard sopracitati funzionerà.

Per Wii U, vWii utilizza le impostazioni Internet impostate nelle impostazioni di Wii U, ma può essere opzionalmente separato tramite il plugin di Aroma `Wii VC Launch`.

---

::: tip

[Clicca qui per tornare all'indice.](site-navigation)

:::
