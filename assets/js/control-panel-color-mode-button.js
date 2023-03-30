// function to change class

function changeColor($elm, classes) {                
  var className = $elm.attr('class');                
  var index = $.inArray(className, classes);

  $elm.removeClass(className);
  index++;                
  if (index === classes.length) {
  index = 0;
  }
  $elm.addClass(classes[index]);                
  }        

// equivalent to $(document).ready

  $(function(){            

// cache button element
  var $button = $("#color-mode-button");
  var classes = ["hotpink","black","navy","darkblue","mediumblue","blue","darkgreen","green","teal","darkcyan","deepskyblue","darkturquoise","mediumspringgreen","lime","springgreen","aqua","cyan","midnightblue","dodgerblue","lightseagreen","forestgreen","seagreen","darkslategray","darkslategrey","limegreen","mediumseagreen","turquoise","royalblue","steelblue","darkslateblue","mediumturquoise","indigo","darkolivegreen","cadetblue","cornflowerblue","rebeccapurple","mediumaquamarine","dimgray","dimgrey","slateblue","olivedrab","slategray","slategrey","lightslategray","lightslategrey","mediumslateblue","lawngreen","chartreuse","aquamarine","maroon","purple","olive","gray","grey","skyblue","lightskyblue","blueviolet","darkred","darkmagenta","saddlebrown","darkseagreen","lightgreen","mediumpurple","darkviolet","palegreen","darkorchid","yellowgreen","sienna","brown","darkgray","darkgrey","lightblue","greenyellow","paleturquoise","lightsteelblue","powderblue","firebrick","darkgoldenrod","mediumorchid","rosybrown","darkkhaki","silver","mediumvioletred","indianred","peru","chocolate","tan","lightgray","lightgrey","thistle","orchid","goldenrod","palevioletred","crimson","gainsboro","plum","burlywood","lightcyan","lavender","darksalmon","violet","palegoldenrod","lightcoral","khaki","aliceblue","honeydew","azure","sandybrown","wheat","beige","whitesmoke","mintcream","ghostwhite","salmon","antiquewhite","linen","lightgoldenrodyellow","oldlace","red","fuchsia","magenta","deeppink","orangered","tomato","hotpink","coral","darkorange","lightsalmon","orange","lightpink","pink","gold","peachpuff","navajowhite","moccasin","bisque","mistyrose","blanchedalmond","papayawhip","lavenderblush","seashell","cornsilk","lemonchiffon","floralwhite","snow","yellow","lightyellow","ivory"];

// attach event with $button
  $button.on("click", function (){
  changeColor($("body,header,nav,figcaption,section#about,section#news,div#team section,footer"), classes);
});
});