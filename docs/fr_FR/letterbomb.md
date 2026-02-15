# Donations

LetterBomb est un exploit pour la Wii qui est déclenché à l'aide du Bureau Wii.

::: info

Pour des instructions sur la façon de formater correctement votre carte SD, veuillez consulter [ce guide](https://wiki.hacks.guide/wiki/Formatting_an_SD_card). Il est fortement recommandé de vérifier en raison de problèmes de formatage en FAT32.

:::

::: warning

N'utilisez PAS les adresses MAC d'exemple affichées dans ce guide, car elles provoqueront simplement une erreur sur le site web de HackMii. Utilisez la vôtre !

:::

## Prérequis

- Une carte SD formatée en FAT32 (de 32 GO ou moins)
- Une Wii sur le menu système version 4.3
- A Windows/macOS/Linux computer with an Internet connection

## Instructions

1. Éteignez votre console.

2. On your Wii, go to `Wii Settings` -> `Internet` -> `Console Information` and make note of your MAC address.

3. Prenez note dans le coin supérieur droit de la lettre à côté de la version du système.

   - Cette lettre est la région du menu système, que vous devrez connaître pour les étapes qui en ont besoin.
   - Assurez-vous également que vous êtes sur le menu système version 4.3.

   ![](/images/wii/SystemMenuVersion.png)

4. Naviguez vers `Internet` > `Informations générales`.

5. Prenez note de votre adresse MAC COMPLET.

   ![](/images/wii/MacAddress.png)

6. Sur votre ordinateur, ouvrez le navigateur et allez sur [le site Web de HackMii](https://please.hackmii.com/).

7. Visit [please.hackmii.com](https://please.hackmii.com/), input your Wii MAC and region, ensure `Bundle the HackMii Installer for me!` is checked, and cut either wire.

8. HackMii Screen

9. Cliquez sur un des deux boutons.

   ![](/images/exploits/letterbomb/LetterBomb-PC.png)

10. Insérez votre carte SD dans votre ordinateur.

11. Copiez le dossier `private` et le fichier `boot.elf` de LetterBomb`.zip` à la racine de votre carte SD.

12. Extract the contents of the downloaded ZIP to the root of your SD card.
    - La carte SD doit être insérée dans le port carte SD située devant la Wii. Using a USB adapter plugged into the Wii's USB port will not work.

13. Take out your SD card and insert it in your Wii.

14. On your Wii, return to the Wii Menu and then open the Wii Message Board.

15. Load the red letter with a bomb icon.
    - Assurez-vous que la date sur votre Wii est correcte, sinon vous pourriez ne pas trouver la lettre.
    - In some cases, you may need to check the messages for tomorrow or yesterday for the letter to show up.
    - If you don't see the red letter, check if any errors appear in the SD card sections in `Data Management`. S'il y a une erreur, il peut y avoir un problème avec le format de la carte SD ou le port carte SD de la Wii.
    - If your Wii freezes after clicking on the letter, you probably chose the wrong region when downloading the exploit. Redo Step 2 and select the correct region.
    - Si tout est correct et que la console gèle (freeze) toujours, continuez à re-essayer jusqu'à ce que cela fonctionne.

16. Si l'exploit a réussi, votre console aura chargé l'installeur HackMii.

![](/images/exploits/letterbomb/LetterBomb-Wii.png)

::: tip

[Continuer vers l'installation de Homebrew Channel et de BootMii](hbc)
{: .notice--info}

:::
