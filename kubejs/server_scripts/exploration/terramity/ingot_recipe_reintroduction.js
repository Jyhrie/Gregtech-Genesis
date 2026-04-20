ServerEvents.recipes((event) => {
    event.recipes.gtceu.electric_blast_furnace('dimlite_mv')
        .itemInputs('4x #forge:dusts/stainless_steel', '1x minecraft:echo_shard')
        .itemOutputs('4x terramity:dimlite_ingot')
        .duration(600)
        .EUt(GTValues.VA[GTValues.HV]) 
        .blastFurnaceTemp(1800);
    
    event.recipes.gtceu.electric_blast_furnace('dimlite_mv_fast')
        .itemInputs('4x #forge:dusts/stainless_steel', '1x minecraft:echo_shard')
        .itemOutputs('4x terramity:dimlite_ingot')
        .inputFluids(Fluid.of('gtceu:nitrogen', 1000)) 
        .duration(300)
        .EUt(GTValues.VA[GTValues.HV]) 
        .blastFurnaceTemp(1800);

    event.recipes.gtceu.chemical_reactor('virentium_pathogen')
        .itemInputs('3x #forge:dusts/aluminium', '1x #forge:dusts/emerald') 
        .inputFluids(Fluid.of('gtceu:chlorine', 1000)) 
        .itemOutputs('4x terramity:virentium_alloy_ingot')
        .duration(400)
        .EUt(120);

    event.recipes.gtceu.electric_blast_furnace('cosmilite_star_forged')
        .itemInputs('3x #forge:dusts/titanium', '1x #forge:dusts/nether_star', '1x #forge:dusts/glowstone')
        .itemOutputs('4x terramity:cosmilite_ingot')
        .duration(600)
        .EUt(GTValues.VA[GTValues.HV]) 
        .blastFurnaceTemp(1800); 

    event.recipes.gtceu.electric_blast_furnace('cosmilite_star_forged_fast') //fast
        .itemInputs('3x #forge:dusts/titanium', '1x #forge:dusts/nether_star', '1x #forge:dusts/glowstone')
        .itemOutputs('4x terramity:cosmilite_ingot')
        .inputFluids(Fluid.of('gtceu:nitrogen', 1000)) 
        .duration(300)
        .EUt(GTValues.VA[GTValues.HV]) 
        .blastFurnaceTemp(1800); 

    //EV SUPERCONDUCTOR (EXPLORATION)
    event.recipes.gtceu.large_chemical_reactor('conductite_ev')
        .itemInputs('3x terramity:iridium', '4x #forge:dusts/electrum')
        .inputFluids(Fluid.of('gtceu:mercury', 500)) 
        .itemOutputs('4x terramity:conductite')
        .duration(600)
        .EUt(GTValues.VA[GTValues.EV]);

    event.recipes.gtceu.large_chemical_reactor('hellspec_ev_synthesis')
        .itemInputs(
            '3x terramity:iridium', 
            '1x terramity:chthonic_crystal'     
        )
        .inputFluids(
            Fluid.of('gtceu:redstone', 288)
        )
        .itemOutputs('4x terramity:hellspec_alloy')
        .duration(800)
        .EUt(GTValues.VA[GTValues.EV]); // 480 EU/t

    event.recipes.gtceu.large_chemical_reactor('void_alloy_iv')
        .itemInputs(
            '3x terramity:iridium',
            '1x gtceu:tungsten_dust',
            '1x terramity:empty_essence'  
        )
        .itemOutputs('4x terramity:void_alloy')
        .duration(1600)
        .EUt(GTValues.VA[GTValues.EV]); // 7680 EU/t

    event.recipes.gtceu.electric_blast_furnace('nyxium_iv')
        .itemInputs('4x terramity:profanum', '1x terramity:opaline_moonstone')
        .itemOutputs('terramity:nyxium') // Direct output, no cooling needed
        .blastFurnaceTemp(5200)
        .duration(1200)
        .EUt(GTValues.VA[GTValues.IV]);

    // --- REVERIUM (Profanum + Angel Feather) ---
    event.recipes.gtceu.electric_blast_furnace('reverium_iv')
        .itemInputs('4x terramity:profanum', '1x terramity:angel_feather')
        .itemOutputs('terramity:reverium')
        .blastFurnaceTemp(5200)
        .duration(1200)
        .EUt(GTValues.VA[GTValues.IV]);

    // --- EXODIUM (Profanum + Microcosm) ---
    event.recipes.gtceu.electric_blast_furnace('exodium_iv')
        .itemInputs('4x terramity:profanum', '1x terramity:cracked_microcosm')
        .itemOutputs('terramity:exodium_superalloy')
        .blastFurnaceTemp(5400)
        .duration(2000)
        .EUt(GTValues.VA[GTValues.IV]);

  
});