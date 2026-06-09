GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('lunar_array') 
        .category('lunar_array')
        .setEUIO('out')
        .setMaxIOSize(1, 0, 1, 0) 
        .setSound(GTSoundEntries.ARC);
});

// startup_scripts/nuclear_reactor.js
GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('lunar_array', 'multiblock')
        .langValue('Lunar Array')
        .rotationState(RotationState.NON_Y_AXIS)
        .generator(true)
        .recipeType('lunar_array')
        .appearanceBlock(GTBlocks.CASING_TUNGSTENSTEEL_ROBUST)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("CCCCCCCCCCC", "           ", "           ", "           ", "SSSSS SSSSS")
            .aisle("CAAAAAAAAAC", " M M   M M ", " M M   M M ", "AMAMA AMAMA", "SSSSS SSSSS")
            .aisle("CAAAAAAAAAC", "           ", "           ", "SSSSS SSSSS", "           ")
            .aisle("CAAAAAAAAAC", " M M   M M ", "MPPPM MPPPM", "SSSSS SSSSS", "           ")
            .aisle("CAAAAAAAAAC", "           ", "SSSSS SSSSS", "           ", "           ")
            .aisle("CCCCCKCCCCC", "           ", "SSSSS SSSSS", "           ", "           ")
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('M', Predicates.blocks(GTBlocks.MACHINE_CASING_MV.get()))      
            .where('C', Predicates.blocks('ad_astra:desh_plating')
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setExactLimit(1).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.OUTPUT_ENERGY).setExactLimit(4).setPreviewCount(4)) 
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setExactLimit(1).setPreviewCount(1)))        
            .where('A', Predicates.blocks(GTBlocks.CASING_ALUMINIUM_FROSTPROOF.get()))    
            .where('P', Predicates.blocks(GTBlocks.CASING_STEEL_PIPE.get()))                         
            .where('S', Predicates.blocks('kubejs:lunar_array_cell')) 
            .build()
        )
        .workableCasingModel(
            "ad_astra:block/desh_plating",
            "gtceu:block/multiblock/implosion_compressor"
        );
});
