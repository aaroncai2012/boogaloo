//each person needs a node
//AND each family needs a node

var nodes = [

  //Ozone's crew
  {"group": "1", "type":'family',"id":'f1',"name":'Miracles Community Center', "image":"nodes/miraclesCircle.png"},// miracles
  {"group": "1","type":'family',"id":'p1',"name":'Lucia',"actor": "Sabrina Garcia", "role":"Turbo's Partner","image": "nodes/luciaCircle.png"},//lucia
  {"group": "1","type":'family',"id":'f7',"name":'Orlando "Ozone" Barco', "actor": 'Adolfo "Shabba Doo" Quiñones', "group": "TKO Crew", "image":"nodes/ozoneCircle.png"},//ozone
  {"group": "1","type":'family',"id":'p3',"name":'Rhonda',"actor": "Suzie Bono", "role":"Ozone's ex-partner, Kelly's enemy" ,"image": "nodes/rhondaYCircle.png"},//rhonda
  {"group": "1","type":'family',"id":'p4',"name":'Pop n Taco',"actor": "Bruno Falcon", "role":"friend of TKO" ,"image": "nodes/popNTacoCircle.png"},//pop n taco
  {"group": "1","type":'family',"id":'p5',"name":'Tony "Turbo" Ainley','actor': 'Michael "Boogaloo Shrimp" Chambers',"group": "TKO Crew","image": "nodes/turboCircle.png"},//turbo
  {"group": "1","type":'family',"id":'p6',"name":"Byron","actor":'Harry Caesar',"role":'Mentor at Miracles',"image": "nodes/byronCircle.png"},//byron
  {"type":'family',"id":'p7',"name":"Magician","actor":'',"role":'friend of TKO, member of Miracles',"image": "nodes/magicianCircle.png"},//magician
  {"type":'family',"id":'p15',"name":'Coco',"actor":'Vidal "Coco" Rodriguez', "role": 'friend of TKO, member of Miracles',"image": "nodes/cocoCircle.png"},//coco
  {"type":'family',"id":'p21',"name":'Reporter Howard Howard',"actor":'William Cort', "role": 'enemy of Randall and Douglas, supporter of Miracles',"image": "nodes/howardCircle.png"},//howard howard
  {"type":'family',"id":'p22',"name":'Singer',"actor":'Carol Lynn Townes', "role": 'supporter of Miracles',"image": "nodes/singerCircle.png"},//singer
  {"type":'family',"id":'p23',"name":'Emcee',"actor":'Frankie Crocker', "role": 'supporter of Miracles',"image": "nodes/emceeCircle.png"},//emcee
  {"type":'family',"id":'p24',"name":'Kimberly',"actor":'Kimberly McCullough', "role": 'member of Miracles, friend of TKO group',"image": "nodes/kimberlyCircle.png"},//kimberly

  //Nurse
  {"type":'family',"id":'p20',"name":'Head Nurse (Doreen Shay)',"actor":'Lu Leonard', "role": 'caretaker and enemy of Turbo',"image": "nodes/headNurseCircle.png"},//head nurse

  //Kelly's family
  {"type":'family',"id":'f3',"name":'Kelly "Special K" Bennett',"actor": "Lucinda Dickey", "group": "TKO Crew","image" : "nodes/kellyCircle.png"},// kelly
  {"type":'family',"id":'p8',"name":'Mr. Bennett',"actor": "John Christy Ewing", "role": "Kelly's dad","image": "nodes/mrBennettCircle.png"}, // mr. bennett
  {"type":'family',"id":'p9',"name":'Mrs. Bennett',"actor": "Jo de Winter", "role": "Kelly's mom","image": "nodes/msBennettCircle.png"}, // mrs. bennett
  {"type":'family',"id":'p16',"name":'Derek',"actor": "Nick Segal", "role": "Kelly's fiance and enemy","image": "nodes/derekCircle.png"}, // derek
  {"type":'family',"id":'p19',"name":'Rosa',"actor": "Alberta Sanchez", "role": "maid for the Bennett's, friend of Kelly","image": "nodes/rosaCircle.png"}, // rosa
  {"type":'family',"id":'p25',"name":'Paris Director',"actor": "Jerry Lazarus", "role": "judge of Kelly's dancing audition","image": "nodes/parisDirectorCircle.png"}, // paris director


  //Electro Rock Dancers
  {"type":'family',"id":'f4',"name":'Strobe',"actor": 'Steve "Sugarfoot" Notario', "group": "Electro-Rock", "role": "rival of Ozone, supporter of Miracles", "image":"nodes/strobeCircle.png"},
  {"type":'family',"id":'p10',"name":'Cooley Jackson',"actor":'Derek "Cooley Bop" Jackson', "role": "dancer for TKO crew, member of Miracles","image": "nodes/cooleyCircle.png"},
  {"type":'family',"id":'p11',"name":'Electro Rocker Dancer',"actor": 'Ana "Lollipop" Sanchez', "role":"Electro-Rock dancer, Strobe's dance partner", "image": "nodes/electroRockGirlYCircle.png"},
  {"type":'family',"id":'p13',"name":'Radiotron Rapper',"actor": "Ice T", "role": "aquaintance of Electro-Rock, TKO and Miracles","image": "nodes/radiotronCircle.png"},
  
  //Enemies
  {"type":'family',"id":'f5',"name":'Mr. Douglas', "actor": "Peter MacLean", "role":"enemy of TKO, Miracles, works with Randall", "image":"nodes/douglasCircle.png"},
  {"type":'family',"id":'p12',"name":'Mrs. Snyder',"actor": "Sandy Lipton", "role": "city official, sympathetic yet an enemy to Miracles","image": "nodes/snyderCircle.png"},
  {"type":'family',"id":'p14',"name":'Randall',"actor": "Ken Olfson","role":'wants to develop Miracles, working with Mr. Douglas',"image": "nodes/randallCircle.png"},
  {"type":'family',"id":'p17',"name":'Surveyor',"actor": "Daniel Riordan","role":'works for Randall and Mr. Douglas',"image": "nodes/surveyorCircle.png"},
  {"type":'family',"id":'p18',"name":'Bulldozer Driver',"actor": "Jim W. Jones","role":'works for Randall and Mr. Douglas',"image": "nodes/bulldozerDriverCircle.png"},

  {"type":'family',"id":'f6',"name":'City Hall',"image": "nodes/cityHallCircle.png"},//city hall

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
  {id:1,source:'f1',target:'f7',type:'member'},//miracles / ozone
  {id:1,source:'f1',target:'p24',type:'member'},//miracles / kimberly
  {id:2,source:'f1',target:'p5',type:'member'},//miracles
  {id:3,source:'f1',target:'p6',type:'member'},//miracles
  {id:4,source:'f1',target:'f4',type:'acquaintance'},//miracles / strobe
  {id:5,source:'f7',target:'f3',type:'tko'},//ozone
  {id:6,source:'p1',target:'p5',type:'partner'},//lucia / turbo
  {id:7,source:'f7',target:'p3',type:'ex-partner'},//ozone / 
  {id:8,source:'f7',target:'p4',type:'friend'},//ozone / pop n taco
  {id:8,source:'f3',target:'p4',type:'friend'},//kelly / pop n taco
  {id:8,source:'p5',target:'p4',type:'friend'},//turbo / pop n taco
  {id:9,source:'f7',target:'p5',type:'tko'},//ozone / turbo
  {id:12,source:'f7',target:'p6',type:'mentor'},//ozone / 
  {id:11,source:'p5',target:'p6',type:'mentor'},
  {id:13,source:'f3',target:'p3',type:'enemy'},
  {id:10,source:'f3',target:'p5',type:'tko'},
  {id:10,source:'p7',target:'f1',type:'member'},//magician / miracles
  {id:10,source:'p7',target:'f7',type:'friend'},//magician / ozone
  {id:10,source:'p15',target:'f7',type:'friend'},//coco / ozone
  {id:10,source:'p15',target:'f1',type:'member'},//coco / miracles
  {id:1,source:'p15',target:'p24',type:'friend'},//coco / kimberly
  {id:1,source:'f7',target:'p24',type:'friend'},//ozone / kimberly
  {id:1,source:'p5',target:'p24',type:'friend'},//turbo / kimberly
  {id:1,source:'f3',target:'p24',type:'friend'},//kelly / kimberly
  {id:10,source:'p21',target:'f1',type:'acquaintance'},//howard / miracles
  {id:10,source:'p21',target:'p14',type:'enemy'},//howard / randall
  {id:10,source:'p21',target:'f5',type:'enemy'},//howard / douglas
  {id:8,source:'f3',target:'p25',type:'employee'},//kelly / paris director

  {id:10,source:'p23',target:'f1',type:'acquaintance'},//emcee / miracles
  {id:10,source:'p23',target:'p5',type:'acquaintance'},//emcee / turbo
  {id:10,source:'p23',target:'f3',type:'acquaintance'},//emcee / kelly
  {id:10,source:'p23',target:'f7',type:'acquaintance'},//emcee / ozone

  {id:10,source:'p22',target:'f1',type:'acquaintance'},//singer / miracles
  {id:10,source:'p22',target:'p5',type:'acquaintance'},//singer / turbo
  {id:10,source:'p22',target:'f3',type:'acquaintance'},//singer / kelly
  {id:10,source:'p22',target:'f7',type:'acquaintance'},//singer / ozone


  //NURSES
  {id:9,source:'p20',target:'p5',type:'enemy'},//nurse / turbo

  //FAMILY 2 - Kelly's Family
  {id:8,source:'f3',target:'p8',type:'family'},
  {id:9,source:'f3',target:'p9',type:'family'},
  {id:9,source:'p8',target:'p9',type:'partner'},
  {id:16,source:'f3',target:'p16',type:'enemy'},//kelly / derek
  {id:16,source:'f3',target:'p19',type:'friend'},//kelly / rosa
  {id:16,source:'p8',target:'p19',type:'employee'},//mr. bennett / rosa
  {id:16,source:'p9',target:'p19',type:'employee'},//ms. bennett / rosa

  //FAMILY 3 - Electro-Rock Dancers
  {id:22,source:'f1',target:'p10',type:'member'},
  {id:20,source:'f1',target:'p13',type:'acquaintance'},
  {id:17,source:'f4',target:'f7',type:'rival'}, //strobe / ozone
  {id:18,source:'f4',target:'p11',type:'partner'},
  {id:19,source:'f4',target:'p13',type:'acquaintance'},
  {id:21,source:'f7',target:'p13',type:'acquaintance'},
  {id:21,source:'f7',target:'p10',type:'friend'},
  {id:23,source:'f7',target:'p10',type:'friend'},

  //Family 4 - City Hall people
  {id:26,source:'f5',target:'f6',type:'employee'},//douglas / city hall
  {id:26,source:'f1',target:'f6',type:'employee'},//miracles / city hall
  {id:26,source:'f6',target:'p12',type:'employee'},//city hall / snyder
  {id:26,source:'f6',target:'p14',type:'employee'},//city hall / randall

  {id:24,source:'f1',target:'p12',type:'enemy'},//miracles / snyder
  {id:27,source:'f1',target:'f5',type:'enemy'},
  {id:28,source:'f1',target:'p14',type:'enemy'},
  {id:26,source:'f5',target:'p14',type:'friend'},//douglas / randall
  {id:25,source:'f5',target:'p12',type:'friend'},//douglas / snyder 
  {id:26,source:'p12',target:'p14',type:'friend'},
  {id:26,source:'p17',target:'p14',type:'employee'},//surveyor / randall
  {id:26,source:'p17',target:'f5',type:'employee'},//surveyor / douglas
  {id:26,source:'p18',target:'p14',type:'employee'},//bulldozer / randall
  {id:26,source:'p18',target:'f5',type:'employee'}//bulldozer / douglas
]

