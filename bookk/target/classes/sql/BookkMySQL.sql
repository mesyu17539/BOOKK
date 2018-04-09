create table MEMBER(
MEM_ID varchar(20) primary key,
MEMSTATUS int,
PASS varchar(20),
NAME varchar(20),
EMAIL varchar(20),
PHONE varchar(20),
SSN varchar(20),
ADDRESS int
);
drop table MEMBER;
show databases;
select * from MEMBER;
select count(*) from MEMBER;
INSERT INTO MEMBER(MEM_ID,MEMSTATUS,PASS,NAME,EMAIL,PHONE,SSN,ADDRESS) VALUES('3',2,3,4,5,6,7,8);