SELECT AVG *
FROM benign;


CREATE VIEW BENIGNAVE1 AS
SELECT ROUND(AVG(texture_mean), 2 ) atm,
ROUND(AVG(radius_mean), 2 ) arm,
ROUND(AVG(perimeter_mean), 2 ) apm,
ROUND(AVG(area_mean), 2 ) aam,
ROUND(AVG(smoothness_mean), 2 ) assm,
ROUND(AVG(compactness_mean), 2 ) acm,
ROUND(AVG(concavity_mean), 2 ) acmm,
ROUND(AVG(concave_mean), 2 ) accm,
ROUND(AVG(symmetry_mean), 2 ) asm,
ROUND(AVG(fractal_dimension_mean), 2 ) afmd
FROM benign;


CREATE VIEW maligAVE1 AS
SELECT ROUND(AVG(texture_mean), 2 ) atm,
ROUND(AVG(radius_mean), 2 ) arm,
ROUND(AVG(perimeter_mean), 2 ) apm,
ROUND(AVG(area_mean), 2 ) aam,
ROUND(AVG(smoothness_mean), 2 ) assm,
ROUND(AVG(compactness_mean), 2 ) acm,
ROUND(AVG(concavity_mean), 2 ) acmm,
ROUND(AVG(concave_mean), 2 ) accm,
ROUND(AVG(symmetry_mean), 2 ) asm,
ROUND(AVG(fractal_dimension_mean), 2 ) afmd
FROM malignant;


SELECT * FROM maligAVE1;