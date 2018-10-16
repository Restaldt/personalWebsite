function homeFunction(){

	//alert("Home Button Clicked");

	document.getElementById("homeBlock").style.display = "block";
	document.getElementById("ipfsBlock").style.display = "none";
	document.getElementById("projectsBlock").style.display = "none";
	document.getElementById("transcriptBlock").style.display = "none";

}

function ipfsFunction(){
	//alert("IPFS button clicked");
	document.getElementById("homeBlock").style.display = "none";
	document.getElementById("ipfsBlock").style.display = "block";
	document.getElementById("projectsBlock").style.display = "none";
	document.getElementById("transcriptBlock").style.display = "none";

}

function projectsFunction(){

	document.getElementById("homeBlock").style.display = "none";
	document.getElementById("ipfsBlock").style.display = "none";
	document.getElementById("projectsBlock").style.display = "block";
	document.getElementById("transcriptBlock").style.display = "none";
}
