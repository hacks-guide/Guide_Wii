---
title: "FAQ and Troubleshooting"
---

## Foire aux questions

{% include toc title="Table of Contents" %}

### Quel est le risque de modder ma console ?
Pas très risqué pour être honnête, ça dépends de votre console. The Wii requires much less barrier to entry than other consoles, with some exploits requiring nothing more than a Wii and an internet connection. As long as you follow the general advice laid out [here](bricks#brick-prevention), install [BootMii](bootmii) and [Priiloader](priiloader), and use common sense, you should be completely fine!

### J'ai le code d'erreur XXXXXX, comment puis-je le corriger ?
Afin de vérifier ce que signifie l'erreur, veuillez visiter la page [d'erreur Wiimmfi](https://wiimmfi.de/error). Les erreurs les plus courantes ont des solutions listées en dessous:

#### Error 051330/51330

Exécutez un test de connexion Internet en allant dans `Paramètres Wii > Internet > Paramètres de connexion > Connexion > Testez cette connexion`

#### Erreur 220602

##### Pour les utilisateurs de RiiConnect24

Vous utilisez l'ancien serveur DNS de RiiConnect24. Suivez [ce guide](riiconnect24#section-iv---connecting) pour des instructions sur comment le changer.

##### Pour les utilisateurs non-RiiConnect24

Votre serveur DNS principal est incorrect ou ne fonctionne pas.<br> Cela peut également se produire si vous utilisez un serveur proxy et qu'il est hors service.

#### Erreur 107304

##### Pour les utilisateurs de RiiConnect24

Si vous obtenez cette erreur ou que vous voyez le Contrat d'utilisateur de Nintendo sans le logo de RiiConnect24, Cela signifie que votre FAI (fournisseur d'accès Internet) ou votre réseau bloque l'utilisation des DNS de RiiConnect24. You can set `Auto-Obtain DNS` to `On` to solve this. RiiConnect24 fonctionnera toujours même sans. Ou, vous pouvez utiliser le programme [RiiConnect24 DNS-Server](https://github.com/RiiConnect24/DNS-Server/releases/latest).

##### Pour les utilisateurs non-RiiConnect24

Si vous obtenez cette erreur, le serveur DNS que vous avez choisi ou votre internet dans son ensemble ont des problèmes. Réessayez plus tard.

#### FORE000006

