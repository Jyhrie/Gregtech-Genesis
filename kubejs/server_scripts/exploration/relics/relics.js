// ServerEvents.recipes(event => {

//     //Magic Mirror
//     event.remove({ output: 'relics:magic_mirror' })
//     event.custom({
//         "type": "malum:spirit_infusion",
//         "input": { 
//             "item": "gtceu:stainless_steel_plate", 
//             "count": 1 
//         },
//         "output": { 
//             "item": "relics:magic_mirror", 
//             "count": 1 
//         },
//         "extra_items": [
//             { "item": "kubejs:crystallized_source" },  
//             { "item": "gtceu:light_blue_glass_lens"}, 
//             { "item": "botania:dragonstone" },           
//             { "item": "bloodmagic:infusedslate" }     
//         ],
//         "spirits": [
//             { "type": "eldritch", "count": 64 },
//             { "type": "aerial", "count": 32 },   
//             { "type": "aqueous", "count": 32 },   
//             { "type": "arcane", "count": 64 }   
//         ]
//     })

//     //Blazing Flask
//     event.remove({ output: 'relics:blazing_flask' })
//     event.custom({
//         "type": "malum:spirit_infusion",
//         "input": { 
//             "item": "gtceu:obsidian_plate", 
//             "count": 1 
//         },
//         "output": { 
//             "item": "relics:blazing_flask", 
//             "count": 1 
//         },
//         "extra_items": [
//             { "item": "minecraft:fire_charge"}, 
//             { "item": "minecraft:fire_charge"}, 
//             { "item": "twilightforest:fiery_blood"}, 
//             { "item": "botania:rune_fire" },           
//             { "item": "kubejs:crystallized_source" } 
//         ],
//         "spirits": [
//             { "type": "infernal", "count": 64 },
//             { "type": "aerial", "count": 64 },    
//         ]
//     })

//     //Blazing Flask
//     event.remove({ output: 'relics:rage_glove' })
//     event.custom({
//         "type": "malum:spirit_infusion",
//         "input": { 
//             "item": "minecraft:leather", 
//             "count": 1 
//         },
//         "output": { 
//             "item": "relics:rage_glove", 
//             "count": 1 
//         },
//         "extra_items": [
//             { "item": "twilightforest:fiery_blood"}, 
//             { "item": "botania:rune_summer" },        
//             { "item": "minecraft:magma_block" },    
//             { "item": "twilightforest:carminite" } 
//         ],
//         "spirits": [
//             { "type": "infernal", "count": 64 },
//             { "type": "wicked", "count": 32 },    
//         ]
//     })

//     //Blazing Flask
//     event.remove({ output: 'relics:wool_mitten' })
//     event.custom({
//         "type": "malum:spirit_infusion",
//         "input": { 
//             "item": "minecraft:leather", 
//             "count": 1 
//         },
//         "output": { 
//             "item": "relics:wool_mitten", 
//             "count": 1 
//         },
//         "extra_items": [
//             { "item": "minecraft:white_wool"}, 
//             { "item": "botania:rune_winter" },        
//             { "item": "twilightforest:alpha_yeti_fur" } 
//         ],
//         "spirits": [
//             { "type": "aqueous", "count": 64 },
//             { "type": "aerial", "count": 32 },    
//         ]
//     })

//     //Blazing Flask
//     event.remove({ output: 'relics:enders_hand' })
//     event.custom({
//         "type": "malum:spirit_infusion",
//         "input": { 
//             "item": "minecraft:leather", 
//             "count": 1 
//         },
//         "output": { 
//             "item": "relics:enders_hand", 
//             "count": 1 
//         },
//         "extra_items": [
//             { "item": "minecraft:ender_pearl"}, 
//             { "item": "botania:rune_mana" },        
//             { "item": "minecraft:chorus_fruit" } 
//         ],
//         "spirits": [
//             { "type": "eldritch", "count": 64 },
//             { "type": "wicked", "count": 32 },    
//         ]
//     })


//     //Blazing Flask
//     event.remove({ output: 'relics:midnight_robe' })
//     event.custom({
//         "type": "malum:spirit_infusion",
//         "input": { 
//             "item": "botania:invisibility_cloak", 
//             "count": 1 
//         },
//         "output": { 
//             "item": "relics:midnight_robe", 
//             "count": 1 
//         },
//         "extra_items": [
//             { "item": "bloodmagic:daggerofsacrifice"}, 
//             { "item": "botania:mana_powder" },        
//             { "item": "botania:rune_envy" } 
//         ],
//         "spirits": [
//             { "type": "eldritch", "count": 64 },
//             { "type": "wicked", "count": 32 },    
//             { "type": "arcane", "count": 32 },    
//         ]
//     })

//     //Blazing Flask
//     event.remove({ output: 'relics:reflection_necklace' })
//     event.custom({
//         "type": "malum:spirit_infusion",
//         "input": { 
//             "item": "malum:ornate_necklace", 
//             "count": 1 
//         },
//         "output": { 
//             "item": "relics:reflection_necklace", 
//             "count": 1 
//         },
//         "extra_items": [
//             { "item": "minecraft:obsidian"}, 
//             { "item": "malum:raw_soulstone" },        
//             { "item": "botania:rune_wrath" } 
//         ],
//         "spirits": [
//             { "type": "eldritch", "count": 64 },
//             { "type": "wicked", "count": 32 },    
//             { "type": "arcane", "count": 32 },    
//         ]
//     })

