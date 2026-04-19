ServerEvents.recipes((event) => {

//Spirit Altar
  event.remove({ output: "malum:spirit_altar" });
  event.recipes.ars_nouveau.enchanting_apparatus(
    [
      "malum:block_of_hallowed_gold",
      "malum:runewood_planks",
      "botania:rune_winter",
      "bloodmagic:reinforcedslate",
      "kubejs:primal_essence",
      "kubejs:primal_essence",
      "malum:runewood_planks",
      "botania:rune_spring",
      "gtceu:sterling_silver_ingot",
      "botania:rune_autumn",
      "malum:runewood_planks",
      "kubejs:primal_essence",
      "kubejs:primal_essence",
      "bloodmagic:reinforcedslate",
      "botania:rune_summer",
      "malum:runewood_planks",
    ],
    "ars_nouveau:arcane_core", // Center reagent
    "malum:spirit_altar", // Output
    25000, // Source Cost: 7,500
  );

  event.remove({ output: "malum:runewood_sapling" });
  event.recipes.ars_nouveau.enchanting_apparatus(
    ["malum:processed_soulstone", "malum:chunk_of_brilliance", "botania:mana_powder"],
    "ars_nouveau:red_archwood_sapling", // Center reagent
    "malum:runewood_sapling", // Output
    5000, // Source Cost: 5,000 (Half a full Jar)
  );

  event.remove({ output: "malum:azure_runewood_sapling" });
  event.recipes.ars_nouveau.enchanting_apparatus(
    ["malum:processed_soulstone", "malum:chunk_of_brilliance", "botania:mana_powder"],
    "ars_nouveau:blue_archwood_sapling", // Center reagent
    "malum:azure_runewood_sapling", // Output
    5000, // Source Cost: 5,000 (Half a full Jar)
  );

});