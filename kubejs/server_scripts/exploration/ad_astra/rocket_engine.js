ServerEvents.recipes(event => {

  // -----------------------------------------
  // 1. HV Rocket Engine (Tier 1)
  // -----------------------------------------
  event.recipes.gtceu.assembler('hv_rocket_engine_mechanical')
    .itemInputs(
      '24x gtceu:stainless_steel_plate',
      '2x gtceu:vanadium_steel_large_fluid_pipe', 
      '1x gtceu:hv_electric_pump',         
      '4x gtceu:chromium_rotor',              
      '1x gtceu:stainless_steel_frame',     
      '24x gtceu:stainless_steel_screw'        
    )
    .inputFluids('gtceu:soldering_alloy 576')   
    .itemOutputs('1x gtceu:hv_rocket_engine')
    .duration(1200) // 20 seconds
    .EUt(512);

  // -----------------------------------------
  // 2. EV Rocket Engine (Tier 2)
  // -----------------------------------------
  event.recipes.gtceu.assembler('ev_rocket_engine_mechanical')
    .itemInputs(
      '24x gtceu:titanium_plate',          
      '2x gtceu:titanium_large_fluid_pipe',   
      '1x gtceu:ev_electric_pump',              
      '4x gtceu:titanium_rotor',                
      '1x gtceu:titanium_frame',                
      '24x gtceu:titanium_screw'                   
    )
    .inputFluids('gtceu:soldering_alloy 576')
    .itemOutputs('1x gtceu:ev_rocket_engine')
    .duration(1200) // 30 seconds
    .EUt(2048);

  // -----------------------------------------
  // 3. IV Rocket Engine (Tier 3)
  // -----------------------------------------
  event.recipes.gtceu.assembler('iv_rocket_engine_mechanical')
    .itemInputs(
      '24x gtceu:tungsten_steel_plate',     
      '2x gtceu:tungsten_large_fluid_pipe',     
      '1x gtceu:iv_electric_pump',              
      '4x gtceu:tungsten_steel_rotor',                 
      '1x gtceu:hssg_frame',                   
      '24x gtceu:tungsten_steel_screw'                   
    )
    .inputFluids('gtceu:soldering_alloy 1152')  
    .itemOutputs('1x gtceu:iv_rocket_engine')
    .duration(1200) // 40 seconds
    .EUt(8192)
    .cleanroom(CleanroomType.CLEANROOM);

  // -----------------------------------------
  // 4. LuV Rocket Engine (Tier 4)
  // -----------------------------------------
  event.recipes.gtceu.assembler('luv_rocket_engine_mechanical')
    .itemInputs(
      '24x gtceu:hsss_plate',             
      '2x gtceu:iridium_large_fluid_pipe',   
      '1x gtceu:iv_electric_pump',   
      '4x gtceu:osmiridium_rotor',                
      '1x gtceu:iridium_frame',              
      '24x gtceu:hsss_screw'                            
    )
    .inputFluids('gtceu:soldering_alloy 1152') 
    .itemOutputs('1x gtceu:luv_rocket_engine')
    .duration(1200) // 60 seconds
    .EUt(8192)
    .cleanroom(CleanroomType.CLEANROOM);
});