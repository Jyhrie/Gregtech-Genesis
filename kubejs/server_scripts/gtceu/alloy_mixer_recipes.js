ServerEvents.recipes(event => {
    
// 2. Aluminium Lithium (7 Al + 1 Cu + 1 Li + Argon -> 9 Ingots)
  event.recipes.gtceu.alloy_blast_smelter('aluminium_lithium_alloying')
    .itemInputs(
      '7x gtceu:aluminium_dust', 
      '1x gtceu:copper_dust',
      '1x gtceu:lithium_dust'
    )
    .inputFluids('gtceu:argon 900') 
    .outputFluids('gtceu:aluminium_lithium 1296') // 9 ingots worth
    .duration(800) 
    .EUt(512) 
    .blastFurnaceTemp(900);

  // 1. Titanium Aluminide (6 Ti + 1 Al + Argon -> 7 Ingots)
  event.recipes.gtceu.alloy_blast_smelter('titanium_aluminide_alloying')
    .itemInputs(
      '6x gtceu:titanium_dust', 
      '1x gtceu:aluminium_dust'
    )
    .inputFluids('gtceu:argon 700') // 100mb of gas per ingot is standard GT balancing
    .outputFluids('gtceu:titanium_aluminide 1008') // 7 ingots worth
    .duration(1200) // 1 minute
    .EUt(1920) // EV tier power
    .blastFurnaceTemp(1700); // Set this to match the melting point of Ti



  // 3. Tungsten Niobium (1 W + 1 Nb + Argon -> 2 Ingots)
  event.recipes.gtceu.alloy_blast_smelter('tungsten_niobium_alloying')
    .itemInputs(
      '2x gtceu:tungsten_dust', // Change to 'gtceu:titanium_dust' if you meant 1ti
      '1x gtceu:niobium_dust'
    )
    .inputFluids('gtceu:argon 300')
    .outputFluids('gtceu:tungsten_niobium 432') // 2 ingots worth
    .duration(800) 
    .EUt(7680) // IV tier power due to Tungsten
    .blastFurnaceTemp(3000); // Tungsten requires 3000K+

  // 4. Stellated Starsteel (1 Stellite-100 + 1 Naquadah + Argon -> 2 Ingots)
  event.recipes.gtceu.alloy_blast_smelter('stellated_starsteel_alloying')
    .itemInputs(
      '1x gtceu:stellite_100_dust', 
      '1x gtceu:naquadah_dust'
    )
    .inputFluids('gtceu:argon 200')
    .outputFluids('gtceu:stellated_starsteel 288') // 2 ingots worth
    .duration(1800) 
    .EUt(8192) // LuV tier power for Naquadah
    .blastFurnaceTemp(4500); 

});