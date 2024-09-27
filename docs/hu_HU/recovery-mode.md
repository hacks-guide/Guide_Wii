# Helyreállítási mód

A helyreállítási mód egy Wii megmentésének a végső eseti módja hardveres módosításon vagy belsőmemória-programozáson kívül. Ezt a módot a konzol gyárában használták egy különleges hardverkulccsal, de a hozzáféréshez szükséges gombkombináció egy GameCube-vezérlőn is elvégezhető. A helyreállítási mód olyan helyzetbe állítja a Wii menüt, amelyben lemezről lehet programokat futtatni.

## A karbantartási mód működése

On System Menu versions 2.1 and upwards, booting into Recovery Mode will yield a version number display on the bottom right of the screen, and will idle on the screen while waiting for a disc to be inserted. A helyreállítási mód alapértelmezésből csak kétféle lemezt tud futtatni:

- egy ún. autoboot („automatikus indítási”) lemezt, aminek a termékazonosítója 0-val vagy 1-gyel kezdődik All retail game discs are **not** an autoboot disc and instead start with a letter.
- vagy egy boltban vásárolt játéklemez, amely érvényes frissítési partícióval rendelkezik és a konzol verziójánál frissebbet tartalmaz.

Ezt a korlátozást a Priiloaderrel ki lehet kerülni, ami lehetővé teszi bármilyen lemez futtatását helyreállítási módból. Viszont sajnos, ha már amúgy is hozzáférnél a Priiloaderhez, akkor nem lenne okod a helyreállítási módot használni, ugyanis a Priiloaderből elindítható a Homebrew Channel, amivel megkezdhető a javítási folyamat. Ha olyan helyzetben vagy, hogy már csak a helyreállítási mód segíthet, akkor egy lemezolvasó-chippel is rendelkezned kell a lemezkorlátozás kikerüléséhez. Ha bármilyen módon képes voltál kikerülni a korlátozást, akkor folytathatod az olvasást, hogy eljuss a HackMii-telepítőhöz.

## A helyreállítási mód indítása és használata

### Követelmények

- Egy GameCube-vezérlő
- Ha a lemezkorlátozást korábban eltávolítottad Priiloaderrel vagy ha van kéznél lemezolvasó-chiped:
  - Super Smash Bros. Brawl ([Smash Stack](legacy-exploits#smash-stack)) OR
  - Any other exploited Wii game, with the current exploit game save on the console (see [Legacy Exploits](legacy-exploits)) OR
  - Any retail game, and access to the [Bluebomb](bluebomb) exploit
- Egy eredeti kiadású Wii (a Family Edition-konzolok nem megfelelők, mert nem rendelkeznek GameCube-csatlakozókkal – hacsak nem hegeszted fel őket)
- Egy Windowst/macOS-t/Linuxot futtató számítógép internet-hozzáféréssel
- Egy FAT32-re formázott SD kártya

### Előkészítés

::: warning

Megjegyzés: Lehetséges, hogy szét kell szerelned a GameCube-vezérlőt, hogy mind a négy nyílgombot egyszerre lenyomhasd.

:::

First of all, verify that your Wii can boot into Recovery Mode _at all_. Ennek a módja a következő: Dugj be egy GameCube-vezérlőt a 4. vezérlőcsatlakozóba, majd egyszerre tartsd lenyomva mind a négy nyílgombot, miközben bekapcsolod a Wiit! Ha minden jól ment, akkor a Wii egy a fent leírtakhoz hasonló képernyőt fog mutatni. Ha a rendszered 2.0-ás vagy korábbi verzión fut, akkor nem fogod a verziószámot látni a képernyőn és nem fogsz tudni lemezről programokat futtatni.

### I. módszer – Smash Stack

1. If you have a Super Smash Bros. Brawl game disc, you can use [Smash Stack](legacy-exploits#smash-stack) to load the HackMii installer off of your SD card.
2. Lépj helyreállítási módba és helyezd be a Super Smash Bros. Brawl-lemezt! Ha minden jól megy, akkor a játék elindul.
3. A folytatáshoz kövesd a Wiibrew-on leírt lépéseket!

### II. módszer – Játékmentés

1. If you already have a save game on your Wii for a save game exploit listed in [Legacy Exploits](legacy-exploits), you may use a respective exploit in order to load the HackMii installer.
2. Lépj helyreállítási módba és helyezd be a játéklemezt! Ha minden jól megy, akkor a játék elindul.
3. A folytatáshoz kövesd a Wiibrew-on leírt lépéseket!

### III. módszer – Bluebomb

A Bluebomb is egy lehetséges javítási módszer. Jelenleg még dolgozunk ezen a részen. Az útmutatód később itt olvashatod.

::: info

Ezek után telepítheted a Homebrew Channelt és hozzáférhetsz az SD kártyádon tárolt nemhivatalos programokhoz, hogy helyreállítsd a konzolod.

:::

::: tip

[Return to Bricks](bricks)

:::

::: tip

[Click here to go back to the site index.](site-navigation)

:::
