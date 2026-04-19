GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('freight_trade_lv') 
        .category('freight_trade')
        .setEUIO('in')
        .setMaxIOSize(8, 8, 3, 3) 
        .setSound(GTSoundEntries.ARC);

    event.create('freight_trade_mv') 
        .category('freight_trade')
        .setEUIO('in')
        .setMaxIOSize(8, 8, 3, 3) 
        .setSound(GTSoundEntries.ARC);

    event.create('freight_trade_hv') 
        .category('freight_trade')
        .setEUIO('in')
        .setMaxIOSize(8, 8, 3, 3) 
        .setSound(GTSoundEntries.ARC);

        event.create('freight_trade_ev') 
        .category('freight_trade')
        .setEUIO('in')
        .setMaxIOSize(8, 8, 3, 3) 
        .setSound(GTSoundEntries.ARC);
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('freight_trade_hub_lv', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('freight_trade_lv')
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .pattern(definition => {
            return FactoryBlockPattern.start()
                .aisle("CCC", "CCC", "CCC")
                .aisle("CCC", "CCC", "CCC")
                .aisle("CCC", "CCC", "CCC")
                .aisle("CCC", "CCC", "CCC")
                .aisle("CCC", "CCC", "CCC")
                .aisle("CCC", "CCC", "CCC")
                .aisle("CCC", "CKC", "CCC")
                .where('K', Predicates.controller(Predicates.blocks(definition.get())))
                .where('C', Predicates.blocks(GTBlocks.CASING_STEEL_SOLID.get()) 
                    .or(Predicates.autoAbilities(definition.getRecipeTypes())))
                .build();
        })
        .workableCasingModel(
            "gtceu:block/casings/solid/machine_casing_solid_steel", 
            "gtceu:block/multiblock/implosion_compressor" 
        );
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('freight_trade_hub_mv', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('freight_trade_mv')
        .appearanceBlock(GTBlocks.CASING_ALUMINIUM_FROSTPROOF)
        .pattern(definition => {
            return FactoryBlockPattern.start()
                .aisle("CCC", "CCC", "CCC")
                .aisle("CCC", "CCC", "CCC")
                .aisle("CCC", "CCC", "CCC")
                .aisle("CCC", "CCC", "CCC")
                .aisle("CCC", "CCC", "CCC")
                .aisle("CCC", "CCC", "CCC")
                .aisle("CCC", "CKC", "CCC")
                .where('K', Predicates.controller(Predicates.blocks(definition.get())))
                .where('C', Predicates.blocks(GTBlocks.CASING_ALUMINIUM_FROSTPROOF.get()) 
                    .or(Predicates.autoAbilities(definition.getRecipeTypes())))
                .build();
        })
        .workableCasingModel(
            "gtceu:block/casings/solid/machine_casing_frost_proof", 
            "gtceu:block/multiblock/implosion_compressor" 
        );
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('freight_trade_hub_hv', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('freight_trade_hv')
        .appearanceBlock(GTBlocks.CASING_STAINLESS_CLEAN)
        .pattern(definition => {
            return FactoryBlockPattern.start()
                .aisle("CCC", "CCC", "CCC")
                .aisle("CCC", "CCC", "CCC")
                .aisle("CCC", "CCC", "CCC")
                .aisle("CCC", "CCC", "CCC")
                .aisle("CCC", "CCC", "CCC")
                .aisle("CCC", "CCC", "CCC")
                .aisle("CCC", "CKC", "CCC")
                .where('K', Predicates.controller(Predicates.blocks(definition.get())))
                .where('C', Predicates.blocks(GTBlocks.CASING_STAINLESS_CLEAN.get()) 
                    .or(Predicates.autoAbilities(definition.getRecipeTypes())))
                .build();
        })
        .workableCasingModel(
            "gtceu:block/casings/solid/machine_casing_clean_stainless_steel", 
            "gtceu:block/multiblock/implosion_compressor" 
        );
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('freight_trade_hub_ev', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('freight_trade_ev')
        .appearanceBlock(GTBlocks.CASING_TUNGSTENSTEEL_ROBUST)
        .pattern(definition => {
            return FactoryBlockPattern.start()
                .aisle("CCC", "CCC", "CCC")
                .aisle("CCC", "CCC", "CCC")
                .aisle("CCC", "CCC", "CCC")
                .aisle("CCC", "CCC", "CCC")
                .aisle("CCC", "CCC", "CCC")
                .aisle("CCC", "CCC", "CCC")
                .aisle("CCC", "CKC", "CCC")
                .where('K', Predicates.controller(Predicates.blocks(definition.get())))
                .where('C', Predicates.blocks(GTBlocks.CASING_TUNGSTENSTEEL_ROBUST.get()) 
                    .or(Predicates.autoAbilities(definition.getRecipeTypes())))
                .build();
        })
        .workableCasingModel(
            "gtceu:block/casings/solid/machine_casing_robust_tungstensteel", 
            "gtceu:block/multiblock/implosion_compressor" 
        );
});