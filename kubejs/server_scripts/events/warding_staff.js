ServerEvents.recipes(event => {
    const staff = "kubejs:staff_of_warding"

    // --- APPLY WARDING ---

    // Livingrock -> Warded Stone
    event.custom({
        "type": "lychee:block_interacting",
        "item_in": { "item": staff },
        "block_in": "botania:livingrock",
        "post": [
            { "type": "place", "block": "kubejs:warded_stone" },
            { "type": "execute", "command": "playsound minecraft:block.enchantment_table.use block @a ~ ~ ~ 1 1" },
            { "type": "prevent_default" }
        ]
    })

    // Managlass -> Warded Glass
    event.custom({
        "type": "lychee:block_interacting",
        "item_in": { "item": staff },
        "block_in": "botania:mana_glass",
        "post": [
            { "type": "place", "block": "kubejs:warded_glass" },
            { "type": "execute", "command": "playsound minecraft:block.enchantment_table.use block @a ~ ~ ~ 1 1.2" },
            { "type": "prevent_default" }
        ]
    })

    // --- UNDO WARDING ---

    // Warded Stone -> Livingrock
    event.custom({
        "type": "lychee:block_interacting",
        "item_in": { "item": staff },
        "block_in": "kubejs:warded_stone",
        "post": [
            { "type": "place", "block": "botania:livingrock" },
            { "type": "execute", "command": "playsound minecraft:block.grindstone.use block @a ~ ~ ~ 1 0.8" },
            { "type": "prevent_default" }
        ]
    })

    // Warded Glass -> Managlass
    event.custom({
        "type": "lychee:block_interacting",
        "item_in": { "item": staff },
        "block_in": "kubejs:warded_glass",
        "post": [
            { "type": "place", "block": "botania:mana_glass" },
            { "type": "execute", "command": "playsound minecraft:block.grindstone.use block @a ~ ~ ~ 1 0.8" },
            { "type": "prevent_default" }
        ]
    })
})