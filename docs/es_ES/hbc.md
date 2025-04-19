::::: tabs

:::: tab Wii

# Instalar el Canal Homebrew y BootMii

:::details Detalles técnicos (opcional)

BootMii can be installed in two ways: directly to a part of the Wii bootloader called boot2, and via an IOS. In most cases, installing BootMii as IOS should be fine, as long as you also install <a href="priiloader">Priiloader</a>. In most cases, installing BootMii as IOS should be fine, as long as you also install [Priiloader](priiloader).

:::

::: warning

Si no dispones de una tarjeta SD, no serás capaz de instalar ni utilizar BootMii, y por tanto tampoco podrás aprovechar ninguna de las ventajas que ofrece.

You can always [install it later](hackmii).

:::

## Instructions

1. Your console should be powered on and showing the HackMii Installer from the previous part of the guide.

    - Deberías ver una pantalla de advertencia contra estafa.

    ![](/images/hackmii/scam.png)

2. Espera 30 segundos hasta que aparezca el texto <code>Press 1 to continue</code>, y después oprime el botón 1.

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

11. Your console will have booted into the Homebrew Channel.

    ![](/images/hbc/blank.png)

## Required Reading

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

`AppName1` and `AppName2` are placeholder names. Do not nest multiple `apps` folders inside the `apps` folder itself.

### Wii: Next Steps

::: tip

[Continue to making a NAND Backup using BootMii](bootmii)

Making a NAND backup at this point is highly recommended, as they can be used to recover from bricks.

:::

::: tip

Puedes saber si tu Wii tiene BootMii instalado como boot2 si la luz del lector de disco parpadea muy brevemente, justo después de que esta se encienda al oprimir el botón POWER.

:::
::::

:::: tab Wii mini

# Homebrew Channel

:::details Detalles técnicos (opcional)

El Canal Homebrew te permite utilizar las aplicaciones homebrew que descargues.

:::

::: warning

También es posible instalar BootMii en la Wii mini, aunque necesitarás soldar una ranura para tarjetas SD. Esto requiere desarmar tu consola y usar equipo especial, por lo que no es recomendable.

:::

## Instrucciones (para Wii)

1. Your console should be powered on and showing the HackMii Installer from the previous part of the guide.

    - Deberías ver una pantalla de advertencia contra estafa.

    ![](/images/hackmii/scam.png)

2. Espera 30 segundos hasta que aparezca el texto <code>Press 1 to continue</code>, y después oprime el botón 1.

3. Select `Continue`.

    ![](/images/hackmii/test_results.png)

4. Select `Install the Homebrew Channel`.

    ![](/images/hackmii/hbc_install.png)

5. Once it is completed, select `Continue`

    ![](/images/hackmii/hbc_install_ok.png)

6. Select `Exit`.

7. Your console will have booted into the Homebrew Channel.

    ![](/images/hbc/blank.png)

## Required Reading

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

`AppName1` and `AppName2` are placeholder names. Do not nest multiple `apps` folders inside the `apps` folder itself.

::: tip

### Wii mini: Next Steps

::: tip

[Continue to making a NAND Backup using RealWnd](wnd-mini)

Making a NAND backup at this point is highly recommended, as they can be used to recover from bricks.

:::
::::
