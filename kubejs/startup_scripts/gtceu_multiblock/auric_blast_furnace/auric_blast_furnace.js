GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('auric_blast_furnace', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('auric_blast_furnace')
        .appearanceBlock(GTBlocks.CASING_STAINLESS_CLEAN)
        .recipeModifiers([
        ])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("CCCCC", "CCCCC", "CCCCC", "CCCCC", "CCCCC", "CCCCC", "CCCCC") 
            .aisle("CCCCC", "CCCCC", "CCCCC", "CCCCC", "CCCCC", "CCCCC", "CCCCC")
            .aisle("CCCCC", "CCCCC", "CCCCC", "CCCCC", "CCCCC", "CCCCC", "CCCCC")
            .aisle("CCCCC", "CCCCC", "CCCCC", "CCCCC", "CCCCC", "CCCCC", "CCCCC")
            .aisle("CCKCC", "CCCCC", "CCCCC", "CCCCC", "CCCCC", "CCCCC", "CCCCC")
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('C', Predicates.blocks(GTBlocks.CASING_STAINLESS_CLEAN.get())
                .or(Predicates.autoAbilities(definition.getRecipeTypes())))
            .build()
        )
        .workableCasingModel(
            "gtceu:block/casings/solid/machine_casing_bronze_plated_bricks",
            "gtceu:block/machines/mixer"
        );
});

GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('auric_blast_furnace') 
        .category('auric_blast_furnace')
        .setMaxIOSize(1, 1, 1, 1) 
        .setSound(GTSoundEntries.MIXER);
});