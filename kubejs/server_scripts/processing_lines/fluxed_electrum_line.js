ServerEvents.recipes(event => {

    
    event.recipes.gtceu.large_chemical_reactor('destabilize_redstone')
        .inputFluids('gtceu:redstone 1000', 'gtceu:fluoroantimonic_acid 1000') 
        .outputFluids('thermal:redstone 1000', 'gtceu:hydrofluoric_acid 1000')
        .duration(400) 
        .EUt(7000); 

    event.recipes.gtceu.cvd('fluxed_electrum_deposition')
        .itemInputs('gtceu:electrum_dust')
        .inputFluids('thermal:redstone 100')
        .itemOutputs('gtceu:fluxed_electrum_dust')
        .duration(400)
        .EUt(1920); // Lowered to EV powe

    event.recipes.gtceu.electric_blast_furnace('melt_fluxed_electrum')
        .itemInputs('gtceu:fluxed_electrum_dust') 
        .inputFluids('gtceu:argon 100') 
        .itemOutputs('gtceu:hot_fluxed_electrum_ingot')
        .blastFurnaceTemp(2700) // Lowered to 2700K (Nichrome)
        .duration(600) 
        .EUt(1920); // EV Power

    // =========================================================
    // 2. FLUXED TITANITE LINE (IV TIER)
    // =========================================================

    event.recipes.gtceu.electric_blast_furnace('synthetic_titanite_dust_synthesis')
        .itemInputs(
            '1x gtceu:calcite_dust',
            '1x gtceu:rutile_dust',
            '1x gtceu:nether_quartz_dust'
        )
        .itemOutputs('1x gtceu:titanite_dust')
        .outputFluids('gtceu:carbon_dioxide 1000')     
        .blastFurnaceTemp(2500) 
        .duration(400)        
        .EUt(480);          

    event.replaceInput({}, 'gtceu:titanite_gem', '3x kubejs:titanite_gem');
    event.replaceOutput({}, 'gtceu:titanite_gem', '3x kubejs:titanite_gem');

    //TODO: MAKE THIS HARDER TO MAKE, PROBABLY ADD AN INTERMIDDENT STEP BETWEEN TITANITE DUST AND GEM, THEN CREATE LIKE A FLUXING FLUID OR SOMETHING, TO DEPOSIT INTO THE GEM.
    event.recipes.gtceu.cvd('dope_fluxed_titanite')
        .itemInputs('kubejs:titanite_gem', 'gtceu:fluxed_electrum_dust')
        .inputFluids('thermal:redstone 1000')
        .itemOutputs('gtceu:fluxed_titanite_dust')
        .duration(800)
        .EUt(7000); // IV Power

});