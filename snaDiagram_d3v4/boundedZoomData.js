//each person needs a node
//AND each family needs a node

var nodes = [

  //Ozone's crew
  {"type":'family',"id":'f1',"name":'Miracles Community Center', "image":"nodes/miraclesCircle.png"},// miracles
  {"type":'person',"id":'p1',"name":'Lucia',"actor": "Sabrina Garcia", "role":"Turbo's Partner","image": "nodes/luciaCircle.png"},//lucia
  {"type":'person',"id":'p2',"name":'Orlando "Ozone" Barco', "actor": 'Adolfo "Shabba Doo" Quiñones', "group": "TKO Crew", "image":"nodes/ozoneCircle.png"},//ozone
  {"type":'person',"id":'p3',"name":'Rhonda',"actor": "Suzie Bono", "role":"Ozone's ex-partner, Kelly's enemy" ,"image": "nodes/rhondaYCircle.png"},//rhonda
  {"type":'person',"id":'p4',"name":'Pop n Taco',"actor": "Bruno Falcon", "role":"friend of TKO" ,"image": "nodes/popNTacoCircle.png"},//pop n taco
  {"type":'person',"id":'p5',"name":'Tony "Turbo" Ainley','actor': 'Michael "Boogaloo Shrimp" Chambers',"group": "TKO Crew","image": "nodes/turboCircle.png"},//turbo
  {"type":'person',"id":'p6',"name":"Byron","actor":'Harry Caesar',"role":'Mentor at Miracles',"image": "nodes/byronCircle.png"},//byron
  {"type":'person',"id":'p7',"name":"Magician","actor":'',"role":'friend of TKO, member of Miracles',"image": "nodes/magicianCircle.png"},//magician
  {"type":'person',"id":'p15',"name":'Coco',"actor":'Vidal "Coco" Rodriguez', "role": 'friend of TKO, member of Miracles',"image": "nodes/cocoCircle.png"},//coco
  {"type":'person',"id":'p21',"name":'Reporter Howard Howard',"actor":'William Cort', "role": 'enemy of Randall and Douglas, supporter of Miracles',"image": "nodes/howardCircle.png"},//howard howard

  //Nurse
  {"type":'person',"id":'p20',"name":'Head Nurse (Doreen Shay)',"actor":'Lu Leonard', "role": 'caretaker and enemy of Turbo',"image": "nodes/headNurseCircle.png"},//head nurse

  //Kelly's family
  {"type":'family',"id":'f3',"name":'Kelly "Special K" Bennett',"actor": "Lucinda Dickey", "group": "TKO Crew","image" : "nodes/kellyCircle.png"},// kelly
  {"type":'person',"id":'p8',"name":'Mr. Bennett',"actor": "John Christy Ewing", "role": "Kelly's dad","image": "nodes/mrBennettCircle.png"}, // mr. bennett
  {"type":'person',"id":'p9',"name":'Mrs. Bennett',"actor": "Jo de Winter", "role": "Kelly's mom","image": "nodes/msBennettCircle.png"}, // mrs. bennett
  {"type":'person',"id":'p16',"name":'Derek',"actor": "Nick Segal", "role": "Kelly's fiance and enemy","image": "nodes/derekCircle.png"}, // derek
  {"type":'person',"id":'p19',"name":'Rosa',"actor": "Alberta Sanchez", "role": "maid for the Bennett's, friend of Kelly","image": "nodes/rosaCircle.png"}, // rosa


  //Electro Rock Dancers
  {"type":'family',"id":'f4',"name":'Strobe',"actor": 'Steve "Sugarfoot" Notario', "group": "Electro-Rock", "role": "rival of Ozone, supporter of Miracles", "image":"nodes/strobeCircle.png"},
  {"type":'person',"id":'p10',"name":'Featured Street Dancer TKO',"actor":'Derek "Cooley Bop" Jackson', "role": "dancer for TKO crew, member of Miracles","image": "nodes/cooleyCircle.png"},
  {"type":'person',"id":'p11',"name":'Lollipop',"actor": 'Ana "Lollipop" Sanchez', "role":"Electro-Rock dancer, Strobe's dance partner", "image": "nodes/electroRockGirlYCircle.png"},
  {"type":'person',"id":'p13',"name":'Radiotron Rapper',"actor": "Ice T", "role": "aquaintance of Electro-Rock, TKO and Miracles","image": "nodes/radiotronCircle.png"},
  
  //Enemies
  {"type":'family',"id":'f5',"name":'Mr. Douglas', "actor": "Peter MacLean", "role":"enemy of TKO, Miracles, works with Randall", "image":"nodes/douglasCircle.png"},
  {"type":'person',"id":'p12',"name":'Mrs. Snyder',"actor": "Sandy Lipton", "role": "city official, sympathetic yet an enemy to Miracles","image": "nodes/snyderCircle.png"},
  {"type":'person',"id":'p14',"name":'Randall',"actor": "Ken Olfson","role":'wants to develop Miracles, working with Mr. Douglas',"image": "nodes/randallCircle.png"},
  {"type":'person',"id":'p17',"name":'Surveyor',"actor": "Daniel Riordan","role":'works for Randall and Mr. Douglas',"image": "nodes/surveyorCircle.png"},
  {"type":'person',"id":'p18',"name":'Bulldozer Driver',"actor": "Jim W. Jones","role":'works for Randall and Mr. Douglas',"image": "nodes/bulldozerDriverCircle.png"}
]

