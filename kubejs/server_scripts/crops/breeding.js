ServerEvents.recipes(event => {
    const BREEDING_PAIRS = [
        ['minecraft:wheat_seeds', 'minecraft:brown_mushroom', 'kubejs:stonelily_seeds', 2000, GTValues.V[GTValues.LV], 400],
  
        ['kubejs:stonelily_seeds', 'minecraft:sugar_cane', 'kubejs:silica_stalk_seeds', 1000, GTValues.V[GTValues.LV], 400],
        ['minecraft:sugar_cane', 'minecraft:potato', 'kubejs:sticky_reed_seeds', 1000, GTValues.V[GTValues.LV], 400],
        ['farmersdelight:rice', 'minecraft:bamboo', 'kubejs:saline_sprout_seeds', 1000, GTValues.V[GTValues.LV], 400],
        ['kubejs:saline_sprout_seeds', 'minecraft:glow_berries', 'kubejs:experience_berry_seeds', 1000, GTValues.V[GTValues.LV], 400],

        ['kubejs:stonelily_seeds', 'minecraft:rose_bush', 'kubejs:brimstone_rose_seeds', 1000, GTValues.V[GTValues.LV], 400],
        ['kubejs:brimstone_rose_seeds', 'farmersdelight:tomato_seeds', 'kubejs:cinnabar_bulb_seeds', 1000, GTValues.V[GTValues.LV], 400],
        ['kubejs:brimstone_rose_seeds', 'farmersdelight:onion', 'kubejs:ignis_ivy_seeds', 1000, GTValues.V[GTValues.LV], 400],

        ['kubejs:ignis_ivy_seeds', 'kubejs:brimstone_rose_seeds', 'kubejs:anthracine_seeds', 1000, GTValues.V[GTValues.LV], 400],
        ['kubejs:experience_berry_seeds', 'kubejs:cinnabar_bulb_seeds', 'kubejs:ferrite_seeds', 1000, GTValues.V[GTValues.LV], 400],
        ['kubejs:experience_berry_seeds', 'farmersdelight:tomato_seeds', 'kubejs:cuprium_seeds', 1000, GTValues.V[GTValues.LV], 400],
        ['kubejs:saline_sprout_seeds', 'kubejs:ferrite_seeds', 'kubejs:stannum_seeds', 1000, GTValues.V[GTValues.LV], 400],
        ['kubejs:brimstone_rose_seeds', 'kubejs:anthracine_seeds', 'kubejs:lusterless_lily_seeds', 1000, GTValues.V[GTValues.LV], 400],
        ['kubejs:cuprium_seeds', 'kubejs:ferrite_seeds', 'kubejs:brightmantle_seeds', 1000, GTValues.V[GTValues.LV], 400],
        ['kubejs:stannum_seeds', 'kubejs:cuprium_seeds', 'kubejs:zinc_zephyr_seeds', 1000, GTValues.V[GTValues.LV], 400],
        ['kubejs:lusterless_lily_seeds', 'kubejs:brightmantle_seeds', 'kubejs:silverleaf_seeds', 1000, GTValues.V[GTValues.LV], 400],
        ['kubejs:cuprium_seeds', 'kubejs:silverleaf_seeds', 'kubejs:aurelia_lotus_seeds', 1000, GTValues.V[GTValues.LV], 400],

        ['kubejs:ignis_ivy_seeds', 'kubejs:saline_sprout_seeds', 'kubejs:apatite_aster_seeds', 500, GTValues.V[GTValues.LV], 400],
        ['kubejs:saline_sprout_seeds', 'kubejs:silverleaf_seeds', 'kubejs:quartz_quill_seeds', 500, GTValues.V[GTValues.LV], 400],
        ['kubejs:quartz_quill_seeds', 'kubejs:alumina_alyssum_seeds', 'kubejs:beryl_bloom_seeds', 500, GTValues.V[GTValues.MV], 800],
        ['kubejs:beryl_bloom_seeds', 'kubejs:brimstone_rose_seeds', 'kubejs:corundum_crimson_seeds', 500, GTValues.V[GTValues.MV], 800],    
        ['kubejs:beryl_bloom_seeds', 'kubejs:silverleaf_seeds', 'kubejs:glacial_grain_seeds', 500, GTValues.V[GTValues.MV], 800],    
        ['kubejs:glacial_grain_seeds', 'kubejs:aurelia_lotus_seeds', 'kubejs:diamontine_seeds', 500, GTValues.V[GTValues.MV], 800],  
        ['kubejs:brimstone_rose_seeds', 'kubejs:ferrite_seeds', 'kubejs:lazulia_seeds', 500, GTValues.V[GTValues.MV], 800],
        ['kubejs:quartz_quill_seeds', 'kubejs:lazulia_seeds', 'kubejs:crystalline_calyx_seeds', 500, GTValues.V[GTValues.MV], 800],

        ['kubejs:anthracine_seeds', 'kubejs:ferrite_seeds', 'kubejs:pyrolusite_petal_seeds', 500, GTValues.V[GTValues.LV], 400],
        ['kubejs:pyrolusite_petal_seeds', 'kubejs:lusterless_lily_seeds', 'kubejs:tantal_thistle', 500, GTValues.V[GTValues.LV], 400],
        ['kubejs:zinc_zephyr_seeds', 'kubejs:silverleaf_seeds', 'kubejs:gallia_gourd_seeds', 500, GTValues.V[GTValues.LV], 400],
        ['kubejs:stannum_seeds', 'kubejs:zinc_zephyr_seeds', 'kubejs:alumina_alyssum_seeds', 500, GTValues.V[GTValues.LV], 400],       // Lithium
        ['kubejs:saline_sprout_seeds', 'kubejs:brightmantle_seeds', 'kubejs:lithia_florets_seeds', 500, GTValues.V[GTValues.LV], 400],
        ['hexerei:belladonna_flowers', 'kubejs:lusterless_lily_seeds', 'kubejs:arsene_nightshade_seeds', 500, GTValues.V[GTValues.MV], 800],
        
        ['kubejs:gallia_gourd_seeds', 'kubejs:silverleaf_seeds', 'kubejs:quicksilver_reeds_seeds', 200, GTValues.V[GTValues.LV], 400],
        ['kubejs:corundum_crimson_seeds', 'kubejs:aurelia_lotus_seeds', 'kubejs:chrome_crysanthemum_seeds', 200, GTValues.V[GTValues.LV], 400],
        ['kubejs:glacial_grain_seeds', 'kubejs:arsene_nightshade_seeds', 'kubejs:cobalt_camellia_seeds', 200, GTValues.V[GTValues.LV], 400],
        ['kubejs:beryl_bloom_seeds', 'kubejs:lithia_florets_seeds', 'kubejs:berylline_berry_seeds', 200, GTValues.V[GTValues.LV], 400],

        ['kubejs:aurelia_lotus_seeds', 'kubejs:berylline_berry_seeds', 'kubejs:platina_orchid_seeds', 200, GTValues.V[GTValues.LV], 400],
        ['kubejs:chrome_crysanthemum_seeds', 'kubejs:cobalt_camellia_seeds', 'kubejs:rutile_celosia_seeds', 200, GTValues.V[GTValues.LV], 400],
        ['kubejs:arsene_nightshade_seeds', 'kubejs:quicksilver_reeds_seeds', 'kubejs:pitchblende_petunia_seeds', 200, GTValues.V[GTValues.LV], 400],
        ['kubejs:pitchblende_petunia_seeds', 'kubejs:rutile_celosia_seeds', 'kubejs:tungsten_wisteria_seeds', 200, GTValues.V[GTValues.LV], 400],
        
        ['kubejs:platina_orchid_seeds', 'kubejs:lithia_florets_seeds', 'kubejs:palladium_primrose_seeds', 200, GTValues.V[GTValues.LV], 400],
        ['kubejs:platina_orchid_seeds', 'kubejs:chrome_crysanthemum_seeds', 'kubejs:rhodium_ruby_seeds', 200, GTValues.V[GTValues.LV], 400],
        ['kubejs:rhodium_ruby_seeds', 'kubejs:brightmantle_seeds', 'kubejs:ruthenium_snapdragon_seeds', 200, GTValues.V[GTValues.LV], 400],
        ['kubejs:palladium_primrose_seeds', 'kubejs:cobalt_camellia_seeds', 'kubejs:osmium_oxalis_seeds', 200, GTValues.V[GTValues.LV], 400],
        ['kubejs:osmium_oxalis_seeds', 'kubejs:ruthenium_snapdragon_seeds', 'kubejs:iridium_iris_seeds', 200, GTValues.V[GTValues.LV], 400],
    ];

    BREEDING_PAIRS.forEach(pair => {
        let [a, b, res, mutChance, eut, dur] = pair;

        let failChance = (10000 - mutChance) / 2;

        event.recipes.gtceu.crop_breeder(`${res}_mutation`)
            .itemInputs(`${a}`, `${b}`)
            
            .chancedOutput(`${res}`, mutChance, 0) 

            .chancedOutput(`${a}`, failChance, 0)
            .chancedOutput(`${b}`, failChance, 0)
            
            .duration(dur)
            .EUt(eut);
    });
});
