// startup_scripts/nuclear_reactor.js
GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('algae_farm', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('algae_farm')
        .appearanceBlock(GTBlocks.CASING_STAINLESS_CLEAN)
        .recipeModifiers([
        ])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("CCCCCCCCC", "SSSSSSSSS", "SSSSSSSSS", "SSSSSSSSS")
            .aisle("CCCCCCCCC", "S       S", "S       S", "S       S")
            .aisle("CCCCCCCCC", "S       S", "S       S", "S       S")
            .aisle("CCCCCCCCC", "S       S", "S       S", "S       S")
            .aisle("CCCCCCCCC", "S       S", "S       S", "S       S")
            .aisle("CCCCCCCCC", "S       S", "S       S", "S       S")
            .aisle("CCCCCCCCC", "S       S", "S       S", "S       S")
            .aisle("CCCCCCCCC", "S       S", "S       S", "S       S")
            .aisle("CCCCKCCCC", "SSSSSSSSS", "SSSSSSSSS", "SSSSSSSSS")
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('C', Predicates.blocks(GTBlocks.CASING_STAINLESS_CLEAN.get())
                .or(Predicates.autoAbilities(definition.getRecipeTypes())))
            .where('S', Predicates.blocks('minecraft:iron_block'))
            .build()
        )
        .workableCasingModel(
            "gtceu:block/casings/solid/machine_casing_bronze_plated_bricks",
            "gtceu:block/machines/mixer"
        );
});

GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('algae_farm') 
        .category('algae_farm')
        .setMaxIOSize(1, 1, 1, 1) 
        .setSound(GTSoundEntries.MIXER);
});