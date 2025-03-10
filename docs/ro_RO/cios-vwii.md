# d2x cIOS pentru vWii

:::details Technical Details (optional)

cIOS (Custom IOS) are IOS that are patched to allow custom functionality. Chiar dacă [cIOS-ul](https://wiibrew.org/wiki/Custom_IOS) a fost în mare înlocuit de AHBPROT, care oferă acces complet a hardware-ului, acesta încă are aplicații folositoare. De exemplu, acesta permite folosirea unor USB loader-e precum USB Loader GX și WiiFlow, precum și alte aplicații homebrew precum SaveGame Manager GX. Poți sări acest proces dacă vrei, dar în general îți îmbunătățește consola Wii fără niciun dezavantaj.

:::

::: warning

This guide is only intended for Wii U users.

Dacă ai un Wii, urmărește în schimb [acest ghid](cios).

Dacă ai un Wii mini, urmărește în schimb [acest ghid](cios-mini).

:::

::: warning

Nu încerca să instalezi un IOS Wii/Wii mini sau System Menu pe un vWii. Făcând acest lucru este foarte probabil să cauzezi [brick](bricks#ios-brick) consolei tale.

:::

## Requirements

- A Wii U with the Homebrew Channel installed on the vWii
- Un card SD
- [d2x cIOS Installer](/assets/files/d2x_cIOS_Installer-vWii.zip).

::: warning

Asigură-te că dacă folosești un card SD, comutatorul de blocare este în poziția deblocată, altfel nu vei putea alege opțiunile corecte în instalator.

:::

## Instructions

### Secțiunea I – Instalarea

1. Copiază folderul `apps` în `.zip`-ul d2x-cios-installer din directorul principal al cardului tău SD.
2. Scoate cardul SD din PC-ul tău și inserează-l în Wii U.
3. Pornește Wii U și deschide vWii.
4. Deschide Homebrew Channel.
5. Deschide d2x cIOS Installer.
6. Setează opțiunile astfel:
   - Selectează ca cIOS: `d2x-v11-beta2-vWii`
   - Selectează ca cIOS base: `56`
   - Selectează ca cIOS slot: `249`
7. Apasă butonul `A` pentru a instala.
8. Setează opțiunile astfel:
   - Selectează ca cIOS: `d2x-v11-beta2-vWii`
   - Selectează ca cIOS base: `57`
   - Selectează ca cIOS slot: `250`
9. Apasă butonul `A` pentru a instala.
10. Setează opțiunile astfel:
    - Selectează ca cIOS: `d2x-v11-beta2-vWii`
    - Selectează ca cIOS base: `58`
    - Selectează ca cIOS slot: `251`
11. Apasă butonul `A` pentru a instala.
12. Apasă butonul `B` pentru a ieși.

- Odată ce ai terminat cu toate cele 3 cIOS-uri, apasă B pentru a te întoarce în Homebrew Channel.

::: tip

Continue to [Finalizing Setup](vwii-finalizing-setup)

:::
