let data =
  ",7/14,7/13,7/12,7/8,7/7,7/6,7/5,7/1,6/30,6/29,6/28,6/25,6/23,6/22,6/20,6/18,6/17,6/16,6/15,6/14,6/11,6/10,6/9,6/8,6/7,6/4,6/3,6/2,6/1,5/31,5/30,5/28,5/27,5/26,5/25,5/21,5/20,5/19,5/18,5/17,5/15,5/14,5/13,5/12,5/11,5/10,5/8,5/7,5/6,5/5,5/4,5/3,5/2,5/1,4/30,4/29,4/28,4/27,4/26,4/25,4/24,4/23,4/22,4/21,4/20,4/19,4/18,4/17,4/16,4/15\n" +
  ",Agoura Hills,81,78,76,69,69,68,65,62,61,58,54,50,49,48,47,43,43,39,39,38,37,36,36,36,35,35,35,35,35,35,35,35,35,35,35,33,33,33,33,33,33,33,33,32,32,31,31,31,31,31,31,31,31,31,31,31,31,30,30,30,29,29,29,29,26,24,24,22,22,21\n" +
  ",Alhambra,650,640,616,569,559,549,523,474,457,450,440,392,369,363,351,319,311,309,292,289,276,266,256,252,249,231,228,226,226,220,215,195,191,182,182,170,163,158,153,149,148,143,139,135,130,120,113,110,106,102,99,87,87,86,85,81,81,82,75,68,68,65,62,51,47,44,42,40,38,37\n" +
  ",Arcadia,237,234,234,211,207,203,194,177,173,168,164,147,141,138,134,125,124,114,110,107,105,104,102,102,100,95,94,94,91,88,87,82,80,80,80,70,69,68,66,65,65,65,63,62,59,54,52,51,50,48,46,44,43,43,39,38,38,37,36,36,34,34,34,32,30,28,28,27,26,25\n" +
  ",Artesia,172,167,163,135,132,130,126,110,106,104,101,93,86,84,84,74,72,72,64,62,55,50,49,48,45,41,42,42,41,38,36,33,31,30,30,25,22,21,21,21,20,19,19,17,15,15,15,15,15,15,15,14,14,14,14,14,14,13,13,13,12,12,12,11,10,10,10,10,7,5\n" +
  ",Avalon,5,5,5,6,6,6,6,6,6,6,4,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\n" +
  ",Azusa,733,713,685,587,572,558,536,469,461,449,435,385,362,357,343,301,292,288,283,279,256,247,233,231,226,212,209,198,189,183,183,167,162,159,153,131,128,128,121,119,117,114,114,110,106,103,101,96,96,89,83,79,77,72,71,69,68,61,55,49,45,40,37,31,23,22,22,22,22,22\n" +
  ",Baldwin Park,1429,1392,1339,1189,1168,1137,1095,952,929,903,865,760,726,710,656,576,561,552,535,513,464,445,427,419,412,393,382,376,367,357,347,325,303,294,286,235,224,214,207,195,191,181,178,168,158,152,144,128,126,124,116,107,100,94,89,85,83,77,73,72,67,62,57,52,44,41,40,37,35,34\n" +
  ",Bell ,857,840,811,756,747,735,716,678,672,663,652,609,589,586,575,522,515,509,497,486,468,457,437,426,414,400,381,359,350,348,342,319,300,294,285,241,232,222,198,187,183,178,177,177,163,154,151,146,144,142,137,137,137,135,132,126,121,119,117,116,117,112,109,104,93,80,78,75,71,64\n" +
  ",Bell Gardens,1019,992,966,870,859,821,774,722,715,703,678,618,592,590,577,507,500,493,469,453,429,416,398,393,374,358,353,339,335,324,320,285,266,260,257,204,194,185,171,162,158,156,152,149,140,136,133,129,125,121,117,110,109,109,106,103,97,90,84,82,80,75,70,,58,54,52,46,41,39\n" +
  ",Bellflower,1279,1259,1229,1124,1106,1077,1031,913,881,869,849,765,722,704,674,609,601,592,575,567,527,517,503,492,478,446,439,435,427,421,413,382,368,361,357,303,300,280,260,255,236,230,223,216,188,182,179,171,162,158,155,142,139,139,137,129,122,114,110,106,102,99,87,78,74,66,62,61,57,55\n" +
  ",Beverly Hills,425,419,402,331,329,311,306,246,243,237,235,207,203,203,201,191,190,188,176,174,158,155,152,150,149,144,141,140,139,139,138,138,137,135,134,128,126,125,125,125,124,125,123,120,120,119,118,116,115,116,114,113,112,110,108,106,106,105,105,104,103,102,100,99,94,80,80,78,78,78\n" +
  ",Bradbury,7,7,7,7,7,7,7,6,6,6,6,6,6,5,5,4,4,4,4,4,4,4,4,4,4,4,4,4,4,3,3,3,3,3,3,3,3,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,N/A,N/A,N/A,N/A,N/A,N/A,N/A,N/A,N/A,N/A\n" +
  ",Burbank,763,748,725,661,656,645,621,590,586,580,568,536,524,519,516,474,465,463,447,445,436,431,426,424,419,408,408,405,405,404,402,395,394,393,390,368,363,360,356,350,342,338,329,318,314,304,299,291,288,283,270,260,256,252,241,237,234,226,222,219,203,188,170,151,141,134,134,121,117,112\n" +
  ",Calabasas,159,156,155,142,141,140,137,132,130,126,124,115,109,108,104,101,99,98,98,98,98,96,95,94,92,87,86,85,84,81,69,61,59,59,58,52,52,52,51,51,50,50,49,48,48,47,47,47,47,46,46,44,43,38,38,37,35,35,34,34,33,31,31,29,29,25,26,26,26,26\n" +
  ",Carson,925,908,874,797,787,768,750,687,673,665,655,619,600,591,583,565,558,551,545,541,518,511,500,493,480,458,453,443,435,423,412,407,400,395,387,363,361,359,351,345,341,335,327,323,311,302,294,285,283,277,266,256,252,245,245,238,232,228,220,211,204,199,191,181,163,151,149,143,135,133\n" +
  ",Cerritos,330,321,308,278,273,260,252,237,230,224,219,199,196,193,186,166,164,162,160,157,151,149,144,141,138,135,132,130,129,129,125,120,118,116,114,100,98,97,91,88,83,83,82,78,74,69,67,64,63,60,60,57,56,55,52,51,50,49,48,48,47,45,44,42,40,38,37,35,34,34\n" +
  ",Claremont,180,174,166,146,142,136,132,113,108,106,103,95,88,87,85,77,72,71,71,72,68,67,66,60,59,58,56,54,49,45,45,40,38,38,36,33,33,33,32,32,30,30,30,30,30,29,29,28,27,27,27,24,24,24,24,24,24,22,22,22,22,21,24,19,16,15,15,14,13,13\n" +
  ",Commerce,299,290,280,252,249,242,230,208,203,198,189,178,170,168,158,142,142,139,132,124,119,112,99,95,91,85,84,81,79,80,76,71,58,58,57,42,41,37,29,23,22,22,22,22,21,19,17,15,14,14,12,13,13,13,13,11,11,11,10,10,10,10,10,9,7,6,5,5,5,0\n" +
  ",Compton,2073,2049,1976,1758,1740,1711,1650,1516,1490,1455,1424,1281,1219,1205,1167,1045,1026,1009,980,954,894,863,838,816,796,725,701,676,652,634,610,554,528,512,502,428,419,405,387,365,352,334,321,313,295,287,275,266,260,254,242,224,218,216,211,205,197,190,183,175,167,156,140,126,115,91,85,83,79,72\n" +
  ",Covina,700,686,666,566,560,542,526,456,440,433,409,357,333,326,311,277,273,271,263,256,237,231,224,218,218,203,196,189,183,181,178,162,156,154,154,137,132,132,131,128,122,118,117,115,112,108,107,105,104,101,101,101,101,95,95,94,90,86,86,84,80,77,71,66,63,58,57,57,55,54\n" +
  ",Cudahy,613,605,588,545,534,522,512,473,463,460,440,420,410,408,403,368,368,362,357,350,334,318,311,303,299,286,275,267,265,261,255,219,202,201,200,153,147,139,127,118,115,114,112,109,99,98,98,96,93,91,83,80,80,78,74,70,67,63,60,60,54,54,49,40,30,27,27,26,25,24\n" +
  ",Culver City,266,261,248,237,234,232,230,218,214,210,205,193,191,189,188,181,179,176,176,175,168,166,164,163,164,162,161,161,161,161,159,147,144,138,137,135,134,130,129,128,127,123,121,121,118,118,94,93,90,88,85,68,67,67,66,64,60,58,58,58,53,49,45,44,40,38,37,36,36,34\n" +
  ",Diamond Bar,289,284,272,232,224,217,208,181,179,166,154,127,115,115,115,97,94,94,92,89,87,84,83,81,80,76,75,72,70,68,64,63,60,58,57,55,54,52,50,49,47,47,46,45,44,44,42,41,39,38,37,36,35,34,34,34,34,34,34,33,32,31,28,25,24,23,22,22,21,22\n" +
  ",Downey,2378,2349,2260,2038,2014,1952,1842,1678,1637,1608,1529,1385,1332,1308,1273,1147,1132,1103,1068,1050,993,949,923,900,877,829,808,788,766,745,736,679,605,590,578,498,483,472,449,437,398,362,347,331,306,294,279,271,264,253,244,236,235,233,224,215,211,195,193,187,179,170,155,147,137,126,124,118,114,111\n" +
  ",Duarte,270,268,259,235,234,229,220,204,199,196,192,177,170,169,163,154,154,154,154,151,144,140,139,138,138,135,132,130,129,129,126,118,116,113,111,103,100,98,96,95,95,95,95,94,91,85,85,84,81,81,79,77,76,72,67,65,62,52,48,47,46,45,45,37,32,30,26,20,17,15\n" +
  ",El Monte,2296,2244,2148,1939,1909,1860,1794,1605,1555,1520,1464,1347,1282,1261,1283,1043,1024,1011,969,938,846,812,776,756,734,663,650,599,580,568,556,516,492,465,456,383,371,359,341,326,319,299,289,273,248,240,227,216,209,202,197,177,175,166,160,151,148,133,129,122,114,107,96,72,61,52,50,47,38,34\n" +
  ",El Segundo,82,79,76,70,70,69,66,57,57,54,51,48,44,44,41,41,41,41,39,38,38,38,37,37,37,37,37,36,36,35,35,34,34,32,31,32,32,32,32,32,31,31,30,30,30,30,30,30,30,30,29,28,28,27,27,27,27,27,27,27,25,25,24,21,20,14,14,12,12,12\n" +
  ",Gardena,666,660,645,598,591,583,567,524,520,513,502,468,445,433,419,384,375,373,363,339,339,337,330,320,316,304,298,291,289,279,275,256,257,253,249,226,220,212,209,207,206,204,202,197,191,185,185,177,177,177,171,165,165,160,158,158,157,142,140,135,130,128,126,121,107,102,96,93,86,82\n" +
  ",Glendale,1821,1797,1748,1638,1617,1593,1555,1473,1455,1432,1408,1342,1312,1299,1283,1219,1209,1197,1170,1133,1101,1093,1076,1071,1065,1040,1031,995,990,985,980,965,960,952,943,886,876,869,856,853,833,817,802,785,768,738,717,697,687,669,651,634,612,610,588,564,530,502,488,481,462,419,389,369,339,332,326,310,288,278\n" +
  ",Glendora,671,655,577,490,480,466,444,351,341,337,311,275,262,259,247,222,216,203,196,195,179,179,176,172,170,162,161,158,150,149,148,143,139,138,133,121,109,103,95,94,89,86,82,79,76,71,65,64,63,57,51,48,46,46,46,45,44,42,39,39,38,38,37,35,33,31,29,29,27,26\n" +
  ",Hawaiian Gardens,271,263,253,223,218,213,208,186,183,180,174,162,154,152,142,130,129,128,120,115,109,103,100,99,96,84,79,78,75,74,69,57,50,48,48,33,31,27,25,23,22,20,16,16,16,12,11,11,11,11,11,10,10,10,10,9,9,9,9,9,9,10,9,8,6,6,6,0,0,0\n" +
  ",Hawthorne,1002,979,961,890,876,853,830,749,743,735,720,662,639,633,621,578,570,561,552,538,510,503,476,459,456,436,429,424,417,407,403,389,383,376,369,341,341,329,317,310,299,287,283,273,261,256,253,240,235,232,218,205,204,201,194,185,178,161,160,155,150,144,140,134,106,94,92,89,90,87\n" +
  ",Hermosa Beach,124,122,120,102,99,97,91,79,77,77,74,63,62,61,56,49,48,47,45,42,41,38,36,36,35,36,35,32,30,29,29,29,29,29,29,28,28,28,27,26,26,25,25,25,25,25,25,25,25,25,24,24,24,23,23,23,23,23,23,23,23,22,22,22,21,19,19,18,17,17\n" +
  ",Hidden Hills,5,5,5,5,5,5,5,4,4,4,4,4,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\n" +
  ",Huntington Park,1598,1570,1528,1415,1403,1378,1331,1234,1196,1175,1141,1054,1006,994,963,858,843,831,799,783,732,704,674,653,633,598,575,555,537,534,532,483,448,445,433,340,330,320,284,267,261,253,238,231,217,206,200,196,182,180,175,165,164,158,154,142,136,132,130,122,114,106,95,87,78,58,56,52,46,44\n" +
  ",Industry,21,20,16,15,15,14,14,13,13,13,14,13,13,13,13,12,12,12,12,12,12,12,11,11,12,12,12,11,12,11,11,10,10,10,10,12,11,11,10,10,10,10,11,11,11,10,7,7,4,3,1,1,1,1,1,1,1,1,1,1,N/A,N/A,N/A,N/A,N/A,N/A,N/A,N/A,N/A,N/A\n" +
  ",Inglewood,1432,1409,1358,1230,1207,1184,1149,1075,1060,1040,1010,939,906,887,865,801,790,785,770,763,738,727,721,707,703,667,657,652,643,614,601,583,568,560,553,525,517,503,495,487,472,459,453,449,432,420,415,413,408,390,378,356,348,341,335,315,311,290,285,270,260,245,228,215,177,157,152,145,137,132\n" +
  ",Irwindale,34,33,32,26,24,22,22,16,14,13,12,11,11,11,9,5,5,5,5,5,5,5,5,5,5,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,N/A,N/A,N/A,N/A,N/A,N/A,N/A,N/A,N/A,N/A\n" +
  ",La Canada Flintridge,95,93,88,84,84,84,82,79,79,78,78,72,70,70,69,66,65,60,57,57,56,56,55,55,55,52,52,51,51,51,51,50,50,50,49,48,48,48,47,47,47,47,46,46,45,43,43,41,41,41,39,37,36,36,36,37,37,37,37,38,38,37,35,33,30,26,26,26,24,23\n" +
  ",La Habra Heights,19,19,19,17,17,17,16,16,15,15,15,13,13,13,13,12,12,12,12,12,12,12,11,11,11,10,10,9,9,9,9,8,8,8,8,8,8,8,8,8,8,8,7,7,7,4,4,4,4,3,3,3,3,2,2,2,2,2,2,2,N/A,N/A,N/A,N/A,N/A,N/A,N/A,N/A,N/A,N/A\n" +
  ",La Mirada,487,482,462,424,417,406,387,340,329,326,322,290,283,279,274,252,250,245,234,232,224,220,218,216,213,205,203,198,190,184,180,167,161,160,159,144,140,138,132,129,118,108,85,83,81,76,75,75,73,73,71,68,66,64,62,60,57,55,52,49,44,42,42,40,37,32,31,26,25,25\n" +
  ",La Puente,740,719,689,612,599,575,547,477,458,446,430,368,350,342,314,264,256,254,240,235,212,193,180,174,162,149,148,145,139,137,135,124,112,108,101,86,83,77,71,66,65,64,64,58,58,54,53,50,46,47,47,43,43,43,42,40,39,36,34,34,33,33,31,30,22,22,21,21,21,22\n" +
  ",La Verne,197,192,187,168,161,159,152,129,127,125,118,102,88,86,80,57,54,52,47,46,41,37,37,35,35,34,34,34,32,30,30,30,30,30,29,26,25,25,24,24,24,24,24,23,22,22,20,18,18,18,18,16,16,16,16,16,16,16,16,16,16,14,14,13,12,11,11,11,9,9\n" +
  ",Lakewood,688,672,645,568,558,537,522,475,457,440,426,381,366,352,335,307,302,298,286,280,263,258,249,247,237,214,210,208,202,196,191,181,173,169,167,147,146,144,138,137,130,126,122,118,109,104,103,99,95,94,92,86,85,84,83,79,78,75,75,74,72,71,69,61,56,48,47,46,46,43\n" +
  ",Lancaster,1550,1526,1479,1364,1335,1305,1282,1159,1128,1109,1081,983,947,934,887,832,821,808,783,771,734,719,703,692,680,662,655,641,627,613,602,574,557,553,546,506,503,496,489,480,463,453,446,438,425,420,405,394,387,373,353,343,338,326,321,307,292,280,275,255,231,212,197,184,132,120,114,102,96,91\n" +
  ",Lawndale,308,299,294,264,262,258,240,213,202,200,196,186,184,181,179,168,166,164,162,159,154,151,148,143,142,135,134,133,131,126,123,118,116,112,110,99,94,93,92,90,84,82,82,81,81,81,78,75,75,74,70,61,60,59,59,55,54,53,53,50,49,47,45,42,36,36,36,33,32,31\n" +
  ",Lomita,117,116,112,107,105,102,97,88,84,81,80,75,71,69,68,61,61,58,58,56,55,53,53,53,54,53,53,52,52,52,52,51,50,50,50,48,48,46,46,46,45,45,43,43,42,41,41,40,40,40,38,36,35,34,34,34,34,32,32,32,32,31,30,29,27,27,27,24,24,23\n" +
  ",Lynwood,1833,1812,1757,1601,1584,1549,1499,1374,1347,1330,1289,1208,1161,1150,1119,1009,995,984,958,935,889,852,828,794,777,719,699,672,658,645,630,582,552,538,515,427,392,375,351,339,322,311,303,295,284,276,260,255,240,232,225,207,204,199,192,178,169,163,161,157,150,141,132,119,103,101,99,95,89,84\n" +
  ",Malibu,69,67,65,58,58,57,56,53,52,52,51,49,48,48,47,43,41,41,41,40,40,40,39,39,39,39,38,38,38,38,37,35,35,35,35,35,35,35,35,35,34,33,33,32,32,32,32,31,31,31,31,31,31,30,30,30,30,28,28,28,28,28,26,26,23,23,21,20,17,18\n" +
  ",Manhattan Beach,213,208,207,180,173,169,161,140,137,135,131,112,105,103,99,93,93,91,89,88,85,84,83,83,83,82,80,80,80,80,79,77,77,77,77,76,74,74,74,73,73,74,72,71,71,69,69,68,68,67,68,66,66,66,66,66,66,66,65,64,64,64,63,61,59,58,58,57,57,55\n" +
  ",Maywood,771,763,746,707,702,694,679,641,629,625,612,575,553,552,539,487,483,480,453,443,415,399,378,369,357,343,331,317,312,305,299,264,252,250,248,171,158,152,139,132,127,123,115,113,100,90,87,83,81,69,71,70,70,70,69,65,63,60,55,53,51,48,47,45,42,36,35,35,32,28\n" +
  ",Monrovia,412,402,393,358,352,346,336,304,301,294,287,264,249,242,226,207,206,200,194,190,185,183,179,174,173,170,169,166,164,162,162,157,154,154,152,137,131,128,126,123,120,114,108,107,95,91,77,77,74,60,57,55,53,50,49,46,44,39,37,36,31,28,26,23,20,20,18,15,14,14\n" +
  ",Montebello,1245,1230,1202,1096,1083,1053,1028,963,939,921,883,793,769,757,723,648,636,633,610,585,536,514,507,492,482,454,443,428,426,424,417,381,362,357,355,307,304,293,271,253,245,241,235,231,219,215,209,204,175,166,164,157,149,144,139,130,126,119,114,110,105,98,96,88,80,73,71,69,66,64\n" +
  ",Monterey Park,460,449,438,403,396,384,360,338,335,333,324,294,283,280,270,243,238,236,230,225,212,208,202,200,198,179,177,173,169,168,164,152,147,145,141,126,124,122,120,119,117,117,113,110,110,108,105,98,95,93,89,81,80,78,77,74,72,65,64,64,61,57,50,47,43,39,39,38,35,34\n" +
  ",Norwalk,1747,1693,1634,1469,1433,1395,1343,1216,1192,1155,1114,983,937,919,876,797,787,781,754,744,691,673,652,638,620,578,558,516,505,480,461,426,395,384,379,331,327,310,301,294,286,279,274,270,262,250,244,236,230,228,221,208,203,201,193,185,183,173,167,165,155,146,135,124,114,105,100,93,90,88\n" +
  ",Palmdale,1790,1761,1707,1555,1528,1508,1471,1322,1302,1283,1248,1163,1126,1115,1039,1002,985,975,959,943,879,867,848,842,829,801,793,783,776,768,758,720,689,678,668,606,599,588,585,576,556,543,537,527,507,504,501,491,486,477,470,442,438,422,417,399,395,379,378,352,339,325,299,248,192,149,147,131,123,118\n" +
  ",Palos Verdes Estates,62,62,61,58,58,57,56,53,52,52,50,49,48,48,48,46,47,46,46,46,44,44,43,43,43,43,43,42,42,42,42,42,42,42,42,41,41,42,42,42,42,40,40,40,40,40,40,40,40,40,38,37,37,37,37,37,37,37,37,37,37,37,36,36,36,36,36,36,36,36\n" +
  ",Paramount,1279,1257,1211,1067,1055,1032,988,896,869,847,819,743,706,689,675,607,599,594,565,553,497,486,468,456,451,416,397,380,369,360,357,324,304,291,286,243,233,228,210,205,197,195,192,188,182,178,173,171,170,169,162,150,148,143,136,123,122,118,117,113,112,104,100,97,80,66,65,54,49,44\n" +
  ",Pico Rivera,1379,1353,1298,1185,1174,1133,1084,992,975,963,939,857,829,819,798,747,738,729,713,703,687,665,655,632,618,595,579,556,547,542,536,502,473,456,445,388,378,369,353,336,325,298,294,287,270,263,260,249,241,233,230,195,188,186,183,174,155,147,143,140,126,124,113,107,94,81,79,77,73,67\n" +
  ",Pomona,2345,2292,2205,1964,1927,1880,1809,1595,1548,1515,1455,1273,1186,1158,1103,964,934,904,874,848,786,757,733,705,680,618,600,567,538,518,506,446,429,413,400,338,328,319,310,304,297,286,283,279,270,265,253,239,232,221,212,198,193,182,176,171,169,151,149,132,126,122,110,97,82,72,71,68,63,58\n" +
  ",Rancho Palos Verdes,185,179,177,166,160,156,154,142,140,139,137,126,125,124,123,116,116,112,109,109,106,104,100,99,99,96,96,96,96,96,96,93,92,91,95,83,81,81,81,80,77,76,76,76,75,75,75,75,74,71,67,62,61,60,60,59,58,56,52,51,51,50,50,50,49,47,47,46,46,46\n" +
  ",Redondo Beach,318,308,299,274,266,258,245,219,217,211,207,184,182,179,173,167,166,166,165,167,161,154,151,151,150,147,146,145,143,143,141,139,138,138,138,132,131,128,128,126,123,121,120,120,120,120,118,117,116,115,113,111,110,108,107,106,106,103,102,99,95,95,94,94,91,85,85,84,84,84\n" +
  ",Rolling Hills,4,4,4,3,3,3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,N/A,N/A,N/A,N/A,N/A,N/A,N/A,N/A,N/A,N/A\n" +
  ",Rolling Hills Estates,30,30,30,28,26,26,25,24,24,23,22,22,21,21,19,18,18,18,18,17,17,15,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,12,12,12,11,11\n" +
  ",Rosemead,401,396,383,336,331,327,304,270,262,256,244,217,205,202,193,179,175,175,167,164,156,151,148,147,143,138,138,129,125,121,114,100,91,89,87,73,71,70,68,68,66,65,62,59,56,55,52,50,47,44,43,40,40,38,37,35,32,30,29,28,24,23,21,19,17,16,16,16,16,16\n" +
  ",San Dimas,264,262,242,209,206,199,194,166,155,149,142,128,123,122,118,99,97,95,92,91,83,80,79,79,77,71,70,69,63,62,60,55,52,49,48,41,40,39,39,39,39,38,38,38,37,35,33,31,31,30,30,30,29,29,29,28,28,27,27,25,25,25,24,23,23,20,20,18,18,18\n" +
  ",San Fernando,413,400,381,353,351,342,331,310,303,302,300,279,266,265,263,255,251,251,247,246,238,235,231,230,225,206,203,196,195,194,193,191,188,187,183,176,173,168,165,161,157,150,144,140,137,132,129,125,123,121,119,102,100,97,96,87,83,77,77,68,64,61,58,48,39,34,33,29,27,27\n" +
  ",San Gabriel,323,321,316,291,288,278,268,254,245,242,236,219,206,205,201,191,190,190,186,183,180,179,170,166,166,153,149,145,141,140,139,138,136,136,134,91,88,88,86,82,81,81,80,77,57,54,48,44,42,40,37,32,30,30,30,30,30,29,29,28,26,26,25,23,19,16,16,15,15,14\n" +
  ",San Marino,36,35,34,32,32,32,32,31,30,29,29,26,25,25,26,24,24,24,24,24,24,24,24,24,24,23,22,23,23,23,23,22,22,22,22,21,21,20,19,19,19,18,18,18,18,15,14,12,12,12,12,12,12,11,11,11,11,11,11,11,10,10,9,9,8,8,8,8,8,8\n" +
  ",Santa Clarita,1676,1622,1587,1445,1419,1386,1345,1236,1207,1192,1155,1050,1005,996,968,938,930,917,907,894,879,864,850,847,846,822,807,801,785,772,769,734,716,701,690,632,623,609,594,583,576,561,549,529,507,496,479,463,462,450,436,405,402,387,378,362,357,332,326,306,297,283,273,224,221,201,196,188,178,166\n" +
  ",Santa Fe Springs,282,273,263,232,231,222,206,171,168,163,150,127,123,121,116,108,105,103,103,102,97,93,92,89,86,81,78,74,73,73,71,65,56,53,53,49,49,47,42,39,36,36,35,35,35,31,31,31,31,31,29,27,27,27,26,25,18,17,17,17,16,16,15,15,14,13,11,11,9,9\n" +
  ",Santa Monica,535,521,508,469,464,457,445,419,414,407,401,385,370,366,360,349,345,340,340,336,322,317,313,312,306,300,293,288,284,281,278,267,261,259,256,245,244,244,243,241,240,235,224,222,212,209,206,206,203,198,190,185,171,168,164,159,157,156,154,150,147,144,139,135,124,115,111,107,100,98\n" +
  ",Sierra Madre,44,44,44,40,40,39,38,31,30,30,28,28,28,28,28,23,23,22,21,20,15,15,14,14,14,12,12,12,12,12,12,10,10,10,10,9,9,9,8,8,8,8,8,8,7,6,6,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,,,,,,,\n" +
  ",Signal Hill,138,136,133,121,121,120,118,102,101,97,93,82,72,68,60,58,57,55,54,51,45,44,43,40,39,37,37,38,37,34,31,26,25,25,25,19,18,18,18,18,17,15,15,15,13,9,9,9,9,9,8,8,8,8,7,7,7,7,7,7,6,6,6,5,5,5,5,5,5,5\n" +
  ",South El Monte,404,398,385,345,344,334,319,287,283,277,267,254,240,238,223,196,191,187,184,179,163,149,140,129,126,105,104,95,95,91,86,82,79,77,76,65,65,64,58,54,52,51,48,47,45,43,40,38,38,36,23,30,29,29,27,24,22,22,22,14,12,10,7,6,,,,,,\n" +
  ",South Gate ,2476,2432,2329,2098,2075,2034,1954,1798,1756,1723,1668,1510,1444,1419,1380,1197,1170,1153,1105,1084,1026,979,944,884,850,778,734,709,687,674,660,596,539,526,517,440,422,416,386,370,360,349,342,333,321,314,306,304,300,290,283,269,265,261,254,244,233,226,219,213,202,195,188,172,154,136,133,123,116,108\n" +
  ",South Pasadena,192,192,188,177,175,173,173,166,162,158,156,153,148,148,145,140,138,138,137,137,138,140,137,136,136,134,134,130,129,129,127,123,123,122,122,119,119,117,116,111,110,109,109,107,105,100,99,99,100,97,93,93,93,91,82,78,74,68,61,60,56,51,39,34,30,28,26,21,20,17\n" +
  ",Temple City,325,317,316,286,285,280,272,255,247,243,239,231,211,210,209,200,199,197,193,194,189,188,182,180,178,174,173,167,166,164,162,156,155,148,145,140,119,110,109,107,107,104,101,97,88,84,67,65,63,58,57,56,52,50,51,49,48,48,47,46,44,38,31,29,24,24,24,24,20,17\n" +
  ",Torrance,792,770,750,693,680,669,649,599,594,582,564,532,521,514,499,479,471,466,457,453,435,426,422,417,414,409,410,405,398,392,388,368,363,358,357,344,345,345,341,339,337,335,329,327,324,315,315,311,308,306,298,283,279,277,270,255,253,245,242,236,230,226,220,217,204,194,189,181,163,159\n" +
  ",Vernon,14,14,14,13,13,13,13,14,14,14,14,9,8,6,6,5,5,5,5,5,4,4,21,21,21,4,4,4,4,3,3,3,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\n" +
  ",Walnut,150,147,142,130,129,127,124,104,101,97,94,86,79,77,74,70,66,65,63,63,60,56,55,54,55,52,52,51,50,49,47,44,45,44,43,35,35,35,35,33,32,32,30,30,30,27,27,25,25,25,24,23,23,23,23,23,23,23,22,22,21,20,19,19,16,15,15,15,14,13\n" +
  ",West Covina,1577,1537,1483,1303,1282,1243,1181,1027,1000,974,920,802,744,729,694,605,589,579,562,549,513,490,480,469,461,433,422,393,383,371,363,344,320,312,303,262,252,238,221,208,202,199,193,190,181,175,168,164,158,151,147,143,141,139,133,129,123,119,114,104,98,89,81,72,62,59,58,56,50,48\n" +
  ",West Hollywood,354,351,341,307,304,300,292,276,271,264,255,240,232,230,225,213,210,210,203,201,197,198,193,193,189,188,188,188,188,186,185,179,179,177,173,166,165,163,160,158,154,153,151,150,148,147,146,144,142,141,141,139,139,139,137,137,135,134,133,131,130,129,125,120,114,110,109,107,107,105\n" +
  ",Westlake Village,14,14,14,10,10,10,10,10,8,8,8,8,7,7,7,7,7,7,7,7,7,7,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6\n" +
  ",Whittier,1151,1133,1093,959,937,904,862,761,737,720,681,598,567,565,536,497,485,467,463,462,425,415,402,395,385,373,355,340,336,330,327,312,300,295,292,264,259,250,228,214,210,205,201,197,188,175,166,163,162,149,141,130,124,123,118,116,112,108,105,99,89,85,84,80,71,66,66,64,59,56\n" +
  ",Los Angeles,58925,58106,56599,52658,52088,51287,49591,46568,45746,45151,44189,41328,39841,39416,38580,36107,35494,35053,34052,33518,32207,31656,30887,30500,30063,28297,27673,27166,26738,25722,25722,24261,23644,23086,22567,20391,19941,19505,19020,18540,17969,17432,17037,16610,16065,15568,15015,14563,14253,13868,13468,12525,12300,11908,11553,10863,10380,9697,9389,8896,8450,8022,7551,6904,6224,5508,5387,5093,4852,4707"

