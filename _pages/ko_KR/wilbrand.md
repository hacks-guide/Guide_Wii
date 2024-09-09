---
title: "Wilbrand"
---

Wilbrand is an exploit for the Wii that is triggered using the Wii Message Board. It is compatible with Wii menu versions 3.0 through 4.3 in all regions.

There are two methods listed on this page used to create the proper Wilbrand exploit. Wilbrand Web is recommended for its ease of use.
{: .notice--info}

{% capture wilbrand-web %}

### Wilbrand Web

#### 필요한 것

* An SD card formatted to FAT32/MS-DOS
* 버전 3.0 이상의 Wii

SD cards larger than 2GB will not work on Wii menu versions before 4.0.
{: .notice--warning}

#### 진행 방법

1. 콘솔의 전원을 켜 주세요.
1. Wii에서 `Wii 설정`으로 이동하여 오른쪽 상단에 있는 버전을 기록합니다.
1. Take note of the letter next to the system version, in the top-right corner of the screen.
    + This letter corresponds to your system menu region, which you will need to know for the corresponding steps.

    ![](/images/wii/SystemMenuVersion.png)

1. `인터넷` -> `콘솔 정보`로 이동하여 MAC 주소를 기록합니다.
1. Take note of your FULL MAC address.

    ![](/images/wii/MacAddress.png)

