# BootMii Backup

BootMii ermöglicht das Sichern und Wiederherstellen des NAND-Speichers von deiner Wii.
Auf dieser Seite erfährst du, wie du den NAND deiner Wii auf einer SD-Karte sicherst, die du dann beliebig verwenden kannst.

::: warning

Du benötigst eine **SD-Karte**, um BootMii überhaupt nutzen zu können, aber besonders, wenn du ein NAND-Backup machen möchtest. Wenn du momentan keine SD-Karte zur Hand hast, kannst du diese Seite überspringen, aber es ist HÖCHSTENS EMPFOHLEN, später auf diese Seite zurückzukehren, um dein NAND zu sichern.

:::

## Anforderungen

- Eine SD-Karte mit mindestens 512MB freiem Speicherplatz (1GB oder mehr empfohlen)

## Anleitung

::: info

Wenn du BootMii als boot2 installiert hast, musst du die Konsole neu starten, um BootMii zu starten. Überspringe Schritt 1 und 2 in diesem Fall.

:::

1. Schalte deine Konsole ein.

2. Launch the Homebrew Channel, and launch the Load Priiloader app.

3. Press the HOME Button, then select "Launch BootMii".

    ![](/images/bootmii/BootMii_HBC.png)

    ::: warning

    Wenn die `Launch BootMii`-Schaltfläche nicht im Homebrewkanal erscheint, [starte den HackMii-Installer nochmal](hackmii) und installiere BootMii.

    :::

    ::: warning

    If the screen stays black and the blue disc drive light is blinking, you are missing the BootMii files on your SD card. Lade [diese Zip-Datei](/assets/files/bootmii_sd_files.zip) herunter und extrahiere sie in das Stammverzeichnis deiner SD-Karte, dann versuche es erneut.

    :::

4. Du solltest ein ähnliches Bild wie unten auf deinem Bildschirm sehen:

    ![](/images/bootmii/BootMii_Main.png)

    ::: info

    BootMii zu navigieren ist nicht möglich mit einer Wii-Fernbedienung.
    Du musst die Tasten POWER und RESET auf deiner Konsole oder einen GameCube Controller verwenden, der an Port 1 angeschlossen ist.
    Um zwischen Optionen zu navigieren, drücke POWER. Um eine Option auszuwählen, drücke RESET.

    :::

5. Select the Options button (the icon with the gears).

    ![](/images/bootmii/BootMii_Gears.png)

6. Wähle den ersten Button links.

    ![](/images/bootmii/BootMii_Backup.png)

7. Ein NAND-Backup wird gestartet. Du kannst den Fortschritt am Bildschirm verfolgen.

    - "Bad Blocks" are normal. Keine Sorge, wenn du einige auf einem NAND Backup siehst.

    ![](/images/bootmii/BootMii_NAND_Backup.png)

8. After this step, it will verify the backup. Idealerweise sollten alle Blöcke nach dem Überprüfungsprozess grün sein.

    - Wenn du 'Factory bad blocks' (schlechte Werkblöcke) mit 'Uncorrectable pages' (nicht korrigierbare Seiten) hast, können diese Blöcke möglicherweise nicht verifiziert werden. Solange alle nicht-schlechte Blöcke erfolgreich verifiziert wurden, sollte alles gut sein.

    ![](/images/bootmii/BootMii_NAND_Backup_Verify.png)

9. To exit BootMii, press the Back button (the one with the arrow) and then you can press either the Wii Menu button or the Homebrew Channel button to exit where you want to.

    ![](/images/bootmii/BootMii_Return.png)

::: info

Hinweis: **ein NAND-Backup wiederherzustellen ist meistens die letzte Lösung**. Es gibt oft bessere Wege, deine Konsole zu entbricken.

Versuche dein Bestes, um [deine Brick-Bedingung zu identifizieren](bricks) und rückgängig zu machen, was sie an erster Stelle verursacht hat.

Um aus einem NAND-Backup auf deiner SD-Karte wiederherzustellen, folge die Anleitung für [RestoreMii](bootmiirecover).
**Family Edition Wiis (Wiis ohne GameCube-Anschlüsse) KÖNNEN KEINE NAND-Backups ohne Hardware-Modifikation wiederherstellen.**

:::

::: info

Zwei Dateien wurden im Stammverzeichnis deiner SD-Karte erstellt: `nand.bin` und `keys.bin`. `nand.bin` ist der interne Speicher deiner Wii, während `keys.bin` die Schlüssel deiner Konsole sind.

:::

## Autobooten

Wenn du BootMii als boot2 installieren konntest, aber beim Einschalten der Wii nicht jedes Mal den BootMii-Bildschirm laden möchtest, hast du die Möglichkeit, den Autoboot-Vorgang zum Systemmenü einzustellen. Dadurch solltest du nicht einmal bemerken, dass du BootMii als boot2 installiert hast.

1. Öffne `SD:/bootmii/bootmii.ini` mit einem Texteditor, wie Notepad.
2. Ändere `#AUTOBOOT=SYSMENU` zu `AUTOBOOT=SYSMENU` indem du `#` entfernst.
3. Ändere dann `#BOOTDELAY=5` zu `BOOTDELAY=1` indem du `#` entfernst und die `5` in eine `1` verwandelst.
4. Speichere die Datei und beende.

::: info

Du kannst auch die [BootMii Config Editor](https://oscwii.org/library/app/BootMiiConfigurationEditor) App in der Wii verwenden, um diese Einstellungen zu ändern.

:::

## NAND-Backup zu Dolphin Emulator hochladen

Dein NAND-Backup kann in Dolphin Emulator verwendet werden.

1. Get the latest beta or development release of Dolphin Emulator from the [Dolphin Website](https://dolphin-emu.org/) and install it to your device.
2. Open Dolphin Emulator.
3. Click on the `Tools` tab, scroll down to `Manage NAND`, then select `Import BootMii NAND backup...`.
4. Locate the `nand.bin` found on the root of your SD card and select Open.
5. If it asks for a `keys.bin`, locate it on the root of your SD and select Open.

::: tip

[Continue to Priiloader Installation](priiloader)

Priiloader adds a secondary level of brick protection, and is highly recommended even if BootMii was installed as boot2. Es ist besonders wichtig für Benutzer von BootMii auf IOS.

:::
