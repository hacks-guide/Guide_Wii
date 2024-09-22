#!/usr/bin/env sh
cd "$(dirname "$0")"

MYTMP=$(mktemp -d)
echo "MYTMP: $MYTMP"

SHARPII_OUT_FILE="Sharpii.7z"
if [ "$(uname)" == "Darwin" ]; then
	SHARPII_DOWNLOAD_URL="https://github.com/TheShadowEevee/Sharpii-NetCore/releases/download/v1.1.10/Sharpii-Net-Core-v1.1.10-MacOSX-x64.7z"
else
	SHARPII_DOWNLOAD_URL="https://github.com/TheShadowEevee/Sharpii-NetCore/releases/download/v1.1.10/Sharpii-Net-Core-v1.1.10-Linux-x64.7z"
fi

SEVENZZ_OUT_FILE="7zz.tar.xz"
if [ "$(uname)" == "Darwin" ]; then
	SEVENZZ_DOWNLOAD_URL="https://www.7-zip.org/a/7z2403-mac.tar.xz"
else
	SEVENZZ_DOWNLOAD_URL="https://www.7-zip.org/a/7z2403-linux-x64.tar.xz"
fi
curl -L -o "$MYTMP/$SEVENZZ_OUT_FILE" "$SEVENZZ_DOWNLOAD_URL"
tar -C "$MYTMP" -xvf "$MYTMP/$SEVENZZ_OUT_FILE" 7zz

curl -L -o "$MYTMP/$SHARPII_OUT_FILE" "$SHARPII_DOWNLOAD_URL"
$MYTMP/7zz x "-o$MYTMP" "$MYTMP/$SHARPII_OUT_FILE"
chmod +x $MYTMP/Sharpii

$MYTMP/Sharpii nusd -id 0001000248414341 -v 6 -wad
mv 0001000248414341v6.wad "Mii Channel v6 (Wii).wad"