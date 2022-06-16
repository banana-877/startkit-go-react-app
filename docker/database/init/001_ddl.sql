USE demo_db;

create table `user`(
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `name`    varchar(255) not null,
    `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    primary key(id)
);

CREATE TABLE `ping` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  primary key(`id`)
);

CREATE TABLE `tweet` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `user_id` BIGINT NOT NULL,
  `post`    VARCHAR(120) NOT NULL,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`user_id`)
    REFERENCES user(`id`) 
);

create table `book`(
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `title`    varchar(255) not null,
    `content`  varchar(255) not null,
    primary key(id)
);