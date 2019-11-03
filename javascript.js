var coefficients = {
    frostbolt: 0.814,
    frostnova: 0.1357,
    coneofcold: 0.1357,
    blizzard: 0.33,
    arcaneexplosion: 0.1428,
    arcanemissiles: 1,
    fireblast: 0.4285,
    fireball: 1,
    pyroblast: 1,
    scorch: 0.4285,
    blastwave: 0.1357,
    flamestrike: 0.1761,
    icebarrier: 0.1,
    shadowbolt: 0.8571,
    soulfire: 1,
    searingpain: 0.4285,
    immolatedirect: 0.1865,
    immolatedot: 0.6363,
    conflagrate: 0.4285,
    rainoffire: 0.33,
    hellfire: 0.33,
    corruption: 1,
    curseofagony: 1,
    curseofdoom: 1,
    drainsoul: 1,
    siphonlife: 0.5,
    drainlife: 0.5,
    deathcoil: 0.2142,
    shadowburn: 0.4285,
    prayerofhealing: 0.2857,
    shadowwordpain: 1,
    mindflay: 0.45,
    mindblast: 0.4285,
    manaburn: 0,
    smite: 0.7142,
    holyfire: 0.5999,
    holynova: 0.0714,
    powerwordshield: 0.1,
    lesserheal: 0.7142,
    heal: 0.8571,
    flashheal: 0.4285,
    greaterheal: 0.8571,
    devouringplague: 0.5,
    renew: 1,
}

