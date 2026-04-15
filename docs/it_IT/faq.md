# FAQ e Risoluzione dei Problemi

## Domande frequenti

### Quanto è rischioso modificare la mia console?

Non molto, dipende dalla tua console. La console Wii ha molte meno barriere da oltrepassare rispetto ad altre console, con exploit che richiedono solamente la console e una connessione a Internet. Finché segui gli avvisi generali descritti nella [panoramica sui brick](bricks#brick-prevention), installi [BootMii](bootmii) e [Priiloader](priiloader), e fai uso del senso comune, dovresti stare a posto!

### Come si rimuove il filtro famiglia?

Il [generatore di chiavi master](https://mkey.nintendohomebrew.com/) può generare il codice richiesto per rimuovere il filtro famiglia.

### Penso che la mia console sia brickata o che abbia qualcosa di strano, cosa faccio?

Vedi [questa](bricks) pagina.

## Domande frequenti sui codici di errore

### Ricevo un errore XXXXXX, come lo sistemo?

Per verificare il significato dell'errore, visita la pagina relativa sul [sito di Wiimmfi](https://wiimmfi.de/error). Gli errori più comuni hanno le correzioni elencate sotto:

#### Errore 051330/51330

Esegui un test della connessione andando su `Impostazioni console Wii` > `Internet` > `Impostazioni di collegamento` > `Connessione` > `Prova di connessione`

#### Errore 220602

<br>

##### Per utenti di RiiConnect24

Stai usando il vecchio server DNS per RiiConnect24. Segui [questa](riiconnect24#section-iv---connecting) quida per istruzioni su come cambiarlo.

##### Per utenti senza RiiConnect24

Il tuo server DNS primario non è corretto o non funziona.

Questo può accadere anche se si utilizza un server proxy e non è attivo.

#### Errore 107304

<br>

##### Per utenti di RiiConnect24

Se ottieni questo errore o vedi l'Accordo/Contatto di Nintendo senza il logo di RiiConnect24, significa che il tuo ISP (Internet Service Provider) o la rete sta bloccando l'utilizzo del DNS di RC24. Puoi impostare `Ottieni automaticamente DNS` su `Sì` per risolvere. RiiConnect24 funzionerà anche senza di esso. Altrimenti, puoi usare il programma [RiiConnect24 DNS-Server](https://github.com/RiiConnect24/DNS-Server/releases/latest).

##### Per utenti senza RiiConnect24

Se ottieni questo errore, il server DNS che hai scelto o il tuo Internet nella sua interezza sta avendo problemi. Riprova più tardi.

#### FORE000006

Se ottieni l'errore FORE000006, l'orologio della console Wii è probabilmente impostata incorrettamente. Vedi [qui](wiiconnect24#updating-rtc-clock) per istruzioni so come reimpostarlo correttamente. Se il problema persiste, rimuovi la batteria dell'orologio della console Wii (si trova nella parte inferiore del sistema, dietro a una vite) per un'ora e reinseriscila. Poi, reimposta l'orologio della console.

## Domande frequenti sui dispositivi di archiviazione

::: danger

Le chiavette USB NON sono consigliate per l'uso su Wii se possibile per via della loro imprevedibilità e potenziale di corrompersi sulla console. Usarne una potrebbe comportare nei seguenti comportamenti:

- I backup dei giochi non riescono a caricarsi
- Glitch nell'interfaccia delle applicazioni homebrew
- Corruzione casuale di dati

Se riscontri uno dei problemi descritti sopra, o altri non elencati, usa un disco rigido o una scheda SD.

:::

::: warning

Per versioni del menu Wii minori di 4.0, un limite nel software di Wii previene l'utilizzo di schede SD più grandi di 2GB.

Per le versioni del menu Wii 4.0 o maggiori, questo limite è rimosso e possono venir usate schede SD di qualsiasi dimensione.

:::

::: info

La console Wii può leggere schede SD di qualsiasi capienza (anche quelle più larghe di 32GB), ma devono essere [formattate in FAT32/MS-DOS](https://wiki.hacks.guide/wiki/Formatting_an_SD_card) (**non** exFAT o NTFS).

Questo vale anche per le unità USB, anche se gli utenti dovrebbero essere consapevoli dei limiti di FAT32, che consente solo volumi fino a 2TB e file fino a 4GB ognuno. WBFS era precedentemente un file system usato per backup Wii (da non confondere con file WBFS) - oggi, è obsoleto e non dovrebbe essere usato.

:::

::: info

Per gli exploit [BlueBomb](bluebomb), [str2hax](str2hax) o [FlashHax](flashhax), non hai bisogno di una scheda SD per modificare la console Wii; È comunque consigliato prenderne una per gli homebrew e altri compiti.

:::

### Raccomandazioni sullo spazio di archiviazione

Quando si considera comprare o usare una scheda SD o unità USB, ha senso tenere in considerazione le cose per cui si sta usando un tipo di memoria rispetto a un'altra. Basandoti su quel che vorresti farci, le raccomandazioni sono elencate sotto:

| Uso del dispositivo |                 Spazio di archiviazione consigliato                |
| :-----------------: | :----------------------------------------------------------------: |
|  Solo per l'exploit |                                128MB                               |
|  Backup della NAND  | Minimo: 512MB<br>Consigliati: 1GB+ |
|   Uso di homebrew   |                                2GB+                                |
|   Uso di emulatori  |                                32GB+                               |
|   Backup GameCube   |                                64GB+                               |
|      Backup Wii     |                               128GB+                               |

### Comprare Schede SD

::: danger

Attualmente le schede SD più grandi di 2TB non esistono, chiunque stia cercando di vendertele ti sta truffando.

:::

Nell'acquisto delle schede SD, è generalmente consigliato comprare dispositivi di marche ben conosciute e dal prezzo e dimensioni più alte che puoi permetterti. Mentre puoi comprarte una scheda SD generica da 2GB ed essere probabilmente al sicuro, non si può dire lo stesso per le schede SD da 512MB. I prezzi generali per schede SD si aggirano intorno ai 10-35 euro per schede da 256GB e inferiori, mentre le schede da 512GB costano sui €60 o oltre. Quando compri su Amazon, assicurati che la scheda sia `Venduta/Spedita da Amazon` o `Venduta da [marca], spedita da Amazon`. Abbi cautela nel comprare dispositivi di memoria su eBay.

Le marche che consigliamo:

- [Samsung](https://www.amazon.com/stores/page/99A645D0-BE70-4DF8-A0C5-CDED2FA59DE9) (EVO Select, EVO Plus, PRO Plus)
- [SanDisk](https://www.amazon.com/stores/page/6187A5D4-11BE-4006-8AFB-6EC233258034) (Extreme, Ultra, ecc)
- [Lexar](https://www.amazon.com/stores/page/B1E6F5A7-1459-4D06-8FDA-963327D1B00C) (E-Series, Professional)
- [Silicon Power](https://www.amazon.com/stores/page/A2CCB3CD-8C18-46EC-8497-5A3FE2E3FC1D) (3D NAND, Elite)
- [PNY](https://www.amazon.com/stores/page/9F7889F9-FA53-4078-BA65-08F7F8104CF6) (Elite, Elite-X, ecc)
- [INLAND da Micro Center](https://www.amazon.com/stores/page/B43B257E-9D36-4368-B7E2-A4095BD5384B)

### Comprare dispositivi USB - Dischi Rigidi

Nel comprare dischi rigidi USB, ci sono solo tre produttori di HDD a oggi: Western Digital, Seagate, e Toshiba. Qualsiasi altra compagnia è morta ed è andata o in bancarotta, o è stata assorbita da una delle tre sopracitate. Detto ciò, se hai un disco rigido in più in giro di un'altra compagnia, dovrebbe comunque funzionare! Le tecnologie dei dischi rigidi sono rimaste le stesse dagli ultimi 10 anni circa. Assicurati solamente di controllare i dati S.M.A.R.T per assicurarti che il dispositivo non stia fallendo prima di buttarci dentro tutti i tuoi dati.

Per le dimensioni dei dischi rigidi, quelli da 2,5 pollici dovrebbero funzionare con l'elettricità data dalla porta USB della console Wii stessa; quelli da 3,5 pollici consumano più energia e necessiteranno quasi sicuramente di un alimentatore esterno. Assicurati di tenere questo a mente nel determinare cosa vuoi fare con un dispositivo esterno.

Per gli utenti Wii U, è altamente consigliato avere un disco rigido che prende alimentazione esterna, o usare un hub USB e/o un cavo a Y per i dischi da 2,5 pollici.

Per gli utenti Wii mini, è consigliato avere un hub USB alimentato esternamente per avere spazio di archiviazione aggiuntivo, adattatori internet e altre periferiche connesse contemporaneamente. Potresti anche voler utilizzare un cavo a Y per l'alimentazione dell'unità.

Per quanto riguarda le tue scelte nell'acquisto, questo si riassume in tre scenari diversi:

- Comprare un disco rigido esterno da zero: dispositivi nuovi di zecca costano circa €56.72 per 2TB, €47.26 per 1TB, e intorno ai €28.36 per dimensioni inferiori a 1TB. Indipendentemente da cosa faccia, prova a comprare da una delle tre marche sopracitate, ma tieni a mente che le offerte sono scarse per dimensioni inferiori a 1TB.
- Comprare un nuovo disco rigido, e un nuovo involucro: I dischi rigidi nuovi sono meno costosi dei dischi prefabbricati, e puoi comprare un involucro per chiudere il nuovo disco rigido. Gli involucri da 63.5cm sono di solito dovrebbero funzionare con l'elettricità del solo cavo USB, mentre quelli da 88.9cm richiedono quasi sempre un alimentatore esterno. Un prezzo di esempio è per comprare un disco rigido da 500GB e un involucro di 63.5cm da Amazon - in tutto, circa €28.36.
- Comprare un involucro per un disco rigido già esistente: se hai già un disco rigido in giro, puoi metterlo in un involucro e usarlo sulla tua console Wii. Gli involucri possono essere trovati per prezzi che spaziano da €9.45 a €18.91 su Amazon, se hai un disco rigido con cui fornirlo.

### Comprare dispositivi USB - Unità a Stato Solido

::: warning

Per lo scopo di un dispositivo da usare su un Wii, gli SSD esterni sono spesso più costosi dei dischi rigidi classici e non c'è un vero guadagno di velocità sul Wii (la console supporta solo velocità fino a quelle di USB 2.0). Se desideri comprarne uno o ne hai uno già in giro, è un'opzione, ma generalmente è consigliato usare un disco rigido se non ne hai già uno.

:::

## Domande frequenti di rete

L'hardware di rete wireless di Wii supporta lo standard massimo di 802.11g su banda 2.4 GHz (chiamata retroattivamente Wi-Fi 3), con un livello di sicurezza massimo di WPA2-PSK (AES). Pertanto, la console Wii NON sarà in grado di connettersi ai seguenti punti di accesso (AP):

- AP che forzano la crittograzia WPA enterprise o WPA3
- AP non retrocompatibili con WiFi 3, o trasmissione solo sulla banda 5 GHz
- AP che non supportano 802.11b o 802.11g (es. le AP che supportano solo 802.11n)

ISP noti a fornire router incompatibili con queste impostazioni:

- Xfinity
- Spectrum
- Cox

Se il tuo ISP non ti permette di modificare queste impostazioni, o il tuo hardware di rete attuale non è supportato, hai alcune opzioni:

- Puoi provare a usare un hotspot cellulare. Questo non è consigliato in quanto di solito si traduce in una connessione instabile.
- Puoi usare un adattatore LAN. Deve avere il chipset `ASIX AX88772` o dire “compatibile con Wii”. Ecco un [adattatore LAN consigliato da Plugable](https://a.co/d/g8XvMDp).
  - Nota che le varianti del chipset (ad esempio `ASIX AX88772E`) **non funzioneranno** con Wii.
- In alternativa, puoi acquistare un router secondario e continuare a utilizzare la rete che hai già. Qualsiasi router a buon mercato che soddisfi gli standard sopracitati (come il Linksys WRT54G) funzionerà.

Per Wii U, la vWii utilizza le impostazioni Internet impostate nelle impostazioni di Wii U, ma può essere opzionalmente separato con il plugin Aroma `Wii VC Launch`.

---

::: tip

[Clicca qui per tornare all'indice.](site-navigation)

:::
