## 🤗 Some commands for my absent-minded brain:

### Create user:

```
mac@ngoc ~ % /usr/local/mysql/bin/mysql -u root -p 

mysql> create user 'ngocdb' identified by 'password';
mysql> grant all on nestjs_mysql_tutorial.* to 'ngocdb';
```

```
mac@ngoc ~ % /usr/local/mysql/bin/mysql -u ngocdb -p

mysql> create database nestjs_mysql_tutorial;
```

### Use database:

```
mysql> use nestjs_mysql_tutorial;

mysql> show tables;
```