const addData = newData => {
  newData = newData.split('\n');
  if (newData.length === data.length) {
    for (let i = 0; i < data.length; ++i) {
      data[i].splice(i === 0 ? 0 : 1, 0, newData[i]);
    }
    console.log('Successfully added data for ' + newData[0]);
  }
  else {
    console.log('Failed to add data for ' + newData[0]);
    console.log('Incorrect Dimensions: expected ' + data.length + ', got ' + newData.length);
  }
}

data = data.split('\n');

for (let i = 0; i < data.length; ++i) {
  data[i] = data[i].split(',');
  data[i].shift(); // Remove blank first element from each array
}

addData("7/15\n"+
"86\n"+
"674\n"+
"244\n"+
"175\n"+
"5\n"+
"762\n"+
"1486\n"+
"880\n"+
"1046\n"+
"1322\n"+
"453\n"+
"7\n"+
"788\n"+
"162\n"+
"959\n"+
"337\n"+
"189\n"+
"313\n"+
"2153\n"+
"723\n"+
"640\n"+
"272\n"+
"303\n"+
"2474\n"+
"274\n"+
"2368\n"+
"84\n"+
"688\n"+
"1880\n"+
"696\n"+
"282\n"+
"1047\n"+
"127\n"+
"5\n"+
"1639\n"+
"21\n"+
"1488\n"+
"36\n"+
"100\n"+
"19\n"+
"501\n"+
"773\n"+
"211\n"+
"708\n"+
"1559\n"+
"327\n"+
"121\n"+
"1905\n"+
"70\n"+
"217\n"+
"796\n"+
"423\n"+
"1288\n"+
"474\n"+
"1802\n"+
"1848\n"+
"62\n"+
"1334\n"+
"1414\n"+
"2437\n"+
"192\n"+
"326\n"+
"4\n"+
"30\n"+
"422\n"+
"273\n"+
"430\n"+
"330\n"+
"35\n"+
"1720\n"+
"295\n"+
"543\n"+
"45\n"+
"142\n"+
"418\n"+
"2590\n"+
"198\n"+
"330\n"+
"810\n"+
"15\n"+
"155\n"+
"1637\n"+
"364\n"+
"14\n"+
"1192\n"+
"60720");

