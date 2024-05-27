---
title: "szsHaxx"
---

{% include toc title="Table of Contents" %}

szsHaxx is an exploit for the Wii that is triggered by overflowing the buffer allowing arbitary code injection using Mario Kart Wii competition data.

You will need a copy of Mario Kart Wii.
{: .notice--warning}

### Requirements

* A copy of Mario Kart Wii
* An SD card with a capacity of <2GB formatted to FAT16/FAT32

### Instructions

#### Section I - Preparing

This exploit requires you to download szsHaxx off the Github page. 

1. Head to `![](https://github.com/MikeIsAStar/szsHaxx/releases/latest)`
2. Download the latest version. At the time of writing, it is 1.0.0.0.

    ![](/images/exploits/szshaxx/szsHaxx.png)


3. Extract `szsHaxx-v1.0.0.0.zip`, and copy the folder with your region code (E|J|K|P) to the root of your SD card.

    ![](/images/exploits/szshaxx/files2.png)

    ![](/images/exploits/szshaxx/files3.png)

4. Place the `boot.elf` on the root of your SD card to be executed. For this, we will be using the `HackMii Installer` found at `![](https://bootmii.org/download/)`

    ![](/images/exploits/szshaxx/bootelf.png)

5. Make sure `WiiConnect24` is enabled on your Wii before performing the exploit. It can be enabled by going to `WiiConnect24` in page 2 of Wii Settings.

    ![](/images/exploits/szshaxx/wiiconnect24.png))

6. Delete any save data that exists for Mario Kart Wii. 

    ![](/images/exploits/szshaxx/deleted.png))

    We would recommend moving any data you would like to keep to the SD card before doing this exploit
    {: .notice--warning}

7. Move the save data from the SD card to the Wii's internal storage.

    ![](/images/exploits/szshaxx/moved.png))

+ You are now ready to perform the exploit!


#### Section II - Triggering the Exploit

1. Start Mario Kart Wii and create a new license.
2. On the main menu, select `Mario Kart Channel`

![](/images/exploits/szshaxx/channel.png))


3. Wait for `Recieve Mario Kart Wii channel updates?` to update to `A tournament is under way!`, and select `Tournament` once this occurs
    + You should be greeted with the following screen:

    ![](/images/exploits/szshaxx/tourney.png))

    ![](/images/exploits/szshaxx/haxx.png))

    + Select start and continue. Click `OK` to start the race.

1. If the exploit was successful, your device will have loaded the HackMii Installer.

    ![](/images/hackmii/scam.png)

    + If the HackMii Installer doesn't load after more than 2 minutes, or you receive an error like `Hanging.` or `ERROR! if_config (ret = ...)`, please restart your Wii and try again.

[Continue to Homebrew Channel and BootMii Installation](hbc)
{: .notice--info}

