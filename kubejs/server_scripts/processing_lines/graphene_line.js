ServerEvents.recipes(event => {

    // 0. Wipe the old carbon + silicon shortcut recipe completely
    event.remove({ id: 'gtceu:mixer/graphene' });

    // =========================================================
    // STEP 1: Fluidized Bed Deposition (CVD Reactor - EV Tier)
    // =========================================================
    event.recipes.gtceu.cvd('graphene_fluidized_bed_cvd')
        .itemInputs('gtceu:alumina_dust')   // Sacrificial ceramic powder target
        .inputFluids('gtceu:methane 1000')   // Carbon-rich gas feed from your petrochemicals
        .itemOutputs('kubejs:graphene_coated_alumina')
        .duration(500)
        .EUt(1920); // EV Tier Power


    // =========================================================
    // STEP 2: Substrate Acid Leach (Chemical Bath - EV Tier)
    // =========================================================
    event.recipes.gtceu.chemical_bath('leach_graphene_powder')
        .itemInputs('kubejs:graphene_coated_alumina')
        .inputFluids('gtceu:hydrochloric_acid 500') 
        .itemOutputs('gtceu:graphene_dust') // The final endgame powder output
        .outputFluids('gtceu:aluminium_chloride_solution 500') // Waste stream to dump or recycle
        .duration(200)
        .EUt(1920); // EV Tier

    // =========================================================
    // Close Aluminum Loop
    // =========================================================

    event.recipes.gtceu.electric_blast_furnace('pyrohydrolysis_alumina_recovery')
        .inputFluids('gtceu:aluminium_chloride_solution 500') 
        .itemOutputs('gtceu:alumina_dust')                     
        .outputFluids('gtceu:hydrochloric_acid 500')        
        .blastFurnaceTemp(1500) 
        .duration(600) 
        .EUt(1920); 

    event.recipes.gtceu.chemical_reactor('synthesize_aluminium_chloride_solution')
        .itemInputs('2x gtceu:aluminium_dust')          
        .inputFluids('gtceu:hydrochloric_acid 500')      
        .outputFluids(
            'gtceu:aluminium_chloride_solution 500',     
            'gtceu:hydrogen 300'                         
        )
        .duration(200) // 10 seconds
        .EUt(30);

    event.recipes.gtceu.electrolyzer('recycle_aluminium_chloride')
            .inputFluids('gtceu:aluminium_chloride_solution 1000')
            .itemOutputs('2x gtceu:aluminium_dust')
            .outputFluids(
                'gtceu:chlorine 6000',
                'gtceu:hydrogen 2000'
            )
            .duration(400)
            .EUt(1920);

});