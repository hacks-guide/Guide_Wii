# Instalação do Homebrew Channel e do BootMii

:::details Technical Details (optional)

BootMii pode ser instalado de duas maneiras: diretamente em uma parte do bootloader do Wii, chamado boot2, ou através de uma IOS. Na maioria dos casos, instalar o BootMii como IOS não deve ter problemas, contanto que você também instale o <a href="priiloader">Priiloader</a>. In most cases, installing BootMii as IOS should be fine, as long as you also install [Priiloader](priiloader).

:::

::: warning

Se você não tem um cartão SD, você não pode instalar nem usar o BootMii, e assim não poderá utilizar nenhum dos benefícios mencionados.
You can always [install it later](hackmii).

:::

## Instructions

1. Seu console deve estar ligado e mostrando o HackMii Installer da parte anterior do guia.

    - Você verá uma tela de aviso de golpe.

    ![](/images/hackmii/scam.png)

2. Espere 30 segundos para o texto "Press 1 to continue" aparecer, depois aperte 1.

3. Select `Continue`.

    ![](/images/hackmii/test_results.png)

4. Select `Install the Homebrew Channel`.

    ![](/images/hackmii/hbc_install.png)

5. Once it is completed, select `Continue`.

    ![](/images/hackmii/hbc_install_ok.png)

6. Select `Back`, then select `BootMii`.

    ![](/images/hackmii/bootmii_install.png)

7. Select `Install BootMii as IOS`.

    ![](/images/hackmii/bootmii_install1.png)

    ![](/images/hackmii/bootmii_install2.png)

    ![](/images/hackmii/bootmii_install3.png)

    ![](/images/hackmii/bootmii_install_ok.png)

8. Once it is completed, select `Continue`.

9. If you have the option to `Install BootMii as boot2`, please do so as well.

    ![](/images/hackmii/bootmii_install4.png)

10. Select `Exit`.

11. Seu console terá iniciado o Homebrew Channel.

    ![](/images/hbc/blank.png)

## Leitura Obrigatória

Agora você pode usar o Homebrew Channel para iniciar aplicativos homebrew.

Aqui está uma dica - ao instalar aplicativos homebrew em seu cartão SD ou pendrive/armazenamento USB, a estrutura da pasta deve ficar assim:

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

::: tip

[Continue to making a NAND Backup using BootMii](bootmii)

Making a NAND backup at this point is highly recommended, as they can be used to recover from bricks.

:::

::: tip

Dica: Você pode perceber se um Wii tem o BootMii instalado como boot2 se seu slot de disco piscar muito rapidamente, só depois do flash imediato que acontece quando você pressiona o botão POWER.

:::
