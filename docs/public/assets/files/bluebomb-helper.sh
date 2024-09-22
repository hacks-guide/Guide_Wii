#!/usr/bin/env bash

# BlueBomb Helper Script
# Origin    https://git.snopyta.org/twosecslater/bluebomb-helper.git
# Authors   urmum_69, twosecslater

if [[ -n $(uname -a | grep -i "Microsoft\|MSYS\|CYGWIN\|Darwin") ]]; then printf "\033[1;91mNOTICE\033[0m:\n======\n\nBlueBomb does NOT work under MacOS, Windows, nor the \"Windows Subsystem for Linux\"."; exit; fi

version="0.1.3"
helpmsg="Need further help? You can either join the Wii Mini Hacking Discord server (recommended) at https://discord.gg/6ryxnkS, the RiiConnect24 Discord server at https://discord.gg/b4Y7jfD or you can send an e-mail to support@riiconnect24.net and we'll try to assist. "

# set variable $sudo if the user is not root, so sudo is only used if absolutely needed
[[ $USER != "root" ]] && sudo0="sudo" || true

sc() {
    clear
    unset answer
    printf "\033[1mBlueBomb Helper\033[0m v%s\n\tStage: %s - %s\n" "$version" "$1" "$2" | fold -s -w "$(tput cols)"
    printf -- "=%.0s" $(seq "$(tput cols)") && printf "\n\n"
}

# clear and greet
sc 0 "Welcome"
printf "Hello %s, and welcome to the BlueBomb helper script.\n\nThis script will automatically check you have an environment capable of utilizing BlueBomb, download required files, and automate things as much as possible to make it easier for you, the end user, to perform the BlueBomb exploit on your Wii or Wii mini console.\n\n" "$USER" | fold -s -w "$(tput cols)"

# error handling
error() {
    sc 0 "Error"
    printf "\033[1;91mAn error has occurred.\033[0m\n\nERROR DETAILS:\n\t* Task: %s\n\t* Command: %s\n\t* Line: %s\n\t* Exit code: %s\n\n" "$task" "$BASH_COMMAND" "$1" "$2" | fold -s -w "$(tput cols)"

    case $task in
        "Checking prerequisites - Internet connection" | "Download and extract BlueBomb" ) printf "* NOTE:\n\t* Please ensure that your PC has an active internet connection capable of reaching github.com.\n\n" | fold -s -w "$(tput cols)" ;;
        "Execute BlueBomb" ) printf "* TROUBLESHOOTING NOTES:\n\t* If you get an error about the address/socket being already in use, try manually disabling the Bluetooth service on your PC. For systemd users, you would run 'sudo systemctl disable --now bluetooth.service', and for OpenRC users, you would run 'sudo rc-service bluetooth stop'.\n\t* If you get an error about the device failing to be powered on, try running the script again.\n\n" | fold -s -w "$(tput cols)" ;;
    esac

    #[[ -n $output ]] && printf "COMMAND OUTPUT:\n\t%s\n\n" "${output}" || true

    printf "%s\n" "$helpmsg" | fold -s -w "$(tput cols)"
    exit
}

trap 'error $LINENO $?' ERR
set -o pipefail
set -o errtrace

credit() {
    #clear
    sc 0 "Credits"
    printf "CREDITS:\n
    * Fullmetal5\t\t\tBlueBomb exploit
    * urmum_69\t\t\t\tScript author
    * twosecslater\t\t\tScript author
    * Commandblock6417\t\t\tContributor
    * Terry A. Davis\t\t\tMotivation\n\nHave fun running homebrew on your console!\n" | fold -s -w "$(tput cols)"
    exit
}

ex() {
    printf "\n%s\n\n%s\n" "$1" "$helpmsg" | fold -s -w "$(tput cols)" && exit
}


# receive parameters given on command line
while [[ "$1" =~ ^- && ! "$1" == "--" ]]; do case $1 in
    -v | --version ) printf "BlueBomb helper script\nVersion: %s\n" "$version" && exit ;;
    -r | --region ) shift; regionIn=$1 ;;
    -t | --console ) shift; consoleIn=$1 ;;
    -s | --sysmenu ) shift; sysmenuIn=$1 ;;
    -c | --credits ) credit; exit ;;
    -h | --help ) printf "\nUsage: %s [options...]\n
    * -v --version\t\t\tDisplays the current version of the script.
    * -r --region <REGION>\t\tAllows you to select a region without needing to interact with the script.
    * -t --console <CONSOLE TYPE>\tAllows you to select a console type without needing to interact with the script.
    * -s --sysmenu <SYSMENU VERSION>\tAllows you to select a system menu version without needing to interact with the script.
    * -c --credits\t\t\tDisplays the credits for this script.
    * -h --help\t\t\t\tDisplays this help message.\n\n%s\n" "$0" "$helpmsg" | fold -s -w "$(tput cols)"; exit ;;
