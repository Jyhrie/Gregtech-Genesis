ServerEvents.recipes((event) => {
//   event.custom({
//     type: "lychee:item_inside",
//     item_in: [
//       { item: "minecraft:iron_ingot" },
//       { item: "malum:sacred_spirit" },
//     ],
//     block_in: {
//       blocks: ["minecraft:water_cauldron"],
//       state: { level: 3 }, // Works as long as there is water
//     },
//     post: [
//       {
//         type: "drop_item",
//         item: "minecraft:diamond",
//       },
//       {
//         type: "execute",
//         // Format: playsound <sound> <source> <player> <x y z> <volume> <pitch>
//         command:
//           "playsound minecraft:entity.generic.splash neutral @a ~ ~ ~ 1 1",
//       },
//       {
//         type: "execute",
//         // Format: playsound <sound> <source> <player> <x y z> <volume> <pitch>
//         command:
//           "playsound minecraft:block.brewing_stand.brew neutral @a ~ ~ ~ 1 1",
//       },
//       // OPTIONAL: Add bubble particles to match the splash
//       {
//         type: "execute",
//         command: "particle minecraft:bubble ~ ~0.8 ~ 0.3 0.3 0.3 0.05 15",
//       },
//     ],
//   });

  // Enchanting Table
  event.remove({ output: "minecraft:enchanting_table" });
  event.custom({
    type: "malum:spirit_infusion",
    input: {
      item: "minecraft:bookshelf",
      count: 1,
    },
    output: {
      item: "minecraft:enchanting_table",
      count: 1,
    },
    extra_items: [
      { item: "gtceu:dense_obsidian_plate" },
      { item: "minecraft:red_carpet" },
      { item: "minecraft:diamond" },
      { item: "minecraft:diamond" },
      { item: "minecraft:diamond" },
      { item: "minecraft:diamond" },
      { item: "malum:ether" },
      { item: "malum:ether" },
    ],
    spirits: [
      { type: "eldritch", count: 45 },
      { type: "arcane", count: 45 },
      { type: "sacred", count: 45 },
      { type: "wicked", count: 45 },
      { type: "infernal", count: 45 },
      { type: "aerial", count: 45 },
      { type: "aqueous", count: 45 },
      { type: "earthen", count: 45 },
    ],
  });
});
