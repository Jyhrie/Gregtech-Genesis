GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('conventional_farming') 
        .category('conventional_farming')
        .setEUIO('in')
        .setMaxIOSize(8, 8, 3, 3) 
        .setSound(GTSoundEntries.ARC);
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('conventional_farming_traditional', 'multiblock')
        .langValue("Conventional Farm")
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('conventional_farming')
        //.appearanceBlock(Block.getBlock('kubejs:casing_pvc_clean'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("CCCCCCC", "XFFFFFX", "X     X", "XXXXXXX")
            .aisle("CDDDDDC", "F     F", "       ", "X     X")
            .aisle("CDDDDDC", "F     F", "       ", "X     X")
            .aisle("CDDDDDC", "F     F", "       ", "X     X")
            .aisle("CDDDDDC", "F     F", "       ", "X     X")
            .aisle("CDDDDDC", "F     F", "       ", "X     X")
            .aisle("CCCKCCC", "XFFFFFX", "X     X", "XXXXXXX")
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('C', Predicates.blocks(GTBlocks.TREATED_WOOD_PLANK.get())
                .or(Predicates.autoAbilities(definition.getRecipeTypes())))
            .where('D', Predicates.blocks('farmersdelight:rich_soil')
                .or(Predicates.blocks('farmersdelight:rich_soil_farmland')))
            .where('F', Predicates.blocks(GTBlocks.TREATED_WOOD_FENCE.get()))
            .where('X', Predicates.blocks('gtceu:treated_wood_frame'))
            .build()
        )
        .workableCasingModel(
            "gtceu:block/treated_wood_planks",
            "gtceu:block/multiblock/implosion_compressor" // Keeps that high-tech reactor overlay
        );
});
