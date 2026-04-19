ServerEvents.recipes((event) => {
  event.recipes.ars_nouveau.enchanting_apparatus(
    [
      "malum:malignant_lead", // North
      "minecraft:heart_of_the_sea", // East
      "botania:black_lotus", // North East
      "malum:void_salts",
      "malum:malignant_lead", // South
      "malum:void_salts",
      "botania:black_lotus",
      "minecraft:echo_shard", // West
    ],
    "kubejs:primal_essence", // Center Reagent
    "kubejs:primal_charm", // Result
    10000, // Source Cost
  );
});
