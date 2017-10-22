/*
This is empty on purpose! Your code to build the resume will go here.
 */

/*
 $('#main').append('Jolyon Favreau');
 var awesomeThoughts = 'I am Joz and I am AWESOME!';
 console.log(awesomeThoughts);
 var funThoughts = awesomeThoughts.replace('AWESOME','FUN');
 $('#main').append(funThoughts);
 console.log(funThoughts);
 */
var formattedName = HTMLheaderName.replace('%data%','Jolyon Favreau');
var formattedRole = HTMLheaderRole.replace('%data%','Frontend Developer');

 $('#header').prepend(formattedName).append(formattedRole);


 // var s = "audacity";
 //
 // var udacityizer = function(s) {
 //     // Right now, the variable s === "audacity"
 //     // Manipulate s to make it equal to "Udacity"
 //     // Your code goes here!
 //     s = 'U' + s.slice(2);
 //    // s = s.charAt(1).toUpperCase() + s.slice(2);
 //
 //     return s;
 // };
 //
 // // Did your code work? The line below will tell you!
 // console.log(udacityizer(s));
 //
 // var sampleArray = [0,0,7];
 //
 // var incrementLastArrayElement = function(_array) {
 //     var newArray = [];
 //     // Your code should make newArray equal to an array that has the same
 //     // values as _array, but the last number has increased by one.
 //
 //     // For example:
 //     // _array = [1, 2, 3];
 //     // turns into:
 //     // newArray = [1, 2, 4];
 //
 //    newArray =  _array.slice(0);
 //    var lastnumber = newArray.pop();
 //    newArray.push(1 + lastnumber);
 //     // Don't delete this line!
 //     return newArray;
 // };
 //
 // // Did your code work? The line below will tell you!
 // console.log(incrementLastArrayElement(sampleArray));

 var name = "AlbERt EINstEiN";

 function nameChanger(oldName) {
     var finalName = oldName;
     // Your code goes here!
     names = oldName.split(" ");
     var last = names[1].toUpperCase();
     var first = names[0].slice(0,1) + names[0].slice(1).toLowerCase();
     var finalName = names.join(' ');


     // Don't delete this line!
     return finalName;
 };

 // Did your code work? The line below will tell you!
 console.log(nameChanger(name));
