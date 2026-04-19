GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('fishfarm') 
        .category('fishfarm')
        .setEUIO('in')
        .setMaxIOSize(8, 8, 3, 3) 
        .setSound(GTSoundEntries.ARC);
});

// startup_scripts/nuclear_reactor.js
GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('fish_farm', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('fishfarm')
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .recipeModifiers([
            GTRecipeModifiers.PARALLEL_HATCH, 
            GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK)
        ])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("CCCKCCC", "CCCCCCC", "CCCCCCC", "CCCCCCC")
            .aisle("CCCCCCC", "C     C", "C     C", "C     C")
            .aisle("CCCCCCC", "C     C", "C     C", "C     C")
            .aisle("CCCCCCC", "C     C", "C     C", "C     C")
            .aisle("CCCCCCC", "C     C", "C     C", "C     C")
            .aisle("CCCCCCC", "C     C", "C     C", "C     C")
            .aisle("CCCKCCC", "CCCCCCC", "CCCCCCC", "CCCCCCC")
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('C', Predicates.blocks(GTBlocks.CASING_STEEL_SOLID.get())
                .or(Predicates.autoAbilities(definition.getRecipeTypes())))
            .build()
        )
        .workableCasingModel(
            "gtceu:block/casings/solid/machine_casing_solid_steel",
            "gtceu:block/multiblock/implosion_compressor" // Keeps that high-tech reactor overlay
        );
});
