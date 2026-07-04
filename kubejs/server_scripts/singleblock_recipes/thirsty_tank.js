ServerEvents.recipes(event => {
    event.recipes.gtceu.thirsty_tank('water_thirsty_tank')
        .outputFluids(Fluid.of('minecraft:water', 4000)) // 1000mB Distilled Water
        .duration(5) // 10 seconds (20 ticks per second)
})