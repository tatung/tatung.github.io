---
layout: post
title: How to root Qua Tab HWT31 - Huawei Mediapad T2 10 Pro
date: 2016-05-30 00:38:27
thumbnail: https://auctions.c.yimg.jp/images.auctions.yahoo.co.jp/image/dr000/auc0412/users/576421107bc02883a8f988c63b44bfe19430d909/i-img1200x900-1544678041zg1rj1379148.jpg
categories: How-to
---
![](/asset/img/uploads/hwt31.jpg)

This instruction is based on the instruction for Huawei Honor5 in [xda](http://forum.xda-developers.com/honor-5x/development/root-kiw-l24-usa-kiwi-t3305190)

I was using Mac to root my HWT31, but procedure for Windows seems to be the same.

I assume you have `adb` and `fastboot` tools installed (normally, it comes along with Android Studio installation).

\##Install TWRP

\###Step 1: Huawei ID
Make Huawei ID if you don't have.

<http://goo.gl/OlsI8a>

\###Step 2: Get Unlock Passcode
Login and fill in the form to get unlock passcode

<https://www.emui.com/en/plugin.php?id=unlock&mod=detail>

How to Production ID:
Open Calculator apps in HWT31. Your HWT31 should be in horizontal orientation to get full layout of Calculator. Input

`()()1357946()()=`

This will give you the Production ID number.

\###Step 3: Enable Developer Option in HWT31
Go to your `Settings/About Tablet`, and tap on `Build number` until it says that you are developer now.

\###Step 4: Enable OEM unlock and USB Debugging mode
Go to your `Settings/Developer Options` and enable 

* `Enable OEM unlock`
* `USB Debugging`

\###Step 5: Reboot to bootloader mode
Plug HWT31 into the computer and authorize it so that `adb` will work. Type command:

```
./adb reboot bootloader
```

After HWT31 getting into bootloader mode, run unlock command:

```
./fastboot oem unlock ****************
```

in which, `****************` is the unlock passcode you got from **step 2**. This step will bring your HWT31 back to the initial state when you got it from the manufacturer.

\###Step 6: Bootup
Bootup the tablet and set it up.

\###Step 7: Get TWRP
Download TWRP from

<https://www.androidfilehost.com/?fid=24459283995302412>

This is TWRP for another Huawei device (KIWI) but it works on HWT31 also.

\###Step 8: Flash TWRP
	./adb reboot bootloader
	./fastboot flash recovery twrp.img

in which, twrp.img is the file you downloaded in *Step 7*

After flashing finishes, type:

```
./fastboot reboot
```

\##Get Root
###Step 1: Get SuperSU
<http://download.chainfire.eu/897/SuperSU/BETA-SuperSU-v2.67-20160121175247.zip>

\###Step 2: Copy SuperSU to HWT31
Copy SuperSU downloaded from previous step into HWT31 memory card.

\###Step 3: Boot into Recovery mode
	./adb reboot recovery
	
###Step 4: Install SuperSU
After reboot into recovery mode (TWRP), you will see Install button, tap on it and navigate to SuperSU.zip copied to HWT31 from **Step 2**. Follow the instruction from TWRP to get root.

After installing SuperSU, you can reboot to Android and enjoy your rooted HWT31