---
layout: post
comments: true
date: 2022-06-29
title: Attending ICRA 2022
categories:
  - conference

thumbnail: /asset/img/uploads/2022-06-29-attending-icra-2022.png
---

# Day 1: Workshop & Tutorial

[Tutorial: Tools for Robotics Reinforcement Learning](ba427438-1d19-4296-b122-aed6bac56abb)

	[bookmark](https://araffin.github.io/tools-for-robotic-rl-icra2022/#schedule)

	# Erwin’s talk

	Was in Google Brain, now in NVIDIA, wrote PyBullet

	PyBullet, Tiny Differentiable Simulator, Brax, MuJoCo, RaiSim, Omniverse Isaac Gym PysX/WARP

	### PyBullet

	[pybullet.org](http://pybullet.org)

	[bookmark](https://docs.google.com/document/d/10sXEhzFRSnvFcl3XxNGhnD4N2SedqwdAvK3dsihxVUA/edit#heading=h.2ye70wns7io3)

	Learning Agile Robotic Locomotion Skills by Imitating Animals

	Motion capture real dog locomotion

	### Brax

	[bookmark](https://colab.research.google.com/github/google/brax/blob/main/notebooks/environments.ipynb#scrollTo=eoq4YTZ2qyVc)

	### rl_games

	[https://github.com/Denys88/rl_games](https://github.com/Denys88/rl_games)

	For vectorized space

	### WARP

	Python-based CUDA Kernel JIT

	Goals

	- Easy to write GPU graphics + sim code from python

	- Interaction time

	- rich lib

	- compatible with C++/CUDA

	- full differentiable

	### OmniVerse Isaac Gym

	GPU parallel sim

	Deformable objects

	train thousands of robot parallelly

	[leggedrobotics/legged_gym](https://github.com/leggedrobotics/legged_gym)

	[Accelerated Policy Learning with Parallel Differentiable Simulation](https://arxiv.org/abs/2204.07137)

	### EAGERx

	Engine Agnostic Gym Environment for Robotics (EAGERx)

	- Easy to switch from sim to real

	- Mitigate model mismatch

	- Input-Output synchronization

[2nd Workshop on Representing and Manipulating Deformable Objects ](3cd9e834-ad64-42fa-8b4f-7717037ae4fd)

	- **Kimitoshi Yamazaki**

		Talk Topic: Cloth manipulation based on hierarchical shape prediction

		[bookmark](https://www.youtube.com/user/aisshinshu/featured)

	- **Ken Goldberg**

		- Topic

			1. Cable manipulation

			2. fabric smoothing

			3. Fabric Flinging

			4. Labels from UV light 

				1. find key points ( buttons, corners ) - fully dense model. 

				Question: Why do you use UV light to do the training, why don’t you use the colored thread or needle to do the training? 

			Real2sim2real: A self-supervised learning technique applied to planar robot casting 

			Learning to fold real garments with one arm

			lUV: Labels from UltraViolet

	- **Andrea Cherubini:**

		- Topic: See and shape: vision-based robot manipulation of non-rigid objects

			- Deforming via contacts with the environment

		- Shape while holding 

		- Molding plastic materials 

	**Carolyn Matl:**
	Deformable Elasto-Plastic Object Shaping using an Elastic Hand

	Roll a playdoh from cube to ball

	Membrane sensor (?): visual gelsight style

	[StRETcH: a Soft to Resistive Elastic Tactile Hand](https://arxiv.org/pdf/2105.08154.pdf)

	- contact geo estimation

	- Stiffness estimation

	- Efficient shape-servo

[Soft Robotics](8dfab484-7a91-445c-9c03-0e15c56c2bd7)

	[Conference URL](https://sites.google.com/andrew.cmu.edu/softactuatormetrics/schedule?authuser=0)

	- Dr. Yiğit Mengüç

		the value of soft robotics

		Soft robots as whole mind-bodies

		![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/68cacc8d-b05e-42d8-ad4e-aae52ce5aa15/IMG_2249.heic?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220629T173314Z&X-Amz-Expires=3600&X-Amz-Signature=1f31a17a07ebc53f81a57f353b7023f460a4b48de442158a620596041e69d9c5&X-Amz-SignedHeaders=host&x-id=GetObject)

		what are the problems?

		Problem:

		- Integration happens last

		- subcomponent research is siloed

		- Expensive demo

			![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/39c9136e-72e2-4acd-9ca9-6c2a7170af68/IMG_2261.heic?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220629T173314Z&X-Amz-Expires=3600&X-Amz-Signature=4e925912f72ec21718cf8ca9f4eae448d29519308e612b401f9b3967a3288350&X-Amz-SignedHeaders=host&x-id=GetObject)

		Is science mostly driven by ideas or by tools?

		- Paradigm shifts

		- Tool driven revolution

		Book: _Image and Logic -_ Peter Galison

	Wearable Soft Robots 

	 On-body vs benchtop behavior 

	### In-situ measurement of multi-axis torques applied by wearable soft robots for shoulder assistance

	- Measure load of actuator in-situ on the body (instead of quantitative bench top measurement or qualitative on body measurement)

	- 

	- how is this different from bench top measurement? 

	### Fabrication and Characterization of Liquid Crystal Elastomer Actuators Enabled by Soft Thermoelectrics

	**Mason Zadan**, Carmel Majidi

	LCE

	- Passive slow cooling

	Thermoelectric Generator (TEG), Zadan 2020, ACS Applied Materials and interfaces

	[https://pubs.acs.org/doi/pdf/10.1021/acsami.9b19837](https://pubs.acs.org/doi/pdf/10.1021/acsami.9b19837)

	[image](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/3c56ae95-aaee-4ea1-8d4f-2c41e174e273/acsami.9b19837.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220629T173313Z&X-Amz-Expires=3600&X-Amz-Signature=2ead45e491df9b9eeee75b10e99ab55815652f10fa33e0c24d581d8017233a01&X-Amz-SignedHeaders=host&x-id=GetObject)

	Angular velocity: 2.5°/s —> pretty slow

	Energy harvesting:

	- Seebeck effect for getting energy

	- Peltier for active heating/cooling

	PID controlling with active heating and active cooling

	### HASEL Artificial Muscles—Towards Untethered Soft Robotic Devices that are Fast and Efficient

	Dr. Christoph Keplinger

	Unpublished project: Soft gripers that is able to recognize the objects 

	Paper: Pocket-sized ten-channel high voltage power supply for soft electrostatic actuators

	![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/9d082ab7-10ba-4d72-bd50-c0ff64ae5fa1/IMG_2582.heic?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220629T173313Z&X-Amz-Expires=3600&X-Amz-Signature=deeb7a875e15e2f69d636a77fb19d3661fc7df6c985010b5742eafc7c1156a74&X-Amz-SignedHeaders=host&x-id=GetObject)

	[artimusrobotics.com](http://artimusrobotics.com)

	Peano-HASEL actuators

	1. Autonomous

Modular Robots Using Soft Curved Reconfigurable Anisotropic Mechanisms

Multi-material printing of Liquid Crystal Elastomers with Integrated Stretchable Electronics

# Day 2: Main conference

[Grasp and Multifingered Hands](ac8a267a-ac09-42cd-9da8-c5617f81a516)

	# **Powerful and Dexterous Multi-Finger Hand Using Dynamical Pulley Mechanism**

	[Tadaaki Hasegawa](https://events.infovaya.com/profile?id=149752)1, [Takahide Yoshiike](https://events.infovaya.com/profile?id=39953)2, [Tetsuya Ishikawa](https://events.infovaya.com/profile?id=60528)1, [Tomohiro Kawakami](https://events.infovaya.com/profile?id=123583)3, [Ken-ichiro Sugiyama](https://events.infovaya.com/profile?id=101889)4, [Chiaki Tanaka](https://events.infovaya.com/profile?id=149755)3, [Hironori Waita](https://events.infovaya.com/profile?id=149758)5, [Yoshinari Takemura](https://events.infovaya.com/profile?id=149761)3, [Yuta Kimura](https://events.infovaya.com/profile?id=149764)3

	Honda

	![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/c6ecb7c7-4204-431e-8ef1-02c2c35e34a8/IMG_2607.heic?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220629T173314Z&X-Amz-Expires=3600&X-Amz-Signature=c058273c2db60bdac815250b92f75a2d61235af56aea7f3a04a6d9ffac603eff&X-Amz-SignedHeaders=host&x-id=GetObject)
	
	![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/a83e9307-ec1a-4f5e-916e-788361c087c7/IMG_2608.heic?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220629T173314Z&X-Amz-Expires=3600&X-Amz-Signature=301aed79e46c59d067d824ec299b2c2b9d7f3b66cc99aa1da21aa759ca8dee44&X-Amz-SignedHeaders=host&x-id=GetObject)

	Opening a can tap is interesting

	# **Multi-Dimensional Compliance of Soft Grippers Enables Gentle Interaction with Thin, Flexible Objects**

	[Clark Teeple](https://events.infovaya.com/profile?id=51364)1, [Justin Werfel](https://events.infovaya.com/profile?id=149788)1, [Robert Wood](https://events.infovaya.com/profile?id=29935)1

	Harvard

	![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/39a0887e-b6a5-457b-bdef-eefeb6ad0fc2/Screen_Shot_2022-05-24_at_10.39.10.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220629T173314Z&X-Amz-Expires=3600&X-Amz-Signature=d63ef83e32e21afba28c187fa82798e063dbee9d3a511d6ac5576416e3778e2e&X-Amz-SignedHeaders=host&x-id=GetObject)

	# **Grasp Transfer for Deformable Objects by Functional Map Correspondence**

	[Cristiana De Farias](https://events.infovaya.com/profile?id=149791)1, [Brahim Tamadazte](https://events.infovaya.com/profile?id=149794)2, [Rustam Stolkin](https://events.infovaya.com/profile?id=122260)1, [Naresh Marturi](https://events.infovaya.com/profile?id=149797)1

	• 1University of Birmingham
	• 2CNRS

	Reference: Functional maps: a flexible representation of maps between shapes (ToG)

	Visual grasp, transfer grasping knowledge between deformable objects (e.g. teddy bear and the same but deformed teddy bear)

	![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/1c0dfa7a-50e2-478a-9283-b5134826d416/Screen_Shot_2022-05-24_at_10.38.44.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220629T173314Z&X-Amz-Expires=3600&X-Amz-Signature=4b9f3ebd3fa5346350bcd5bc840347586e139534663fba3dcd9c95d5c4bc09e3&X-Amz-SignedHeaders=host&x-id=GetObject)

	# **Learning Object Relations with Graph Neural Networks for Target-Driven Grasping in Dense Clutter**

	[Xibai Lou](https://events.infovaya.com/profile?id=118891)1, [Yang Yang](https://events.infovaya.com/profile?id=118894)1, [Changhyun Choi](https://events.infovaya.com/profile?id=46957)2

	- 1University of Minnesota Twin Cities

	- 2University of Minnesota, Twin Cities

	GNN to learn object position relationship in a dense cluttered space to decide which one to grasp first —> to declutter

[Bioinspired and Biometic Systems](80af7403-6ae3-4770-a811-6b12dddfb096)

	# **Generalized Omega Turn Gait Enables Agile Limbless Robot Turning in Complex Environments**

	[Tianyu Wang](https://events.infovaya.com/profile?id=150877)1, [Baxi Zhong](https://events.infovaya.com/profile?id=150880)1, [Yuelin Deng](https://events.infovaya.com/profile?id=150883)2, [Ruijie Fu](https://events.infovaya.com/profile?id=150886)2, [Howie Choset](https://events.infovaya.com/profile?id=40532)3, [Daniel Goldman](https://events.infovaya.com/profile?id=28078)1

	- 1Georgia Institute of Technology

	- 2Carnegie Mellon University

	- 3CMU
	
	Omega turn seems to out perform other way of turning

	# **SenSnake: A Snake Robot with Contact Force Sensing for Studying Locomotion in Complex 3-D Terrain**

	[Divya Ramesh](https://events.infovaya.com/profile?id=122296)1, [Qiyuan Fu](https://events.infovaya.com/profile?id=124114)1, [Chen Li](https://events.infovaya.com/profile?id=42512)1

	- 1Johns Hopkins University

	Add pressure sensor to each link of the snake robot

	![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f84b6b29-4b27-4854-ab4c-b33349870e05/Screen_Shot_2022-05-24_at_15.39.54.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220629T173315Z&X-Amz-Expires=3600&X-Amz-Signature=9edd5cc9a3ed79c52ace883db84b554290f0d5625a1488dbefcc9ebcfce0de64&X-Amz-SignedHeaders=host&x-id=GetObject)

	# **Autonomous Actuation of Flapping Wing Robots Inspired by Asynchronous Insect Muscle**

	[James Lynch](https://events.infovaya.com/profile?id=150889)1, [Jeff Gau](https://events.infovaya.com/profile?id=150892)2, [S. N. Sponberg](https://events.infovaya.com/profile?id=150895)2, [Nicholas Gravish](https://events.infovaya.com/profile?id=49920)3

	- 1University of California, San Diego

	- 2Georgia Institute of Technology

	- 3UC San Diego

	# **A Tapered Whisker-Based Physical Reservoir Computing System for Mobile Robot Terrain Identification in Unstructured Environments**

	[Zhenhua Yu](https://events.infovaya.com/profile?id=150925)1, [Shehara Perera](https://events.infovaya.com/profile?id=150928)1, [Helmut Hauser](https://events.infovaya.com/profile?id=45464)2, [Peter R. N. Childs](https://events.infovaya.com/profile?id=150931)1, [Thrishantha Nanayakkara](https://events.infovaya.com/profile?id=42641)

	- 1Imperial College London

	- 2University of Bristol

	![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/aa55466e-b3cd-49b5-ba78-69d8ce19babb/Screen_Shot_2022-05-24_at_16.14.55.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220629T173315Z&X-Amz-Expires=3600&X-Amz-Signature=b4e71960245a9de1b9f119847e5157868d28656999f42b700710bac3d3f002bc&X-Amz-SignedHeaders=host&x-id=GetObject)

	# **Design and Experimental Validation of a Shock-Absorption Mechanism Inspired from the Frog's Forelimbs**

	[Jingcheng Xiao](https://events.infovaya.com/profile?id=150934)1, [Songsong Ma](https://events.infovaya.com/profile?id=150937)2, [Jixue Mo](https://events.infovaya.com/profile?id=150940)3, [Yao Li](https://events.infovaya.com/profile?id=150943)3, [Bing Li](https://events.infovaya.com/profile?id=41567)3

	- 1Harbin Institute of Technology

	- 2Harbin Institute of Technology, Shenzhen

	- 3Harbin Institute of Technology (Shenzhen)

	# **Maximized Hydrodynamic Stimulation Strategy for Placement of Differential Pressure and Velocity Sensors in Artificial Lateral Line Systems**

	[Zhen Yang](https://events.infovaya.com/profile?id=150946)1, [Zheng Gong](https://events.infovaya.com/profile?id=150949)1, [Yonggang Jiang](https://events.infovaya.com/profile?id=150952)1, [Yueri Cai](https://events.infovaya.com/profile?id=150955)1, [Zhiqiang Ma](https://events.infovaya.com/profile?id=150958)1, [Xin Na](https://events.infovaya.com/profile?id=150961)1, [Zihao Dong](https://events.infovaya.com/profile?id=150964)1, [Deyuan Zhang](https://events.infovaya.com/profile?id=150967)1

	- 1Beihang University

	Mimic lateral line in fish to place sensor for swimming fish robot

	![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ae4b1ddf-52ac-42b5-9332-6a49c3e2c7e8/IMG_2638.heic?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220629T173315Z&X-Amz-Expires=3600&X-Amz-Signature=7aa26f8233bd51f54e55edc10dbc8bc5f257e2e6dcd47ed4a3772853bb5afa68&X-Amz-SignedHeaders=host&x-id=GetObject)

	# **A New Bio-Inspired Hybrid Cable-Driven Robot (HCDR) to Design More Realistic Snakebots**

	[Elie Gautreau](https://events.infovaya.com/profile?id=150970)1, [Juan Sandoval](https://events.infovaya.com/profile?id=150973)2, [Xavier Bonnet](https://events.infovaya.com/profile?id=150976)3, [Marc Arsicault](https://events.infovaya.com/profile?id=150979)4, [Said Zeghloul](https://events.infovaya.com/profile?id=150982)5, [Med Amine Laribi](https://events.infovaya.com/profile?id=59539)5

	- 14500329747

	- 2University of Poitiers

	- 3CNRS

	- 4PPRIME Institute, University Poitiers

	- 5Institut Pprime, CNRS, Université de Poitiers, ENSMA

	![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/62d192a2-4b09-4562-9357-bf7b99cdf140/IMG_2639.heic?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220629T173316Z&X-Amz-Expires=3600&X-Amz-Signature=418c6a27a2bdd3a9c652d654d9e0c6bd57b498bc4b0683c1295bbbf6799f98aa&X-Amz-SignedHeaders=host&x-id=GetObject)
	
	Why not use flexible material to make the soft part of the joint? Why need complicated compliant structure here?

	# **Development and Stiffness Optimization for a Flexible-Tail Robotic Fish**

	[Chao Zhou](https://events.infovaya.com/profile?id=30141)1, [Ben Lu](https://events.infovaya.com/profile?id=150985)2, [Jian Wang](https://events.infovaya.com/profile?id=150988)3, [Yuzhuo Fu](https://events.infovaya.com/profile?id=150991)4, [Long Cheng](https://events.infovaya.com/profile?id=39679)1, [Min Tan](https://events.infovaya.com/profile?id=29659)5

	- 1Chinese Academy of Sciences

	- 2University of Chinese Academy of Sciences

	- 3Institute of Automation, Chinese Academy of Sciences

	- 4Institute of AutomationÔºåChinese Academy of Sciences

	- 5Institute of Automation,Chinese Academy of Sciences

	# **Optimization of Stress Distribution in Tendon-Driven Continuum Robots Using Fish-Tail-Inspired Method**

	[Yilun Sun](https://events.infovaya.com/profile?id=117583)1, [Yuqing Liu](https://events.infovaya.com/profile?id=122563)1, [Tim Lueth](https://events.infovaya.com/profile?id=22553)1

	- 1Technical University of Munich

	![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/9c24e964-f1b5-43e0-ab21-2f1148a32830/IMG_2640.heic?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220629T173315Z&X-Amz-Expires=3600&X-Amz-Signature=3abfb6ea251fe03c58a94bb369605114db782c58714b0f7edc47fdfbbb9d361c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Day 3: Main conference

[Soft Robotic Applications](74a4682a-f13e-4933-89c4-e4c5c709f39c)

	# **A Modular Approach to Design Multi-Channel Bistable Valves for Integrated Pneumatically-Driven Soft Robots Via 3D-Printing**

	[Sihan Wang](https://events.infovaya.com/profile?id=153334), [Liang He](https://events.infovaya.com/profile?id=153337), [Perla Maiolino](https://events.infovaya.com/profile?id=56838)

	# **SoMoGym: A Toolkit for Developing and Evaluating Controllers and Reinforcement Learning Algorithms for Soft Robots**

	[Moritz A. Graule](https://events.infovaya.com/profile?id=120817), [Thomas Mccarthy](https://events.infovaya.com/profile?id=153376)1, [Clark Teeple](https://events.infovaya.com/profile?id=51364), [Justin Werfel](https://events.infovaya.com/profile?id=149788)1, [Robert Wood](https://events.infovaya.com/profile?id=29935)

	- 1Harvard University

	New version of SoMo which support RL for soft robots

	![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/7e4b4c60-8388-4375-be7a-fbe56b77477d/IMG_2651.heic?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220629T173317Z&X-Amz-Expires=3600&X-Amz-Signature=c71953e167f6ada91145cc2881e44f264051d3158858623063dfe4c7af0e9feb&X-Amz-SignedHeaders=host&x-id=GetObject)

	# **Scalable Simulation and Demonstration of Jumping Piezoelectric 2-D Soft Robots**

	[Zhiwu Zheng](https://events.infovaya.com/profile?id=153379), [Prakhar Kumar](https://events.infovaya.com/profile?id=153382)1, [Yenan Chen](https://events.infovaya.com/profile?id=153385)1, [Hsin Cheng](https://events.infovaya.com/profile?id=153388)1, [Sigurd Wagner](https://events.infovaya.com/profile?id=10756)1, [Minjie Chen](https://events.infovaya.com/profile?id=153391)1, [Naveen Verma](https://events.infovaya.com/profile?id=10758)1, [James C. Sturm](https://events.infovaya.com/profile?id=10757)1

	- 1Princeton University

	Piezo based bending actuator (300V~ 1500V)

	In place jumping by controlling input voltage cyclic frequency

	# **Simulation and Fabrication of Soft Robots with Embedded Skeletons**

	[James Bern](https://events.infovaya.com/profile?id=42025), [Fatemeh Zargarbashi](https://events.infovaya.com/profile?id=153394)1, [Annan Zhang](https://events.infovaya.com/profile?id=153397)2, [Josie Hughes](https://events.infovaya.com/profile?id=153400)1, [Daniela Rus](https://events.infovaya.com/profile?id=29344)

	- 1EPFL

	- 2Massachusetts Institute of Technology

	Mixing rigid & soft structure for versatile soft robot

	Interactive design is good, but do you have guidance for user during designing or user will have to do trial-and-error?

	# **Control-Oriented Modeling and Analysis of Tubular Dielectric Elastomer Actuators Dedicated to Cardiac Assist Devices**

	[Ning Liu](https://events.infovaya.com/profile?id=89706)1, [Thomas Martinez](https://events.infovaya.com/profile?id=153403)2, [Armando Matthieu Walter](https://events.infovaya.com/profile?id=153406)3, [Yoan Civet](https://events.infovaya.com/profile?id=153409)4, [Yves Perriard](https://events.infovaya.com/profile?id=153412)

	- 1FEMTO-ST Institute, CNRS, France

	- 2Ecole Polytechnique Fédérale de Lausanne (EPFL)

	- 3Ecole Polytechnique Fédérale de Lausanne

	- 4EPFL

	Why high voltage driven is a key property to use DEA?
	
	![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/1c900ee6-3a9f-4928-b1e2-008dab927d8d/Screen_Shot_2022-05-25_at_11.00.15.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220629T173319Z&X-Amz-Expires=3600&X-Amz-Signature=77185b6388153049b5540e6d74d0e870164256b701b3e17b7e05b50f58cd00af&X-Amz-SignedHeaders=host&x-id=GetObject)

	# **Tendon-Driven Soft Robotic Gripper for Blackberry Harvesting**

	[Anthony Gunderman](https://events.infovaya.com/profile?id=153415)1, [Jeremy Collins](https://events.infovaya.com/profile?id=153418)2, [Andrea Myers](https://events.infovaya.com/profile?id=153421)1, [Renee Threlfall](https://events.infovaya.com/profile?id=153424)1, [Yue Chen](https://events.infovaya.com/profile?id=153361)

	- 1University of Arkansas

	- 2Georgia Institute of Technology

	# **Variable Stiffness Robotic Hand Driven by Twisted-Coiled Polymer Actuators**

	[Anh Tuan Luong](https://events.infovaya.com/profile?id=50558), [Sungwon Seo](https://events.infovaya.com/profile?id=51165)1, [Jure Hudoklin](https://events.infovaya.com/profile?id=153211), [Ja Choon Koo](https://events.infovaya.com/profile?id=28492)2, [Hyouk Ryeol Choi](https://events.infovaya.com/profile?id=153427), [Hyungpil Moon](https://events.infovaya.com/profile?id=47458)

	- 1SungKyunKwan University

	- 2Sungkyunkwan University

	Fishing wire type actuator

	![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/cfb33048-35bb-4408-adf8-dece565bb53f/Screen_Shot_2022-05-25_at_11.05.54.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220629T173317Z&X-Amz-Expires=3600&X-Amz-Signature=b5fa3da18d1075b3f412dae60454f23a53e83fe92eb83eaad29ab217583f1778&X-Amz-SignedHeaders=host&x-id=GetObject)

	# **Towards a Microfluidic Microcontroller Circuit Library for Soft Robots**

	[Elizabeth Gallardo Hevia](https://events.infovaya.com/profile?id=45332), [Louis De La Rochefoucauld](https://events.infovaya.com/profile?id=154819)1, [Robert Wood](https://events.infovaya.com/profile?id=29935)

	- 1EPFL

	![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/59574274-3ce9-4206-9285-0b93698fed66/32242.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220629T173320Z&X-Amz-Expires=3600&X-Amz-Signature=462b9db0796fcd67e9e18b135902583788091d174313d74d8b01661def82a2e9&X-Amz-SignedHeaders=host&x-id=GetObject)
	
	![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/13701850-3d3c-4a42-8042-0191c1a993b3/IMG_2692.heic?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220629T173320Z&X-Amz-Expires=3600&X-Amz-Signature=92c1ab0259ad8bde02f82ad1d58992574573d83d68a13f40ea162373e502d4e2&X-Amz-SignedHeaders=host&x-id=GetObject)

	# **Task-Specific Design Optimization and Fabrication for Inflated-Beam Soft Robots with Growable Discrete Joints**

	[Ioannis Exarchos](https://events.infovaya.com/profile?id=113727)1, [Karen Wang](https://events.infovaya.com/profile?id=154822)1, [Brian Do](https://events.infovaya.com/profile?id=122728), [Fabio Stroppa](https://events.infovaya.com/profile?id=117427), [Margaret Coad](https://events.infovaya.com/profile?id=154825), [Allison Okamura](https://events.infovaya.com/profile?id=5277), [Karen Liu](https://events.infovaya.com/profile?id=120793)1

	- 1Stanford University

	“Growth robot” variance

	![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/1c92ecc3-d00c-46f5-a971-c5188bbfd9bc/IMG_2693.heic?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220629T173317Z&X-Amz-Expires=3600&X-Amz-Signature=e42d3796270d9f5e243092e76537d9b95383b10107cc6ae0c34445579309d5be&X-Amz-SignedHeaders=host&x-id=GetObject)

	# **Modulation of Magnetorheological Fluid Flow in Soft Robots Using Electropermanent Magnets**

	[Kevin McDonald](https://events.infovaya.com/profile?id=115663)1, [Lorenzo Kinnicutt](https://events.infovaya.com/profile?id=154828), [Anna Maria Moran](https://events.infovaya.com/profile?id=154831)2, [Tommaso Ranzani](https://events.infovaya.com/profile?id=29270)

	- 1Boston University

	- 2Mount Holyoke College

	# **Giraffe Neck Robot: First Step Toward a Powerful and Flexible Robot Prototyping Based on Giraffe Anatomy**

	[Atsuhiko Niikura](https://events.infovaya.com/profile?id=154834), [Hiroyuki Nabae](https://events.infovaya.com/profile?id=154837), [Gen Endo](https://events.infovaya.com/profile?id=45242)1, [Megu Gunji](https://events.infovaya.com/profile?id=154840)2, [Kent Mori](https://events.infovaya.com/profile?id=154843)2, [Ryuma Niiyama](https://events.infovaya.com/profile?id=6633)3, [Koichi Suzumori](https://events.infovaya.com/profile?id=31984)1

	- 1Tokyo Institute of Technology

	- 2National Museum of Nature and Science, Tokyo

	- 3University of Tokyo

	![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/33470ab1-7a12-4640-8686-fff1bc18e978/IMG_2696.heic?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220629T173317Z&X-Amz-Expires=3600&X-Amz-Signature=a59acf8a2cfeac0d6977c7208bb6bf3880d8036a0ec2a555f03fdf8ceebef4e0&X-Amz-SignedHeaders=host&x-id=GetObject)

	# **Liquid-Metal Magnetic Soft Robot with Reprogrammable Magnetization and Stiffness**

	[Ran Zhao](https://events.infovaya.com/profile?id=154846)1, [Houde Dai](https://events.infovaya.com/profile?id=33944), [Hanchen Yao](https://events.infovaya.com/profile?id=154849)

	- 1Chinese Academy of Sciences

	![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e3e02478-ed32-4e80-9ddf-90a244b1dd30/Screen_Shot_2022-05-25_at_16.17.01.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220629T173317Z&X-Amz-Expires=3600&X-Amz-Signature=d14d1dc1784425ea5447b95f67b5ab2b83756bd74c344e53a3f38a43ad407d62&X-Amz-SignedHeaders=host&x-id=GetObject)

	# **Programmable Digital Weaves**

	[Yue Li](https://events.infovaya.com/profile?id=154852)1, [Juan Montes Maestre](https://events.infovaya.com/profile?id=154855)1, [Bernhard Thomaszewski](https://events.infovaya.com/profile?id=60641)2, [Stelian Coros](https://events.infovaya.com/profile?id=154858)1

	- 1ETH Zurich

	- 2Université de Montréal

	Print slidable lattice patterns with FDM

	![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/b6e48ee1-a908-40b7-996d-2d27c92bcabb/Screen_Shot_2022-05-25_at_16.19.44.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220629T173320Z&X-Amz-Expires=3600&X-Amz-Signature=acabad2f67974435fe0b68f9fa75f389d251f0cfcbb9c7081517b0b930226c8b&X-Amz-SignedHeaders=host&x-id=GetObject)
	
	![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/db82dbb8-ce16-4b73-bccc-95f10241fac4/Screen_Shot_2022-05-25_at_16.21.11.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220629T173320Z&X-Amz-Expires=3600&X-Amz-Signature=9adfd3fb66f2d71b697ed6b4d21d0b2bf5c7d2535936fb7b469ada7d592a667c&X-Amz-SignedHeaders=host&x-id=GetObject)

	# **Vertebraic Soft Robotic Joint Design with Twisting and Antagonism**

	[Jianhui Liu](https://events.infovaya.com/profile?id=154861), [Xiaocheng Wang](https://events.infovaya.com/profile?id=154864)1, [Sicong Liu](https://events.infovaya.com/profile?id=123286), [Juan Yi](https://events.infovaya.com/profile?id=154867)2, [Xueqian Wang](https://events.infovaya.com/profile?id=104649)3, [Zheng Wang](https://events.infovaya.com/profile?id=29877)2

	- 1Tsinghua University

	- 2Southern University of Science and Technology

	- 3Center for Artificial Intelligence and Robotics, Graduate School

	Variable stiffness is on the rise?

	![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f2fc3cc0-760a-4fdc-a61a-dff1854962f8/IMG_2697.heic?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220629T173317Z&X-Amz-Expires=3600&X-Amz-Signature=ab0a03860d54eb78b1f18f25847972ad900da331a7138f1772d6bdf2dfc3575d&X-Amz-SignedHeaders=host&x-id=GetObject)

	# **Repeated Jumping with the REBOund: Self-Righting Jumping Robot Leveraging Bistable Origami-Inspired Design**

	[Yuchen Sun](https://events.infovaya.com/profile?id=154870), [Joanna Wang](https://events.infovaya.com/profile?id=154873), [Cynthia Sung](https://events.infovaya.com/profile?id=29616)

	Using leg for seft-righting after jump

	![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/8609c759-ccc1-4a2c-9529-abb60e1a3332/IMG_2700.heic?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220629T173317Z&X-Amz-Expires=3600&X-Amz-Signature=db210a28bdaad6dd4fe78db71f8cf38640de08ff14041b3e70d7b2059d176aad&X-Amz-SignedHeaders=host&x-id=GetObject)

	# **Enhancing the Universality of a Pneumatic Gripper Via Continuously Adjustable Initial Grasp Postures**

	[Yafeng Cui](https://events.infovaya.com/profile?id=154876)1, [Xin-Jun Liu](https://events.infovaya.com/profile?id=50516)1, [Xuguang Dong](https://events.infovaya.com/profile?id=154879)1, [Jingyi Zhou](https://events.infovaya.com/profile?id=154882)1, [Huichan Zhao](https://events.infovaya.com/profile?id=154885)1

	- 1Tsinghua University

# Day 4: Main conference

[Wearable Robots and Interfaces](7174df68-dea7-43da-9c2b-d5271b9c3982)

	**Enhancing Flexibility and Adaptability in Conjoined Human-Robot Industrial Tasks with a Minimalist Physical Interface**

[Soft Robot Materials, Models, and Design](ef08e398-ab70-4330-ad93-948ab126f306)

	# **Sim-To-Real for Soft Robots Using Differentiable FEM: Recipes for Meshing, Damping, and Actuation**

	[Mathieu Dubied](https://events.infovaya.com/profile?id=156490)1, [Mike Yan Michelis](https://events.infovaya.com/profile?id=156493)2, [Andrew Spielberg](https://events.infovaya.com/profile?id=29562)3, [Robert Kevin Katzschmann](https://events.infovaya.com/profile?id=150838)

	- 1ETH Zurich

	- 2Technical University of Munich

	- 3Massachusetts Institute of Technology

	Simulation using FEM for soft material

	![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/75d11a33-05fa-43f8-a88a-ed8f7ae4fc46/Screen_Shot_2022-05-26_at_10.48.29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220629T173321Z&X-Amz-Expires=3600&X-Amz-Signature=65d6a2f1b32ebea9b28d16d9d866400e8539ba3b9d806ff0f31e2396eb526fe4&X-Amz-SignedHeaders=host&x-id=GetObject)

	# **A 3D Printed Soft Robotic Gripper with a Variable Stiffness Enabled by a Novel Positive Pressure Layer Jamming Technology**

	[George B. Crowley](https://events.infovaya.com/profile?id=156496)1, [Xianpai Zeng](https://events.infovaya.com/profile?id=156499), [Hai-Jun Su](https://events.infovaya.com/profile?id=29595)1

	- 1The Ohio State University

	Using jamming to strengthen gripping force of a pneumatic gripper —> lift off 2.4 kg metal rod

	TPU 85A

	![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/d91d4e76-6c9c-4b02-9d7a-f7cc31220818/IMG_2710.heic?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220629T173321Z&X-Amz-Expires=3600&X-Amz-Signature=ad5fd319f70f1ed6774c954480c01625710319bf5987dec205a51014a48c4321&X-Amz-SignedHeaders=host&x-id=GetObject)

	# **A Low-Cost, Easy-To-Manufacture, Flexible, Multi-Taxel Tactile Sensor and Its Application to In-Hand Object Recognition**

	[Tessa Johanna Pannen](https://events.infovaya.com/profile?id=157678)1, [Steffen Puhlmann](https://events.infovaya.com/profile?id=157681)2, [Oliver Brock](https://events.infovaya.com/profile?id=27508)

	- 1Technische Universität Berlin, Jungheinrich

	- 2TU Berlin

	# **Soft-Jig: A Flexible Sensing Jig for Simultaneously Fixing and Estimating Orientation of Assembly Parts**

	[Tatsuya Sakuma](https://events.infovaya.com/profile?id=51083)1, [Takuya Kiyokawa](https://events.infovaya.com/profile?id=150061)2, [Jun Takamatsu](https://events.infovaya.com/profile?id=157684)3, [Takahiro Wada](https://events.infovaya.com/profile?id=157687)1, [Tsukasa Ogasawara](https://events.infovaya.com/profile?id=6372)1

	- 1Nara Institute of Science and Technology

	- 2Osaka University

	- 3Microsoft

	# **Design and Characterisation of a Muscle-Mimetic Dielectrophoretic Ratcheting Actuator**

	[Martin Garrad](https://events.infovaya.com/profile?id=126382), [Mohammad Naghavi Zadeh](https://events.infovaya.com/profile?id=157702)1, [Christian Romero](https://events.infovaya.com/profile?id=124273), [Fabrizio Scarpa](https://events.infovaya.com/profile?id=157705)1, [Andrew Conn](https://events.infovaya.com/profile?id=27729), [Jonathan Rossiter](https://events.infovaya.com/profile?id=29334)1

	- 1University of Bristol

	![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/0d2c14e1-2eef-431c-ad5a-72ffb280fadc/IMG_2758.heic?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220629T173321Z&X-Amz-Expires=3600&X-Amz-Signature=5d2bb0173a488792c958396885ca5a3ee1224d889d57710a408a14c08ef23488&X-Amz-SignedHeaders=host&x-id=GetObject)
	
	![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/b7460711-5852-40b7-adef-a2576d2c5543/IMG_2759.heic?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220629T173321Z&X-Amz-Expires=3600&X-Amz-Signature=f17a47f1d612e7c8b84b3eca2f08303b9d210ad966a386c41a40e530ddcc5f7d&X-Amz-SignedHeaders=host&x-id=GetObject)

	# **Hybrid Antagonistic System with Coiled Shape Memory Alloy and Twisted and Coiled Polymer Actuator for Lightweight Robotic Arm**

	[Sang Yul Yang](https://events.infovaya.com/profile?id=30006)1, [Kihyeon Kim](https://events.infovaya.com/profile?id=157708)2, [Sungwon Seo](https://events.infovaya.com/profile?id=51165)3, [Dongsu Shin](https://events.infovaya.com/profile?id=157711)2, [Jae Hyeong Park](https://events.infovaya.com/profile?id=50883)4, [Young Jin Gong](https://events.infovaya.com/profile?id=157714)5, [Hyouk Ryeol Choi](https://events.infovaya.com/profile?id=153427)

	- 1Sungkyunkwan university

	- 2Sungkyunkwan University

	- 3SungKyunKwan University

	- 4Sungkwunkwan University

	- 5SungKyunKwan university(SKKU)

	Combine TCA and SMA, but why?

	![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/8f9457d2-9801-4381-9807-27ec586eb5f5/IMG_2760.heic?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220629T173321Z&X-Amz-Expires=3600&X-Amz-Signature=f97d93710c9905d3417781f625cf8432b55e158f1c3b629a875f04f72e39e790&X-Amz-SignedHeaders=host&x-id=GetObject)

	# **Multi-Dimensional Proprioception and Stiffness Tuning for Soft Robotic Joints**

	[Zhonggui Fang](https://events.infovaya.com/profile?id=123268), [Chaoyi Huang](https://events.infovaya.com/profile?id=157717)1, [Yaxi Wang](https://events.infovaya.com/profile?id=157720)2, [Jiahao Xu](https://events.infovaya.com/profile?id=157723)3, [Jiyong Tan](https://events.infovaya.com/profile?id=157726)3, [Bin Li](https://events.infovaya.com/profile?id=157729)4, [Zicheng Wang](https://events.infovaya.com/profile?id=157732)5, [Yige Wu](https://events.infovaya.com/profile?id=157735)3, [Anlun Huang](https://events.infovaya.com/profile?id=157738)3, [Juan Yi](https://events.infovaya.com/profile?id=154867)3, [Sicong Liu](https://events.infovaya.com/profile?id=123286), [Zheng Wang](https://events.infovaya.com/profile?id=29877)3

	- 1The University of Hong Kong

	- 2University of Macau

	- 3Southern University of Science and Technology

	- 4Shenzhen Hanwei Intelligent Medical Co., Ltd

	- 5INSA de Rennes

	# **Design and Modeling of a Compound Twisted and Coiled Actuator Based on Spandex Fibers and an SMA Skeleton**

	[Hao Zhang](https://events.infovaya.com/profile?id=157741), [Guilin Yang](https://events.infovaya.com/profile?id=29998)1, [Tianjiang Zheng](https://events.infovaya.com/profile?id=30136)2, [Wenjun Shen](https://events.infovaya.com/profile?id=157744)3, [Yi Wang](https://events.infovaya.com/profile?id=157747)3, [Guolong Zhang](https://events.infovaya.com/profile?id=157750)4, [Zaojun Fang](https://events.infovaya.com/profile?id=157753)5, [Chi Zhang](https://events.infovaya.com/profile?id=30221)6

	- 1Ningbo Institute of Material Technology and Engineering, Chines

	- 2Ningbo Industrial Technology Research Institute

	- 3Ningbo Institute of Material Technology and Engineering, Chinese

	- 4Ningbo University

	- 5Ningbo Institute of Materials Technology & Engineering, CAS

	- 6Ningbo Institute of Material Technology and Engineering,CAS

	Double twisted TCA around straight SMA to increase contraction force

	![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/6b93011a-f22d-4537-938f-0fc1fdf460cd/Screen_Shot_2022-05-26_at_16.19.12.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220629T173321Z&X-Amz-Expires=3600&X-Amz-Signature=8e774bcf0188288026b3843454922afa1a91914770d76a7e879812de05d9c76d&X-Amz-SignedHeaders=host&x-id=GetObject)

	# **Design of a 3D-Printed Soft Robotic Hand with Integrated Distributed Tactile Sensing**

	[Oliver Shorthose](https://events.infovaya.com/profile?id=157762), [Alessandro Albini](https://events.infovaya.com/profile?id=157765), [Liang He](https://events.infovaya.com/profile?id=153337), [Perla Maiolino](https://events.infovaya.com/profile?id=56838)

	Still don’t understand how you print the tactile sensor? —> it is just a 3d printed pouch and there is a pressure sensor to measure the pressure —> read applying force

	# **The Chain-Link Actuator: Exploiting the Bending Stiffness of McKibben Artificial Muscles to Achieve Larger Contraction Ratios**

	[Daniel Bruder](https://events.infovaya.com/profile?id=157768), [Robert Wood](https://events.infovaya.com/profile?id=29935)

	Use two McKibben in parallel so that when contract, they form a loop —> increase the contraction ratio.

	With the same contraction ration, how does the contraction force change compare to traditional McKibben?

	![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/cbcd0ba9-7d39-4bfa-9c25-fc7f227e1159/IMG_2763.heic?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220629T173321Z&X-Amz-Expires=3600&X-Amz-Signature=3ccb3d0624ddcba805b3029bb79671974d53cc4156517d26c16c140b11b39e7a&X-Amz-SignedHeaders=host&x-id=GetObject)
	
	![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/d99d9141-5f0a-4bf4-8055-876e027af7b2/IMG_2764.heic?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220629T173321Z&X-Amz-Expires=3600&X-Amz-Signature=1412fd98b1f47685c5d82b53904ab0e6bae4d7de668f9057631f168e7caaf4b7&X-Amz-SignedHeaders=host&x-id=GetObject)

	# **Physics-Based Modeling of Twisted-And-Coiled Actuators Using Cosserat Rod Theory**

	[Jiefeng Sun](https://events.infovaya.com/profile?id=51309), [Jianguo Zhao](https://events.infovaya.com/profile?id=30126)1

	- 1Colorado State University

	Modelling of TCA with helical and conical shape. Does it predict other shape of wiring the TCA too? For example a loop?

	![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/2bd8361a-ead3-44e4-8f22-39edb0ce1aa9/Screen_Shot_2022-05-26_at_16.38.45.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220629T173321Z&X-Amz-Expires=3600&X-Amz-Signature=118b953987cfe141cb238d4d271c74612496801f7bcdb29965fad681ed71233f&X-Amz-SignedHeaders=host&x-id=GetObject)

[Poster session](401d0fdd-7a68-4b1a-8e54-b3abcf7d5545)

	![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/1395e063-a7c2-42b0-a925-f3d8f1066e13/B4041F0D-74B8-4A72-A1CF-CB8F67588EA6.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220629T173322Z&X-Amz-Expires=3600&X-Amz-Signature=0a4818132319cc7f39ee7333705a668c685744f2c722b3c76ba1cd686334acd9&X-Amz-SignedHeaders=host&x-id=GetObject)

	Using robot to move deformable object through several checkpoints and learn the shape of the object

	![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/9669fa44-2775-4685-b499-79a523ae884a/image.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220629T173322Z&X-Amz-Expires=3600&X-Amz-Signature=3936c757a6436fa224c7c547a46fed3e3842e79314f2f0811a5299f008400425&X-Amz-SignedHeaders=host&x-id=GetObject)

	TPU 85A: 3-shell, 10mm/s, 105% flow rate, use 3 input holes nozzel from Bondtech, bake at 180C

	[embed]()

	MR fluid with magnet to modulate the damping, might use EPM (he remembered our origami jumper)

	![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/67df3949-24ca-402b-8fdd-f99280b55afc/73D6044E-826E-4120-A23E-0D47E9365186.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220629T173322Z&X-Amz-Expires=3600&X-Amz-Signature=aaf58b894c93dea67c17447e860bab927100395fd2b05236ff13974f75a9a95d&X-Amz-SignedHeaders=host&x-id=GetObject)

	![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/7afc1db5-45b4-4a7f-858d-97274d601bf6/ACE04943-A677-44F6-ADD4-3E41B75FA02E.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220629T173322Z&X-Amz-Expires=3600&X-Amz-Signature=8b47f3e5e8f5f994c08aff967863cde90e09ab55dd7ce720b0cc78fc3125bd01&X-Amz-SignedHeaders=host&x-id=GetObject)

	Locking motor with strong string during flight state and release that stored energy in next ground contact → stronger hopping

	![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f252edee-4cef-4116-8309-920f471e16bf/image.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220629T173322Z&X-Amz-Expires=3600&X-Amz-Signature=e232ad9924a94eff0534ac875502a07289349cef7a71500544f99f2fa9e4d189&X-Amz-SignedHeaders=host&x-id=GetObject)

	Use NeRF for drone navigation, simulation only, not work well with dynamic scene or dynamic light conditions 

	![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f48461db-28a3-4b5a-9275-b2c612b7bc17/458B0BCF-A555-48F2-9C4C-2783C896E9FA.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220629T173322Z&X-Amz-Expires=3600&X-Amz-Signature=e4a48e36fa4f523a6f8c4ea8560fa24fe890ffc9dc5d8602e3bf3b66c133d759&X-Amz-SignedHeaders=host&x-id=GetObject)

	![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/73320ae2-c7ad-4a5e-a4c5-a3c02374c03c/049C3CEB-E30E-46C8-AB56-21FDD454CE2E.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220629T173322Z&X-Amz-Expires=3600&X-Amz-Signature=c131bc0b7812c994155803fe8e3f49000d487a015b4b1eb09c4b3c43a5ea6964&X-Amz-SignedHeaders=host&x-id=GetObject)

	![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/beddb9bf-bba7-4240-a311-2a7ce9a37903/6AC462F0-3B20-4DE3-A172-DBCA9D9FC5DE.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220629T173322Z&X-Amz-Expires=3600&X-Amz-Signature=e43fe7d71216bdcc90ac31d383f21662476f932d12c40bd2bf1e7ae910e1cde9&X-Amz-SignedHeaders=host&x-id=GetObject)

	Auxetics tube, variable stiffness depending on twisting angle

	![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/83789cf8-e078-4551-8045-5cec918953ad/7AE45583-54C7-4FD3-AC01-89AA42B476BE.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220629T173322Z&X-Amz-Expires=3600&X-Amz-Signature=12fa124ddcebf64e8b538e7b80b65d33ffc17db4e45d2669440c9aafae95d0e0&X-Amz-SignedHeaders=host&x-id=GetObject)

	Polyjet, there are leaking, used vaccum pressure for sensing so that even if there are tiny leaking hole, when have negative pressure, the hole will close → leak robust

	![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/3c4c9d92-5e33-45b6-bb4d-b4caf06a6db3/5600A5E6-C173-4306-89B7-2B4E8643A3E2.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220629T173322Z&X-Amz-Expires=3600&X-Amz-Signature=2af944a89f544a08af3427e72cd43928041f8ac48013915f12b2a20b77d12da0&X-Amz-SignedHeaders=host&x-id=GetObject)

	Optimizing filling space, might be a good application on planning extruder moving path in 3d print

# Day 5: Workshop & Tutorial

[Bio-inspired and Bio-hybrid (Cyborg) Systems](4472e034-3130-41cb-a959-071aea96e8b0)

	![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/4401c403-ee7d-4e4c-8e02-57d9424c750a/IMG_2405.heic?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220629T173322Z&X-Amz-Expires=3600&X-Amz-Signature=b8750ec0938551984c47370dfb7142447b06c8945bd5a53eae79433daaf225ab&X-Amz-SignedHeaders=host&x-id=GetObject)

	# Insect-based biorobots for chemical sensing 

[
Leveraging Advancements in Smart Materials Science: Soft Robots Gaining New Abilities through Smart and Functional Materials](b28d02fe-8e12-41b8-9c91-25d3b80ada66)

	[bookmark](https://www.spp2100.de/icra2022)

	# Soft active materials for adaptive, shape-changing robots

	**Rebecca Kramer-Bottiglio**
	_Yale University_

	New functional materials  

	![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/c4fa831c-813d-4dd8-b319-34da3da1d6f8/Screen_Shot_2022-05-27_at_1.59.19_PM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220629T173322Z&X-Amz-Expires=3600&X-Amz-Signature=34588082e5b2c9dc05076a214b1f23a3f2f374f57816b2dbd3f97b0c6bbc88df&X-Amz-SignedHeaders=host&x-id=GetObject)

	![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/4026a5ed-8c8d-4bb3-8648-1bf8ec97b7aa/Screen_Shot_2022-05-27_at_2.02.56_PM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220629T173322Z&X-Amz-Expires=3600&X-Amz-Signature=15b18b34f53174346c0c3150db547cdf469d92fb7f596d544b85edc6b51e5830&X-Amz-SignedHeaders=host&x-id=GetObject)

	![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/0a0d451e-334b-4ca4-a020-dd5a63395ecd/Screen_Shot_2022-05-27_at_2.05.11_PM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220629T173322Z&X-Amz-Expires=3600&X-Amz-Signature=1c01560588c043ea87a7177a11b54bd592f712893b908ae719c05458f724f130&X-Amz-SignedHeaders=host&x-id=GetObject)

	One time Actuation 

	![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/3fc22aef-6f6a-4ee9-8e7e-34233cb3e769/Screen_Shot_2022-05-27_at_2.08.03_PM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220629T173322Z&X-Amz-Expires=3600&X-Amz-Signature=ef960433be09560b1ff9f22b9914c4535e13f17afd210962e02fa133ae2ac585&X-Amz-SignedHeaders=host&x-id=GetObject)

	# From smart materials to trustworthy soft robots - flapping, gripping and squeezing

	**Jonathan Rossiter**

	_University of Bristol_

	[bookmark](https://www.bristol.ac.uk/engineering/research/softlab/)

	![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/591f1aa4-02ce-46cb-b6ea-4c345aff4b3f/Screen_Shot_2022-05-27_at_2.40.05_PM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220629T173322Z&X-Amz-Expires=3600&X-Amz-Signature=91b04c93ce831cd96d75957e3c1490bef441bdca993fd4a649c0273686d27f3d&X-Amz-SignedHeaders=host&x-id=GetObject)

	![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/31c81d17-9dc2-45b1-b022-c82bce81bacc/Screen_Shot_2022-05-27_at_2.25.18_PM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220629T173322Z&X-Amz-Expires=3600&X-Amz-Signature=0e2dd957557b85b63881c82052a80bcc9f58aaf0b5651e33efb8d38559c50746&X-Amz-SignedHeaders=host&x-id=GetObject)

	![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/19e1a8c0-f2ab-4b74-b94f-8450a51ac7b6/Screen_Shot_2022-05-27_at_2.25.36_PM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220629T173322Z&X-Amz-Expires=3600&X-Amz-Signature=d3132d0619da6f8ff23f28e5b77f50b3bdb9af04b2bdcb010e1213d10d8c1e0b&X-Amz-SignedHeaders=host&x-id=GetObject)

	![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/c032303d-0baa-478d-87df-4ee24ca2b70d/Screen_Shot_2022-05-27_at_2.28.17_PM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220629T173322Z&X-Amz-Expires=3600&X-Amz-Signature=e08ad9ad13a0008ec8307ee19f5554a998f0ddd8588854a03d83eab874a742d5&X-Amz-SignedHeaders=host&x-id=GetObject)

	Edible robots/food

	![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/16894ced-891e-4f3e-89bd-712c22f99cb0/Screen_Shot_2022-05-27_at_2.30.58_PM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220629T173322Z&X-Amz-Expires=3600&X-Amz-Signature=41f4e22903ab2408588d91f8515313f1bbf087485da7692eebdd2dc1d672a1a4&X-Amz-SignedHeaders=host&x-id=GetObject)

	![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f49de41f-14fa-4709-a7cd-ea4914ffd7e6/Screen_Shot_2022-05-27_at_2.33.57_PM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220629T173322Z&X-Amz-Expires=3600&X-Amz-Signature=829543dadb650197896bafa1a8f0518b81af1f2cc406b6068478af918c8b46c7&X-Amz-SignedHeaders=host&x-id=GetObject)

	![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/cf0d0571-090e-4a6d-8327-2bc68b3f2b77/Screen_Shot_2022-05-27_at_2.35.01_PM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220629T173322Z&X-Amz-Expires=3600&X-Amz-Signature=4f3cf7447672ffc861fdc3ae537fbf097b12b68c15f59fd1a0172f3ce43d2135&X-Amz-SignedHeaders=host&x-id=GetObject)

	![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/02912307-6e2f-4171-bbc3-72c2ff7d93b4/Screen_Shot_2022-05-27_at_2.37.40_PM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220629T173322Z&X-Amz-Expires=3600&X-Amz-Signature=23d9febecaeaed4b4e171de012617e516646a1a9c9685be7b794495a5bee09dc&X-Amz-SignedHeaders=host&x-id=GetObject)

	# Smart Vines: Soft Growing Robots with Distributed Sensing and Stiffness Control

	**Allison Okamura**

	_Stanford University_

	Research Question: 

	- sense the environment + sense the shape of the robots

		![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/6ba62bf2-f006-497b-ad8a-14a5ec036b30/Screen_Shot_2022-05-27_at_2.53.55_PM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220629T173323Z&X-Amz-Expires=3600&X-Amz-Signature=b7a094e9581bd64fd92cbd27cff45c661918edb986515bef9893b27a1fe3f643&X-Amz-SignedHeaders=host&x-id=GetObject)

		![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ddf8ddf5-80df-4566-a8a9-f5d3e2836866/Screen_Shot_2022-05-27_at_2.56.38_PM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220629T173323Z&X-Amz-Expires=3600&X-Amz-Signature=3a778cb0066ed0bb927d9a2a89b8a8fc0fd1c5e6d51510a39f62f44f30fc0894&X-Amz-SignedHeaders=host&x-id=GetObject)

		Fiber Sensing 

		![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/11d928d7-336b-461c-b5e6-5043ba408985/Screen_Shot_2022-05-27_at_2.57.24_PM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220629T173323Z&X-Amz-Expires=3600&X-Amz-Signature=d90089b5cbae47eed20b05ace337e80e6d8e8dfee1e031f53a493ed92caf1625&X-Amz-SignedHeaders=host&x-id=GetObject)

		![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/6fa2b56f-8be3-4cb7-b48e-63984758b6f1/Screen_Shot_2022-05-27_at_2.59.33_PM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220629T173323Z&X-Amz-Expires=3600&X-Amz-Signature=a1cedc93426edbd8ab5dd045005c5e165eb280f2eccb7218448f093cd2f06d67&X-Amz-SignedHeaders=host&x-id=GetObject)

		# Fluidic Logic and Embodied Intelligence

		**Adam Stokes**

		_University of Edinburgh_

		![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/9c14c399-67d1-4781-8587-6898b02ac3b0/Screen_Shot_2022-05-27_at_3.14.51_PM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220629T173323Z&X-Amz-Expires=3600&X-Amz-Signature=43b25219056737523c25dc22e2f497afcc078acccd2cda1ed1f4b1d81a958b12&X-Amz-SignedHeaders=host&x-id=GetObject)

		![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/bb9973bb-8520-45b8-abcd-5569a5c2bd47/Screen_Shot_2022-05-27_at_3.16.07_PM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220629T173323Z&X-Amz-Expires=3600&X-Amz-Signature=f7950af435b9e2e2be24f6419e94702cfb2c5174416f770a5ca3396b8baf9634&X-Amz-SignedHeaders=host&x-id=GetObject)

		![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/1d33e1d8-bc77-4bb0-8027-cf99ecc6523e/Screen_Shot_2022-05-27_at_3.18.44_PM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220629T173323Z&X-Amz-Expires=3600&X-Amz-Signature=a7b6ef177eea9a7292d612180c4e70bd30e5b162486873665ffae1c5e5a15a05&X-Amz-SignedHeaders=host&x-id=GetObject)

		![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/c442882f-fd8a-487c-8db7-085c1b29622e/Screen_Shot_2022-05-27_at_3.19.49_PM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220629T173323Z&X-Amz-Expires=3600&X-Amz-Signature=cae4f28d9f772d26389e80324fdefaf675a4b35218d09cfcf4024ef9e023e51a&X-Amz-SignedHeaders=host&x-id=GetObject)

		![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/187eec75-ab1d-4142-8c0c-d6da85ea0aca/Screen_Shot_2022-05-27_at_3.25.12_PM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220629T173323Z&X-Amz-Expires=3600&X-Amz-Signature=4260f28143fdf266787bb6b77b326898cc463a54d3c83cfcd7f5a3b56f30ce08&X-Amz-SignedHeaders=host&x-id=GetObject)

		![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/76791583-bd32-4b61-afa8-5f9211f968ec/Screen_Shot_2022-05-27_at_3.25.47_PM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220629T173323Z&X-Amz-Expires=3600&X-Amz-Signature=57a87dc4bc80f25ce28d8d5073e365011fe18a68719b2c40c6c98e96c40cdcd7&X-Amz-SignedHeaders=host&x-id=GetObject)

		![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/395155f6-db4e-4e11-8552-5e9d945cb5b9/Screen_Shot_2022-05-27_at_3.31.58_PM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220629T173323Z&X-Amz-Expires=3600&X-Amz-Signature=195ee09aa64afe6c63b1d349949fc56aad78a8482732e5582d34f300514ac983&X-Amz-SignedHeaders=host&x-id=GetObject)

		# Embracing Complexity for Enduring and Adaptive Soft Robots

		**Robert F. Shepherd**

		_Cornell University_

		![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/98ee0c4e-7ce3-4753-892b-fcee4dee5f34/Screen_Shot_2022-05-27_at_3.50.51_PM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220629T173323Z&X-Amz-Expires=3600&X-Amz-Signature=04c26afc71fc039bdcb3bc9b8c9e0e08bae7611c61683ccf472ac7c69aabc09c&X-Amz-SignedHeaders=host&x-id=GetObject)

		![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/8cb88ac4-d1a0-44db-947d-00e421dd157d/Screen_Shot_2022-05-27_at_3.51.28_PM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220629T173323Z&X-Amz-Expires=3600&X-Amz-Signature=e39069111f786fffb0d432a2ecdc14d4ec3a02a11b09d2f12c1781e1580461b7&X-Amz-SignedHeaders=host&x-id=GetObject)

		![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/86bcc311-ee65-4b25-9efc-e80dd51e10cc/Screen_Shot_2022-05-27_at_3.52.51_PM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220629T173323Z&X-Amz-Expires=3600&X-Amz-Signature=648cdacfa542e899e02a5d6a93910b997f99c469f37e6d87a985133212c6c7bd&X-Amz-SignedHeaders=host&x-id=GetObject)

		![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/6f329c2e-294b-4ff2-9ba3-b7fd0981ed51/Screen_Shot_2022-05-27_at_3.58.42_PM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220629T173323Z&X-Amz-Expires=3600&X-Amz-Signature=8712e904a3e1802132427e57f470929cdfa03136dc2dcae9b8a079dd6b6f04b3&X-Amz-SignedHeaders=host&x-id=GetObject)

		![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/937c5cd5-fefd-483d-90a1-b9e991acc1a6/Screen_Shot_2022-05-27_at_4.00.31_PM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220629T173323Z&X-Amz-Expires=3600&X-Amz-Signature=3dbe2fc353c6c19241e85b326ce8637450939be72fb642328d34672db54c783e&X-Amz-SignedHeaders=host&x-id=GetObject)

		![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/681a5d9a-796a-409e-b384-9eeae52a3ee5/Screen_Shot_2022-05-27_at_4.01.05_PM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220629T173323Z&X-Amz-Expires=3600&X-Amz-Signature=70a88ed509bcd95b9c1a457d7592bd0aabfef6383e33a3065befe982df0e40f1&X-Amz-SignedHeaders=host&x-id=GetObject)

		![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/82885bdb-32f2-47bf-9b44-15d818b74049/Screen_Shot_2022-05-27_at_4.01.42_PM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220629T173323Z&X-Amz-Expires=3600&X-Amz-Signature=8ec4a3ac8d21e93633e1638f96af6332f13ba2def42c2b91688553846129086c&X-Amz-SignedHeaders=host&x-id=GetObject)

		![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/4374649d-b770-4dd9-9427-958c85834b49/Screen_Shot_2022-05-27_at_4.02.23_PM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220629T173323Z&X-Amz-Expires=3600&X-Amz-Signature=901b0c56930ef978decd52c3f7a15f9e50fb93037ac1b04764773e5c01c26664&X-Amz-SignedHeaders=host&x-id=GetObject)

		![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/b9459788-7e2f-447e-9a35-fa20a469409f/Screen_Shot_2022-05-27_at_4.06.08_PM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220629T173323Z&X-Amz-Expires=3600&X-Amz-Signature=b74400a0a2951f20f8d2e819d5e5c3574356b28522ee2dc0d8372824cff39f35&X-Amz-SignedHeaders=host&x-id=GetObject)

		![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e4c0a705-d06a-4071-af8a-0a588bf5be1a/Screen_Shot_2022-05-27_at_4.09.04_PM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220629T173323Z&X-Amz-Expires=3600&X-Amz-Signature=109de815efce59467a4886a64b4a1a20a38be04d2279debcce6db5e78e416afe&X-Amz-SignedHeaders=host&x-id=GetObject)

		![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/2abc5447-0a27-4ab5-9bf2-dd649fe61d2c/Screen_Shot_2022-05-27_at_4.10.23_PM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220629T173323Z&X-Amz-Expires=3600&X-Amz-Signature=7f218ef15b8d50f46d9778c6def8b55608f3bc75d30f9bd8f1360e730247b42e&X-Amz-SignedHeaders=host&x-id=GetObject)

		![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/c9dc4e8c-4edd-4980-919c-30028602561c/Screen_Shot_2022-05-27_at_4.10.41_PM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220629T173323Z&X-Amz-Expires=3600&X-Amz-Signature=27a3e8284ad025b8483a8fa580c41de9028caee34b0e0ec4f3cfc3769ebc1176&X-Amz-SignedHeaders=host&x-id=GetObject)

		# Soft Material Robotics and next-generation surgical robots

		**Sheila Russo**

		Boston University

		![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/2a16a83d-5ab6-4026-8fcc-fd35992946ee/Screen_Shot_2022-05-27_at_4.28.40_PM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220629T173323Z&X-Amz-Expires=3600&X-Amz-Signature=cab13b321a22a8fbaf75f75259496cfde6b2bb709051d738c86c75a433ba8200&X-Amz-SignedHeaders=host&x-id=GetObject)

		![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/73e0c837-42c7-4f0c-99e4-4161c581564d/Screen_Shot_2022-05-27_at_4.32.09_PM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220629T173323Z&X-Amz-Expires=3600&X-Amz-Signature=f16e84ea0d47f154d9f94a073f6637f08fb0c9a5ebcc5cf92ef2770960b019fd&X-Amz-SignedHeaders=host&x-id=GetObject)

		![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/07433edd-060c-4bec-b235-980e1300c224/Screen_Shot_2022-05-27_at_4.35.09_PM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220629T173323Z&X-Amz-Expires=3600&X-Amz-Signature=35b3a1a4fd3ace319ce5cc41f6be34fcfbae0baf3464174e5663fb869fc2789b&X-Amz-SignedHeaders=host&x-id=GetObject)

		How should we use functional soft materials in robotics? 

		Challenging: Energy density + power density 

		The “environment” the material suits  
