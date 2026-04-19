ServerEvents.recipes(event => {
  // This wipes every recipe that uses the Petal Apothecary
    event.remove({ output: /botania:apothecary_.*/ })
    event.remove({ id: 'botania:petal_apothecary/pure_daisy' })
    event.remove({ id: 'botania:petal_apothecary/endoflame' })
    

    event.shaped('botania:apothecary_livingrock', [
        'LSL',
        ' L ',
        'LLL'
    ], {
        L: 'botania:livingrock',
        S: 'hexerei:mindful_trance_blend'
    })

    event.custom({
            "type": "lychee:item_inside",
            "item_in": [
                { "tag": "botania:petals/white" },
                { "tag": "botania:petals/white" },
                { "tag": "botania:petals/white" },
                { "tag": "botania:petals/white" },
                { "tag": "forge:seeds" } // This covers "any seed"
            ],
            "block_in": {
                "blocks": ["minecraft:water"]
            },
            "post": [
                {
                    "type": "drop_item",
                    "item": "botania:pure_daisy"
                },
                {
                    "type": "execute",
                    "command": "playsound minecraft:entity.generic.splash ambient @a ~ ~ ~ 1 1"
                }
            ]
    })

    event.remove({ output: 'botania:terra_plate' })
    event.custom({
        "type": "malum:spirit_infusion",
        "extra_items": [
            { "count": 1, "item": "botania:rune_spring" },
            { "count": 1, "item": "botania:rune_summer" },
            { "count": 1, "item": "botania:rune_autumn" },
            { "count": 1, "item": "botania:rune_winter" },
            { "count": 1, "item": "minecraft:lapis_block" },
            { "count": 1, "item": "botania:manasteel_block" },
            { "count": 1, "item": "kubejs:primal_essence" },
            { "count": 1, "item": "botania:rune_mana" }
        ],
        "input": { "count": 1, "item": "gtceu:double_graphene_plate" },
        "output": { "count": 1, "item": "botania:terra_plate" },
        "spirits": [
            { "type": "aerial", "count": 64 },
            { "type": "arcane", "count": 64 },
            { "type": "aqueous", "count": 64 },
            { "type": "earthen", "count": 64 },
            { "type": "infernal", "count": 64 },
            { "type": "wicked", "count": 64 },
            { "type": "eldritch", "count": 64 },
            { "type": "sacred", "count": 64 }
        ]
    })

    event.recipes.botania.petal_apothecary("botania:endoflame", [
    'botania:brown_petal',
    'botania:brown_petal',
    'botania:red_petal',
    'botania:light_gray_petal',
    'malum:infernal_spirit'])


    // Travel Belts via Malum Spirit Infusion
    event.custom({
        "type": "malum:spirit_infusion",
        "extra_items": [
        { "count": 1, "item": "botania:rune_air" },
        { "count": 1, "item": "botania:rune_water" },
        { "count": 1, "item": "botania:mana_powder" },
        { "count": 1, "item": "botania:mana_powder" },
        { "count": 1, "item": "botania:mana_diamond" }
        ],
        "input": { "count": 1, "item": "malum:gilded_belt" },
        "output": { "count": 1, "item": "botania:travel_belt" },
        "spirits": [
        { "type": "aerial", "count": 32 },
        { "type": "arcane", "count": 16 },
        { "type": "aqueous", "count": 16 },
        { "type": "earthen", "count": 16 },
        ]
    })

    event.custom({
        "type": "malum:spirit_infusion",
        "extra_items": [
        { "count": 1, "item": "botania:rune_earth" },
        { "count": 1, "item": "botania:mana_powder" },
        ],
        "input": { "count": 1, "item": "botania:travel_belt" },
        "output": { "count": 1, "item": "botania:speed_up_belt" },
        "spirits": [
        { "type": "arcane", "count": 8 },
        { "type": "earthen", "count": 32 },
        ]
    })

    event.custom({
        "type": "malum:spirit_infusion",
        "extra_items": [
        { "count": 1, "item": "botania:rune_earth" },
        { "count": 1, "item": "botania:mana_powder" },
        { "count": 1, "item": "botania:mana_powder" },
        { "count": 1, "item": "botania:mana_diamond" }
        ],
        "input": { "count": 1, "item": "malum:gilded_belt" },
        "output": { "count": 1, "item": "botania:knockback_belt" },
        "spirits": [
        { "type": "arcane", "count": 16 },
        { "type": "earthen", "count": 32 },
        ]
    })

    event.custom({
        "type": "malum:spirit_infusion",
        "extra_items": [
        { "count": 1, "item": "botania:rune_spring" },  
        { "count": 1, "item": "botania:rune_air" }, 
        { "count": 1, "item": "botania:life_essence" },
        { "count": 1, "item": "botania:pixie_dust" },
        { "count": 1, "item": "botania:pixie_dust" },
        { "count": 1, "item": "botania:elementium_ingot" },
        { "count": 1, "item": "botania:elementium_ingot" },
        { "count": 1, "item": "botania:dragonstone" }
        ],
        "input": { "count": 1, "item": "botania:travel_belt" },
        "output": { "count": 1, "item": "botania:super_travel_belt" },
        "spirits": [
        { "type": "aerial", "count": 64 },
        { "type": "arcane", "count": 64 },
        { "type": "sacred", "count": 64 }
        ]
    })

    // Pendants via Malum Spirit Infusion
    event.custom({
        "type": "malum:spirit_infusion",
        "extra_items": [
        { "count": 1, "item": "botania:rune_earth" },
        { "count": 1, "item": "botania:rune_fire" },
        { "count": 1, "item": "botania:rune_summer" },
        { "count": 1, "item": "minecraft:obsidian" },
        { "count": 1, "item": "minecraft:obsidian" },
        { "count": 1, "item": "minecraft:obsidian" }
        ],
        "input": { "count": 1, "item": "malum:ornate_necklace" },
        "output": { "count": 1, "item": "botania:lava_pendant" },
        "spirits": [
        { "type": "arcane", "count": 16 },
        { "type": "earthen", "count": 32 },
        { "type": "infernal", "count": 32 }
        ]
    })

    event.custom({
        "type": "malum:spirit_infusion",
        "extra_items": [
        { "count": 1, "item": "bloodmagic:lavasigil" },
        { "count": 1, "item": "botania:rune_fire" },
        { "count": 1, "item": "botania:life_essence" },
        { "count": 1, "item": "cataclysm:ignitium_ingot" },
        ],
        "input": { "count": 1, "item": "botania:lava_pendant" },
        "output": { "count": 1, "item": "botania:super_lava_pendant" },
        "spirits": [
        { "type": "wicked", "count": 64 },
        { "type": "earthen", "count": 64 },
        { "type": "infernal", "count": 64 }
        ]
    })


})