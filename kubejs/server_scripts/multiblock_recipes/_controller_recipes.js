ServerEvents.recipes((event) => {

  event.recipes.gtceu
    .assembler("multiblock_farm_traditional_assembler")
    .itemInputs(
      "6x gtceu:treated_wood_plate",
      "1x gtceu:lv_machine_hull",
      "5x create:mechanical_harvester",
      "2x gtceu:lv_electric_motor",
      "1x #gtceu:circuits/lv"
    )
    .itemOutputs("gtceu:multiblock_farm_traditional")
    .duration(1200)
    .EUt(32);
});
