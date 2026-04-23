ServerEvents.recipes((event) => {
  event.custom({
    type: "lychee:item_inside",
    item_in: [
      { item: "minecraft:glowstone_dust" },
      { item: "gtceu:amethyst_dust" },
      { item: "minecraft:bucket" },
    ],
    block_in: {
      blocks: ["minecraft:water_cauldron"],
      state: { level: 3 }, // Works as long as there is water
    },
    post: [
      {
        type: "drop_item",
        item: "kubejs:holy_water_bucket",
      },
      {
        type: "execute",
        // Format: playsound <sound> <source> <player> <x y z> <volume> <pitch>
        command:
          "playsound minecraft:entity.generic.splash neutral @a ~ ~ ~ 1 1",
        hide_in_viewer: true,
      },
      {
        type: "execute",
        // Format: playsound <sound> <source> <player> <x y z> <volume> <pitch>
        command:
          "playsound minecraft:block.brewing_stand.brew neutral @a ~ ~ ~ 1 1",
      },
      {
        type: "execute",
        command: "particle minecraft:bubble ~ ~0.8 ~ 0.3 0.3 0.3 0.05 15",
      },
      {
        type: "place",
        block: "cauldron",
      },
    ],
  });
});
