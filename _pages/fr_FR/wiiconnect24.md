---
title: "WiiConnect24"
---

{% include toc title="Table of Contents" %}

Ce guide fournit différents moyens de retrouver les fonctionnalités de WiiConnect24 sur votre console. Bien que pas nécessaire, c'est une fonctionnalité "agréable à avoir" qui a été utilisée à l'origine pour la connectivité en ligne de certaines applications sur la console. Ces applications incluent la Chaîne météo/infos, la Chaîne Nintendo, la Chaîne concours Mii, certaines chaînes exclusives au Japon et plus encore. N'oubliez pas que les fonctionnalités dont vous profiterez dépendent entièrement du ou des services que vous utilisez.

### Aperçu des services

#### Note sur la compatibilité des services :
Les deux services ci-dessous sont compatibles l'un avec l'autre et peuvent être installés sur la même console. Ceci étant dit, il convient de noter que lors de l'installation d'une chaîne sur l'autre (la Chaîne météo de WiiLink au lieu de la Chaîne météo de RiiConnect24 par exemple), la chaîne que vous installez remplacera l'ancienne.


#### Service Support Status
✅ - Supporté<br> ⚠️ - En développement<br> ⛔ - Pas de support

| Nom du service       | WiiLink | RiiConnect24 |
| -------------------- | ------- | ------------ |
| Chaîne météo         | ✅       | ✅            |
| Chaîne infos         | ⚠️      | ✅            |
| Wii Mail             | ⚠️      | ✅            |
| Chaîne votes         | ✅       | ✅            |
| Chaîne Nintendo      | ✅       | ✅            |
| Chaîne concours Mii  | ⚠️      | ✅            |
| Wii Room             | ✅       | ⛔            |
| Food Channel         | ✅       | ⛔            |
| Photo Prints Channel | ✅       | ⛔            |
| Chaîne TV Kirby      | ✅       | ⛔            |

#### WiiLink
A newer WC24/Japanese channel revival service that started in 2020, but is rapidly regaining functionality in many different channels.

Service support status can be found [here](https://www.wiilink24.com/status).<br> Their guide can be found [here](https://www.wiilink24.com/guide/2installation/).

#### RiiConnect24
The longest lasting WC24 revival service, currently only with support for the worldwide WC24 channels as well as mail services.

Service support status can be found [here](https://rc24.xyz/stats/).<br> RiiConnect24 currently does not have a self-hosted guide, however you can find ours [here](riiconnect24).

### Updating RTC Clock
If you choose to install either of these services on your Wii, it is advised to synchronize its external clock in order to prevent various issues (such as inability to use said services) that may arise otherwise. The steps to do so can be found below:

#### What you need
+ Une connexion Internet fonctionnelle sur votre Wii
+ La Chaîne Homebrew
+ Une carte SD ou une clé USB
+ [sntp](https://oscwii.org/library/app/sntp)

#### Instructions
1. Download and extract the sntp zip to the root of your SD card or USB drive.
1. Insert your SD card or USB drive into your Wii.
1. Launch the Homebrew Channel on your Wii.
1. Launch sntp.
1. Use the +Control Pad to select the current time.
1. Press the HOME Button to exit.

[Proceed to Nintendo Wi-Fi Connection](wiimmfi)<br> This guide takes the process of regaining online functionality to your Wii a step further - by allowing the Nintendo Wi-Fi Connection services to function yet again on certain games like Mario Kart Wii. While there are different private servers and services that allow this, the one covered here will be Wiimmfi.
{: .notice--info}
