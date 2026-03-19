function saveData() {
localStorage.setItem("fiche", JSON.stringify({
client: document.getElementById("client").value,
vehicule: document.getElementById("vehicule").value,
km: document.getElementById("km").value,
obs: document.getElementById("obs").value
}));
alert("Sauvegardé");
}

function resetData() {
localStorage.removeItem("fiche");
location.reload();
}

window.onload = () => {
let data = JSON.parse(localStorage.getItem("fiche"));
if(data){
document.getElementById("client").value = data.client || "";
document.getElementById("vehicule").value = data.vehicule || "";
document.getElementById("km").value = data.km || "";
document.getElementById("obs").value = data.obs || "";
}
}
