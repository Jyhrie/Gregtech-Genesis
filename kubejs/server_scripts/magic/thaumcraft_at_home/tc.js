ServerEvents.recipes((event) => {

  // Voidmetal Ingot
  event.custom({
    type: "lychee:item_inside",
    item_in: [{ item: "kubejs:void_seed" }, { item: "kubejs:thaumium_ingot" }],
    block_in: {
      blocks: ["minecraft:water_cauldron"],
      state: { level: 3 }, // Works as long as there is water
    },
    post: [
      {
        type: "drop_item",
        item: "kubejs:voidmetal_ingot",
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
    ],
  });

    // Thaumium Ingot
  event.custom({
    type: "lychee:item_inside",
    item_in: [
      { item: "malum:arcane_spirit" },
      { item: "minecraft:iron_ingot" },
    ],
    block_in: {
      blocks: ["minecraft:water_cauldron"],
      state: { level: 3 }, // Works as long as there is water
    },
    post: [
      {
        type: "drop_item",
        item: "kubejs:thaumium_ingot",
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
    ],
  });
});
