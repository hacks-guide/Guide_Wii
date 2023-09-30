---
title: "Riivolution"
---

{% include toc title="Table of Contents" %}

이 자습서와 관련하여 도움이 필요하면 [RiiConnect24 디스코드 서버](https://discord.gg/rc24) (추천)에 가입하시거나, [support@riiconnect24.net](mailto:support@riiconnect24.net)로 이메일을 보내주세요.
{: .notice--info}

This is a quick start guide on how to use Riivolution, an on-the-fly disk patcher for the Wii that is used to play Wii game mods.

If you want to use Riivolution on a Wii mini, a WiFi card must be soldered and Wii IOSes must be installed.
{: .notice--warning}

Riivolution requires a working disk drive and a clean physical copy of the disk the desired mod is for. Scratched disks may or may not work very well or at all.
{: .notice--info}

![Riivolution](/images/riivolution.png)


#### 필요한 것

* Wii
* USB 드라이브 또는 SD 카드
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

[사이트 탐색 계속하기](site-navigation)<br> 여러분이 좋아할 만한 다른 자습서도 많이 있습니다.
{: .notice--info}
