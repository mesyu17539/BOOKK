show databases;
create table ADMIN(
ADM_ID varchar(20) not null primary key,
ADM_PASS varchar(20)
);
create table MEMBER(
MEM_ID varchar(20) not null primary key,
MEMSTATUS boolean default true,
PASS varchar(20),
NAME varchar(20),
EMAIL varchar(20),
PHONE varchar(20),
SSN varchar(20),
ADDRESS int
);
INSERT INTO MEMBER(MEM_ID,PASS,NAME,EMAIL,PHONE,SSN,ADDRESS) VALUES('users','user','유저','user@gmail.com','010-0000-0000','111111-1','1');
select * from member;
UPDATE member SET name = '김두용이' where MEM_ID like 'KIM'; 
drop table MEMBER;