ServerEvents.tags('item', event => {
    const mappings = [
        { type: 'dimlite', id: 'terramity:dimlite_ingot' },
        { type: 'virentium', id: 'terramity:virentium_alloy_ingot' },
        { type: 'cosmilite', id: 'terramity:cosmilite_ingot' },
        { type: 'crystalline_iridium', id: 'terramity:iridium' },
        { type: 'void_alloy', id: 'terramity:void_alloy' },
        { type: 'conductite', id: 'terramity:conductite_ingot' },
        { type: 'hellspec', id: 'terramity:hellspec_alloy' },
        { type: 'nyxium', id: 'terramity:nyxium' },
        { type: 'exodium', id: 'terramity:exodium_superalloy' },
        { type: 'reverium', id: 'terramity:reverium' },
        { type: 'profanum', id: 'terramity:profanum' }
    ]

    mappings.forEach(map => {
        event.add(`forge:ingots/${map.type}`, map.id)
        event.add(`forge:ingots/${map.type}`, `gtceu:${map.type}_ingot`)
    })
})