---
title: "Riivolution"
---

{% include toc title="條目內容" %}

如果您需要有關本手冊的任何幫助，請加入 [RiiConnect24 的 Discord 伺服器](https://discord.gg/rc24)（推薦）或 [發送電子郵件至 support@riiiconnect24.net](mailto:support@riiiconnect24.net)。
{: .notice--info}

This is a quick start guide on how to use Riivolution, an on-the-fly disk patcher for the Wii that is used to play Wii game mods.

If you want to use Riivolution on a Wii mini, a WiFi card must be soldered and Wii IOSes must be installed.
{: .notice--warning}

Riivolution requires a working disk drive and a clean physical copy of the disk the desired mod is for. Scratched disks may or may not work very well or at all.
{: .notice--info}

![Riivolution](/images/riivolution.png)


#### 必備項目

* 一台 Wii
* A USB drive or SD Card
* The files for your desired mod
* A clean physical copy of the disk the mod is for
* A working disk drive
* [Riivolution](https://oscwii.org/library/app/riivolution)

#### Preparing the files

1. Extract Riivolution and put it in the `apps` folder on your SD card or USB drive.
2. Extract your mod files according to the diagram below to the SD or USB drive. Depending on the mod you downloaded, it may or may not already come properly structured for you.
3. Insert your SD card and/or USB drive into your Wii and launch Riivolution from the Homebrew Channel.
4. Insert the disk into the Wii.
    * Optional step: you can install the official riivolution forwarder channel to the Wii menu by selecting the install option to the right. This negates the need for having to launch the homebrew channel every time you want to launch riivolution.
5. Enable the mod and select Launch. Depending on the mod, you may have different options for it.

Pay attention to the region your mod is meant for. NTSC is for U.S and Japan, and PAL is for Europe and Korea.
{: .notice--info}

#### File Structure

Every Riivolution mod is different, and depending on which mod you choose, it may include more or less files than shown in this diagram.
{: .notice--info}

Do not get confused with the actual Riivolution app, and the Riivolution folder that goes on the root.
{: .notice--info}

<details id="Riivolution-Files" class="notice--info" markdown="1">
<summary><a>Click here for an example file structure.</a></summary>

```
💾sd:
 ┣ 📂apps
 ┃ ┗ 📂Riivolution
 ┃      ┣ 📜boot.dol
 ┃      ┣ 📜icon.png
 ┃      ┗ 📜meta.xml
 ┣ 📂Riivolution
 ┃  ┣ 📂config
 ┃  ┃  ┗ 📜name.xml
 ┃  ┗ 📜name.xml
 ┗ 📂GameFiles
```
</details>

[繼續至網站導覽](site-navigation)<br> 我們還有許多您可能會喜歡的其他指南。
{: .notice--info}
