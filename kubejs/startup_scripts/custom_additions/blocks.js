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
    .defaultTranslucent()
    .noDrops()
    .notSolid()
    .suffocating(false)
    .viewBlocking(false)
    .fullBlock(false)
    .renderType("cutout");

  e.create("iberian_sand", 'falling')
    .displayName("Iberian Sand")
    .material("sand") 
    .sandSoundType()
    .hardness(0.5) 
    .resistance(0.5) 
    .tagBlock("minecraft:mineable/shovel")
    .tagBlock("minecraft:sand"); 

  e.create("iberian_sandstone")
    .displayName("Iberian Sandstone")
    .material("stone")     
    .hardness(0.8)          
    .resistance(0.8)        
    .tagBlock("minecraft:mineable/pickaxe") 
    .tagBlock("minecraft:stone_crafting_materials")
    .requiresTool(true);   

  e.create("siestan_sand", 'falling')
    .displayName("Siestan Sand")
    .material("sand") 
    .sandSoundType()
    .hardness(0.5) 
    .resistance(0.5) 
    .tagBlock("minecraft:mineable/shovel")
    .tagBlock("minecraft:sand"); 

  e.create("siestan_sandstone")
    .displayName("Siestan Sandstone")
    .material("stone")     
    .hardness(0.8)          
    .resistance(0.8)        
    .tagBlock("minecraft:mineable/pickaxe") 
    .tagBlock("minecraft:stone_crafting_materials")
    .requiresTool(true);   

  e.create("jade_block")
    .displayName("Jade Block")
    .material("amethyst")      // Gives it the crystalline "shimmer" sounds
    .hardness(5.0)            // Matches Emerald/Diamond block hardness
    .resistance(6.0)          // Matches vanilla gemstone resistance
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("minecraft:needs_iron_tool") // Requires Iron tier or better
    .tagBlock("forge:storage_blocks/jade") // For mod compatibility/recipes
    .requiresTool(true);

  e.create('lightning_catcher_core')
      .displayName('Lightning Collector Core')
      .soundType('metal')
      .hardness(6.0)
      .resistance(12.0)
      .requiresTool(true);

  e.create('lunar_array_cell')
        .displayName('Lunar Array Cell')
        .soundType('metal')
        .hardness(6.0)
        .resistance(12.0)
        .requiresTool(true)
        .material('iron')
        .texture('up', 'kubejs:block/machine_parts/lunar_array_cell/top') // Top face
        .texture('down', 'kubejs:block/machine_parts/lunar_array_cell/bottom') // Bottom face
        .texture('north', 'kubejs:block/machine_parts/lunar_array_cell/side') // Sides
        .texture('south', 'kubejs:block/machine_parts/lunar_array_cell/side')
        .texture('east', 'kubejs:block/machine_parts/lunar_array_cell/side')
        .texture('west', 'kubejs:block/machine_parts/lunar_array_cell/side')
});
