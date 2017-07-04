##  搭建虚拟机环境以及Linux包管理

### 在Windows中搭建Linux环境

为了在windows系统下安装Linux虚拟机，我们首先需要下载并安装[Git](https://git-scm.com/)、[VirtualBox](https://www.virtualbox.org/)与[Vagrant](vagrantup.com)，记住Vagrant要在VirtualBox安装好之后再安装，因为Vagrant依赖于VirtualBox。接着选择所需系统，在[Udacity](https://www.udacity.com/)的教程中，我们选用名为`ubuntu-trusty-64`的`ubuntu`系统，使用Vagrant安装虚拟机需要一个名为`Vagrantfile`的文件（ruby语言）。Udacity官方所给的Vagrantfile如下：

``` ruby
	# -*- mode: ruby -*-
	# vi: set ft=ruby :
	
	# Vagrantfile API/syntax version. Don't touch unless you know what you're doing!
	VAGRANTFILE_API_VERSION = "2"
	
	# Installation script
	$script = <<SCRIPT
	echo Provisioning system ...
	apt-get install cowsay unzip
	rm /usr/share/cowsay/cows/*odo*
	SCRIPT
	
	Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
	  config.vm.box = "ubuntu/trusty64"
	  config.vm.provision "shell", inline: $script
	end
```

在创建`Vagrantfile`之后，即可在`git-bash`命令行中，`cd`进入`Vagrantfile`所在目录，例如我存放在`E:/Linux/udacity`中，并启动虚拟机安装程序：
```	bash
	cd E:/Linux/Udacity
	vagrant up
```

###  进入虚拟Linux系统
```
	vagrant up
```
### 检查软件更新

查看软件更新包需要sudo权限，如果不输入sudo，则会出现`Permission denied`错误：

``` bash
	$ apt-get update
	E: Could not open lock file /var/lib/apt/lists/lock - open (13: Permission denied)
	$ sudo apt-get update
	0% [Connecting to archive.ubuntu.com] [Connecting to security.ubuntu.com] (success)
```

如果需要更新软件，则使用`upgrade`命令：

``` bash
	$ sudo apt-get upgrade
```

这仅仅是`apt-get`命令的冰山一角，如果需要查看`apt-get`命令的完整用法，可以使用`man`指令（manual的缩写）：

``` bash
	$ man apt-get
```

接下来使用`apt-get`来安装`finger`，一个用于查看用户信息的程序：

``` bash
	$ sudo apt-get install finger
```

如果感兴趣的话，可以使用`man`指令，来查看finger的详细信息：

``` bash
	$ man finger
	NAME
	     finger — user information lookup program
	SYNOPSIS
	     finger [-lmsp] [user ...] [user@host ...]
	....
```
