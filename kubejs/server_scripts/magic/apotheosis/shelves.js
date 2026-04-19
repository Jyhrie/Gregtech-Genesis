ServerEvents.recipes((event) => {
  const shelves = [
    "apotheosis:hellshelf",
    "apotheosis:seashelf",
    "apotheosis:infused_hellshelf",
    "apotheosis:infused_seashelf",
    "apotheosis:blazing_hellshelf",
    "apotheosis:glowing_hellshelf",
    "apotheosis:crystal_seashelf",
    "apotheosis:heart_seashelf",
  ];

  shelves.forEach((shelf) => {
    event.remove({ output: shelf });
  });

  event.custom({
    type: "malum:spirit_infusion",
    input: {
      item: "minecraft:bookshelf",
      count: 1,
    },
    output: {
      item: "apotheosis:hellshelf",
      count: 1,
    },
    extra_items: [
      { item: "malum:null_slate", count: 1 },
      { item: "minecraft:nether_bricks", count: 1 },
      { item: "minecraft:nether_bricks", count: 1 },
      { item: "minecraft:blaze_powder", count: 1 },
    ],
    spirits: [
      { type: "infernal", count: 12 },
      { type: "arcane", count: 4 },
    ],
  });

  event.custom({
    type: "malum:spirit_infusion",
    input: {
      item: "minecraft:bookshelf",
      count: 1,
    },
    output: {
      item: "apotheosis:seashelf",
      count: 1,
    },
    extra_items: [
      { item: "malum:mnemonic_fragment", count: 1 },
      { item: "minecraft:prismarine_bricks", count: 1 },
      { item: "minecraft:prismarine_bricks", count: 1 },
      { item: "minecraft:pufferfish", count: 1 },
    ],
    spirits: [
      { type: "aqueous", count: 12 },
      { type: "arcane", count: 4 },
    ],
  });
});

ServerEvents.recipes((event) => {
  //
  // 🔥 Blazing Hellshelf — from Infused Hellshelf
  //
  event.recipes.gtceu
    .assembler("blazing_hellshelf")
    .itemInputs(
      "apotheosis:infused_hellshelf",
      "2x minecraft:magma_block",
      "2x malum:auric_embers",
    )
    .itemOutputs("apotheosis:blazing_hellshelf")
    .duration(300)
    .EUt(512);

  //
  // ✨ Glowing Hellshelf — from Infused Seashelf
  //
  event.recipes.gtceu
    .assembler("glowing_hellshelf")
    .itemInputs(
      "apotheosis:infused_seashelf",
      "2x minecraft:glowstone",
      "minecraft:nether_star",
    )
    .itemOutputs("apotheosis:glowing_hellshelf")
    .duration(300)
    .EUt(512);

  //
  // 💎 Crystalline Hellshelf — from Infused Seashelf
  //
  event.recipes.gtceu
    .assembler("crystalline_seashelf")
    .itemInputs(
      "apotheosis:infused_seashelf",
      "2x minecraft:amethyst_shard",
      "2x minecraft:prismarine_crystals",
    )
    .itemOutputs("apotheosis:crystal_seashelf")
    .duration(300)
    .EUt(512);

  //
  // ❤️ Heart-Forged Hellshelf — from Infused Seashelf + Heart of the Sea
  //
  event.recipes.gtceu
    .assembler("heart_forged_seashelf")
    .itemInputs(
      "apotheosis:infused_seashelf",
      "2x minecraft:prismarine_bricks",
      "minecraft:heart_of_the_sea",
    )
    .itemOutputs("apotheosis:heart_seashelf")
    .duration(350)
    .EUt(512);
});
