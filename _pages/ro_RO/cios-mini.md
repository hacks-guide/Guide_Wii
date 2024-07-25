---
title: "cIOS d2xl pentru Wii mini (experimental)"
---

{% include toc title="Tabel de Conținut" %}

Dacă ai nevoie de ajutor referitor la acest tutorial, te rog să intri pe [serverul de Discord Wii mini Hacking](https://discord.gg/6ryxnkS) (recomandat)
{: .notice--info}

{% capture technical_info %}
<summary><em>Detalii Tehnice (opțional)</em></summary>
cIOS (IOS Custom) sunt IOS-uri modificate, care permit funcționalitatea custom. Chiar dacă [cIOS](https://wiibrew.org/wiki/Custom_IOS) a fost în mare înlocuit de AHBPROT, care oferă acces complet a hardware-ului, acesta încă are aplicații folositoare. De exemplu, acesta permite folosirea unor USB loader-e precum USB Loader GX și WiiFlow, precum și alte aplicații homebrew precum SaveGame Manager GX. Poți sări acest proces dacă vrei, dar în general îți îmbunătățește consola Wii fără niciun dezavantaj.

Acest instalator de cIOS d2x a fost dezvoltat original pentru vWii-ul consolei Wii U de către DaveBaol iar cIOS-ul modificat a fost creat de către Leseratte pentru Wii mini. Pagina originală de descărcare poate fi găsită [aici](https://wii.leseratte10.de/d2xl-cIOS/). Pagina de GitHub al lui Leseratte poate fi găsită [aici](https://github.com/Leseratte10/d2xl-cios). Reține că acest cIOS încă este experimental, însă nicio problemă nu a fost raportată legată de funcționalitate încă.

{% endcapture %}
<details>{{ technical_info | markdownify }}</details>
{: .notice--info}

This guide is only intended for Wii Mini users. <br/> If you have a Wii, follow [this guide](cios) instead. <br/> If you have a Wii U (vWii), follow [this guide](cios-vwii) instead.
{: .notice--warning}

Nu încerca să instalezi un IOS Wii/vWii sau System Menu pe un Wii mini. Făcând acest lucru este foarte probabil să cauzezi [brick](bricks#ios-brick) consolei tale.
{: .notice--warning}

### Instrumente necesare

* Un Wii mini cu Homebrew Channel instalat
* O unitate USB
* Aplicația [d2xl cIOS Installer](/assets/files/d2xl_wii_mini_cIOS_installer_v1_beta2.zip) al lui Leseratte

### Instrucțiuni

#### Secțiunea I - Descărcare

1. Oprește-ți consola.
1. Introdu unitatea ta USB în calculatorul tău.
1. Creează un dosar numit `apps` în rădăcina unității tale USB dacă nu există deja.
1. Copiază dosarul `d2x-cios-installer` din fișierul `.zip` d2xl cIOS Installer în dosarul `apps` din unitatea ta USB.
1. Reintrodu unitatea USB în consola ta.
1. Pornește consola.
1. Rulează Homebrew Channel.
1. Rulează d2xl cIOS Installer din lista de aplicații homebrew.

#### Secțiunea II – Instalare

1. Alege `Continue`.
1. Setează opțiunile la următoarele:
    ```
    Select cIOS <d2xl-v1-beta2>
    Select cIOS base <57>
    Select cIOS slot <249>
    ```
    + Notează undeva numărul de versiune de sub "notes" (`IOS57-64-` care se termină în `v31776` sau `v31775`)
1. Apasă a pentru a instala.
    + Dacă instalarea eșuează cu o eroare `TMD version mismatch`, apasă stânga sau dreapta pe +Control Pad peste opțiunea `Select cIOS base` până când numărul de versiune este diferit de cel pe care l-ai încercat mai devreme. Numărul 57 nu se va schimba.
1. Odată ce procesul este complet, ieși din aplicație.

[Continuă să faci un Backup a memoriei NAND folosind RealWnd](wnd-mini)
{: .notice--info}

#### Activarea Ethernet

Dacă dorești să folosești Wiimmfi cu Ethernet pe un Wii mini, va trebui să rulezi aplicația homebrew [Ethernet Enabler](/assets/files/Wii_Mini_Ethernet_Enable.zip) creată de Fullmetal5. Pentru a o rula, doar dezarhivează-l în dosarul `apps` al unității tale USB și rulează-l din Homebrew Channel.

Consolele Wii și Wii mini sunt știute să meargă numai cu adaptoarele de Ethernet care folosesc chipul AX88772. Te rugăm să verifici dacă produsul este compatibil înainte să-l cumperi. Acesta este de la UGREEN și este știut să fie compatibil: [Amazon Europa](https://www.amazon.de/dp/B00MYT481C), [Amazon SUA](https://a.co/d/3OcSJDS)
{: .notice--info}

[Click aici pentru a reveni la cuprinsul site-ului.](site-navigation)
{: .notice--info}
