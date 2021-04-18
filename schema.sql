SELECT * from bc;


Create View malignant
AS
SELECT * from bc
WHERE diagnosis = 'M';

Create View benign
AS
SELECT * from bc
WHERE diagnosis = 'B';


SELECT COUNT(diagnosis) as countbenign FROM benign;
SELECT COUNT(diagnosis) as countmal FROM malignant;

SELECT AVG(area_mean) as malAvg
FROM malignant;

SELECT AVG(perimeter_mean) as benlperimeterAVG
from benign;

Create View malave
AS
SELECT AVG(radius_mean), AVG(texture_mean), AVG(perimeter_mean), AVG(area_mean), AVG(smoothness_mean), AVG(compactness_mean, AVG(concavity_mean), AVG(symmetry_mean),
WHERE diagnosis = 'M';
