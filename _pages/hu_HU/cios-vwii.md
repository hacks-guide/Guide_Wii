---
title: d2xl cIOS vWiire (kísérleti)
---

{% include toc title="Tartalomjegyzék" %}

{% capture technical_info %}

<summary><em>Technikai részletek (nem kötelező)</em></summary>
A cIOS („custom IOS” / „egyéni IOS”)-ek egyéni rendszerfunkciók igénybevételét teszik lehetővé. Ugyan a [cIOS](https://wiibrew.org/wiki/Custom_IOS)-eket nagyrészt kiváltotta az AHBPROT, amely teljes hardveres hozzáférést biztosít, az előbbi továbbra is rendelkezik néhány hasznos képességgel. A cIOS-ek pl. lehetővé teszik az USB-betöltők, mint az USB Loader GX és a WiiFlow, és néhány más program, mint a SaveGame Manager GX működését. Az útmutató ezen része nem kötelező, de ajánlott végigcsinálni, hiszen hátrányok nélkül kiterjeszti a Wiid funkcionalitását.

{% endcapture %}

<details>{{ technical_info | markdownify }}</details>
{: .notice--info}

Az útmutató ezen része csak Wii U (vWii)-felhasználóknak szól. Ha egy sima Wiid van, [ezt az útmutatót](cios) kövesd! Ha egy Wii minid van, [ezt az útmutatót](cios-mini) kövesd!
{: .notice--warning}

Ne próbálj meg Wii/Wii minire tervezett IOS-t vagy rendszermenüt vWiire telepíteni! Ha mégis így tennél, azzal [elronthatod](bricks#ios-brick) a konzolod!
{: .notice--warning}

### Követelmények

- Egy Wii U, aminek a vWiijére telepítve van a Homebrew Channel
- Egy SD kártya
- A [d2x cIOS-telepítő](/assets/files/d2x_cIOS_Installer-vWii.zip)

Ha egy SD kártyát használsz, bizonyosodj meg róla, hogy a rajta lévő LOCK-kapcsoló nyitott állásban legyen, különben a telepítőben nem fogod tudni kiválasztani a helyes beállításokat!
{: .notice--warning}

### Útmutató

#### I. rész – Telepítés

1. Helyezd be az SD kártyát a Wii U-ba!
2. Kapcsold be a Wii U-t és lépj vWii módba!
3. Indítsd el a Homebrew Channelt!
4. Indítsd el a d2x cIOS Installert!
5. Állíts be mindent az alábbiak szerint:
   - Select cIOS: `d2x-v11-beta1-vWii`
   - Select cIOS base: `56`
   - Select cIOS slot: `249`
6. A telepítés indításához nyomd meg az `A`-gombot!
7. Állíts be mindent az alábbiak szerint:
   - Select cIOS: `d2x-v11-beta1-vWii`
   - Select cIOS base: `57`
   - Select cIOS slot: `250`
8. A telepítés indításához nyomd meg az `A`-gombot!
9. Állíts be mindent az alábbiak szerint:
   - Select cIOS: `d2x-v11-beta1-vWii`
   - Select cIOS base: `58`
   - Select cIOS slot: `251`
10. A telepítés indításához nyomd meg az `A`-gombot!
11. Press the `B` button to exit.

- Once you have finished with all 3 cIOSes, press B to return to the Homebrew Channel.

Continue to [Finalizing Setup](vwii-finalizing-setup)
{: .notice--info}
