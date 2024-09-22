---
title: "Wilbrand"
---

A Wilbrand egy exploit a Wii-hoz ami a Wii Message Board-on keresztül kerül kiváltásra. Kompatibilis a Wii menu 3.0-4.3 verziókkal minden régióban.

Két féle metódusa kerül ismertetésre ezen az oldalon egy helyes Wilbrand exploit létrehozásának. A Wilbrand Web ajánlott, a könnyebb használhatósága miatt.
{: .notice--info}

{% capture wilbrand-web %}

### Wilbrand Web

#### Követelmények

* Egy FAT32/MS-DOS-ra formázott SD kártya
* Egy Wii 3.0 vagy újabb verzióval

A 2GB-nál nagyobb SD kártyák nem fognak működni a Wii menu 4.0-nál korábbi verzióival.
{: .notice--warning}

#### Útmutató

1. Kapcsold be a konzolt!
1. Nyisd meg a konzol beállításait (`Wii Settings`)!
1. Jegyezd fel a betüt a system version mellett a jobb felső sarkában a képernyőnek.
    + Ez a betű jelzi a rendszermenü régióját, amire később szükséged lesz.

    ![](/images/wii/SystemMenuVersion.png)

1. Navigálj az `Internet` > `Console Information` opcióhoz.
1. Jegyezd fel a FULL MAC address-ed.

    ![](/images/wii/MacAddress.png)

