---
layout: post
comments: true
date: 2023-08-29
title: Run tunneling on login (Mac)
tags:
  - Internet
  - network

categories:
  - How-to

thumbnail: /asset/img/uploads/2023-08-29-run-tunneling-on-login-(mac).png
---

My university has contracts with a bunch of scientific publishers so that we can freely download papers through our university network. In order to download the papers from home, we will need to tunnel to the server in the lab at the university. I’m using the Proxy Switch plugin for Chrome (I will not mention how to use Proxy Switch here). I also set up a script to establish a tunneling on login in my Mac.

1. Create a file name `tunnel.bash` and save it to a directory of your preference (mine is `~/bin`). Add the tunneling command to this bash file.

	```shell
	ssh -fN -D <port> -i ~/.ssh/id_rsa <user_name>@<your.bastion.server>
	```

2. Open Automator app in Mac Applications
3. In Library, search for `Run Shell Script`
4. Drag and Drop the `Run Shell Script` to the right pane
5. Input the comment to execute the `tunnel.bash` bash file above
6. Click Run, and check if the tunnel is established
7. Save the automator (file name might be `start_tunneling`) to a directory of your preference (again, mine is `~/bin`)
8. Go to `System Settings/General/Login Items`, add the automator saved in step 7 to the Open at Login list
9. Restart to see if it works.
