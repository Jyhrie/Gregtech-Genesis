// ServerEvents.recipes((event) => {

  // event.remove({ output: "ars_nouveau:storage_lectern" });
  // event.recipes.ars_nouveau.enchanting_apparatus(
  //   [
  //     "malum:block_of_hallowed_gold",
  //     "malum:runewood_planks",
  //     "botania:rune_winter",
  //     "bloodmagic:reinforcedslate",
  //     "kubejs:primal_essence",
  //     "kubejs:primal_essence",
  //     "malum:runewood_planks",
  //     "botania:rune_spring",
  //     "gtceu:sterling_silver_ingot",
  //     "botania:rune_autumn",
  //     "malum:runewood_planks",
  //     "kubejs:primal_essence",
  //     "kubejs:primal_essence",
  //     "bloodmagic:reinforcedslate",
  //     "botania:rune_summer",
  //     "malum:runewood_planks",
  //   ],
  //   "ars_nouveau:arcane_core", // Center reagent
  //   "malum:spirit_altar", // Output
  //   25000, // Source Cost: 7,500
  // );

  // event.remove({ output: "malum:runewood_sapling" });
  // event.recipes.ars_nouveau.enchanting_apparatus(
  //   ["kubejs:void_seed", "botania:mana_powder"],
  //   "ars_nouveau:red_archwood_sapling", // Center reagent
  //   "malum:runewood_sapling", // Output
  //   5000, // Source Cost: 5,000 (Half a full Jar)
  // );

  // event.remove({ output: "malum:azure_runewood_sapling" });
  // event.recipes.ars_nouveau.enchanting_apparatus(
  //   ["kubejs:void_seed", "botania:mana_powder"],
  //   "ars_nouveau:blue_archwood_sapling", // Center reagent
  //   "malum:azure_runewood_sapling", // Output
  //   5000, // Source Cost: 5,000 (Half a full Jar)
  // );

  // //Hallowed Gold
  // event.custom({
  //   type: "lychee:item_inside",
  //   item_in: [
  //     { item: "minecraft:gold_ingot" },
  //     { item: "minecraft:quartz" },
  //     { item: "malum:sacred_spirit" },
  //   ],
  //   block_in: {
  //     blocks: ["minecraft:water_cauldron"],
  //     state: { level: 3 }, // Works as long as there is water
  //   },
  //   post: [
  //     {
  //       type: "drop_item",
  //       item: "malum:hallowed_gold_ingot",
  //     },
  //     {
  //       type: "execute",
  //       // Format: playsound <sound> <source> <player> <x y z> <volume> <pitch>
  //       command:
  //         "playsound minecraft:entity.generic.splash neutral @a ~ ~ ~ 1 1",
  //       hide_in_viewer: true,
  //     },
  //     {
  //       type: "execute",
  //       // Format: playsound <sound> <source> <player> <x y z> <volume> <pitch>
  //       command:
  //         "playsound minecraft:block.brewing_stand.brew neutral @a ~ ~ ~ 1 1",
  //     },
  //     {
  //       type: "execute",
  //       command: "particle minecraft:bubble ~ ~0.8 ~ 0.3 0.3 0.3 0.05 15",
  //     },
  //   ],
  // });

  // //Cthonic Gold
  // event.custom({
  //   type: "malum:favor_of_the_void",
  //   input: {
  //     item: "malum:hallowed_gold_ingot",
  //   },
  //   output: {
  //     item: "malum:cthonic_gold",
  //     count: 1,
  //   },
  // });

  // //Primordial Pearl
  // event.custom({
  //   type: "malum:favor_of_the_void",
  //   input: {
  //     item: "kubejs:primal_essence",
  //   },
  //   output: {
  //     item: "kubejs:primordial_pearl",
  //     count: 1,
  //   },
  // });

  // //void seed
  // event.custom({
  //   type: "malum:favor_of_the_void",
  //   input: {
  //     tag: "forge:seeds",
  //   },
  //   output: {
  //     item: "kubejs:void_seed",
  //     count: 1,
  //   },
  // });

  // event.remove({ id: "malum:spirit_infusion/soul_stained_steel_ingot" });
  // event.custom({
  //   type: "malum:favor_of_the_void",
  //   input: {
  //     item: "gtceu:stainless_steel_ingot",
  //   },
  //   output: {
  //     item: "malum:soul_stained_steel_ingot",
  //     count: 1,
  //   },
  // });

  //Malignant Pewter
  // event.remove({ output: "malum:malignant_pewter_ingot" });
  // event.custom({
  //   type: "malum:spirit_infusion",
  //   input: {
  //     item: "malum:soul_stained_steel_ingot",
  //     count: 4,
  //   },
  //   output: {
  //     item: "malum:malignant_pewter_ingot",
  //     count: 1,
  //   },
  //   extra_items: [
  //     { "item": "malum:malignant_lead"}, 
  //     { "item": "malum:mnemonic_fragment"}, 
  //     { "item": "malum:null_slate"}, 
  //   ],
  //   spirits: [{ type: "umbral", count: 1 }],
  // });

  //Primal Charm

  // event.recipes.ars_nouveau.enchanting_apparatus(
  //     [
  //         'malum:malignant_lead',           // North
  //         'minecraft:heart_of_the_sea',     // East
  //         'botania:black_lotus',            // North East
  //         'malum:void_salts',
  //         'malum:malignant_lead',           // South
  //         'malum:void_salts',
  //         'botania:black_lotus',
  //         'minecraft:echo_shard',           // West
  //     ],
  //     'kubejs:primal_essence',              // Center Reagent
  //     'kubejs:primal_charm',                // Result
  //     10000                                 // Source Cost
  // )

  //Umbral Essence
  // event.custom({
  //   type: "malum:favor_of_the_void",
  //   input: {
  //     item: "kubejs:primal_charm"
  //   },
  //   output: {
  //     item: "malum:umbral_spirit",
  //     count: 1,
  //   },
  // });
// });
