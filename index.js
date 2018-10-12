function loadIssue() {
  var template = Handlebars.compile(document.getElementById("issue-template").innerHTML);
  for(var i=0;i<issues.length;i++) {
    var result = template(issues[i]);
    document.getElementsByTagName("main")[0].innerHTML += result;
  }
}


/*
function loadIssue() {
  var issue = {
    state: "closed",
    number: 5,
    created_at: "2016-03-31 16:23:13 UTC",
    body: "Instructions say GET /team and POST /newteam. Rspec wants GET/newteam and POST/team."
  }

  //"compile" markup and delimiters as part of a function that we can call with our context to output a rendered HTML string in var result = template(issue)
   //we could call template() again and get the same template rendered with the new data

  var template = Handlebars.compile(document.getElementById("issue-template").innerHTML);
  var result = template(issue);
  document.getElementsByTagName("main")[0].innerHTML += result;
}
*/
