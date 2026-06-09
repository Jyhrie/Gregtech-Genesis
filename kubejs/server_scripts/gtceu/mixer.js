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

    
  // ----------------------------------------------------
  // Rocket Materials
  // ----------------------------------------------------

  
    event.recipes.gtceu.mixer('titanium_grade_5_mixing')
        .itemInputs(
            '10x #forge:dusts/titanium',
            '1x #forge:dusts/aluminium',
            '1x #forge:dusts/vanadium',
        )
        .itemOutputs('12x gtceu:titanium_grade_5_dust')
        .duration(200) 
        .EUt(120);

    event.recipes.gtceu.mixer('inconel_718_dust_mixing')
        .itemInputs(
            '10x #forge:dusts/nickel',
            '4x #forge:dusts/chromium',
            '4x #forge:dusts/iron',
            '1x #forge:dusts/niobium',
            '1x #forge:dusts/molybdenum',
            '1x #forge:dusts/titanium',
        )
        .itemOutputs('21x gtceu:inconel_718_dust')
        .duration(200) 
        .EUt(120);

});