//currently there are 10 types of links
//family - family id is always the source
//partner - link between two person ids
//current formatting:
//ex-partner - dotted line
//partner/mentor/tko/rival - thickest line
//tko - thick orange line
//member/friend - thick line

//this is where we connect the nodes with different types of links/edges
var edges = [
  //FAMILY 1 - Ozone's Crew
  {id:1,source:'p5',target:'f4',type:'1'},//turbo / strobe
  {id:2,source:'p2',target:'f3',type:'10'},//ozone / kelly
  {id:3,source:'f3',target:'p10',type:'3'},//kelly / cooley
  {id:4,source:'f3',target:'p7',type:'3'},//kelly / magician
  {id:5,source:'f3',target:'p3',type:'3'},//kelly / rhonda
  {id:6,source:'p1',target:'p5',type:'5'},//lucia / turbo
  {id:7,source:'p1',target:'p2',type:'4'},//lucia / ozone
  {id:8,source:'p1',target:'f3',type:'2'},//lucia / kelly
  {id:9,source:'p1',target:'p4',type:'2'},//lucia / pop n taco
  {id:10,source:'p1',target:'p3',type:'2'},//lucia / rhonda
  {id:11,source:'p1',target:'f4',type:'1'},//lucia / strobe
  {id:12,source:'p1',target:'p14',type:'1'},//lucia / randall
  {id:13,source:'p1',target:'p14',type:'1'},//lucia / mr. douglas
  {id:14,source:'p1',target:'p6',type:'1'},//lucia / byron
  {id:15,source:'p5',target:'p3',type:'4'},//turbo / rhonda
  {id:16,source:'p2',target:'p3',type:'9'},//ozone / rhonda
  {id:17,source:'p2',target:'p4',type:'6'},//ozone / pop n taco
  {id:18,source:'p15',target:'p4',type:'6'},//coco / pop n taco
  {id:19,source:'f3',target:'p4',type:'3'},//kelly / pop n taco
  {id:20,source:'p5',target:'p4',type:'3'},//turbo / pop n taco
  {id:21,source:'p5',target:'p10',type:'3'},//cooley / pop n taco
  {id:22,source:'p3',target:'p10',type:'3'},//rhonda / pop n taco
  {id:23,source:'p7',target:'p10',type:'2'},//magician / pop n taco
  {id:24,source:'p14',target:'p10',type:'2'},//randall / pop n taco
  {id:25,source:'f4',target:'p10',type:'2'},//strobe / pop n taco
  {id:26,source:'p14',target:'p10',type:'2'},//douglas / pop n taco
  {id:27,source:'p19',target:'p10',type:'2'},//rosa / pop n taco
  {id:28,source:'p13',target:'p10',type:'1'},//radiotron rapper / pop n taco
  {id:29,source:'p6',target:'p10',type:'1'},//byron / pop n taco
  {id:30,source:'p9',target:'p10',type:'1'},//mrs. bennett / pop n taco
  {id:31,source:'p17',target:'p10',type:'1'},//surveyor / pop n taco
  {id:32,source:'p16',target:'p10',type:'1'},//derek / pop n taco
  {id:33,source:'p21',target:'p10',type:'1'},//howard / pop n taco
  {id:34,source:'p2',target:'p5',type:'10'},//ozone / turbo
  {id:35,source:'p2',target:'p6',type:'8'},//ozone / byron
  {id:36,source:'p3',target:'p6',type:'4'},//rhonda / byron
  {id:37,source:'p14',target:'p6',type:'2'},//randall / byron
  {id:38,source:'p7',target:'p6',type:'4'},//magician / byron
  {id:39,source:'p7',target:'p14',type:'2'},//magician / randall
  {id:40,source:'p7',target:'p14',type:'3'},//magician / douglas
  {id:41,source:'p7',target:'p15',type:'4'},//magician / coco
  {id:42,source:'p7',target:'p1',type:'4'},//magician / lucia
  {id:43,source:'f3',target:'p5',type:'8'},//kelly / turbo
  {id:44,source:'p7',target:'p3',type:'6'},//magician / rhonda
  {id:45,source:'p7',target:'p2',type:'9'},//magician / ozone
  {id:46,source:'p7',target:'p5',type:'8'},//magician / turbo
  {id:47,source:'p7',target:'p19',type:'1'},//magician / rosa
  {id:48,source:'p7',target:'f4',type:'1'},//magician / strobe
  {id:49,source:'p7',target:'p21',type:'1'},//magician / howard
  {id:50,source:'p15',target:'p2',type:'7'},//coco / ozone
  {id:51,source:'p15',target:'p3',type:'4'},//coco / rhonda
  {id:52,source:'p21',target:'p15',type:'1'},//howard / coco
  {id:53,source:'p21',target:'p2',type:'1'},//howard / ozone
  {id:54,source:'p21',target:'p14',type:'3'},//howard / randall
  {id:55,source:'p21',target:'f5',type:'1'},//howard / douglas
  {id:56,source:'p21',target:'p5',type:'1'},//howard / turbo
  {id:57,source:'p9',target:'p21',type:'1'},//mrs. bennett / howard
  {id:58,source:'p2',target:'p14',type:'6'},//ozone / randall
  {id:59,source:'p15',target:'p14',type:'1'},//coco / randall
  {id:60,source:'p15',target:'p5',type:'5'},//coco / turbo
  {id:61,source:'p15',target:'f3',type:'2'},//coco / kelly
  {id:62,source:'p15',target:'p10',type:'5'},//coco / cooley
  {id:63,source:'p5',target:'p10',type:'4'},//turbo / cooley
  {id:64,source:'p3',target:'p10',type:'4'},//rhonda / cooley
  {id:65,source:'p3',target:'f4',type:'1'},//rhonda / strobe
  {id:66,source:'p15',target:'p1',type:'2'},//coco / lucia
  {id:67,source:'p7',target:'p10',type:'3'},//magician / cooley
  {id:68,source:'p1',target:'p10',type:'2'},//lucia / cooley
  {id:69,source:'p6',target:'p10',type:'2'},//byron / cooley
  {id:70,source:'p5',target:'p19',type:'2'},//turbo / rosa
  {id:71,source:'p2',target:'p19',type:'2'},//ozone / rosa
  {id:72,source:'p19',target:'p3',type:'1'},//rosa / rhonda
  {id:73,source:'p2',target:'p13',type:'2'},//ozone / radiotron rapper
  {id:74,source:'p10',target:'p13',type:'1'},//cooley / radiotron rapper
  {id:75,source:'p7',target:'p13',type:'1'},//magician / radiotron rapper
  {id:76,source:'p3',target:'p13',type:'1'},//rhonda / radiotron rapper
  {id:77,source:'p6',target:'p13',type:'1'},//byron / radiotron rapper
  {id:78,source:'p10',target:'f4',type:'1'},//cooley / strobe
  {id:79,source:'p10',target:'p14',type:'1'},//cooley / randall
  {id:80,source:'p10',target:'p19',type:'1'},//cooley / rosa
  {id:81,source:'p10',target:'p8',type:'1'},//cooley / mr. bennett
  {id:82,source:'p10',target:'p9',type:'1'},//cooley / mrs. bennett
  {id:83,source:'p10',target:'p17',type:'1'},//cooley / surveyor
  {id:84,source:'p10',target:'p12',type:'1'},//cooley / snyder
  {id:85,source:'p10',target:'p21',type:'1'},//cooley / howard
  {id:86,source:'p6',target:'p5',type:'2'},//byron / turbo
  {id:87,source:'p6',target:'p15',type:'2'},//byron / coco
  {id:88,source:'p6',target:'f3',type:'1'},//byron / kelly
  {id:89,source:'p6',target:'f4',type:'1'},//byron / strobe
  {id:90,source:'p15',target:'p13',type:'1'},//coco / radiotron rapper
  {id:91,source:'p5',target:'p13',type:'1'},//turbo / radiotron rapper
  {id:92,source:'f3',target:'p13',type:'1'},//kelly / radiotron rapper
  {id:93,source:'p1',target:'p13',type:'1'},//lucia / radiotron rapper
  {id:94,source:'f5',target:'p13',type:'1'},//douglas / radiotron rapper
  {id:95,source:'p19',target:'p13',type:'1'},//rosa / radiotron rapper
  {id:96,source:'p9',target:'p13',type:'1'},//mrs. bennett / radiotron rapper
  {id:97,source:'p17',target:'p13',type:'1'},//surveyor / radiotron rapper
  {id:98,source:'p13',target:'p14',type:'1'},//radiotron rapper / randall
  {id:99,source:'p13',target:'p8',type:'1'},//radiotron rapper / mr. bennett
  {id:100,source:'p13',target:'f4',type:'1'},//radiotron rapper / strobe
  {id:101,source:'p1',target:'p19',type:'1'},//lucia / rosa
  {id:102,source:'p15',target:'p19',type:'1'},//coco / rosa
  {id:103,source:'p6',target:'p19',type:'1'},//byron / rosa
  {id:104,source:'p6',target:'p9',type:'1'},//byron / mrs. bennett
  {id:105,source:'p6',target:'p21',type:'1'},//byron / howard
  {id:106,source:'p1',target:'p21',type:'1'},//lucia / howard
  {id:107,source:'p15',target:'p8',type:'1'},//coco / mr. bennett
  {id:108,source:'p1',target:'p8',type:'1'},//lucia / mr. bennett
  {id:109,source:'p17',target:'p1',type:'1'},//surveyor / lucia
  {id:110,source:'p15',target:'p9',type:'1'},//coco / mrs. bennett
  {id:111,source:'p17',target:'p2',type:'1'},//surveyor / ozone
  {id:112,source:'p17',target:'p7',type:'1'},//surveyor / magician
  {id:113,source:'p17',target:'p5',type:'1'},//surveyor / turbo
  {id:114,source:'p17',target:'p6',type:'1'},//surveyor / byron
  {id:115,source:'p17',target:'p3',type:'1'},//surveyor / rhonda
  {id:116,source:'p17',target:'p19',type:'1'},//surveyor / rosa

  //miracles
  {id:117,source:'p16',target:'f1',type:'3'},//derek / miracles
  {id:118,source:'p13',target:'f1',type:'3'},//radiotron rapper / miracles
  {id:119,source:'p20',target:'f1',type:'3'},//head nurse / miracles
  {id:120,source:'p15',target:'f1',type:'10'},//coco / miracles
  {id:121,source:'p10',target:'f1',type:'9'},//cooley / miracles
  {id:122,source:'f3',target:'f1',type:'9'},//kelly / miracles
  {id:123,source:'p1',target:'f1',type:'9'},//lucia / miracles
  {id:124,source:'p7',target:'f1',type:'8'},//magician / miracles
  {id:125,source:'f5',target:'f1',type:'8'},//douglas / miracles
  {id:126,source:'p12',target:'f1',type:'8'},//snyder / miracles
  {id:127,source:'f1',target:'p2',type:'10'},//miracles / ozone
  {id:128,source:'f1',target:'p10',type:'8'},//miracles / pop n taco
  {id:129,source:'f1',target:'p14',type:'6'},//miracles / randall
  {id:130,source:'f1',target:'p21',type:'4'},//miracles / howard
  {id:131,source:'f1',target:'p3',type:'8'},//miracles / rhonda
  {id:132,source:'f1',target:'p19',type:'6'},//miracles / rosa
  {id:133,source:'f1',target:'p5',type:'9'},//miracles / turbo
  {id:134,source:'f1',target:'p6',type:'7'},//miracles / byron
  {id:135,source:'f1',target:'f4',type:'5'},//miracles / strobe
  {id:136,source:'f1',target:'p17',type:'5'},//miracles / surveyor


  //NURSES
  {id:137,source:'p20',target:'p5',type:'1'},//head nurse / turbo
  {id:138,source:'p20',target:'p2',type:'1'},//head nurse / ozone
  {id:139,source:'p20',target:'f3',type:'1'},//head nurse / kelly
  {id:140,source:'p15',target:'p20',type:'1'},//coco / head nurse
  {id:142,source:'p1',target:'p20',type:'1'},//lucia / head nurse
  {id:143,source:'p20',target:'p7',type:'1'},//head nurse / magician
  {id:144,source:'p20',target:'p9',type:'1'},//head nurse / mrs. bennett
  {id:145,source:'p20',target:'p14',type:'1'},//head nurse / randall
  {id:146,source:'p20',target:'p10',type:'1'},//head nurse / cooley
  {id:147,source:'p20',target:'p19',type:'1'},//head nurse / rosa
  {id:148,source:'p20',target:'p10',type:'1'},//head nurse / pop n taco
  {id:149,source:'p12',target:'p20',type:'1'},//snyder / head nurse
  {id:150,source:'p17',target:'p20',type:'1'},//surveyor / head nurse

  //FAMILY 2 - Kelly's Family
  {id:151,source:'f3',target:'p8',type:'1'},//kelly / mr. bennett
  {id:152,source:'f3',target:'p9',type:'3'},//kelly / mrs. bennett
  {id:153,source:'f3',target:'p14',type:'1'},//kelly / randall
  {id:154,source:'f3',target:'p12',type:'1'},//kelly / snyder
  {id:155,source:'p8',target:'p9',type:'6'},//mr. bennett / mrs. bennett
  {id:156,source:'p8',target:'p16',type:'2'},//mr. bennett / derek
  {id:157,source:'p8',target:'p21',type:'2'},//mr. bennett / howard
  {id:158,source:'p9',target:'p16',type:'1'},//mrs. bennett / derek
  {id:159,source:'p15',target:'p16',type:'1'},//coco / derek
  {id:160,source:'p10',target:'p16',type:'1'},//cooley / derek
  {id:161,source:'p7',target:'p16',type:'1'},//magician / derek

  {id:162,source:'p7',target:'p16',type:'1'},//magician / mrs. bennett
  {id:163,source:'p7',target:'p8',type:'1'},//magician / mr. bennett
  {id:164,source:'p8',target:'p5',type:'2'},//mr. bennett / turbo
  {id:165,source:'p8',target:'p10',type:'2'},//mr. bennett / pop n taco
  {id:166,source:'p8',target:'p2',type:'1'},//mr. bennett / ozone
  {id:167,source:'p3',target:'p8',type:'1'},//rhonda / mr. bennett
  {id:168,source:'p5',target:'p16',type:'1'},//turbo / derek
  {id:169,source:'p9',target:'p2',type:'1'},//ms. bennett / ozone
  {id:170,source:'f3',target:'p16',type:'1'},//kelly / derek
  {id:171,source:'p2',target:'p16',type:'1'},//ozone / derek
  {id:172,source:'f3',target:'p19',type:'1'},//kelly / rosa
  {id:173,source:'p8',target:'p19',type:'1'},//mr. bennett / rosa
  {id:174,source:'p8',target:'p14',type:'1'},//mr. bennett / randall
  {id:175,source:'p8',target:'f4',type:'1'},//mr. bennett / strobe
  {id:176,source:'p8',target:'p17',type:'1'},//mr. bennett / surveyor
  {id:177,source:'p5',target:'p9',type:'1'},//turbo / mrs. bennett
  {id:178,source:'p14',target:'p9',type:'1'},//randall / mrs. bennett
  {id:179,source:'p9',target:'p19',type:'1'},//mrs. bennett / rosa
  {id:180,source:'p19',target:'p14',type:'1'},//rosa / randall
  {id:181,source:'f4',target:'p14',type:'1'},//strobe / randall
  {id:182,source:'f4',target:'p9',type:'1'},//strobe / mrs. bennett
  {id:183,source:'f4',target:'f5',type:'1'},//strobe / douglas
  {id:184,source:'f4',target:'p19',type:'1'},//strobe / rosa
  {id:185,source:'p16',target:'p19',type:'1'},//derek / rosa
  {id:186,source:'p16',target:'p1',type:'1'},//derek / lucia
  {id:187,source:'p16',target:'p14',type:'1'},//derek / randall
  {id:188,source:'p16',target:'p6',type:'1'},//derek / byron

  //FAMILY 3 - Electro-Rock Dancers
  {id:189,source:'f4',target:'p2',type:'2'}, //strobe / ozone
  {id:190,source:'f4',target:'p15',type:'1'}, //strobe / coco
  {id:191,source:'f4',target:'f3',type:'1'}, //strobe / kelly
  {id:192,source:'f4',target:'p11',type:'3'},//strobe / electro rock 2
  {id:193,source:'p2',target:'p10',type:'7'},//ozone / cooley
  {id:194,source:'p10',target:'p11',type:'1'},//pop n taco / electro rock 2

  //Family 4 - City Hall people
  {id:195,source:'p9',target:'p12',type:'1'},//mrs. bennett / snyder
  {id:196,source:'p3',target:'p12',type:'1'},//rhonda / snyder
  {id:197,source:'p19',target:'p12',type:'1'},//rosa / snyder
  {id:198,source:'p2',target:'p12',type:'1'},//ozone / snyder
  {id:199,source:'p5',target:'p12',type:'1'},//turbo / snyder
  {id:200,source:'p15',target:'p12',type:'1'},//coco / snyder
  {id:201,source:'p21',target:'p12',type:'1'},//howard / snyder
  {id:202,source:'p12',target:'p7',type:'1'},//snyder / magician
  {id:203,source:'p12',target:'p14',type:'1'},//snyder / randall
  {id:204,source:'p12',target:'p10',type:'1'},//snyder / pop n taco
  {id:205,source:'p15',target:'f5',type:'2'},//coco / douglas
  {id:206,source:'f3',target:'f5',type:'1'},//kelly / douglas
  {id:207,source:'p19',target:'f5',type:'1'},//rosa / douglas
  {id:208,source:'f5',target:'p14',type:'5'},//douglas / randall
  {id:209,source:'f5',target:'p2',type:'3'},//douglas / ozone
  {id:210,source:'f5',target:'p5',type:'2'},//douglas / turbo
  {id:211,source:'f5',target:'p3',type:'3'},//douglas / rhonda
  {id:212,source:'f5',target:'p10',type:'1'},//douglas / cooley
  {id:213,source:'f5',target:'p6',type:'1'},//douglas / byron
  {id:214,source:'p3',target:'p14',type:'4'},//rhonda / randall
  {id:215,source:'p5',target:'p14',type:'2'},//turbo / randall
  {id:216,source:'p17',target:'f3',type:'1'},//surveyor / kelly
  {id:217,source:'p15',target:'p17',type:'1'},//coco / surveyor
  {id:218,source:'f5',target:'p12',type:'1'},//douglas / snyder 
  {id:219,source:'p17',target:'p14',type:'1'},//surveyor / randall
  {id:220,source:'p17',target:'f5',type:'1'},//surveyor / douglas
  {id:221,source:'p17',target:'p9',type:'1'},//surveyor / mrs. bennett
  {id:222,source:'p18',target:'f5',type:'1'},//bulldozer / douglas
  {id:223,source:'p18',target:'p2',type:'1'},//bulldozer / ozone
  {id:224,source:'p18',target:'p3',type:'1'}//bulldozer / rhonda
  //{id:26,source:'p18',target:'p14',type:'employee'},//bulldozer / randall
]

