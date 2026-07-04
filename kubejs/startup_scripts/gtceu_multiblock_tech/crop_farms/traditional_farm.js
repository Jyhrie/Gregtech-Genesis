GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('multiblock_automated_farm') 
        .category('multiblock_automated_farm')
        .setEUIO('in')
        .setMaxIOSize(8, 8, 3, 3) 
        .setSound(GTSoundEntries.ARC);
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('multiblock_farm_traditional', 'multiblock')
        .langValue("Automated Farm")
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('multiblock_automated_farm')
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
                .or(Predicates.blocks('farmersdelight:rich_soil_farmland'))
                .or(Predicates.blocks('minecraft:mud')))
            .where('F', Predicates.blocks(GTBlocks.TREATED_WOOD_FENCE.get()))
            .where('X', Predicates.blocks('gtceu:treated_wood_frame'))
            .build()
        )
        .workableCasingModel(
            "gtceu:block/treated_wood_planks",
            "gtceu:block/multiblock/implosion_compressor" // Keeps that high-tech reactor overlay
        );
});
