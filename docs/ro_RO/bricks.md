# Brick-uri

Un "Brick" de obicei înseamnă că sistemul tău Wii a ajuns într-un stadiu unde sunt șanse mari ca următorul său motiv de a exista este ca un opritor de uși, sau pentru display.

Bricks can occur for a variety of reasons, however usually it results through corrupted software, or from improper modifications made through homebrew.

# Prevenirea Brick-urilor

Prevenirea unui brick implică multe reguli care variază între gândire logică și backup-uri de rezervă. Iată recomandările generale referitoare la ce să nu faci:

- **Do NOT follow old modding tutorials, use old homebrew, or use video guides on the Internet unless it is EXPLICITLY RECOMMENDED by the homebrew developer.**
- **Do NOT, under ANY CIRCUMSTANCES, USE THE HOMEBREW APP `Pimp My Wii`. It is DANGEROUS and does things that have the ability to BRICK YOUR CONSOLE!**
- **Do NOT install IOS packs such as DARKCORP that overwrite most of your IOS with cIOS. It is DANGEROUS and heavily outdated.**
- **Do NOT restore NAND backups from other consoles!**
- **Do NOT install any IOS that isn't meant for your system** (example: Wii IOS on Wii mini)
- **Do NOT attempt region changing methods meant for Wii on the vWii or Wii mini**
- **Do NOT use a Nintendo Wi-Fi Connection service unless it is known to be RCE patched (such as [Wiimmfi](wiimmfi)). Doing otherwise could allow a malicious actor to BRICK your Console!**
- **Only install updates for your own region!**.
  - Installing updates from another region could have no effect at best, but result in a [Korean Kii/Error 003](bricks#korean-kiierror-003-brick) brick at worst. To prevent this from happening if you bought a pre-owned Wii, run [SysCheck](syscheck) to verify the original region of your console. Dacă este Coreean, fii EXTREM de atent când aplici actualizări de sistem în consola ta și consideră solicitarea de ajutor pentru asistență suplimentară.
- **Do NOT delete or modify system files, install old versions of your Wii Menu or IOS, and do NOT install any system file mods unless you know what you are doing!**
  - An example of modifying files going wrong is replacing IOS80 on Wii mini, which may result in a [Wi-Fi Brick](bricks#wi-fi-brick).
- **Do NOT install homebrew from untrustworthy sources or if the source code is not available.**
  - Software on the [Open Shop Channel](osc) is safe.
  - Au existat incidente de aplicații malițioase dezvoltate pentru Wii în trecut, în timp ce unele aplicații sunt doar prost dezvoltate. Asigură-te că știi ce instalezi și că instalezi doar de ce ai nevoie.
  - Corrupted or unstable forwarders for homebrew could cause a [banner brick](#banner-brick), so try to stick with loading homebrew from the Homebrew Channel unless you really want a forwarder.
- **Ensure that you know what you are doing when running homebrew apps - especially those with the ability to modify system files. Be ESPECIALLY careful when using applications such as:**
  - AnyTitle Deleter
  - AnyRegion Changer
  - KoreanKii (secondary cause of [Korean Kii/Error 003](bricks#korean-kiierror-003-brick) brick)
  - Retrogradările de firmware
  - Orice altă aplicație care modifică fișiere NAND critice
- **DO NOT TOUCH THE WII'S POWER SOURCE OR POWER BUTTONS WHEN INSTALLING OR MODIFYING CRITICAL SYSTEM CONTENT**.
  - Dacă electricitatea este instabilă (ex. furtună, pană de curent), amână ce vrei să faci până când ai o sursă de curent stabilă.
  - This applies to dangerous processes such as BootMii NAND restoration, which could lead to a [full brick](#low-level-brick) if anything goes wrong.

În orice caz, ar trebui cu siguranță:

- Să ai BootMii instalat ca boot2 dacă este disponibil, altfel ca IOS.
- Să ai Priiloader instalat indiferent de metoda de instalare BootMii.
- Să creezi un backup a memoriei NAND cu BootMii și să ai mereu la îndemână o copie validă de rezervă, dar mai ales înainte să încerci ceva riscant. Ține minte că în unele scenarii de brick, BootMii nu este accesibil, așa că planifică din timp.

# Diagnostic

Aceasta este o secțiune menită să te ajute să diagnostichezi un brick potențial, în ordine de la cel mai puțin la cel mai sever. Dacă pare că ai un brick care nu este acoperit de aceasta secțiune sau de ghid, te rugăm să te alături serverului de Discord Nintendo Homebrew pentru ajutor.

- Consola pornește și continuă la Meniul Wii. Nici o aplicație nu este defectă, setările Wii nu au erori, totul pare să fie în regulă. Niciun brick.
- Consola pornește și continuă la Meniul Wii.
  - If after acccessing a specific channel, you get `The system files are corrupted.`, see [banner brick](bricks#banner-brick).
  - If after accessing the Wii settings, you see an error that resembles the Opera web browser, see [semibrick](bricks#semibrick).
- Consola pornește, vezi ecranul de sănătate/avertizare, dar odată ce apeși A pentru a începe, vezi un ecran negru.
  - If this happened after installing a theme, see [theme brick](bricks#theme-brick).
  - If this happened after installing a WAD, see [banner brick](bricks#banner-brick).
  - If this randomly started happening, and you can access Maintenance Mode by holding +/- on the health/warning screen, see [mail brick](bricks#mail-brick).
- Consola pornește și vezi ecranul de sănătate/avertizare, dar odată ce apeși A pentru a începe, ecranul rămâne negru și/sau îngheață și nu continuă. Modul de mentenanță este accesibil. See [mail brick](bricks#mail-brick).
- Consola pornește, DAR INSTANT vezi o eroare care seamănă cu browserul web Opera. See [Wii Menu/Opera brick](bricks#wii-menuopera-brick).
- Error 003. See [Korean Kii/Error 003 brick](bricks#error-003-brick).
- Nimic nu se întâmplă, ecran negru, DAR BootMii ca boot2 este accesibil. See [IOS brick](bricks#ios-brick).
- Nimic nu se întâmplă, ecran negru, DAR consola Wii poate fi pornită cu un Wiimote/Recovery Mode poate fi accesat. See [Wi-Fi brick](bricks#wi-fi-brick).
- Nimic nu se întâmplă, ecran negru. Consola nu poate fi pornită cu un Wiimote, Recovery Mode nu poate fi pornit și BootMii ca boot2 nu este accesibil. See [low-level brick](bricks#low-level-brick).

# Tipuri de Brick

Aici, diferitele tipuri de brick-uri Wii vor fi discutate în ordinea severității cu simptome, cauze și soluții.

## Semibrick

### Simptome

When navigating to Wii Settings, you instead get an error from the Opera web browser along the lines of `You tried to access the address (URL), which is currently unavailable.` In some cases, some parts of the Wii Settings menu may still be accessible, but other parts may not (such as the Country menu).

### Cauze

Un semibrick apare atunci când un Meniu Wii sau o temă de fundal dintr-o regiune diferită este instalată. As the Wii Settings menu is rendered using HTML pages with Opera, themes often replace these pages and put them in different directories; essentially leading to a `404 Not Found` error but in the form of a console brick.

![](/images/bricks/semibrick.png)

### Soluții

Verifică în AnyRegion Changer dacă regiunea consolei tale este aceeași cu tema sau cu Meniul Wii pe care îl ai instalat.

Dacă acest lucru a fost cauzat de o temă de fundal pe care ai instalat-o, folosește csm-installer pentru a reinstala tema originală.

If this was caused by a Wii Menu WAD you installed, use [NUS Downloader](https://wiibrew.org/wiki/NUSD) to re-obtain your original Wii Menu.

::: danger

Ai grijă când descarci fișierul WAD de Meniu Wii. Asigură-te că alegi aceeași versiune cu regiunea corectată.

:::

If you are actually in the process of a region change, use [ARC-ME](https://github.com/modmii/Any-Region-Changer-ModMii-Edition/releases) to automatically fix all your region settings to match your Wii Menu.

## Brick de banner

### Simptome

După ce pornești consola Wii, ecranul de avertizare/apasă A apare, iar când A este apăsat, ecranul continuă normal, însă dincolo de acest punct nimic nu se întâmplă și consola rămâne pe un ecran negru. Acest lucru s-a întâmplat după ce ai instalat un fișier WAD și ai repornit consola sau te-ai întors în Meniul Wii. Altfel, Meniul Wii încă poate fi accesat dar deschiderea canalului defect rezultă în înghețarea consolei. În unele cazuri, este posibil să vezi ecranul "System files are corrupted".

![](/images/bricks/sysfiles-corrupted.jpg)

### Cauze

Brick-urile de banner apar dacă instalezi un fișier WAD care are un banner sau iconiță de Meniu Wii invalidă.

### Soluții

If you are somehow able to still access the Wii Menu, go into the Homebrew Channel and use [YAWM ModMii Edition](yawmme) or your current WAD manager to uninstall the corrupt channel.

If you cannot access the Wii Menu, and have [Priiloader](priiloader) installed, enter it by holding RESET while turning your Wii on. Alege Homebrew Channel, apoi dezinstalează canalul defect.

Dacă nu ai sau nu poți accesa Priiloader, poți încerca să intri în Maintenance mode. Hold down `+` and `-` on the Health and Safety screen (do not press `A`!).

## Brick de temă

### Simptome

După ce pornești consola Wii, ecranul de avertizare/apasă A apare, iar când A este apăsat, ecranul continuă normal, însă dincolo de acest punct nimic nu se întâmplă și consola rămâne pe un ecran negru. Acest lucru s-a întâmplat după ce ai instalat o temă de fundal.

### Cauze

Un brick de temă apare atunci când o temă de fundal formatată greșit este instalată.

### Soluții

Pentru a repara această problemă, deschide HBC folosind Priiloader sau BootMii ca boot2 și accesează csm-installer pentru a instala o temă prestabilită precum temă de bază a Meniului Wii. Alternatively, go into [YAWM ModMii Edition](yawmme) and install the CORRECT default Wii Menu WAD for your region and version.

## Brick de mail

### Simptome

După ce pornești consola Wii, ecranul de avertizare/apasă A apare, iar când A este apăsat, ecranul continuă normal, însă dincolo de acest punct nimic nu se întâmplă și consola rămâne pe un ecran negru. Maintenance mode încă este accesibil.

### Cauze

Un brick de mail apare atunci când un Wii are mai mult mail decât poate face față sau când mail defect se află în Wii Message Board, cauzând o înghețare a sistemului odată ce o pornești normal. Pentru că Wii Message Board este mereu afișat sub canalele Wii, asta cauzează Meniul Wii să eșueze înainte să se încarce complet.

### Soluție

Dacă ții apăsat + și - pe ecranul de avertizare, maintenance mode poate fi accesat, unde Wii Message Board-ul nu este încărcat deloc. If the Homebrew Channel is not installed, follow [Bluebomb](bluebomb).

From here, the Homebrew Channel can be loaded and the brick can be fixed by deleting Wii Message Board data with [cdbackup](https://oscwii.org/library/app/cdbackup).

## Brick de Wii Menu/Opera

### Simptome

When starting the Wii, you instead get an error from the Opera web browser along the lines of `You tried to access the address (URL), which is currently unavailable.` This will happen every time you start the Wii, and cannot be bypassed by any other means.

### Cauze

This brick is a more fatal version of a [Semibrick](#semibrick). Dacă fișierul SYSCONF (fișier de configurare a sistemului) este corupt sau eronat, consola o va regenera și va începe faza de configurare inițială.

Însă, paginile de configurare sunt într-o locație similară cu paginile de setări Wii. Dacă ai un Meniu Wii sau o temă de fundal cu regiunea incorectă, consola nu le poate găsi.

![](/images/bricks/sysmenu-brick.png)

### Soluții

If you still have [Priiloader](priiloader), use it to enter the Homebrew Channel and re-install the original theme file/original Wii Menu.

In case you do not have Priiloader or your Wii is not modded, you can try [BlueBomb](bluebomb).

Alternatively, [Recovery Mode](recovery-mode) can be used to attempt a fix.

## Brick KoreanKii/Error 003

### Simptome

Ecranul afișează mesajul de mai jos dupa ce pornești consola.

```
Error:003
unauthorized device has been detected.
```

![](/images/bricks/error-003.png)

### Cauze

Când au lansat consolele Wii Coreene, Nintendo a schimbat cheia de criptare pentru aceste unități ca o ultimă încercare de a preveni instalarea homebrew-ului. While this failed at its intended goal, Nintendo also left a check in the System Menu versions 4.2/4.3 to determine whether or not the Korean Key is present on a system software region that is **not** Korean. Dacă această verificare are succes, eroarea este declanșată și consola Wii este practic blocată.

Acest lucru este de obicei o continuare imediată a unei actualizări a sistemului Wii pe un Wii Coreean căruia i-a fost schimbată regiunea.

### Soluții

Deoarece acest brick apare cel mai des în urma unei actualizări a Meniului Wii, Priiloader nu va fi instalat. În cazul în care Priiloader este prezent, poți să-l repari instalând Meniul de Sistem Wii anterior sau eliminând cheia cu aplicația homebrew KoreanKii.

Korean Wiis also released with Wii Menu 3.3, around the time that Nintendo [fixed the Trucha bug in boot1](https://wiibrew.org/wiki/3.3#Changes), so BootMii as Boot2 cannot be installed to or used on any Korean Wii.

While this leaves the Wii in a particularly dangerous situation, **it is still fixable**. This involves going into [Recovery Mode](recovery-mode), where an exploit can be triggered in order to gain access to the Homebrew Channel and revert the conditions that caused the brick. Ține minte că ai nevoie de un drivechip pentru ca această metodă să funcționeze.

## Brick de IOS

### Simptome

Acest brick pare să fie identic cu un brick de nivel adânc datorită eșuării Meniului Wii din cauza unui IOS; însă acesta nu este o corupere completă de nivel adânc a memoriei NAND sau o defecțiune de nivel adânc a componentelor sistemului.

### Cauze

This brick most often happens when the Wii Menu's IOS is a [stub](http://wiibrew.org/wiki/Stub_IOS), or if the wrong kind of IOS is installed to the console. Un IOS stub pentru system menu este de obicei consecința încercării de a face downgrade la Wii menu. If this error began happening after installing a normal IOS80 to a Wii mini, see [Wi-Fi brick](bricks#wi-fi-brick).

### Soluții

You must have BootMii as boot2 to fix this.

Poți să restaurezi un backup al memoriei NAND sau să faci asta:

1. Use [NUS Downloader](https://wiibrew.org/wiki/NUSD) to pack a WAD of your original Wii Menu.
2. Folosește BootMii pentru a intra în Homebrew Channel și folosește un manager WAD pentru a instala fișierul WAD de Meniu Wii.

For vWii, See [Recover a vWii IOS/Channel](https://wiiu.hacks.guide/#/recover-vwii-ioses-channels)

## Brick de Wi-Fi

### Simptome

Acest brick pare identic cu un brick de nivel adânc, însă încă poți să îți pornești consola cu un Wiimote și încă poți să intri în Recovery Mode pe un Wii de revizie originală.

### Cauze

Acest brick apare atunci când modulul Wi-Fi (sau Bluetooth) al consolei tale Wii este defect sau nu este introdus cum trebuie. În astfel de cazuri, consola Wii rămâne blocată pe un ecran negru așteptând un răspuns de la IOS.

Acest lucru de asemenea se va întâmpla pe un Wii mini dacă instalezi un IOS de Wii normal deoarece consola Wii mini nu are un modul Wi-Fi.

### Soluții

Pentru a rezolva această problemă, poți încerca să reintroduci sau să înlocuiești modulul Wi-Fi/Bluetooth.

Dacă ai un Wii mini, trebuie să instalezi un modul Wi-fi.

If both fail, see [low-level brick](bricks#low-level-brick).

## Brick de nivel adânc

### Simptome

Ecran complet negru, niciun răspuns la nicio acțiune. Recovery Mode nu poate fi inițializat și nici BootMii ca boot2 (sau dacă n-a existat deloc), în esență consola pare moartă.

### Cauze

Acest brick apare când boot1/boot2 sunt defecte sau dacă există defecțiuni de hardware.

### Soluții

În primul rând, trebuie să determinăm dacă problema este legată de hardware. În ordinea listată, urmează acești pași:

- Testează să verifici dacă sistemul Wii încă funcționează (acceptă discuri normal, cititorul de discuri se rotește corect, controlerele Wiimote se conectează) înainte de a încerca următorii pași. Dacă acesta este cazul și doar nu este afișată imaginea video, s-ar putea să ai un cablu video defect sau o defecțiune foarte rară a portului video sau a plăcii video.
- If on a Wii mini, and if a normal IOS80 was installed, see [Wi-Fi brick](bricks#wi-fi-brick). Dacă pașii pentru repararea brick-ului de Wi-Fi au eșuat, continuă.
- Attempt to boot into [Recovery Mode](recovery-mode) (normal Wiis only). If the Wii boots into Recovery Mode, see [Wi-Fi brick](bricks#wi-fi-brick) or [IOS brick](bricks#ios-brick). Dacă pașii pentru repararea brick-ului de Wi-Fi sau brick-ului de IOS au eșuat, continuă.
- Reintrodu unitatea de discuri și încearcă să pornești consola normal. Dacă nu a funcționat, înlocuiește unitatea de discuri. Dacă tot nu a funcționat, continuă.
- În acest stadiu, problema este ori o corupere de nivel adânc de boot0/boot1, o defecțiune a chipului NAND sau o defecțiune a unei alte componente interne. Consideră cererea în ajutor online sau cumpărarea altui Wii.

::: tip

[Click here to go back to the site index.](site-navigation)

:::
