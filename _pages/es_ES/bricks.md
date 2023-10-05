---
title: "Bloqueos"
---

{% include toc title="Índice" %}

Un bloqueo (en inglés "brick", ladrillo) suele significar que la Wii ha acabado siendo útil para poco más que para sujetar la puerta o como objeto de exposición. <br> Los bloqueos pueden ocurrir por una variedad de motivos, aunque normalmente se producen por software dañado, o por modificaciones hechas de forma incorrecta a través de homebrew.

# Prevención de bloqueos

Prevenir un bloqueo implica numerosas medidas que oscilan entre el sentido común y la realización de copias de seguridad. A continuación figuran las recomendaciones generales sobre lo que no se debe hacer:

+ **NO sigas tutoriales antiguos para modificar la Wii, ni utilices homebrew antiguo, ni sigas guías en vídeo de Internet a menos que el desarrollador de ese homebrew en particular lo recomiende EXPLÍCITAMENTE.
+ NO utilices, bajo NINGUNA CIRCUNSTANCIA, la app de homebrew `Pimp My Wii`. Es PELIGROSA y tiene la capacidad de BLOQUEAR LA Wii.
+ **NO restaures copias de seguridad de la NAND de otras consolas.**
+ **NO utilices ningún servicio para la Conexión Wi-Fi de Nintendo a menos que esté parcheado contra RCE o ejecución remota de código (ej. Wiimmfi). Doing otherwise could allow a malicious actor to BRICK your Wii!
+ **Instala solo las actualizaciones de la región correspondiente.**
    + Instalar actualizaciones de otra región en el mejor de los casos no tendrá ningún efecto, y en el peor provocará un bloqueo [Korean Kii/Error 003](bricks#korean-kiierror-003-brick). Si has comprado una Wii de segunda mano, ejecuta [SysCheck](syscheck) para comprobar la región original de tu consola y evitar que esto ocurra. Si la región es coreana, ten MUCHO CUIDADO al aplicar actualizaciones a la consola y considera la posibilidad de buscar asistencia para obtener más ayuda.
+ **NO elimines ni modifiques los archivos del sistema, y NO instales ninguna modificación de los mismos a menos que sepas lo que estás haciendo.
    + Un ejemplo de una modificación de archivos que sale mal es sustituir IOS80 en la Wii mini, lo que puede producir un [bloqueo de Wi-Fi](bricks#wi-fi-brick).
+ **NO instales homebrew de páginas no fiables o si el código fuente no está disponible.**
    + El software del [Open Shop Channel](osc) es seguro.
    + Ya se han producido casos de software malintencionado para la Wii, mientras que otras aplicaciones simplemente están mal desarrolladas. Asegúrate de que sabes lo que estás instalando, e instala solo lo que necesites.
    + Si los redireccionadores de homebrew están dañados o son inestables pueden provocar un [bloqueo de banner](#banner-brick), así que intenta cargar homebrew desde el Canal Homebrew a menos que quieras particularmente un redireccionador.
+ **Asegúrate de que sabes lo que haces cuando ejecutes aplicaciones homebrew, especialmente las que pueden modificar archivos del sistema.**
+ **Ten ESPECIAL cuidado cuando utilices aplicaciones como:**
    + AnyTitle Deleter
    + AnyRegion Changer
    + KoreanKii (causa secundaria del bloqueo [Korean Kii/Error 003](bricks#korean-kiierror-003-brick))
    + Desactualizadores del firmware
    + Cualquier otra aplicación que modifique archivos esenciales en la NAND
+ **NO TOQUES LA FUENTE DE ALIMENTACIÓN O LOS BOTONES DE DE LA Wii CUANDO INSTALES O MODIFIQUES CONTENIDOS ESENCIALES DE LA CONSOLA**.
    + Si tu corriente eléctrica es inestable (p. ej. una tormenta o un apagón), aplaza lo que estés haciendo hasta que tengas una fuente de alimentación estable.
    + Esto se aplica a procesos peligrosos como la restauración de la NAND de BootMii, que podría llevar a un [bloqueo total](#low-level-brick) si algo sale mal.

En todo caso, siempre deberías:
+ Tener BootMii instalado como boot2 si está disponible, de lo contrario como IOS.
+ Tener Priiloader instalado independientemente del método de instalación de BootMii.
+ Realizar una copia de seguridad de la NAND con BootMii y tener siempre a mano una de repuesto válida, especialmente antes de intentar algo arriesgado. Ten en cuenta que en algunos contextos de bloqueos no se podrá acceder a BootMii, así que planifica con antelación.

# Diagnóstico

A continuación encontrarás una pequeña sección con una lista de pasos similares al proceso de arranque de la Wii y enlaces al bloqueo dependiendo de lo que falle.

+ Enciende la Wii.
+ No ocurre nada, pantalla en negro. No se puede encender la Wii con el mando de Wii, no se puede iniciar el modo de recuperación y no se puede acceder a BootMii en el boot2. Se trata de un [bloqueo total](bricks#low-level-brick).
+ No ocurre nada, pantalla en negro, PERO se puede encender la Wii con un mando de Wii o se puede acceder al modo de recuperación. Se trata de un [bloqueo de wifi](bricks#wi-fi-brick).
+ No pasa nada, pantalla negra, PERO BootMii en el boot2 es accesible. Se trata de un [bloqueo de IOS](bricks#ios-brick).
+ Error 003. Se trata de un [bloqueo de Korean Kii/Error 003](bricks#error-003-brick).
+ La Wii arranca, PERO INSTANTANEAMENTE aparece un error similar al del navegador web Opera. Se trata de un [bloqueo del menú de Wii / Opera](bricks#wii-menuopera-brick).
+ La Wii arranca, ves la pantalla de salud y seguridad, pero al pulsar A para arrancar, la pantalla se queda en negro y/o se congela y no continúa. El modo de mantenimiento es accesible. Se trata de un [bloqueo del correo](bricks#mail-brick).
+ La Wii arranca, ves la pantalla de salud y seguridad, pero al pulsar A para arrancar, ves una pantalla negra.
    + Si esto ocurre después de instalar un tema, se trata de un [bloqueo de tema](bricks#theme-brick).
    + Si esto ocurre después de instalar una WAD, se trata de un [bloqueo de banner](bricks#banner-brick).
    + Si ha empezado a ocurrir de la nada, y puedes acceder al modo de mantenimiento manteniendo pulsado +/- en la pantalla de salud y seguridad, se trata de un [bloqueo del correo](bricks#mail-brick).
+ La Wii se inicia y avanza hasta el menú de Wii.
    + Si después de acceder a un canal en concreto, ves `Los archivos de sistema están dañados.`, se trata de un [bloqueo de banner](bricks#banner-brick).
    + Si al acceder a la Configuración de Wii, aparece un error similar al del navegador web Opera, se trata de un [semibloqueo](bricks#semibrick).
+ La Wii se inicia y avanza hasta el menú de Wii. Ninguna aplicación funciona mal, la Configuración de Wii no tiene errores, todo parece estar correcto. A menos que tengas algún otro tipo de error o bloqueo que no entre dentro de este ámbito (que si lo tienes, deberías acudir a pedir asistencia), todo está correctamente.

# Tipos de bloqueos

A continuación, se analizarán los distintos bloqueos de la Wii por orden de gravedad, con sus síntomas, causas y soluciones.

## Semibloqueo

#### Síntomas
Al acceder a la Configuración de Wii, aparece un error en el navegador web Opera del tipo `You tried to access the address (URL), which is currently unavailable.` En algunos casos, es posible que algunas partes del menú Configuración de Wii sigan siendo accesibles, pero otras no (como el menú de selección de país).

#### Causas
Se produce un semibloqueo cuando se instala un menú de Wii o un tema de otra región. Como el menú Configuración de Wii se muestra mediante páginas HTML con Opera, los temas a menudo sustituyen estas páginas y las colocan en directorios diferentes, lo que esencialmente conduce a un error `404 No Encontrado` pero en forma de bloqueo de la consola.

![Semibloqueo](/images/bricks/semibrick.png)

#### Soluciones
Comprueba en AnyRegion Changer que la región de tu consola es la misma que la del tema o menú de Wii que tienes instalado.

Si la causa ha sido un tema que has instalado, utiliza MyMenuifyMod para reinstalar el archivo de tema original.

Si la causa ha sido una WAD del menú de Wii que has instalado, utiliza [NUS Downloader](https://wiibrew.org/wiki/NUSD) para obtener el menú de Wii original.

Ten cuidado al descargar la WAD del menú de Wii. Asegúrate de elegir la misma versión con la región correcta.
{: .notice--danger}

Si estás en pleno proceso de cambio de región, utiliza [ARC-ME](https://github.com/modmii/Any-Region-Changer-ModMii-Edition/releases) para arreglar automáticamente todos tus ajustes de región para que coincidan con el menú de Wii.

## Bloqueo de banner

#### Síntomas
Al intentar arrancar la Wii, aparece la pantalla de salud y seguridad y, al pulsar A, la pantalla continúa normalmente; sin embargo, pasado este punto, no ocurre nada y la Wii permanece en una pantalla negra. Esto ocurre después de instalar una WAD y reiniciar o volver al menú de Wii. Alternativamente, todavía se puede acceder al menú de Wii, pero al abrir el canal corrupto la consola se congela. In some cases, you may see the "System files are corrupted" screen.

![System files are corrupted](/images/bricks/sysfiles-corrupted.jpg)

#### Causas
Banner bricks occur if you install a WAD file that has an invalid Wii Menu banner or icon.

#### Soluciones
If you are somehow able to still access the Wii Menu, go into the Homebrew Channel and use [YAWM ModMii Edition](yawmme) or your current WAD manager to uninstall the corrupt channel.

If you cannot access the Wii Menu, and have [Priiloader](priiloader) installed, enter it by holding RESET while turning your Wii on. Select Homebrew Channel, then uninstall the corrupt channel.

If you don't have or can't access Priiloader, Maintenance mode may be worth a try. Hold down `+` and `-` on the Health and Safety screen (do not press `A`!).

## Theme brick

#### Síntomas

Al intentar arrancar la Wii, aparece la pantalla de salud y seguridad y, al pulsar A, la pantalla continúa normalmente; sin embargo, pasado este punto, no ocurre nada y la Wii permanece en una pantalla negra. This happened after installing a theme.

#### Causas
A theme brick occurs when a wrongly formatted theme is installed.

#### Soluciones
To resolve this issue, open HBC through Priiloader or BootMii as boot2 and access MyMenuifyMod to install a default theme such as the base Wii Menu theme. Alternatively, go into [YAWM ModMii Edition](yawmme) and install the CORRECT default Wii Menu WAD for your region and version.

## Mail brick

#### Síntomas
Al intentar arrancar la Wii, aparece la pantalla de salud y seguridad y, al pulsar A, la pantalla continúa normalmente; sin embargo, pasado este punto, no ocurre nada y la Wii permanece en una pantalla negra. Maintenence mode is still accessible.

#### Causas
A mail brick occurs when a Wii has too much mail to handle, or when malformed mail is in the Wii Message Board, causing a crash upon booting through normal means. Because the Wii Message Board is always drawn below Wii channels, this causes the Wii Menu to fail before fully loading.

#### Solution
By entering holding + and - on the warning screen, Maintenence mode can be entered, where the Wii Message Board is not loaded at all. If the Homebrew Channel is not installed and the system menu is at Wii menu version 2.0 or later, follow [str2hax](str2hax). Otherwise, see [Bluebomb](bluebomb).

From here, the Homebrew Channel can be loaded and the brick can be fixed by deleting Wii Message Board data with [cdbackup](https://oscwii.org/library/app/cdbackup).

## Wii Menu/Opera brick

#### Síntomas
When starting the Wii, you instead get an error from the Opera web browser along the lines of `You tried to access the address (URL), which is currently unavailable.` This will happen every time you start the Wii, and cannot be bypassed in any other means.

#### Causas
This brick is a more fatal version of a [Semibrick](#semibrick). If your SYSCONF gets corrupt or damaged, the Wii will regenerate it and start the setup phase.

However, the setup pages are in a similar location to the Wii settings pages. If you have an incorrect region Wii Menu or theme, the Wii cannot find them.

![Wii menu brick](/images/bricks/sysmenu-brick.png)

#### Soluciones

If you still have [Priiloader](priiloader), use it to enter the Homebrew Channel and re-install the original theme file/original Wii Menu.

In case you do not have Priiloader or your Wii is not modded, you can try [BlueBomb](bluebomb).

Alternatively, [Recovery Mode](recovery-mode) can be used to attempt a fix.

## Korean Kii/Error 003 Brick

#### Síntomas
Screen shows up as listed below on normal boot.

`Error:003`<br> `unauthorized device has been detected.`<br>

![Error 003](/images/bricks/error-003.png)

#### Causas
When releasing the Korean Wiis, Nintendo changed the encryption key for these units specifically as a last ditch attempt at preventing homebrew. While obviously this failed, they also left a check in the System Menu versions 4.2/4.3 to determine whether or not the Korean Key is present on a system software region that is **not** Korean. If this check succeeds, the error triggers and the Wii is effectively bricked.

This is usually an immediate follow-up to a Wii System Update on an unsuspecting region-changed Korean Wii.

#### Soluciones
Since this brick most often occurs after the Wii Menu updates, Priiloader will not be present.

Korean Wiis also released with Wii Menu 3.3, around the time that Nintendo [fixed the Trucha bug in boot1](https://wiibrew.org/wiki/3.3#Changes), so BootMii as Boot2 cannot be installed to or used on any Korean Wii.

While these caveats leave the Wii in a particularly dangerous situation, **it is still fixable**. This involves going into [Recovery Mode](recovery-mode), where an exploit can be triggered in order to gain access to the Homebrew Channel and revert the conditions that caused the brick.

## IOS brick

#### Síntomas
This brick will appear identical to a low-level brick due to a Wii Menu failure via IOS; however there is not a full low-level NAND corruption, or a low-level hardware failure.

#### Causas
This brick most often happens when the Wii Menu's IOS is a [stub](http://wiibrew.org/wiki/Stub_IOS). This is usually the consequence of attempting to downgrade your Wii menu. If this error began happening after installing a normal IOS80 to a Wii mini, see [Wi-Fi brick](wi-fi-brick).

#### Soluciones
[Recovery mode](recovery-mode) may or may not be accessible due to the nature of the brick, but Priiloader will almost always not work. If you cannot reach recovery mode, you must have BootMii as boot2 to fix this. If these conditions are not met, see [low-level brick](bricks#low-level-brick).

You can either restore a NAND backup, or do this:

1. Use [NUS Downloader](https://wiibrew.org/wiki/NUSD) to pack a WAD of your original Wii Menu.
1. Use BootMii to enter the Homebrew Channel, and use a WAD manager to install the Wii Menu WAD.

## Wi-Fi brick

#### Síntomas
This brick appears identical to a low-level brick, however you can still power on the Wii with a Wiimote, and you can still boot into Recovery Mode on an original revision Wii.

#### Causas
This brick arises when your Wii's Wi-Fi (or Bluetooth) module is damaged or not inserted properly. In such cases, the Wii gets stuck on a black screen while awaiting a response from IOS.

This will also happen on the Wii mini if you install a normal Wii IOS, because the Wii mini doesn't have a Wi-Fi module.

#### Soluciones
To resolve this problem, you can try to reseat or replace the Wi-Fi/Bluetooth module.

If you are on a Wii mini, you must install a Wi-Fi module.

If both fail, see [low-level brick](bricks#low-level-brick).

## Low-level brick

#### Síntomas
Completely black screen, no response to user input. Recovery Mode cannot be booted, neither can BootMii as boot2 (or it never existed in the first place), for all intents and purposes the console appears dead.

#### Causas
This brick occurs when boot1/boot2 is corrupt, or if there is a hardware failure.

#### Soluciones
First, troubleshooting must be done to determine if hardware is at fault. In the order listed, do the following:

+ Test to make sure that your Wii actually still functions (it accepts discs as normal, spins up correctly, Wiimotes connect) before attempting the following steps. If this is the case and only video is not being displayed, you may have an exceptionally rare failure of the video port or the GPU.
+ If on a Wii mini, and if a normal IOS80 was installed, see [Wi-Fi brick](wi-fi-brick). If steps to resolve the Wi-Fi brick failed, proceed.
+ Attempt to boot into [Recovery Mode](recovery-mode) (normal Wiis only). If the Wii boots into Recovery Mode, see [Wi-Fi brick](wi-fi-brick). If steps to resolve the Wi-Fi brick failed, proceed.
+ Reseat the disc drive and attempt to boot normally. If still unsuccessful, replace the disc drive. If still unsuccessful, proceed.
+ At this point, either there is a low level boot0/boot1 corruption, a NAND chip failure, or there is a wider unknown hardware failure. Consider consulting online help or buying another Wii.

[Haz clic aquí para volver al índice del sitio.](site-navigation)
{: .notice--info}
