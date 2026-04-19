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
    .hardness(-1.0) // -1.0 makes it impossible to mine (like Bedrock)
    .resistance(3600000) // High blast resistance
    .requiresTool(false) // Since it's unbreakable, no tool works anyway
    .tagBlock("minecraft:mineable/pickaxe"); // For JEI display purposes

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
});
