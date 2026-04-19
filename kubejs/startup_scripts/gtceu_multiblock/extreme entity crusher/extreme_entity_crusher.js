GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('eec') 
        .category('eec')
        .setEUIO('in')
        .setMaxIOSize(8, 8, 3, 3) 
        .setSound(GTSoundEntries.ARC);
});

// startup_scripts/nuclear_reactor.js
GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('extreme_entity_crusher', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('eec')
        .appearanceBlock(GTBlocks.CASING_TUNGSTENSTEEL_ROBUST)
        .recipeModifiers([
            GTRecipeModifiers.PARALLEL_HATCH, 
            GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK)
        ])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("CCCCC", "XGGGX", "XGGGX", "XGGGX", "XGGGX", "XGGGX", "CCCCC")
            .aisle("CCCCC", "G   G", "G   G", "G   G", "G   G", "G   G", "CCCCC")
            .aisle("CCCCC", "G   G", "G   G", "G   G", "G   G", "G   G", "CCCCC")
            .aisle("CCCCC", "G   G", "G   G", "G   G", "G   G", "G   G", "CCCCC")
            .aisle("CCKCC", "XGGGX", "XGGGX", "XGGGX", "XGGGX", "XGGGX", "CCCCC")
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('C', Predicates.blocks(GTBlocks.CASING_TUNGSTENSTEEL_ROBUST.get())
                .or(Predicates.autoAbilities(definition.getRecipeTypes())))
            .where('G', Predicates.blocks('gtceu:laminated_glass'))
            .where('X', Predicates.blocks('gtceu:tungsten_steel_frame'))
            .build()
        )
        .workableCasingModel(
            "gtceu:block/casings/solid/machine_casing_robust_tungstensteel",
            "gtceu:block/multiblock/implosion_compressor" // Keeps that high-tech reactor overlay
        );
});
