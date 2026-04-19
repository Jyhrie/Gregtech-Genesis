ServerEvents.recipes(event => {
    // event.recipes.gtceu.water_purification('distilled_to_deionized')
    //     .outputFluids('gtceu:deionized_water 1000')
    //     .inputFluids('gtceu:distilled_water 1000')
    //     .duration(200)
    //     .EUt(1024);
})

ServerEvents.recipes(event => {
    // Large Steam Turbine: Dense Superheated Steam -> 4A HV
    // event.recipes.gtceu.steam_turbine('dense_superheated_to_hv')
    //     .inputFluids('gtceu:dense_superheated_steam 64')
    //     .outputFluids('gtceu:distilled_water 8')
    //     .EUt(-512) 
    //     .duration(0) // 1 second per operation at 20 ticks
        
    // event.recipes.gtceu.steam_turbine('supercritical_to_ev')
    //     .inputFluids('gtceu:supercritical_steam 32')
    //     .outputFluids('gtceu:distilled_water 8')
    //     .EUt(-2048) 
    //     .duration(0) // 1 second per operation at 20 ticks

    // event.recipes.gtceu.steam_turbine('hypercritical_to_iv')
    //     .inputFluids('gtceu:hypercritical_steam 16')
    //     .outputFluids('gtceu:distilled_water 8')
    //     .EUt(-8192) 
    //     .duration(0) // 1 second per operation at 20 ticks
});