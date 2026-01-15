# A Wii Menu frissítése v4.3-ra

Ez a útmutató elmagyarázza, hogyan frissítheted a Wii menüt a 4.3-as verzióra, ha már homebrew-olt a Wii-od.

::: warning

Sokkal biztonságosabb a [ModMii](modmii) (csak Windows) segítségével frissíteni a Wii-t a 4.3-as verzióra.

:::

## Követelmények

- egy Wii a The Homebrew Channel 1.0.8-cal vagy későbbivel
  - Ha nincs Homebrew Channel-ed vagy túl régi kezd [itt](get-started) az (újra)telepítéséhez.
- Egy SD kártya vagy pendrive
- Egy Windows/macOS/Linux számítógép
- [NUSGet](https://github.com/NinjaCheetah/NUSGet/releases/latest/)
- [Priiloader](priiloader)
- [YAWM ModMii Edition](https://oscwii.org/library/app/yawmme)

## Lépések

### I. rész - Letöltés

1. A számítógépeden töltsd le a NUSGet rendszerednek megfelelő verzióját lenti linkekről. A Windows felhasználók a `NUSGet-Windows-x86_64-bin.zip` fájlt kell válasszák.
2. Csomagold ki a NUSGet futtatható állományt és indítsd el.
3. Menj az `System` > `0000000100000002 - System Menu` > `Your Region`-hoz majd válaszd a legutolsó 4.3 verzióját a menünek (pl. `v513 4.3U` USA-hoz). Vedd ki a pipát a `Keep encrypted contents` elől. Jelöld be a `Use a custom download directory` opciót és válaszd a mappát ahol a NUSGet futtatható állomány is található, majd kattints a `Start Download` opcióra.

   ![](/images/desktop-apps/nusget/nusget-wiimenu-dl-alt.png)
4. Menj az `IOS` > `000000010000003A - IOS 58` > `World` > `Latest Version`-höz. Vedd ki a pipát a `Keep encrypted contents` elől. Jelöld be a `Use a custom download directory` opciót és válaszd a mappát ahol a NUSGet futtatható állomány is található, majd kattints a `Start Download` opcióra.

   ![](/images/desktop-apps/nusget/nusget-ios58-dl.png)
5. Menj az `IOS` > `0000000100000050 - IOS 80` > `World` > `Latest Version`-höz. Vedd ki a pipát a `Keep encrypted contents` elől. Jelöld be a `Use a custom download directory` opciót és válaszd a mappát ahol a NUSGet futtatható állomány is található, majd kattints a `Start Download` opcióra.

   ![](/images/desktop-apps/nusget/nusget-ios80-dl.png)
6. Ha végeztél a fenti lépésekkel, navigálj a mappába, ahol a NUSGet futtatható állomány található. Ez most három könyvtárat kell tartalmazzon a title ID-jukkal a fenti IOS és Wii menü fájloknak.

   ![](/images/desktop-apps/nusget/nusget-folder-wiimenu-alt.png)
7. Menj azokba a könyvtárakba, ahol titleID megegyezik a fentiekkel és keresd meg mindegyikben az WAD fájlt. Ezeket ki kell másolnod egy `wad` nevű mappába az SD kártyádon vagy USB drive-odon. Az eredménynek az alábbi fájlokat kell jelentenie a mappában:

   ![](/images/desktop-apps/nusget/nusget-copy-wiimenu-sd.png)
8. Ha felmásoltad mind a 3 WAD fájlt, add ki az SD kártyád/USB drive-od a PC-ből és tedd vissza a Wii-odba.

### II. rész – Telepítés

1. Kapcsold ki a konzolod. Tartsd nyomva a RESET gombot és kapcsold be.
2. A Priiloader menu-ben válaszd a `Homebrew Channel`-t.
   - Ha a Priiloader menu nem jelenik meg, [telepítsd azt rögtön](priiloader). A Priiloader szükséges ehhez az útmutatóhoz.
3. Idítsd el a YAWM ModMii Edition-t.
4. Válaszd ki az SD kártyád vagy az USD drive-od.
5. Nyomdj + jelet az IOS80-ra és az IOS58 WAD-ra, hogy kijelöld őket, majd nyomj A gombot kétszer a telepítésükhöz.
6. Navigálj a Wii Menu WAD-hoz és nyomj A gombot kétszer a telepítéshez.
7. Amikor a Priiloader megtartására kér, nyomd meg az A gombot a megerősítéshez.
8. A sikeres telepítést követően a nyomd meg a HOME gombot, hogy kilépj a Homebrew Channel-hez.

::: tip

[Kattints ide az oldal tartalomjegyzékhez való visszatéréshez.](site-navigation)

:::
