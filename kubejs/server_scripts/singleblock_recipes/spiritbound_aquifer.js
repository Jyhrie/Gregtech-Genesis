ServerEvents.recipes(event => {
    event.recipes.gtceu.spiritbound_aquifer('aqueous_to_distilled')
        .itemInputs('malum:aqueous_spirit')      // 1x Aqueous Spirit
        .outputFluids(Fluid.of('gtceu:distilled_water', 1000)) // 1000mB Distilled Water
        .duration(200) // 10 seconds (20 ticks per second)

    event.recipes.gtceu.spiritbound_aquifer('water_spiritbound_aquifer')
        .circuit(1)
        .outputFluids(Fluid.of('minecraft:water', 4000)) // 1000mB Distilled Water
        .duration(5) // 10 seconds (20 ticks per second)
})