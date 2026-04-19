ServerEvents.recipes(event => {
    
    event.recipes.create.splashing([
        'minecraft:flint', 
        Item.of('create:ochrum').withChance(0.02),     // Gold
        Item.of('create:crimsite').withChance(0.02),    // Iron
        Item.of('create:veridium').withChance(0.02),    // Copper
        Item.of('create:asurine').withChance(0.02),     // Zinc
        Item.of('create:scorchia').withChance(0.02),// Lead
        Item.of('create:scoria').withChance(0.02),      // Nickel
        Item.of('minecraft:diorite').withChance(0.02),// Lead
        Item.of('minecraft:granite').withChance(0.02),// Lead
        Item.of('minecraft:andesite').withChance(0.02),// Lead
        Item.of('minecraft:calcite').withChance(0.02)   // Silver
    ], 'minecraft:gravel')


    const crushingMap = [
        { rock: 'create:ochrum',     ore: 'create:crushed_raw_gold' },
        { rock: 'create:crimsite',    ore: 'create:crushed_raw_iron' },
        { rock: 'create:veridium',    ore: 'create:crushed_raw_copper' },
        { rock: 'create:asurine',     ore: 'create:crushed_raw_zinc' },
        { rock: 'create:scorchia',    ore: 'create:crushed_raw_lead' },
        { rock: 'create:scoria',      ore: 'create:crushed_raw_nickel' },
        { rock: 'minecraft:diorite',  ore: 'create:crushed_raw_tin' },
        { rock: 'minecraft:calcite',  ore: 'create:crushed_raw_silver' },
        { rock: 'minecraft:granite',  ore: 'create:crushed_raw_iron' }, // Secondary source
        { rock: 'minecraft:andesite', ore: 'create:crushed_raw_iron' }  // Secondary source
    ]

    crushingMap.forEach(entry => {
        event.recipes.create.crushing([
            Item.of(entry.ore).withChance(0.0625),
        ], entry.rock)
    })

    const smeltingMap = [
        { input: 'create:crushed_raw_iron',   output: 'minecraft:iron_ingot' },
        { input: 'create:crushed_raw_gold',   output: 'minecraft:gold_ingot' },
        { input: 'create:crushed_raw_copper', output: 'minecraft:copper_ingot' },
        { input: 'create:crushed_raw_zinc',   output: 'gtceu:zinc_ingot' },
        { input: 'create:crushed_raw_tin',    output: 'gtceu:tin_ingot' },
        { input: 'create:crushed_raw_lead',    output: 'gtceu:lead_ingot' },
        { input: 'create:crushed_raw_silver',  output: 'gtceu:silver_ingot' },
        { input: 'create:crushed_raw_nickel',  output: 'gtceu:nickel_ingot' }
    ]

    smeltingMap.forEach(ore => {
        event.smelting(ore.output, ore.input).xp(0.1)
        event.blasting(ore.output, ore.input).xp(0.1)
    })
})

//cobble > gravel

//gravel in washer > crimsite set of deco blocks

//crimsite > crusher > crushed raw iron


//follow for the rest

//