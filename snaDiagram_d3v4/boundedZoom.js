////does not zoom into where the mouse is
// first, define your viewport dimensions
//this number connects with .attr(viewBox) works best when ===
var width = 300,
   height = 300;

    //defining the width and height of the svg
    //is there a way to connect this to the attr("viewBox")?
//var width = window.innerWidth, // default width
 //  height = window.innerHeight;

// then, create your svg element and a <g> container
// for all of the transformed content
//.select selects 1st matching element
//.selectAll selects everything that matches
var svg = d3.select("body").append("svg")
  //preserveAspectRatio = indicates how element w/ViewBox providing aspect ratio must fit into a viewport with a diff ratio
  //xMinYMin = uniform force scaling (align min-x of element's viewBox w/smallest X value of the viewport)
  //meet = entire viewBox visible in viewport, scaled up as much as possible  
      .attr("preserveAspectRatio", "xMaxYMax meet")
  //min-x, min-y, width, height
      .attr("viewBox", "0 0 300 300")
      .classed("svg-content", true)
      //.attr("width", width)
      //.attr("height", height)
      .style("background-color", "#161616"),
    g = svg.append("g");

// then, create the zoom behvavior
var zoom = d3.zoom()
  // only scale up, e.g. between 1x and 50x
  .scaleExtent([1, 50])
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
// <g> elements' children!
svg.call(zoom);

// then, let's add some circles

var circle = g.selectAll("circle")
  .data(d3.range(300).map(function(i) {
    return {
      x: Math.random() * width,
      y: Math.random() * height,
      r: .01 + Math.random() * 50,
      color: randomColor()
    };
  }).sort(function(a, b) {
    return d3.descending(a.r, b.r);
  }))
  .enter()
  .append("circle")
    .attr("fill", function(d) { return d.color; })
    .attr("cx", function(d) { return d.x; })
    .attr("cy", function(d) { return d.y; })
    .attr("r", function(d) { return d.r; });

function randomColor() {
  return "hsl(" + ~~(60 + Math.random() * 180) + ",80%,60%)";
}