addData("7/19\n" +
"89\n"+
"736\n"+
"269\n"+
"187\n"+
"5\n"+
"828\n"+
"1648\n"+
"956\n"+
"1143\n"+
"1439\n"+
"496\n"+
"7\n"+
"823\n"+
"174\n"+
"1033\n"+
"357\n"+
"206\n"+
"341\n"+
"2335\n"+
"787\n"+
"695\n"+
"287\n"+
"332\n"+
"2653\n"+
"311\n"+
"2578\n"+
"87\n"+
"728\n"+
"1982\n"+
"763\n"+
"306\n"+
"1144\n"+
"134\n"+
"5\n"+
"1745\n"+
"20\n"+
"1628\n"+
"42\n"+
"104\n"+
"20\n"+
"537\n"+
"865\n"+
"242\n"+
"776\n"+
"1716\n"+
"377\n"+
"151\n"+
"2051\n"+
"71\n"+
"228\n"+
"851\n"+
"446\n"+
"1392\n"+
"516\n"+
"1979\n"+
"1992\n"+
"63\n"+
"1467\n"+
"1521\n"+
"2763\n"+
"200\n"+
"349\n"+
"4\n"+
"30\n"+
"460\n"+
"298\n"+
"484\n"+
"351\n"+
"43\n"+
"1808\n"+
"318\n"+
"554\n"+
"45\n"+
"156\n"+
"461\n"+
"2797\n"+
"202\n"+
"357\n"+
"865\n"+
"18\n"+
"165\n"+
"1758\n"+
"389\n"+
"17\n"+
"1312\n"+
"65145");

