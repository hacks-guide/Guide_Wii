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

This guide is only intended for Wii U users. <br/>
If you have a Wii, follow [this guide](cios) instead. <br/>
If you have a Wii mini, follow [this guide](cios-mini) instead.
{: .notice--warning}

Ne próbálj meg Wii/Wii minire tervezett IOS-t vagy rendszermenüt vWiire telepíteni! Ha mégis így tennél, azzal [elronthatod](bricks#ios-brick) a konzolod!
{: .notice--warning}

### Követelmények

- A Wii U with the Homebrew Channel installed on the vWii
- Egy SD kártya
- A [d2x cIOS-telepítő](/assets/files/d2x_cIOS_Installer-vWii.zip)

Ha egy SD kártyát használsz, bizonyosodj meg róla, hogy a rajta lévő LOCK-kapcsoló nyitott állásban legyen, különben a telepítőben nem fogod tudni kiválasztani a helyes beállításokat!
{: .notice--warning}

### Útmutató

#### I. rész – Telepítés

1. Másold át az `apps` mappát a d2x-cios-installer `.zip` fájlból az SD kártyád gyökerébe.
2. Vedd ki az SD kártyát a PC-dből és rakd be a Wii U-ba.
3. Kapcsold be a Wii U-t és lépj vWii módba!
4. Indítsd el a Homebrew Channelt!
5. Indítsd el a d2x cIOS Installert!
6. Állíts be mindent az alábbiak szerint:
   - Select cIOS: `d2x-v11-beta1-vWii`
   - Select cIOS base: `56`
   - Select cIOS slot: `249`
7. A telepítés indításához nyomd meg az `A`-gombot!
8. Állíts be mindent az alábbiak szerint:
   - Select cIOS: `d2x-v11-beta1-vWii`
   - Select cIOS base: `57`
   - Select cIOS slot: `250`
9. A telepítés indításához nyomd meg az `A`-gombot!
10. Állíts be mindent az alábbiak szerint:
    - Select cIOS: `d2x-v11-beta1-vWii`
    - Select cIOS base: `58`
    - Select cIOS slot: `251`
11. A telepítés indításához nyomd meg az `A`-gombot!
12. A kilépéshez nyomd meg a `B`-gombot!

- Ha végeztél mind a három cIOS telepítésével, nyomd meg a B-gombot a Homebrew Channelbe való visszatéréshez!

Folytatás a [telepítés befejezésével](vwii-finalizing-setup)
{: .notice--info}
