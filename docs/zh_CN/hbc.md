::::: tabs

:::: tab Wii

# 安装Homebrew Channel和BootMii

:::details 技术细节 (可选)

BootMii can be installed in two ways: directly to a part of the Wii bootloader called boot2, and via an IOS. BootMii under boot2 is preferred as it provides extended brick protection, but Wiis with a vulnerable boot1 that allows this installation are considerably rarer, having been manufactured before 2009. 如果您无法安装 BootMii，请继续<a href="priiloader">安装 Priiloader</a>。 BootMii under boot2 is preferred as it provides extended brick protection, but Wiis with a vulnerable boot1 that allows this installation are considerably rarer, having been manufactured before 2009. In most cases, installing BootMii as IOS should be fine, as long as you also install [Priiloader](priiloader).

:::

::: warning

如果您没有 SD 卡，您无法安装也不能使用 BootMii，因此也就无法享受到上述任何好处。

You can always [install it later](hackmii).

:::

## 步骤

1. Your console should be powered on and showing the HackMii Installer from the previous part of the guide.

   - 你将看到诈骗警告屏幕。

   ![](/images/hackmii/scam.png)

2. 等待30秒，直到"Press 1 to continue"出现，然后按1。

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

11. Homebrew Channel 安装成功

    ![](/images/hbc/blank.png)

## 必读

您现在可以使用 Homebrew Channel 启动自制应用程序。

这里有个提示 - 当在您的 SD 卡或 U 盘上安装自制软件时，您的文件夹结构应该如下所示：

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

提示：您可以通过以下方式判断 Wii 是否已将 BootMii 安装为 boot2：当您按下 POWER 按钮后，光驱只会在立即的一次闪烁后非常短暂地闪烁。

:::
::::

:::: tab Wii mini

# Homebrew Channel

:::details 技术细节 (可选)

Homebrew Channel 是您启动自制应用的地方。

:::

::: warning

虽然在 Wii mini 上安装 BootMii 是可能的，但您需要焊接 SD 卡槽。 这需要使用特殊工具打开 Wii mini，因此不推荐这样做。

:::

## 步骤

1. Your console should be powered on and showing the HackMii Installer from the previous part of the guide.

   - 你将看到诈骗警告屏幕。

   ![](/images/hackmii/scam.png)

2. 等待30秒，直到"Press 1 to continue"出现，然后按1。

3. Select `Continue`.

   ![](/images/hackmii/test_results.png)

4. Select `Install the Homebrew Channel`.

   ![](/images/hackmii/hbc_install.png)

5. Once it is completed, select `Continue`

   ![](/images/hackmii/hbc_install_ok.png)

6. Select `Exit`.

7. Homebrew Channel 安装成功

   ![](/images/hbc/blank.png)

## 必读

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
