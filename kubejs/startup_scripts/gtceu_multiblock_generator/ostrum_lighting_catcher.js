GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('lightning_catcher') 
        .category('lightning_catcher')
        .setEUIO('out')
        .setMaxIOSize(1, 0, 1, 0) 
        .setSound(GTSoundEntries.ARC);
});

// startup_scripts/nuclear_reactor.js
GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('lightning_catcher', 'multiblock')
        .langValue('Lightning Catcher')
        .rotationState(RotationState.NON_Y_AXIS)
        .generator(true)
        .recipeType('lightning_catcher')
        .appearanceBlock(GTBlocks.CASING_TUNGSTENSTEEL_ROBUST)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("P  P  P", "P  P  P", "P     P", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ")
            .aisle(" BBBBB ", " P F P ", " P F P ", " P F P ", " P F P ", " P F P ", " P F P ", "   F   ", "   F   ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ")
            .aisle(" BMMMB ", "       ", "   C   ", "  CCC  ", "   C   ", "  CCC  ", "   C   ", "  F F  ", "  FFF  ", "  FFF  ", "   F   ", "   F   ", "   F   ", "   F   ", "   F   ", "   F   ", "   F   ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ")
            .aisle("PBMHMBP", "PF W FP", " FCWCF ", " FCWCF ", " FCWCF ", " FCWCF ", " FCWCF ", " F W F ", " FFWFF ", "  FWF  ", "  FWF  ", "  FWF  ", "  FWF  ", "  FWF  ", "  FWF  ", "  FWF  ", "  FWF  ", "   W   ", "   W   ", "   W   ", "   W   ", "   W   ", "   W   ", "   W   ", "   W   ", "   W   ", "   W   ", "   R   ")
            .aisle(" BMMMB ", "       ", "   C   ", "  CCC  ", "   C   ", "  CCC  ", "   C   ", "  F F  ", "  FFF  ", "  FFF  ", "   F   ", "   F   ", "   F   ", "   F   ", "   F   ", "   F   ", "   F   ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ")
            .aisle(" BBBBB ", " P F P ", " P F P ", " P F P ", " P F P ", " P F P ", " P F P ", "   F   ", "   F   ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ")
            .aisle("P  K  P", "P  P  P", "P     P", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ")
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('M', Predicates.blocks(GTBlocks.CASING_TITANIUM_STABLE.get()))
            .where('H', Predicates.abilities(PartAbility.OUTPUT_ENERGY).setExactLimit(1).setPreviewCount(1))
            .where('C', Predicates.blocks('gtceu:nichrome_coil_block'))        
            .where('B', Predicates.blocks('ad_astra:ostrum_plating')
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setExactLimit(1).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setExactLimit(1).setPreviewCount(1)))        
            .where('P', Predicates.blocks('ad_astra:ostrum_pillar'))          
            .where('W', Predicates.blocks('kubejs:lightning_catcher_core'))     
            .where('F', Predicates.blocks('gtceu:ostrum_frame'))              
            .where('R', Predicates.blocks('minecraft:lightning_rod')) 
            .build()
        )
        .workableCasingModel(
            "ad_astra:block/ostrum_pillar",
            "gtceu:block/multiblock/implosion_compressor"
        );
});
