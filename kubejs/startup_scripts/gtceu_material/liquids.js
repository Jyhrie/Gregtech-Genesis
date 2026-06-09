GTCEuStartupEvents.registry("gtceu:material", (event) => {
  event.create("advanced_glue").fluid().color(0xd4af74);

  // ----------------------------------------------
  // Bastnasite Processing Line Materials
  // ----------------------------------------------

  event
    .create("bastnasite_mud")
    .fluid()
    .color(0x5c4033) // A dark, muddy brown hex color
    .iconSet("DULL");

  event
    .create("steam_cracked_bastnasite_mud")
    .liquid() // Behaves like a fluid, but visually floats and uses gas textures
    .color(0x8a7359); // A lighter, steamier brown/tan

  event.create("hexafluorosilicic_acid").fluid().color(0xccffcc); // A pale, toxic, acidic green

  event.create("sodium_fluorosilicate").fluid().color(0xfafafa); // Pure white

  event
    .create("conditioned_bastnasite_mud")
    .fluid()
    .color(0xa17865) // A dark, muddy brown hex color
    .iconSet("DULL");

  event
    .create("nitrogenated_bastnasite_rarer_earth_oxides")
    .fluid()
    .color(0x4d6666); // Murky, slightly blue-grey acidic solution

  event
    .create("bastnasite_rarer_earth_oxides_suspension")
    .fluid()
    .color(0x7a7a6e); // Muddy, suspended liquid

  // ----------------------------------------------
  // Cerium Processing Line Materials
  // ----------------------------------------------

  event.create("oxalic_acid").fluid().color(0xccffff); // Clear/pale bluish liquid

  // ----------------------------------------------
  // Monazite Processing Line Materials
  // ----------------------------------------------

  // Mud and Diluted Mud
  event.create("monazite_mud").fluid().color(0x3d3a2e);

  event.create("dilute_monazite_rare_earth_mud").fluid().color(0x5a5a45);

  // Nitric Leached Fluids
  event
    .create("nitrogenated_monazite_rare_earth_concentrate")
    .fluid()
    .color(0x4b6e5d);

  event
    .create("nitric_leached_cerium_monazite_mixture")
    .fluid()
    .color(0x8fa35c);

  event.create("nitric_leached_monazite_concentrate").fluid().color(0x71804e);

  // ----------------------------------------------
  // PGM Processing Line Materials
  // ----------------------------------------------

  // Potassium Disulfate
  event
    .create("potassium_disulfate")
    .fluid()
    .dust()
    .color(0xf2f2a2)
    .formula("K2S2O7");

  event
    .create("palladium_enriched_ammonia")
    .fluid()
    .color(0x608e94)
    .formula("Pd(NH3)2Cl2");

  event
    .create("rhodium_sulfate_solution")
    .liquid()
    .color(0x5e3c2a)
    .formula("Rh2(SO4)3"); // Impure Rhodium

  event
    .create("rhodium_salt_solution")
    .liquid()
    .color(0xbfbaba)
    .formula("Na3RhCl6");

  event
    .create("rhodium_filter_cake_solution")
    .liquid()
    .color(0x8c8484);

  event
    .create("ruthenium_tetroxide_solution")
    .liquid()
    .color(0x9bc0c9)
    .formula("RuO4");

  event
    .create("hot_ruthenium_tetroxide_solution")
    .liquid()
    .color(0xb3dde8)
    .formula("RuO4");

  event
    .create("acidic_iridium_solution")
    .liquid()
    .color(0x262133)
    .formula("H2IrCl6");

  event
    .create("osmium_solution")
    .liquid()
    .color(0x040b1c)
    .formula("OsCl4");

  event
    .create("sodium_formate")
    .fluid()
    .color(0xde7373)
    .formula("HCOONa");

  event
    .create("platinum_concentrate")
    .fluid()
    .color(0xf2f2a2)
    .formula("H2PtCl6");

  // ----------------------------------------------
  // Rocket Fuels
  // ----------------------------------------------

    // Liquid Hydrogen
  event
    .create("liquid_hydrogen")
    .liquid(20)
    .color(0xb3d9ff) 
    .formula("H2");

  // Cryogenic Hydrolox (T3/T4 Rocket Fuel)
  event
    .create("hydrolox")
    .liquid(20)
    .color(0x33ccff) 
    .formula("H4O2");

    // Cryogenic Hydrolox (T3/T4 Rocket Fuel)
  event
    .create("originium_stabilized_hydrolox")
    .liquid(0)
    .color(0x0066ff) 
    .secondaryColor(0xff985c)
    .formula("H4O2");

  // ----------------------------------------------
  // Solvents
  // ----------------------------------------------
  event.create('diphenyl_sulfone')
          .fluid()
          .color(0xeaeaea) // A pale, off-white liquid
          .components('12x carbon', '10x hydrogen', '2x oxygen', '1x sulfur');

  // ----------------------------------------------
  // Polymers
  // ----------------------------------------------

  event.create('polyether_ether_ketone')
        .ingot()
        .polymer()
        .liquid()
        .color(0xdfcba4) // A nice beige/tan color
        .components('19x carbon', '12x hydrogen', '3x oxygen') // C19H12O3
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_FRAME);

  event.create('phosgene')
        .fluid() // Registers it as a pumpable fluid/gas
        .color(0xeeeeaa) // A pale, sickly yellow-green
        .components('1x carbon', '1x oxygen', '2x chlorine');

  event.create('fluorobenzene')
        .fluid()
        .color(0xddffdd) // A very pale, almost clear green/white liquid
        .components('6x carbon', '5x hydrogen', '1x fluorine');

  // ----------------------------------------------
  // Intermittent Materials for Processing Lines
  // ----------------------------------------------

  event.create('aluminium_chloride_solution')
        .fluid()
        .color(0x94A3B8)
        .iconSet('fluid');
    
});
