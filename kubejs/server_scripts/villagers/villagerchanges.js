MoreJSEvents.villagerTrades((event) => {
    // Clear every profession to build from scratch
    event.removeVanillaTrades();
    event.removeModdedTrades();

    // Define core variables
    let armorer = 'minecraft:armorer';
    let currency = 'kubejs:currency1'; 
    let currency2 = 'kubejs:currency2';

    event.addTrade(armorer, 1, [Item.of(currency, 2)], 'gtceu:iron_plate').maxUses(16);
    event.addTrade(armorer, 1, [Item.of(currency, 2)], 'gtceu:copper_plate').maxUses(16);
    event.addTrade(armorer, 1, [Item.of(currency, 2)], 'gtceu:tin_plate').maxUses(16);
    event.addTrade(armorer, 1, [Item.of('minecraft:iron_ingot', 2)], currency).maxUses(12);
    event.addTrade(armorer, 1, [Item.of('minecraft:copper_ingot', 2)], currency).maxUses(12);
    event.addTrade(armorer, 1, [Item.of('gtceu:tin_ingot', 2)], currency).maxUses(12);
    event.addTrade(armorer, 1, [Item.of('gtceu:bronze_ingot')], currency).maxUses(12);
    event.addTrade(armorer, 1, [Item.of(currency, 12), Item.of('gtceu:bronze_ingot', 5)], 'gtceu:bronze_brick_casing').maxUses(2);

    event.addTrade(armorer, 2, [Item.of('gtceu:steel_ingot', 1)], Item.of(currency, 6)).maxUses(16);
    event.addTrade(armorer, 2, [Item.of('create:brass_ingot', 1)], Item.of(currency, 3)).maxUses(16);
    event.addTrade(armorer, 2, [Item.of(currency)], Item.of('minecraft:brick', 4)).maxUses(16);
    event.addTrade(armorer, 2, [Item.of('gtceu:steel_ingot', 1), Item.of(currency, 1)], 'gtceu:steel_plate').maxUses(12);
    event.addTrade(armorer, 2, [Item.of('gtceu:bronze_plate', 4), Item.of(currency, 16)], 'gtceu:bronze_drum').maxUses(4);
    event.addTrade(armorer, 2, [Item.of('gtceu:steel_plate', 4), Item.of(currency, 16)], 'gtceu:steel_drum').maxUses(4);
    event.addTrade(armorer, 2, [Item.of('create:andesite_alloy', 1), Item.of(currency, 1)], 'create:andesite_casing').maxUses(12);
    event.addTrade(armorer, 2, [Item.of('create:brass_ingot', 1), Item.of(currency, 1)], 'create:brass_casing').maxUses(12);

    event.addTrade(armorer, 3, [Item.of('gtceu:invar_ingot', 1)], Item.of(currency, 4)).maxUses(16);
    event.addTrade(armorer, 3, [Item.of('gtceu:steel_plate', 4), Item.of(currency2, 4)], 'gtceu:lv_machine_casing').maxUses(4);
    event.addTrade(armorer, 3, [Item.of(currency, 16), Item.of('gtceu:steel_plate', 2)], 'gtceu:solid_machine_casing').maxUses(8);
    event.addTrade(armorer, 3, [Item.of('gtceu:steel_plate', 4), Item.of(currency2, 8)], 'create:mechanical_drill').maxUses(2);
    event.addTrade(armorer, 3, [Item.of('gtceu:steel_plate', 4), Item.of(currency2, 8)], 'create:mechanical_saw').maxUses(2);
    event.addTrade(armorer, 3, [Item.of(currency2, 1)], Item.of('create:fluid_tank', 4)).maxUses(8);
    event.addTrade(armorer, 3, [Item.of(currency2, 1)], Item.of('create:item_vault', 3)).maxUses(4);
    event.addTrade(armorer, 3, [Item.of('gtceu:iron_plate', 4), Item.of(currency2, 4)], Item.of('create:mechanical_harvester', 2)).maxUses(4);

    event.addTrade(armorer, 4, [Item.of('gtceu:aluminium_ingot', 1)], Item.of(currency, 8)).maxUses(16);
    event.addTrade(armorer, 4, [Item.of('gtceu:kanthal_ingot', 1)], Item.of('kubejs:currency2', 2)).maxUses(4);
    event.addTrade(armorer, 4, [Item.of('create:brass_ingot', 2), Item.of(currency2, 8)], 'create:rotation_speed_controller').maxUses(2);
    event.addTrade(armorer, 4, [Item.of('create:brass_ingot', 4), Item.of(currency2, 8)], 'create:deployer').maxUses(2);
    event.addTrade(armorer, 4, [Item.of(currency2, 4), Item.of('gtceu:aluminium_plate', 4)], 'gtceu:mv_machine_casing').maxUses(4);
    event.addTrade(armorer, 4, [Item.of('gtceu:aluminium_plate', 4), Item.of(currency2, 8)], 'gtceu:aluminium_drum').maxUses(4);
    event.addTrade(armorer, 4, [Item.of('kubejs:currency2', 8), Item.of('gtceu:aluminium_plate', 2)], 'gtceu:frostproof_machine_casing').maxUses(8);
    event.addTrade(armorer, 4, [Item.of('gtceu:aluminium_ingot', 2), Item.of(currency2, 6)], Item.of('gtceu:aluminium_fluid_cell')).maxUses(8);

    event.addTrade(armorer, 5, [Item.of('gtceu:electrum_ingot', 2)], Item.of('kubejs:currency2', 1)).maxUses(12);
    event.addTrade(armorer, 5, [Item.of('gtceu:stainless_steel_ingot', 2)], Item.of(currency2, 2)).maxUses(16);
    event.addTrade(armorer, 5, [Item.of('gtceu:nichrome_ingot', 1)], Item.of('kubejs:currency2', 2)).maxUses(4);
    event.addTrade(armorer, 5, [Item.of('kubejs:currency2', 8), Item.of('gtceu:stainless_steel_plate', 4)], 'gtceu:hv_machine_casing').maxUses(4);
    event.addTrade(armorer, 5, [Item.of('gtceu:stainless_steel_plate', 4), Item.of('kubejs:currency2', 4)], 'gtceu:stainless_steel_drum').maxUses(8);
    event.addTrade(armorer, 5, [Item.of('kubejs:currency2', 16), Item.of('gtceu:stainless_steel_plate', 2)], 'gtceu:clean_machine_casing').maxUses(8);
    event.addTrade(armorer, 5, [Item.of('gtceu:stainless_steel_plate', 3), Item.of(currency2, 12)], 'gtceu:stainless_steel_fluid_cell').maxUses(8);


    let toolsmith = 'minecraft:toolsmith';

    event.addTrade(toolsmith, 1, [Item.of('kubejs:currency1', 2)], Item.of('gtceu:copper_bolt', 4)).maxUses(8);
    event.addTrade(toolsmith, 1, [Item.of('kubejs:currency1', 2)], Item.of('gtceu:copper_rod', 2)).maxUses(8);
    event.addTrade(toolsmith, 1, [Item.of('kubejs:currency1', 2)], Item.of('gtceu:copper_screw', 4)).maxUses(8);
    event.addTrade(toolsmith, 1, [Item.of('kubejs:currency1', 2)], Item.of('gtceu:iron_bolt', 4)).maxUses(8);
    event.addTrade(toolsmith, 1, [Item.of('kubejs:currency1', 2)], Item.of('gtceu:iron_rod', 2)).maxUses(8);
    event.addTrade(toolsmith, 1, [Item.of('kubejs:currency1', 2)], Item.of('gtceu:iron_screw', 4)).maxUses(8);
    event.addTrade(toolsmith, 1, [Item.of('kubejs:currency1', 2)], Item.of('gtceu:tin_bolt', 4)).maxUses(8);
    event.addTrade(toolsmith, 1, [Item.of('kubejs:currency1', 2)], Item.of('gtceu:tin_rod', 2)).maxUses(8);
    event.addTrade(toolsmith, 1, [Item.of('kubejs:currency1', 2)], Item.of('gtceu:tin_screw', 4)).maxUses(8);

    event.addTrade(toolsmith, 2, [Item.of('gtceu:bronze_ingot', 1), Item.of('kubejs:currency1', 4)], Item.of('gtceu:bronze_bolt', 4)).maxUses(8);
    event.addTrade(toolsmith, 2, [Item.of('gtceu:bronze_ingot', 1), Item.of('kubejs:currency1', 4)], Item.of('gtceu:bronze_rod', 2)).maxUses(8);
    event.addTrade(toolsmith, 2, [Item.of('gtceu:bronze_ingot', 1), Item.of('kubejs:currency1', 4)], Item.of('gtceu:bronze_screw', 4)).maxUses(8);
    event.addTrade(toolsmith, 2, [Item.of('gtceu:brass_ingot', 1), Item.of('kubejs:currency1', 4)], Item.of('gtceu:brass_bolt', 4)).maxUses(8);
    event.addTrade(toolsmith, 2, [Item.of('gtceu:brass_ingot', 1), Item.of('kubejs:currency1', 4)], Item.of('gtceu:brass_rod', 2)).maxUses(8);
    event.addTrade(toolsmith, 2, [Item.of('gtceu:brass_ingot', 1), Item.of('kubejs:currency1', 4)], Item.of('gtceu:brass_screw', 4)).maxUses(8);
    event.addTrade(toolsmith, 2, [Item.of('kubejs:currency1', 4)], Item.of('gtceu:iron_ring', 4)).maxUses(4);
    event.addTrade(toolsmith, 2, [Item.of('kubejs:currency1', 4)], Item.of('gtceu:tin_ring', 4)).maxUses(4);

    event.addTrade(toolsmith, 3, [Item.of('gtceu:lv_bender', 1)], Item.of('kubejs:currency1', 32)).maxUses(2);
    event.addTrade(toolsmith, 3, [Item.of('gtceu:lv_lathe', 1)], Item.of('kubejs:currency1', 32)).maxUses(2);
    event.addTrade(toolsmith, 3, [Item.of('gtceu:lv_extruder', 1)], Item.of('kubejs:currency1', 32)).maxUses(2);
    event.addTrade(toolsmith, 3, [Item.of('gtceu:invar_plate', 2), Item.of('kubejs:currency2', 2)], 'gtceu:heatproof_machine_casing').maxUses(8);
    event.addTrade(toolsmith, 3, [Item.of('gtceu:steel_ingot', 1), Item.of('kubejs:currency1', 8)], Item.of('gtceu:steel_bolt', 4)).maxUses(8);
    event.addTrade(toolsmith, 3, [Item.of('gtceu:steel_ingot', 1), Item.of('kubejs:currency1', 8)], Item.of('gtceu:steel_rod', 2)).maxUses(8);
    event.addTrade(toolsmith, 3, [Item.of('gtceu:steel_ingot', 1), Item.of('kubejs:currency1', 8)], Item.of('gtceu:steel_screw', 4)).maxUses(8);

    event.addTrade(toolsmith, 4, [Item.of('gtceu:mv_bender', 1)], Item.of('kubejs:currency2', 8)).maxUses(2);
    event.addTrade(toolsmith, 4, [Item.of('gtceu:mv_lathe', 1)], Item.of('kubejs:currency2', 8)).maxUses(2);
    event.addTrade(toolsmith, 4, [Item.of('gtceu:mv_extruder', 1)], Item.of('kubejs:currency2', 8)).maxUses(2);
    event.addTrade(toolsmith, 4, [Item.of('gtceu:aluminium_ingot', 1), Item.of('kubejs:currency2', 1)], Item.of('gtceu:aluminium_rod', 3)).maxUses(6);
    event.addTrade(toolsmith, 4, [Item.of('gtceu:electrum_ingot', 1), Item.of('kubejs:currency2', 1)], Item.of('gtceu:electrum_rod', 3)).maxUses(6);
    event.addTrade(toolsmith, 4, [Item.of('kubejs:currency2', 1)], Item.of('gtceu:silver_bolt', 4)).maxUses(8);
    event.addTrade(toolsmith, 4, [Item.of('kubejs:currency2', 2)], Item.of('gtceu:fine_gold_wire', 4)).maxUses(8);

    event.addTrade(toolsmith, 5, [Item.of('gtceu:electrum_ingot', 1), Item.of('kubejs:currency2', 1)], Item.of('gtceu:fine_electrum_wire', 8)).maxUses(6);
    event.addTrade(toolsmith, 5, [Item.of('gtceu:annealed_copper_ingot', 1), Item.of('kubejs:currency2', 4)], Item.of('gtceu:annealed_copper_bolt', 6)).maxUses(6);
    event.addTrade(toolsmith, 5, [Item.of('gtceu:stainless_steel_ingot', 1), Item.of('kubejs:currency2', 4)], Item.of('gtceu:stainless_steel_screw', 6)).maxUses(6);
    event.addTrade(toolsmith, 5, [Item.of('gtceu:stainless_steel_ingot', 1), Item.of('kubejs:currency2', 4)], Item.of('gtceu:stainless_steel_rod', 3)).maxUses(6);
    event.addTrade(toolsmith, 5, [Item.of('gtceu:hv_bender', 1)], Item.of('kubejs:currency2', 16)).maxUses(2);
    event.addTrade(toolsmith, 5, [Item.of('gtceu:hv_lathe', 1)], Item.of('kubejs:currency2', 16)).maxUses(2);
    event.addTrade(toolsmith, 5, [Item.of('gtceu:hv_extruder', 1)], Item.of('kubejs:currency2', 16)).maxUses(2);


    let weaponsmith = 'minecraft:weaponsmith';

    event.addTrade(weaponsmith, 1, [Item.of('kubejs:currency1', 4)], 'gtceu:iron_hammer').maxUses(6);
    event.addTrade(weaponsmith, 1, [Item.of('kubejs:currency1', 4)], 'gtceu:iron_file').maxUses(6);
    event.addTrade(weaponsmith, 1, [Item.of('kubejs:currency1', 4)], 'gtceu:iron_knife').maxUses(6);
    event.addTrade(weaponsmith, 1, [Item.of('kubejs:currency1', 4)], 'gtceu:iron_wrench').maxUses(6);
    event.addTrade(weaponsmith, 1, [Item.of('kubejs:currency1', 4)], 'gtceu:iron_wire_cutter').maxUses(6);
    event.addTrade(weaponsmith, 1, [Item.of('kubejs:currency1', 4)], 'gtceu:iron_mortar').maxUses(6);
    event.addTrade(weaponsmith, 1, [Item.of('kubejs:currency1', 4)], 'gtceu:iron_saw').maxUses(6);
    event.addTrade(weaponsmith, 1, [Item.of('minecraft:iron_ingot', 2)], 'kubejs:currency1').maxUses(12);

    event.addTrade(weaponsmith, 2, [Item.of('minecraft:anvil', 1)], Item.of('kubejs:currency1', 48)).maxUses(2);
    event.addTrade(weaponsmith, 2, [Item.of('minecraft:quartz', 8)], Item.of('kubejs:currency1', 2)).maxUses(16);
    event.addTrade(weaponsmith, 2, [Item.of('minecraft:lapis_lazuli', 8)], Item.of('kubejs:currency1', 2)).maxUses(16);
    event.addTrade(weaponsmith, 2, [Item.of('gtceu:steel_ingot', 2), Item.of('kubejs:currency1', 16)], 'gtceu:steel_hammer').maxUses(4);
    event.addTrade(weaponsmith, 2, [Item.of('gtceu:steel_ingot', 2), Item.of('kubejs:currency1', 16)], 'gtceu:steel_file').maxUses(4);
    event.addTrade(weaponsmith, 2, [Item.of('gtceu:steel_ingot', 2), Item.of('kubejs:currency1', 16)], 'gtceu:steel_wrench').maxUses(4);
    event.addTrade(weaponsmith, 2, [Item.of('gtceu:steel_ingot', 2), Item.of('kubejs:currency1', 16)], 'gtceu:steel_wire_cutter').maxUses(4);
    event.addTrade(weaponsmith, 2, [Item.of('gtceu:steel_ingot', 2), Item.of('kubejs:currency1', 16)], 'gtceu:steel_knife').maxUses(4);
    event.addTrade(weaponsmith, 2, [Item.of('gtceu:steel_ingot', 2), Item.of('kubejs:currency1', 16)], 'gtceu:steel_mortar').maxUses(4);
    event.addTrade(weaponsmith, 2, [Item.of('gtceu:steel_ingot', 2), Item.of('kubejs:currency1', 16)], 'gtceu:steel_saw').maxUses(4);

    event.addTrade(weaponsmith, 3, [Item.of('gtceu:vanadium_steel_ingot', 4), Item.of('kubejs:currency2', 4)], 'gtceu:vanadium_steel_buzz_saw_blade').maxUses(4);
    event.addTrade(weaponsmith, 3, [Item.of('kubejs:currency2', 1)], 'gtceu:oil_medium_bucket').maxUses(12);
    event.addTrade(weaponsmith, 3, [Item.of('minecraft:blaze_rod', 2)], Item.of('kubejs:currency1', 1)).maxUses(16);
    event.addTrade(weaponsmith, 3, [Item.of('kubejs:currency2', 4)], 'gtceu:diamond_dust').maxUses(8);

    event.addTrade(weaponsmith, 4, [Item.of('twilightforest:naga_scale', 1), Item.of('kubejs:currency2', 2)], 'twilightforest:steeleaf_ingot').maxUses(12);
    event.addTrade(weaponsmith, 4, [Item.of('twilightforest:naga_scale', 2), Item.of('kubejs:currency2', 2)], 'twilightforest:knightmetal_ingot').maxUses(8);
    event.addTrade(weaponsmith, 4, [Item.of('kubejs:currency2', 16)], 'minecraft:wither_skeleton_skull').maxUses(4);
    event.addTrade(weaponsmith, 4, [Item.of('kubejs:currency2', 2)], Item.of('minecraft:ender_pearl', 4)).maxUses(16);
    event.addTrade(weaponsmith, 4, [Item.of('kubejs:currency2', 4)], 'minecraft:ghast_tear').maxUses(8);
    event.addTrade(weaponsmith, 4, [Item.of('minecraft:echo_shard', 1)], Item.of('kubejs:currency2', 4)).maxUses(12);
    event.addTrade(weaponsmith, 4, [Item.of('minecraft:enchanting_table', 1)], Item.of('kubejs:currency1', 12)).maxUses(2);

    event.addTrade(weaponsmith, 5, [Item.of('cataclysm:witherite_ingot', 1), Item.of('kubejs:currency2', 16)], 'minecraft:nether_star').maxUses(2);
    event.addTrade(weaponsmith, 5, [Item.of('cataclysm:essence_of_the_storm', 1), Item.of('kubejs:currency2', 4)], Item.of('cataclysm:lacrima', 16)).maxUses(4);
    event.addTrade(weaponsmith, 5, [Item.of('aquamirae:fin', 16), Item.of('kubejs:currency2', 32)], 'aquamirae:ship_graveyard_echo').maxUses(1);
    event.addTrade(weaponsmith, 5, [Item.of('cataclysm:black_steel_ingot', 2), Item.of('kubejs:currency2', 32)], 'cataclysm:ignitium_upgrade_smithing_template').maxUses(1);
    event.addTrade(weaponsmith, 5, [Item.of('cataclysm:ancient_metal_ingot', 2), Item.of('kubejs:currency2', 32)], 'cataclysm:cursium_upgrade_smithing_template').maxUses(1);

    let fletcher = 'minecraft:fletcher';

    event.addTrade(fletcher, 1, [Item.of('minecraft:flint', 32)], Item.of('kubejs:currency1', 1)).maxUses(16);
    event.addTrade(fletcher, 1, [Item.of('minecraft:string', 16)], Item.of('kubejs:currency1', 1)).maxUses(16);
    event.addTrade(fletcher, 1, [Item.of('minecraft:feather', 32)], Item.of('kubejs:currency1', 1)).maxUses(16);
    event.addTrade(fletcher, 1, [Item.of('minecraft:rabbit_hide', 8)], Item.of('kubejs:currency1', 1)).maxUses(12);
    event.addTrade(fletcher, 1, [Item.of('minecraft:leather', 8)], Item.of('kubejs:currency1', 1)).maxUses(12);
    event.addTrade(fletcher, 1, [Item.of('minecraft:bone', 32)], Item.of('kubejs:currency1', 1)).maxUses(16);

    event.addTrade(fletcher, 2, [Item.of('kubejs:currency1', 2)], Item.of('minecraft:lead', 2)).maxUses(8);
    event.addTrade(fletcher, 2, [Item.of('kubejs:currency1', 2)], Item.of('minecraft:spectral_arrow', 16)).maxUses(16);
    event.addTrade(fletcher, 2, [Item.of('kubejs:currency1', 4)], Item.of('minecraft:tipped_arrow', 16, '{Potion:"minecraft:strong_harming"}')).maxUses(8);
    event.addTrade(fletcher, 2, [Item.of('kubejs:currency1', 4)], Item.of('minecraft:tipped_arrow', 16, '{Potion:"minecraft:long_slowness"}')).maxUses(8);

    event.addTrade(fletcher, 3, [Item.of('twilightforest:raven_feather', 1)], Item.of('kubejs:currency1', 12)).maxUses(12);
    event.addTrade(fletcher, 3, [Item.of('twilightforest:torchberries', 32)], Item.of('kubejs:currency1', 2)).maxUses(16);
    event.addTrade(fletcher, 3, [Item.of('twilightforest:firefly', 4)], Item.of('kubejs:currency1', 1)).maxUses(8);
    event.addTrade(fletcher, 3, [Item.of('twilightforest:cicada', 4)], Item.of('kubejs:currency1', 1)).maxUses(8);

    event.addTrade(fletcher, 4, [Item.of('twilightforest:fiery_blood', 4)], Item.of('kubejs:currency2', 4)).maxUses(8);
    event.addTrade(fletcher, 4, [Item.of('twilightforest:arctic_fur', 8)], Item.of('kubejs:currency2', 1)).maxUses(12);
    event.addTrade(fletcher, 4, [Item.of('twilightforest:carminite', 4)], Item.of('kubejs:currency2', 1)).maxUses(12);
    event.addTrade(fletcher, 4, [Item.of('mowziesmobs:glowing_jelly', 4)], Item.of('kubejs:currency2', 1)).maxUses(12);
    event.addTrade(fletcher, 4, [Item.of('mowziesmobs:naga_fang', 4)], Item.of('kubejs:currency2', 1)).maxUses(12);

    event.addTrade(fletcher, 5, [Item.of('cataclysm:amethyst_crab_meat', 2)], Item.of('kubejs:currency2', 2)).maxUses(12);
    event.addTrade(fletcher, 5, [Item.of('cataclysm:koboleton_bone', 2)], Item.of('kubejs:currency2', 2)).maxUses(12);
    event.addTrade(fletcher, 5, [Item.of('aquamirae:sea_casserole', 1)], Item.of('kubejs:currency2', 4)).maxUses(8)
    event.addTrade(fletcher, 5, [Item.of('aquamirae:poseidons_breakfast', 1)], Item.of('kubejs:currency2', 8)).maxUses(4)

// --- FARMER: NOVICE (LEVEL 1) - THE OVERPRICED ARTISAN ---
    const farmer = 'minecraft:farmer';

    event.addTrade(farmer, 1, [Item.of('kubejs:currency1', 1)], Item.of('minecraft:bread', 4)).maxUses(16);
    event.addTrade(farmer, 1, [Item.of('kubejs:currency1', 1)], Item.of('minecraft:apple', 4)).maxUses(16);
    event.addTrade(farmer, 1, [Item.of('kubejs:currency1', 1)], Item.of('minecraft:wheat', 8)).maxUses(16);
    event.addTrade(farmer, 1, [Item.of('kubejs:currency1', 1)], Item.of('minecraft:melon')).maxUses(12);
    event.addTrade(farmer, 1, [Item.of('kubejs:currency1', 1)], Item.of('minecraft:pumpkin')).maxUses(12);
    event.addTrade(farmer, 1, [Item.of('kubejs:currency1', 1)], Item.of('minecraft:carrot', 8)).maxUses(16);
    event.addTrade(farmer, 1, [Item.of('kubejs:currency1', 1)], Item.of('minecraft:potato', 8)).maxUses(16);

    event.addTrade(farmer, 2, [Item.of('kubejs:currency1', 1)], Item.of('minecraft:sugar', 8)).maxUses(12);
    event.addTrade(farmer, 2, [Item.of('kubejs:currency1', 1)], Item.of('minecraft:egg', 4)).maxUses(12);
    event.addTrade(farmer, 2, [Item.of('kubejs:currency1', 4)], Item.of('minecraft:milk_bucket')).maxUses(8);
    event.addTrade(farmer, 2, [Item.of('kubejs:currency1', 2)], Item.of('minecraft:cocoa_beans', 4)).maxUses(12);
    event.addTrade(farmer, 2, [Item.of('kubejs:currency1', 2)], Item.of('minecraft:honey_bottle')).maxUses(8);

    event.addTrade(farmer, 3, [Item.of('kubejs:currency2', 2)], Item.of('farmersdelight:rich_soil', 16)).maxUses(12);
    event.addTrade(farmer, 3, [Item.of('kubejs:currency2', 2)], Item.of('create:tree_fertilizer', 16)).maxUses(12);
    event.addTrade(farmer, 3, [Item.of('kubejs:currency2', 4)], Item.of('gtceu:fertilizer', 64)).maxUses(16);
    event.addTrade(farmer, 3, [Item.of('kubejs:currency2', 2)], Item.of('minecraft:moss_block', 16)).maxUses(12);

    event.addTrade(farmer, 4, [Item.of('create:mechanical_harvester', 1)], Item.of('kubejs:currency2', 1)).maxUses(12);
    event.addTrade(farmer, 4, [Item.of('kubejs:currency2', 1)], Item.of('minecraft:mud', 32)).maxUses(8);

    event.addTrade(farmer, 5, [Item.of('kubejs:currency2', 32)], Item.of('reliquary:fertile_lily_pad', 1)).maxUses(2);
    event.addTrade(farmer, 5, [Item.of('kubejs:currency2', 16)], Item.of('naturescompass:naturescompass', 1)).maxUses(2);


    const cleric = 'minecraft:cleric';

    event.addTrade(cleric, 1, [Item.of('minecraft:rotten_flesh', 32)], Item.of('kubejs:currency1', 1)).maxUses(16);
    event.addTrade(cleric, 1, [Item.of('hexerei:sage', 16)], Item.of('kubejs:currency1', 1)).maxUses(16);
    event.addTrade(cleric, 1, [Item.of('kubejs:currency1', 4)], Item.of('minecraft:experience_bottle', 1)).maxUses(12);

    event.addTrade(cleric, 2, [Item.of('hexerei:belladonna_flowers', 8)], Item.of('kubejs:currency1', 1)).maxUses(12);
    event.addTrade(cleric, 2, [Item.of('hexerei:mandrake_root', 8)], Item.of('kubejs:currency1', 1)).maxUses(12);
    event.addTrade(cleric, 2, [Item.of('hexerei:mugwort_leaves', 16)], Item.of('kubejs:currency1', 1)).maxUses(12);
    event.addTrade(cleric, 2, [Item.of('hexerei:yellow_dock_leaves', 16)], Item.of('kubejs:currency1', 1)).maxUses(12);

    event.addTrade(cleric, 3, [Item.of('malum:cluster_of_brilliance')], Item.of('malum:aerial_spirit', 6)).maxUses(8);
    event.addTrade(cleric, 3, [Item.of('malum:cluster_of_brilliance')], Item.of('malum:aqueous_spirit', 6)).maxUses(8);
    event.addTrade(cleric, 3, [Item.of('malum:cluster_of_brilliance')], Item.of('malum:earthen_spirit', 6)).maxUses(8);
    event.addTrade(cleric, 3, [Item.of('malum:raw_soulstone')], Item.of('malum:infernal_spirit', 6)).maxUses(8);
    event.addTrade(cleric, 3, [Item.of('malum:raw_soulstone')], Item.of('malum:eldritch_spirit', 6)).maxUses(8);
    event.addTrade(cleric, 3, [Item.of('malum:raw_soulstone')], Item.of('malum:wicked_spirit', 6)).maxUses(8);
    event.addTrade(cleric, 3, [Item.of('kubejs:raw_arcane')], Item.of('malum:arcane_spirit', 6)).maxUses(8);
    event.addTrade(cleric, 3, [Item.of('kubejs:raw_arcane')], Item.of('malum:sacred_spirit', 6)).maxUses(8);

    event.addTrade(cleric, 4, [Item.of('bloodmagic:blankslate', 4)], Item.of('kubejs:currency2', 4)).maxUses(8);
    event.addTrade(cleric, 4, [Item.of('botania:manasteel_ingot', 4)], Item.of('kubejs:currency2', 4)).maxUses(8);

    event.addTrade(cleric, 5, [Item.of('botania:life_essence')], Item.of('kubejs:currency2', 16)).maxUses(4);
    event.addTrade(cleric, 5, [Item.of('occultism:afrit_essence')], Item.of('kubejs:currency2', 16)).maxUses(4);
    event.addTrade(cleric, 5, [Item.of('botania:black_lotus')], Item.of('kubejs:currency2', 4)).maxUses(12);


});