//     //Blazing Flask
//     event.remove({ output: 'relics:holy_locket' })
//     event.custom({
//         "type": "malum:spirit_infusion",
//         "input": { 
//             "item": "malum:ornate_necklace", 
//             "count": 1 
//         },
//         "output": { 
//             "item": "relics:holy_locket", 
//             "count": 1 
//         },
//         "extra_items": [
//             { "item": "bloodmagic:holy_water_anointment_3"}, 
//             { "item": "malum:hallowed_gold_ingot" },        
//             { "item": "malum:hallowed_gold_ingot" },    
//             { "item": "gtceu:sterling_silver_ingot" },
//             { "item": "gtceu:sterling_silver_ingot" },
//             { "item": "malum:necklace_of_blissful_harmony" },
//             { "item": "malum:necklace_of_the_mystic_mirror" },
//             { "item": "botania:rune_spring" } 
//         ],
//         "spirits": [
//             { "type": "sacred", "count": 64 },
//             { "type": "aqueous", "count": 64 },    
//             { "type": "infernal", "count": 64 },    
//         ]
//     })


//     //Blazing Flask
//     event.remove({ output: 'relics:jellyfish_necklace' })
//     event.custom({
//         "type": "malum:spirit_infusion",
//         "input": { 
//             "item": "malum:ornate_necklace", 
//             "count": 1 
//         },
//         "output": { 
//             "item": "relics:jellyfish_necklace", 
//             "count": 1 
//         },
//         "extra_items": [
//             { "item": "botania:mana_pearl" },
//             { "item": "gtceu:fine_gold_wire" },
//             { "item": "cataclysm:lacrima" },
//             { "item": "botania:rune_water" } 
//         ],
//         "spirits": [
//             { "type": "sacred", "count": 64 },
//             { "type": "aqueous", "count": 64 },    
//             { "type": "infernal", "count": 64 },    
//         ]
//     })


//         //Blazing Flask
//     event.remove({ output: 'relics:horse_flute' })
//     event.custom({
//         "type": "malum:spirit_infusion",
//         "input": { 
//             "item": "minecraft:stick", 
//             "count": 1 
//         },
//         "output": { 
//             "item": "relics:horse_flute", 
//             "count": 1 
//         },
//         "extra_items": [
//             { "item": "minecraft:golden_apple"}, 
//             { "item": "malum:chunk_of_brilliance" },        
//             { "item": "farmersdelight:horse_feed" } 
//         ],
//         "spirits": [
//             { "type": "sacred", "count": 16 },
//             { "type": "aerial", "count": 16 }
//         ]
//     })


//     event.remove({ output: 'relics:aqua_walker' })
//     event.custom({
//         "type": "malum:spirit_infusion",
//         "input": { "item": "minecraft:leather_boots" },
//         "output": { "item": "relics:aqua_walker" },
//         "extra_items": [
//             { "item": "twilightforest:naga_scale" }, 
//             { "item": "bloodmagic:reagentwater" },    
//             { "item": "botania:rune_water" }  
//         ],
//         "spirits": [
//             { "type": "aqueous", "count": 16 },
//             { "type": "aerial", "count": 4 }
//         ]
//     })

//     event.remove({ output: 'relics:amphibian_boot' })
//     event.custom({
//         "type": "malum:spirit_infusion",
//         "input": { "item": "minecraft:leather_boots" },
//         "output": { "item": "relics:amphibian_boot" },
//         "extra_items": [
//             { "item": "aquamirae:fin" },                  // Aquatic movement
//             { "item": "hexerei:mugwort_leaves" },         // Herb for transformation
//             { "item": "botania:rune_water" }       // Elemental affinity
//         ],
//         "spirits": [
//             { "type": "aqueous", "count": 32 },
//             { "type": "sacred", "count": 32 }
//         ]
//     })

//     event.remove({ output: 'relics:magma_walker' })
//     event.custom({
//         "type": "malum:spirit_infusion",
//         "input": { "item": "minecraft:iron_boots" },
//         "output": { "item": "relics:magma_walker" },
//         "extra_items": [
//             { "item": "minecraft:obsidian" },          // Basic heat source
//             { "item": "bloodmagic:reagentlava" },         // Basic lava focus
//             { "item": "botania:rune_fire" }        // Elemental heat
//         ],
//         "spirits": [
//             { "type": "infernal", "count": 16 },
//             { "type": "wicked", "count": 4 }
//         ]
//     })

//     event.remove({ output: 'relics:spore_sack' })
//     event.custom({
//         "type": "malum:spirit_infusion",
//         "input": { "item": "minecraft:bundle" },
//         "output": { "item": "relics:spore_sack" },
//         "extra_items": [
//             { "item": "mowziesmobs:foliaath_seed" },      
//             { "item": "mowziesmobs:glowing_jelly" },     
//             { "item": "hexerei:belladonna_flowers" },
//             { "item": "minecraft:spore_blossom" },
//             { "item": "mowziesmobs:naga_fang" }      
//         ],
//         "spirits": [
//             { "type": "earthen", "count": 32 },
//             { "type": "eldritch", "count": 16 }
//         ]
//     })

//     event.remove({ output: 'relics:elytra_booster' })
//     event.shaped('relics:elytra_booster', [
//         ' P ',
//         'CMC',
//         'FRF'
//     ], {
//         P: 'gtceu:mv_electric_pump',
//         C: 'gtceu:mv_electric_motor',
//         M: "ad_astra:steel_tank",
//         F: "ad_astra:rocket_fin",
//         R: "minecraft:flint_and_steel"
//     })

    
// })