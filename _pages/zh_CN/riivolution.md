---
title: "Riivolution"
---

{% include toc title="Table of Contents" %}

如果你需要有关本教程的任何帮助, 请加入[RiiConnect24 Discord服务器](https://discord.gg/rc24) (推荐)或 [发送电子邮件到 support@riiconnect24.net](mailto:support@riiconnect24.net)。
{: .notice--info}

这是关于如何使用 Riivolution 的快速入门指南，Riivolution 是 Wii 的即时磁盘修改程序，用于玩 Wii 游戏模组。

如果您想在 Wii mini 上使用 Riivolution，必须焊接 WiFi 卡并安装 Wii IOS。
{: .notice--warning}

Riivolution 需要正常工作的光驱和所需模组的光盘的原版拷贝。 划伤的光盘可能运行得很好，也可能根本无法运行。
{: .notice--info}

![Riivolution](/images/riivolution.png)


#### 你需要的是

* 一台 Wii
* 移动硬盘/U 盘或 SD 卡
* 您所需的模组文件
* 所需模组的光盘的原版拷贝
* 正常工作的光驱
* [Riivolution](https://oscwii.org/library/app/riivolution)

#### 准备文件

1. 解压 Riivolution 并将其放在 SD 卡或 U 盘的 `apps` 文件夹中。
2. 按照下图将模组文件解压到 SD 或 U 盘中。 根据您下载的模组，他可能已经为您设置了正确的结构，也可能没有。
3. 将 SD 卡和/或 U 盘插入 Wii，然后从 Homebrew Channel 启动 Riivolution。
4. 将光盘插入 Wii。
    * 可选步骤：您可以选择右侧的安装选项将官方的 riivolution 转发频道安装到 Wii 菜单中。 这样就不必在每次启动 riivolution 时都启动 homebrew channel 了。
5. 启用模组并选择启动。 根据不同的模组，您可能会有不同的选项。

请注意您的模组适用的区域。 NTSC 适用于美国和日本，PAL 适用于欧洲和韩国。
{: .notice--info}

#### 文件结构

每个 Riivolution 模组都不尽相同，取决于您选择的模组，其中包含的文件可能多于或少于此图。
{: .notice--info}

不要与实际的 Riivolution 应用和根目录下的 Riivolution 文件夹混淆。
{: .notice--info}

<details id="Riivolution-Files" class="notice--info" markdown="1">
<summary><a>点击这里以查看文件结构示例。</a></summary>

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

[继续浏览网站导航](site-navigation)<br> 我们还有许多其它您可能会喜欢的教程。
{: .notice--info}
