// GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
//     event.create('purification_altar') 
//         .category('purification_altar')
//         .setEUIO('in')
//         .setMaxIOSize(3, 9, 2, 2) 
//         .setSound(GTSoundEntries.ARC);
// });

// // startup_scripts/nuclear_reactor.js
// GTCEuStartupEvents.registry('gtceu:machine', event => {
//     event.create('purification_altar', 'multiblock')
//         .rotationState(RotationState.NON_Y_AXIS)
//         .recipeType('purification_altar')
//         .appearanceBlock(GTBlocks.CASING_TUNGSTENSTEEL_ROBUST)
//         .pattern(definition => FactoryBlockPattern.start()
//             .aisle(" SSS ",)
//             .aisle("SHHHS",)
//             .aisle("SHHHS",)
//             .aisle("STHTS",)
//             .aisle(" CKC ",)
//             .where('K', Predicates.controller(Predicates.blocks(definition.get())))
//             .where('C', Predicates.blocks('malum:tainted_rock')
//                 .or(Predicates.autoAbilities(definition.getRecipeTypes())))
//             .where('G', Predicates.blocks('botania:mana_glass'))
//             .where('X', Predicates.blocks('gtceu:soulstained_steel_frame'))
//             .where('H', Predicates.blocks('malum:block_of_hallowed_gold'))
//             .where('T', Predicates.blocks('gtceu:thaumium_block'))
//             .where('W', Predicates.blocks('malum:runewood'))
//             .build()
//         )
//         .workableCasingModel(
//             "malum:block/arcane_rock/tainted/tainted_rock",
//             "gtceu:block/multiblock/implosion_compressor" // Keeps that high-tech reactor overlay
//         );
// });
