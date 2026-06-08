ServerEvents.recipes(event => {
    event.recipes.gtceu.mixer('soul_infused_dust_mixing')
        .itemInputs(
            '2x thermal_extra:soul_sand_dust',
            'gtceu:copper_dust',
            'gtceu:gold_dust'
        )
        .itemOutputs('2x thermal_extra:soul_infused_dust')
        .duration(200) 
        .EUt(30);

    event.recipes.gtceu.mixer('lumium_dust_mixing')
        .itemInputs(
            '3x #forge:dusts/silver',
            '1x #forge:dusts/tin',
            '2x minecraft:glowstone_dust'
        )
        .itemOutputs('4x gtceu:lumium_dust')
        .duration(200) 
        .EUt(120);
});