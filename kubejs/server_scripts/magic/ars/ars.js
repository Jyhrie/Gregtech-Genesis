    ServerEvents.recipes(event => {

    // Source Gems
    event.remove({ output: 'ars_nouveau:source_gem' })
    event.smelting('ars_nouveau:source_gem', 'kubejs:raw_arcane').xp(0.7)
    event.blasting('ars_nouveau:source_gem', 'kubejs:raw_arcane').xp(0.7)

    // Archwood Saplings
    event.remove({ output: 'ars_nouveau:blue_archwood_sapling' })
    event.remove({ output: 'ars_nouveau:red_archwood_sapling' })
    event.remove({ output: 'ars_nouveau:green_archwood_sapling' })
    event.remove({ output: 'ars_nouveau:purple_archwood_sapling' })

    // Blue Archwood Sapling
    event.custom({
        "type": "lychee:item_inside",
        "item_in": [
            { "tag": "minecraft:saplings" },
            { "item": "malum:arcane_spirit"},
            { "item": "malum:arcane_spirit"},
            { "item": "malum:arcane_spirit"},
            { "item": "malum:arcane_spirit"},
            { "item": "malum:arcane_spirit"},
            { "item": "malum:arcane_spirit"},
            { "item": "malum:arcane_spirit"},
            { "item": "malum:arcane_spirit"},
            { "item": "malum:arcane_spirit"},
            { "item": "malum:arcane_spirit"},
            { "item": "malum:arcane_spirit"},
            { "item": "malum:arcane_spirit"},
            { "item": "malum:aqueous_spirit"},
            { "item": "malum:aqueous_spirit"},
            { "item": "malum:aqueous_spirit"},
            { "item": "malum:aqueous_spirit"},
            { "item": "malum:aqueous_spirit"},
            { "item": "malum:aqueous_spirit"},
            { "item": "malum:aqueous_spirit"},
            { "item": "malum:aqueous_spirit"},
            { "item": "malum:aqueous_spirit"},
            { "item": "malum:aqueous_spirit"},
            { "item": "malum:aqueous_spirit"},
            { "item": "malum:aqueous_spirit"},
        ],
        "block_in": {
            "blocks": ["minecraft:water_cauldron"],
            "state": { "level": 3 } // Works as long as there is water
        },
        "post": [
            {
                "type": "drop_item",
                "item": "ars_nouveau:blue_archwood_sapling",
            },
            {
                "type": "execute",
                // Format: playsound <sound> <source> <player> <x y z> <volume> <pitch>
                "command": "playsound minecraft:entity.generic.splash neutral @a ~ ~ ~ 1 1",
                "hide_in_viewer" : true
            },
            {
                "type": "execute",
                // Format: playsound <sound> <source> <player> <x y z> <volume> <pitch>
                "command": "playsound minecraft:block.brewing_stand.brew neutral @a ~ ~ ~ 1 1"
            },
            {
                "type": "execute",
                "command": "particle minecraft:bubble ~ ~0.8 ~ 0.3 0.3 0.3 0.05 15",
            },
            {
            "type": "place",
            "block": "cauldron"
            }
        ]
    })

    // Green Archwood Sapling
    event.custom({
        "type": "lychee:item_inside",
        "item_in": [
            { "tag": "minecraft:saplings" },
            { "item": "malum:arcane_spirit"},
            { "item": "malum:arcane_spirit"},
            { "item": "malum:arcane_spirit"},
            { "item": "malum:arcane_spirit"},
            { "item": "malum:arcane_spirit"},
            { "item": "malum:arcane_spirit"},
            { "item": "malum:arcane_spirit"},
            { "item": "malum:arcane_spirit"},
            { "item": "malum:arcane_spirit"},
            { "item": "malum:arcane_spirit"},
            { "item": "malum:arcane_spirit"},
            { "item": "malum:arcane_spirit"},
            { "item": "malum:earthen_spirit"},
            { "item": "malum:earthen_spirit"},
            { "item": "malum:earthen_spirit"},
            { "item": "malum:earthen_spirit"},
            { "item": "malum:earthen_spirit"},
            { "item": "malum:earthen_spirit"},
            { "item": "malum:earthen_spirit"},
            { "item": "malum:earthen_spirit"},
            { "item": "malum:earthen_spirit"},
            { "item": "malum:earthen_spirit"},
            { "item": "malum:earthen_spirit"},
            { "item": "malum:earthen_spirit"},
        ],
        "block_in": {
            "blocks": ["minecraft:water_cauldron"],
            "state": { "level": 3 } // Works as long as there is water
        },
        "post": [
            {
                "type": "drop_item",
                "item": "ars_nouveau:green_archwood_sapling",
            },
            {
                "type": "execute",
                // Format: playsound <sound> <source> <player> <x y z> <volume> <pitch>
                "command": "playsound minecraft:entity.generic.splash neutral @a ~ ~ ~ 1 1",
                "hide_in_viewer" : true
            },
            {
                "type": "execute",
                // Format: playsound <sound> <source> <player> <x y z> <volume> <pitch>
                "command": "playsound minecraft:block.brewing_stand.brew neutral @a ~ ~ ~ 1 1"
            },
            {
                "type": "execute",
                "command": "particle minecraft:bubble ~ ~0.8 ~ 0.3 0.3 0.3 0.05 15",
            },
            {
            "type": "place",
            "block": "cauldron"
            }
        ]
    })

    // Red Archwood Sapling
    event.custom({
        "type": "lychee:item_inside",
        "item_in": [
            { "tag": "minecraft:saplings" },
            { "item": "malum:arcane_spirit"},
            { "item": "malum:arcane_spirit"},
            { "item": "malum:arcane_spirit"},
            { "item": "malum:arcane_spirit"},
            { "item": "malum:arcane_spirit"},
            { "item": "malum:arcane_spirit"},
            { "item": "malum:arcane_spirit"},
            { "item": "malum:arcane_spirit"},
            { "item": "malum:arcane_spirit"},
            { "item": "malum:arcane_spirit"},
            { "item": "malum:arcane_spirit"},
            { "item": "malum:arcane_spirit"},
            { "item": "malum:infernal_spirit"},
            { "item": "malum:infernal_spirit"},
            { "item": "malum:infernal_spirit"},
            { "item": "malum:infernal_spirit"},
            { "item": "malum:infernal_spirit"},
            { "item": "malum:infernal_spirit"},
            { "item": "malum:infernal_spirit"},
            { "item": "malum:infernal_spirit"},
            { "item": "malum:infernal_spirit"},
            { "item": "malum:infernal_spirit"},
            { "item": "malum:infernal_spirit"},
            { "item": "malum:infernal_spirit"},
        ],
        "block_in": {
            "blocks": ["minecraft:water_cauldron"],
            "state": { "level": 3 } // Works as long as there is water
        },
        "post": [
            {
                "type": "drop_item",
                "item": "ars_nouveau:red_archwood_sapling",
            },
            {
                "type": "execute",
                // Format: playsound <sound> <source> <player> <x y z> <volume> <pitch>
                "command": "playsound minecraft:entity.generic.splash neutral @a ~ ~ ~ 1 1",
                "hide_in_viewer" : true
            },
            {
                "type": "execute",
                // Format: playsound <sound> <source> <player> <x y z> <volume> <pitch>
                "command": "playsound minecraft:block.brewing_stand.brew neutral @a ~ ~ ~ 1 1"
            },
            {
                "type": "execute",
                "command": "particle minecraft:bubble ~ ~0.8 ~ 0.3 0.3 0.3 0.05 15",
            },
            {
            "type": "place",
            "block": "cauldron"
            }
        ]
    })

    // Purple Archwood Sapling
    event.custom({
        "type": "lychee:item_inside",
        "item_in": [
            { "tag": "minecraft:saplings" },
            { "item": "malum:arcane_spirit"},
            { "item": "malum:arcane_spirit"},
            { "item": "malum:arcane_spirit"},
            { "item": "malum:arcane_spirit"},
            { "item": "malum:arcane_spirit"},
            { "item": "malum:arcane_spirit"},
            { "item": "malum:arcane_spirit"},
            { "item": "malum:arcane_spirit"},
            { "item": "malum:arcane_spirit"},
            { "item": "malum:arcane_spirit"},
            { "item": "malum:arcane_spirit"},
            { "item": "malum:arcane_spirit"},
            { "item": "malum:eldritch_spirit"},
            { "item": "malum:eldritch_spirit"},
            { "item": "malum:eldritch_spirit"},
            { "item": "malum:eldritch_spirit"},
            { "item": "malum:eldritch_spirit"},
            { "item": "malum:eldritch_spirit"},
            { "item": "malum:eldritch_spirit"},
            { "item": "malum:eldritch_spirit"},
            { "item": "malum:eldritch_spirit"},
            { "item": "malum:eldritch_spirit"},
            { "item": "malum:eldritch_spirit"},
            { "item": "malum:eldritch_spirit"},
        ],
        "block_in": {
            "blocks": ["minecraft:water_cauldron"],
            "state": { "level": 3 } // Works as long as there is water
        },
        "post": [
            {
                "type": "drop_item",
                "item": "ars_nouveau:purple_archwood_sapling",
            },
            {
                "type": "execute",
                // Format: playsound <sound> <source> <player> <x y z> <volume> <pitch>
                "command": "playsound minecraft:entity.generic.splash neutral @a ~ ~ ~ 1 1",
                "hide_in_viewer" : true
            },
            {
                "type": "execute",
                // Format: playsound <sound> <source> <player> <x y z> <volume> <pitch>
                "command": "playsound minecraft:block.brewing_stand.brew neutral @a ~ ~ ~ 1 1"
            },
            {
                "type": "execute",
                "command": "particle minecraft:bubble ~ ~0.8 ~ 0.3 0.3 0.3 0.05 15",
            },
            {
            "type": "place",
            "block": "cauldron"
            }
        ]
    })

    // Enchanting Apparatus
    event.remove({ output: 'ars_nouveau:enchanting_apparatus' })
    event.shaped(
        Item.of('ars_nouveau:enchanting_apparatus', 1), // Output
        [
            'ABA', 
            'CDC', 
            'ABA'
        ],
        {
            A: 'kubejs:thaumium_ingot',      // Corners
            B: 'ars_nouveau:sourcestone',       // Top & Bottom
            C: 'malum:hallowed_gold_ingot',     // Left & Right
            D: 'kubejs:primal_essence'          // Middle
        }
    )

    event.remove({ output: 'ars_nouveau:arcane_core' })
    event.shaped(
        Item.of('ars_nouveau:arcane_core', 1), // Output
        [
            'BAB', 
            'CDC', 
            'BAB'
        ],
        {
            A: 'kubejs:thaumium_ingot',      // Corners
            B: 'ars_nouveau:sourcestone',       // Top & Bottom
            C: 'malum:hallowed_gold_ingot',     // Left & Right
            D: 'ars_nouveau:source_gem'          // Middle
        }
    )

    event.remove({ output: 'ars_nouveau:arcane_pedestal' })
    event.shaped(
        Item.of('ars_nouveau:arcane_pedestal', 1), // Output
        [
            'BDB', 
            'CAC', 
            'CBC'
        ],
        {
            A: 'kubejs:thaumium_ingot',      // Corners
            B: 'ars_nouveau:sourcestone_slab',       // Top & Bottom
            C: 'malum:hallowed_gold_nugget',          // Middle
            D: 'ars_nouveau:source_gem'          // Middle
        }
    )

    // Source Jar
    event.remove({ output: 'ars_nouveau:source_jar' })
    event.shaped(
        Item.of('ars_nouveau:source_jar', 1),
        [
            'SHS', 
            'G G', 
            'SSS'
        ],
        {
            S: 'ars_nouveau:archwood_slab', // Archwood Slabs (using tag for any type)
            H: 'malum:hallowed_gold_ingot',  // Hallowed Gold (Top Middle)
            G: 'botania:mana_glass'          // Mana Glass (Left & Right)
        }
    )
    

    event.remove({ output: 'ars_nouveau:storage_lectern' })
    // Storage Lectern
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            'botania:mana_diamond',
            'malum:block_of_hallowed_gold',
            'kubejs:knowledge_fragment',
            'hexerei:mindful_trance_blend',
            'create:precision_mechanism',
            'create:andesite_alloy_block',
            'kubejs:knowledge_fragment',
            'malum:cluster_of_brilliance'
        ],
        'minecraft:lectern',             // Center reagent
        'ars_nouveau:storage_lectern',   // Output
        7500                             // Source Cost: 7,500
    )

    // Ritual of Awakening
    event.remove({ output: 'ars_nouveau:ritual_awakening' })
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            'kubejs:knowledge_fragment',
            'malum:hallowed_gold_ingot',
            'ars_nouveau:source_gem',
            'malum:aqueous_spirit'
        ],
        'bloodmagic:blankslate',         // Center item
        'ars_nouveau:ritual_awakening',  // Result
        1000                             // Source Cost
    )

    // Scry Crystal
    event.remove({ output: 'ars_nouveau:scryers_crystal' })
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            'minecraft:ender_pearl',
            'minecraft:blaze_powder',
            'ars_nouveau:source_gem',
            'kubejs:thaumium_ingot'
        ],
        'botania:mana_glass_pane',      
        '2x ars_nouveau:scryers_crystal',
        2500                            
    )

    // Enchanter's Eye
    event.remove({ output: "ars_nouveau:enchanters_eye" })
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            'hexerei:belladonna_flowers',
            'minecraft:blaze_powder',
            'botania:mana_pearl',
            'botania:mana_pearl',
            'botania:mana_diamond',
            'kubejs:void_seed'
        ],
        'ars_nouveau:scryers_crystal', // Center reagent
        'ars_nouveau:enchanters_eye',   // Output
        5000                            // Source Cost: 5,000 (Half a full Jar)
    )

    // Novice Spellbook

    // Sourcelinks

    // 1. Agronomic Sourcelink
    event.remove({ output: 'ars_nouveau:agronomic_sourcelink' })
    event.shaped('ars_nouveau:agronomic_sourcelink', [
        ' T ',
        'HWH',
        'SGS'
    ], {
        H: 'malum:hallowed_gold_ingot',
        T: 'kubejs:thaumium_ingot',
        W: 'minecraft:wheat',
        S: 'ars_nouveau:sourcestone_slab',
        G: 'ars_nouveau:source_gem'
    })

    // 2. Vitalic Sourcelink
    event.remove({ output: 'ars_nouveau:vitalic_sourcelink' })
    event.shaped('ars_nouveau:vitalic_sourcelink', [
        ' T ',
        'HMH',
        'SGS'
    ], {
        H: 'malum:hallowed_gold_ingot',
        T: 'kubejs:thaumium_ingot',
        M: 'minecraft:glistering_melon_slice',
        S: 'ars_nouveau:sourcestone_slab',
        G: 'ars_nouveau:source_gem'
    })

    // 3. Volcanic Sourcelink
    event.remove({ output: 'ars_nouveau:volcanic_sourcelink' })
    event.shaped('ars_nouveau:volcanic_sourcelink', [
        ' T ', 
        'HBH',
        'SGS'
    ], {
        H: 'malum:hallowed_gold_ingot',
        T: 'kubejs:thaumium_ingot',
        B: 'minecraft:magma_block',
        S: 'ars_nouveau:sourcestone_slab',
        G: 'ars_nouveau:source_gem'
    })

    // 4. Alchemical Sourcelink
    event.remove({ output: 'ars_nouveau:alchemical_sourcelink' })
    event.shaped('ars_nouveau:alchemical_sourcelink', [
        ' T ',
        'HLH',
        'SGS'
    ], {
        H: 'malum:hallowed_gold_ingot',
        T: 'kubejs:thaumium_ingot',
        L: 'minecraft:glass_bottle',
        S: 'ars_nouveau:sourcestone_slab',
        G: 'ars_nouveau:source_gem'
    })

    // 5. Mycelial Sourcelink
    event.remove({ output: 'ars_nouveau:mycelial_sourcelink' })
    event.shaped('ars_nouveau:mycelial_sourcelink', [
        ' T ',
        'HFH',
        'SGS'
    ], {
        H: 'malum:hallowed_gold_ingot',
        T: 'kubejs:thaumium_ingot',
        F: 'minecraft:warped_fungus',
        S: 'ars_nouveau:sourcestone_slab',
        G: 'ars_nouveau:source_gem'
    })
    

    })