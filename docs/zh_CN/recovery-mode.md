# Recovery Mode

Recovery Mode is a last resort method for recovering your Wii console from a brick before resorting to hard-modding and manual NAND programming. This mode was accessed by Nintendo employees in the factory by the usage of a special dongle, but the input needed to access it can easily be replicated with a GameCube controller. Essentially, Recovery Mode puts a Wii Menu in a state where programs can be executed from a disc. This mode was accessed by Nintendo employees in the factory by the usage of a special dongle, but the input needed to access it can easily be replicated with a GameCube controller. Essentially, Recovery Mode puts a Wii Menu in a state where programs can be executed from a disc.

## How Recovery Mode Works

On System Menu versions 2.1 and upwards, booting into Recovery Mode will yield a version number display on the bottom right of the screen, and will idle on the screen while waiting for a disc to be inserted. By default, Recovery Mode only boots two types of discs:

- A disc whose title ID starts with a number like 0 or 1 - an autoboot disc. All retail game discs are **not** an autoboot disc and instead start with a letter.
- A retail game disc that has a valid update partition whose version is higher than the one on the NAND.

This check can be bypassed using Priiloader, which allows Recovery Mode to boot any disc that is inserted into the Wii. Unfortunately, if you can already access Priiloader, then there is no need to use Recovery Mode in the first place as you can fix your brick by booting homebrew apps in it. With this said, if you are in a situation where the only accessible option is using Recovery Mode, you must have a drivechip on hand to bypass the disc check. If are able to bypass this check one way or another, you may follow the instructions below to start from Recovery Mode and get to the HackMii installer. Unfortunately, if you can already access Priiloader, then there is no need to use Recovery Mode in the first place as you can fix your brick by booting homebrew apps in it. With this said, if you are in a situation where the only accessible option is using Recovery Mode, you must have a drivechip on hand to bypass the disc check. If are able to bypass this check one way or another, you may follow the instructions below to start from Recovery Mode and get to the HackMii installer.

## Accessing and Using Recovery Mode

### 需要

- A GameCube controller
- If the Diagnostic Disc Check was previously removed with Priiloader, or if a drive chip is on hand:
    - Super Smash Bros. Brawl ([Smash Stack](legacy-exploits#smash-stack)) OR
    - Any other exploited Wii game, with the current exploit game save on the console (see [Legacy Exploits](legacy-exploits)) OR
    - Any retail game, and access to the [Bluebomb](bluebomb) exploit
- An original revision Wii (Family Edition Wiis will not work due to the lack of GameCube ports - otherwise you must solder some on)
- A Windows/macOS/Linux PC with an Internet connection
- An SD Card formatted to FAT32

### Preparation

::: warning

In order to hold down all 4 individual D-Pad buttons on a GameCube controller, you may be required to take the casing apart.

:::

First of all, verify that your Wii can boot into Recovery Mode _at all_. This involves taking a GameCube controller, plugging it into the fourth controller port on a Wii, and simultaneously holding down the 4 individual D-Pad buttons on boot. If everything goes right, you should see a screen similar to the above. As stated above, if you are on a System Menu version on 2.0 or prior, you will not see a version number display at all and you will not be able to boot from discs.

### Method I - Recovery Menu to Smash Stack

1. If you have a Super Smash Bros. Brawl game disc, you can use [Smash Stack](legacy-exploits#smash-stack) to load the HackMii installer off of your SD card.
2. Boot into Recovery Mode, and insert the Super Smash Bros. Brawl game disc. It should boot at this point. It should boot at this point.
3. Follow the instructions for the exploit on Wiibrew.

### Method II - Recovery Menu to Save Game Exploit

1. If you already have a save game on your Wii for a save game exploit listed in [Legacy Exploits](legacy-exploits), you may use a respective exploit in order to load the HackMii installer.
2. Boot into Recovery Mode, and insert your respective game disc. It should boot at this point. It should boot at this point.
3. Follow the instructions for the exploit on Wiibrew.

### Method III - Recovery Menu to Bluebomb

You can also use Bluebomb as a means of recovery. At this time, we are still drawing up instructions for this section. At this time, we are still drawing up instructions for this section.

::: info

At this point, you should be able to install the Homebrew Channel and access homebrew on your SD card that can be used to revert your brick.

:::

::: tip

[Return to Bricks](bricks)

:::

::: tip

[点击此处返回站点索引。](site-navigation)

:::