1. On your computer, open the browser and go to [wilbrand.donut.eu.org](https://wilbrand.donut.eu.org/).
1. Natural habitat의 Wilbrand
1. Visit [wilbrand.donut.eu.org](https://wilbrand.donut.eu.org/), input your Wii MAC, version, region, ensure `Bundle the HackMii Installer for me!` is checked, and cut either wire.
1. Cut either wire.

    ![](/images/exploits/wilbrand/web.png)

1. Click on "Download your .zip".
1. Extract the contents of the downloaded ZIP to the root of your SD card.
1. Copy the `private` folder and the `boot.elf` file from the downloaded `.zip` file to the root of your SD card.
1. SD 카드를 꺼내 Wii에 연결합니다.
    + The SD card must be inserted in the SD card slot located in the front of the Wii. Using a USB adapter plugged into the Wii's USB port will not work.
1. 리눅스에서 Wilbrand 실행
1. Open the Wii Message Board.
1. 폭탄 아이콘이 있는 녹색 편지 봉투를 엽니다.

    ![](/images/exploits/wilbrand/msgboard.png)

    + Ensure the date on your Wii is correct, otherwise you might be unable to find the letter.
    + In some cases, you may need to check the messages for tomorrow or yesterday for the letter to show up.
    + 녹색 편지 봉투가 보이지 않으면 `데이터 관리`에서 SD 카드 섹션에 오류가 표시되는지 확인하세요. 이 경우 SD 카드 형식 또는 Wii의 SD 카드 리더기에 문제가 있는 것일 수 있습니다.


1. If the exploit was successful, your device will have loaded the HackMii Installer.
    + If your Wii gets stuck on a black screen, power it off by holding the POWER button, then try again.
    + If you get sent back to the Wii Menu after opening the letter, ensure that the lock switch on your SD card is in the unlocked position.

[홈브류 채널과 BootMii 설치로 계속하기](hbc)
{: .notice--info}

{% endcapture %}

{% capture wilbrand-cli %}

### Wilbrand CLI

#### 필요한 것

* 윈도우즈, 맥OS, 리눅스를 실행하는 PC
* An SD card formatted to FAT32/MS-DOS
* 버전 3.0 이상의 Wii
* [Wilbrand](https://static.wiidatabase.de/Wilbrand.zip)
* [HackMii 설치 프로그램 v1.2](https://bootmii.org/download/)

SD cards larger than 2GB will not work on Wii menu versions before 4.0.
{: .notice--warning}

#### 진행 방법

1. 콘솔의 전원을 켜 주세요.
1. Wii에서 `Wii 설정`으로 이동하여 오른쪽 상단에 있는 버전을 기록합니다.
1. Take note of the letter next to the system version, in the top-right corner of the screen.
    + This letter corresponds to your system menu region, which you will need to know for the corresponding steps.

    ![](/images/wii/SystemMenuVersion.png)

1. `인터넷` -> `콘솔 정보`로 이동하여 MAC 주소를 기록합니다.
1. Take note of your FULL MAC address.

    ![](/images/wii/MacAddress.png)

1. 가급적이면 바탕화면에 있는 PC의 폴더에 Wilbrand 압축 파일을 압축 해제합니다.
1. PC에 SD 카드를 연결합니다.
1. Wilbrand가 압축이 풀린 폴더에서 터미널을 엽니다.
1. Wii의 버전과 MAC 주소를 사용하여 다음 명령을 실행합니다:

    + 윈도우즈: `.\Wilbrand.exe AA-BB-CC-DD-EE-FF MM/DD/YYYY VERSION X:`
        + `X:`는 SD 카드의 드라이브 문자입니다.

        ![](/images/exploits/wilbrand/windows.png)

    + 리눅스/맥OS: `./Wilbrand AA-BB-CC-DD-EE-FF MM/DD/YYYY VERSION /media/mount_dir`
        + Wilbrand가 추출된 폴더에서 터미널을 직접 열지 않은 경우, 예를 들어 `cd`를 사용하여 먼저 입력합니다. `cd ~/Desktop/Wilbrand`
        + `/media/mount_dir`는 SD 카드가 마운트된 폴더입니다. 이는 리눅스 배포판에 따라 다를 수 있습니다.

        ![](/images/exploits/wilbrand/linux.png)

1. HackMii 설치 프로그램 v1.2를 PC의 폴더에 압축을 풉니다.
1. `boot.elf` 파일을 찾아 SD 카드의 루트에 넣습니다.
1. Take out your SD card and insert it in your Wii.
    + SD 카드는 Wii 전면에 있는 SD 카드 슬롯에 연결해야 합니다. Wii의 USB 포트에 연결된 USB 어댑터를 사용하면 작동하지 않습니다.
1. On your Wii, return to the Wii Menu and then open the Wii Message Board.
1. Open the Wii Message Board.
1. 폭탄 아이콘이 있는 녹색 편지 봉투를 엽니다.
    + Wii의 날짜가 정확하지 않으면 편지를 찾지 못할 수 있습니다.
    + In some cases, you may need to check the messages for tomorrow or yesterday for the letter to show up.
    + 녹색 편지 봉투가 보이지 않으면 `데이터 관리`에서 SD 카드 섹션에 오류가 표시되는지 확인하세요. 이 경우 SD 카드 형식 또는 Wii의 SD 카드 리더기에 문제가 있는 것일 수 있습니다.

    ![](/images/exploits/wilbrand/msgboard.png)

1. If the exploit was successful, your device will have loaded the HackMii Installer.
    + If your Wii gets stuck on a black screen, power it off by holding the POWER button, then try again.
    + If you get sent back to the Wii Menu after opening the letter, ensure that the lock switch on your SD card is in the unlocked position.

[홈브류 채널 및 BootMii 설치로 계속 진행하기](hbc)
{: .notice--info}

{% endcapture %}

<button class="btn btn--large btn--primary tabLink" onClick="select_tab(event, 'wilbrand-web')"> Wilbrand Web </button>
<button class="btn btn--large btn--info tabLink" onClick="select_tab(event, 'wilbrand-cli')"> Wilbrand CLI </button>

<div class="tabContent tabDefualt" id="wilbrand-web" markdown="1">

{{ wilbrand-web }}
</div>
<div class="tabContent" id="wilbrand-cli" markdown="1">
{{ wilbrand-cli }}
</div>

<script>
    const tabContents = document.getElementsByClassName('tabContent');
    const tabLinks    = document.getElementsByClassName('tabLink');

    for (tab of tabContents) { tab.style.display = 'none'; }
    document.getElementsByClassName('tabDefault')[0].style.display = 'block';

    function select_tab(event, tab_id)
    {
        for (tab of tabContents) { tab.style.display = 'none'; }
        for (btn of tabLinks) { btn.className = btn.className.replace('btn--primary', 'btn--info'); }

        document.getElementById(tab_id).style.display = 'block';
        event.currentTarget.className = event.currentTarget.className.replace('btn--info', 'btn--primary');
    }
</script>
