---
layout: post
title: Common used git command
date: 2015-04-22 00:38:27
thumbnail: /asset/img/uploads/gitflow.png
categories: How-to
---
![](/asset/img/uploads/gitflow.png)

\##1. Check detail of remote "origin" master
	git remote -v
	
##2. Set new remote origin
	git remote set-url --add gituser@githost:user/project.git

For example:
	
	git remote set-url --add git@git.tech-codes.com:tatung/m2-midterm-draft.git
	
##3. Set non-default port for git
For Mac or Linux, edit file ~/.ssh/config (can create a new one if not exists)

```
Host git.tech-codes.com
HostName git.tech-codes.com
Port 9722
User tatung
```

\##4. Add file in git
Add all tracked files which are not in .gitignore

```
git add .
```

Add all tracked files which are not in .gitignore and removed files

```
git add -u
```

Add

```
git add -A
```