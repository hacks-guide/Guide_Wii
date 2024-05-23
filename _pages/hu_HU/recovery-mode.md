---
title: "Helyreállítási mód"
---

{% include toc title="Tartalomjegyzék" %}

A helyreállítási mód egy Wii megmentésének a végső eseti módja hardveres módosításon vagy belsőmemória-programozáson kívül. Ezt a módot a konzol gyárában használták egy különleges hardverkulccsal, de a hozzáféréshez szükséges gombkombináció egy GameCube-vezérlőn is elvégezhető. A helyreállítási mód olyan helyzetbe állítja a Wii menüt, amelyben lemezről lehet programokat futtatni.

### A karbantartási mód működése

A rendszermenü 2.1-es és afölötti verzióin a helyreállítási mód kiírja a menü verziószámát a jobb alsó sarokban és egy lemez behelyezésére vár. A helyreállítási mód alapértelmezésből csak kétféle lemezt tud futtatni:

+ egy ún. autoboot („automatikus indítási”) lemezt, aminek a termékazonosítója 0-val vagy 1-gyel kezdődik (a boltokban árult lemezek **egyike sem** autoboot lemez, mert mindegyiknek egy betűjellel kezdődik a termékazonosítója);
+ vagy egy boltban vásárolt játéklemez, amely érvényes frissítési partícióval rendelkezik és a konzol verziójánál frissebbet tartalmaz.

Ezt a korlátozást a Priiloaderrel ki lehet kerülni, ami lehetővé teszi bármilyen lemez futtatását helyreállítási módból. Viszont sajnos, ha már amúgy is hozzáférnél a Priiloaderhez, akkor nem lenne okod a helyreállítási módot használni, ugyanis a Priiloaderből elindítható a Homebrew Channel, amivel megkezdhető a javítási folyamat. Ha olyan helyzetben vagy, hogy már csak a helyreállítási mód segíthet, akkor egy lemezolvasó-chippel is rendelkezned kell a lemezkorlátozás kikerüléséhez. Ha bármilyen módon képes voltál kikerülni a korlátozást, akkor folytathatod az olvasást, hogy eljuss a HackMii-telepítőhöz.

### A helyreállítási mód indítása és használata

#### Követelmények

+ Egy GameCube-vezérlő
+ Ha a lemezkorlátozást korábban eltávolítottad Priiloaderrel vagy ha van kéznél lemezolvasó-chiped:
    + Egy Super Smash Bros. Brawl-lemez ([Smash Stack](legacy-exploits#smash-stack)) VAGY
    + bármely más módszerhez kapcsolódó Wii-játék, aminek a sérültségét kihasználó játékmentés a konzolon van (ld. [Örökölt módszerek](legacy-exploits)) VAGY
    + bármely más játék és hozzáférés a [Bluebombhoz](bluebomb).
+ Egy eredeti kiadású Wii (a Family Edition-konzolok nem megfelelők, mert nem rendelkeznek GameCube-csatlakozókkal – hacsak nem hegeszted fel őket)
+ Egy Windowst/macOS-t/Linuxot futtató számítógép internet-hozzáféréssel
+ Egy FAT32-re formázott SD kártya

#### Előkészítés

Megjegyzés: Lehetséges, hogy szét kell szerelned a GameCube-vezérlőt, hogy mind a négy nyílgombot egyszerre lenyomhasd.
{: .notice--warning}

Először is, ellenőrizzük, hogy a Wiid képes-e egyáltalán helyreállítási módba lépni! This involves taking a GameCube controller, plugging it into the fourth controller port on a Wii, and simultaneously holding down the 4 individual D-Pad buttons on boot. If everything goes right, you should see a screen similar to the above. As stated above, if you are on a System Menu version on 2.0 or prior, you will not see a version number display at all and you will not be able to boot from discs.

#### Method I - Recovery Menu to Smash Stack

1. If you have a Super Smash Bros. Brawl game disc, you can use [Smash Stack](legacy-exploits#smash-stack) to load the HackMii installer off of your SD card.
1. Boot into Recovery Mode, and insert the Super Smash Bros. Brawl game disc. It should boot at this point.
1. Follow the instructions for the exploit on Wiibrew.

#### Method II - Recovery Menu to Save Game Exploit

1. If you already have a save game on your Wii for a save game exploit listed in [Legacy Exploits](legacy-exploits), you may use a respective exploit in order to load the HackMii installer.
1. Boot into Recovery Mode, and insert your respective game disc. It should boot at this point.
1. Follow the instructions for the exploit on Wiibrew.

#### Method III - Recovery Menu to Bluebomb

You can also use Bluebomb as a means of recovery. At this time, we are still drawing up instructions for this section.

At this point, you should be able to install the Homebrew Channel and access homebrew on your SD card that can be used to revert your brick.
{: .notice--info}

[Return to Bricks](bricks)
{: .notice--info}

[Kattints ide a tartalomjegyzékhez való visszatéréshez!](site-navigation)
{: .notice--info}
