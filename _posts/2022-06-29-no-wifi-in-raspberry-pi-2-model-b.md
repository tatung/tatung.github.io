---
layout: post
comments: true
date: 2022-06-29
title: No wifi in Raspberry Pi 2 Model B
tags:
  - network
  - Raspberry Pi

categories:
  - How-to

thumbnail: /asset/img/uploads/2022-06-29-no-wifi-in-raspberry-pi-2-model-b.png
---

![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/4d704959-90a6-4604-8a22-ed9cf5bf2abf/IMG_3505.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221123T075405Z&X-Amz-Expires=3600&X-Amz-Signature=44d8f4aa7bb6dd4055ec94b1ea4bb22d63d20cd31e49fe2a3022740e56118660&X-Amz-SignedHeaders=host&x-id=GetObject)


Scan wifi to check if your Raspberry detects available wifi


```shell
iwlist scan | grep <SSID>
```


If you see your wifi SSID in the out of the command above. Your wifi dongle is fine, and RPi is seeing your wifi.


Open `raspi-config`


```shell
sudo raspi-config
```

- Select `System Options/Wireless LAN`
- Select country
- Input `SSID` and `password`
- Select `OK` and `Finish`
- If RPi asks you to reboot, DON’T.

There is case which `raspi-config` tell you that it


```shell
Could not communicate with wpa_supplicant
```


This happens quite often with RPi 2b (my model). One workaround is run:


```shell
sudo wpa_supplicant -iwlan0 -D wext -c/etc/wpa_supplicant/wpa_supplicant.conf -B
dhclient wlan0
```


and then repeat the `raspi-config` procedure above.


## Auto connect to wifi after rebooting


To automatically connect to your AP after restart edit the `wlan0` interface on your `/etc/network/interfaces` as follow:


```shell
allow-hotplug wlan0
iface wlan0 inet dhcp
    wpa-conf /etc/wpa_supplicant/wpa_supplicant.conf
```


```shell
sudo reboot
```


ref: [https://unix.stackexchange.com/a/400113](https://unix.stackexchange.com/a/400113)


May wifi be with you!

