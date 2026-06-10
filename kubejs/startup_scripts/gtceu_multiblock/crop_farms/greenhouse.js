GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('conventional_farming_greenhouse', 'multiblock')
        .langValue("Greenhouse")
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
            .where('C', Predicates.blocks(GTBlocks.CASING_STAINLESS_CLEAN.get())
                .or(Predicates.autoAbilities(definition.getRecipeTypes())))
            .where('D', Predicates.blocks('farmersdelight:rich_soil')
                .or(Predicates.blocks('farmersdelight:rich_soil_farmland')))
            .where('F', Predicates.blocks(GTBlocks.TREATED_WOOD_FENCE.get()))
            .where('X', Predicates.blocks('gtceu:treated_wood_frame'))
            .build()
        )
        .workableCasingModel(
            "gtceu:block/casings/solid/machine_casing_clean_stainless_steel",
            "gtceu:block/multiblock/implosion_compressor" // Keeps that high-tech reactor overlay
        );
});
