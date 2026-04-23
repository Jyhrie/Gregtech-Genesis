ServerEvents.recipes((event) => {
  event.custom({
    type: "malum:spirit_infusion",
    extra_items: [
      { count: 1, item: "botania:rune_air" },
      { count: 1, item: "botania:rune_water" },
      { count: 1, item: "botania:mana_powder" },
      { count: 1, item: "botania:mana_powder" },
      { count: 1, item: "botania:mana_diamond" },
    ],
    input: { count: 1, item: "malum:gilded_belt" },
    output: { count: 1, item: "botania:travel_belt" },
    spirits: [
      { type: "aerial", count: 32 },
      { type: "arcane", count: 16 },
      { type: "aqueous", count: 16 },
      { type: "earthen", count: 16 },
    ],
  });

  event.custom({
    type: "malum:spirit_infusion",
    extra_items: [
      { count: 1, item: "botania:rune_earth" },
      { count: 1, item: "botania:mana_powder" },
    ],
    input: { count: 1, item: "botania:travel_belt" },
    output: { count: 1, item: "botania:speed_up_belt" },
    spirits: [
      { type: "arcane", count: 8 },
      { type: "earthen", count: 32 },
    ],
  });

  event.custom({
    type: "malum:spirit_infusion",
    extra_items: [
      { count: 1, item: "botania:rune_earth" },
      { count: 1, item: "botania:mana_powder" },
      { count: 1, item: "botania:mana_powder" },
      { count: 1, item: "botania:mana_diamond" },
    ],
    input: { count: 1, item: "malum:gilded_belt" },
    output: { count: 1, item: "botania:knockback_belt" },
    spirits: [
      { type: "arcane", count: 16 },
      { type: "earthen", count: 32 },
    ],
  });

  event.custom({
    type: "malum:spirit_infusion",
    extra_items: [
      { count: 1, item: "botania:rune_spring" },
      { count: 1, item: "botania:rune_air" },
      { count: 1, item: "botania:life_essence" },
      { count: 1, item: "botania:pixie_dust" },
      { count: 1, item: "botania:pixie_dust" },
      { count: 1, item: "botania:elementium_ingot" },
      { count: 1, item: "botania:elementium_ingot" },
      { count: 1, item: "botania:dragonstone" },
    ],
    input: { count: 1, item: "botania:travel_belt" },
    output: { count: 1, item: "botania:super_travel_belt" },
    spirits: [
      { type: "aerial", count: 64 },
      { type: "arcane", count: 64 },
      { type: "sacred", count: 64 },
    ],
  });

  event.custom({
    type: "malum:spirit_infusion",
    extra_items: [
      { count: 1, item: "botania:rune_earth" },
      { count: 1, item: "botania:rune_fire" },
      { count: 1, item: "botania:rune_summer" },
      { count: 1, item: "minecraft:obsidian" },
      { count: 1, item: "minecraft:obsidian" },
      { count: 1, item: "minecraft:obsidian" },
    ],
    input: { count: 1, item: "malum:ornate_necklace" },
    output: { count: 1, item: "botania:lava_pendant" },
    spirits: [
      { type: "arcane", count: 16 },
      { type: "earthen", count: 32 },
      { type: "infernal", count: 32 },
    ],
  });

  event.custom({
    type: "malum:spirit_infusion",
    extra_items: [
      { count: 1, item: "bloodmagic:lavasigil" },
      { count: 1, item: "botania:rune_fire" },
      { count: 1, item: "botania:life_essence" },
      { count: 1, item: "cataclysm:ignitium_ingot" },
    ],
    input: { count: 1, item: "botania:lava_pendant" },
    output: { count: 1, item: "botania:super_lava_pendant" },
    spirits: [
      { type: "wicked", count: 64 },
      { type: "earthen", count: 64 },
      { type: "infernal", count: 64 },
    ],
  });

  event.custom({
    type: "malum:spirit_infusion",
    extra_items: [
      { count: 1, item: "botania:rune_air" },
      { count: 1, item: "botania:rune_spring" },
      { count: 1, item: "botania:elementium_ingot" },
      { count: 1, item: "botania:life_essence" },
      { count: 1, item: "botania:life_essence" },
      { count: 1, item: "botania:dragonstone" },
      { count: 1, item: "terramity:angel_feather" },
      { count: 1, item: "terramity:angel_feather" },
    ],
    input: { count: 1, item: "aquamirae:abyssal_tiara" },
    output: { count: 1, item: "botania:flight_tiara" },
    spirits: [{ type: "aerial", count: 64 }],
    spirits: [{ type: "sacred", count: 64 }],
  });
});
