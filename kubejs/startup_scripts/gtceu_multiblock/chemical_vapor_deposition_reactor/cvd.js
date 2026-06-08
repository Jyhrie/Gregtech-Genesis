GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('cvd') 
        .category('cvd')
        .setEUIO('in')
        .setMaxIOSize(4, 4, 4, 4) 
        .setSound(GTSoundEntries.ARC);
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('cvd', 'multiblock')
        .langValue("Chemical Vapor Deposition Reactor")
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('cvd')
        .appearanceBlock(GCYMBlocks.CASING_HIGH_TEMPERATURE_SMELTING)
        .pattern(definition => FactoryBlockPattern.start()
        .aisle(" CCCCCCC ", " CHHHHHC ", " CHHHHHC ", " CHHHHHC ", " CCCCCCC ")
        .aisle("CCCCCCCCC", "CCHHHHHCC", "CGGGGGGGC", "CCHHHHHCC", " CCCCCCC ")
        .aisle(" CCCKCCC ", " CHHHHHC ", "         ", " CHHHHHC ", " CCCCCCC ")
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('C', Predicates.blocks(GCYMBlocks.CASING_HIGH_TEMPERATURE_SMELTING.get())
                .or(Predicates.autoAbilities(definition.getRecipeTypes())))
            .where('G', Predicates.blocks('thermal_extra:dragonsteel_glass'))
            .where('H', Predicates.heatingCoils())

            .build()
            
        )
        .workableCasingModel("gtceu:block/casings/gcym/high_temperature_smelting_casing", "gtceu:block/multiblock/implosion_compressor");
});
