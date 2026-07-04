GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('hydroponics') 
        .category('hydroponics')
        .setEUIO('in')
        .setMaxIOSize(8, 8, 3, 3) 
        .setSound(GTSoundEntries.ARC);
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('hydroponics', 'multiblock')
        .langValue("Hydroponics Farm")
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('hydroponics')
        //.appearanceBlock(Block.getBlock('kubejs:casing_pvc_clean'))
        .recipeModifiers([
            GTRecipeModifiers.PARALLEL_HATCH, 
            GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK)
        ])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("CCCCCCC", "CGGGGGC", "CCCCCCC", "CGGGGGC", "CCCCCCC", "CGGGGGC", "CCCCCCC")
            .aisle("CDDDDDC", "C     C", "CDDDDDC", "C     C", "CDDDDDC", "C     C", "CCCCCCC")
            .aisle("CCCKCCC", "C     C", "CCCCCCC", "C     C", "CCCCCCC", "C     C", "CCCCCCC")
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('C', Predicates.blocks('kubejs:casing_pvc_clean')
                .or(Predicates.autoAbilities(definition.getRecipeTypes())))
            .where('D', Predicates.blocks('farmersdelight:rich_soil')
                .or(Predicates.blocks('farmersdelight:rich_soil_farmland')))
            .where('G', Predicates.blocks('thermal:lumium_glass'))
            .build()
        )
        .workableCasingModel(
            "kubejs:block/casings/solid/casing_pvc_clean",
            "gtceu:block/multiblock/implosion_compressor" // Keeps that high-tech reactor overlay
        );
});
