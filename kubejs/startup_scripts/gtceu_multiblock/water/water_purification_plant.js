// startup_scripts/purification_and_reactor.js

GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    // Water Purification Type
    event.create('water_purification')
        .category('purification')
        .setEUIO('in')
        .setMaxIOSize(1, 1, 1, 1)
        .setSound(GTSoundEntries.COOLING);
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('water_purification_plant', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('water_purification')
        .appearanceBlock(GTBlocks.CASING_STAINLESS_CLEAN)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("CCCCC", "CGGGC", "CGGGC", "DDDDD", "DDDDD", "DDDDD", "CCCCC") 
            .aisle("CCCCC", "GPPPG", "GVVVG", "DGGGD", "DQQQD", "DAAAD", "CCCCC")
            .aisle("CCCCC", "GPPPG", "GVVVG", "DGGGD", "DQQQD", "DAAAD", "CCCCC")
            .aisle("CCCCC", "GPPPG", "GVVVG", "DGGGD", "DQQQD", "DAAAD", "CCCCC")
            .aisle("CCSCC", "CCCCC", "CCCCC", "DDDDD", "DDDDD", "DDDDD", "CCCCC")
            .where('S', Predicates.controller(Predicates.blocks(definition.get())))
            .where('C', Predicates.blocks(GTBlocks.CASING_STAINLESS_CLEAN.get())
                .or(Predicates.autoAbilities(definition.getRecipeTypes())))
            .where('Q', Predicates.blocks('minecraft:quartz_block'))
            .where('A', Predicates.blocks('gtceu:raw_diatomite_block'))
            .where('G', Predicates.blocks('gtceu:graphene_block'))
            .where('V', Predicates.blocks('gtceu:polyvinyl_chloride_block'))
            .where('P', Predicates.blocks('gtceu:polytetrafluoroethylene_block'))
            .where('D', Predicates.blocks(GTBlocks.COIL_KANTHAL.get()))
            .where('G', Predicates.blocks('minecraft:glass'))
            .build()
        )
        .workableCasingModel(
            "gtceu:block/casings/solid/machine_casing_clean_stainless_steel",
            "gtceu:block/multiblock/fusion_reactor" 
        );
});