Si vous obtenez l'erreur FORE000006, la date ou l'heure de la Wii est probablement mal réglée. Consultez [cette page](wiiconnect24#updating-rtc-clock) pour savoir les régler correctement (via un logiciel). If this still fails, remove the Wii's clock battery (located on the bottom of the system behind a screw) for an hour and put it back in. Ensuite, réinitialisez l'horloge de la Wii.

### Comment puis-je supprimer le contrôle parental ?
The [mkey generator](https://mkey.eiphax.tech/) can generate the code required to remove parental controls.

### Je pense que ma Wii est briquée, ou quelque chose ne va sérieusement pas, que dois-je faire ?
Consultez [cette page](bricks).

## Les périphériques de stockage

Pour [BlueBomb](bluebomb), [str2hax](str2hax) ou [FlashHax](flashhax), vous n'avez pas besoin d'une carte SD pour modder votre Wii, par contre, il est recommandé d'en avoir une pour les applications homebrew et tout ce qui a besoin d'une carte SD.
{: .notice--info}

FAT32 est le système de fichiers recommandé pour les cartes SD, voir [ce guide](https://wiki.hacks.guide/wiki/Formatting_an_SD_card) pour savoir comment formatter un périphérique dans ce format.<br> Pour les périphériques USB, FAT32 est également recommandé, bien que les utilisateurs devraient être avertis des limitations du FAT32 qui ne permettent que des volumes de 2 To. WBFS était un système de fichiers précédemment utilisé pour les sauvegardes de jeux Wii - aujourd'hui, il est obsolète et ne doit pas être utilisé.
{: .notice--info}

Pour les versions de menu Wii inférieures à 4.0, une limitation dans le logiciel de système Wii empêche l'utilisation de cartes SD de plus de 2 Go.<br> Pour les versions du menu Wii 4.0 ou plus, cette limitation est supprimée et des cartes SD de différentes tailles peuvent être utilisées.<br> Votre plus grande chance d'obtenir une carte SD fonctionnelle sur n'importe quelle Wii est de 32 Go ou moins, mais succès a été signalé plusieurs fois sur des cartes allant jusqu'à 256 Go.
{: .notice--warning}

Pour les périphériques USB, les clés USB ont un taux élevé de ne pas fonctionner sur les consoles Wii. Au lieu de cela, il est recommandé d'utiliser un disque dur USB ou un SSD.
{: .notice--warning}

### General Storage Guidelines

Lorsque vous envisagez d'acheter ou d'utiliser une carte SD ou un périphérique USB, Il faut prendre en considération les choses que vous utiliserez pour les deux supports de stockage. Différentes utilisations peuvent prendre différentes quantités d'espace, dont certains exemples communs sont indiqués ci-dessous:

+ Les sauvegardes Wii : Les plus grands jeux Wii (DVD double couche) ont une taille de 9 Go, les jeux normaux sont plus proches des tailles de 4 Go ou moins. The average user for a Wii backup device would probably want 128GB or more of space.
+ GameCube Backups: The largest GameCube games reach sizes of up to 1.3GB. ISO sizes are normally this size regardless of the game, but can be considerably lower if NKIT is used as a format instead. The average user for a GameCube backup device would probably want 64GB or more of space.
+ General Emulation: There are a wide variety of emulators available on the Wii. Because the size of different game ROMs differ dramatically, the average user for an emulation drive would probably want 32GB or more of space.
+ General Homebrew: For homebrew, the average user would want 2GB or more of space.
+ NAND Backups: For backing up your NAND with BootMii, the average user would need a minimum of 512MB of free space, but sizes of 1GB or more are recommended.
+ Bare minimum, exploit only: The minimum amount of space to run an SD-card compatible exploit on a Wii is 128MB.

### Buying SD Cards

Les cartes SD de 2To ou plus n'existent pas actuellement, si quelqu'un ou une platforme tente de vous en vendre une c'est une arnaque.
{: .notice--danger}

Lorsque vous achetez des cartes SD, il est généralement recommandé de s'en tenir à des marques bien connues, plus la capacité est grande plus elle est coûteuse. Vous pouvez acheter une carte SD générique/no-name de 2Go et être probablement en sécurité, On ne peut pas dire la même chose pour une carte SD de 512Go. Le prix pour les cartes SD est d'environ 8-20€ pour 256 Go et moins, alors que pour 512 Go c'est autour de 35€. Lors d'un achat sur Amazon, assurez-vous que votre carte est soit `vendue par/expédiée par Amazon` ou `vendue par [marque], Livré par Amazon`. Méfiez-vous lorsque vous achetez du stockage (clé USB, cartes SD, disques dur, etc...) sur eBay.

Marques recommandées :
+ Samsung (EVO Select, EVO Plus, PRO Plus)
+ SanDisk (Extreme, Ultra, etc)
+ Lexar (E-Series, Professional)
+ Silicon Power ("3D NAND" cards, higher capacity usually better value)
+ PNY (Elite, Elite-X, etc)

### Achat de périphériques USB - Disques durs

When buying USB hard drives, there are only three existing present-day HDD manufacturers: Western Digital, Seagate, and Toshiba. Any and all other hard drive companies are defunct and have either went bankrupt, or were absorbed by the three aformentioned companies. With that said, if you have an extra hard drive lying around made by another company, it should still work! Hard drive technology has remained largely the same within the past 10 or so years. Just make sure to check the S.M.A.R.T data to ensure that the drive isn't failing before you throw all of your data on there.

For hard drive sizing, 2.5 inch should work fine running off of USB power alone on a Wii; 3.5 inch consumes much more power and will almost always need an external power adapter. Make sure to plan for this when determining what you want to do with an external drive.

As for your choices in shopping, this largely comes down to three different scenarios:

+ Buying a new external hard drive from scratch: New external drives come brand new around 60 USD for 2TB, 50 USD for 1TB, around 30 USD for sizes lower than 1TB. Whatever you do, try to stick within the three present manufacturing brands listed above, but bear in mind that offerings are sparse for drive sizes lower than 1TB.
+ Buying a new hard drive, and a new enclosure: New hard drives are decently cheaper than buying a pre-made hard drive, and you can buy an enclosure to house this new hard drive. 2.5 inch enclosures are normally powerable off of USB alone, while 3.5 inch enclosures almost always come with an external adapter for power. An example price is buying a 500GB Western Digital drive and a 2.5 inch drive enclosure off of Amazon - all in all, about 30 USD.
+ Buying an enclosure for an already existing hard drive: If you already have a hard drive laying around, why not put it in an enclosure and use it for your Wii? Enclosures can be found for prices ranging between 10 to 20 USD off of Amazon, as long as you have a drive to supply it with.

### Buying USB Devices - Solid State Drives

For the purpose of using a drive with a Wii, external SSDs are often more expensive than conventional hard drives for no visible gain in speed on a Wii (the console only supports up to USB 2.0 data speeds). If you would like to buy one or already have one lying around, it's an option, but generally it's recommended to just go for a hard drive if you don't already have one.
{: .notice--warning}
