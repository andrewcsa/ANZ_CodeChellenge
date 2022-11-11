USE [ANZ]
GO

/****** Object:  Table [dbo].[customers]    Script Date: 11/11/2022 12:40:01 pm ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[customers](
	[firstName] [nvarchar](50) NULL,
	[lastName] [nvarchar](50) NOT NULL,
	[employeeId] [nvarchar](50) NOT NULL,
	[address] [nvarchar](50) NULL,
 CONSTRAINT [PK_customers] PRIMARY KEY CLUSTERED 
(
	[employeeId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO


