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
+ La Wii arranca, ves la pantalla de salud y seguridad, pero al pulsar A para arrancar, la pantalla se queda en negro y/o se congela y no continúa. Maintenance mode is accessible. Se trata de un [bloqueo del correo](bricks#mail-brick).
+ La Wii arranca, ves la pantalla de salud y seguridad, pero al pulsar A para arrancar, ves una pantalla negra.
    + Si esto ocurre después de instalar un tema, se trata de un [bloqueo de tema](bricks#theme-brick).
    + Si esto ocurre después de instalar una WAD, se trata de un [bloqueo de banner](bricks#banner-brick).
    + If this randomly started happening, and you can access Maintenance Mode by holding +/- on the health/warning screen, see [mail brick](bricks#mail-brick).
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

![](/images/bricks/semibrick.png)

#### Soluciones
Comprueba en AnyRegion Changer que la región de tu consola es la misma que la del tema o menú de Wii que tienes instalado.

Si la causa ha sido un tema que has instalado, utiliza MyMenuifyMod para reinstalar el archivo de tema original.

Si la causa ha sido una WAD del menú de Wii que has instalado, utiliza [NUS Downloader](https://wiibrew.org/wiki/NUSD) para obtener el menú de Wii original.

Ten cuidado al descargar la WAD del menú de Wii. Asegúrate de elegir la misma versión con la región correcta.
{: .notice--danger}

Si estás en pleno proceso de cambio de región, utiliza [ARC-ME](https://github.com/modmii/Any-Region-Changer-ModMii-Edition/releases) para arreglar automáticamente todos tus ajustes de región para que coincidan con el menú de Wii.

## Bloqueo de banner

#### Síntomas
Al intentar arrancar la Wii, aparece la pantalla de salud y seguridad y, al pulsar A, la pantalla continúa normalmente; sin embargo, pasado este punto, no ocurre nada y la Wii permanece en una pantalla negra. Esto ocurre después de instalar una WAD y reiniciar o volver al menú de Wii. Alternativamente, todavía se puede acceder al menú de Wii, pero al abrir el canal corrupto la consola se congela. En algunos casos, es posible que aparezca la pantalla "Los archivos de sistema están dañados".

![](/images/bricks/sysfiles-corrupted.jpg)

#### Causas
Los bloqueos de banner ocurren si instalas un archivo WAD que tiene un banner o icono del menú de Wii inválido.

#### Soluciones
Si de algún modo todavía puedes acceder al menú de Wii, entra en el Canal Homebrew y utiliza [YAWM ModMii Edition](yawmme) o tu gestor de WAD actual para desinstalar el canal corrupto.

Si no puedes acceder al menú de Wii pero tienes [Priiloader](priiloader) instalado, entra en él manteniendo pulsado RESET mientras enciendes la Wii. Selecciona Canal Homebrew y desinstala el canal corrupto.

Si no tienes o no puedes acceder a Priiloader, puede valerte el modo de mantenimiento. Mantén pulsados `+` y `-` en la pantalla de salud y seguridad (no pulses `A`).

## Bloqueo de tema

#### Síntomas

Al intentar arrancar la Wii, aparece la pantalla de salud y seguridad y, al pulsar A, la pantalla continúa normalmente; sin embargo, pasado este punto, no ocurre nada y la Wii permanece en una pantalla negra. Ocurre después de instalar un tema.

#### Causas
El bloqueo de tema se produce cuando se instala un tema con un formato incorrecto.

#### Soluciones
Para resolver este problema, abre el Canal Homebrew a través de Priiloader o BootMii en el boot2 y accede a MyMenuifyMod para instalar un tema predefinido como, por ejemplo, el tema de base del menú de Wii. Como alternativa, entra en [YAWM ModMii Edition](yawmme) e instala la WAD del menú de Wii por defecto CORRECTO para tu región y versión.

## Bloqueo de correo

#### Síntomas
Al intentar arrancar la Wii, aparece la pantalla de salud y seguridad y, al pulsar A, la pantalla continúa normalmente; sin embargo, pasado este punto, no ocurre nada y la Wii permanece en una pantalla negra. Maintenance mode is still accessible.

#### Causas
Un bloqueo de correo ocurre cuando una Wii tiene demasiados mensajes, o cuando hay correo malformado en el tablón de la Wii, causando un bloqueo al arrancar de forma normal. Como el tablón de Wii siempre se carga debajo de los canales, provoca que el menú de Wii falle antes de cargarse por completo.

#### Soluciones
By entering holding + and - on the warning screen, maintenance mode can be entered, where the Wii Message Board is not loaded at all. Si el Canal Homebrew no está instalado y el menú del sistema está en la versión 2.0 o posterior del menú de Wii, sigue [str2hax](str2hax). En caso contrario, consulta [Bluebomb](bluebomb).

Desde aquí, se puede cargar el Canal Homebrew y arreglar el bloqueo borrando los datos del tablón de Wii con [cdbackup](https://oscwii.org/library/app/cdbackup).

## Bloqueo del menú de Wii / Opera

#### Síntomas
When starting the Wii, you instead get an error from the Opera web browser along the lines of `You tried to access the address (URL), which is currently unavailable.` This will happen every time you start the Wii, and cannot be bypassed by any other means.

#### Causas
Este bloqueo es una versión más grave de un [semibloqueo](#semibrick). Si el SYSCONF está corrupto o dañado, la Wii lo regenerará e iniciará la fase de configuración.

Sin embargo, las páginas de la configuración inicial se encuentran en una ubicación similar a las páginas de Configuración de Wii. Si tienes un menú Wii o un tema de una región incorrecta, la consola Wii no podrá encontrarlos.

![](/images/bricks/sysmenu-brick.png)

#### Soluciones

Si aún tienes [Priiloader](priiloader), úsalo para entrar en el Canal Homebrew y volver a instalar el archivo de tema original/menú de Wii original.

En caso de que no tengas Priiloader o tu Wii no esté modificada, puedes probar [BlueBomb](bluebomb).

Alternativamente, puedes usar el [modo de recuperación](recovery-mode) para intentar arreglarlo.

## Bloqueo Korean Kii/Error 003

#### Síntomas
La pantalla se muestra como se indica a continuación en el arranque normal.

`Error:003`<br> `unauthorized device has been detected.`<br>

![](/images/bricks/error-003.png)

#### Causas
Al publicar la Wii en Corea, Nintendo cambió la clave de cifrado de estas consolas como un último esfuerzo para impedir el homebrew. Aunque evidentemente no funcionó, también dejaron una verificación en las versiones 4.2/4.3 del menú del sistema para determinar si la clave coreana está presente en las consolas que **no sean** coreanas. Si la verificación es correcta, se activa el error y la Wii queda bloqueada.

Suele ser lo que sigue inmediatamente a una actualización de la consola Wii en una Wii coreana de región cambiada.

#### Soluciones
Como este bloqueo suele producirse después de las actualizaciones del menú de Wii, Priiloader no se encontrará presente.

Las Wii coreanas también salieron a la venta con la versión 3.3 del menú de Wii, más o menos cuando Nintendo [corrigió el error Trucha en el boot1](https://wiibrew.org/wiki/3.3#Changes), por lo que BootMii como Boot2 no se puede instalar ni usar en ninguna Wii coreana.

Aunque estos inconvenientes dejan a la Wii en una situación especialmente peligrosa, **aún tiene arreglo**. Esto implica entrar en [modo de recuperación](recovery-mode), donde se puede activar un exploit para acceder al Canal Homebrew y revertir las condiciones que causaron el bloqueo.

## Bloqueo de IOS

#### Síntomas
Este bloqueo parecerá idéntico a uno total debido a un fallo del menú de Wii a través de la IOS; sin embargo, no existe una corrupción total de la NAND ni un fallo de hardware de bajo nivel.

#### Causas
Este bloqueo suele ocurrir cuando la IOS del menú de Wii es un [stub](http://wiibrew.org/wiki/Stub_IOS). Esto suele ser consecuencia de intentar desactualizar el menú de la Wii. Si este error empieza a producirse después de instalar una IOS80 normal en una Wii mini, consulta el [blockeo de wifi](wi-fi-brick).

#### Soluciones
El [modo de recuperación](recovery-mode) puede ser accesible o no a causa de la naturaleza del bloqueo, pero Priiloader no funcionará en la mayoría de los casos. Si no puedes llegar al modo de recuperación, debes tener BootMii como boot2 para solucionarlo. Si no se cumplen estas condiciones, consulta el [bloqueo de bajo nivel](bricks#low-level-brick).

Puedes o restaurar una copia de seguridad de la NAND, o hacer esto:

1. Utiliza [NUS Downloader](https://wiibrew.org/wiki/NUSD) para crear una WAD de tu menú de Wii original.
1. Utiliza BootMii para entrar en el Canal Homebrew, y utiliza un gestor de WAD para instalar la WAD del menú de Wii.

## Bloqueo de wifi

#### Síntomas
Este bloqueo parece idéntico a un bloqueo de bajo nivel, pero puedes encender la Wii con un mando de Wii e iniciar el modo de recuperación en una Wii de la versión original.

#### Causas
Este problema surge cuando el módulo wifi (o Bluetooth) de la Wii se estropea o no está bien insertado. En estos casos, la Wii se queda atascada en una pantalla negra mientras espera una respuesta de la IOS.

Esto también ocurrirá en la Wii mini si instalas una IOS para la Wii normal, porque la Wii mini no tiene un módulo wifi.

#### Soluciones
Para resolver este problema, puedes intentar volver a colocar o sustituir el módulo wifi/Bluetooth.

Si tienes una Wii mini, deberás instalar un módulo wifi.

Si ambos fallan, consulta el [bloqueo de bajo nivel](bricks#low-level-brick).

## Bloqueo de bajo nivel

#### Síntomas
Pantalla completamente negra, sin respuesta a la intervención del usuario. El modo de recuperación no se puede arrancar, tampoco BootMii como boot2 (o nunca ha existido en primer lugar), prácticamente la consola parece estar muerta.

#### Causas
Este bloqueo se produce cuando boot1/boot2 está dañado, o si hay un fallo de hardware.

#### Soluciones
En primer lugar, se debe determinar si el culpable es el hardware. En el orden indicado, haz lo siguiente:

+ Asegúrate de que la consola Wii sigue funcionando (acepta discos con normalidad, el lector gira correctamente y los mandos de Wii se conectan) antes de seguir los siguientes pasos. Si este es el caso y solo es el vídeo el que no aparece, puede que tengas un fallo muy raro en el puerto de vídeo o en la GPU.
+ Si estás en una Wii mini, y has instalado una IOS80 normal, consulta el [bloqueo de wifi](wi-fi-brick). Si los pasos para resolver el bloqueo de wifi no funcionan, continúa.
+ Intentar arrancar en modo [recuperación](recovery-mode) (solo Wiis normales). Si la Wii arranca en modo de recuperación, consulta el [bloqueo de wifi](wi-fi-brick). Si los pasos para resolver el bloqueo de wifi no funcionan, continúa.
+ Vuelve a colocar la unidad de disco e intenta arrancar normalmente. Si sigue sin funcionar, sustituye el lector de discos. Si sigue sin funcionar, continúa.
+ Llegados a este punto, o hay una corrupción de bajo nivel en boot0/boot1, un fallo del chip de la NAND, o un fallo de hardware en general desconocido. Pide ayuda en línea o compra otra Wii.

[Haz clic aquí para volver al índice del sitio.](site-navigation)
{: .notice--info}
