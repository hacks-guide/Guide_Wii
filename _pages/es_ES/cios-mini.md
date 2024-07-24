---
title: "Instalar cIOS d2xl para Wii mini"
---

{% include toc title="Tabla de contenido" %}

Si tienes problemas para seguir los pasos de esta guía, por favor solicita ayuda en el [servidor de Discord](https://discord.gg/6ryxnkS) de Wii mini Hacking. Soporte disponible solo en inglés.
{: .notice--info}

{% capture technical_info %}
<summary><em>Technical Details (optional)</em></summary>
cIOS (Custom IOS) are IOS that are patched to allow custom functionality. While [cIOS](https://wiibrew.org/wiki/Custom_IOS) has largely been supplanted by AHBPROT, which gives complete hardware access, it still has useful applications. For example, this enables the functionality of USB loaders like USB Loader GX and WiiFlow, alongside other pieces of homebrew like SaveGame Manager GX. You can skip this process if you want, but generally it extends your Wii with little to no downsides.

El instalador de este cIOS originalmente fue desarrollado para la vWii de Wii U por DaveBaol, mientras que el cIOS fue diseñado por Leseratte específicamente para la Wii mini. La página de descarga original se encuentra [aquí](https://wii.leseratte10.de/d2xl-cIOS/), y el repositorio en GitHub puede ser visitado [aquí](https://github.com/Leseratte10/d2xl-cios). Leseratte's GitHub page can be found [here](https://github.com/Leseratte10/d2xl-cios). No se han reportado problemas en el funcionamiento de este cIOS, sin embargo, ten en cuenta que aún se encuentra en fase experimental.

{% endcapture %}
<details>{{ technical_info | markdownify }}</details>
{: .notice--info}

This guide is only intended for Wii Mini users. <br/> If you have a Wii, follow [this guide](cios) instead. <br/> If you have a Wii U (vWii), follow [this guide](cios-vwii) instead.
{: .notice--warning}

Do not attempt to install a Wii/vWii IOS or System Menu on the Wii mini. Hacer esto conlleva un gran riesgo de que tu consola sufra un brick.
{: .notice--warning}

### Requisitos

* Una Wii mini con el Canal Homebrew instalado
* Una unidad USB
* [d2xl cIOS Installer](/assets/files/d2xl_wii_mini_cIOS_installer_v1_beta2.zip) de Leseratte

### Instrucciones

#### Sección I - Descarga

1. Apaga la consola.
1. Insert your USB drive into your computer.
1. Ahora puedes usar aplicaciones homebrew como [USB Loader GX](usbloadergx) y [WiiFlow](wiiflow).
1. Extrae d2xl cIOS Installer a la carpeta `apps` en tu unidad USB.
1. Reinsert your USB drive into your console.
1. Enciende la consola.
1. Inicia el Canal Homebrew.
1. Launch d2xl cIOS Installer from the list of homebrew.

#### Sección II - Instalación

1. Select `Continue`.
1. Presiona continuar y después ajusta las opciones de la siguiente manera:
    ```
    Select cIOS <d2xl-v1-beta2>
    Select cIOS base <57>
    Select cIOS slot <249>
    ```
    + Revisa que el número de versión que aparece después de `IOS57-64-` en la parte inferior sea `v31776` o `v31775`.
1. Press A to install.
    + Si la instalación falla debido al error `TMD version mismatch`, pulsa izquierda o derecha en el botón cruz sobre la opción `Select cIOS` hasta que el número de versión sea diferente al que has usado anteriormente. El número 57 no cambiará.
1. Si el proceso ha sido exitoso, ahora puedes salir del instalador.

[Continue to making a NAND Backup using RealWnd](wnd-mini)
{: .notice--info}

#### Activar Ethernet

Si deseas jugar en Wiimmfi desde tu Wii mini, deberás hacerlo a través de Ethernet, para lo cual necesitarás ejecutar la aplicación homebrew [Ethernet Enabler](/assets/files/Wii_Mini_Ethernet_Enable.zip), creada por Fullmetal5. Extrae el archivo a la carpeta `apps` en tu unidad USB y después inicia la aplicación desde el Canal Homebrew.

Las consolas Wii y Wii mini solo pueden utilizar adaptadores Ethernet con el chip AX88772. Por favor asegúrate de que el adaptador sea compatible antes de comprarlo. Este producto de UGREEN está confirmado como compatible. Lo puedes adquirir desde [Amazon Europa](https://www.amazon.de/dp/B00MYT481C) o [Amazon Estados Unidos](https://a.co/d/3OcSJDS).
{: .notice--info}

[Haz clic aquí para volver al índice del sitio.](site-navigation)
{: .notice--info}
