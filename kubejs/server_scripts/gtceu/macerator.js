ServerEvents.recipes(event => {
    event.recipes.gtceu.macerator('macerate_soul_sand')
        .itemInputs('minecraft:soul_sand')
        .itemOutputs('thermal_extra:soul_sand_dust')
        .chancedOutput('thermal_extra:soul_sand_dust', 1000, 500) 
        .duration(200) // 20 seconds at base speed
        .EUt(2);       // 2 EU/t 
});