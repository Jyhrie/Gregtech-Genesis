ServerEvents.recipes((event) => {
  // ----------------------------------------------
  // Bastnasite To Cerium Dioxide, Neodymium/Samaric Concentrates
  // ----------------------------------------------

  event.recipes.gtceu
    .chemical_reactor("leach_cracked_bastnasite")
    .itemInputs("2x gtceu:bastnasite_dust")
    .inputFluids(Fluid.of("gtceu:nitric_acid", 500)) // Standard acid for rare earth leaching
    .itemOutputs("gtceu:silicon_dioxide_dust") // Common gangue mineral
    .outputFluids(Fluid.of("gtceu:bastnasite_mud", 800)) // The waste fluid we registered earlier
    .duration(400)
    .EUt(480);

  event.recipes.gtceu
    .cracker("steam_crack_bastnasite_mud")
    .inputFluids(
      Fluid.of("gtceu:bastnasite_mud", 1000),
      Fluid.of("gtceu:steam", 1000),
    )
    .outputFluids(Fluid.of("gtceu:steam_cracked_bastnasite_mud", 1000)) // A steamier, more reactive version of the mud
    .duration(300)
    .EUt(128);

  event.recipes.gtceu
    .mixer("condition_bastnasite_mud")
    .inputFluids(
      Fluid.of("gtceu:steam_cracked_bastnasite_mud", 1000),
      Fluid.of("gtceu:sodium_fluorosilicate", 500),
    ) // Fixed broken link
    .outputFluids(Fluid.of("gtceu:conditioned_bastnasite_mud", 1000)) // A more reactive, conditioned version of the mud
    .duration(300)
    .EUt(128);

  //skip rutile removal step.

  event.recipes.gtceu
    .electric_blast_furnace("dry_bastnasite_mud")
    .inputFluids(Fluid.of("gtceu:conditioned_bastnasite_mud", 1000))
    .itemOutputs("gtceu:bastnasite_rare_earth_oxides_dust")
    .duration(400)
    .EUt(600);

  event.recipes.gtceu
    .chemical_bath("leach_bastnasite_rare_earth_oxides")
    .itemInputs("gtceu:bastnasite_rare_earth_oxides_dust")
    .inputFluids(Fluid.of("gtceu:hydrochloric_acid", 500))
    .itemOutputs("gtceu:leached_bastnasite_rare_earth_oxides_dust")
    .duration(300)
    .EUt(480);

  event.recipes.gtceu
    .large_chemical_reactor("bastnasite_cerium_oxidation")
    .itemInputs("gtceu:leached_bastnasite_rare_earth_oxides_dust")
    .inputFluids(Fluid.of("gtceu:fluorine", 4000))
    .itemOutputs("gtceu:cerium_oxidised_rare_earth_oxides_dust")
    .outputFluids(Fluid.of("gtceu:hydrofluoric_acid", 4000))
    .duration(400)
    .EUt(640);

  event.recipes.gtceu
    .centrifuge("separate_cerium_rare_earth_oxides")
    .itemInputs("gtceu:cerium_oxidised_rare_earth_oxides_dust")
    .itemOutputs("gtceu:bastnasite_rarer_earth_oxides_dust") // Still contains cerium, but now separated from other REEs
    .chancedOutput("gtceu:cerium_dioxide_dust", 9000, 0) // Chance to get pure cerium dioxide as a byproduct
    .duration(400)
    .EUt(640);

  event.recipes.gtceu
    .chemical_reactor("nitrogenate_bastnasite_rare_earth_oxides")
    .itemInputs("gtceu:bastnasite_rarer_earth_oxides_dust")
    .inputFluids(Fluid.of("gtceu:nitric_acid", 500))
    .outputFluids(
      Fluid.of("gtceu:nitrogenated_bastnasite_rarer_earth_oxides", 1000),
    ) // A more reactive, nitrogenated version of the REE oxides
    .duration(400)
    .EUt(640);

  event.recipes.gtceu
    .centrifuge("separate_nitrogenated_bastnasite_rarer_earth_oxides")
    .inputFluids(
      Fluid.of("gtceu:nitrogenated_bastnasite_rarer_earth_oxides", 1000),
    )
    .itemOutputs(
      "gtceu:samaric_concentrate_dust",
      "gtceu:neodymic_concentrate_dust",
    )
    .duration(400)
    .EUt(640);

  // ----------------------------------------------
  // Cerium Dioxide Processing Line
  // ----------------------------------------------
  event.remove({
    id: "gtceu:electrolyzer/decomposition_electrolyzing_bastnasite",
  });

  event.recipes.gtceu
    .chemical_reactor("vanadium_oxidation")
    .itemInputs("2x gtceu:vanadium_dust")
    .inputFluids(Fluid.of("gtceu:oxygen", 5000))
    .itemOutputs("gtceu:vanadium_pentoxide_dust")
    .duration(400)
    .EUt(840);

  event.recipes.gtceu
    .large_chemical_reactor("oxalic_acid_synthesis")
    .itemInputs("24x minecraft:sugar", "gtceu:vanadium_pentoxide_dust")
    .inputFluids(Fluid.of("gtceu:nitric_acid", 6000))
    .outputFluids(
      Fluid.of("gtceu:oxalic_acid", 3000),
      Fluid.of("gtceu:nitric_oxide", 6000),
    )
    .duration(400)
    .EUt(640);

  event.recipes.gtceu
    .large_chemical_reactor("ammonium_chloride_synthesis")
    .inputFluids(
      Fluid.of("gtceu:ammonia", 1000),
      Fluid.of("gtceu:hydrochloric_acid", 1000),
    )
    .outputFluids(Fluid.of("gtceu:ammonium_chloride", 1000))
    .duration(400)
    .EUt(128);

  event.recipes.gtceu
    .large_chemical_reactor("cerium_dioxide_to_chloride")
    .itemInputs("3x gtceu:cerium_dioxide_dust")
    .inputFluids(
      Fluid.of("gtceu:ammonium_chloride", 3000),
      Fluid.of("gtceu:hydrogen", 1000),
    )
    .outputFluids(
      Fluid.of("gtceu:steam", 2000),
      Fluid.of("gtceu:ammonia", 3000),
    )
    .itemOutputs("4x gtceu:cerium_chloride_dust")
    .duration(400)
    .EUt(480);

  event.recipes.gtceu
    .large_chemical_reactor("cerium_chloride_to_oxalate")
    .itemInputs("8x gtceu:cerium_chloride_dust")
    .inputFluids(Fluid.of("gtceu:oxalic_acid", 3000))
    .outputFluids(Fluid.of("gtceu:hydrochloric_acid", 6000))
    .itemOutputs("4x gtceu:cerium_oxalate_dust")
    .duration(800)
    .EUt(480);

  event.recipes.gtceu
    .electric_blast_furnace("cerium_oxalate_to_oxide")
    .itemInputs("5x gtceu:cerium_oxalate_dust", "3x gtceu:carbon_dust")
    .itemOutputs("5x gtceu:cerium_3_oxide_dust")
    .outputFluids(Fluid.of("gtceu:carbon_monoxide", 5000))
    .duration(400)
    .EUt(600);

  event.recipes.gtceu
    .electrolyzer("cerium_oxide_to_pure_cerium")
    .itemInputs("5x gtceu:cerium_3_oxide_dust")
    .inputFluids(Fluid.of("gtceu:hydrogen", 3000))
    .itemOutputs("3x gtceu:cerium_dust")
    .duration(400)
    .EUt(480);

  // ----------------------------------------------
  // Neodymic Concentrate Processing Line
  // ----------------------------------------------

  event.recipes.gtceu
    .centrifuge("neodymic_centrifugal_separation") //TODO: maybe replace with a more complex line.
    .itemInputs("1x gtceu:neodymic_concentrate_dust")
    .itemOutputs("2x gtceu:neodymium_dust", "1x gtceu:lanthanum_dust")
    .duration(800)
    .EUt(680);

  // ----------------------------------------------
  // Samaric Concentrate Processing Line
  // ----------------------------------------------

    event.recipes.gtceu
    .centrifuge("samaric_concentration_separation") //TODO: maybe replace with a more complex line.
    .itemInputs("1x gtceu:samaric_concentrate_dust")
    .itemOutputs("2x gtceu:samaric_residue_dust", "1x gtceu:terbium_dust")
    .duration(800)
    .EUt(680);

  event.recipes.gtceu
    .sifter("samaric_residue_sieving")
    .itemInputs("3x gtceu:samaric_residue_dust")
    .itemOutputs("2x gtceu:samarium_dust")
    .duration(400)
    .EUt(480);
});
