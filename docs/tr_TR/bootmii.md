# BootMii Yedekleme

BootMii Wii'nizin NAND depolamasını yedekleme ve geri yükleme için imkan sağlar. Bu sayfa size Wii'nizin NAND depolamasını bir SD card'a yedeklemeniz konusunda yardımcı olur, böylece istediğiniz zaman istediğiniz gibi kullanabilirsiniz.

Please read the below information before proceeding further.

:::details Important Information

- After the completion of this guide, two files will have been created on the root of your SD Card: `nand.bin` and `keys.bin`. `nand.bin` is a backup of your console's internal memory, while `keys.bin` are your console's keys.

- If you have BootMii installed as boot2 you will need to launch BootMii by restarting the console. Eğer durumunuz bu ise, birinci ve ikinci aşamaları atlayabilirsiniz.

- You must use the buttons on your console or a GameCube controller plugged into port 1 to navigate BootMii. To navigate with a GameCube controller, click left/right on the +Control Pad to move, and press A to select. To navigate with your console buttons, press `POWER` to move right, and press `RESET` to select.

- Please note that **restoring a NAND backup is usually a last resort**. With that said, you can use the [BootMii Recovery guide](bootmiirecover) to restore your NAND backup, where more information is provided about the risks and alternatives.

- Family Edition Wiis and Wii minis CANNOT restore NAND backups. This is because of the lack of GameCube ports which are required on non-boot2 Wiis to enter the restoration confirmation code.

:::

::: danger

**Important Warnings**

- You need an **SD card** to use BootMii at all, but especially to create a NAND backup. Eğer şu anda bir SD card'ınız yoksa bu sayfayı atlayabilirsiniz, ama en tez zamanda buraya dönüp NAND depolamanızı yedeklemeniz ŞİDDETLE ÖNERİLİR.

- If the `Launch BootMii` button does not appear in the Homebrew Channel, [re-launch the HackMii Installer](hackmii) and install BootMii.

- If the screen stays black and the blue disc drive light is blinking, you are missing the BootMii files on your SD card. Download [this zip file](/assets/files/bootmii_sd_files.zip) and extract it to the root of your SD card, then try again.

:::

## Requirements

- An SD card with at least 512MB of free space

## Instructions

1. Power on your console.

2. Launch the Homebrew Channel, and launch the Load Priiloader app.

3. Press the HOME Button, then select "Launch BootMii".

   ![](/images/bootmii/BootMii_HBC.png)

4. Şimdi buna benzer bir ekran görmüş olmanız gerekir:

   ![](/images/bootmii/BootMii_Main.png)

5. Select the Options button (the icon with the gears).

   ![](/images/bootmii/BootMii_Gears.png)

6. Soldan ilk butonu seçin.

   ![](/images/bootmii/BootMii_Backup.png)

7. Bir NAND yedeklemesi başlayacaktır. Ekranda süreci izleyebilirsiniz.

   - "Bad Blocks" are normal. Bunları bir NAND yedeklemesinde gördüğünüzde endişelenmeyin.

   ![](/images/bootmii/BootMii_NAND_Backup.png)

8. After this step, it will verify the backup. İdeal olarak, bütün bloklar doğrulama sürecinden sonra yeşil olmalıdır.

   - Eğer düzeltilemeyecek kötü bloklarınız var ise, bu bloklar doğrulanamayabilir. Bütün kötü olmayan bloklar doğrulandığı sürece, hiçbir sorun olmayacaktır.

   ![](/images/bootmii/BootMii_NAND_Backup_Verify.png)

9. To exit BootMii, press the Back button (the one with the arrow) and then you can press either the Wii Menu button or the Homebrew Channel button to exit where you want to.

   ![](/images/bootmii/BootMii_Return.png)

## Otomatik önyükleme

Eğer BootMii'yi boot2 olarak kurabilmişseniz, ancak Wiinizi her açtığınızda BootMii ekranını görmek istemiyorsanız, otomatik olarak sistem menüsünü açma seçeneğiniz vardır. Böylece BootMii'yi boot2 olarak kurduğunuzun farkına bile varmazsınız.

1. Open `SD:/bootmii/bootmii.ini` with a text editor, such as notepad.
2. Change `#AUTOBOOT=SYSMENU` to `AUTOBOOT=SYSMENU` by deleting the `#`.
3. Then change `#BOOTDELAY=5` to `BOOTDELAY=1` by deleting the `#` and turning the `5` into a `1`.
4. Dosyayı kaydedin ve çıkın.

::: info

You can also use the [BootMii Config Editor](https://oscwii.org/library/app/BootMiiConfigurationEditor) app on the Wii to change these settings.

:::

## Dolphin Emulator'a NAND yedeklemesini yüklemek

NAND yedeklemeniz Dolphin Emulator'da kullanılabilir. This is completely optional.

1. Get the latest beta or development release of Dolphin Emulator from the [Dolphin Website](https://dolphin-emu.org/) and install it to your device.
2. Dolphin Emulator'ü açın.
3. Click on the `Tools` tab, scroll down to `Manage NAND`, then select `Import BootMii NAND backup...`.
4. Locate the `nand.bin` found on the root of your SD card and select Open.
5. If it asks for a `keys.bin`, locate it on the root of your SD and select Open.

---

::: tip

[Continue to Priiloader Installation](priiloader)

Priiloader adds a secondary level of brick protection, and is highly recommended even if BootMii was installed as boot2. BootMii'yi sadece bir IOS olarak kurabildiyseniz çok önemlidir.

:::
