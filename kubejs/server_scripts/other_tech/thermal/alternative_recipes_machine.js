ServerEvents.recipes((event) => {
  event.shaped("thermal:machine_crafter", ["CWC", "GHG", "CMC"], {
    H: "gtceu:lv_machine_hull",
    M: "#gtceu:circuits/lv",
    C: "#forge:ingots/tin",
    G: "thermal:rf_coil",
    W: "minecraft:crafting_table",
  });

  event.shaped("thermal:item_buffer", ["CWC", "GHG", "CMC"], {
    H: "gtceu:lv_machine_hull",
    M: "#gtceu:circuits/lv",
    C: "#forge:gems/quartz",
    G: "thermal:rf_coil",
    W: "#forge:chests/wooden",
  });

  event.shaped("thermal:charge_bench", ["CWC", "GHG", "CMC"], {
    H: "gtceu:lv_machine_hull",
    M: "#gtceu:circuits/lv",
    C: "#forge:ingots/electrum",
    G: "thermal:rf_coil",
    W: "#forge:ingots/lead",
  });

  event.shaped("thermal:device_tree_extractor", ["CWC", "GHG", "CMC"], {
    H: "minecraft:bucket",
    M: "thermal:redstone_servo",
    C: "#minecraft:planks",
    G: "#forge:glass",
    W: "#gtceu:circuits/lv",
  });

  event.shaped("thermal:device_fisher", ["CWC", "GHG", "CMC"], {
    H: "minecraft:fishing_rod",
    M: "thermal:redstone_servo",
    C: "#minecraft:planks",
    G: "#forge:glass",
    W: "#gtceu:circuits/lv",
  });

  event.shaped("thermal:device_composter", ["CWC", "GHG", "CMC"], {
    H: "minecraft:composter",
    M: "thermal:redstone_servo",
    C: "#minecraft:planks",
    G: "#forge:glass",
    W: "#gtceu:circuits/lv",
  });

  event.shaped("thermal:device_water_gen", ["CWC", "GHG", "CMC"], {
    H: "minecraft:bucket",
    M: "thermal:redstone_servo",
    C: "#forge:ingots/copper",
    G: "#forge:glass",
    W: "#gtceu:circuits/lv",
  });

  event.shaped("thermal:device_rock_gen", ["CWC", "GHG", "CMC"], {
    H: "minecraft:piston",
    M: "thermal:redstone_servo",
    C: "#forge:ingots/invar",
    G: "#forge:ingots/steel",
    W: "#gtceu:circuits/lv",
  });

  event.shaped("thermal:device_collector", ["CWC", "GHG", "CMC"], {
    H: "minecraft:hopper",
    M: "thermal:redstone_servo",
    C: "#forge:ingots/tin",
    G: "#forge:glass",
    W: "#gtceu:circuits/lv",
  });

  event.shaped("thermal:device_xp_condenser", ["CWC", "GHG", "CMC"], {
    H: "thermal:xp_crystal",
    M: "thermal:redstone_servo",
    C: "#forge:ingots/silver",
    G: "#forge:glass",
    W: "#gtceu:circuits/lv",
  });

  event.shaped("thermal:device_nullifier", ["CWC", "GHG", "CMC"], {
    H: "minecraft:lava_bucket",
    M: "thermal:redstone_servo",
    C: "#forge:ingots/lead",
    G: "#forge:glass",
    W: "#gtceu:circuits/lv",
  });

  event.shaped("thermal:device_potion_diffuser", ["CWC", "GHG", "CMC"], {
    H: "minecraft:glass_bottle",
    M: "thermal:redstone_servo",
    C: "#forge:ingots/silver",
    G: "#forge:glass",
    W: "#gtceu:circuits/lv",
  });
});
