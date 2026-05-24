ServerEvents.recipes(event => {

  // -----------------------------------------
  // 1. HV Fuel Tank (Tier 1)
  // -----------------------------------------
  event.recipes.gtceu.assembler('hv_rocket_fuel_tank')
    .itemInputs(
      '4x gtceu:stainless_steel_plate',         // Outer structural hull
      '2x gtceu:stainless_steel_drum',          // The actual internal fluid bladders
      '16x gtceu:aluminium_foil',               // Basic thermal insulation
      '4x gtceu:stainless_steel_ring',          // O-rings for valve seals
      '4x gtceu:kanthal_spring',        // Pressure relief springs
      '1x gtceu:stainless_steel_frame'          // Structural skeleton
    )
    .inputFluids('gtceu:polyethylene 576')      // Liquid plastic as an airtight sealant
    .itemOutputs('1x gtceu:hv_rocket_fuel_tank')
    .duration(400) // 20 seconds
    .EUt(512);

  // -----------------------------------------
  // 2. EV Fuel Tank (Tier 2)
  // -----------------------------------------
  event.recipes.gtceu.assembler('ev_rocket_fuel_tank')
    .itemInputs(
      '4x gtceu:titanium_plate',                
      '2x gtceu:titanium_drum',                 
      '16x gtceu:gold_foil',                    // Gold MLI (Aerospace standard insulation)
      '4x gtceu:titanium_ring',                 
      '4x gtceu:nichrome_spring',               
      '1x gtceu:titanium_frame'                 
    )
    .inputFluids('gtceu:polyethylene 576')
    .itemOutputs('1x gtceu:ev_rocket_fuel_tank')
    .duration(600) // 30 seconds
    .EUt(2048);

  // -----------------------------------------
  // 3. IV Fuel Tank (Tier 3 - Cryogenic Hydrolox)
  // -----------------------------------------
  // Storing Hydrolox requires extreme thermal and pressure management
  event.recipes.gtceu.assembler('iv_rocket_fuel_tank')
    .itemInputs(
      '4x gtceu:tungsten_steel_plate',           
      '2x gtceu:tungsten_steel_drum',            // Heavy drums to prevent cryogenic shattering
      '16x gtceu:platinum_foil',                // Advanced Platline insulation
      '4x gtceu:tungsten_steel_ring',            
      '4x gtceu:hssg_spring',          
      '1x gtceu:hssg_frame'                     
    )
    .inputFluids('gtceu:polytetrafluoroethylene 576') // PTFE (Teflon) sealant for reactive/cryo fuels
    .itemOutputs('1x gtceu:iv_rocket_fuel_tank')
    .duration(800) // 40 seconds
    .EUt(8192);

  // -----------------------------------------
  // 4. LuV Fuel Tank (Tier 4 - Deep Space)
  // -----------------------------------------
  event.recipes.gtceu.assembler('luv_rocket_fuel_tank')
    .itemInputs(
      '4x gtceu:hsss_plate',                    
      '2x gtceu:iv_quantum_tank',                  // Iridium is perfectly inert for the Originium fuel
      '16x gtceu:iridium_foil',                 // Ultimate thermal shielding
      '4x gtceu:hsss_ring',                     
      '4x gtceu:rtm_alloy_spring',                   
      '1x gtceu:iridium_frame'               
    )
    .inputFluids('gtceu:polybenzimidazole 1152') // Double the Teflon sealing
    .itemOutputs('1x gtceu:luv_rocket_fuel_tank')
    .duration(1200) // 60 seconds
    .EUt(8192);
});