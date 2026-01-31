::::: tabs

:::: tab Wii

# Homebrew Channel și Instalare BootMii

:::details Technical Details (optional)

BootMii poate fi instalat în două moduri: direct pe o parte a bootloader-ului consolei Wii numit boot2 sau către un IOS. BootMii ca boot2 este preferat deoarece oferă o protecție anti-brick puternică, însă consolele Wii cu un boot1 vulnerabil care permite această instalare sunt destul de rare, acestea fiind fabricate înainte de 2009. In most cases, installing BootMii as IOS should be fine, as long as you also install [Priiloader](priiloader).

:::

::: warning

Dacă nu ai un card SD, nu poți instala sau folosi BootMii, indiferent că îl instalezi ca IOS sau boot2.

You can always [install it later](hackmii).

:::

## Instructions

1. Consola ta ar trebui să fie pornită și să afișeze Instalatorul HackMii din partea trecută a ghidului.

   - Vei vedea un ecran de avertizare pentru înșelăciune.

   ![](/images/hackmii/scam.png)

2. Așteaptă 30 de secunde pentru ca mesajul "Press 1 to continue" să apară, apoi apasă 1.

3. Select `Continue`.

   ![](/images/hackmii/test_results.png)

4. Select `Install the Homebrew Channel`.

   ![](/images/hackmii/hbc_install.png)

5. Once it is completed, select `Continue`.

   ![](/images/hackmii/hbc_install_ok.png)

6. Select `BootMii...`.

   ![](/images/hackmii/bootmii_install.png)

7. Select `Install BootMii as IOS`.

   ![](/images/hackmii/bootmii_install1.png)

   ![](/images/hackmii/bootmii_install2.png)

   ![](/images/hackmii/bootmii_install3.png)

   ![](/images/hackmii/bootmii_install_ok.png)

8. Once it is completed, select `Continue`.

9. If you have the option to `Install BootMii as boot2`, please do so as well.

   ![](/images/hackmii/bootmii_install4.png)

10. Select `Return to the main menu`, then select `Exit`.

11. Consola ta va rula Homebrew Channel.

    ![](/images/hbc/blank.png)

## Citire necesară

Acum poți să folosești Homebrew Channel pentru a rula aplicații homebrew cât și BootMii pentru a crea un backup și a restaura memoria ta NAND în cazul în care ai putut să-l instalezi.

Notă: Când instalezi aplicații homebrew pe cardul tău SD sau unitatea ta USB, structura dosarului tău ar trebui să arate astfel:

```
💾 SD Card or USB Drive
| ╸📁 apps
	| ╸📁 AppName1
		| ╸📄 boot.dol
		| ╸📄 meta.xml
		| ╸📄 icon.png
	| ╸📁 AppName2
		| ╸📄 boot.dol
		| ╸📄 meta.xml
		| ╸📄 icon.png
```

`AppName1` și `AppName2` sunt nume înlocuitoare. Nu crea mai multe dosare `apps` înăuntrul dosarului `apps` în sine.

### Wii: Următorii Pași

::: tip

[Continue to making a NAND Backup using BootMii](bootmii)

Making a NAND backup at this point is highly recommended, as they can be used to recover from bricks.

:::

::: tip

Sfat: Dacă un Wii are BootMii instalat ca boot2, unitatea de discuri va clipi foarte puțin în urma clipirii imediate care se întâmplă când apeși pe Butonul POWER.

:::
::::

:::: tab Wii mini

# Homebrew Channel

:::details Technical Details (optional)

Homebrew Channel este locul unde te duci pentru a rula aplicații homebrew.

:::

::: warning

Cât timp este posibil să instalezi BootMii pe un Wii mini, va trebui să sudezi un slot de carduri SD. Asta necesită dezasamblarea consolei tale Wii mini și folosirea unor unelte specializate, așa că nu este recomandat.

:::

## Instrucțiuni

1. Consola ta ar trebui să fie pornită și să afișeze Instalatorul HackMii din partea trecută a ghidului.

   - Vei vedea un ecran de avertizare pentru înșelăciune.

   ![](/images/hackmii/scam.png)

2. Așteaptă 30 de secunde pentru ca mesajul "Press 1 to continue" să apară, apoi apasă 1.

3. Select `Continue`.

   ![](/images/hackmii/test_results.png)

4. Select `Install the Homebrew Channel`.

   ![](/images/hackmii/hbc_install.png)

5. Once it is completed, select `Continue`

   ![](/images/hackmii/hbc_install_ok.png)

6. Select `Exit`.

7. Consola ta va rula Homebrew Channel.

   ![](/images/hbc/blank.png)

## Citire necesară

You can now use the Homebrew Channel to launch homebrew apps.

Note: When installing homebrew applications on your USB drive, your folder structure should look like this:

```
💾 USB Drive
| ╸📁 apps
	| ╸📁 AppName1
		| ╸📄 boot.dol
		| ╸📄 meta.xml
		| ╸📄 icon.png
	| ╸📁 AppName2
		| ╸📄 boot.dol
		| ╸📄 meta.xml
		| ╸📄 icon.png
```

`AppName1` și `AppName2` sunt nume înlocuitoare. Nu crea mai multe dosare `apps` înăuntrul dosarului `apps` în sine.

::: tip

### Additional options

::: tip

[Continue to making a NAND Backup using RealWnd](wnd-mini)

Making a NAND backup at this point is highly recommended, as they can be used to recover from bricks.

:::
::::
