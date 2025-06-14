---
slug: dual-booting-windows-ubuntu
title: "Windows and Ubuntu Side by Side: Easy Solutions for Common Dual Boot Issues in High-End Laptops"
authors: [ajay]
tags: [windows, ubuntu, linux]
---

Read on [Medium](https://medium.com/@ajaytshaju/windows-and-ubuntu-side-by-side-easy-solutions-for-common-dual-boot-issues-in-high-end-laptops-bc933da65160)

The journey of dual-booting Windows and Ubuntu (or any other OS) on a high-end laptop can be a bit tricky. But still, it can be an exciting endeavor — challenges and problem-solving. This article presents a comprehensive guide for addressing two common issues users face while dual-booting high-end laptops: setting the storage configuration and resolving sound output problems.

<!-- truncate -->

Windows and Ubuntu (Image by author)

> Multi-booting is the act of installing multiple operating systems on a single computer and being able to choose which one to boot. The term dual-booting refers to the common configuration of specifically two operating systems. — Wikipedia

### Note: Prioritize Data Safety

_Dual-booting your system may lead to permanent data loss, so take strict steps to ensure the safety of your valuable data, like backing up your important files and documents. Consider using external storage devices, cloud platforms, or any other reliable backup method to safeguard your data. I backed up all my data to an external hard disk before dual-booting the system._

Technical specifications of my system:

Laptop: ASUS ROG Strix G15

Processor: Intel Core i7 10750H

Graphics Card: Nvidia GTX 1660Ti

RAM: 16GB (8GB SO-DIMM * 2) DDR4

Storage: 1TB M.2 NVMe PCIe 3.0 SSD

I have freed up 100GB of space for the new operating system: UBUNTU 22.04.3 LTS. And installed the new OS. After installing the new OS two problems have arisen, the storage configuration problem and the sound issue with the Ubuntu OS.
## Challenges

### Challenge 1: Bridging the Storage Configuration Gap

Windows supports Intel Rapid Storage Technology (RST) and Advanced Host Controller Interface (AHCI) storage configuration but my laptop was pre-configured Windows with Intel RST storage configuration. But Ubuntu works only on AHCI storage configuration, got this information from [here](https://www.python.org/downloads/release/python-31011/). This mismatch posed a major obstacle to successful dual booting. Attempting to boot Windows on AHCI configuration led to boot failures and automatic system repairs.

To solve this issue, I have gone through many solutions on the internet like changing the registry key in Windows (it worked for one of my friends but not for me). But at last, I got a solution from Stack Overflow (I did the dual booting weeks ago the link to that stack overflow answer is missing, may add it in the future).

First, Windows was set to boot in Safe Mode, allowing the necessary configuration changes without interference. Then in the BIOS, the SATA configuration was changed from Intel RST to AHCI mode. This step was crucial for Windows and Ubuntu to operate smoothly. Then I booted back to Windows to remove the safe boot configuration and then restarted Windows and it worked normally. This sequence of steps proved to be the key to resolving the storage configuration dilemma for me. Now Windows and Ubuntu could now be booted without any technical glitches.

![Changing SATA Configuration in ROG Laptop](Changing%20SATA%20Configuration%20in%20ROG%20Laptop.webp)

Changing SATA Configuration in ROG Laptop (Image by author)

The commands I used for safe booting and setting SATA Configuration to AHCI:

1. Open the Windows command prompt with admin privileges.

2. Type `bcdedit /set {current} safeboot minimal` , if this didn’t work try, `bcdedit /set safeboot minimal`

3. Restart the computer and enter BIOS Setup (the key to BIOS in my system was ESC but it varies between systems, find yours by searching it on the internet).

4. Change the SATA Configuration mode from Intel RST to AHCI.

5. Save changes and exit BIOS. Then, boot back to Windows (it automatically boots in Safe Mode).

6. Windows desktop may appear to be zoomed or have any other problems in safe mode, but don’t worry, open the command prompt once again with admin privileges.

7. Type `bcdedit /deletevalue {current} safeboot` , if this didn’t work try, `bcdedit /deletevalue safeboot`

8. Reboot once more and Windows will automatically start with AHCI drivers enabled.

### Challenge 2: No Sound in Ubuntu

Ubuntu had another problem while dual booting — no sound output. After extensive searches and other attempts like updating and reinstalling Pipewire, Alsamixer, and Pulseaudio to fix the issue, I became doubtful that Windows was somehow influencing the situation.

![Computer Speaker](Computer%20Speaker.webp)

Computer Speaker (Image from pexels)

Straightaway, I went to the BIOS once more. This time, it was to test disabling the Fast Boot option. This choice aimed to eliminate potential conflicts between the two operating systems, especially since Windows tends to optimize booting speed at the expense of compatibility. Following this, I booted into Windows and did some file cut and paste (to know if any issues persisted) then I shut the Windows and booted into Ubuntu, With a surprise the attempt worked, and the sound came to life. To enjoy this moment, I played the RRR song [Naatu-Naatu](https://www.youtube.com/watch?v=aYMrjEChVxs) on YouTube on Ubuntu.

## Conclusion

The journey of dual booting the ASUS ROG Strix G15 with Windows and Ubuntu was one of the technical challenges and a deeper understanding of how these operating systems interact with the hardware. Some strategic approaches, involving BIOS configurations, Safe Mode maneuvers, and Fast Boot adjustments, have worked for me. To simplify, _a minor change would reflect a big change_, so I hope it may work for you too, If not don't be down, try exploring other ways — _even if all attempts fail you will learn something new_, which will help you to solve future problems.