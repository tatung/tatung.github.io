---
layout: post
title: Change Amazon Drive synchronization folder on Mac
date: 2017-01-04 00:38:27
thumbnail: /asset/img/uploads/cloud-backup.jpg
categories: How-to
---
![](/asset/img/uploads/cloud-backup.jpg)

Owning a Amazon Prime gives you the perk of unlimitedly storing your photos on Amazon Drive. It also comes with a desktop client for automatically syncing your photos to your cloud folder. However, one of the most irritated thing with this client is that, you cannot set the syncing folder to your external hard drive. It is possible to set it to a different partition as long as it is in your "internal" hard drive (Happy to get notification from Mac saying that you are running out of storage - thanks to your huge amount of photos synced from Amazon Drive). Well, there is a solution for this on Mac (it seems that there is a solution for Windows by editing registry).

* Install the Amazon Drive client as usual. When it asks you to sync from your cloud to your local, just choose skip (or later).
* Turn off Amazon Drive client (the cloud icon on the notification bar)
* Plug your external hard drive in
* In your Finder, go to:\
  `/Users/USER_NAME/Library/Application Support/Amazon Cloud Drive`
* Open file `amzn1.account.#########-settings.json` with your text editor, you will see somethings like this:  

```python
{
	"DeviceSourceId": "################",
	"SyncPath": "/Path/To/Your/Sync/Directory"
}
```

* Just change the value of `SyncPath` to your prefered external hard drive. It should be somethings like `"SyncPath": "/Volumes/ExternalDrive/Amazon Drive"`
* Start Amazon Drive client, it will ask you the location of sync folder, just click Next and the client will sync your cloud folder to your external hard drive