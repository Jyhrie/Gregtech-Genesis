GTCEuStartupEvents.registry("gtceu:material", (event) => {
  event.create("advanced_glue").fluid().color(0xd4af74);

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

  event.create("rhodium_filter_cake_solution").liquid().color(0x8c8484);

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

  event.create("osmium_solution").liquid().color(0x040b1c).formula("OsCl4");

  event.create("sodium_formate").fluid().color(0xde7373).formula("HCOONa");

  event
    .create("platinum_concentrate")
    .fluid()
    .color(0xf2f2a2)
    .formula("H2PtCl6");
});
