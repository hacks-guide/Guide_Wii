---
title: "Comenzar"
---

{% include toc title="Tabla de contenido" %}

These steps will help you softmod your Wii, from stock to BootMii. Esta guía es para las consolas Wii originales (incluyendo Wii Family Edition) y Wii mini que cuenten con el firmware más reciente (4.3). Si deseas instalar homebrew en el modo Wii (vWii) de la Wii U, por favor sigue [esta guia](https://wiiu.hacks.guide).

Todos los exploits ejecutan HackMii Installer, por lo que el resultado final será el mismo.

También puedes seguir esta guía usando una unidad USB, aunqué no podrás crear o restaurar un respaldo de NAND usando BootMii, ni usar ciertas aplicaciones homebrew.
{: .notice--info}

### Identify your console revision:

{% include identify-console.html %}<br>

### Elige el exploit que deseas usar

Select the exploit that corresponds to your console and situation the best.

| Console Revision       | Recommended Exploit                                                                                                                                                                                                                                                                                                                                        |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Wii/Wii Family Edition | If you can use a Windows PC:<br> Automatic Setup: Proceed to [ModMii](modmii)<br> If you can use an SD card:<br> Manual Setup: Proceed to [Wilbrand](wilbrand)<br> If you cannot use an SD card:<br> Manual Setup: Proceed to [str2hax](str2hax)<br>                                                                   |
| Wii mini               | [BlueBomb](bluebomb) - Exploit que usa el Bluetooth de la consola                                                                                                                                                                                                                                                                                          |
| Wii U (vWii)           | If you have already modded your Wii U:<br> Proceed to [Modding the vWii](vwii-homebrew-channel)<br> If you havent modded the Wii U but want to:<br> Proceed to [Modding the Wii U](https://wiiu.hacks.guide)<br> If you do not want to mod the Wii U:<br> Proceed to [Modding the vWii Without Wii U Mods](wiiu-nand-dumper) |
| Dolphin Emulator       | Proceed to [Homebrew Channel on Dolphin](homebrew-dolphin)                                                                                                                                                                                                                                                                                                 |

### Alternate methods

If possible, you should follow the method given above.

If the recommended option does not work for you, or if you are curious about other exploits, check out [Legacy Exploits](legacy-exploits).
