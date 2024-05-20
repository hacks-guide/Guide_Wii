---
title: "d2xl cIOS Wii mini-konzolokra (kísérleti)"
---

{% include toc title="Tartalomjegyzék" %}

Ha az útmutatóval kapcsolatban segítségre lenne szükséged (angol nyelven), kérjük [csatlakozz a „Wii mini Hacking”-Discord szerverhez](https://discord.gg/6ryxnkS)! (ajánlott)
{: .notice--info}

{% capture technical_info %}
<summary><em>Technical Details (optional)</em></summary>
cIOS (Custom IOS) are IOS that are patched to allow custom functionality. While [cIOS](https://wiibrew.org/wiki/Custom_IOS) has largely been supplanted by AHBPROT, which gives complete hardware access, it still has useful applications. For example, this enables the functionality of USB loaders like USB Loader GX and WiiFlow, alongside other pieces of homebrew like SaveGame Manager GX. You can skip this process if you want, but generally it extends your Wii with little to no downsides.

This d2x cIOS installer was originally developed for the Wii U's vWii by DaveBaol and custom cIOS was created by Leseratte for the Wii mini. The original download page can be found [here](https://wii.leseratte10.de/d2xl-cIOS/). Leseratte's GitHub page can be found [here](https://github.com/Leseratte10/d2xl-cios). Please note that this cIOS is still experimental, though no problem with functionality has been reported.

{% endcapture %}
<details>{{ technical_info | markdownify }}</details>
{: .notice--info}

This guide is only intended for Wii mini users. If you have a Wii, follow [this guide](cios) instead. If you have a Wii U (vWii), follow [this guide](cios-vwii) instead.
{: .notice--warning}

Do not attempt to install a Wii/vWii IOS or System Menu on the Wii mini. Doing so will likely [brick](bricks#ios-brick) your console.
{: .notice--warning}

### Követelmények

* A Wii mini with the Homebrew Channel installed
* A USB drive
* Leseratte's [d2xl cIOS Installer](/assets/files/d2xl_wii_mini_cIOS_installer_v1_beta2.zip)

### Útmutató

#### Section I - Downloading

1. Kapcsold ki a konzolt!
1. Insert your USB drive into your computer.
1. Create a folder named `apps` on the root of your USB drive if it does not already exist.
1. Copy the `d2x-cios-installer` folder from the d2xl cIOS Installer `.zip` to the `apps` folder on your USB drive.
1. Reinsert your USB drive into your console.
1. Kapcsold be a konzolt!
1. Launch the Homebrew Channel.
1. Launch d2xl cIOS Installer from the list of homebrew.

#### II. rész - Telepítés

1. Válaszd a `Continue`-t.
1. Állítsd be az opciókat a következőre:
    ```
    Select cIOS <d2xl-v1-beta2>
    Select cIOS base <57>
    Select cIOS slot <249>
    ```
    + Take a note of the version number under notes (`IOS57-64-` ending in either `v31776` or `v31775`)
1. Nyomj A gombot a telepítéshez.
    + If the install fails with a `TMD version mismatch` error, press left or right on the +Control Pad over the `Select cIOS base` option until the version number is different than the one you tried before. The number 57 will not change.
1. When the process is complete, exit the installer.

[Continue to making a NAND Backup using RealWnd](wnd-mini)
{: .notice--info}

#### Enabling Ethernet

If you wish to use Wiimmfi with Ethernet on a Wii mini, you have to run the [Ethernet Enabler Homebrew](/assets/files/Wii_Mini_Ethernet_Enable.zip) app made by Fullmetal5. To run it, just unzip it in the `apps` folder of your USB drive and run it from the Homebrew Channel.

The Wii and Wii mini consoles are only known to work with Ethernet adapters using the AX88772 chip. Please check that the product is compatible before you buy. This one from UGREEN is known to be compatible: [Amazon Europe](https://www.amazon.de/dp/B00MYT481C), [Amazon US](https://a.co/d/3OcSJDS)
{: .notice--info}

[Kattints ide a tartalomjegyzékhez való visszatéréshez!](site-navigation)
{: .notice--info}
