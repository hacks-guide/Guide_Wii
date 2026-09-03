# Troubleshooting

This page contains various troubleshooting guides for issues that may arise during the modding process.

::: warning

**Getting Assistance**

If you have attempted the fixes suggested by this page and your issue is still occouring, join the [Nintendo Homebrew Discord](https://discord.gg/C29hYvh) and ask for help in English on the `#wii-vwii-assistance` channel.

We also suggest joining the server to ask questions if you have trouble understanding the guide.

If you do not speak English well, please use a translator like [Google Translate](https://translate.google.com/) to write your question. We are happy to help you. Please explain your problem clearly!

:::


## Wilbrand

This section conatins possible solutions for any issues that may arise when attempting Wilbrand.

| Issue | Solution |
| :--------: | :---------: |
| The hacked letter does not appear in the Wii Message Board. | Ensure you have checked messages from yesterday, today and tomorrow on the Wii Message Board as the letter can sometimes appear in the past, present of future depending on your timezone. If you are still experiencing this issue, reformat your SD card by following [this guide](https://wiki.hacks.guide/wiki/Formatting_an_SD_card).|
| After opening the hacked letter, I get sent back to the Wii Menu | Ensure that your SD card's write lock switch is disabled. The switch should be pushed up. |
| The screen goes black and the disc drive light begins to flash when I opened the hacked letter. | Ensure you also copied over `boot.elf` from the Wilbrand `.zip` file. |

## Homebrew Channel and BootMii installation
| Issue | Solution |
| :--------: | :---------: |
| The installed boot1 version prevents a boot2 install (-2) | This is normal as BootMii can only be installed into boot2 on early Wiis. You may proceed with the guide as normal. |
| FAILED (-1) when installing BootMii | Ensure your SD card is inserted into the front SD slot. |
| FAILED (-2) when installing BootMii | Ensure that your SD card's write lock switch is disabled. The switch should be pushed up. If this does not fix your issue, ensure that your SD card has at least 400 KB of space available on your SD card. |

## Priiloader
| Issue | Solution |
| :--------: | :---------: |
| Installer crashes with cIOS Infected | Your Wii was modified in the past and has a broken softmod, follow [ModMii SysCheck Updater Wizard](https://wii.hacks.guide/modmii#syscheck-updater-wizard) to resolve this. |