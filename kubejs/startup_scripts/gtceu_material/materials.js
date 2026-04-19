GTCEuStartupEvents.registry("gtceu:material", (event) => {
  event.create("zinc_sulfate").dust().color(0x302828).formula("ZnSO4");

  event.create("crude_rhodium_metal").dust().color(0x302828).formula("Rh?");

  event.create("rhodium_salt").dust().color(0xe0d5d5).formula("Na3RhCl6");

  event.create("rhodium_nitrate").dust().color(0x26130d).formula("Rh(NO3)3");

  event.create("rhodium_filter_cake").dust().color(0x26130d);

  event.create("reprecipitated_rhodium").dust().color(0x26130d).formula("Rh");

  event.create("sodium_ruthenate").dust().color(0x1a35b0).formula("Na2RuO4");

  event.create("iridium_dioxide").dust().color(0x262133).formula("IrO2");

  event.create("leach_residue").dust().color(0x616142);

  event.create("moonstone").dust().color(0x111929);

  event.create("sandstone").dust().color(0xd9c99a).iconSet("sand");

  event
    .create("alumina")
    .dust()
    .color(0xdbe5f1)
    .iconSet("shiny")
    .components("2x aluminium", "3x oxygen");

  event.create("uranium_fuel_blend")
    .dust()
    .color(0x33ff33)
    .iconSet("fine")
    .components("9x uranium", "1x uranium_235")
    .flags(GTMaterialFlags.DISABLE_DECOMPOSITION);

  event.create("plutonium_fuel_blend")
    .dust()
    .color(0xff3333)
    .iconSet("fine")
    .components("9x uranium", "1x plutonium")
    .flags(GTMaterialFlags.DISABLE_DECOMPOSITION);

  event.create("naquadah_fuel_blend")
    .dust()
    .color(0x202020)
    .iconSet("shiny")
    .components("3x naquadah", "1x enriched_naquadah")
    .flags(GTMaterialFlags.DISABLE_DECOMPOSITION);
});
