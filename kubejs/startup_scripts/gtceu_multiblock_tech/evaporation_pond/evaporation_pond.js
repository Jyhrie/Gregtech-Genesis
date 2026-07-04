GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('evaporation_pond') 
        .category('evaporation_pond')
        .setEUIO('in')
        .setMaxIOSize(1, 1, 1, 1) 
        .setSound(GTSoundEntries.ARC);
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('evaporation_pond', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('evaporation_pond')
        .appearanceBlock(GTBlocks.TREATED_WOOD_PLANK)
        .pattern(definition => FactoryBlockPattern.start()
        .aisle("CCCCCCCCC", "SSSSSSSSS")
        .aisle("CCCCCCCCC", "S       S")
        .aisle("CCCCCCCCC", "S       S")
        .aisle("CCCCCCCCC", "S       S")
        .aisle("CCCCKCCCC", "SSSSSSSSS")
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('C', Predicates.blocks(GTBlocks.TREATED_WOOD_PLANK.get())
                .or(Predicates.autoAbilities(definition.getRecipeTypes())))
            .where('S', Predicates.blocks(GTBlocks.TREATED_WOOD_SLAB.get()))
            .build()
            
        )
        .workableCasingModel("gtceu:block/treated_wood_planks", "gtceu:block/multiblock/implosion_compressor");
});
