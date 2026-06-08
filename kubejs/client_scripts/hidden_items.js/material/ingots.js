JEIEvents.hideItems((event) => {
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

  unification_map_ingots.forEach((group) => {
    group.duplicates.forEach((duplicate_id) => {
      event.hide(duplicate_id);
    });
  });
});
