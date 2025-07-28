---
id: zip_extractor_windows
title: Zip Extractor Windows
sidebar_label: Zip Extractor Windows
---

```bat
Add-Type -AssemblyName System.IO.Compression.FileSystem

$zipFiles = Get-ChildItem -Path "C:\Users\ASUS\Desktop\D\*.zip"

foreach ($file in $zipFiles) {
    $targetPath = "C:\Users\ASUS\Desktop\D\" + $file.BaseName
    if (-not (Test-Path -Path $targetPath)) {
        [System.IO.Directory]::CreateDirectory($targetPath)
    }
    [System.IO.Compression.ZipFile]::ExtractToDirectory($file.FullName, $targetPath)
}
```