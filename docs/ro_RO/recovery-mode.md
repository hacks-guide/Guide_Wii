# Mod de recuperare (Recovery Mode)

Modul de recuperare este o metodă ca ultima șansă pentru repararea consolei Wii de la un brick înainte de a ajunge la hard-modding și programarea manuala al NAND-ului. Acest mod a fost accesat de angajații Nintendo din fabrici prin utilizarea unui adaptor special, dar acest lucru poate fi reprodusă cu ajutorul controller-ului GameCube. În esență, Recovery Mode pune un meniu Wii într-o stare în care programele pot fi executate dintr-un disc.

## Cum funcționează modul de recuperare

On System Menu versions 2.1 and upwards, booting into Recovery Mode will yield a version number display on the bottom right of the screen, and will idle on the screen while waiting for a disc to be inserted. În mod implicit, modul de recuperare pornește doar două tipuri de discuri:

- Un disc al cărui title ID începe cu un număr ca 0 sau 1 - un disc autoboot. All retail game discs are **not** an autoboot disc and instead start with a letter.
- Un disc de joc comercial care are o partiție validă de actualizare a cărei versiune este mai mare decât cea de pe NAND.

Această verificare poate fi evitată folosind Priiloader, care permite modului de recuperare să pornească orice disc care este inserat în Wii. Din păcate, dacă poți deja accesa Priiloader, atunci nu este nevoie să utilizezi Modul de recuperare în primul rând pentru că puteți repara brick-ul pornind aplicațiile homebrew în el. Cu toate acestea, dacă te afli într-o situație în care singura opțiune accesibilă este modul de recuperare, trebuie să ai un drivechip la îndemână pentru a sări peste verificarea discului. Dacă ești în măsură să sari peste această verificare într-un fel sau altul, poți urma instrucțiunile de mai jos pentru a porni din Modul Recuperare și pentru a ajunge la HackMii installer.

## Accesarea și utilizarea modului de recuperare

### Requirements

- Un controler GameCube
- If the Diagnostic Disc Check was previously removed with Priiloader, or if a drive chip is on hand:
    - Super Smash Bros. Brawl ([Smash Stack](legacy-exploits#smash-stack)) OR
    - Any other exploited Wii game, with the current exploit game save on the console (see [Legacy Exploits](legacy-exploits)) OR
    - Any retail game, and access to the [Bluebomb](bluebomb) exploit
- An original revision Wii (Family Edition Wiis will not work due to the lack of GameCube ports - otherwise you must solder some on)
- A Windows/macOS/Linux PC with an Internet connection
- An SD Card formatted to FAT32

### Preparație

::: warning

In order to hold down all 4 individual D-Pad buttons on a GameCube controller, you may be required to take the casing apart.

:::

First of all, verify that your Wii can boot into Recovery Mode _at all_. This involves taking a GameCube controller, plugging it into the fourth controller port on a Wii, and simultaneously holding down the 4 individual D-Pad buttons on boot. If everything goes right, you should see a screen similar to the above. As stated above, if you are on a System Menu version on 2.0 or prior, you will not see a version number display at all and you will not be able to boot from discs.

### Method I - Recovery Menu to Smash Stack

1. If you have a Super Smash Bros. Brawl game disc, you can use [Smash Stack](legacy-exploits#smash-stack) to load the HackMii installer off of your SD card.
2. Boot into Recovery Mode, and insert the Super Smash Bros. Brawl game disc. It should boot at this point.
3. Follow the instructions for the exploit on Wiibrew.

### Method II - Recovery Menu to Save Game Exploit

1. If you already have a save game on your Wii for a save game exploit listed in [Legacy Exploits](legacy-exploits), you may use a respective exploit in order to load the HackMii installer.
2. Boot into Recovery Mode, and insert your respective game disc. It should boot at this point.
3. Follow the instructions for the exploit on Wiibrew.

### Method III - Recovery Menu to Bluebomb

You can also use Bluebomb as a means of recovery. At this time, we are still drawing up instructions for this section.

::: info

At this point, you should be able to install the Homebrew Channel and access homebrew on your SD card that can be used to revert your brick.

:::

::: tip

[Return to Bricks](bricks)

:::

::: tip

[Click here to go back to the site index.](site-navigation)

:::
