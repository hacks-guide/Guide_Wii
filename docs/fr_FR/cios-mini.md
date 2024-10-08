# d2xl cIOS pour Wii mini (experimental)

::: info

Si vous avez besoin d'aide pour tout ce qui concerne ce tutoriel, veuillez rejoindre [le serveur Discord Wii mini Hacking](https://discord.gg/6ryxnkS) (recommandé)
{: .notice--info}

:::

:::details Technical Details (optional)

Cette version de `d2x cIOS installer` a été initialement développé pour la vWii de la Wii U par DaveBaol et les cIOS pour la Wii Mini ont étés créés par Leseratte. La page originale de téléchargement peut être trouvée [ici](https://wii.leseratte10.de/d2xl-cIOS/). Leseratte's Github page can be found [here](https://github.com/Leseratte10/d2xl-cios). Veuillez noter que ce cIOS est encore expérimental, bien qu'aucun problème de fonctionnalité n'ait été signalé.

:::

::: warning

This guide is only intended for Wii Mini users.

<br/> If you have a Wii, follow [this guide](cios) instead.

<br/> If you have a Wii U (vWii), follow [this guide](cios-vwii) instead.

:::

::: warning

Do not attempt to install a Wii/vWii IOS or System Menu on the Wii mini. Doing so will likely brick your console.

:::

## Prérequis

- Un Wii Mini avec la Chaîne Homebrew installée
- Une clé USB
- [d2xl cIOS Installer](/assets/files/d2xl_wii_mini_cIOS_installer_v1_beta2.zip) par Laseratte

## Instructions

### Section I - Téléchargement

1. Éteignez votre console.
2. Insérez votre clé USB dans votre ordinateur.
3. Create a folder named `apps` on the root of your USB drive if it does not already exist.
4. Extract the d2xl cIOS Installer to the `apps` folder on your USB drive.
5. Réinsérez votre clé USB dans votre console.
6. Allumez votre console.
7. Lancez la Chaîne Homebrew.
8. Lancez d2x cIOS Installer parmi la liste des homebrew.

### Section II - Installation

1. Sélectionnez `Continue`.
2. Press continue, then set the options to the following:
   ```
   Select cIOS <d2xl-v1-beta2>
   Select cIOS base <57>
   Select cIOS slot <249>
   ```
   - Prenez note du numéro de version en dessous de "notes" (`IOS57-64-` se termine par `v31776` ou `v31775`)
3. Once set, press A to install.
   - Si l'installation échoue avec une version `TMD version mismatch` , appuyez sur la gauche ou la droite avec la croix directionnelle sur l'option `Select cIOS base` jusqu'à ce que le numéro de version soit différent de celui que vous avez essayé auparavant. Le numéro 57 ne changera pas.
4. Once done successfully, exit the installer.

::: tip

[Continue to making a NAND Backup using RealWnd](wnd-mini)
{: .notice--info}

:::

### Activer Ethernet

Si vous souhaitez utiliser Wiimmfi avec Ethernet sur une Wii mini, vous devez exécuter l'application [Ethernet Enabler](/assets/files/Wii_Mini_Ethernet_Enable.zip) réalisée par Fullmetal5. Pour l'exécuter, décompressez-le simplement dans le dossier `apps` de votre clé USB et exécutez-le depuis la Chaîne Homebrew.

::: info

Les consoles Wii et Wii Mini ne fonctionnent qu'avec les adaptateurs Ethernet avec la puce AX88772. Veuillez vérifier que le produit est compatible avant d'acheter. Celui-ci de UGREEN est connu pour être compatible : [Amazon Europe](https://www.amazon.de/dp/B00MYT481C), [Amazon US](https://a.co/d/3OcSJDS)
{: .notice--info}

:::

::: tip

[Cliquez ici pour revenir à l'index du site.](site-navigation)
{: .notice--info}

:::
