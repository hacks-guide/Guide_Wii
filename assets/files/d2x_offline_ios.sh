#!/usr/bin/env bash

Sharpii_DL="https://noahpistilli.github.io/RC24_Patcher/Sharpii"

epicfail () {
	printf "
\x1b[31mSorry, an error occured.\x1b[0m
Here's what I know:

At line $1:
	$BASH_COMMAND

\x1b[33mExit code: $2\x1b[0m

Bother \x1b[1;32m@thepikachugamer\x1b[0m on Discord about this.

"
	exit
}

trap 'epicfail $LINENO $?' err
set -o errtrace
set -o pipefail

case $(uname -m),$(uname) in
	x86_64,Darwin|arm64,Darwin)
		sys="macOS-x64";;
	x86_64,*)
		sys="linux-x64";;
	aarch64,*)
		sys="linux-arm64";;
	*,*)
		sys="linux-arm";;
	x86_32,*)
		printf "The x86_32 architecture is not supported by Sharpii.\n"
		exit;;
esac

download_ios () {
	if [[ -f "ios/IOS${1}-64-v${2}.wad" ]]; then
		printf " * IOS${1} appears to be downloaded already...\n"
		return
	fi
	printf "Downloading IOS${1}...\n"
	./Sharpii nusd -ios ${1} -v ${2} -wad -o ios/IOS${1}-64-v${2}.wad &>/dev/null
}

if [[ -f "sharpii($sys)" ]]; then mv "sharpii($sys)" "Sharpii"; fi

if ! [[ -f "Sharpii" ]]; then
	if ! command -v curl &> /dev/null; then
		printf >&2 "Cannot find Sharpii nor curl to try download it.\n\n"
		printf >&2 "Either install curl with your package manager, or manually download it from $Sharpii_DL/sharpii($sys) .\n"
		exit
	else
		printf "Downloading Sharpii...\n"
		curl -f -s -o "Sharpii" "$Sharpii_DL/sharpii($sys)"
	fi
fi
if ! [[ -x "Sharpii" ]]; then chmod +x Sharpii 2> /dev/null; fi

mkdir -p ios
printf "This script downloads the 4 IOS WADs at wii.hacks.guide/cios mentioned at Section I.\n"
sleep 1
download_ios 38 4123
download_ios 56 5661
download_ios 57 5918
download_ios 58 6175

printf "\n\x1b[1;34mAll done!\x1b[0m\n"
if [[ -f "d2x_offline_ios.sh" ]]; then
	printf "There should be an ios folder located next to this script.\n"
else
	printf "There should be an ios folder located in $(pwd).\n"
fi
printf "Move the four WAD files in it to the root of the device \nthat contains the d2x-cIOS-installer.\n\n"

