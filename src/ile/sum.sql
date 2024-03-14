create or replace procedure X.sumpgm (IN numa INT, IN numb INT, OUT result INT) 
LANGUAGE RPGLE  
EXTERNAL NAME X.SUM GENERAL;

call X.SUMPGM(1, 2, default);