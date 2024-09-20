---
title: "Recovery Mode"
---

{% include toc title="Table of Contents" %}

La Recovery Mode è l'ultima risorsa per recuperare il tuo Wii da un brick prima di passare all'hard-modding e alla programmazione manuale della NAND. This mode was accessed by Nintendo employees in the factory by the usage of a special dongle, but the input needed to access it can easily be replicated with a GameCube controller. Essentially, Recovery Mode puts a Wii Menu in a state where programs can be executed from a disc.

### How Recovery Mode Works

On System Menu versions 2.1 and upwards, booting into Recovery Mode will yield a version number display on the bottom right of the screen, and will idle on the screen while waiting for a disc to be inserted. By default, Recovery Mode only boots two types of discs:

+ A disc whose title ID starts with a number like 0 or 1 - an autoboot disc. All retail game discs are **not** an autoboot disc and instead start with a letter.
+ A retail game disc that has a valid update partition whose version is higher than the one on the NAND.

This check can be bypassed using Priiloader, which allows Recovery Mode to boot any disc that is inserted into the Wii. Unfortunately, if you can already access Priiloader, then there is no need to use Recovery Mode in the first place as you can fix your brick by booting homebrew apps in it. With this said, if you are in a situation where the only accessible option is using Recovery Mode, you must have a drivechip on hand to bypass the disc check. If are able to bypass this check one way or another, you may follow the instructions below to start from Recovery Mode and get to the HackMii installer.

### Accessing and Using Recovery Mode

#### Requisiti

+ Un controller GameCube
+ Se il Diagnostic Disc Check è stato precedentemente rimosso con Priiloader o se hai un chip dell'unità è a portata di mano:
    + Super Smash Bros. Brawl ([Smash Stack](legacy-exploits#smash-stack)) OPPURE
    + Qualsiasi altro gioco Wii con exploit, con l'attuale salvataggio di gioco con exploit sulla console (vedi gli [Exploit Legacy](legacy-exploits)) OPPURE
    + Qualsiasi gioco e l'accesso all'exploit [Bluebomb](bluebomb)
+ Una revisione di Wii originale (i modelli Family Edition di Wii non si possono usare a causa della mancanza delle porte GameCube - altrimenti le devi saldare)
+ Un PC Windows/macOS/Linux con una connessione a Internet
+ Una scheda SD formattata come FAT32

#### Preparazione

Per far in modo che vengano premuti tutti e quattro i pulsanti della croce direzionale di un controller GameCube, potrebbe essere necessario smontarlo.
{: .notice--warning}

Per cominciare, verifica che il tuo Wii può avviarsi in Recovery Mode *in alcun modo*. Questo significa prendere un controller GameCube, collegarlo alla porta del giocatore 4 su un Wii e premere simultaneamente tutti e quattro i pulsanti della croce direzionale in fase di avvio. Se tutto va bene, dovresti vedere una schermata simile a quella in alto. As stated above, if you are on a System Menu version on 2.0 or prior, you will not see a version number display at all and you will not be able to boot from discs.

#### Metodo I - Recovery Menu a Smash Stack

1. If you have a Super Smash Bros. Brawl game disc, you can use [Smash Stack](legacy-exploits#smash-stack) to load the HackMii installer off of your SD card.
1. Boot into Recovery Mode, and insert your respective game disc. It should boot at this point.
1. Follow the instructions for the exploit on Wiibrew.

#### Metodo II - Recovery Menu a exploit dati di salvataggio

1. If you already have a save game on your Wii for a save game exploit listed in [Legacy Exploits](legacy-exploits), you may use a respective exploit in order to load the HackMii installer.
1. Boot into Recovery Mode, and insert the Super Smash Bros. Brawl game disc. It should boot at this point.
1. Follow the instructions for the exploit on Wiibrew.

#### Metodo III - Recovery Menu a Bluebomb

You can also use Bluebomb as a means of recovery. At this time, we are still drawing up instructions for this section.

At this point, you should be able to install the Homebrew Channel and access homebrew on your SD card that can be used to revert your brick.
{: .notice--info}

[Ritorna ai brick](bricks)
{: .notice--info}

[Clicca qui per tornare alla Navigazione del Sito.](site-navigation)
{: .notice--info}
