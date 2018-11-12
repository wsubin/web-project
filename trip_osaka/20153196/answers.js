function answer_1() {
  document.getElementById("q1-answer").innerHTML = "<ul><li>D - Document</li><li>O - Object</li><li>M - Model</li></ul>";
}

function answer_2() {
  document.getElementById("q2-answer").innerHTML = "<ol><li>Javascript can react to events happening in	a page such as button click.</li><li>Javascript can add or remove existing elements and attributes.</li></ol>"
}

function answer_3() {
   var a = document.getElementsByClassName("q34-answer");
   a[0].innerHTML = "The direct ancestor of the specific node called parent node.<br/> The direct descendant of the specific node is called children node.<br/>The nodes which have same parents called sibling nodes. <br/>The node that belong to the bottom of the specific node called descendant node.<br/>The node that higher than the specific node called ancestor node.";
}

function answer_4() {
  var t = document.getElementsByClassName("q34-answer");
  t[1].innerHTML = "The getElementById() method returns the element that has the ID attribute with the specified value.<br/> The getElementsByClassName() method returns a collection of all elements in the document with the specified class name, as a NodeList object.<br/> The getElementsByName() method returns a collection of all elements in the document with the specified name (the value of the name attribute), as a NodeList object.<br/> The getElementsByTagName() method returns a collection of all elements in the document with the specified tag name, as a NodeList object.<br/> The getElementById() method returned one element.<br/> The getElementsByClassName(), getElementsByName() and getElementsByTagName() method returned many elements.";
}
