GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('multi_spirit_condenser') 
        .category('multi_spirit_condenser')
        .setEUIO('in')
        .setMaxIOSize(3, 9, 2, 2) 
        .setSound(GTSoundEntries.ARC);
});

// startup_scripts/nuclear_reactor.js
GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('multi_spirit_condenser', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('multi_spirit_condenser')
        .appearanceBlock(GTBlocks.CASING_TUNGSTENSTEEL_ROBUST)
        .recipeModifiers([
            GTRecipeModifiers.PARALLEL_HATCH
        ])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("CCCCC", "XGGGX", "XGGGX", "XGGGX", " XGX ", "     ", " XGX ", "XGGGX", "XGGGX", "XGGGX","CCCCC")
            .aisle("CTHTC", "G   G", "G   G", "G   G", "XGGGX", " WWW ", "XGGGX", "G   G", "G   G", "G   G","CCCCC")
            .aisle("CHHHC", "G   G", "G   G", "G   G", "GG GG", " W W ", "GG GG", "G   G", "G   G", "G   G","CCCCC")
            .aisle("CTHTC", "G   G", "G   G", "G   G", "XGGGX", " WWW ", "XGGGX", "G   G", "G   G", "G   G","CCCCC")
            .aisle("CCKCC", "XGGGX", "XGGGX", "XGGGX", " XGX ", "     ", " XGX ", "XGGGX", "XGGGX", "XGGGX","CCCCC")
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('C', Predicates.blocks('malum:tainted_rock')
                .or(Predicates.autoAbilities(definition.getRecipeTypes())))
            .where('G', Predicates.blocks('botania:mana_glass'))
            .where('X', Predicates.blocks('gtceu:soulstained_steel_frame'))
            .where('H', Predicates.blocks('malum:block_of_hallowed_gold'))
            .where('T', Predicates.blocks('gtceu:thaumium_block'))
            .where('W', Predicates.blocks('malum:runewood'))
            .build()
        )
        .workableCasingModel(
            "malum:block/arcane_rock/tainted/tainted_rock",
            "gtceu:block/multiblock/implosion_compressor" // Keeps that high-tech reactor overlay
        );
});
