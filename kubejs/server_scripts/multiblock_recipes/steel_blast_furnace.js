ServerEvents.recipes(event => {
    event.recipes.gtceu.steel_blast_furnace('steel_from_iron')
        .itemInputs('minecraft:iron_ingot', '1x gtceu:coke_gem')
        .itemOutputs('thermal:steel_ingot')
        .duration(300); 

    event.recipes.gtceu.steel_blast_furnace('steel_from_iron')
        .itemInputs('minecraft:iron_ingot', '2x minecraft:charcoal')
        .itemOutputs('thermal:steel_ingot')
        .duration(400); 
});