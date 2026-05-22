ServerEvents.recipes((event) => {
  // ----------------------------------------------
  // Monazite To Cerium Dioxide, Europium, Samaric Concentrates
  // ----------------------------------------------

  
  event.remove({id: "gtceu:electrolyzer/decomposition_electrolyzing_monazite"})
  event.remove({id: "gtceu:extractor/monazite_extraction"})

  event.recipes.gtceu
        .chemical_reactor("leach_cracked_monazite")
        .itemInputs("2x gtceu:monazite_dust")
        .inputFluids(Fluid.of("gtceu:nitric_acid", 500)) // Standard acid for rare earth leaching
        .itemOutputs("gtceu:silicon_dioxide_dust") // Common gangue mineral
        .outputFluids(Fluid.of("gtceu:monazite_mud", 800)) // The waste fluid we registered earlier
        .duration(400)
        .EUt(480);

  event.recipes.gtceu
        .large_chemical_reactor("monazite_rare_earth_mud_extraction")
        .itemInputs("gtceu:saltpeter_dust")
        .inputFluids(Fluid.of("gtceu:monazite_mud", 1000),Fluid.of("minecraft:water", 9000))
        .itemOutputs("9x gtceu:thorianite_dust", "1x gtceu:phosphate_dust") 
        .outputFluids(Fluid.of("gtceu:dilute_monazite_rare_earth_mud", 9000))
        .duration(300)
        .EUt(480);

    event.recipes.gtceu
        .centrifuge("centrifuge_monazite_mud_to_sulfate")
        .inputFluids(Fluid.of("gtceu:dilute_monazite_rare_earth_mud", 1000))
        .chancedOutput("gtceu:monazite_sulfate_dust", 9000, 0) 
        .duration(300)
        .EUt(480);

    event.recipes.gtceu
        .large_chemical_reactor("monazite_sulfate_to_acidic_powder")
        .itemInputs("gtceu:monazite_sulfate_dust")
        .inputFluids(Fluid.of("gtceu:ammonium_nitrate", 1000))
        .itemOutputs("3x gtceu:acidic_monazite_powder_dust")
        .duration(300)
        .EUt(480);

    event.recipes.gtceu
        .sifter("sift_acidic_monazite_powder_separate_thorium")
        .itemInputs("gtceu:acidic_monazite_powder_dust")
        .chancedOutput("gtceu:monazite_rare_earth_filtrate_dust", 5000, 0) 
        .chancedOutput("gtceu:thorianite_dust", 7000, 0) 
        .duration(300)
        .EUt(480);

    event.recipes.gtceu
        .chemical_bath("neutralize_monazite_rare_earth_filtrate")
        .itemInputs("gtceu:monazite_rare_earth_filtrate_dust")
        .inputFluids(Fluid.of("gtceu:ammonium_nitrate", 400))
        .itemOutputs("gtceu:neutralized_monazite_rare_earth_filtrate_dust")
        .duration(300)
        .EUt(480);

    event.recipes.gtceu
        .sifter("sift_neutralized_monazite_filtrate_separate_uranium")
        .itemInputs("gtceu:neutralized_monazite_rare_earth_filtrate_dust")
        .chancedOutput("gtceu:monazite_rare_earth_hydroxide_concentrate_dust", 9000, 0) 
        .chancedOutput("gtceu:uranium_filtrate_dust", 5000, 0) 
        .chancedOutput("gtceu:uranium_filtrate_dust", 4000, 0) 
        .duration(500)
        .EUt(480);

    event.recipes.gtceu
      .chemical_bath("uranium_filtrate_neutralization")
      .itemInputs("gtceu:uranium_filtrate_dust")
      .inputFluids(Fluid.of("gtceu:hydrofluoric_acid", 1000))
      .chancedOutput("gtceu:uranium_dust", 5000, 0)
      .chancedOutput("gtceu:uranium_dust", 4000, 0)
      .chancedOutput("gtceu:uranium_dust", 3000, 0)
      .chancedOutput("gtceu:uranium_235_dust", 3000, 0)
      .chancedOutput("gtceu:uranium_235_dust", 2000, 0)
      .duration(500)
      .EUt(480);

    event.recipes.gtceu
        .large_chemical_reactor("monazite_rare_earth_hydroxide_nitrogenation")
        .itemInputs("gtceu:monazite_rare_earth_hydroxide_concentrate_dust")
        .inputFluids(Fluid.of("gtceu:nitric_acid", 500))
        .outputFluids(Fluid.of("gtceu:nitrogenated_monazite_rare_earth_concentrate", 1000))
        .duration(500)
        .EUt(480);

    event.recipes.gtceu
        .mixer("monazite_nitric_leaching")
        .inputFluids(Fluid.of("gtceu:nitrogenated_monazite_rare_earth_concentrate", 1000), Fluid.of("minecraft:water", 1000))
        .outputFluids(Fluid.of("gtceu:nitric_leached_cerium_monazite_mixture", 1000))
        .duration(500)
        .EUt(480);

    event.recipes.gtceu
        .centrifuge("centrifuge_cerium_out_of_nitric_leached_monazite")
        .inputFluids(Fluid.of("gtceu:nitric_leached_cerium_monazite_mixture", 1000))
        .chancedOutput("gtceu:cerium_dioxide_dust", 3000, 0)
        .outputFluids(Fluid.of("gtceu:nitric_leached_monazite_concentrate", 1000))
        .duration(500)
        .EUt(480);

    event.recipes.gtceu
        .vacuum_freezer("solidify_monazite_concentrate")
        .inputFluids(Fluid.of("gtceu:nitric_leached_monazite_concentrate", 1000))
        .chancedOutput("gtceu:monazite_rare_earth_concentrate_dust", 3000, 0)
        .duration(500)
        .EUt(480);

    event.recipes.gtceu
        .electromagnetic_separator("separate_europium_from_monazite_concentrate")
        .itemInputs("gtceu:monazite_rare_earth_concentrate_dust")
        .chancedOutput("5x gtceu:europium_3_oxide_dust", 1000, 0)
        .chancedOutput("gtceu:samaric_residue_dust", 9000, 0)
        .duration(500)
        .EUt(480);
});
