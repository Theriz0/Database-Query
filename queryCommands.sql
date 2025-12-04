SELECT StdCity, StdState
FROM Student
WHERE StdMajor = 'IS'
GROUP BY StdCity, StdState;

SELECT *
FROM Offering
WHERE CourseNo LIKE 'FIN%'
  AND OffTerm = 'WINTER'
  AND OffYear = 2020;

SELECT StdNo, StdName, StdMajor
FROM Student
WHERE (StdClass = 'JR' AND StdCity = 'SEATTLE')
   OR (StdClass = 'SO' AND StdCity = 'BOTHELL');

SELECT StdNo, StdName, StdGPA
FROM Student
WHERE StdClass NOT IN ('FR', 'SO')
  AND StdGPA > 3.5;

SELECT COUNT(*) AS NoOfFaculty
FROM Faculty
WHERE FacCity = 'SEATTLE'
  AND FacState = 'WA';

SELECT StdMajor, MAX(StdGPA) AS MaxGPA
FROM Student
WHERE StdClass IN ('JR', 'SR')
GROUP BY StdMajor
ORDER BY StdMajor;

SELECT FacDept,
       MAX(FacSalary) AS MaxSalary
FROM Faculty
WHERE FacRank IN ('PROF', 'ASSC')
GROUP BY FacDept
HAVING AVG(FacSalary) >= 80000;

SELECT OfferNo, CourseNo, FacNo
FROM Offering
WHERE (OffTerm = 'FALL' AND OffYear = 2019)
   OR (OffTerm = 'WINTER' AND OffYear = 2020);

SELECT FacName, FacDept, FacHireDate
FROM Faculty
WHERE EXTRACT(YEAR FROM FacHireDate) IN (2005, 2006, 2007);

SELECT StdName, StdCity, StdState, StdMajor, StdGPA
FROM Student
WHERE StdZip LIKE '9812%'
ORDER BY StdMajor ASC,
         StdGPA DESC;
