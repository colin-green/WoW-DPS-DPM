$("button").click(function() {

    var spellName = prompt("What is the name/rank of your spell?");
    console.log(`Spell Name: ${spellName}`);
    
    var minDmg = Number(prompt("What is the minimum damage of your spell?"));
    console.log(`Minimum Damage: ${minDmg}`);
    
    var maxDmg = Number(prompt("What is the maximum damage of your spell?"));
    console.log(`Maximum Damage: ${maxDmg}`);
    
    var avgDmg = (minDmg + maxDmg) / 2;
    console.log(`Average Damage: ${avgDmg}`)
    
    var castTime = Number(prompt("What is the cast time of your spell?"));
    console.log(`Cast Time: ${castTime}`);
    
    var manaCost = Number(prompt("What is the mana cost of your spell?"));
    console.log(`Mana Cost: ${manaCost}`);
    
    var dps = avgDmg / castTime;
    console.log(`Damage per second: ${dps.toFixed(2)}`);
    
    var dpm = avgDmg / manaCost;
    console.log(`Damage per mana: ${dpm.toFixed(2)}`);
    
    $("#display").append(`<h4><u>${spellName}</u></h4>`);
    $("#display").append(`Damage/healing per second: ${Number(dps.toFixed(2))}<br>`);
    $("#display").append(`Damage/healing per mana: ${Number(dpm.toFixed(2))}<br>`);

})

