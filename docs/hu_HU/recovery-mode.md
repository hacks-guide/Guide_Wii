# Helyreállítási mód

A helyreállítási mód egy Wii megmentésének a végső módja a hard-modding előtt vagy a manuális NAND programozáson előtt. Ezt a módot a konzol gyárában használták egy különleges hardverkulccsal, de a hozzáféréshez szükséges gombkombináció egy GameCube-vezérlőn is elvégezhető. A helyreállítási mód olyan helyzetbe állítja a Wii menüt, amelyben lemezről lehet programokat futtatni.

## A karbantartási mód működése

A rendszermenü 2.1-es és a fölötti verzióin a helyreállítási mód kiírja a menü verziószámát a jobb alsó sarokban és egy lemez behelyezésére vár. A helyreállítási mód alapértelmezésből csak kétféle lemezt tud futtatni:

- egy ún. autoboot („automatikus indítási”) lemezt, aminek a termékazonosítója 0-val vagy 1-gyel kezdődik A boltokban árult lemezek egyike **sem** autoboot lemez, mert mindegyiknek egy betűvel kezdődik a termékazonosítója.
- vagy egy boltban vásárolt játéklemez, amely érvényes frissítési partícióval rendelkezik és a konzol verziójánál frissebbet tartalmaz.

Ezt a korlátozást a Priiloaderrel ki lehet kerülni, ami lehetővé teszi bármilyen lemez futtatását helyreállítási módból. Viszont sajnos, ha már amúgy is hozzáférnél a Priiloaderhez, akkor nem lenne okod a helyreállítási módot használni, ugyanis a Priiloaderből elindítható a Homebrew Channel, amivel megkezdhető a javítási folyamat. Ha olyan helyzetben vagy, hogy már csak a helyreállítási mód segíthet, akkor egy lemezolvasó-chippel is rendelkezned kell a lemezkorlátozás kikerüléséhez. Ha bármilyen módon képes voltál kikerülni a korlátozást, akkor folytathatod az olvasást, hogy eljuss a HackMii-telepítőhöz.

## A helyreállítási mód indítása és használata

### Követelmények

- Egy GameCube-vezérlő
- Ha a lemezkorlátozást korábban eltávolítottad Priiloaderrel vagy ha van kéznél lemezolvasó-chiped:
  - Super Smash Bros. Brawl ([Smash Stack](legacy-exploits#smash-stack)) OR
  - Bármely más módszerhez kapcsolódó Wii-játék, aminek a sérülékenységét kihasználó játékmentése a konzolon van (ld. [Örökölt módszerek](legacy-exploits)) VAGY
  - Bármely más játék és hozzáférés a [Bluebomb](bluebomb) exploithoz
- Egy eredeti kiadású Wii (a Family Edition-konzolok nem megfelelők, mert nem rendelkeznek GameCube-csatlakozókkal – hacsak nem hegeszted fel őket)
- Egy Windowst/macOS-t/Linuxot futtató számítógép internet-hozzáféréssel
- Egy FAT32-re formázott SD kártya

### Előkészítés

::: warning

Megjegyzés: Lehetséges, hogy szét kell szerelned a GameCube-vezérlőt, hogy mind a négy nyílgombot egyszerre lenyomhasd.

:::

Először is, ellenőrizd, hogy a Wii-od képes-e _egyáltalán_ helyreállítási módba lépni. Ennek a módja a következő: Dugj be egy GameCube-vezérlőt a 4. vezérlőcsatlakozóba, majd egyszerre tartsd lenyomva mind a négy nyílgombot, miközben bekapcsolod a Wiit! Ha minden jól ment, akkor a Wii egy a fent leírtakhoz hasonló képernyőt fog mutatni. Ha a rendszered 2.0-ás vagy korábbi verzión fut, akkor nem fogod a verziószámot látni a képernyőn és nem fogsz tudni lemezről programokat futtatni.

### I. módszer – Smash Stack

1. Ha rendelkezel egy Super Smash Bros. Brawl játéklemezzel, akkor a [Smash Stack](legacy-exploits#smash-stack)-módszerrel betöltheted a HackMii-telepítőt az SD kártyádról.
2. Bootolj a Recovery Mode-ba és helyezd be a Super Smash Bros. Brawl játéklemezt. Ha minden jól megy, akkor a játék elindul.
3. Kövesd a Wiibrew-on leírt lépéseket az exploithoz.

### II. módszer – Játékmentés

1. Ha van már egy játékmentése a Wii-dhez, egy olyan exploittal, ami listázott a [Legacy Exploits](legacy-exploits)-ok között, akkor azt ismét felhasználhatod a HackMii-telepítő betöltéséhez.
2. Bootolj Recovery Mode-ba és helyezd be a játéklemezt. Ha minden jól megy, akkor a játék elindul.
3. Kövesd a Wiibrew-on leírt lépéseket az exploithoz.

### III. módszer – Bluebomb

A Bluebomb is egy lehetséges javítási módszer. Jelenleg még dolgozunk ezen a részen. Az útmutatód később itt olvashatod.

::: info

Ezek után telepítheted a Homebrew Channelt és hozzáférhetsz az SD kártyádon tárolt homebrew programokhoz, hogy helyreállítsd a konzolod.

:::

---

::: tip

[Vissza a Brick-ekhez](bricks)

:::

---

::: tip

[Kattints ide az oldal tartalomjegyzékhez való visszatéréshez.](site-navigation)

:::
