// Place to handle all autoPortal logic

setTimeout(autoPortal, 2000);

function autoPortal()
{
    console.log("got here");
    if(game.global.challengeActive === "")
    {
        portalClicked();
        buyPortalUpgrade('Carpentry');
        selectChallenge('Electricity');
        activateClicked();
        activatePortal();
    }
    setTimeout(autoPortal, 20);
}
