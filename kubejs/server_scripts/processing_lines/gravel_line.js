ServerEvents.recipes(event => {
    
    // 1. Washing Gravel into GTCEu Rock Dusts

    event.recipes.create.milling('gtceu:stone_dust', 'minecraft:cobblestone');

    event.recipes.create.splashing([
        Item.of('gtceu:ochrum_dust').withChance(0.1),     // Gold
        Item.of('gtceu:crimsite_dust').withChance(0.1),   // Iron
        Item.of('gtceu:veridium_dust').withChance(0.1),   // Copper
        Item.of('gtceu:asurine_dust').withChance(0.1),    // Zinc
        Item.of('gtceu:scorchia_dust').withChance(0.1),   // Lead
        Item.of('gtceu:scoria_dust').withChance(0.1),     // Nickel
        Item.of('gtceu:diorite_dust').withChance(0.1),    // Tin (Native to GT)
        Item.of('gtceu:granite_dust').withChance(0.1),    // Iron (Native to GT)
        Item.of('gtceu:andesite_dust').withChance(0.1),   // Iron (Native to GT)
        Item.of('gtceu:calcite_dust').withChance(0.1)     // Silver (Native to GT)
    ], 'gtceu:stone_dust');

    event.recipes.gtceu.ore_washer('wash_stone_dust')
        .itemInputs('1x gtceu:stone_dust')
        .chancedOutput('1x gtceu:ochrum_dust', 1000, 0)
        .chancedOutput('1x gtceu:crimsite_dust', 1000, 0)
        .chancedOutput('1x gtceu:veridium_dust', 1000, 0)
        .chancedOutput('1x gtceu:asurine_dust', 1000, 0)
        .chancedOutput('1x gtceu:scorchia_dust', 1000, 0)
        .chancedOutput('1x gtceu:scoria_dust', 1000, 0)
        .chancedOutput('1x gtceu:diorite_dust', 1000, 0)
        .chancedOutput('1x gtceu:granite_dust', 1000, 0)
        .chancedOutput('1x gtceu:andesite_dust', 1000, 0)
        .chancedOutput('1x gtceu:calcite_dust', 1000, 0)
        .duration(40)
        .EUt(8); // LV Tier

    // 2. Processing the Dusts into Crushed Ores
    const dustProcessingMap = [
        { dust: 'gtceu:ochrum_dust',   ore: 'create:crushed_raw_gold' },
        { dust: 'gtceu:crimsite_dust', ore: 'create:crushed_raw_iron' },
        { dust: 'gtceu:veridium_dust', ore: 'create:crushed_raw_copper' },
        { dust: 'gtceu:asurine_dust',  ore: 'create:crushed_raw_zinc' },
        { dust: 'gtceu:scorchia_dust', ore: 'create:crushed_raw_lead' },
        { dust: 'gtceu:scoria_dust',   ore: 'create:crushed_raw_nickel' },
        { dust: 'gtceu:diorite_dust',  ore: 'create:crushed_raw_tin' },
        { dust: 'gtceu:calcite_dust',  ore: 'create:crushed_raw_silver' },
        { dust: 'gtceu:granite_dust',  ore: 'create:crushed_raw_iron' }, 
        { dust: 'gtceu:andesite_dust', ore: 'create:crushed_raw_iron' } 
    ];

    dustProcessingMap.forEach(entry => {
        event.recipes.create.splashing([
            Item.of(entry.ore), 
            Item.of('minecraft:clay_ball').withChance(0.25) 
        ], entry.dust);

        event.recipes.gtceu.ore_washer(`wash_${entry.dust.split(':')[1]}`)
            .itemInputs(`1x ${entry.dust}`)
            .itemOutputs(`1x ${entry.ore}`)
            .duration(40)
            .EUt(10);
    });

    // 3. Smelting Crushed Ores into Ingots
    const smeltingMap = [
        { input: 'create:crushed_raw_iron',   output: 'minecraft:iron_ingot' },
        { input: 'create:crushed_raw_gold',   output: 'minecraft:gold_ingot' },
        { input: 'create:crushed_raw_copper', output: 'minecraft:copper_ingot' },
        { input: 'create:crushed_raw_zinc',   output: 'create:zinc_ingot' },
        { input: 'create:crushed_raw_tin',    output: 'thermal:tin_ingot' },
        { input: 'create:crushed_raw_lead',   output: 'thermal:lead_ingot' },
        { input: 'create:crushed_raw_silver', output: 'thermal:silver_ingot' },
        { input: 'create:crushed_raw_nickel', output: 'thermal:nickel_ingot' }
    ];

    smeltingMap.forEach(ore => {
        event.smelting(ore.output, ore.input).xp(0.1);
        event.blasting(ore.output, ore.input).xp(0.1);
    });
    
    const decorativeBlockMap = [
        { dust: 'gtceu:ochrum_dust',   block: 'create:ochrum' },
        { dust: 'gtceu:crimsite_dust', block: 'create:crimsite' },
        { dust: 'gtceu:veridium_dust', block: 'create:veridium' },
        { dust: 'gtceu:asurine_dust',  block: 'create:asurine' },
        { dust: 'gtceu:scorchia_dust', block: 'create:scorchia' },
        { dust: 'gtceu:scoria_dust',   block: 'create:scoria' },
        { dust: 'gtceu:diorite_dust',  block: 'minecraft:diorite' },
        { dust: 'gtceu:granite_dust',  block: 'minecraft:granite' },
        { dust: 'gtceu:andesite_dust', block: 'minecraft:andesite' },
        { dust: 'gtceu:calcite_dust',  block: 'minecraft:calcite' }
    ];

    decorativeBlockMap.forEach(entry => {
        event.recipes.create.compacting(entry.block, entry.dust);
        let recipeId = `compress_${entry.block.replace(':', '_')}`;
        event.recipes.gtceu.compressor(recipeId)
            .itemInputs(`1x ${entry.dust}`)
            .itemOutputs(`1x ${entry.block}`)
            .duration(200) 
            .EUt(2);       
            
    });
});