esac; shift; done
if [[ "$1" == '--' ]]; then shift; fi

# check prerequisites

task="Checking prerequisites - Dependencies"
## detect non-linux kernel users. itoddlers btfo.
[[ -z "$(uname -s | grep 'Linux')" ]] && printf "\n\nThis script does not work on systems that don't use the Linux kernel.\n\n" && exit

## detect architecture
if [[ -n "$(uname -m | grep 'arm*\|aarch*')" ]]; then
    arch="arm"
elif [[ -n "$(uname -m | grep 'x86_64')" ]]; then
    arch="x64"
elif [[ -n "$(uname -m | grep 'i686')" ]]; then
    arch="x86"
else
    printf "Unable to use your architecture (%s).\n\n%s\n" "$(uname -m)" "$helpmsg"
    exit
fi
printf "* Detected architecture: %s\n\n" "$arch"

## detect package manager

dependencies=("unzip" "wget")

printf "Checking dependencies...\n"

# Package managers to test for
pms=("pacman" # Arch, etc.
    "apt-get" # Old Debian, etc.
    "apt" # Debian, etc.
    "brew" # macOS, etc.
    "apk" # Alpine, etc.
    "xbps-install" # Void, etc.
    "emerge" # Gentoo, etc.
    "zypper" # openSUSE, etc.
    "dnf") # Fedora, etc.
# Install commands for package managers (MUST BE IN SAME ORDER AS $pms)
pmi=("pacman -S"
    "apt-get install"
    "apt install"
    "brew install"
    "apk add"
    "xbps-install -S"
    "emerge -aqv"
    "zypper install"
    "dnf install")
for i in "${pms[@]}"; do
    [[ -x "$(command -v ${i})" ]] && pm="${i}" || true # there is probably a more efficient way of doing this - twosecslater @ June 2020
done; unset i

indep() {
    case $1 in
        "bluetoothctl" ) echo "bluez" ;;
        * ) echo "$1" ;;
    esac
}

for i in "${dependencies[@]}"; do
    [[ -z "$(command -v "$i")" ]] && missing+=("$i")
done
for i in "${missing[@]}"; do
    [[ -n $pm ]] && printf "\n* %s is missing! Attempting to install using detected package manager (you may be prompted for your password)...\n" "$i" | fold -s -w "$(tput cols)" && $sudo0 $pmi $(indep $i) || ex "* $i is missing! Please install it using your preferred package manager."
done; unset i

## detect init system
if [[ -e "$(command -v systemctl)" ]]; then
    init="systemd"
elif [[ -e "$(command -v openrc)" ]]; then
    init="openrc"
else
    printf "Unable to detect your init system.\n\n%s\n" "$helpmsg"
    exit
fi
printf "* Detected init system: %s\n\n" "$init"

download() {
    sc 1 "Prerequisites"
    [[ -e ./bluebomb/bluebomb-$arch ]] && printf "BlueBomb executable exists. Not downloading.\n" && cd bluebomb && return || true
    printf "* Downloading BlueBomb... "
    task="Download and extract BlueBomb"
    ## download zip from github
    mkdir -p bluebomb && cd bluebomb || false
    wget -q --secure-protocol=TLSv1_2 "https://github.com/Fullmetal5/bluebomb/releases/download/1.5/bluebomb1.5.zip" -O bluebomb.zip
    printf "Success!\n\n* Unpacking BlueBomb... "
    unzip -q bluebomb.zip
    rm bluebomb.zip
    printf "Success!\n\n"
}

