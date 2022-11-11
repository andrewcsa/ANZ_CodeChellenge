USE [ANZ]
GO

/****** Object:  StoredProcedure [dbo].[insertCustomer]    Script Date: 11/11/2022 12:41:17 pm ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[insertCustomer] 
       @firstName                      NVARCHAR(50)  = NULL   , 
       @lastName						NVARCHAR(50) = NULL   , 
       @employeeId                     NVARCHAR(50)  = NULL   , 
       @address			               NVARCHAR(50)  = NULL  
AS 
BEGIN 
     SET NOCOUNT ON 

     INSERT INTO dbo.customers
          (                    
            firstName                 ,
            lastName                  ,
            employeeId                ,
            address                 
          ) 
     VALUES 
          ( 
            @firstName,
            @lastName,
            @employeeId,
            @address
          ) 

END 

GO