//defining the chart
var myChart = familyChart().nodes(nodes)
                           .links(edges);

    //defining the width and height of the svg
var width = window.innerWidth, // default width
  height = window.innerHeight;

// then, create your svg element and a <g> container
// for all of the transformed content
//.select selects 1st matching element
//.selectAll selects everything that matches
var svg = d3.select("body").append("svg") 
      .classed("svg-content", true)
      .attr("width", width)
      .attr("height", height)
      .style("background-color", "#161616");

    g = svg.append("g");

// then, create the zoom behvavior
var zoom = d3.zoom()
  // only scale up, e.g. between 1x and 5x
  .scaleExtent([1, 5])
  .on("zoom", function() {
    // the "zoom" event populates d3.event with an object that has
    // a "translate" property (a 2-element Array in the form [x, y])
    // and a numeric "scale" property
    var e = d3.event.transform,
        // now, constrain the x and y components of the translation by the
        // dimensions of the viewport
        tx = Math.min(0, Math.max(e.x, width - width * e.k)),
        ty = Math.min(0, Math.max(e.y, height - height * e.k));
    // then, update the zoom behavior's internal translation, so that
    // it knows how to properly manipulate it on the next movement
    // and finally, update the <g> element's transform attribute with the
    // correct translation and scale (in reverse order)
    g.attr("transform", [
      "translate(" + [tx, ty] + ")",
      "scale(" + e.k + ")"
    ].join(" "));
  });

