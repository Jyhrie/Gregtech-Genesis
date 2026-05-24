ServerEvents.recipes(event => {

  // -----------------------------------------
  // 1. HV Flight Controller (Tier 1)
  // -----------------------------------------
  event.recipes.gtceu.assembler('hv_flight_controller')
    .itemInputs(
      '2x #gtceu:circuits/hv',                  // The brains (Advanced Circuits)
      '1x gtceu:hv_sensor',                     // Altimeter / Telemetry
      '1x gtceu:hv_emitter',                    // Radar / Communications
      '4x gtceu:double_lead_plate',                    // Basic radiation shielding
      '16x gtceu:fine_electrum_wire',           // Signal routing
      '1x gtceu:hv_machine_casing' // The chassis
    )
    .inputFluids('gtceu:soldering_alloy 288')
    .itemOutputs('1x gtceu:hv_flight_controller')
    .duration(400) // 20 seconds
    .EUt(512);

  // -----------------------------------------
  // 2. EV Flight Controller (Tier 2)
  // -----------------------------------------
  event.recipes.gtceu.assembler('ev_flight_controller')
    .itemInputs(
      '2x #gtceu:circuits/ev',                  // The brains (Workstations)
      '1x gtceu:ev_sensor',                     
      '1x gtceu:ev_emitter',                    
      '4x gtceu:double_lead_plate',              // Upgraded heavy radiation shielding
      '16x gtceu:fine_sterling_silver_wire',           // High-tier data cables
      '1x gtceu:ev_machine_casing'        
    )
    .inputFluids('gtceu:soldering_alloy 576')
    .itemOutputs('1x gtceu:ev_flight_controller')
    .duration(600) // 30 seconds
    .EUt(2048)    // EV+ space electronics require a cleanroom

  // -----------------------------------------
  // 3. IV Flight Controller (Tier 3 - Venus/Deep Space)
  // -----------------------------------------
  event.recipes.gtceu.assembler('iv_flight_controller')
    .itemInputs(
      '2x #gtceu:circuits/iv',                  
      '1x gtceu:iv_sensor',                     
      '1x gtceu:iv_emitter',                    
      '4x gtceu:double_tungsten_plate',          // Tungsten is the ultimate heat/rad shield
      '16x gtceu:fine_tantalum_wire',             
      '1x gtceu:iv_machine_casing'   
    )
    .inputFluids('gtceu:soldering_alloy 1152')
    .itemOutputs('1x gtceu:iv_flight_controller')
    .duration(800) // 40 seconds
    .EUt(8192)
    .cleanroom(CleanroomType.CLEANROOM);

  // -----------------------------------------
  // 4. LuV Flight Controller (Tier 4 - The Interstellar Drive)
  // -----------------------------------------
  event.recipes.gtceu.assembler('luv_flight_controller')
    .itemInputs(
      '2x #gtceu:circuits/luv',                 // Mainframes
      '1x gtceu:iv_sensor',                    // Extreme range telemetry
      '1x gtceu:iv_emitter',                   // Deep space communications
      '4x gtceu:double_osmiridium_plate',        // Flawless cosmic ray shielding
      '16x gtceu:fine_osmiridium_wire',           // Using your Rare Earths for magnetic shielding
      '1x gtceu:luv_machine_casing' // Standard LuV chassis
    )
    .inputFluids('gtceu:soldering_alloy 1152')
    .itemOutputs('1x gtceu:luv_flight_controller')
    .duration(1200) // 60 seconds
    .EUt(8192)
    .cleanroom(CleanroomType.CLEANROOM);
});