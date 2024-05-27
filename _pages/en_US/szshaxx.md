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

1. Head to `https://github.com/MikeIsAStar/szsHaxx`
2. Select the `Releases`. button and download the latest version. At the time of writing, it is 1.0.0.0.

    ![](/images/exploits/szshaxx/szsHaxx.png)

3. Create the filepath `sd:/private/wii/title/RMC[E|P|J|K]`. The final character should match the region of the game.
    ![](/images/exploits/szshaxx/files.png)

4. Extract `szsHaxx-v1.0.0.0.zip`, and move the `data.bin` in the folder that matches your region to the folder you have just created

    ![](/images/exploits/szshaxx/files2.png)

    ![](/images/exploits/szshaxx/files3.png)

5. Place the `boot.elf` on the root of your SD card to be executed. For this, we will be using the `HackMii Installer` found at `https://bootmii.org/download/`

    ![](/images/exploits/szshaxx/bootelf.png)

6. Make sure `WiiConnect24` is enabled on your Wii before performing the exploit

    ![](/images/exploits/szshaxx/wiiconnect24.png))

7. Delete any save data that exists for Mario Kart Wii. 

    ![](/images/exploits/szshaxx/deleted.png))

    If there is data you would like to keep, we would recommend moving the data to a seperate SD card first.
    {: .notice--warning}

8. Move the save data from the SD card to the Wii's internal storage.

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

