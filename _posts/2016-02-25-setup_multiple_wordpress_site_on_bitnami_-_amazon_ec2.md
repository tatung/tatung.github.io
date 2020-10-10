---
layout: post
title: Setup multiple Wordpress site on Bitnami - Amazon EC2
date: 2016-02-25 00:38:27
thumbnail: /asset/img/uploads/wordpress.jpg
categories: How-to
---
![](/asset/img/uploads/wordpress.jpg)

Let's assume that you want to have <http://domain1.com> and <http://domain2.com> point to 2 different Wordpress instances in a sigle Bitnami - Amazon EC2 instance. This Bitnami - Amazon EC2 instance has also been installed with Wordpress already.

## Configure Apache to accept 2 domains

Make sure to uncomment (delete the `#` character in the beginning) this line in `/opt/bitnami/apache2/conf`

```
	Include conf/extra/httpd-vhosts.conf
```

Go to directory `/opt/bitnami/apache2/conf/extra` and edit file `httpd-vhosts.conf`:

```
cd /opt/bitnami/apache2/conf/extra
vi httpd-vhosts.conf
```

as follow:

```
<VirtualHost *:80>
	ServerAdmin webmaster@domain1.com
	DocumentRoot "/opt/bitnami/apps/wordpress/htdocs"
    ServerName domain1
	<Directory />
    	Require all granted
    </Directory>
	ErrorLog "logs/domain1.com-error_log"
    CustomLog "logs/domain1.com-access_log" common
</VirtualHost>

<VirtualHost *:80>
    ServerAdmin webmaster@domain2.com
    DocumentRoot "/opt/bitnami/apps/wordpress2"
    ServerName domain2.com
    <Directory />
        Require all granted
    </Directory>
    ErrorLog "logs/domain2.com-error_log"
    CustomLog "logs/domain2.com-access_log" common
</VirtualHost>
```

You might notice that in `/home/bitnami/apps` directory, we also have `wordpress` directory. However, this is only a symlink to the real one in `/opt/bitnami/apps/wordpress`. Therefore, we will set `DocumentRoot` to `/opt/bitnami/apps/wordpress` as above.

Go to directory `/opt/bitnami/apps` and create directory `wordpress2`

```
cd /opt/bitnami/apps
mkdir wordpress2
```

Create a temporary `index.html` in `/opt/bitnami/apps/wordpress2` with this content:
	
	<html>
	  <head>
	    <title>Welcome to domain2!</title>
	  </head>
	  <body>
	    <h1>Success!  The domain2 virtual host is working!</h1>
	  </body>
	</html>

Restart `apache`

```
cd /opt/bitnami
sudo ./ctlscript.sh restart apache
```

At this point, when you go to <http://domain2.com>. You should see the simple text:

```
Success!  The domain2 virtual host is working!
```

## Install additional wordpress instance

### Create database for new Wordpress instance

Get into MySQL prompt:

```
mysql -u root -p
```

Type password for mysql when asked.

Create database for `wordpress2`:

```
CREATE DATABASE Wordpress2;
CREATE USER seconduser@localhost;
SET PASSWORD FOR seconduser@localhost= PASSWORD("password_for_seconduser");
GRANT ALL PRIVILEGES ON Wordpress2.* TO seconduser@localhost IDENTIFIED BY 'password_for_seconduser';
FLUSH PRIVILEGES;
exit
```

### Install new Wordpress instance

Download and decompress wordpress

```
wget http://wordpress.org/latest.tar.gz
tar xzvf latest.tar.gz
```

Create `wp-config.php`
	
	cd wordpress
	cp wp-config-sample.php wp-config.php

Copy to web root directory `/opt/bitnami/apps`. At this point, remember to delete formerly created `wordpress2` directory.
	
	cd /opt/bitnami/apps
	rm -R wordpress2
	
	sudo rsync -avP ~/wordpress/ /opt/bitnami/apps/wordpress2

Go to newly copied `/opt/bitnami/apps/wordpress2` and edit `wp-config.php`
	
	//  **MySQL settings - You can get this info from your web host**  //
	/ **The name of the database for WordPress */
	define('DB_NAME', 'Wordpress2');
	
	/** MySQL database username */
	define('DB_USER', 'seconduser');
	
	/\*\* MySQL database password* /
	define('DB_PASSWORD', 'password_for_seconduser');	
	
At this point, you can access to `http://domain2.com`, input the information above when asked to finally install wordpress.

Done!