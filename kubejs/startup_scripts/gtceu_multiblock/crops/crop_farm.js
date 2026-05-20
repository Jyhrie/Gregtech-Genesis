GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('crop_farm') 
        .category('crop_farm')
        .setEUIO('in')
        .setMaxIOSize(2, 2, 1, 1) 
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ARC);
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('crop_farm', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('crop_farm')
        .appearanceBlock(GTBlocks.TREATED_WOOD_PLANK)
        .pattern(definition => FactoryBlockPattern.start()
        .aisle("CCCCCCCCC")
        .aisle("CFFFFFFFC")
        .aisle("CFFFFFFFC")
        .aisle("CFFFWFFFC")
        .aisle("CFFFFFFFC")
        .aisle("CFFFFFFFC")
        .aisle("CCCCKCCCC")
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('C', Predicates.blocks(GTBlocks.TREATED_WOOD_PLANK.get())
                .or(Predicates.autoAbilities(definition.getRecipeTypes())))
            .where('F', Predicates.blocks('minecraft:farmland'))
            .where('W', Predicates.blocks('minecraft:water'))
            .build()
            
        )
        .workableCasingModel("gtceu:block/treated_wood_planks", "gtceu:block/multiblock/implosion_compressor");
});