addData("7/20\n"+
"90\n"+
"746\n"+
"274\n"+
"193\n"+
"5\n"+
"852\n"+
"1685\n"+
"966\n"+
"1166\n"+
"1469\n"+
"502\n"+
"7\n"+
"835\n"+
"176\n"+
"1061\n"+
"361\n"+
"208\n"+
"345\n"+
"2380\n"+
"805\n"+
"705\n"+
"293\n"+
"337\n"+
"2685\n"+
"316\n"+
"2618\n"+
"89\n"+
"736\n"+
"2001\n"+
"784\n"+
"311\n"+
"1160\n"+
"135\n"+
"5\n"+
"1769\n"+
"20\n"+
"1654\n"+
"43\n"+
"107\n"+
"23\n"+
"547\n"+
"875\n"+
"247\n"+
"784\n"+
"1745\n"+
"392\n"+
"153\n"+
"2078\n"+
"71\n"+
"230\n"+
"865\n"+
"449\n"+
"1409\n"+
"524\n"+
"2016\n"+
"2028\n"+
"63\n"+
"1493\n"+
"1547\n"+
"2833\n"+
"204\n"+
"353\n"+
"4\n"+
"30\n"+
"475\n"+
"306\n"+
"496\n"+
"358\n"+
"44\n"+
"1839\n"+
"318\n"+
"560\n"+
"45\n"+
"159\n"+
"470\n"+
"2840\n"+
"204\n"+
"360\n"+
"885\n"+
"20\n"+
"171\n"+
"1795\n"+
"394\n"+
"19\n"+
"1332\n"+
"66099");

