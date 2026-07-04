// startup_scripts/nuclear_reactor.js
GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('nuclear_reactor', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('nuclear_reactor')
        .appearanceBlock(GTBlocks.CASING_STAINLESS_CLEAN)
        .recipeModifiers([
            GTRecipeModifiers.PARALLEL_HATCH, 
            GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK)
        ])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("  CCCCC  ", "  CCCCC  ", "  CCCCC  ", "  CCCCC  ", "  CCCCC  ", "  CCCCC  ", "  CCCCC  ")
            .aisle(" CCCCCCC ", " CCAAACC ", " CCAAACC ", " CCAAACC ", " CCAAACC ", " CCAAACC ", " CCGGGCC ")
            .aisle("CCCCCCCCC", "CCADDDACC", "CCADDDACC", "CCADDDACC", "CCADDDACC", "CCADDDACC", "CCGGGGGCC")
            .aisle("CCCCCCCCC", "CADDADDAC", "CADDADDAC", "CADDADDAC", "CADDADDAC", "CADDADDAC", "CGGGGGGGC")
            .aisle("CCCCCCCCC", "CADAAADAC", "CADAAADAC", "CADAAADAC", "CADAAADAC", "CADAAADAC", "CGGGGGGGC")
            .aisle("CCCCCCCCC", "CADDADDAC", "CADDADDAC", "CADDADDAC", "CADDADDAC", "CADDADDAC", "CGGGGGGGC")
            .aisle("CCCCCCCCC", "CCADDDACC", "CCADDDACC", "CCADDDACC", "CCADDDACC", "CCADDDACC", "CCGGGGGCC")
            .aisle(" CCCCCCC ", " CCAAACC ", " CCAAACC ", " CCAAACC ", " CCAAACC ", " CCAAACC ", " CCGGGCC ")
            .aisle("  CCKCC  ", "  CCCCC  ", "  CCCCC  ", "  CCCCC  ", "  CCCCC  ", "  CCCCC  ", "  CCCCC  ")
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('C', Predicates.blocks(GTBlocks.CASING_STAINLESS_CLEAN.get())
                .or(Predicates.autoAbilities(definition.getRecipeTypes())))
            .where('D', Predicates.blocks(GTBlocks.COIL_NICHROME.get()))
            .where('A', Predicates.blocks('minecraft:air'))
            .where('G', Predicates.blocks('minecraft:glass'))
            .build()
        )
        .workableCasingModel(
            "gtceu:block/casings/solid/machine_casing_clean_stainless_steel",
            "gtceu:block/multiblock/fusion_reactor" // Keeps that high-tech reactor overlay
        );
});

GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('nuclear_reactor') 
        .category('nuclear')
        .setEUIO('in')
        .setMaxIOSize(8, 8, 3, 3) 
        .setSound(GTSoundEntries.ARC);
});