---
layout: post
title: ROS on Ubuntu 20.04, No module named 'rclpy._rclpy_pybind11'
date: 2021-10-20T05:45:48.783Z
thumbnail: /asset/img/uploads/screen-shot-2021-10-20-at-14.47.27.png
categories: How-to
---
After installing ROS2 Galactic to Ubuntu 20.04 following the instruction [here](https://docs.ros.org/en/galactic/Installation/Ubuntu-Install-Debians.html), when run the examples, I stumped at this error:

```shell
Traceback (most recent call last):
  File "/opt/ros/galactic/lib/demo_nodes_py/listener", line 11, in <module>
    load_entry_point('demo-nodes-py==0.14.3', 'console_scripts', 'listener')()
  File "/usr/lib/python3/dist-packages/pkg_resources/__init__.py", line 490, in load_entry_point
    return get_distribution(dist).load_entry_point(group, name)
  File "/usr/lib/python3/dist-packages/pkg_resources/__init__.py", line 2854, in load_entry_point
    return ep.load()
  File "/usr/lib/python3/dist-packages/pkg_resources/__init__.py", line 2445, in load
    return self.resolve()
  File "/usr/lib/python3/dist-packages/pkg_resources/__init__.py", line 2451, in resolve
    module = __import__(self.module_name, fromlist=['__name__'], level=0)
  File "/opt/ros/galactic/lib/python3.8/site-packages/demo_nodes_py/topics/listener.py", line 16, in <module>
    from rclpy.node import Node
  File "/opt/ros/galactic/lib/python3.8/site-packages/rclpy/node.py", line 43, in <module>
    from rclpy.client import Client
  File "/opt/ros/galactic/lib/python3.8/site-packages/rclpy/client.py", line 22, in <module>
    from rclpy.impl.implementation_singleton import rclpy_implementation as _rclpy
  File "/opt/ros/galactic/lib/python3.8/site-packages/rclpy/impl/implementation_singleton.py", line 32, in <module>
    rclpy_implementation = import_c_library('._rclpy_pybind11', package)
  File "/opt/ros/galactic/lib/python3.8/site-packages/rpyutils/import_c_library.py", line 39, in import_c_library
    return importlib.import_module(name, package=package)
  File "/usr/lib/python3.9/importlib/__init__.py", line 127, in import_module
    return _bootstrap._gcd_import(name[level:], package, level)
ModuleNotFoundError: No module named 'rclpy._rclpy_pybind11'
The C extension '/opt/ros/galactic/lib/python3.8/site-packages/_rclpy_pybind11.cpython-39-x86_64-linux-gnu.so' isn't present on the system. Please refer to 'https://index.ros.org/doc/ros2/Troubleshooting/Installation-Troubleshooting/#import-failing-without-library-present-on-the-system' for possible solutions
```

This is due to the mismatch between my default Python version (Python 3.9) and the version used to build the binary `.deb` (Python 3.8).

To solve this, run update the default Python version to 3.8 by:

```
sudo update-alternatives --config python3
```

Python with * is the default version. Choose Python 3.8.

After that, you can run the example in the [ROS2 installation guide](https://docs.ros.org/en/galactic/Installation/Ubuntu-Install-Debians.html).

If you installed `ros-galactic-desktop` above you can try some examples.

In one terminal, source the setup file and then run a C++ `talker`:

```
source /opt/ros/galactic/setup.bash
ros2 run demo_nodes_cpp talker
```

In another terminal source the setup file and then run a Python listener:

```
source /opt/ros/galactic/setup.bash
ros2 run demo_nodes_py listener
```

You should see the `talker` saying that it’s `Publishing` messages and the `listener` saying `I heard` those messages. This verifies both the C++ and Python APIs are working properly. Hooray!