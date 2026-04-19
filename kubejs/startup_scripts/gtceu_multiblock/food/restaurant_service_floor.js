GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('restaurant') 
        .category('restaurant')
        .setEUIO('in')
        .setMaxIOSize(8, 8, 3, 3) 
        .setSound(GTSoundEntries.ARC);
});


GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('restaurant_service_floor', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('restaurant')
        .appearanceBlock(GTBlocks.TREATED_WOOD_PLANK)
        .pattern(definition => FactoryBlockPattern.start()
        .aisle("CCCCC")
        .aisle("CCCCC")
        .aisle("CCCCC")
        .aisle("CCCCC")
        .aisle("CCKCC")
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('C', Predicates.blocks(GTBlocks.TREATED_WOOD_PLANK.get())
                .or(Predicates.autoAbilities(definition.getRecipeTypes())))
            .build()
        )
        .workableCasingModel("gtceu:block/treated_wood_planks", "gtceu:block/multiblock/implosion_compressor");
});
