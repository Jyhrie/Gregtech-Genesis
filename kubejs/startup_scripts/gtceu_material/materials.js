GTCEuStartupEvents.registry("gtceu:material", (event) => {
  event.create("zinc_sulfate").dust().color(0x302828).formula("ZnSO4");

  event.create("crude_rhodium_metal").dust().color(0x302828).formula("Rh?");

  event.create("rhodium_salt").dust().color(0xe0d5d5).formula("Na3RhCl6");

  event.create("rhodium_nitrate").dust().color(0x26130d).formula("Rh(NO3)3");

  event.create("rhodium_filter_cake").dust().color(0x26130d);

  event.create("reprecipitated_rhodium").dust().color(0x26130d).formula("Rh");

  event.create("sodium_ruthenate").dust().color(0x1a35b0).formula("Na2RuO4");

  event.create("iridium_dioxide").dust().color(0x262133).formula("IrO2");

  event.create("platinum_leach_residue").dust().color(0x616142);

  event.create("moonstone").dust().color(0x192845);

  event.create("sandstone").dust().color(0xd9c99a).iconSet("sand");

  event
    .create("oroberyl")
    .gem()
    .color(0xfa1f0f)
    .secondaryColor(0x0f0a0a)
    .iconSet("certus");

  event
    .create("alumina")
    .dust()
    .color(0xdbe5f1)
    .iconSet("shiny")
    .components("2x aluminium", "3x oxygen");

  event
    .create("uranium_fuel_blend")
    .dust()
    .color(0x33ff33)
    .iconSet("fine")
    .components("9x uranium", "1x uranium_235")
    .flags(GTMaterialFlags.DISABLE_DECOMPOSITION);

  event
    .create("plutonium_fuel_blend")
    .dust()
    .color(0xff3333)
    .iconSet("fine")
    .components("9x uranium", "1x plutonium")
    .flags(GTMaterialFlags.DISABLE_DECOMPOSITION);

  event
    .create("naquadah_fuel_blend")
    .dust()
    .color(0x202020)
    .iconSet("shiny")
    .components("3x naquadah", "1x enriched_naquadah")
    .flags(GTMaterialFlags.DISABLE_DECOMPOSITION);

  // ----------------------------------------------
  // Bastnasite Processing Line Materials
  // ----------------------------------------------

  event
    .create("bastnasite_rare_earth_oxides")
    .dust()
    .color(0x756b5c) // Earthy grey-brown
    .iconSet("DULL");

  event
    .create("leached_bastnasite_rare_earth_oxides")
    .dust()
    .color(0x948a7a) // Lighter, washed-out grey-brown
    .iconSet("DULL");
  event
    .create("cerium_oxidised_rare_earth_oxides")
    .dust()
    .color(0xb8b87a) // Cerium compounds often have a pale yellowish tint
    .iconSet("DULL");

  event
    .create("bastnasite_rarer_earth_oxides")
    .dust()
    .color(0x595952) // Darker, denser grey
    .iconSet("DULL");

  event
    .create("samaric_concentrate")
    .dust()
    .color(0xe6e6cc) // Samarium oxide is a pale, yellowish-white
    .iconSet("METALLIC"); // Upgrading the icon set to reflect higher purity

  event
    .create("neodymic_concentrate")
    .dust()
    .color(0xcc99ff)
    .iconSet("METALLIC");

  event
    .create("fluorinated_samaric_concentrate")
    .dust()
    .color(0xccff99) // Pale yellow-green
    .iconSet("DULL")

  event
    .create("ammonium_nitrate")
    .dust()
    .fluid()
    .color(0xe6e6e6) // White/off-white crystal
    .iconSet("ROUGH") // Rough is good for crystalline salts

  event
    .create("samaric_residue")
    .dust()
    .color(0x808060) // Dirty yellow-brown
    .iconSet("DULL")

  event
    .create("terbium_nitrate")
    .dust()
    .color(0xf0e6f0) // Colorless to very pale pink

  event
    .create("neodymium_oxide")
    .dust()
    .color(0x8a99c7) // Neodymium oxide is famously light blue/violet
    .iconSet("DULL")

  event
    .create("lanthanum_chloride")
    .dust()
    .color(0xffffff) // Pure white salt
    .iconSet("ROUGH")

  
  // ----------------------------------------------
  // Cerium Processing Line Materials
  // ----------------------------------------------

  event
    .create("cerium_dioxide")
    .dust()
    .color(0xffffcc) // Pale yellow powder
    .iconSet("DULL")

  event
    .create("cerium_oxalate")
    .dust()
    .color(0xfafafa) // White precipitate
    .iconSet("DULL")

  event
    .create("cerium_3_oxide") // Often written as Cerium(III) Oxide
    .dust()
    .color(0xcccc99) // Yellow-green
    .iconSet("DULL")

  event
    .create("cerium_chloride")
    .dust()
    .color(0xffff99) // Pale yellow liquid

  event
    .create("vanadium_pentoxide")
    .dust()
    .color(0xa64f19)

  // ----------------------------------------------
  // Monazite Processing Line Materials
  // ----------------------------------------------

  // Ores and Basic Powders
  event.create("thorianite")
    .dust()
    .color(0x303030) // Dark brownish-black (typical of the mineral)
  
  event.create("acidic_monazite_powder")
    .dust()
    .color(0x8C8A67) // Yellowish-grey
  
  event.create("monazite_sulfate")
    .dust()
    .color(0x9E9B82) // Pale earthy yellow

  // Monazite Filtrates and Concentrates
  event.create("monazite_rare_earth_concentrate")
    .dust()
    .color(0xABA279) // Pale sandy pink/yellow
  
  event.create("monazite_rare_earth_filtrate")
    .dust()
    .color(0xA2A691) // Pale greenish-white
  
  event.create("neutralized_monazite_rare_earth_filtrate")
    .dust()
    .color(0xB8BCA8) // Whitish-grey
  
  event.create("monazite_rare_earth_hydroxide_concentrate")
    .dust()
    .color(0xC1BAA1) // Pale off-white/beige

  // Uranium and Specific Elements
  event.create("uranium_filtrate")
    .dust()
    .color(0x99B334) // Bright radioactive yellow-green
  
  event.create("neutralized_uranium_filtrate")
    .dust()
    .color(0xA5C443) // Slightly paler yellow-green
  
  event.create("europium_3_oxide")
    .dust()
    .color(0xFFE6EB) // White with a faint pink tint

  // ----------------------------------------------
  // Platinum Processing Line Materials
  // ----------------------------------------------

    // Platinum Group
    event.create('platinum_residue')
        .dust()
        .color(0x170B0B)
        .formula('Pt?')

    event.create('reprecipitated_platinum')
        .dust()
        .color(0xc2b491)
        .formula('Pt')

    event.create('platinum_salt')
        .dust()
        .color(0x616142)
        .formula('(PtCl6)Na2')
    
    event.create('sodium_nitrate')
        .dust()
        .color(0x1F3080)
        .formula('NaNO3')
    // Palladium Line

    event.create('palladium_metallic_powder')
        .dust()
        .color(0x3E4039)
        .formula('Pd?') // Impure Palladium powder

    event.create('reprecipitated_palladium')
        .dust()
        .color(0xC1C1C1)
        .formula('Pd') // Pure refined Palladium

    event.create('palladium_salts')
        .dust()
        .color(0xB0BA83)
        .formula('PdCl2') // Palladium(II) Chloride

  // ----------------------------------------------
  // Gravel Processing Line Materials
  // ----------------------------------------------

    event.create('ochrum')
        .dust()
        .color(0x9E844D) // Gold-ish brown
        .iconSet('rough');

    event.create('crimsite')
        .dust()
        .color(0x8B3A3A) // Reddish
        .iconSet('rough');

    event.create('veridium')
        .dust()
        .color(0x3B8970) // Greenish
        .iconSet('rough');

    event.create('asurine')
        .dust()
        .color(0x40587C) // Bluish
        .iconSet('rough');

    event.create('scorchia')
        .dust()
        .color(0x2D2924) // Dark grey/black
        .iconSet('rough');

    event.create('scoria')
        .dust()
        .color(0x423832) // Dark brown
        .iconSet('rough');

  // ----------------------------------------------
  // Polymers, Polymer Derivatives, and Chemical Intermediates
  // ----------------------------------------------

  event.create('difluorobenzophenone')
      .dust() 
      .color(0xdda668) 
      .components('13x carbon', '8x hydrogen', '2x fluorine', '1x oxygen');

  event.create('hydroquinone')
        .dust()
        .color(0xf4f4f4) // A pale off-white powder
        .components('6x carbon', '6x hydrogen', '2x oxygen');

  event.create('sodium_carbonate')
        .dust()
        .color(0xfafafa) // A bright white powder
        .components('2x sodium', '1x carbon', '3x oxygen');
  
  event.create('sodium_fluoride')
        .dust()
        .color(0xffffff) // Pure white powder
        .components('1x sodium', '1x fluorine');

});
