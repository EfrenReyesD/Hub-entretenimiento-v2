SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[Get10Movies]
AS 
BEGIN
    SELECT TOP 10 * FROM Movies ORDER BY Movie_Id ASC;
END;
GO