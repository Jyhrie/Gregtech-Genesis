ServerEvents.recipes((event) => {
  // This wipes every recipe that uses the Petal Apothecary

  event.shaped("botania:apothecary_livingrock", ["LSL", " L ", "LLL"], {
    L: "botania:livingrock",
    S: "hexerei:mindful_trance_blend",
  });

  event.custom({
    type: "lychee:item_inside",
    item_in: [
      { tag: "botania:petals/white" },
      { tag: "botania:petals/white" },
      { tag: "botania:petals/white" },
      { tag: "botania:petals/white" },
      { tag: "forge:seeds" },
    ],
    block_in: {
      blocks: ["minecraft:water"],
    },
    post: [
      {
        type: "drop_item",
        item: "botania:pure_daisy",
      },
      {
        type: "execute",
        command:
          "playsound minecraft:entity.generic.splash ambient @a ~ ~ ~ 1 1",
      },
    ],
  });

  event.remove({ output: "botania:terra_plate" });
  event.custom({
    type: "malum:spirit_infusion",
    extra_items: [
      { count: 1, item: "botania:rune_spring" },
      { count: 1, item: "botania:rune_summer" },
      { count: 1, item: "botania:rune_autumn" },
      { count: 1, item: "botania:rune_winter" },
      { count: 1, item: "minecraft:lapis_block" },
      { count: 1, item: "botania:manasteel_block" },
      { count: 1, item: "kubejs:primal_essence" },
      { count: 1, item: "botania:rune_mana" },
    ],
    input: { count: 1, item: "gtceu:double_graphene_plate" },
    output: { count: 1, item: "botania:terra_plate" },
    spirits: [
      { type: "aerial", count: 64 },
      { type: "arcane", count: 64 },
      { type: "aqueous", count: 64 },
      { type: "earthen", count: 64 },
      { type: "infernal", count: 64 },
      { type: "wicked", count: 64 },
      { type: "eldritch", count: 64 },
      { type: "sacred", count: 64 },
    ],
  });

  event.recipes.botania.petal_apothecary("botania:endoflame", [
    "botania:brown_petal",
    "botania:brown_petal",
    "botania:red_petal",
    "botania:light_gray_petal",
    "malum:infernal_spirit",
  ]);

  event.recipes.ars_nouveau.enchanting_apparatus(
    [
      "botania:manasteel_ingot",
      "malum:hallowed_gold_ingot",
      "botania:manasteel_ingot",
      "malum:hallowed_gold_ingot",
    ], // Ingredients
    "botania:mana_diamond",
    "botania:mana_pylon",
    2000, // Source Cost
    false, // Keep nbt
  );

  event.recipes.ars_nouveau.enchanting_apparatus(
    ["botania:terrasteel_ingot", "botania:livingwood", "botania:livingwood"],
    "botania:mana_pylon",
    "botania:natura_pylon",
    5000,
    false,
  );

  event.recipes.ars_nouveau.enchanting_apparatus(
    [
      "botania:pixie_dust",
      "botania:elementium_ingot",
      "botania:pixie_dust",
      "botania:elementium_ingot",
    ],
    "botania:mana_pylon",
    "botania:gaia_pylon",
    10000,
    false,
  );
});
