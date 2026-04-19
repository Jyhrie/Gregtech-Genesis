GTCEuStartupEvents.registry("gtceu:world_gen_layer", event => {
    event.create('ow')
        .targets(
            '#minecraft:stone_ore_replaceables',
            '#minecraft:deepslate_ore_replaceables'
        )
        .dimensions('minecraft:overworld')
    
    event.create("moon")
        .targets("#ad_astra:moon_stone_replaceables")
        .dimensions("ad_astra:moon")

    event.create("mars")
        .targets("#ad_astra:mars_stone_replaceables")
        .dimensions("ad_astra:mars")

    event.create("mercury")
        .targets("#ad_astra:mercury_stone_replaceables")
        .dimensions("ad_astra:mercury")

    event.create("venus")
        .targets("#ad_astra:venus_stone_replaceables")
        .dimensions("ad_astra:venus")

    event.create("glacio")
        .targets("#ad_astra:glacio_stone_replaceables")
        .dimensions("ad_astra:glacio")

    event.create("glacio_deepslate")
        .targets("#minecraft:deepslate_ore_replaceables")
        .dimensions("ad_astra:glacio")
    
    event.create("twilight_forest")
        .targets('#minecraft:stone_ore_replaceables')
        .dimensions("twilightforest:twilight_forest")
})

GTCEuStartupEvents.registry('gtceu:tag_prefix', event => {
    event.create('moon', 'ore')
        .stateSupplier(() => {
            let block = Block.getBlock('ad_astra:moon_stone')
            if (block.id == "minecraft:air") {
                return Block.getBlock('minecraft:stone').defaultBlockState()
            }
            return block.defaultBlockState()
        })
        .baseModelLocation('ad_astra:block/moon_stone')
        .unificationEnabled(true)
        .materialIconType(GTMaterialIconType.ore)
        .generationCondition(ItemGenerationCondition.hasOreProperty)
        .miningToolTag("minecraft:mineable/pickaxe")

    event.create('mars', 'ore')
        .stateSupplier(() => {
            let block = Block.getBlock('ad_astra:mars_stone')
            if (block.id == "minecraft:air") {
                return Block.getBlock('minecraft:stone').defaultBlockState()
            }
            return block.defaultBlockState()
        })
        .baseModelLocation('ad_astra:block/mars_stone')
        .unificationEnabled(true)
        .materialIconType(GTMaterialIconType.ore)
        .generationCondition(ItemGenerationCondition.hasOreProperty)
        .miningToolTag("minecraft:mineable/pickaxe")

    event.create('mercury', 'ore')
        .stateSupplier(() => {
            let block = Block.getBlock('ad_astra:mercury_stone')
            if (block.id == "minecraft:air") {
                return Block.getBlock('minecraft:stone').defaultBlockState()
            }
            return block.defaultBlockState()
        })
        .baseModelLocation('ad_astra:block/mercury_stone')
        .unificationEnabled(true)
        .materialIconType(GTMaterialIconType.ore)
        .generationCondition(ItemGenerationCondition.hasOreProperty)
        .miningToolTag("minecraft:mineable/pickaxe")

    event.create('venus', 'ore')
        .stateSupplier(() => {
            let block = Block.getBlock('ad_astra:venus_stone')
            if (block.id == "minecraft:air") {
                return Block.getBlock('minecraft:stone').defaultBlockState()
            }
            return block.defaultBlockState()
        })
        .baseModelLocation('ad_astra:block/venus_stone')
        .unificationEnabled(true)
        .materialIconType(GTMaterialIconType.ore)
        .generationCondition(ItemGenerationCondition.hasOreProperty)
        .miningToolTag("minecraft:mineable/pickaxe")

    event.create('glacio', 'ore')
        .stateSupplier(() => {
            let block = Block.getBlock('ad_astra:glacio_stone')
            if (block.id == "minecraft:air") {
                return Block.getBlock('minecraft:stone').defaultBlockState()
            }
            return block.defaultBlockState()
        })
        .baseModelLocation('ad_astra:block/glacio_stone')
        .unificationEnabled(true)
        .materialIconType(GTMaterialIconType.ore)
        .generationCondition(ItemGenerationCondition.hasOreProperty)
        .miningToolTag("minecraft:mineable/pickaxe")

})