addData("7/21\n"+

"92\n"+
"760\n"+
"277\n"+
"200\n"+
"5\n"+
"872\n"+
"1714\n"+
"980\n"+
"1191\n"+
"1489\n"+
"517\n"+
"7\n"+
"856\n"+
"183\n"+
"1083\n"+
"367\n"+
"211\n"+
"355\n"+
"2429\n"+
"822\n"+
"723\n"+
"299\n"+
"341\n"+
"2720\n"+
"320\n"+
"2675\n"+
"92\n"+
"745\n"+
"2060\n"+
"797\n"+
"320\n"+
"1185\n"+
"138\n"+
"5\n"+
"1806\n"+
"20\n"+
"1700\n"+
"45\n"+
"109\n"+
"24\n"+
"551\n"+
"902\n"+
"256\n"+
"806\n"+
"1775\n"+
"403\n"+
"155\n"+
"2113\n"+
"73\n"+
"238\n"+
"878\n"+
"461\n"+
"1438\n"+
"535\n"+
"2056\n"+
"2082\n"+
"95\n"+
"1527\n"+
"1571\n"+
"2928\n"+
"205\n"+
"359\n"+
"4\n"+
"30\n"+
"483\n"+
"318\n"+
"506\n"+
"363\n"+
"44\n"+
"1878\n"+
"322\n"+
"571\n"+
"45\n"+
"159\n"+
"478\n"+
"2900\n"+
"207\n"+
"367\n"+
"908\n"+
"20\n"+
"174\n"+
"1834\n"+
"399\n"+
"20\n"+
"1376\n"+
"67232" );

