**FREE

Dcl-Pi RESULTTEST;
End-Pi;

Dcl-S rowCount Int(10);
Dcl-Ds resultSet Dim(5) Qualified;
  Name  varchar(20);
  Money packed(11:2); //SQL decimal
  Email varchar(32);
End-Ds;

resultSet(1).Name   = 'Liam';
resultSet(1).Money = 20.00;
resultSet(1).Email = 'liam@me.com';

resultSet(2).Name   = 'Beth';
resultSet(2).Money = 9876543.21;
resultSet(2).Email = 'beth@test.com';

resultSet(3).Name   = 'Steph';
resultSet(3).Money = 12345678.90;
resultSet(3).Email = 'steph@test.com';

rowCount = 3;

Exec SQL Set Result Sets Array :resultSet For :rowCount Rows;

Return;