GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('chemplant') 
        .category('chemplant')
        .setEUIO('in')
        .setMaxIOSize(1, 1, 1, 1) 
        .setSound(GTSoundEntries.ARC);
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('chemplant', 'multiblock')
        .langValue("Chemical Plant")
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('chemplant')
        .appearanceBlock(GTBlocks.FIREBOX_TUNGSTENSTEEL)
        .pattern(definition => FactoryBlockPattern.start()
        .aisle("CCCCCCC", "C     C", "C     C", "C     C", "C     C", "C     C", "CCCCCCC")
        .aisle("CFFFFFC", " MMMMM ", "       ", "       ", "       ", " MMMMM ", "CC   CC")
        .aisle("CFFFFFC", " MMMMM ", "  PPP  ", "  HHH  ", "  PPP  ", " M V M ", "C     C")
        .aisle("CFFFFFC", " MMMMM ", "  PPP  ", "  HHH  ", "  PPP  ", " MVVVM ", "C     C")
        .aisle("CFFFFFC", " MMMMM ", "  PPP  ", "  HHH  ", "  PPP  ", " M V M ", "C     C")
        .aisle("CFFFFFC", " MMMMM ", "       ", "       ", "       ", " MMMMM ", "CC   CC")
        .aisle("CCCKCCC", "C     C", "C     C", "C     C", "C     C", "C     C", "CCCCCCC")
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('C', Predicates.blocks('kubejs:casing_petrochemical_resistant_composite')
                .or(Predicates.autoAbilities(definition.getRecipeTypes())))
            .where('F', Predicates.blocks(GTBlocks.FIREBOX_TUNGSTENSTEEL.get()))
            .where('H', Predicates.heatingCoils())
            .where('P', Predicates.blocks(GTBlocks.CASING_POLYTETRAFLUOROETHYLENE_PIPE.get()))
            .where('V', Predicates.blocks(GCYMBlocks.HEAT_VENT.get()))
            .where('M', Predicates.blocks(GTBlocks.MACHINE_CASING_IV.get()))
            .build()
            
        )
        .workableCasingModel("kubejs:block/casings/solid/casing_petrochemical_resistant_composite", "gtceu:block/multiblock/implosion_compressor");
});
