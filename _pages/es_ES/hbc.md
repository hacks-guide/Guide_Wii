---
title: "Instalar el Canal Homebrew y BootMii"
---

{% include toc title="Tabla de contenido" %}

{% capture technical_info %}
<summary><em>Technical Details (optional)</em></summary>
The Homebrew Channel is where you will go to launch homebrew applications. BootMii es un software que te permite copiar y restaurar los contenidos de la memoria interna (NAND) de tu consola, y en caso de estar instalado como boot2, también brinda protección contra bricks.

BootMii can be installed in two ways: directly to a part of the Wii bootloader called boot2, and via an IOS. In most cases, installing BootMii as IOS should be fine, as long as you also install [Priiloader](priiloader). BootMii under boot2 is preferred as it provides extended brick protection, but Wiis with a vulnerable boot1 that allows this installation are considerably rarer, having been manufactured before 2009.

{% endcapture %}
<details>{{ technical_info | markdownify }}</details>
{: .notice--info}

Si no dispones de una tarjeta SD, no serás capaz de instalar ni utilizar BootMii, y por tanto tampoco podrás aprovechar ninguna de las ventajas que ofrece. <br> Aunque siempre puedes [instalarlo más adelante](hackmii).
{: .notice--warning}

### Instrucciones

1. Your console should be powered on and showing the HackMii Installer from the previous part of the guide.
    + Pantalla de advertencia contra estafa

    ![](/images/hackmii/scam.png)

1. Espera 30 segundos hasta que aparezca el texto "Press 1 to continue", y después oprime el botón 1.
1. Elige `Install BootMii as IOS`.

    ![](/images/hackmii/test_results.png)

1. Selecciona `Install the Homebrew Channel`.

    ![](/images/hackmii/hbc_install.png)

1. Elige `Continue` cuando el proceso haya finalizado.

    ![](/images/hackmii/hbc_install_ok.png)

1. Una vez que el Canal Homebrew esté instalado, selecciona `Back`, y luego `BootMii`.

    ![](/images/hackmii/bootmii_install.png)

1. Es normal si al lado de BootMii aparece el mensaje `Can only be installed as an IOS`.

    ![](/images/hackmii/bootmii_install1.png)

    ![](/images/hackmii/bootmii_install2.png)

    ![](/images/hackmii/bootmii_install3.png)

    ![](/images/hackmii/bootmii_install_ok.png)

1. Cuando el proceso haya terminado, selecciona `Continue`.
1. Elige `Install BootMii as IOS`.

    ![](/images/hackmii/bootmii_install4.png)

1. Selecciona `Exit` para iniciar el Canal Homebrew.
1. Your console will have booted into the Homebrew Channel.

    ![](/images/hbc/blank.png)

### Required Reading

Ahora puedes iniciar el Canal Homebrew desde el menú de Wii para ejecutar aplicaciones homebrew.

Al momento de copiar aplicaciones homebrew a tu tarjeta SD o unidad USB, la estructura de las carpetas debería verse así:

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

Los nombres `AppName1` y `AppName2` son de ejemplo. No coloques carpetas con el nombre `apps` dentro de la carpeta `apps` ubicada en la raíz de la tarjeta SD o unidad USB.

[Procede a realizar un respaldo de la NAND con BootMii](bootmii)<br> Se recomienda crear una copia de seguridad de la memoria interna (NAND) de la consola en este punto.
{: .notice--info}

Puedes saber si tu Wii tiene BootMii instalado como boot2 si la luz del lector de disco parpadea muy brevemente, justo después de que esta se encienda al oprimir el botón POWER.
{: .notice--info}
