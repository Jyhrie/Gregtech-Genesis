ServerEvents.recipes(event => {
  
  // // --- MATERIAL RECIPES ---
  
  // event.shapeless('9x kubejs:ender_fragment', ['minecraft:ender_pearl'])

  // event.shapeless('2x kubejs:chipped_obsidian', ['minecraft:obsidian'])

  // event.shapeless('kubejs:livingrock_dust', ['botania:livingrock'])

  // event.shapeless('kubejs:charred_bone_dust', ['malum:charred_bone'])

  // event.shapeless('kubejs:gilded_blood', ['bloodmagic:reagentblood', 'minecraft:gold_nugget'])

  // event.shapeless('4x kubejs:shard_of_source', ['ars_nouveau:source_gem'])

  // event.shapeless('kubejs:water_condensate', ['minecraft:water_bottle'])

 
  // // Sacred: Hallowed Paste
  // event.shapeless('kubejs:hallowed_paste', [
  //   'minecraft:pink_petals', 
  //   'minecraft:honey_bottle'
  // ])

  // // Wicked: Malevolent Essence
  // event.shapeless('kubejs:malevolent_essence', [
  //   'minecraft:redstone', 
  //   'minecraft:gold_nugget'
  // ])

  // // Arcane: Arcane Cluster
  // event.shapeless('kubejs:arcane_cluster', [
  //   'minecraft:lapis_lazuli',
  //   'minecraft:glowstone_dust'
  // ])

  // // Infernal: Smoldering Ash
  // event.shapeless('kubejs:smoldering_ash', [
  //   'kubejs:charred_bone_dust', 
  //   'minecraft:blaze_powder'
  // ])

  // // Earthen: Telluric Grit
  // event.shapeless('kubejs:telluric_grit', [
  //   'gtceu:stone_dust', 
  //   'minecraft:wheat_seeds'
  // ])

  // // Aqueous: Waterfall Blend
  // event.shapeless('kubejs:waterfall_blend', [
  //   'kubejs:water_condensate', 
  //   'minecraft:clay_ball'
  // ])

  // // Eldritch: Abyssal Binding
  // event.shapeless('kubejs:abyssal_binding', [
  //   'kubejs:ender_fragment',
  //   'kubejs:chipped_obsidian'
  // ])

  // // Aerial: Zephyr Precipitate
  // event.shapeless('kubejs:zephyr_precipitate', [
  //   'minecraft:feather', 
  //   'minecraft:sugar'
  // ])

    event.custom({
        "type": "lychee:item_inside",
        "item_in": [
            { "item": "malum:arcane_spirit" },
            { "item": "malum:eldritch_spirit" },
            { "item": "malum:wicked_spirit" },
            { "item": "malum:sacred_spirit" },
            { "item": "malum:aqueous_spirit" },
            { "item": "malum:aerial_spirit" },
            { "item": "malum:infernal_spirit" },
            { "item": "malum:earthen_spirit" },
            { "item": "botania:mana_diamond" },
            
        ],
        "block_in": {
            "blocks": ["minecraft:water_cauldron"],
            "state": { "level": 3 } // Works as long as there is water
        },
        "post": [
            {
                "type": "drop_item",
                "item": "kubejs:primal_essence",
                "count": 1
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
                "command": "playsound minecraft:block.amethyst_block.chime ambient @a ~ ~ ~ 10 1",
            },
            {
                "type": "execute",
                "command": "particle minecraft:bubble ~ ~0.8 ~ 0.3 0.3 0.3 0.05 15",
            }
        ]
    })

  

//   const soulRecipe = (output, catalyst, ingredient) => {
//     event.custom({
//         "type": "lychee:item_inside",
//         "item_in": [
//             { "item": ingredient },
//             { "item": catalyst }
//         ],
//         "block_in": {
//             "blocks": ["minecraft:water_cauldron"],
//             "state": { "level": 3 } // Works as long as there is water
//         },
//         "post": [
//             {
//                 "type": "drop_item",
//                 "item": output,
//                 "count": 8
//             },
//             {
//                 "type": "execute",
//                 // Format: playsound <sound> <source> <player> <x y z> <volume> <pitch>
//                 "command": "playsound minecraft:entity.generic.splash neutral @a ~ ~ ~ 1 1",
//                 "hide_in_viewer" : true
//             },
//             {
//                 "type": "execute",
//                 // Format: playsound <sound> <source> <player> <x y z> <volume> <pitch>
//                 "command": "playsound minecraft:block.amethyst_block.chime ambient @a ~ ~ ~ 10 1",
//             },
//             {
//                 "type": "execute",
//                 "command": "particle minecraft:bubble ~ ~0.8 ~ 0.3 0.3 0.3 0.05 15",
//             }
//         ]
//     })
//   }

})