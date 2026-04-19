ServerEvents.tags("item", (event) => {
  // Adding all Autumnity maple saplings to a single tag for the recipes
  event.add("autumnity:maple_saplings", [
    "autumnity:maple_sapling",
    "autumnity:orange_maple_sapling",
    "autumnity:red_maple_sapling",
    "autumnity:yellow_maple_sapling",
  ]);
});

ServerEvents.recipes((event) => {
  // Helper function for seasonal runes using Botania Integration
  const seasonalRune = (output, ingredients, mana) => {
    event.remove({ output: output });
    event.recipes.botania.runic_altar(output, ingredients, mana);
  };

  // --- WINTER ---
  seasonalRune(
    "botania:rune_winter",
    [
      "gtceu:fine_sterling_silver_wire",
      "minecraft:snowball",
      "minecraft:spruce_sapling",
      "farmersdelight:hot_cocoa",
      "botania:light_blue_petal",
      "botania:white_petal",
      "botania:rune_water",
      "botania:rune_air",
    ],
    8000,
  );

  // --- SPRING ---
  seasonalRune(
    "botania:rune_spring",
    [
      "gtceu:fine_sterling_silver_wire",
      "minecraft:honey_bottle",
      "minecraft:cherry_sapling",
      "youkaisfeasts:mitarashi_dango",
      "botania:pink_petal",
      "botania:white_petal",
      "botania:rune_air",
      "botania:rune_earth",
    ],
    8000,
  );

  // --- AUTUMN ---
  seasonalRune(
    "botania:rune_autumn",
    [
      "gtceu:fine_sterling_silver_wire",
      "minecraft:leaf_litter",
      "#autumnity:maple_saplings",
      "minecraft:pumpkin_pie",
      "botania:red_petal",
      "botania:orange_petal",
      "botania:rune_air",
      "botania:rune_fire",
    ],
    8000,
  );

  // --- SUMMER ---
  seasonalRune(
    "botania:rune_summer",
    [
      "gtceu:fine_sterling_silver_wire",
      "minecraft:sunflower",
      "minecraft:oak_sapling",
      "farmersdelight:melon_juice",
      "botania:green_petal",
      "botania:light_blue_petal",
      "botania:rune_fire",
      "botania:rune_water",
    ],
    8000,
  );

  const elementalRune = (output, ingredients, mana) => {
    event.remove({ output: output });
    event.recipes.botania.runic_altar(output, ingredients, mana);
  };

  // --- WATER ---
  elementalRune(
    "botania:rune_water",
    ["botania:mana_powder", "minecraft:water_bottle", "botania:blue_petal"],
    2500,
  );

  // --- AIR ---
  elementalRune(
    "botania:rune_air",
    ["botania:mana_powder", "minecraft:feather", "botania:yellow_petal"],
    2500,
  );

  // --- FIRE ---
  elementalRune(
    "botania:rune_fire",
    ["botania:mana_powder", "minecraft:fire_charge", "botania:red_petal"],
    2500,
  );

  // --- EARTH ---
  elementalRune(
    "botania:rune_earth",
    ["botania:mana_powder", "minecraft:dirt", "botania:green_petal"],
    2500,
  );
});
