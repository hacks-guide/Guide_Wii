---
title: WiiLink Food Delivery Channel (Domino's) Guide
---

{% include toc title="Table of Contents" %}

If you need help for anything regarding this tutorial, please join [the WiiLink Discord server](https://discord.gg/wiilink-750581992223146074).
{: .notice--info}

You no longer need to pay $1 to get and use Food Delivery Channel (Domino's). It's now completely _free_!
{: .notice--info}

As this service places an order to Domino's Pizza, payment is required at the door. This is usually in the form of cash, although credit/debit card machines are possible if the delivery person has one.
{: .notice--info}

Currently, only the USA and Canada are supported.
{: .notice--warning}

You cannot use the default Dolphin NAND with this service. You must use your own NAND dump. This can be done in Dolphin by going to the toolbar and clicking `Tools -> Manage NAND -> Import BootMii NAND Backup`.
{: .notice--warning}

#### What you need

- An SD card or USB drive
- A Wii console with an active internet connection
- A computer with an active internet connection
- A Discord account

#### Instructions

##### Section I - Getting Started

1. Download the latest version of the WiiLink Patcher, available [here](https://github.com/WiiLink24/WiiLink24-Patcher/tree/csharp-ver).
2. Make sure to download the version in the README that corresponds to your operating system.
3. Launch the patcher and begin the setup process.
4. When you see the setup screen, select `1. English Translation` in order to gain access to the Food Delivery Channel (Domino's) channel.<br><br>
   ![Express Install](/images/demae-dominos/choose-core-channel.png)
5. Next, you’ll see this screen, asking which version of Food Delivery Channel you want, so you’ll want to pick `2. Domino's (US and Canada only)`<br><br>
   ![Food Delivery Channel Setup](/images/demae-dominos/choose-food-channel-ver.png)
6. After that, you can go through the rest of the process, but once you reach this step, be sure to pick the correct console platform you’re installing this on, as it will matter when using the app.<br><br>
   ![Console Platform](/images/demae-dominos/choose-console-platform.png)

##### Section II - Registering your Console ID

1. After completing the setup process, go to the [**WiiLink Discord server**](https://discord.gg/wiilink-750581992223146074) to register your Wii's console ID.
2. Use the `Get Console ID` Homebrew app, that was given by the patcher, to retrieve your system's console ID.
3. Visit the `#dominos-chat` channel on the Discord server.
4. Type the command `/dominos <your console ID>` in the chat, replacing `<your console ID>` with your actual console ID. Make sure the ID is in the parameter box, otherwise the command will not work and will be posted publicly on the channel.
5. Double-check that you've typed the correct console ID, as it can't be re-registered. If you need to re-register, ask a staff member in the server for assistance.

##### Section III - Installing WADs

You will now install the Food Delivery Channel and Set Personal Data channels.

1. Put your SD card or USB drive in your Wii.
2. After registering your console ID, go to the Homebrew Channel and launch YAWM ModMii Edition.
3. In the WAD Manager menu, locate `Food Channel (Domino's) (English).wad`.
4. Also locate `WiiLink_SPD (Wii).wad` or `WiiLink_SPD (vWii).wad`, depending on your console platform.
5. Select both WADs by pressing `+` on each one.
6. Press `A` to install the selected WADs.

If you happen to get `Error -1022` when installing `Food Channel (Domino's) (English).wad`, uninstall the channel by selecting the WAD with `-` and pressing `A`. Then, re-install the WAD.
{: .notice--warning}

##### Section IV - Setting your address information

WiiLink never stores your personal data. For more information on what is used, read our [Privacy Policy](https://www.wiilink24.com/privacy-policy).
{: .notice--info}

You are responsible for entering your correct address information. Failure to do so may result in orders not succeeding.
{: .notice--warning}

In this section you will be setting your address information. This is required for proper usage of Demae Domino's.

1. Launch the Food Delivery Channel from the Wii Menu.
2. If you have not previously set your address information, a prompt telling you to set it will appear. Press the `Address Info` button. Otherwise, click the `Change Address Information` button in the main menu.
3. Now you are in the Address Information menu. Press the arrows to traverse screens. Here you will enter your data. When you are finished, click the `Done` button and then `Demae`.<br><br>
   ![SPD Page 1](/images/demae-dominos/spd-1.png)<br><br>
   ![SPD Page 2](/images/demae-dominos/spd-2.png)

##### Section V - Placing an order

This section requires you to have cash to pay for your meal.
{: .notice--warning}

If you have used the standard version of the Food Delivery Channel before, go to the<br>`Wii Menu settings` -> `Data Management` -> `Save Data` -> `Wii`, then find the <br>Food Delivery Channel icon and click "Erase" to delete the existing save data.
{: .notice--warning}

If you have previously placed an order, skip to step 4.
{: .notice--info}

1. Launch the Food Delivery Channel (aka. Food Channel) from the Wii Menu
2. Follow the on-screen instructions, then click `Order` in the main menu.<br><br>
   ![Main Menu](/images/demae-dominos/success.png)<br><br>
3. You will now be prompted to select your region. Be sure to select your residing country correctly. Failure to do so will result in restaurants failing to load. You will then be prompted to select your state/province, then city. If your city is not on the list, you can select any one as it does not matter.<br><br>
   ![Main Menu](/images/demae-dominos/country-setup.png)<br><br>
4. Click the `Pizza` button. This will load all the restaurants in your area. The first restaurant in the list is the one closest to you.
5. Click `See Menu` to list the different menu categories. Click the category you would like, then select a food item. In the item screen, you can add toppings and adjust quantity.
6. After adding a food item, you will be brought to the basket. To add a food item, scroll to the bottom and select `Add Order`. To proceed to checkout, click `Next`.
7. Review your order thoroughly before placing the order. When you are ready, click the big green `Order` button.<br><br>
   ![Before Order](/images/demae-dominos/order.png)<br><br>
8. If no error appeared, your order was placed successfully! To track your order, simply visit the Domino's Tracker for your region and enter the phone number you entered in the Address Information menu.

**_Happy ordering!_**

[Continue to site navigation](site-navigation)<br>
We have many other tutorials that you might like.
{: .notice--info}
