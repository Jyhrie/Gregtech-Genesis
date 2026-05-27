ServerEvents.tags('item', event => {
  event.removeAll('twilightforest:portal/activator')
  event.add('twilightforest:portal/activator', 'kubejs:twilight_flame')
})

ServerEvents.recipes(event => {
    event.recipes.gtceu.assembler('kubejs:twilight_flame_assembly')
        .itemInputs(
            '#forge:plates/steel',       // The base
            'minecraft:netherrack',      // The flammable core
            'minecraft:crying_obsidian', // The purple portal magic
            'minecraft:diamond_block'
        )
        // If you want it to require a specific circuit configuration, 
        // uncomment the line below and put a programmed circuit in the machine:
        // .circuit(1) 
        .itemOutputs('kubejs:twilight_flame')
        .duration(200) // Takes 10 seconds to craft (20 ticks per second)
        .EUt(30);      // Requires LV power (30 EU/tick)
});