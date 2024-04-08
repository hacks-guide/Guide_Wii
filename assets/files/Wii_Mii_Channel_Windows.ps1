Function New-TemporaryDirectory {
    $TmpFile = New-TemporaryFile
    Remove-Item -Path $TmpFile
    New-Item -ItemType Directory $TmpFile.FullName
}

$Tempdir = New-TemporaryDirectory

@("Sharpii.exe", "libWiiSharp.dll") | ForEach-Object {
    if (-not (Test-Path $_)) {
        Invoke-WebRequest -Uri "https://patcher.rc24.xyz/update/RiiConnect24-Patcher/v1/EVCPatcher/pack/$_" -OutFile "$Tempdir/$_"
    }
}

& "$Tempdir/Sharpii.exe" nusd -id 0001000248414341 -v 6 -wad
mv 0001000248414341v6.wad "Mii Channel v6 (Wii).wad"