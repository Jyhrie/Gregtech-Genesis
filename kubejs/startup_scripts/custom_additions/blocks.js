StartupEvents.registry("block", (e) => {
  //Arcane Ore
  e.create("arcane_ore")
    .soundType("stone")
    .hardness(2.0)
    .displayName("Arcane Ore")
    .tagBlock("mineable/pickaxe")
    .tagBlock("minecraft:needs_iron_tool");

  // Warded Stone
  e.create("warded_stone")
    .displayName("Warded Stone")
    .material("stone")
    .hardness(-1.0)
    .resistance(3600000) 
    .requiresTool(false)
    .tagBlock("minecraft:mineable/pickaxe"); 

  // Warded Glass
  e.create("warded_glass")
    .displayName("Warded Glass")
    .material("glass")
    .hardness(-1.0)
    .resistance(3600000)
    .transparent(true)
    .defaultCutout()
    .noDrops()
    .notSolid()
    .suffocating(false)
    .viewBlocking(false)
    .fullBlock(false)
    .renderType("cutout");

  e.create("iberian_sand")
    .displayName("Iberian Sand")
    .material("sand")
    .tagBlock("mineable/shovel"); // For JEI display purposes
});
