GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('conventional_farming_greenhouse', 'multiblock')
        .langValue("Greenhouse")
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('multiblock_automated_farm')
        .recipeModifiers([
            GTRecipeModifiers.PARALLEL_HATCH, 
            GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK)
        ])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("CCCCCCCCC", "FGGG GGGF", "FGGG GGGF", "FGGGGGGGF", "FGGGGGGGF", " FGGGGGF ", "  FFFFF  ")
            .aisle("CDDDCDDDC", "G       G", "G       G", "G       G", "FG     GF", "  GGLGG  ", "    F    ")
            .aisle("CDDDCDDDC", "G       G", "G       G", "G       G", "FG     GF", "  GGLGG  ", "    F    ")
            .aisle("CDDDCDDDC", "G       G", "G       G", "G       G", "FG     GF", "  GGLGG  ", "    F    ")
            .aisle("CDDDCDDDC", "G       G", "G       G", "G       G", "FG     GF", "  GGLGG  ", "    F    ")
            .aisle("CDDDCDDDC", "G       G", "G       G", "G       G", "FG     GF", "  GGLGG  ", "    F    ")
            .aisle("CCCCCCCCC", "F       F", "F       F", "F       F", "FL     LF", " FLLLLLF ", "  FFFFF  ")
            .aisle("CDDDCDDDC", "G       G", "G       G", "G       G", "FG     GF", "  GGLGG  ", "    F    ")
            .aisle("CDDDCDDDC", "G       G", "G       G", "G       G", "FG     GF", "  GGLGG  ", "    F    ")
            .aisle("CDDDCDDDC", "G       G", "G       G", "G       G", "FG     GF", "  GGLGG  ", "    F    ")
            .aisle("CDDDCDDDC", "G       G", "G       G", "G       G", "FG     GF", "  GGLGG  ", "    F    ")
            .aisle("CDDDCDDDC", "G       G", "G       G", "G       G", "FG     GF", "  GGLGG  ", "    F    ")
            .aisle("CCCCCCCCC", "FIICKCIIF", "FGGGGGGGF", "FGGGGGGGF", "FGGGGGGGF", " FGGGGGF ", "  FFFFF  ")
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('C', Predicates.blocks('kubejs:casing_pvc_clean')
                .or(Predicates.autoAbilities(definition.getRecipeTypes())))
            .where('D', Predicates.blocks('farmersdelight:rich_soil')
                .or(Predicates.blocks('farmersdelight:rich_soil_farmland')))
            .where('F', Predicates.blocks('gtceu:stainless_steel_frame'))
            .where('G', Predicates.blocks('gtceu:tempered_glass'))
            .where('L', Predicates.blocks('thermal:lumium_glass'))
            .where('I', Predicates.blocks('kubejs:stainless_steel_intake_fan'))
            .build()
        )
        .workableCasingModel(
            "kubejs:block/casings/solid/casing_pvc_clean",
            "gtceu:block/multiblock/implosion_compressor" // Keeps that high-tech reactor overlay
        );
});
