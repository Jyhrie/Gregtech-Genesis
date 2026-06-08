ServerEvents.recipes(event => {

    // TODO: REPLACE AND DELETE
    event.recipes.gtceu.structure_extraction('seaborn_temple_extractor')
        .itemInputs('malum:aqueous_spirit')      // 1x Aqueous Spirit
        .outputFluids(Fluid.of('gtceu:distilled_water', 1000)) // 1000mB Distilled Water
        .duration(200) // 10 seconds (20 ticks per second)
})