//set the radius of the family nodes
var family_radius = 60;
var radius = 60;//this relates to the image width/height below, is half of it

//defining the chart
var myChart = familyChart().nodes(nodes)
                           .links(edges);

//defining the width and height of the svg
var topHeight = document.getElementById("top").offsetHeight
//console.log(topHeight);
var width = window.innerWidth, // default width
    height = window.innerHeight - topHeight;

// then, create your svg element and a <g> container
// for all of the transformed content
//.select selects 1st matching element
//.selectAll selects everything that matches
var svg = d3.select("body").append("svg") 
      .classed("svg-content", true)
      .attr("width", width)
      .attr("height", height)
      .style("background-color", "#161616");
      //.attr("viewBox", "0 0 " + width + " " + height);

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

function legend(){
  var x = document.getElementById("legend");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function familyChart() {

  var nodes = [],
      links = [] // default height

  function my(svg) {

 

//==========need to experiment with different forces=============

    //set the repel force - may need to be tweaked for multiple data
    //the lower the strength the more they will repel away from each other
    //the larger the distance, the more apart they will be
    var repelForce = d3.forceManyBody().strength(-20000).distanceMax(90000000)
                       .distanceMin(15);

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
                       .force("yAxis",d3.forceY(height/2).strength(0.6))
                       .force("repelForce",repelForce)
                       .force("link", d3.forceLink().id(function(d) { return d.id }).distance(dist).strength(1.5))
                       .force("collide",d3.forceCollide().radius(function(d) { return d.r * 20; }).iterations(10).strength(1))
                       .force("charge", d3.forceManyBody().strength(-40))

    function dist(d){
      //used by link force
      return 150
    }

//===========need to experiment with different stroke thickness, color and style============
    //define the links
    var links = g.selectAll("foo")
        .data(edges)//load links array
        .enter()
        .append("line")
        .attr("stroke-width",function(d){
          //stroke width - thicker if partner/mentor/tko/rival
            if(d.type == 'partner'){
              return "8px"
            } else if (d.type=="friend"){
              return "6px"
            } else if (d.type=="mentor"){
              return "5px"
            } else if (d.type=="member" || d.type=="family" || d.type=="enemy" || d.type=="rival"){
              return "4px"
            } else if (d.type=="tko"){
              return "10px"
            } else{
              return "2px"
            }})
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
          if(d.type=="member" || d.type =='friend' || d.type=='rival'){
            return "3px"
          }
        })
      .attr("stroke", function(d){  //grey unless mentor (yellow), member / acquaintance (orange), or friend (yellow)
        switch (d.type) {
          case 'tko':
            return '#a82d34';//bright red
          case 'friend':
            return "#e15a79";//hot pink 
          case 'member':
            return "#fbc441";//light yellow
          case 'mentor':
            return "#f97302";//dark orange
          case 'acquaintance':
            return "#660099";//#fbc441 light yellow
          case 'partner':
            return "#ff9088";//light pink
          case 'enemy':
            return "#32cffc";//light blue 
          case 'rival':
            return "#9999ff";//purple
            case 'family':
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
        .data(nodes)//load nodes array
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
        .attr("height", "120")//makes image smaller
        .attr("width", "120")//makes image smaller
        .attr("x", 0)
        .attr("y", 0);

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

          links.attr("x1", function(d) {//left x1 coord
            if(d.source.x < radius/2){
              d.source.x = radius/2;
            }if(d.source.x > width - radius/2){//right x1 coord
              d.source.x = width - radius/2;
            }
            return d.source.x;}
            )
             .attr("y1", function(d) { //top y1 coord
              if(d.source.y < radius/2){
                d.source.y = radius/2;
                //console.log(d.source.y);
              }
              if(d.source.y > height - (radius/2)) {//bottom y1 coord
                d.source.y = height - (radius/2);
              }
               return d.source.y;}
               )
             .attr("x2", function(d) {//left x2 coord
              if (d.target.x < radius/2){
                d.target.x = radius/2;
              }
              if (d.target.x > width - radius/2){//right x2 coord
                d.target.x = width - radius/2;
              }
              return d.target.x;}
              )
             .attr("y2", function(d) {//top y2 coord
              if(d.target.y < radius/2){
                d.target.y = radius/2;
              }
              if (d.target.y > height - (radius/2)){//bottom y2 coord
                d.target.y = height - radius/2;
                console.log(height-radius/2);
              }
              return d.target.y;});
        
      //make nodes stay within bounds of window
      node.attr("transform", function(d){ return "translate(" + Math.max(radius, Math.min(width - radius, d.x)) + "," + Math.max(radius, Math.min(height - radius, d.y)) + ")"})
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



var mouse_in_window = true;
document.addEventListener('mousedown', function(evt){
  console.log('Mouse down');
})

    function dragged(d) {
      //make links stay within confines of window
      if(mouse_in_window){
        console.log(d3.event.x > width);
        if(d3.event.x >= radius / 2 && d3.event.x <= width - radius / 2){
          if(d3.event.y >= radius / 2 && d3.event.y <= height - radius / 2){
            d.fx = d3.event.x;
            d.fy = d3.event.y;
          }
        }
      }
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
