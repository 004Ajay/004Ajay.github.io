---
id: disk_mounting
title: Disk Mounting
sidebar_label: Disk Mounting
---

# Auto-Mount Secondary Disks at Boot on Linux

When you have multiple disks on your computer, eg NVMe for OS and two other HDD for storing data and backup. In this setting, the drive for OS will be auto-mounted and OS will be loaded but the remaining two will remain unmounted. This gist will show how to mount a secondary disk automatically at startup using `fstab` in linux.


## Identify the Disk and Partition

Use `lsblk` to list available disks and partitions:

```bash
lsblk
```

Example output:

```
NAME        MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT
loop0         7:0    0     4K  1 loop /snap/abc/5
loop1         7:1    0 183.9M  1 loop /snap/xyz/3199
sda           8:0    0   1.8T  0 disk /mnt/DATA
sdb           8:16   0   1.8T  0 disk /mnt/BACKUP
nvme0n1     259:0    0 953.9G  0 disk 
├─nvme0n1p1 259:1    0   512M  0 part /boot/efi
├─nvme0n1p2 259:2    0     6G  0 part 
├─nvme0n1p3 259:3    0   100G  0 part /
├─nvme0n1p4 259:4    0    32G  0 part [SWAP]
└─nvme0n1p5 259:5    0 815.4G  0 part /home
```

> From the above we're going to mount both `sda` & `sdb`.

---

## Create a Mount Point

Create a directory where the partition will be mounted:

```bash
sudo mkdir -p /mnt/DATA
```

You can change `/mnt/DATA` to any path you prefer.

---

## Get UUID or Label of the Partition

##### UUID - Universally Unique Identifier

Use `blkid` to copy the UUID or label of the drive you need to mount automatically.

Any one of these (UUID or Label) can be used in the next step.

```bash
sudo blkid
```

Example output:

```
/dev/nvme0n1p5: LABEL="HOME" UUID="e81ddf3b-39f8-508d-a6ee-0f481032ca5e" TYPE="ext4"
/dev/sda: LABEL="DATA" UUID="1969916a-c7c7-69d2-a143-2800e675a761" TYPE="ext4"
/dev/sdb: LABEL="BACKUP" UUID="1CE3751F6BE6CF0D" TYPE="ntfs"

```

## Edit `/etc/fstab` to Add the Disk

Open `/etc/fstab` in a text editor:

```bash
sudo nano /etc/fstab
```

Add the following line at the end (replace the UUID and mount point with your own):

```bash
<file system>            <mount point>   <type>   <options>   <dump>  <pass>
LABEL=DATA               /mnt/DATA       ext4     defaults    0       2
UUID="1CE3751F6BE6CF0D"  /mnt/BACKUP     ntfs     defaults    0       2
```

## Test the Configuration

Test the mount without rebooting:

```bash
sudo mount -a
```

If there are no errors, the configuration is correct.

> I got an error here `mount: /mnt/somemountpoint: special device LABEL=xyz does not exist.`, through which I found the step [Get UUID or Label of the Partition](/docs/gists/disk_mounting#get-uuid-or-label-of-the-partition)


---

## Verify the Mount

Check that the partition is mounted properly:

```bash
df -h
```

Example output:

```
/dev/sda  1.8T  923G  818G  54%  /mnt/DATA
/dev/sdb  1.9T  1.7T  165G  92%  /mnt/BACKUP
```

Now your secondary disks will auto-mount on booting. So that's it!!!