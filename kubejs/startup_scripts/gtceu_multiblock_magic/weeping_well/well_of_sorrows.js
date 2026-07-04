
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('well_of_sorrows') 
        .category('well_of_sorrows')
        .setMaxIOSize(1, 1, 1, 1) 
        .setSound(GTSoundEntries.MIXER);
});


GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('well_of_sorrows', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('well_of_sorrows')
        .appearanceBlock(GTBlocks.CASING_TUNGSTENSTEEL_ROBUST)
        .recipeModifiers([
        ])
        .pattern(definition => FactoryBlockPattern.start()

        .aisle("              ", "              ", "              ", "        p     ", "        p     ", "      p p     ", "      p p     ", "      pgp     ", "      pgp     ", "      pgp     ", "      pgp     ", "      pgp     ", "      pgp     ", "      pgp     ", "      pgp     ", "      p p     ", "              ", "              ", "              ", "              ", "              ", "              ", "              ")
        .aisle("       b      ", "      pb      ", "      pbp     ", "      pbp     ", "     ppbpp    ", "     ppbpp    ", "     ppbpp    ", "     ppbpp    ", "     ppbpp    ", "     ppbpp    ", "     ppbpp    ", "     ppbpp    ", "     ppbpp    ", "     ppbpp    ", "     ppbp     ", "     ppbp     ", "      pbp     ", "      pbp     ", "      pbp     ", "       bp     ", "       b      ", "       b      ", "       e      ")
        .aisle("      p p     ", "      p p     ", "     pp pp    ", "     pp pp    ", "     pprpp    ", "     pprpp    ", "     pprpp    ", "     pprpp    ", "     p d p    ", "     p   p    ", "     p   p    ", "     pp pp    ", "      p pp    ", "      p p     ", "      p p     ", "        p     ", "        p     ", "              ", "              ", "              ", "              ", "              ", "              ")
        .aisle("     b b b    ", "     b b b    ", "     b b b    ", "     b b b    ", "     b b b    ", "    cbcbcbc   ", "     b d b    ", "    efgggfe   ", "              ", "              ", "              ", "              ", "              ", "              ", "              ", "              ", "              ", "              ", "              ", "              ", "              ", "              ", "              ")
        .aisle("    bhhhhhb   ", "    bhijihb   ", "    bjikijb   ", "    bkikikb   ", "    bjikijb   ", "    bhijihb   ", "    blonmlb   ", "    f     f   ", "              ", "              ", "              ", "              ", "              ", "              ", "              ", "              ", "              ", "              ", "              ", "              ", "              ", "              ", "              ")
        .aisle("   p hkkkh p  ", "   p iqqqi p  ", "  pp iqqqi pp ", "  pp iqqqi pp ", " ppp iqqqi ppp", " ppp i   i ppp", " ppp o   m ppp", " pppg     gppp", " ppp        pp", " ppp        pp", " pp         pp", " pp          p", " p            ", "              ", "              ", "              ", "              ", "              ", "              ", "              ", "              ", "              ", "              ")
        .aisle("  b bhkkkhb b ", "  b bjqqqjb b ", "  b bkqqqkb b ", "  b bkqqqkb b ", "  brbkqsqkbrb ", "  brbj   jbrb ", "  brdn   ndrb ", " gbrg     grbg", " gbr       rbg", " gb         bg", " gb         bg", "  b         b ", "  b         b ", "  b         e ", "  e           ", "              ", "              ", "              ", "              ", "              ", "              ", "              ", "              ")
        .aisle("   p hkkkh p  ", "   p iqqqi p  ", "  pp iqqqi p  ", " ppp iqqqi pp ", " ppp iqqqi pp ", " ppp i   i pp ", " ppp m   o ppp", " pppg     gppp", " ppp       ppp", " pp         pp", " pp         pp", "  p         p ", "            p ", "              ", "              ", "              ", "              ", "              ", "              ", "              ", "              ", "              ", "              ")
        .aisle("    bhhhhhb   ", "    bhijihb   ", "    bjikijb   ", "    bkikikb   ", "    bjikijb   ", "    bhijihb   ", "    blmnolb   ", "    f     f   ", "              ", "              ", "              ", "              ", "              ", "              ", "              ", "              ", "              ", "              ", "              ", "              ", "              ", "              ", "              ")
        .aisle("     b b b    ", "     b b b    ", "     b b b    ", "     b b b    ", "     b b b    ", "    cbcbcbc   ", "     b d b    ", "    efgKgfe   ", "              ", "              ", "              ", "              ", "              ", "              ", "              ", "              ", "              ", "              ", "              ", "              ", "              ", "              ", "              ")
        .where('K', Predicates.controller(Predicates.blocks(definition.get())))
        .where("b", Predicates.blocks("malum:twisted_rock_column"))
        .where("c", Predicates.blocks("cataclysm:black_steel_block"))
        .where("d", Predicates.blocks("malum:block_of_malignant_lead"))
        .where("e", Predicates.blocks("malum:twisted_rock_column_cap"))
        .where("f", Predicates.blocks("malum:checkered_twisted_rock"))
        .where("g", Predicates.blocks("malum:polished_twisted_rock")
            .or(Predicates.autoAbilities(definition.getRecipeTypes())))
        .where("h", Predicates.blocks("malum:weeping_well_bricks"))
        .where("i", Predicates.blocks("malum:weeping_well_side_pillar"))
        .where("j", Predicates.blocks("malum:weeping_well_central_encasement_support"))
        .where("k", Predicates.blocks("malum:weeping_well_central_pillar"))
        .where("l", Predicates.blocks("malum:weeping_well_encasement_corner"))
        .where("m", Predicates.blocks("malum:weeping_well_encasement"))
        .where("n", Predicates.blocks("malum:weeping_well_central_encasement"))
        .where("o", Predicates.blocks("malum:weeping_well_encasement_mirrored"))
        .where("p", Predicates.blocks("malum:twisted_rock"))
        .where("q", Predicates.blocks("malum:primordial_soup"))
        .where("r", Predicates.blocks("malum:block_of_cthonic_gold"))
        .where("s", Predicates.blocks("malum:void_conduit"))
        .build()
        )
        .workableCasingModel(
            "malum:block/arcane_rock/twisted/polished_twisted_rock",
            "gtceu:block/machines/mixer"
        );
});





