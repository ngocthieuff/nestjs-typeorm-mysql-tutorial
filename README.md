### 🤗 Some commands for my absent-minded brain:

```
mac@ngoc ~ % /usr/local/mysql/bin/mysql -u root -p 

mysql> create user 'ngocdb' identified by 'password';
mysql> grant all on nestjs_mysql_tutorial.* to 'ngocdb';
```

```
mac@ngoc ~ % /usr/local/mysql/bin/mysql -u ngocdb -p

mysql> create database nestjs_mysql_tutorial;
```