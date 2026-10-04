let mission = "";
let rocket = "";

let cost = 0;
let weight = 0;
let equipmentCount = 0;

let missionCost = 0;
let missionWeight = 0;

let rocketCapacity = 0;


function selectMission(name, price, mass) {
    mission = name;

    missionCost = price;
    missionWeight = mass;

    updateScreen();
}


function selectRocket(name, price, capacity) {
    rocket = name;

    cost = missionCost + price;
    weight = missionWeight;

    rocketCapacity = capacity;

    updateScreen();
}


function addEquipment(name, price, mass) {

    if (cost + price > 100) {
        alert("❌ Byudjet yetarli emas!");
        return;
    }

    if (weight + mass > rocketCapacity) {
        alert("❌ Raketaning massa limiti oshib ketadi!");
        return;
    }

    cost += price;
    weight += mass;

    equipmentCount++;

    updateScreen();
}


function updateScreen() {

    document.getElementById("mission").textContent =
        mission || "Tanlanmagan";

    document.getElementById("rocket").textContent =
        rocket || "Tanlanmagan";

    document.getElementById("equipment").textContent =
        equipmentCount;

    document.getElementById("cost").textContent =
        cost;

    document.getElementById("weight").textContent =
        weight;
}


function launchMission() {

    if (mission === "" || rocket === "") {
        document.getElementById("result").textContent =
            "❌ Avval maqsad va raketani tanlang!";
        return;
    }

    if (cost > 100) {
        document.getElementById("result").textContent =
            "❌ Byudjetdan oshib ketdingiz!";
        return;
    }

    if (weight > rocketCapacity) {
        document.getElementById("result").textContent =
            "❌ Raketa yukni ko'tara olmaydi!";
        return;
    }

    document.getElementById("result").textContent =
        "🎉 MISSIYA MUVAFFAQIYATLI! 🚀";
}


function resetGame() {

    mission = "";
    rocket = "";

    cost = 0;
    weight = 0;
    equipmentCount = 0;

    missionCost = 0;
    missionWeight = 0;
    rocketCapacity = 0;

    document.getElementById("result").textContent = "";

    updateScreen();
}