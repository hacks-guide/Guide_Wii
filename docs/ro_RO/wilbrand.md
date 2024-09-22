---
title: "Wilbrand"
---

Wilbrand is an exploit for the Wii that is triggered using the Wii Message Board. It is compatible with Wii menu versions 3.0 through 4.3 in all regions.

There are two methods listed on this page used to create the proper Wilbrand exploit. Wilbrand Web is recommended for its ease of use.
{: .notice--info}

{% capture wilbrand-web %}

### Wilbrand Web

#### What you need

* An SD card formatted to FAT32/MS-DOS
* A Wii on version 3.0 or newer

SD cards larger than 2GB will not work on Wii menu versions before 4.0.
{: .notice--warning}

#### Instrucțiuni

1. Pornește consola.
1. Visit [wilbrand.donut.eu.org](https://wilbrand.donut.eu.org/), input your Wii MAC, version, region, ensure `Bundle the HackMii Installer for me!` is checked, and cut either wire.
1. Take note of the letter next to the system version, in the top-right corner of the screen.
    + Acea literă corespunde cu regiunea consolei, pe care trebuie să-l știi pentru pașii corespunzători.

    ![](/images/wii/SystemMenuVersion.png)

1. Navighează spre `Internet` > `Console Information`.
1. Notează adresa MAC completă.

    ![](/images/wii/MacAddress.png)

1. On your computer, open the browser and go to [wilbrand.donut.eu.org](https://wilbrand.donut.eu.org/).
1. Input your Wii MAC, version and region.
1. Asigură-te `Bundle the HackMii Installer for me!` este bifată.
1. Taie oricare din fire.

    ![](/images/exploits/wilbrand/web.png)

1. Click on "Download your .zip".
1. Introdu cardul tău SD în calculator.
1. Copy the `private` folder and the `boot.elf` file from the downloaded `.zip` file to the root of your SD card.
1. Re-introdu cardul tău SD în calculator.
    + Cardul SD trebuie introdus în slotul SD localizat pe partea de față a consolei Wii. Utilizarea adaptorului USB la SD, introdus în portul USB din Wii nu va funcționa.
1. Pe Wii, întoarce-te la meniul Wii.
1. Open the Wii Message Board.
1. Open the green letter with a bomb.

    ![](/images/exploits/wilbrand/msgboard.png)

    + Ensure the date on your Wii is correct, or you might be unable to find the letter.
    + In some cases, you may need to check the messages for tomorrow or yesterday for the letter to show up.
    + If you don't see the green letter, check if any errors appear in the SD card section of `Data Management`. If there are errors, there may be an issue with the SD card format or the Wii’s SD card reader.


1. Dacă exploit-ul a funcționat, dispozitivul va intra în HackMii Installer.
    + If your Wii gets stuck on a black screen, power it off by holding the POWER button, then try again.
    + If you get sent back to the Wii Menu after opening the letter, ensure that the lock switch on your SD card is in the unlocked position.

[Continuă la Homebrew Channel și Instalarea BootMii](hbc)
{: .notice--info}

{% endcapture %}

{% capture wilbrand-cli %}

### Wilbrand CLI

#### What you need

* A PC running Windows, MacOS or Linux
* An SD card formatted to FAT32/MS-DOS
* A Wii on version 3.0 or newer
* [Wilbrand](https://static.wiidatabase.de/Wilbrand.zip)
* [HackMii Installer v1.2](https://bootmii.org/download/)

SD cards larger than 2GB will not work on Wii menu versions before 4.0.
{: .notice--warning}

#### Instrucțiuni

1. Pornește consola.
1. Extract the Wilbrand zip to a folder on your PC, preferably on your desktop.
1. Take note of the letter next to the system version, in the top-right corner of the screen.
    + Acea literă corespunde cu regiunea consolei, pe care trebuie să-l știi pentru pașii corespunzători.

    ![](/images/wii/SystemMenuVersion.png)

1. Navighează spre `Internet` > `Console Information`.
1. Notează adresa MAC completă.

    ![](/images/wii/MacAddress.png)

1. Copy all files from the Wilbrand `.zip` to a folder on your computer
1. Introdu cardul tău SD în calculator.
1. Open a terminal inside the folder Wilbrand was extracted to.
1. Using your Wii's version and MAC address, run the following command:

    + Windows: `.\Wilbrand.exe AA-BB-CC-DD-EE-FF MM/DD/YYYY VERSION X:`
        + `X:` is the drive letter of your SD card.

        ![](/images/exploits/wilbrand/windows.png)

    + Linux/MacOS: `./Wilbrand AA-BB-CC-DD-EE-FF MM/DD/YYYY VERSION /media/mount_dir`
        + If you have not opened your terminal directly in the folder Wilbrand was extracted to, use `cd` to enter it first, eg. `cd ~/Desktop/Wilbrand`
        + `/media/mount_dir` is the folder your SD card is mounted in. This may vary depending on your Linux distro.

        ![](/images/exploits/wilbrand/linux.png)

1. Copy all files from the hackmii_installer_v1.2 `.zip` to a folder on your computer.
1. Locate the `boot.elf` file, and put it on the root of your SD card.
1. Take out your SD card and insert it in your Wii.
    + Cardul SD trebuie introdus în slotul SD localizat pe partea de față a consolei Wii. Utilizarea adaptorului USB la SD, introdus în portul USB din Wii nu va funcționa.
1. On your Wii, return to the Wii Menu and then open the Wii Message Board.
1. Open the Wii Message Board.
1. Open the green letter with a bomb.
    + Ensure the date on your Wii is correct, or you might be unable to find the letter.
    + In some cases, you may need to check the messages for tomorrow or yesterday for the letter to show up.
    + If you don't see the green letter, check if any errors appear in the SD card section of `Data Management`. If there are errors, there may be an issue with the SD card format or the Wii’s SD card reader.

    ![](/images/exploits/wilbrand/msgboard.png)

1. Dacă exploit-ul a funcționat, dispozitivul va intra în HackMii Installer.
    + If your Wii gets stuck on a black screen, power it off by holding the POWER button, then try again.
    + If you get sent back to the Wii Menu after opening the letter, ensure that the lock switch on your SD card is in the unlocked position.

[Continuă la Homebrew Channel și Instalarea BootMii](hbc)
{: .notice--info}

{% endcapture %}

<button class="btn btn--large btn--primary tabLink" onClick="select_tab(event, 'wilbrand-web')"> Wilbrand Web </button>
<button class="btn btn--large btn--info tabLink" onClick="select_tab(event, 'wilbrand-cli')"> Wilbrand CLI </button>

<div class="tabContent tabDefualt" id="wilbrand-web" markdown="1">

{{ wilbrand-web }}
</div>
<div class="tabContent" id="wilbrand-cli" markdown="1">
{{ wilbrand-cli }}
</div>

<script>
    const tabContents = document.getElementsByClassName('tabContent');
    const tabLinks    = document.getElementsByClassName('tabLink');

    for (tab of tabContents) { tab.style.display = 'none'; }
    document.getElementsByClassName('tabDefault')[0].style.display = 'block';

    function select_tab(event, tab_id)
    {
        for (tab of tabContents) { tab.style.display = 'none'; }
        for (btn of tabLinks) { btn.className = btn.className.replace('btn--primary', 'btn--info'); }

        document.getElementById(tab_id).style.display = 'block';
        event.currentTarget.className = event.currentTarget.className.replace('btn--info', 'btn--primary');
    }
</script>
