// Place to handle all autoPortal logic

init()
function init()
{
  //create the elements, and place them in the right place.
  var btn = document.createElement("DIV");
  btn.setAttribute('id','autoP');
  btn.setAttribute('class', 'noselect pointer challengeThing thing ');
  btn.setAttribute("onclick", 'selectAutoPortalSettings()');
  var spn =document.createElement("span");
  spn.setAttribute('class','thingName');
  spn.textContent='Auto Portal';
  btn.appendChild(spn);
  
  document.getElementById("challengesHere").appendChild(btn);

}
selectAutoPortalSettings()
{
//test
document.getElementById("specificChallengeDescription").innerHTML = '<div class="noselect pointer challengeThing thing " id="challengeElectricity" onclick="selectChallenge("Electricity")"><span class="thingName">Electricity</span></div>';
}