addData("7/22\n"+
"96\n"+
"765\n"+
"281\n"+
"204\n"+
"5\n"+
"878\n"+
"1729\n"+
"984\n"+
"1198\n"+
"1508\n"+
"523\n"+
"7\n"+
"869\n"+
"185\n"+
"1094\n"+
"371\n"+
"214\n"+
"360\n"+
"2454\n"+
"837\n"+
"734\n"+
"301\n"+
"341\n"+
"2748\n"+
"322\n"+
"2691\n"+
"94\n"+
"754\n"+
"2081\n"+
"811\n"+
"322\n"+
"1202\n"+
"139\n"+
"5\n"+
"1815\n"+
"20\n"+
"1717\n"+
"45\n"+
"109\n"+
"24\n"+
"563\n"+
"911\n"+
"259\n"+
"815\n"+
"1803\n"+
"407\n"+
"156\n"+
"2144\n"+
"73\n"+
"242\n"+
"886\n"+
"466\n"+
"1458\n"+
"540\n"+
"2078\n"+
"2121\n"+
"65\n"+
"1536\n"+
"1592\n"+
"2957\n"+
"207\n"+
"265\n"+
"5\n"+
"30\n"+
"485\n"+
"323\n"+
"513\n"+
"363\n"+
"44\n"+
"1903\n"+
"326\n"+
"574\n"+
"45\n"+
"460\n"+
"480\n"+
"2929\n"+
"205\n"+
"369\n"+
"919\n"+
"20\n"+
"178\n"+
"1852\n"+
"400\n"+
"21\n"+
"1394\n"+
"67894");
console.log(data);


export default data;