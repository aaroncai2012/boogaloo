//each person needs a node
//AND each family needs a node

var nodes = [

  //Ozone's crew
  {"type":'family',"id":'f1',"name":'Miracles Community Center', "actor": 'Adolfo "Shabba Doo" Quiñones', "group": "TKO Crew", "image":"nodes/miraclesCircle.png"},// Ozone
  {"type":'person',"id":'p1',"name":'Lucia',"actor": "Sabrina Garcia", "role":"Turbo's Partner","image": "nodes/luciaCircle.png"},//lucia
  {"type":'person',"id":'p2',"name":'Orlando "Ozone" Barco', "actor": 'Adolfo "Shabba Doo" Quiñones', "group": "TKO Crew", "image":"nodes/ozoneCircle.png"},//ozone
  {"type":'person',"id":'p3',"name":'Rhonda',"actor": "Suzie Bono", "role":"Ozone's ex-partner, Kelly's enemy" ,"image": "nodes/rhondaYCircle.png"},//rhonda
  {"type":'person',"id":'p4',"name":'Pop n Taco',"actor": "Bruno Falcon", "role":"friend of TKO" ,"image": "nodes/popNTacoCircle.png"},//pop n taco
  {"type":'person',"id":'p5',"name":'Tony "Turbo" Ainley','actor': 'Michael "Boogaloo Shrimp" Chambers',"group": "TKO Crew","image": "nodes/turboCircle.png"},//turbo
  {"type":'person',"id":'p6',"name":"Byron","actor":'Harry Caesar',"role":'Mentor at Miracles',"image": "nodes/byronCircle.png"},//byron
  {"type":'person',"id":'p7',"name":"Magician","actor":'',"role":'friend of TKO, member of Miracles',"image": "nodes/magicianCircle.png"},//magician
  {"type":'person',"id":'p15',"name":'Coco',"actor":'Vidal "Coco" Rodriguez', "role": 'friend of TKO, member of Miracles',"image": "nodes/cocoCircle.png"},//coco

  //Kelly's family
  {"type":'family',"id":'f3',"name":'Kelly "Special K" Bennett',"actor": "Lucinda Dickey", "group": "TKO Crew","image" : "nodes/kellyCircle.png"},// kelly
  {"type":'person',"id":'p8',"name":'Mr. Bennett',"actor": "John Christy Ewing", "role": "Kelly's dad","image": "nodes/mrBennettCircle.png"}, // mr. bennett
  {"type":'person',"id":'p9',"name":'Mrs. Bennett',"actor": "Jo de Winter", "role": "Kelly's mom","image": "nodes/msBennettCircle.png"}, // mrs. bennett
  {"type":'person',"id":'p16',"name":'Derek',"actor": "Nick Segal", "role": "Kelly's fiance and enemy","image": "nodes/derekCircle.png"}, // derek

  //Electro Rock Dancers
  {"type":'family',"id":'f4',"name":'Strobe',"actor": 'Steve "Sugarfoot" Notario', "group": "Electro-Rock", "role": "rival of Ozone, supporter of Miracles", "image":"nodes/strobeCircle.png"},
  {"type":'person',"id":'p10',"name":'Featured Street Dancer TKO',"actor":'Derek "Cooley Bop" Jackson', "role": "dancer for TKO crew, member of Miracles","image": "nodes/cooleyCircle.png"},
  {"type":'person',"id":'p11',"name":'Lollipop',"actor": 'Ana "Lollipop" Sanchez', "role":"Electro-Rock dancer, Strobe's dance partner", "image": "nodes/electroRockGirlYCircle.png"},
  {"type":'person',"id":'p13',"name":'Radiotron Rapper',"actor": "Ice T", "role": "aquaintance of Electro-Rock, TKO and Miracles","image": "nodes/radiotronCircle.png"},
  
  //Enemies
  {"type":'family',"id":'f5',"name":'Mr. Douglas', "actor": "Peter MacLean", "role":"enemy of TKO, Miracles, works with Randall", "image":"nodes/douglasCircle.png"},
  {"type":'person',"id":'p12',"name":'Mrs. Snyder',"actor": "Sandy Lipton", "role": "city official, sympathetic yet an enemy to Miracles","image": "nodes/snyderCircle.png"},
  {"type":'person',"id":'p14',"name":'Randall',"actor": "Ken Olfson","role":'wants to develop Miracles, working with Mr. Douglas',"image": "nodes/randallCircle.png"}


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
  {id:1,source:'f1',target:'p2',type:'member'},//miracles / ozone
  {id:2,source:'f1',target:'p5',type:'member'},//miracles
  {id:3,source:'f1',target:'p6',type:'member'},//miracles
  {id:4,source:'f1',target:'f4',type:'acquaintance'},//miracles / strobe
  {id:5,source:'p2',target:'f3',type:'tko'},//ozone
  {id:6,source:'p1',target:'p5',type:'partner'},//lucia / turbo
  {id:7,source:'p2',target:'p3',type:'ex-partner'},//ozone / 
  {id:8,source:'p2',target:'p4',type:'friend'},//ozone / pop n taco
  {id:9,source:'p2',target:'p5',type:'tko'},//ozone / turbo
  {id:12,source:'p2',target:'p6',type:'mentor'},//ozone / 
  {id:11,source:'p5',target:'p6',type:'mentor'},
  {id:13,source:'f3',target:'p3',type:'enemy'},
  {id:10,source:'f3',target:'p5',type:'tko'},
  {id:10,source:'p7',target:'f1',type:'member'},//magician / miracles
  {id:10,source:'p7',target:'p2',type:'friend'},//magician / ozone
  {id:10,source:'p15',target:'p2',type:'friend'},//coco / ozone
  {id:10,source:'p15',target:'f1',type:'member'},//coco / miracles

  //FAMILY 2 - Kelly's Family
  {id:8,source:'f3',target:'p8',type:'family'},
  {id:9,source:'f3',target:'p9',type:'family'},
  {id:9,source:'p8',target:'p9',type:'partner'},
  {id:16,source:'f3',target:'p16',type:'enemy'},//kelly / derek

  //FAMILY 3 - Electro-Rock Dancers
  {id:22,source:'f1',target:'p10',type:'member'},
  {id:20,source:'f1',target:'p13',type:'acquaintance'},
  {id:17,source:'f4',target:'p2',type:'rival'}, //strobe / ozone
  {id:18,source:'f4',target:'p11',type:'partner'},
  {id:19,source:'f4',target:'p13',type:'acquaintance'},
  {id:21,source:'p2',target:'p13',type:'acquaintance'},
  {id:21,source:'p2',target:'p10',type:'friend'},
  {id:23,source:'p2',target:'p10',type:'friend'},

  //Family 4 - City Hall people
  {id:24,source:'f1',target:'p12',type:'enemy'},//miracles / snyder
  {id:27,source:'f1',target:'f5',type:'enemy'},
  {id:28,source:'f1',target:'p14',type:'enemy'},
  {id:26,source:'f5',target:'p14',type:'friend'},//douglas / randall
  {id:25,source:'f5',target:'p12',type:'friend'},//snyder / douglas
  {id:26,source:'p12',target:'p14',type:'friend'}

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
                       //.alphaDecay(0.04)
                       //.velocityDecay(0.4)
                       //.force("center", d3.forceCenter(width / 2, height / 2))
                       .force("xAxis",d3.forceX(width/2).strength(0.4))
                       .force("yAxis",d3.forceY(height/2).strength(0.6))
                       .force("repelForce",repelForce)
                       .force("link", d3.forceLink().id(function(d) { return d.id }).distance(dist).strength(1.5))
                       .force("collide",d3.forceCollide().radius(function(d) { return d.r * 20; }).iterations(10).strength(1))

    function dist(d){
      //used by link force
      return 100
    }

//===========need to experiment with different stroke thickness, color and style============
    //define the links
    var links = g.selectAll("foo")
        .data(edges)
        .enter()
        .append("line")
        .attr("stroke-width",function(d){
          //stroke width - thicker if partner/mentor/tko/rival
            if(d.type == 'partner' || d.type =='mentor' || d.type=="tko" || d.type=="rival"){
              return "4px"
            } else{
              return "2px"
            }})
        .attr("stroke-dasharray", function(d){ //dashed if ex or acquaintance
          if(d.type=="ex-partner" || d.type=="acquaintance"){
            return "6,6"
          } else{
            return "0"
          }
          if(d.type=="enemy"){
            return "2px"
          }
          //stroke width - thicker if member/friend
          if(d.type=="member" || d.type =='friend'){
            return "3px"
          }
        })
      .attr("stroke", function(d){  //grey unless mentor (yellow), member / acquaintance (orange), or friend (yellow)
        switch (d.type) {
          case 'tko':
            return '#9b5de5';//Amethyst
          case 'mentor':
            return "#554348";//Dark Liver
          case 'friend':
            return "#00bbf9";//Capri
          case 'member':
            return "#fee440";//Minion Yellow
          case 'acquaintance':
            return "#00bbf9";//Capri
          case 'partner':
            return "#f15bb5";//Magenta Crayola
          case 'enemy':
            return "#ff1d15";//Red RYB 
          case 'rival':
            return "#f1dede" //misty rose
          case 'family':
            return "#00f5d4";//Sea Green Crayola
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
          if(str[i].charAt(0) == '"') {
            //console.log(str[i].charAt(1))
            str[i] = '"'+ str[i].charAt(1).toUpperCase() + str[i].slice(2);
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