findinfos() {
    sc 2 "Collecting information - Console type"
    task="Get console information from user"
    if [[ -z $consoleIn ]]; then
        printf "What is the console type?\n"
        ask 0 "Wii" "Wii mini"
    else answer=$consoleIn; unset consoleIn; fi
    case ${answer^^} in
        1 | "WII" ) arg1="WII_SM" ;;
        2 | "WII MINI" ) arg1="MINI_SM_" ;;
        * ) printf "Invalid selection.\n"; sleep 2; findinfos ;;
    esac
    if [[ $arg1 == "MINI_SM_" ]]; then
        if [[ -z $regionIn ]]; then
            sc 2 "Collecting information - Console region"
            printf "What is the region of your Wii Mini console?\n"
            ask 0 "USA" "PAL"
        else answer=$regionIn; unset regionIn; fi
        case ${answer^^} in
            1 | "NTSC" ) arg2="NTSC" ;;
            2 | "PAL" ) arg2="PAL" ;;
            * ) printf "Invalid selection.\n"; sleep 2; findinfos ;;
        esac
    else
        if [[ -z $sysmenuIn ]]; then
            sc 2 "Collecting information - Sysmenu version"
            printf "What is the system menu version of your Wii Console?\n\nIf you're not sure where to find this, follow the following instructions:\n\nFrom the Wii Menu, launch Wii Options (round button in the bottom left), and then launch Wii Settings. On the first page of the Wii Settings at the upper right corner, you should see 'Ver X.YZ'. Where 'X' and 'Y' are numbers, and 'Z' is a letter. An example is '4.3E'. This is your system menu version.\n\nPlease enter the system menu version and then press ENTER: " | fold -s -w "$(tput cols)"
            read -r sysmenuIn
        fi
        if [[ ! ${#sysmenuIn} == 4 ]]; then printf "Invalid selection.\n" && unset sysmenuIn && sleep 2 && findinfos;
        fi
        sysmenuVersions=("2_0E" "2_0J" "2_0U" "2_1E" "2_2E" "2_2J" "2_2U" "3_0E" "3_0J" "3_0U" "3_1E" "3_1J" "3_1U" "3_2E" "3_2J" "3_2U" "3_3E" "3_3J" "3_3U" "3_4E" "3_4J" "3_4U" "3_5K" "4_0E" "4_0J" "4_0U" "4_1E" "4_1J" "4_1K" "4_1U" "4_2E" "4_2J" "4_2K" "4_2U" "4_3E" "4_3J" "4_3K" "4_3U")
        arg2=${sysmenuIn//./_}
        arg2=${arg2^^}
        if [[ ! "${sysmenuVersions[*]}" =~ ${arg2} ]]; then printf "Invalid version.\n" && unset sysmenuIn && sleep 2 && findinfos; fi
    fi
    confirm
}

confirm() {
    sc 3 "Confirmation"
    printf "Alrighty, so here's what's about to go down:\n\n* Target console type:\t\t\t\033[1;96m"
    case "$arg1" in
        "WII_SM" ) printf "Wii\033[0m\n" ;;
        "MINI_SM_" ) printf "Wii mini\033[0m\n" ;;
    esac
    [[ "$arg1" == "WII_SM" ]] && printf "* Target console sysmenu version:\t\033[1;96m%s\033[0m\n" "${arg2//_/.}" || printf "* Target console region:\t\t\033[1;96m%s\033[0m\n" "$arg2"
    printf "\nBlueBomb will be executed with the above, user-provided information.\n"
    ask 1 "Do you wish to proceed?"
    case $response in
        0 ) execute ;;
        1 ) unset sysmenuIn; unset consoleIn; unset regionIn; unset arg1; unset arg2; findinfos ;;
    esac
}

execute() {
    sc 4 "Execute BlueBomb"
    #task="Check existence of Bluetooth service for $init"
    # Yet to finish implementation of this
    #case $init in
    #    "systemd" ) ;;
    #    "openrc" ) if $(rc-service -e bluetooth); then bte=true; else bte=false; fi ;;
    #esac
    task="Stop Bluetooth service for $init"
    printf "* Stopping the Bluetooth service... (you may be prompted for your password)\n"
    case $init in
        "systemd" ) $sudo0 systemctl disable --now bluetooth.service ;;
       "openrc" ) $sudo0 rc-service bluetooth stop ;;
    esac
    #printf "\n* Waiting 5 seconds..." && sleep 5
    task="Execute BlueBomb"
    printf "\n* Executing BlueBomb...\n"
    printf "%s ./bluebomb-%s ./stage0/%s%s.bin stage1.bin\n" "$sudo0" "$arch" "$arg1" "$arg2"
    $sudo0 ./bluebomb-${arch} ./stage0/${arg1}${arg2}.bin stage1.bin
    printf "\n\nIf BlueBomb failed to run, say \033[1mno\033[0m to the following question, and run the script again. Be persistent, it may take multiple attempts to get working.\n\n" | fold -s -w "$(tput cols)"
    ask 1 "Do you wish to re-enable the Bluetooth service?"
    case $response in
        0 ) task="Enable Bluetooth service for $init"
            case $init in
                "systemd" ) $sudo0 systemctl enable --now bluetooth.service ;;
                "openrc" ) $sudo0 rc-service bluetooth start ;;
            esac ;;
    esac
    printf "\n\nExiting in 3 seconds..."; sleep 3
    credit
}

ask() {
    case $1 in
        0 ) unset answer; shift; printf "\nOPTIONS:\n"; for o in "$@"; do
                ((i++)) || true
                printf "\t[\033[1m%s\033[0m]: \033[1m%s\033[0m\n" "$i" "$o" | fold -s -w "$(tput cols)"
            done; unset i; unset o
            printf "\nPlease type your selection and then press ENTER: " | fold -s -w "$(tput cols)"
            read -r answer
            ;;
        1 ) unset response; shift; printf "\n\033[1m%s\033[0m [\033[1;32myes\033[0m/\033[1;31mno\033[0m]: " "$1"
            read -r answer
            case ${answer^^} in
                "Y" | "YES" ) response=0; return ;;
                "N" | "NO" ) response=1; return ;;
                * ) printf "Invalid answer \"%s\". Treating as no.\n" "$answer"; sleep 2; response=1; return ;; # I'm lazy.
            esac
            ;;
    esac
}


download
findinfos
