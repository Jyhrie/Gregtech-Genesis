const unification_map_ingots = [
  // Thermal
  {
    target: "thermal:tin_ingot",
    duplicates: ["forestry:ingot_tin", "gtceu:tin_ingot"],
  },
  {
    target: "thermal:nickel_ingot",
    duplicates: ["gtceu:nickel_ingot"],
  },
  {
    target: "thermal:silver_ingot",
    duplicates: ["gtceu:silver_ingot", "occultism:silver_ingot"],
  },
  {
    target: "thermal:steel_ingot",
    duplicates: [
      "ad_astra:steel_ingot",
      "gtceu:steel_ingot",
      "tconstruct:steel_ingot",
    ],
  },
  {
    target: "thermal:bronze_ingot",
    duplicates: ["forestry:ingot_bronze", "gtceu:bronze_ingot"],
  },
  {
    target: "thermal:electrum_ingot",
    duplicates: ["gtceu:electrum_ingot"],
  },
  {
    target: "thermal:lead_ingot",
    duplicates: ["gtceu:lead_ingot"],
  },
  {
    target: "thermal:constantan_ingot",
    duplicates: ["gtceu:constantan_ingot"],
  },
  {
    target: "thermal:invar_ingot",
    duplicates: ["gtceu:invar_ingot"],
  },
  {
    target: "thermal:signalum_ingot",
    duplicates: ["gtceu:signalum_ingot"],
  },
  {
    target: "thermal:lumium_ingot",
    duplicates: ["gtceu:lumium_ingot"],
  },
  {
    target: "thermal:enderium_ingot",
    duplicates: ["gtceu:enderium_ingot"],
  },

  // Thermal Extra
  {
    target: "thermal_extra:shellite_ingot",
    duplicates: ["gtceu:shellite_ingot"],
  },
  {
    target: "thermal_extra:twinite_ingot",
    duplicates: ["gtceu:twinite_ingot"],
  },
  {
    target: "thermal_extra:soul_infused_ingot",
    duplicates: ["gtceu:soul_infused_ingot"],
  },
  {
    target: "thermal_extra:abyssal_ingot",
    duplicates: ["gtceu:abyssal_ingot"],
  },
  {
    target: "thermal_extra:dragonsteel_ingot",
    duplicates: ["gtceu:dragonsteel_ingot"],
  },

  // Create
  {
    target: "create:zinc_ingot",
    duplicates: ["gtceu:zinc_ingot"],
  },
  {
    target: "create:brass_ingot",
    duplicates: ["gtceu:brass_ingot"],
  },

  // Terramity
  {
    target: "terramity:dimlite_ingot",
    duplicates: ["gtceu:dimlite_ingot"],
  },
  {
    target: "terramity:virentium_alloy_ingot",
    duplicates: ["gtceu:virentium_ingot"],
  },
  {
    target: "terramity:cosmilite_ingot",
    duplicates: ["gtceu:cosmilite_ingot"],
  },
  {
    target: "terramity:iridium",
    duplicates: ["gtceu:crystalline_iridium_ingot"],
  },
  {
    target: "terramity:void_alloy",
    duplicates: ["gtceu:void_alloy_ingot"],
  },
  {
    target: "terramity:conductite",
    duplicates: ["gtceu:conductite_ingot"],
  },
  {
    target: "terramity:hellspec_alloy",
    duplicates: ["gtceu:hellspec_ingot"],
  },
  {
    target: "terramity:nyxium",
    duplicates: ["gtceu:nyxium_ingot"],
  },
  {
    target: "terramity:exodium_superalloy",
    duplicates: ["gtceu:exodium_ingot"],
  },
  {
    target: "terramity:reverium",
    duplicates: ["gtceu:reverium_ingot"],
  },
  {
    target: "terramity:profanum_ingot",
    duplicates: ["gtceu:profanum_ingot"],
  },
];

ServerEvents.tags("item", (event) => {
  unification_map_ingots.forEach((group) => {
    group.duplicates.forEach((item) => {
      // Strips the tags so they stop showing up in ore dictionary lookups
      event.removeAllTagsFrom(item);
    });
  });
});

ServerEvents.recipes((event) => {
  unification_map_ingots.forEach((group) => {
    group.duplicates.forEach((item) => {
      // 1. Swap all recipes that OUTPUT the duplicate to output the target instead
      event.replaceOutput({}, item, group.target);

      // 2. Swap all recipes that REQUIRE the duplicate to accept the target instead
      event.replaceInput({}, item, group.target);
    });
  });
});

//   const ingots_to_purge = [
//     "thermal:tin_ingot",
//     "thermal:lead_ingot",
//     "thermal:silver_ingot",
//     "thermal:nickel_ingot",
//     "thermal:bronze_ingot",
//     "thermal:electrum_ingot",
//     "thermal:invar_ingot",
//     "thermal:constantan_ingot",
//     "thermal:signalum_ingot",
//     "thermal:lumium_ingot",
//     "thermal:enderium_ingot",
//     "thermal:ruby",
//     "thermal:sapphire",
//     "thermal:apatite",
//     "thermal:cinnabar",
//     "thermal:niter",
//     "thermal:sulfur",
//     "thermal:coal_coke",
//     "ad_astra:steel_ingot",
//     "tconstruct:steel_ingot",
//     "occultism:silver_ingot",
//     "forestry:ingot_tin",
//     "forestry:ingot_bronze",
//     "create:zinc_ingot",
//     "gtceu:dimlite_ingot",
//     "gtceu:virentium_ingot",
//     "gtceu:cosmilite_ingot",
//     "gtceu:crystalline_iridium_ingot",
//     "gtceu:void_alloy_ingot",
//     "gtceu:conductite_ingot",
//     "gtceu:hellspec_ingot",
//     "gtceu:nyxium_ingot",
//     "gtceu:exodium_ingot",
//     "gtceu:reverium_ingot",
//     "gtceu:profanum_ingot",
//     "gtceu:dragonsteel_ingot",
//     "gtceu:shellite_ingot",
//     "gtceu:twinite_ingot",
//     "gtceu:abyssal_ingot",
//     "gtceu:soul_infused_ingot"
//   ];

// ServerEvents.tags("item", (event) => {
//   ingots_to_purge.forEach((item) => {
//     event.removeAllTagsFrom(item);
//   });
// });

// ServerEvents.recipes((event) => {
//   ingots_to_purge.forEach((item) => {
//     event.remove({ output: item });
//     event.remove({ input: item });
//   });
