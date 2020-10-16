var quotes=["quotes 1","quotes2", "Quotes3", "Quotes4"];
  
function generate(){
  let random = Math.floor(Math.random() * quotes.length);
  console.log(quotes[random]);
  document.getElementById('quoteSection').innerHTML=quotes[random];
}

function seeAllQuotes(){
  text = "<ul>";  //create bullet
  for (i=0; i<quotes.length; i++){
      text  += "<li>" + quotes[i] + "</li>";
  }
  text += "</ul>";
  document.getElementById("quoteSection").innerHTML = text;
}

function newQuotes(){
  var newQuotes = document.getElementById("insertSection").value;
  alert("quotes added");
  quotes.push(newQuotes);
  seeAllQuotes();
}