ServerEvents.recipes(event => {
  event.recipes.gtceu
  .large_chemical_reactor('hydrolox')
    .inputFluids(
      Fluid.of("gtceu:liquid_oxygen", 288),
      Fluid.of("gtceu:liquid_hydrogen", 288)   
    )
    .outputFluids(Fluid.of("gtceu:hydrolox", 288))
    .duration(2000)        
    .cleanroom(CleanroomType.CLEANROOM)     
    .EUt(8192)

    event.recipes.gtceu
    .mixer('originium_stabilized_hydrolox')
    .itemInputs("kubejs:originium_fuel_catalyst")
    .inputFluids(
      Fluid.of("gtceu:hydrolox", 288),
      Fluid.of("gtceu:fluorine", 144)
    )
    .outputFluids(Fluid.of("gtceu:originium_stabilized_hydrolox", 288))
    .duration(2000)        
    .cleanroom(CleanroomType.CLEANROOM)     
    .EUt(480)


})