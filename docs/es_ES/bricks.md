# Bloqueos

A "Brick" usually means your Wii has reached a state where, its only use is that of a literal <a href="https://wikipedia.org/wiki/Brick">brick</a>.

Bricks can occur for a variety of reasons, however usually it results through corrupted software, or from improper modifications made through homebrew.

# Prevención de bloqueos

Prevenir un bloqueo implica numerosas medidas que oscilan entre el sentido común y la realización de copias de seguridad. A continuación figuran las recomendaciones generales sobre lo que no se debe hacer:

- **Do NOT follow old modding tutorials, use old homebrew, or use video guides on the Internet unless it is EXPLICITLY RECOMMENDED by the homebrew developer.**
- **Do NOT, under ANY CIRCUMSTANCES, USE THE HOMEBREW APP `Pimp My Wii`. It is DANGEROUS and does things that have the ability to BRICK YOUR CONSOLE!**
- **Do NOT install IOS packs such as DARKCORP that overwrite most of your IOS with cIOS. It is DANGEROUS and heavily outdated.**
- **Do NOT restore NAND backups from other consoles!**
- **Do NOT install any IOS that isn't meant for your system** (example: Wii IOS on Wii mini)
- **Do NOT attempt region changing methods meant for Wii on the vWii or Wii mini**
- **Do NOT use a Nintendo Wi-Fi Connection service unless it is known to be RCE patched (such as [Wiimmfi](wiimmfi)). Doing otherwise could allow a malicious actor to BRICK your Console!**
- **Only install updates for your own region!**.
  - Installing updates from another region could have no effect at best, but result in a [Korean Kii/Error 003](bricks#korean-kiierror-003-brick) brick at worst. To prevent this from happening if you bought a pre-owned Wii, run [SysCheck](syscheck) to verify the original region of your console. Si la región es coreana, ten MUCHO CUIDADO al aplicar actualizaciones a la consola y considera la posibilidad de buscar asistencia para obtener más ayuda.
- **Do NOT delete or modify system files, install old versions of your Wii Menu or IOS, and do NOT install any system file mods unless you know what you are doing!**
  - An example of modifying files going wrong is replacing IOS80 on Wii mini, which may result in a [Wi-Fi Brick](bricks#wi-fi-brick).
- **Do NOT install homebrew from untrustworthy sources or if the source code is not available.**
  - Software on the [Open Shop Channel](osc) is safe.
  - Ya se han producido casos de software malintencionado para la Wii, mientras que otras aplicaciones simplemente están mal desarrolladas. Asegúrate de que sabes lo que estás instalando, e instala solo lo que necesites.
  - Corrupted or unstable forwarders for homebrew could cause a [banner brick](#banner-brick), so try to stick with loading homebrew from the Homebrew Channel unless you really want a forwarder.
- **Ensure that you know what you are doing when running homebrew apps - especially those with the ability to modify system files. Be ESPECIALLY careful when using applications such as:**
  - AnyTitle Deleter
  - AnyRegion Changer
  - KoreanKii (secondary cause of [Korean Kii/Error 003](bricks#korean-kiierror-003-brick) brick)
  - Desactualizadores del firmware
  - Cualquier otra aplicación que modifique archivos esenciales en la NAND
- **DO NOT TOUCH THE WII'S POWER SOURCE OR POWER BUTTONS WHEN INSTALLING OR MODIFYING CRITICAL SYSTEM CONTENT**.
  - Si tu corriente eléctrica es inestable (p. ej. una tormenta o un apagón), aplaza lo que estés haciendo hasta que tengas una fuente de alimentación estable.
  - This applies to dangerous processes such as BootMii NAND restoration, which could lead to a [full brick](#low-level-brick) if anything goes wrong.

En todo caso, siempre deberías:

- Tener BootMii instalado como boot2 si está disponible, de lo contrario como IOS.
- Tener Priiloader instalado independientemente del método de instalación de BootMii.
- Realizar una copia de seguridad de la NAND con BootMii y tener siempre a mano una de repuesto válida, especialmente antes de intentar algo arriesgado. Ten en cuenta que en algunos contextos de bloqueos no se podrá acceder a BootMii, así que planifica con antelación.

# Diagnóstico

This is a section intended to help you diagnose a potential brick, in order by least to most brick severity. If you seem to have a brick that isn't covered in this section or in the guide, please join the Nintendo Homebrew discord server for support.

- Wii menu brick Wii menu brick Ninguna aplicación funciona mal, la Configuración de Wii no tiene errores, todo parece estar correcto. No brick.
- Wii menu brick
  - If after acccessing a specific channel, you get `The system files are corrupted.`, see [banner brick](bricks#banner-brick).
  - If after accessing the Wii settings, you see an error that resembles the Opera web browser, see [semibrick](bricks#semibrick).
- La Wii arranca, ves la pantalla de salud y seguridad, pero al pulsar A para arrancar, ves una pantalla negra.
  - If this happened after installing a theme, see [theme brick](bricks#theme-brick).
  - If this happened after installing a WAD, see [banner brick](bricks#banner-brick).
  - If this randomly started happening, and you can access Maintenance Mode by holding +/- on the health/warning screen, see [mail brick](bricks#mail-brick).
- Wii starts, and you see the health/warning screen, but upon pressing A to start, the screen goes black and/or freezes and does not continue. Maintenance mode is accessible. See [mail brick](bricks#mail-brick).
- La Wii arranca, PERO INSTANTANEAMENTE aparece un error similar al del navegador web Opera. See [Wii Menu/Opera brick](bricks#wii-menuopera-brick).
- Error 003 See [Korean Kii/Error 003 brick](bricks#error-003-brick).
- No pasa nada, pantalla negra, PERO BootMii en el boot2 es accesible. See [IOS brick](bricks#ios-brick).
- No ocurre nada, pantalla en negro, PERO se puede encender la Wii con un mando de Wii o se puede acceder al modo de recuperación. See [Wi-Fi brick](bricks#wi-fi-brick).
- No ocurre nada, pantalla en negro. No se puede encender la Wii con el mando de Wii, no se puede iniciar el modo de recuperación y no se puede acceder a BootMii en el boot2. See [low-level brick](bricks#low-level-brick).

# Tipos de bloqueos

A continuación, se analizarán los distintos bloqueos de la Wii por orden de gravedad, con sus síntomas, causas y soluciones.

## Semibloqueo

### Síntomas

When navigating to Wii Settings, you instead get an error from the Opera web browser along the lines of `You tried to access the address (URL), which is currently unavailable.` In some cases, some parts of the Wii Settings menu may still be accessible, but other parts may not (such as the Country menu).

### Causas

Se produce un semibloqueo cuando se instala un menú de Wii o un tema de otra región. As the Wii Settings menu is rendered using HTML pages with Opera, themes often replace these pages and put them in different directories; essentially leading to a `404 Not Found` error but in the form of a console brick.

![](/images/bricks/semibrick.png)

### Soluciones

Comprueba en AnyRegion Changer que la región de tu consola es la misma que la del tema o menú de Wii que tienes instalado.

If this was caused by a theme you installed, use csm-installer to reinstall the original theme.

If this was caused by a Wii Menu WAD you installed, use [NUS Downloader](https://wiibrew.org/wiki/NUSD) to re-obtain your original Wii Menu.

::: danger

Ten cuidado al descargar la WAD del menú de Wii. Asegúrate de elegir la misma versión con la región correcta.

:::

If you are actually in the process of a region change, use [ARC-ME](https://github.com/modmii/Any-Region-Changer-ModMii-Edition/releases) to automatically fix all your region settings to match your Wii Menu.

## Bloqueo de banner

### Síntomas

Al intentar arrancar la Wii, aparece la pantalla de salud y seguridad y, al pulsar A, la pantalla continúa normalmente; sin embargo, pasado este punto, no ocurre nada y la Wii permanece en una pantalla negra. Esto ocurre después de instalar una WAD y reiniciar o volver al menú de Wii. Alternativamente, todavía se puede acceder al menú de Wii, pero al abrir el canal corrupto la consola se congela. En algunos casos, es posible que aparezca la pantalla "Los archivos de sistema están dañados".

![](/images/bricks/sysfiles-corrupted.jpg)

### Causas

Los bloqueos de banner ocurren si instalas un archivo WAD que tiene un banner o icono del menú de Wii inválido.

### Soluciones

If you are somehow able to still access the Wii Menu, go into the Homebrew Channel and use [YAWM ModMii Edition](yawmme) or your current WAD manager to uninstall the corrupt channel.

If you cannot access the Wii Menu, and have [Priiloader](priiloader) installed, enter it by holding RESET while turning your Wii on. Select Homebrew Channel, then use your WAD manager to uninstall the faulty WAD.

If you don't have Priiloader, Maintenance mode may be worth a try. Hold down `+` and `-` on the Health and Safety screen (do not press `A`!).

## Bloqueo de tema

### Síntomas

Al intentar arrancar la Wii, aparece la pantalla de salud y seguridad y, al pulsar A, la pantalla continúa normalmente; sin embargo, pasado este punto, no ocurre nada y la Wii permanece en una pantalla negra. Ocurre después de instalar un tema.

### Causas

El bloqueo de tema se produce cuando se instala un tema con un formato incorrecto.

### Soluciones

To resolve this issue, open HBC through Priiloader or BootMii as boot2 and access csm-installer to install a default theme such as the base Wii Menu theme. Alternatively, go into [YAWM ModMii Edition](yawmme) and install the CORRECT default Wii Menu WAD for your region and version.

## Bloqueo de correo

### Síntomas

Al intentar arrancar la Wii, aparece la pantalla de salud y seguridad y, al pulsar A, la pantalla continúa normalmente; sin embargo, pasado este punto, no ocurre nada y la Wii permanece en una pantalla negra. Maintenance mode is still accessible.

### Causas

A mail brick happens when your Wii has a lot of mail. This will make the Wii crash.

### Soluciones

By entering holding + and - on the warning screen, maintenance mode can be entered, where the Wii Message Board is not loaded at all. If the Homebrew Channel is not installed, follow [Bluebomb](bluebomb).

From here, the Homebrew Channel can be loaded and the brick can be fixed by deleting Wii Message Board data with [cdbackup](https://oscwii.org/library/app/cdbackup).

## Wii Menu brick

### Síntomas

When starting the Wii, you instead get an error from the Opera web browser along the lines of `You tried to access the address (URL), which is currently unavailable.` This will happen every time you start the Wii, and cannot be bypassed by any other means.

### Causas

This brick is a more fatal version of a [Semibrick](#semibrick). If your SYSCONF (system configuration file) gets corrupt or damaged, the Wii will regenerate it and start the setup phase.

Sin embargo, las páginas de la configuración inicial se encuentran en una ubicación similar a las páginas de Configuración de Wii. Si tienes un menú Wii o un tema de una región incorrecta, la consola Wii no podrá encontrarlos.

![](/images/bricks/sysmenu-brick.png)

### Soluciones

If you still have [Priiloader](priiloader), use it to enter the Homebrew Channel and re-install the original theme file/original Wii Menu.

In case you do not have Priiloader or your Wii is not modded, you can try [BlueBomb](bluebomb).

Alternatively, [Recovery Mode](recovery-mode) can be used to attempt a fix.

## KoreanKii/Error 003 Brick

### Síntomas

La pantalla se muestra como se indica a continuación en el arranque normal.

```
Error:003
unauthorized device has been detected.
```

![](/images/bricks/error-003.png)

### Causas

Al publicar la Wii en Corea, Nintendo cambió la clave de cifrado de estas consolas como un último esfuerzo para impedir el homebrew. While this failed at its intended goal, Nintendo also left a check in the System Menu versions 4.2/4.3 to determine whether or not the Korean Key is present on a system software region that is **not** Korean. While this failed at its intended goal, Nintendo also left a check in the System Menu versions 4.2/4.3 to determine whether or not the Korean Key is present on a system software region that is <strong x-id="1">not</strong> Korean.

This is usually an immediate follow-up to a Wii System Update on an unsuspecting region-changed Korean Wii.

### Soluciones

Como este bloqueo suele producirse después de las actualizaciones del menú de Wii, Priiloader no se encontrará presente. In the case that Priiloader is present, you can simply fix it by either installing the previous Wii System Menu or removing the key with the KoreanKii homebrew app.

Korean Wiis also released with Wii Menu 3.3, around the time that Nintendo [fixed the Trucha bug in boot1](https://wiibrew.org/wiki/3.3#Changes), so BootMii as Boot2 cannot be installed to or used on any Korean Wii.

While this leaves the Wii in a particularly dangerous situation, **it is still fixable**. This involves going into [Recovery Mode](recovery-mode), where an exploit can be triggered in order to gain access to the Homebrew Channel and revert the conditions that caused the brick. Note that you must have a drivechip in order for this method to work.

## Bloqueo de IOS

### Síntomas

Este bloqueo parecerá idéntico a uno total debido a un fallo del menú de Wii a través de la IOS; sin embargo, no existe una corrupción total de la NAND ni un fallo de hardware de bajo nivel.

### Causas

This brick most often happens when the Wii Menu's IOS is a [stub](http://wiibrew.org/wiki/Stub_IOS), or if the wrong kind of IOS is installed to the console. A stubbed system menu IOS is usually the consequence of attempting to downgrade your Wii menu. If this error began happening after installing a normal IOS80 to a Wii mini, see [Wi-Fi brick](bricks#wi-fi-brick).

### Soluciones

You must have BootMii as boot2 to fix this.

Puedes o restaurar una copia de seguridad de la NAND, o hacer esto:

1. Use [NUS Downloader](https://wiibrew.org/wiki/NUSD) to pack a WAD of your original Wii Menu.
2. Utiliza BootMii para entrar en el Canal Homebrew, y utiliza un gestor de WAD para instalar la WAD del menú de Wii.

For vWii, See [Recover a vWii IOS/Channel](https://wiiu.hacks.guide/#/recover-vwii-ioses-channels)

## Bloqueo de wifi

### Síntomas

The only way to fix this brick is a way to launch homebrew by launching a game through the Recovery Menu. It's only accessible if you take apart a GameCube controller to hold all 4 +Control Pad buttons down while the GameCube controller's plugged into the 4th slot on your Wii as it's turned on.

### Causas

Este problema surge cuando el módulo wifi (o Bluetooth) de la Wii se estropea o no está bien insertado. En estos casos, la Wii se queda atascada en una pantalla negra mientras espera una respuesta de la IOS.

This will also happen on the Wii Mini if you install a normal Wii IOS, because the Wii Mini doesn't have a Wi-Fi module.

### Soluciones

Para resolver este problema, puedes intentar volver a colocar o sustituir el módulo wifi/Bluetooth.

If you are on a Wii Mini, you must install a Wi-Fi module.

If both fail, see [low-level brick](bricks#low-level-brick).

## Bloqueo de bajo nivel

### Síntomas

Pantalla completamente negra, sin respuesta a la intervención del usuario. El modo de recuperación no se puede arrancar, tampoco BootMii como boot2 (o nunca ha existido en primer lugar), prácticamente la consola parece estar muerta.

### Causas

This brick occurs when boot1/boot2 is corrupt.

### Soluciones

En primer lugar, se debe determinar si el culpable es el hardware. En el orden indicado, haz lo siguiente:

- Asegúrate de que la consola Wii sigue funcionando (acepta discos con normalidad, el lector gira correctamente y los mandos de Wii se conectan) antes de seguir los siguientes pasos. If this is the case and only video is not being displayed, you may have a bad video cable, or an exceptionally rare failure of the video port or the GPU.
- If on a Wii mini, and if a normal IOS80 was installed, see [Wi-Fi brick](bricks#wi-fi-brick). Si los pasos para resolver el bloqueo de wifi no funcionan, continúa.
- Attempt to boot into [Recovery Mode](recovery-mode) (normal Wiis only). If the Wii boots into Recovery Mode, see [Wi-Fi brick](bricks#wi-fi-brick) or [IOS brick](bricks#ios-brick). If steps to resolve the Wi-Fi brick or IOS brick failed, proceed.
- Vuelve a colocar la unidad de disco e intenta arrancar normalmente. Si sigue sin funcionar, sustituye el lector de discos. Si sigue sin funcionar, continúa.
- Llegados a este punto, o hay una corrupción de bajo nivel en boot0/boot1, un fallo del chip de la NAND, o un fallo de hardware en general desconocido. Pide ayuda en línea o compra otra Wii.

::: tip

[Click here to go back to the site index.](site-navigation)

:::
