links = { // possible d'ajouter plusieurs url à une domaine en rajoutant " " ou "/" à la fin de la clef
	"alphabounce" : "http://www.alphabounce.com/",
	"arkadeo" : "http://arkadeo.com/",
	"cafejeux" : "http://www.cafejeux.com/",
	"carapass" : "http://www.carapass.com/",
	"croquemonster" : "http://www.croquemonster.com/",
	"muxxu/hotel" : "http://hotel.muxxu.com/",
	"dinorpg" : "http://www.dinorpg.com/",
	"dinocard" : "http://www.dinocard.net/",
	"dinoparc" : "http://www.dinoparc.com/",
	"muxxu/fever" : "http://fever.muxxu.com/",
	"galaxy55" : "http://galaxy55.com/",
	"hammerfest" : "http://www.hammerfest.fr/",
	"hordes" : "http://www.hordes.fr/",
	"hyperliner" : "http://www.hyperliner.com/",
	"muxxu/intrusion" : "http://intrusion.muxxu.com/",
	"kadokado" : "http://www.kadokado.com/",
	"muxxu/kingdom" : "http://kingdom.muxxu.com/",
	"muxxu/kube" : "http://kube.muxxu.com/",
	"labourinette" : "http://www.bourinette.com/",
	"muxxu/labrute" : "http://labrute.muxxu.com/",
	"muxxu/majority" : "http://majority.muxxu.com/",
	"minitroopers" : "http://minitroopers.fr/",
	"miniville" : "http://www.miniville.fr/",
	"monlapin" : "http://www.monlapin.net/",
	"mush" : "http://mush.vg/",
	"naturalchimie2" : "http://www.naturalchimie.com/",
	"muxxu/odyssey" : "http://odyssey.muxxu.com/",
	"popotamo" : "http://www.popotamo.com/",
	"skywar" : "http://www.skywar.net/",
	"teacherstory" : "http://www.teacher-story.fr/",
	"muxxu/snake" : "http://snake.muxxu.com/",
	"studioquiz2" : "http://quiz.muxxu.com/",
	"twinoid" : "http://twinoid.com/"
}
function checkForValidUrl(tabId, changeInfo, tab) {
	for(key in links)
	{
		if (tab.url.substring(0,links[key].length) == links[key]) {
			chrome.pageAction.show(tabId);
			break;
		}
	}
};

chrome.tabs.onUpdated.addListener(checkForValidUrl);
chrome.pageAction.onClicked.addListener(function(tab) {
	for(key in links)
	{
		if (tab.url.substring(0,links[key].length) == links[key]) {
			window.open("http://www.twinpedia.com/"+key);
			break;
		}
	}
});