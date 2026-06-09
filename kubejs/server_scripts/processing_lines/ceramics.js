ServerEvents.recipes(event => {

    // ==========================================
    // TIER 1: Silica Ceramic
    // ==========================================

    // Custom Recipe: Mix standard Silicon Dioxide (Quartz/Sand derivative) with water to make a ceramic slurry
    event.recipes.gtceu.mixer('silica_ceramic_slurry')
        .itemInputs('3x gtceu:silicon_dioxide_dust') 
        .inputFluids('minecraft:water 1000') // Water acts as a binder
        .itemOutputs('3x gtceu:silica_ceramic_dust')
        .duration(200)
        .EUt(30); // LV Tier Mixer

    event.recipes.gtceu.electric_blast_furnace('silica_ceramic_plate_baking')
        .itemInputs('1x gtceu:silica_ceramic_dust')
        .itemOutputs('1x gtceu:silica_ceramic_plate')
        .blastFurnaceTemp(1500) 
        .duration(400) // 20 seconds
        .EUt(480); // HV Tier


    // ==========================================
    // TIER 2: Alumina Ceramic
    // ==========================================

    // Custom Recipe: Mix standard Alumina (from the Bauxite/Bayer process line) with water
    event.recipes.gtceu.mixer('alumina_ceramic_slurry')
        .itemInputs('5x gtceu:alumina_dust') 
        .inputFluids('minecraft:water 1000') 
        .itemOutputs('5x gtceu:alumina_ceramic_dust')
        .duration(300)
        .EUt(120); // MV Tier Mixer

    event.recipes.gtceu.electric_blast_furnace('alumina_ceramic_plate_baking')
        .itemInputs('1x gtceu:alumina_ceramic_dust')
        .inputFluids('gtceu:nitrogen 1000') // Protective gas blanket
        .itemOutputs('1x gtceu:alumina_ceramic_plate')
        .blastFurnaceTemp(2000) 
        .duration(500)
        .EUt(480); // HV Tier


    // ==========================================
    // TIER 3: Zirconium Diboride (ZrB2)
    // ==========================================
    event.recipes.gtceu.mixer('zirconium_diboride_mixing')
            .itemInputs('1x gtceu:zirconium_dust', '2x gtceu:boron_dust')
            .itemOutputs('3x gtceu:zirconium_diboride_dust')
            .duration(300)
            .EUt(120); // MV Tier
    
    event.recipes.gtceu.electric_blast_furnace('zirconium_diboride_plate_baking')
        .itemInputs('1x gtceu:zirconium_diboride_dust')
        .inputFluids('gtceu:argon 1000') 
        .itemOutputs('1x gtceu:zirconium_diboride_plate')
        .blastFurnaceTemp(3200) // Requires high-tier EBF coils
        .duration(600)
        .EUt(1920); // EV Tier


    // ==========================================
    // TIER 4: Hafnium Carbide (HfC)
    // ==========================================
    event.recipes.gtceu.mixer('hafnium_carbide_mixing')
        .itemInputs('1x gtceu:hafnium_dust', '1x gtceu:carbon_dust')
        .itemOutputs('2x gtceu:hafnium_carbide_dust')
        .duration(400) // 20 seconds
        .EUt(480); // HV Tier Mixer

    event.recipes.gtceu.electric_blast_furnace('hafnium_carbide_plate_baking')
            .itemInputs('1x gtceu:hafnium_carbide_dust')
            .circuit(2)
            .inputFluids('gtceu:helium 1000') // Endgame inert gas
            .itemOutputs('1x gtceu:hafnium_carbide_plate')
            .blastFurnaceTemp(4100) // Extreme heat requirement
            .duration(800)
            .EUt(7680); // IV Tier


    

});