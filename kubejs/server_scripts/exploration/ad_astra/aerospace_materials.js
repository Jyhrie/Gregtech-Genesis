ServerEvents.recipes((event) => {
  event.recipes.gtceu
    .assembler("t1_rocket_hull_binding")
    .itemInputs(
      "6x gtceu:dense_aluminium_lithium_plate",
      "4x gtceu:dense_steel_plate",
      "3x gtceu:silica_ceramic_plate",
    )
    .inputFluids("gtceu:glue 1000") // Used as a high-temp polymer adhesive instead of PTFE
    .itemOutputs("kubejs:t1_aerospace_material")
    .duration(700)
    .EUt(512);

  event.recipes.gtceu
    .assembler("t2_rocket_hull_binding")
    .itemInputs(
      "6x gtceu:dense_titanium_grade_5_plate",
      "4x gtceu:dense_desh_plate",
      "3x gtceu:alumina_ceramic_plate",
    )
    .inputFluids("gtceu:silicone_rubber 1000") // Used as a high-temp polymer adhesive instead of PTFE
    .itemOutputs("kubejs:t2_aerospace_material")
    .duration(700)
    .EUt(2048);

  event.recipes.gtceu
    .assembler("t3_rocket_hull_binding")
    .itemInputs(
      "6x gtceu:dense_inconel_718_plate",
      "4x gtceu:dense_ostrum_plate",
      "3x gtceu:zirconium_diboride_plate",
    )
    .inputFluids("gtceu:epoxy 1000") // Used as a high-temp polymer adhesive instead of PTFE
    .itemOutputs("kubejs:t3_aerospace_material")
    .duration(700)
    .EUt(8192);

  event.recipes.gtceu
    .assembler("t4_rocket_hull_binding")
    .itemInputs(
      "6x gtceu:dense_stellated_starsteel_plate",
      "4x gtceu:dense_calorite_plate",
      "3x gtceu:hafnium_carbide_plate",
    )
    .inputFluids("gtceu:polybenzimidazole 1000") // Used as a high-temp polymer adhesive instead of PTFE
    .itemOutputs("kubejs:t4_aerospace_material")
    .duration(700)
    .EUt(8192);

});