// then, call the zoom behavior on the svg element, which will add
// all of the necessary mouse and touch event handlers.
// remember that if you call this on the <g> element, the even handlers
// will only trigger when the mouse or touch cursor intersects with the
// <g> elements' familyren!
svg.call(zoom)
svg.call(myChart);

function familyChart() {

  var nodes = [],
      links = [] // default height

  function my(svg) {

    //set the radius of the family nodes
    var family_radius = 60;

//==========need to experiment with different forces=============

    //set the repel force - may need to be tweaked for multiple data
    //the lower the strength the more they will repel away from each other
    //the larger the distance, the more apart they will be
    var repelForce = d3.forceManyBody().strength(-30000).distanceMax(9000000)
                       .distanceMin(150);

    //start the simulation
    //alpha decay - if less, force takes longer but is better positioned
    //center just keeps everything in the svg - otherwise you won't see it however much you pan or zoom
    //repel force see above
    //link distance - repel takes precidence - try upping or lowering the strength and changing the distances
    //collide - this is on maximum strength and is higher for family (bigger radius) than others so should keep
    //families further apart than people 
    var simulation = d3.forceSimulation()
                       //.alphaDecay(0.1)//bounce
                       //.velocityDecay(0.4)
                       .force("center", d3.forceCenter(width / 2, height / 2))//center on screen
                       .force("xAxis",d3.forceX(width/2).strength(0.4))
                       .force("yAxis",d3.forceY(height/2).strength(0.8))
                       .force("repelForce",repelForce)
                       .force("link", d3.forceLink().id(function(d) { return d.id }).distance(dist).strength(1))//changed from 1.5
                       .force("collide",d3.forceCollide().radius(function(d) { return d.r * 20; }).iterations(1).strength(.7))//doesn't do much...
                       .force("charge", d3.forceManyBody().strength(-40))

    function dist(d){
      //used by link force
      //determines link length
      return 350
    }

//===========need to experiment with different stroke thickness, color and style============
    //define the links
    var links = g.selectAll("foo")
        .data(edges)
        .enter()
        .append("line")
        .attr("stroke-width",function(d){
          //stroke width - thicker if partner/mentor/tko/rival
            if(d.type == 'partner' || d.type =='mentor' || d.type=="tko" || d.type=='rival'){
              return "5px"
            } else if (d.type == '10'){
              return "10px"
            }
            else if (d.type == '9'){
              return "9px"
            }
            else if (d.type == '8'){
              return "8px"
            }
            else if (d.type == '7'){
              return "7px"
            }
            else if (d.type == '6'){
              return "6px"
            }
            else if (d.type == '5'){
              return "5px"
            }
            else if (d.type == '4'){
              return "4px"
            }
            else if (d.type == '3'){
              return "3px"
            }
            else if (d.type == '2'){
              return "2px"
            }
            else if (d.type == '1'){
              return "1px"
            }
          })
        .attr("stroke-dasharray", function(d){ //dashed if ex or acquaintance
          if(d.type=="ex-partner" || d.type=="acquaintance"){
            return "6,6"
          } else if(d.type=="member"){
            return "2,1"
          }
          else if(d.type=="family"){
            return "2,2"
          }
          else{
            return "0"
          }
          if(d.type=="enemy"){
            return "2px"
          }
          //stroke width - thicker if member/friend
          if(d.type=="member" || d.type =='friend' || d.type=='rival'){
            return "3px"
          }
          if(d.type=="10" || d.type =='friend' || d.type=='rival'){
            return "3px"
          }
        })
      .attr("stroke", function(d){  //grey unless mentor (yellow), member / acquaintance (orange), or friend (yellow)
        switch (d.type) {
          case '10':
            return '#a82d34';//bright red
          case '9':
            return "#f97302";//dark orange  
          case '8':
            return "#fbc441";//light yellow
          case 'mentor':
            return "#e15a79";//hot pink
          case 'acquaintance':
            return "#660099";//#fbc441 light yellow
          case 'partner':
            return "#ff9088";//light pink
          case '7':
            return "#83e3fe";//light blue 
          case '5':
            return "#9999ff";//purple
            case '6':
            return '#99ff00';//bright green, "#00f5d4" sea green crayola  
          default:
            return "gray";//#59d9fe dark blue, #32cffc darker
          }
      });

    //define tooltip
    var tooltip = d3.select("body")
      .append("div")
      .style("position", "absolute")
      .style("z-index", "10")
      .style("visibility", "hidden")
      .style("font-family", "sans-serif")
      .style("background", "white")
      .style("opacity", .8)
      .style('color', '#161616')
      .attr("class", "tooltip")
      .html("");

    //draw the nodes with drag functionality
    //added g to links
    var node = g.selectAll("foo")
        .data(nodes)
        .enter()
        .append("g")
        .call(d3.drag()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended));

    //define defs and patterns - for the images
    var defs = node.append("defs");


    defs.append('pattern')
        .attr("id", function(d,i){return "my_image" + i})
        .attr("width", 1)
        .attr("height", 1)
        .append("svg:image")
        .attr("xlink:href", function(d) {return d.image})
        .attr("height", "120")
        .attr("width", "120")
        .attr("x", 0)
        .attr("y", 0);

        //append deceased arc - only visible if "dead" is defined
        node.append('path')
            .attr('class',"semi-circle")
            .attr('fill','none')
            .attr('stroke','grey')
            .attr('stroke-width', function(d){
              if(d.dead == undefined){return "0px"
              }else{return "4px"}})
            .attr('d',describeArc(0, -2.5, 12.5, -90, 90))

    //append circles
    //hover states
    var circles = node.append("circle")
                      .attr("class","circle")
                      .attr("r", function(d){ //radius - bigger if family
                          if (d.type == "family"){
                            return family_radius;
                          } else{return 60;}})
                       .attr("fill",function(d,i){ //node image
                         if(d.type == "family"){return "url(#my_image" + i + ")"}
                         else{return "url(#my_image" + i + ")"}})
                          .attr("stroke-width","2px")
                          .on("mouseover", function(d){
            
                            if(d.type == "family" || "person"){
                              console.log(d.name)
                              console.log(d.actor)
                              //sets tooltip.  t_text = content in html
                              t_text = "<strong>" + titleCase(d.name) + "</strong><br>Actor: " + d.actor
                              //console.log(d.name)
                              if(d.group !== undefined){
                                //only add group if it is defined
                                t_text += "<br>Group: " + d.group
                              }
                              if(d.role !== undefined){
                                //only add role if it is defined
                                t_text += "<br>Role: " + d.role
                              }
                              tooltip.html(t_text)
                              return tooltip.style("visibility", "visible");
                            } 
                          })
                           .on("mousemove", function(){return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px");})
                           .on("mouseout", function(){return tooltip.style("visibility", "hidden");});


    //title case function used by tooltip and labels
    function titleCase(str) {
        str = str.toLowerCase().split(" ");
        for (var i = 0; i < str.length; i++) {
          if(str[i].charAt(0) == '"' ) {
            //console.log(str[i].charAt(1))
            str[i] = '"'+ str[i].charAt(1).toUpperCase() + str[i].slice(2);
          }
          else if(str[i].charAt(0) == '(' ) {
            //console.log(str[i].charAt(1))
            str[i] = '('+ str[i].charAt(1).toUpperCase() + str[i].slice(2);
          }
            else{
            str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
          //console.log(str[i].charAt(0))
          }
        }
        return str.join(" ");
    }

    //append labels to nodes
    var texts = node.append("text")
        .style("fill", "white")
        .attr("dx", 0)
        //adjusts the position of text
        .attr("dy", "5.0em")
        .attr("text-anchor","middle")
        .style("font-size", "9px")
        .style("font-family", '"Open Sans", sans-serif')
        //.style("font-weight", "500")
        .text(function(d) {
            return titleCase(d.name);
        })
 //this and next section adds rectangles 
      .call(getTextBox);

//display a rect behind labels of names 
node.filter(function(d) {return (d.name)}).insert("rect","text")
    .attr("x", function(d){return d.bbox.x-7})
    .attr("y", function(d){return d.bbox.y})
    .attr("width", function(d){return d.bbox.width+14})
    .attr("height", function(d){return d.bbox.height})
    .attr("class", "rectText")
    .style("fill", "rgba(0, 0, 0, .5)");


function getTextBox(selection) {
    selection.each(function(d) { d.bbox = this.getBBox(); })
}

    //finally - attach the nodes and the links to the simulation
    simulation.nodes(nodes);
    simulation.force("link")
              .links(edges);

    //and define tick functionality
   simulation.on("tick", function() {

        links.attr("x1", function(d) {return d.source.x;})
             .attr("y1", function(d) {return d.source.y;})
             .attr("x2", function(d) {return d.target.x;})
             .attr("y2", function(d) {return d.target.y;})

        node.attr("transform", function(d){ return "translate(" + d.x + "," + d.y + ")"})
    });

    function dragstarted(d) {

       if (!d3.event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
      if(d.type == 'family'){
        //stickiness - toggles the class to fixed/not-fixed to trigger CSS
        var my_circle = d3.select(this).selectAll('circle')
        if(my_circle.attr('class') == 'fixed'){
          my_circle.attr("class","not-fixed")
        }else{
          my_circle.attr("class","fixed")
        }
      }
    }

    function dragged(d) {
        d.fx = d3.event.x;
        d.fy = d3.event.y;
    }

    function dragended(d) {
       if (!d3.event.active) simulation.alphaTarget(0);
       //stickiness - unfixes the node if not-fixed or a person
       var my_circle = d3.select(this).selectAll('circle')
       if(my_circle.attr('class') == 'not-fixed'  || d.type !== 'family'){
         d.fx = null;
         d.fy = null;
       }

    }

    function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
      //for arcs - from excellent link - http://jsbin.com/quhujowota/1/edit?html,js,output
        var angleInRadians = (angleInDegrees-90) * Math.PI / 180.0;

      return {
        x: centerX + (radius * Math.cos(angleInRadians)),
        y: centerY + (radius * Math.sin(angleInRadians))
      };
    }

    function describeArc(x, y, radius, startAngle, endAngle){
      //for arcs - from excellent link - http://jsbin.com/quhujowota/1/edit?html,js,output

        var start = polarToCartesian(x, y, radius, endAngle);
        var end = polarToCartesian(x, y, radius, startAngle);

        var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

        var d = [
            "M", start.x, start.y,
            "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
        ].join(" ");

        return d;
    }
  }

  my.width = function(value) {
    if (!arguments.length) return width;
    width = value;
    return my;
  };

  my.nodes = function(value) {
    if (!arguments.length) return nodes;
    nodes = value;
    return my;
  };

  my.links = function(value) {
    if (!arguments.length) return links;
    links = value;
    return my;
  };

  my.height = function(value) {
    if (!arguments.length) return height;
    height = value;
    return my;
  };

  return my;
}
