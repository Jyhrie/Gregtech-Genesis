ServerEvents.recipes((event) => {
  // Clear default recipes
  event.remove({ output: "ars_nouveau:novice_spell_book" });
  event.remove({ output: "ars_nouveau:apprentice_spell_book" });
  event.remove({ output: "ars_nouveau:archmage_spell_book" });

  // --- TIER 1: NOVICE SPELL BOOK ---
  // Source: 3000
  event.recipes.ars_nouveau.enchanting_apparatus(
    [
      "malum:chunk_of_brilliance", // N / S
      "botania:manaweave_cloth",
      "ars_nouveau:magebloom_fiber",
      "botania:manaweave_cloth", // NE / NW
      "malum:chunk_of_brilliance", // E / W
      "botania:manaweave_cloth",
      "ars_nouveau:magebloom_fiber",
      "botania:manaweave_cloth", // SE / SW
    ],
    "minecraft:writable_book",
    "ars_nouveau:novice_spell_book",
    3000,
  );

  // --- TIER 2: APPRENTICE'S SPELL BOOK ---
  // Source: 10000
  event.recipes.ars_nouveau.enchanting_apparatus(
    [
      "gtceu:sterling_silver_plate", // N / S
      "malum:spirit_fabric",
      "minecraft:blaze_powder",
      "malum:spirit_fabric", // NE / NW
      "gtceu:sterling_silver_plate", // E / W
      "malum:spirit_fabric",
      "minecraft:blaze_powder",
      "malum:spirit_fabric", // SE / SW
    ],
    "minecraft:writable_book",
    "ars_nouveau:apprentice_spell_book",
    10000,
  );

  // --- TIER 3: ARCHMAGE'S SPELL BOOK ---
  // Source: 25000
  event.recipes.ars_nouveau.enchanting_apparatus(
    [
      "kubejs:primordial_pearl", // North
      "aquamirae:abyssal_amethyst", // West
      "cataclysm:essence_of_the_storm", // North East
      "occultism:afrit_essence", // South East
      "botania:rune_pride", // South (Rune of Green)
      "occultism:afrit_essence", // South West
      "cataclysm:essence_of_the_storm", // North West
      "aquamirae:abyssal_amethyst", // East
    ],
    "minecraft:writable_book",
    "ars_nouveau:archmage_spell_book",
    25000,
  );
});
