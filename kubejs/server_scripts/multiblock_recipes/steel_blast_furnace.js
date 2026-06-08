ServerEvents.recipes(event => {
    event.recipes.gtceu.steel_blast_furnace('faster_primitive_steel_coke')
        .itemInputs('minecraft:iron_ingot', '1x gtceu:coke_gem')
        .itemOutputs('thermal:steel_ingot')
        .duration(300); 

    event.recipes.gtceu.steel_blast_furnace('faster_primitive_steel_charcoal')
        .itemInputs('minecraft:iron_ingot', '2x minecraft:charcoal')
        .itemOutputs('thermal:steel_ingot')
        .duration(400); 
});