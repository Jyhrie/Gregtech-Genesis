ServerEvents.recipes(event => {
  event.remove({ output: 'ad_astra:launch_pad' })
  event.shaped(
    Item.of('ad_astra:launch_pad', 9), 
    [
      '   ',
      'PPP',
      'LLL'
    ],
    {
      P: 'gtceu:double_invar_plate', 
      L: 'gtceu:light_concrete' 
    }
  )

  event.remove({ output: 'ad_astra:nasa_workbench' })
  event.recipes.gtceu.assembler('custom_nasa_workbench')
    .itemInputs(
      '1x gtceu:hv_machine_hull',    
      '4x gtceu:hv_robot_arm',           
      '4x gtceu:hv_conveyor_module',     
      '2x #gtceu:circuits/ev',  
      '2x gtceu:hv_electric_pump',            
      '1x gtceu:hv_energy_input_hatch'                 
    )
    .inputFluids(
      Fluid.of("gtceu:soldering_alloy", 288)      
    )
    .itemOutputs('ad_astra:nasa_workbench')
    .duration(2000)                    
    .EUt(480)
})