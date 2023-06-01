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

mysql> describe users;
+--------------+--------------+------+-----+---------+----------------+
| Field        | Type         | Null | Key | Default | Extra          |
+--------------+--------------+------+-----+---------+----------------+
| id           | int          | NO   | PRI | NULL    | auto_increment |
| username     | varchar(255) | NO   | UNI | NULL    |                |
| password     | varchar(255) | NO   |     | NULL    |                |
| createdAt    | datetime     | NO   |     | NULL    |                |
| authStrategy | varchar(255) | YES  |     | NULL    |                |
+--------------+--------------+------+-----+---------+----------------+
```

### Generate:

```
npx @nestjs/cli g module user

CREATE src/user/user.module.ts (81 bytes)
UPDATE src/app.module.ts (658 bytes)

npx @nestjs/cli g controller /user/controllers/users

CREATE src/user/controllers/users/users.controller.spec.ts (485 bytes)
CREATE src/user/controllers/users/users.controller.ts (99 bytes)
UPDATE src/user/user.module.ts (187 bytes)

npx @nestjs/cli g service /user/services/users

CREATE src/user/services/users/users.service.spec.ts (453 bytes)
CREATE src/user/services/users/users.service.ts (89 bytes)
UPDATE src/user/user.module.ts (279 bytes)
```