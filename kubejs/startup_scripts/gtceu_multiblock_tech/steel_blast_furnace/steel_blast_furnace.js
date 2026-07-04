GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('steel_blast_furnace', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('steel_blast_furnace') 
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('FFF', 'CCC', 'CCC', 'CCC', 'CCC')
            .aisle('FFF', 'C#C', 'C#C', 'C#C', 'C#C')
            .aisle('FFF', 'CKC', 'CCC', 'CCC', 'CCC')
            .where('C', Predicates.blocks(GTBlocks.CASING_STEEL_SOLID.get()))
            .where('#', Predicates.air())
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('F', Predicates.blocks(GTBlocks.FIREBOX_STEEL.get()))
            .build())
        .workableCasingModel("gtceu:block/casings/solid/machine_casing_solid_steel",
                                "gtceu:block/multiblock/primitive_blast_furnace");
});

GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('steel_blast_furnace') 
        .category('steel_blast_furnace')
        .setEUIO('in')
        .setMaxIOSize(3, 2, 0, 0) 
        .setSound(GTSoundEntries.BOILER);
});