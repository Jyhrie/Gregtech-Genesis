ServerEvents.recipes((event) => {
  // ----------------------------------------------
  // Platinum Group Start, Obtain Platinum Dust, Palladium Start & Rhodium, Ruthenium, Iridium, Osmium Start
  // ----------------------------------------------
    //event.remove({id: ""})

  event.remove({id: "gtceu:centrifuge/pgs_separation"})
  event.remove({id: "gtceu:large_chemical_reactor/rarest_metal_mixture_separation"})
  
  event.recipes.gtceu
    .large_chemical_reactor("leach_platinum_residue")
    .itemInputs("9x gtceu:platinum_group_sludge_dust")
    .inputFluids(Fluid.of("gtceu:aqua_regia", 18000))
    .outputFluids(Fluid.of("gtceu:platinum_concentrate", 18000))
    .itemOutputs("gtceu:platinum_residue_dust")
    .EUt(480)
    .duration(500);

  event.recipes.gtceu
    .large_chemical_reactor("palladium_extraction_from_platinum_concentrate")
    .inputFluids(
      Fluid.of("gtceu:platinum_concentrate", 36000),
      Fluid.of("gtceu:ammonium_chloride", 3600),
    )
    .outputFluids(
      Fluid.of("gtceu:palladium_enriched_ammonia", 3600),
      Fluid.of("gtceu:nitrogen_dioxide", 9000),
      Fluid.of("gtceu:hydrochloric_acid", 27000),
    )
    .itemOutputs(
      "16x gtceu:platinum_salt_dust",
      "4x gtceu:reprecipitated_platinum_dust",
    )
    .EUt(480)
    .duration(500);

  event.recipes.gtceu
    .large_chemical_reactor("platinum_dust_extraction")
    .itemInputs(
      "4x gtceu:reprecipitated_platinum_dust",
      "1x gtceu:calcium_dust",
    )
    .itemOutputs("2x gtceu:platinum_dust", "3x gtceu:calcium_chloride_dust")
    .EUt(480)
    .duration(500);

  event.recipes.gtceu
    .electric_blast_furnace("platinum_residue_blasting")
    .itemInputs("gtceu:platinum_residue_dust")
    .inputFluids(Fluid.of("gtceu:potassium_disulfate", 360))
    .outputFluids(Fluid.of("gtceu:rhodium_sulfate", 360))
    .itemOutputs("2x gtceu:platinum_leach_residue_dust")
    .EUt(480)
    .duration(500);

  event.recipes.gtceu
    .electric_blast_furnace("ruthenium_extraction_start")
    .itemInputs("10x gtceu:platinum_leach_residue_dust", "10x gtceu:saltpeter_dust")
    .inputFluids(Fluid.of("gtceu:salt_water", 1000))
    .outputFluids(Fluid.of("gtceu:steam", 1000))
    .itemOutputs("3x gtceu:sodium_ruthenate_dust", "3x gtceu:rarest_metal_mixture_dust")
    .EUt(480)
    .duration(500);

  event.recipes.gtceu
    .electric_blast_furnace("rarest_metal_residue_blasting")
    .itemInputs("2x gtceu:rarest_metal_mixture_dust")
    .inputFluids(Fluid.of("gtceu:hydrochloric_acid", 500))
    .outputFluids(Fluid.of("gtceu:acidic_osmium_solution", 1000))
    .itemOutputs("3x gtceu:iridium_metal_residue_dust")
    .EUt(480)
    .duration(500);

  event.recipes.gtceu
    .electric_blast_furnace("iridium_metal_residue_blasting")
    .itemInputs("gtceu:iridium_metal_residue_dust")
    .itemOutputs("gtceu:iridium_dioxide_dust", "gtceu:platinum_sludge_residue_dust")
    .outputFluids(Fluid.of("gtceu:acidic_osmium_solution", 1000))
    .EUt(120)
    .duration(300);
  
  // ----------------------------------------------
  // Platinum Recovery
  // ----------------------------------------------

    event.recipes.gtceu
      .sifter("platinum_residue_recovery")
      .itemInputs("gtceu:platinum_salt_dust")
      .chancedOutput("gtceu:platinum_group_sludge_dust", 1000, 0)
      .chancedOutput("gtceu:platinum_group_sludge_dust", 1000, 0)
      .chancedOutput("gtceu:platinum_group_sludge_dust", 1000, 0)
      .chancedOutput("gtceu:platinum_group_sludge_dust", 1000, 0)
      .chancedOutput("gtceu:platinum_group_sludge_dust", 1000, 0)
      .chancedOutput("gtceu:platinum_group_sludge_dust", 1000, 0)
      .chancedOutput("gtceu:platinum_group_sludge_dust", 1000, 0)
      .chancedOutput("gtceu:platinum_group_sludge_dust", 1000, 0)
      .chancedOutput("gtceu:platinum_group_sludge_dust", 1000, 0)
      .EUt(32)
      .duration(500);

  // ----------------------------------------------
  // Palladium Extraction
  // ----------------------------------------------

  event.recipes.gtceu
    .large_chemical_reactor("palladium_reprecipitation")
    .itemInputs("9x gtceu:palladium_metallic_powder_dust")
    .inputFluids(Fluid.of("gtceu:palladium_enriched_ammonia", 9000))
    .itemOutputs(
      "16x gtceu:palladium_salts_dust",
      "2x gtceu:reprecipitated_palladium_dust",
    )
    .EUt(480)
    .duration(500);

  event.recipes.gtceu
    .sifter("palladium_metallic_powder_recovery")
    .itemInputs("gtceu:palladium_salts_dust")
    .chancedOutput("gtceu:palladium_metallic_powder_dust", 1000, 0)
    .chancedOutput("gtceu:palladium_metallic_powder_dust", 1000, 0)
    .chancedOutput("gtceu:palladium_metallic_powder_dust", 1000, 0)
    .chancedOutput("gtceu:palladium_metallic_powder_dust", 1000, 0)
    .chancedOutput("gtceu:palladium_metallic_powder_dust", 1000, 0)
    .chancedOutput("gtceu:palladium_metallic_powder_dust", 1000, 0)
    .chancedOutput("gtceu:palladium_metallic_powder_dust", 1000, 0)
    .chancedOutput("gtceu:palladium_metallic_powder_dust", 1000, 0)
    .chancedOutput("gtceu:palladium_metallic_powder_dust", 1000, 0)
    .EUt(32)
    .duration(500);


  event.recipes.gtceu
    .large_chemical_reactor("pure_palladium_extraction")
    .itemInputs("4x gtceu:reprecipitated_palladium_dust")
    .inputFluids(Fluid.of("gtceu:formic_acid", 4000))
    .itemOutputs("2x gtceu:palladium_dust")
    .outputFluids(Fluid.of("gtceu:ammonia", 4000), Fluid.of("gtceu:ethylene", 1000), Fluid.of("minecraft:water", 1000))
    .EUt(480)
    .duration(500);




  //TODO: add palladium enriched ammonia -> palladium metallic powder dust

  // ----------------------------------------------
  // Rhodium Extraction
  // ----------------------------------------------
  event.remove({id: "gtceu:electrolyzer/rhodium_sulfate_separation"})

  event.recipes.gtceu
  .large_chemical_reactor("rhodium_sulfate_dissolving")
  .inputFluids(Fluid.of("gtceu:rhodium_sulfate", 39000), Fluid.of("minecraft:water", 36000))
  .outputFluids(Fluid.of("gtceu:rhodium_sulfate_solution", 3900), Fluid.of("gtceu:potassium", 7200))
  .itemOutputs("4x gtceu:platinum_leach_residue_dust")
  .EUt(32)
  .duration(500);

  event.recipes.gtceu
  .large_chemical_reactor("rhodium_sulfate_metal_extraction")
  .itemInputs("gtceu:zinc_dust")
  .inputFluids(Fluid.of("gtceu:rhodium_sulfate_solution", 1000))
  .itemOutputs("gtceu:zinc_sulfate_dust", "gtceu:crude_rhodium_metal_dust")
  .EUt(30)
  .duration(600);

  event.recipes.gtceu
  .electric_blast_furnace("crude_rhodium_blasting")
  .itemInputs("6x gtceu:crude_rhodium_metal_dust", "gtceu:salt_dust")  
  .inputFluids(Fluid.of("gtceu:chlorine", 1000))
  .itemOutputs("3x gtceu:rhodium_salt_dust")
  .EUt(30)
  .duration(300);

  event.recipes.gtceu
  .mixer("rhodium_salt_dissolving")
  .itemInputs("gtceu:rhodium_salt_dust")
  .inputFluids(Fluid.of("minecraft:water", 200))
  .outputFluids(Fluid.of("gtceu:rhodium_salt_solution", 200))
  .EUt(30)
  .duration(300);

  event.recipes.gtceu
  .large_chemical_reactor("rhodium_nitration")
  .inputFluids(Fluid.of("gtceu:rhodium_salt_solution", 1000))
  .itemInputs("5x gtceu:sodium_nitrate_dust")
  .itemOutputs("1x gtceu:rhodium_nitrate_dust", "2x gtceu:salt_dust")
  .EUt(30)
  .duration(300);

  event.recipes.gtceu
  .large_chemical_reactor("rhodium_dust_extraction")
  .inputFluids(Fluid.of("gtceu:hydrochloric_acid", 1000))
  .itemInputs("gtceu:rhodium_nitrate_dust")
  .itemOutputs("gtceu:rhodium_dust")
  .outputFluids(Fluid.of("gtceu:chlorine", 1000), Fluid.of("gtceu:ammonia", 1000))

  event.recipes.gtceu
  .chemical_reactor("sodium_nitrate_synthesis")
  .itemInputs("gtceu:sodium_dust")
  .inputFluids(Fluid.of("gtceu:nitric_acid", 1000))
  .itemOutputs("5x gtceu:sodium_nitrate_dust")
  .outputFluids(Fluid.of("gtceu:hydrogen", 1000))
  .EUt(30)
  .duration(300);

  // ----------------------------------------------
  // Ruthenium Extraction
  // ----------------------------------------------

  event.remove({id: "gtceu:large_chemical_reactor/ruthenium_dust_extraction_from_tetroxide"})

  event.recipes.gtceu
  .large_chemical_reactor("ruthenium_tetroxide_dissolving")
  .itemInputs("6x gtceu:sodium_ruthenate_dust")
  .inputFluids(Fluid.of("gtceu:chlorine", 3000))
  .outputFluids(Fluid.of("gtceu:ruthenium_tetroxide_solution", 9000))
  .EUt(30)
  .duration(300);

  event.recipes.gtceu
  .distillation_tower("ruthenium_tetroxide_distillation")
  .inputFluids(Fluid.of("gtceu:ruthenium_tetroxide_solution", 9000))
  .outputFluids(Fluid.of("gtceu:ruthenium_tetroxide", 14400), Fluid.of("minecraft:water", 1800))
  .itemOutputs("6x gtceu:salt_dust")
  .EUt(30)
  .duration(300);

  event.recipes.gtceu
  .fluid_solidifier("ruthenium_tetroxide_solidification")
  .inputFluids(Fluid.of("gtceu:ruthenium_tetroxide", 1000))
  .itemOutputs("gtceu:ruthenium_tetroxide_dust")
  .EUt(30)
  .duration(40);

  event.recipes.gtceu
  .large_chemical_reactor("ruthenium_dust_extraction_from_tetroxide")
  .itemInputs("gtceu:ruthenium_tetroxide_dust")
  .inputFluids(Fluid.of("gtceu:hydrochloric_acid", 6000))
  .itemOutputs("gtceu:ruthenium_dust")
  .outputFluids(Fluid.of("minecraft:water", 2000), Fluid.of("gtceu:chlorine", 6000))
  .EUt(30)
  .duration(300);

  // ----------------------------------------------
  // Iridium Extraction
  // ----------------------------------------------
  event.remove({id: "gtceu:large_chemical_reactor/iridium_chloride_separation"})
  event.remove({id: "gtceu:chemical_reactor/iridium_chloride_separation"})
  event.remove({id: "gtceu:centrifuge/iridium_metal_residue_separation"})
  //event.remove({id: ""})
  //event.remove({id: ""})
  //event.remove({id: ""})
  //event.remove({id: ""})
  //event.remove({id: ""})
  //event.remove({id: ""})
  //event.remove({id: ""})
  //event.remove({id: ""})

  //event.remove({id: ""})
  //event.remove({id: ""})
  //event.remove({id: ""})
  //event.remove({id: ""})
  //event.remove({id: ""})
  //event.remove({id: ""})
  //event.remove({id: ""})
  //event.remove({id: ""})

  event.recipes.gtceu
    .large_chemical_reactor("iridium_dioxide_dissolving")
    .itemInputs("gtceu:iridium_dioxide_dust")
    .inputFluids(Fluid.of("gtceu:hydrochloric_acid", 1000))
    .outputFluids(Fluid.of("gtceu:acidic_iridium_solution", 1000))
    .EUt(30)
    .duration(300);

  event.recipes.gtceu
    .large_chemical_reactor("iridium_chloride_extraction")
    .inputFluids(Fluid.of("gtceu:acidic_iridium_solution", 1000), Fluid.of("gtceu:ammonium_chloride", 3000))
    .itemOutputs("2x gtceu:iridium_chloride_dust")
    .outputFluids(Fluid.of("gtceu:ammonia", 3000))
    .EUt(30)
    .duration(300);
  
  event.recipes.gtceu
    .large_chemical_reactor("iridium_extraction")
    .itemInputs("gtceu:iridium_chloride_dust", "gtceu:calcium_dust")
    .itemOutputs("gtceu:iridium_dust", "3x gtceu:calcium_chloride_dust")
    .EUt(1920)
    .duration(300);

  // ----------------------------------------------
  // Osmium Extraction
  // ----------------------------------------------

  event.recipes.gtceu
    .distillation_tower("acidic_osmium_distillation")
    .inputFluids(Fluid.of("gtceu:acidic_osmium_solution", 1000))
    .outputFluids(Fluid.of("gtceu:osmium_solution", 1000), Fluid.of("minecraft:water", 900))
    .EUt(7680)
    .duration(50);

  event.recipes.gtceu
  .large_chemical_reactor("osmium_extraction")
  .inputFluids(Fluid.of("gtceu:osmium_solution", 1000), Fluid.of("gtceu:hydrochloric_acid", 6000))
  .itemOutputs("gtceu:osmium_dust")
  .outputFluids(Fluid.of("gtceu:chlorine", 7000), Fluid.of("minecraft:water", 2000))
  .EUt(30)
  .duration(300);



});
