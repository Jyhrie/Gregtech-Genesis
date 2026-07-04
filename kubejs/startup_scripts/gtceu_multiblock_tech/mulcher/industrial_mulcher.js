GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('mulcher') 
        .category('mulcher')
        .setEUIO('in')
        .setMaxIOSize(8, 8, 3, 3) 
        .setSound(GTSoundEntries.ARC);
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('lv_multiblock_mulcher', 'multiblock')
        .langValue("Industrial Mulcher")
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('mulcher')
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("CCC", "MMM", "CCC")
            .aisle("CCC", "GFG", "C C")
            .aisle("CCC", "GFG", "C C")
            .aisle("CCC", "GFG", "C C")
            .aisle("CCC", "MKM", "CCC")
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('C', Predicates.blocks(GTBlocks.CASING_STEEL_SOLID.get())
                .or(Predicates.autoAbilities(definition.getRecipeTypes())))
            .where('F', Predicates.blocks('gtceu:steel_frame'))
            .where('G', Predicates.blocks(GTBlocks.CASING_STEEL_GEARBOX.get()))
            .where('M', Predicates.blocks(GTBlocks.MACHINE_CASING_LV.get()))
            .build()
        )
        .workableCasingModel(
            "gtceu:block/casings/solid/machine_casing_solid_steel",
            "gtceu:block/multiblock/implosion_compressor" // Keeps that high-tech reactor overlay
        );
});
