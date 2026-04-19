ServerEvents.recipes((event) => {
  // Remove the default recipe first so there are no conflicts
  event.remove({ output: "tconstruct:seared_melter" });

  // Create the tank using 3 bricks on the left and 3 on the right
  event.shaped(
    "tconstruct:seared_melter", // The Result
    ["BBB", "BCB", "BBB"],
    {
      B: "tconstruct:seared_brick",
      C: "minecraft:copper_ingot",
    },
  );
});

ServerEvents.tags("item", (event) => {
  event.remove("minecraft:smelts_to_glass", "minecraft:sand");
  event.add("minecraft:smelts_to_glass", "gtceu:glass_dust");

  // If the tag is from a mod or a different namespace (like forge or c)
  // event.remove('forge:smelts_to_glass', 'modid:item_name')
});

ServerEvents.recipes((event) => {
  // Melting Stone into Liquid Seared Stone
  // The amount 144 is the standard for 1 'Ingot' / 1 Block worth of liquid in most versions
  event.custom({
    type: "tconstruct:melting",
    ingredient: { item: "minecraft:stone" },
    result: {
      fluid: "tconstruct:seared_stone",
      amount: 144,
    },
    temperature: 500, // Temperature required to melt
    time: 60, // How long it takes to melt (in ticks)
  });

  event.custom({
    type: "tconstruct:melting",
    ingredient: { item: "minecraft:cobblestone" },
    result: {
      fluid: "tconstruct:seared_stone",
      amount: 144,
    },
    temperature: 500, // Temperature required to melt
    time: 60, // How long it takes to melt (in ticks)
  });

    event.remove({ output: 'tconstruct:tinkers_anvil' })

    // 2. Add the specific recipe requested
    event.shaped('tconstruct:tinkers_anvil', [
        'AAA', // 3x Anvil Metals on top
        ' S ', // 1x Steel Block in the middle (space on sides)
        'BBB'  // 3x Seared Bricks on the bottom
    ], {
        A: '#tconstruct:anvil_metal',   // Any valid Tinkers' Anvil metal block
        S: '#forge:storage_blocks/steel', // The Steel Block core
        B: 'tconstruct:seared_bricks'    // Seared Brick blocks
    })

    event.remove({ output: 'tconstruct:scorched_anvil' })
        // 2. Add the specific recipe requested
    event.shaped('tconstruct:scorched_anvil', [
        'AAA', // 3x Anvil Metals on top
        ' S ', // 1x Steel Block in the middle (space on sides)
        'BBB'  // 3x Seared Bricks on the bottom
    ], {
        A: '#tconstruct:anvil_metal',   // Any valid Tinkers' Anvil metal block
        S: '#forge:storage_blocks/steel', // The Steel Block core
        B: 'tconstruct:scorched_bricks'    // Seared Brick blocks
    })
});