1. A számítógépeden nyiss meg egy böngészőt és menj a [wilbrand.donut.eu.org](https://wilbrand.donut.eu.org/) oldalra.
1. Add meg a Wii-od MAC-jét, verzióját és régióját.
1. Ügyelj rá, hogy a `Bundle the HackMii Installer for me!` opció bepipálva legyen.
1. Vágd el mindkét drótot.

    ![](/images/exploits/wilbrand/web.png)

1. Kattints a "Download your .zip"-re.
1. Csatlakoztasd az SD kártyád a számítógépedhez.
1. Másold a `private` mappát és a `boot.elf` fájlt a letöltött `.zip` fájlból az SD kártyád gyökerébe.
1. Helyezd vissza az SD kártyád a konzolodba.
    + Az SD kártyát a SD kártya slot-ba kell belerakni a Wii elején. Egy USB > SD kártya átalakító az Wii USB portjába dugva nem fog működni.
1. Nyisd meg a Wii-od és térj vissza a Wii Menu-be.
1. Nyisd meg a Wii Message Board-ot.
1. Nyisd meg a zöld levelet a bombával.

    ![](/images/exploits/wilbrand/msgboard.png)

    + Biztosítsd, hogy a Wii-odon a dátum helyes, különben nem fogod megtalálni a levelet.
    + Bizonyos esetekben szükséges lehet a holnapi vagy a tegnapi levelek ellenőrzése is a levél megtalálásához.
    + Ha nem látod a zöld levelet, nézd meg, hogy jelenik e meg valamilyen hiba az SD kártya szekciónak a `Data Management`-ben. Ha hibák vannak itt, lehet, hogy probléma van at SD kártya formátumával vagy a Wii SD kártya olvasójával.


1. Ha a folyamat sikeres volt, a konzol be fogja tölteni a HackMii-telepítőt.
    + Ha a Wii egy fekete képernyőn ragad, kapcsold ki a PWER gomb nyomva tartásával, majd próbáld újra.
    + Ha visszakerültél a Wii Menu-be a levél megnyitását követően. biztosítsd, hogy az írásvédelem az SD kártyádon kikapcsolt pozícióban van.

[Tovább a Homebrew Channel és BootMii telepítéséhez](hbc)
{: .notice--info}

{% endcapture %}

{% capture wilbrand-cli %}

### Wilbrand CLI

#### Követelmények

* Egy Windows, macOS vagy Linux számítógép
* Egy FAT32/MS-DOS-ra formázott SD kártya
* Egy Wii 3.0 vagy újabb verzióval
* [Wilbrand](https://static.wiidatabase.de/Wilbrand.zip)
* [A HackMii-telepítő 1.2-es verziója](https://bootmii.org/download/)

A 2GB-nál nagyobb SD kártyák nem fognak működni a Wii menu 4.0-nál korábbi verzióival.
{: .notice--warning}

#### Útmutató

1. Kapcsold be a konzolt!
1. Nyisd meg a konzol beállításait (`Wii Settings`)!
1. Jegyezd fel a betüt a system version mellett a jobb felső sarkában a képernyőnek.
    + Ez a betű jelzi a rendszermenü régióját, amire később szükséged lesz.

    ![](/images/wii/SystemMenuVersion.png)

1. Navigálj az `Internet` > `Console Information` opcióhoz.
1. Jegyezd fel a FULL MAC address-ed.

    ![](/images/wii/MacAddress.png)

1. Másold ki a Wilbrand `.zip` fájl tartalmát egy mappába a számítógépeden
1. Csatlakoztasd az SD kártyád a számítógépedhez.
1. Nyiss meg eg terminal-t a mappába ahova a Wilbrand kicsomagolásra került.
1. A Wii-od verziójával és MAC címével futtasd az alábbi parancsot:

    + Windows: `.\Wilbrand.exe AA-BB-CC-DD-EE-FF MM/DD/YYYY VERSION X:`
        + `X:` az SD kártyád meghajtó betüjele.

        ![](/images/exploits/wilbrand/windows.png)

    + Linux/macOS: `./Wilbrand AA-BB-CC-DD-EE-FF MM/DD/YYYY VERSION /media/mount_dir`
        + Ha nem abban a mappában indítottad a terminált amibe a Wilbrand kicsomagolásra került használd a `cd`, hogy előbb belépj oda, pl. `cd ~/Desktop/Wilbrand`
        + `/media/mount_dir`a mappa ahova az SD kártyád csatolásra került. Ez változhat a Linux distro-tól függően.

        ![](/images/exploits/wilbrand/linux.png)

1. Másold ki a hackmii_installer_v1.2 `.zip` fájl tartalmát egy mappába a számítógépeden.
1. Másold a `boot.elf` fájlt a HackMii Installer v1.2 `.zip`-ből az SD kártyád gyökerébe.
1. Helyezd vissza az SD kártyád a konzolodba.
    + Az SD kártyát a SD kártya slot-ba kell belerakni a Wii elején. Egy USB > SD kártya átalakító az Wii USB portjába dugva nem fog működni.
1. A Wii-odon térj vissza a Wii Menu-be.
1. Nyisd meg a Wii Message Board-ot.
1. Nyisd meg a zöld levelet a bombával.
    + Biztosítsd, hogy a Wii-odon a dátum helyes, különben nem fogod megtalálni a levelet.
    + Bizonyos esetekben szükséges lehet a holnapi vagy a tegnapi levelek ellenőrzése is a levél megtalálásához.
    + Ha nem látod a zöld levelet, nézd meg, hogy jelenik e meg valamilyen hiba az SD kártya szekciónak a `Data Management`-ben. Ha hibák vannak itt, lehet, hogy probléma van at SD kártya formátumával vagy a Wii SD kártya olvasójával.

    ![](/images/exploits/wilbrand/msgboard.png)

1. Ha a folyamat sikeres volt, a konzol be fogja tölteni a HackMii-telepítőt.
    + Ha a Wii egy fekete képernyőn ragad, kapcsold ki a PWER gomb nyomva tartásával, majd próbáld újra.
    + Ha visszakerültél a Wii Menu-be a levél megnyitását követően. biztosítsd, hogy az írásvédelem az SD kártyádon kikapcsolt pozícióban van.

[Tovább a Homebrew Channel és BootMii telepítéséhez](hbc)
{: .notice--info}

{% endcapture %}

<button class="btn btn--large btn--primary tabLink" onClick="select_tab(event, 'wilbrand-web')"> Wilbrand Web </button>
<button class="btn btn--large btn--info tabLink" onClick="select_tab(event, 'wilbrand-cli')"> Wilbrand CLI </button>

<div class="tabContent tabDefualt" id="wilbrand-web" markdown="1">

{{ wilbrand-web }}
</div>
<div class="tabContent" id="wilbrand-cli" markdown="1">
{{ wilbrand-cli }}
</div>

<script>
    const tabContents = document.getElementsByClassName('tabContent');
    const tabLinks    = document.getElementsByClassName('tabLink');

    for (tab of tabContents) { tab.style.display = 'none'; }
    document.getElementsByClassName('tabDefault')[0].style.display = 'block';

    function select_tab(event, tab_id)
    {
        for (tab of tabContents) { tab.style.display = 'none'; }
        for (btn of tabLinks) { btn.className = btn.className.replace('btn--primary', 'btn--info'); }

        document.getElementById(tab_id).style.display = 'block';
        event.currentTarget.className = event.currentTarget.className.replace('btn--info', 'btn--primary');
    }
</script>
