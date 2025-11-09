---
id: update_grub_linux
title: Update Grub (Linux)
sidebar_label: Update Grub (Linux)
---

### Change GRUB `default selection` and `pause time` to select preferred OS

Most of the time Ubuntu will be the first option in the grub on booting, below this, most probably in the 3rd or 4th position there will be Windows. 

Go to Linux OS (mine, Ubuntu)

* Open Terminal (`ctrl+Alt+T`)

* Type `sudo nano /etc/default/grub` and enter


* Now type in your password

    * Change the line `GRUB_DEFAULT=0` to the line number which your required OS is lying (count from 0) 

* Exit nano using `Ctrl+X` `Y` `Enter`    

* Finally, update grub using `sudo update-grub`