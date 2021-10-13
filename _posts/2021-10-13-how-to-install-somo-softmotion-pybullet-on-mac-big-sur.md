---
layout: post
title: How to install SoMo - SoftMotion PyBullet on Mac Big Sur
date: 2021-10-13T03:53:00.580Z
thumbnail: https://somo.readthedocs.io/en/latest/_static/logo.png
categories: How-to
---
# SoMo - Soft Motion PyBullet

## Installation on Mac Big Sur

Install HomeBrew for Mac

```bash
/bin/bash -c "$(curl -fsSL [https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh](https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh))"
```

Install newest Python (3.9)

```bash
sudo brew install python
```

Install packages which might be not installed yet

```bash
sudo brew install pkg-config
sudo brew install freetype
```

Clone repo

```bash
git clone https://github.com/GrauleM/somo.git
```

Create virtual environment, might need to change `3.9` to a newer version

```bash
cd somo
python3.9 -m venv venv
```

Activate venv

```bash
source venv/bin/activate
```

Check `clang` version in Mac

```bash
clang --version
```

If it is 11.0, install the latest one (12.0). Installation might take long (30 mins)

```bash
sudo rm -rf /Library/Developer/CommandLineTools
sudo xcode-select --install
sudo xcode-select --switch /Library/Developer/CommandLineTools
```

Check `clang --version` again, make sure it 12.0

Install pybullet

```bash
pip3 install pybullet --upgrade
```

Install numpy 1.19

```bash
pip3 install numpy==1.19
```

Remove `pybullet` and `numpy` from `requirements.txt`

Install `requirements.txt`

```bash
pip3 install -r requirements.txt
```

Install SoMo

```bash
pip3 install -e .
```

Run test

```bash
python examples/iros2021/playing_ball/run_bb.py
```