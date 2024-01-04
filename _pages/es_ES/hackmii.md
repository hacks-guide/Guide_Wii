---
title: "Volver a lanzar el HackMii Installer"
---

{% include toc title="Tabla de contenido" %}

Esta guía puede ser usada en situaciones donde necesites volver a cargar la aplicación HackMii Installer para actualizar o reinstalar el Canal Homebrew o BootMii.

También puedes [ejecutar otra vez cualquier exploit](get-started) para ingresar nuevamente a HackMii Installer.
{: .notice--info}

### Iniciar desde el Canal Homebrew

#### Requisitos

* El Canal Homebrew
* Una tarjeta SD o unidad USB formateada como FAT32
* [No es recomendable utilizar BlueBomb en la Wii original para instalar el Canal Homebrew y BootMii, pues existen otros exploits más fáciles de ejecutar.](https://bootmii.org/download/)

#### Instrucciones

1. Inserta la tarjeta SD o unidad USB en tu PC.
1. Extrae el archivo de HackMii Installer a la carpeta `apps`, ubicada en la raíz de la tarjeta SD o unidad USB.
    + Si la carpeta no existe, créala.
1. Inserta la tarjeta SD o unidad USB en tu Wii, e inicia la aplicación `hackmii_installer_v1.2` desde el Canal Homebrew.
    + La aplicación se mostrará sin ningún icono.

[Continuar a la instalación del Canal Homebrew y BootMii](hbc)
{: .notice--info}

### Iniciar desde Priiloader

#### Requisitos
* Una Wii con Priiloader (o Preloader) instalado
* Una tarjeta SD o unidad USB formateada como FAT32
* [No es recomendable utilizar BlueBomb en la Wii original para instalar el Canal Homebrew y BootMii, pues existen otros exploits más fáciles de ejecutar.](https://bootmii.org/download/)

Para saber si tu Wii tiene Priiloader, mantén oprimido el botón RESET mientras enciendes la consola.
{: .notice--info}

Preloader and older versions of Priiloader do not seem to support SDHC (>2GB) cards.
{: .notice--warning}

#### Instrucciones

1. Inserta la tarjeta SD o unidad USB en tu PC.
1. Extrae el archivo de HackMii Installer a la carpeta `apps`, ubicada en la raíz de la tarjeta SD o unidad USB.
1. Inserta la tarjeta SD o unidad USB en tu Wii.
1. Ingresa a Priiloader manteniendo pulsado RESET mientras enciendes tu Wii.
1. Elige la opción `Load/Install File`.
1. Navega hasta `hackmii_installer_v1.2` y oprime el botón 1 para cargar la aplicación.

If `Press (1) to continue` does not show up after about 30 seconds, downloading [HackMii Installer v1.0](https://bootmii.org/download/) may help.
{: .notice--info}

[Continuar a la instalación del Canal Homebrew y BootMii](hbc)
{: .notice--info}
