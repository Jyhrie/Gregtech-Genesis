ServerEvents.recipes((event) => {
  event
    .shapeless(
      "occultism:datura_seeds", // Output (The Seed)
      [
        "occultism:datura", // Input (The Fruit)
      ],
    )
    .id("occultism:datura_to_seed_shapeless");

  event.custom({
    type: "hexerei:mixingcauldron",
    output: { item: "occultism:datura", count: 1 },
    ingredients: [
        { item: 'minecraft:apple' },              // 0: TOP
        { item: 'malum:eldritch_spirit' },        // 1: Spirit
        { item: 'malum:processed_soulstone' },    // 2: RIGHT
        { item: 'malum:eldritch_spirit' },        // 3: Spirit
        { item: 'hexerei:belladonna_flowers' },    // 4: BOTTOM
        { item: 'malum:eldritch_spirit' },        // 5: Spirit
        { item: 'malum:processed_soulstone' },    // 6: LEFT
        { item: 'malum:eldritch_spirit' }         // 7: Spirit
    ],
    liquid: { fluid: "minecraft:water" },
    liquidOutput: { fluid: "minecraft:water" },
    fluidLevelsConsumed: 1000, // Adjusted to 2 buckets
    heatRequirement: "heated", // Requires fire/magma beneath
    id: "occultism:datura_from_hexerei_cauldron",
  });
});
