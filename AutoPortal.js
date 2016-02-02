// Place to handle all autoPortal logic

setTimeout(autoPortal, 2000);
var chal_fin=false;
var chal_fin_time=0
function autoPortal()
{
    if(!chal_fin && game.global.challengeActive === "")
    {
        chal_fin=true;
        chal_fin_time=getMinutesThisPortal();
    }
    if(chal_fin && getMinutesThisPortal()-chal_fin_time>60)
    {
        chal_fin=false;
        portalClicked();
        buyPortalUpgrade('Carpentry');
        selectChallenge('Crushed');
        activateClicked();
        activatePortal();
    }
    setTimeout(autoPortal, 2000);
}