function getData() {

    var spellName = $("#spell-name").val().trim();
    var spellRank = $("#spell-rank").val().trim();
    var minDmg = parseInt($("#min-dmg").val().trim());
    var maxDmg = parseInt($("#max-dmg").val().trim());
    var castTime = parseInt($("#cast-time").val().trim());
    var manaCost = parseInt($("#mana-cost").val().trim());
    var spellPower = parseInt($("#spell-power").val().trim());

    $("#spell-name").val("");
    $("#spell-rank").val("");
    $("#min-dmg").val("");
    $("#max-dmg").val("");
    $("#cast-time").val("");
    $("#mana-cost").val("");

    console.log("Initial Values:");
    console.log(`MinDmg: ${minDmg}`);
    console.log(`MaxDmg: ${maxDmg}`);
    console.log(`Cast Time: ${castTime}`);
    console.log(`Mana Cost: ${manaCost}`);
    console.log(`Spell Power: ${spellPower}`);

    var fullSpellName = spellName;
    var spellCoefficient;
    var effectiveSpellPower;

    if (spellRank) {
        fullSpellName += ` (Rank ${spellRank})`
    }

    // Only has Mage, Warlock, and Priest coeffs atm
    switch (spellName.toLowerCase()) {
        case "frostbolt":
            spellCoefficient = coefficients.frostbolt;         
            break;
        
        case "frost nova":
            spellCoefficient = coefficients.frostnova;         
            break;
        
        case "cone of cold":
            spellCoefficient = coefficients.coneofcold;         
            break;
        
        case "blizzard":
            spellCoefficient = coefficients.blizzard;         
            break;
        
        case "arcane explosion":
            spellCoefficient = coefficients.arcaneexplosion;         
            break;
        
        case "arcane missiles":
            spellCoefficient = coefficients.arcanemissiles;         
            break;
        
        case "fire blast":
            spellCoefficient = coefficients.fireblast;         
            break;
        
        case "fireball":
            spellCoefficient = coefficients.fireball;         
            break;
        
        case "pyroblast":
            spellCoefficient = coefficients.pyroblast;         
            break;
        
        case "scorch":
            spellCoefficient = coefficients.scorch;         
            break;
        
        case "blast wave":
            spellCoefficient = coefficients.blastwave;         
            break;
        
        case "flamestrike":
            spellCoefficient = coefficients.flamestrike;         
            break;
        
        case "ice barrier":
            spellCoefficient = coefficients.icebarrier;         
            break;
        
        case "shadow bolt":
            spellCoefficient = coefficients.shadowbolt;         
            break;
        
        case "soulfire":
            spellCoefficient = coefficients.soulfire;         
            break;
        
        case "searing pain":
            spellCoefficient = coefficients.searingpain;         
            break;
        
        case "immolate direct":
            spellCoefficient = coefficients.immolatedirect;         
            break;
        
        case "immolate dot":
            spellCoefficient = coefficients.immolatedot;      
            break;
        
        case "conflagrate":
            spellCoefficient = coefficients.conflagrate;         
            break;
        
        case "rain of fire":
            spellCoefficient = coefficients.rainoffire;         
            break;
        
        case "hellfire":
            spellCoefficient = coefficients.hellfire;         
            break;
        
        case "corruption":
            spellCoefficient = coefficients.corruption;         
            break;
        
        case "curse of agony":
            spellCoefficient = coefficients.curseofagony;         
            break;
        
        case "curse of doom":
            spellCoefficient = coefficients.curseofdoom;         
            break;
        
        case "drain soul":
            spellCoefficient = coefficients.drainsoul;         
            break;
        
        case "siphon life":
            spellCoefficient = coefficients.siphonlife;         
            break;
        
        case "drain life":
            spellCoefficient = coefficients.drainlife;         
            break;
        
        case "death coil":
            spellCoefficient = coefficients.deathcoil;         
            break;
        
        case "shadowburn":
            spellCoefficient = coefficients.shadowburn;         
            break;
        
        case "prayer of healing":
            spellCoefficient = coefficients.prayerofhealing;         
            break;
        
        case "shadow word: pain":
        case "shadow word pain":
            spellCoefficient = coefficients.shadowwordpain;         
            break;
        
        case "mind flay":
            spellCoefficient = coefficients.mindflay;         
            break;
        
        case "mind blast":
            spellCoefficient = coefficients.mindblast;         
            break;
        
        case "mana burn":
            spellCoefficient = coefficients.manaburn;         
            break;
        
        case "smite":
            spellCoefficient = coefficients.smite;         
            break;
        
        case "holy fire":
            spellCoefficient = coefficients.holyfire;         
            break;
        
        case "holy nova":
            spellCoefficient = coefficients.holynova;         
            break;
        
        case "power word: shield":
        case "power word shield":
            spellCoefficient = coefficients.powerwordshield;         
            break;
        
        case "lesser heal":
            spellCoefficient = coefficients.lesserheal;         
            break;
        
        case "heal":
            spellCoefficient = coefficients.heal;         
            break;
        
        case "flash heal":
            spellCoefficient = coefficients.flashheal;         
            break;
        
        case "greater heal":
            spellCoefficient = coefficients.greaterheal;         
            break;
        
        case "devouring plague":
            spellCoefficient = coefficients.devouringplague;         
            break;
        
        case "renew":
            spellCoefficient = coefficients.renew;        
            break;
    
        default:
            spellCoefficient = 0;
            break;
    }

    console.log(`Spell Coefficient: ${spellCoefficient}`);

    effectiveSpellPower = spellPower * spellCoefficient;
    console.log(`Effective Spell Power: ${effectiveSpellPower}`)
    minDmg += effectiveSpellPower;
    maxDmg += effectiveSpellPower;

    console.log("------------------------------");
    console.log("After adding effective spell power:")
    console.log(`MinDmg: ${minDmg}`);
    console.log(`MaxDmg: ${maxDmg}`);

    var damagePerSecond = ((minDmg + maxDmg) / 2) / castTime;
    var damagePerMana = ((minDmg + maxDmg) / 2) / manaCost;

    damagePerSecond = damagePerSecond.toFixed(2);
    damagePerMana = damagePerMana.toFixed(2);

    var newCard = $("<div>");
    var newSpan = $("<span>");
    newCard.addClass("card-panel green s4");
    newSpan.addClass("white-text");
    newSpan.html(`<b><u>${fullSpellName}</u></b><br>Damage/Healing per second: ${damagePerSecond}<br>Damage/Healing per mana: ${damagePerMana}`);

    newCard.append(newSpan);
    $("#cards-display").append(newCard);

}

$("#submit").click(getData);