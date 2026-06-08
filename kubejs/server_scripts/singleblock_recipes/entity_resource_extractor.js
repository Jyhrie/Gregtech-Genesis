ServerEvents.recipes(event => {
        // TODO: REPLACE AND DELETE
    event.recipes.gtceu.entity_extraction('seaborn_blood_temp')
        .itemInputs('malum:aqueous_spirit')
        .outputFluids(Fluid.of('gtceu:distilled_water', 1000))
        .biome("terrafoundation:aegir_depths")
        .duration(200)
})