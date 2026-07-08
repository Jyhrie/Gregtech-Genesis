GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('structure_extraction')
        .category('simple')
        .setEUIO('in')
        .setMaxIOSize(2, 2, 2, 2)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.BATH);

});

GTCEuStartupEvents.registry("gtceu:machine", event => {
  event
    .create("structure_resource_extractor", "simple")
    .tiers(GTValues.ULV)
    .definition((tier, builder) => {
      builder
        .langValue("Structure Resource Extractor")
        .recipeType("structure_extraction")
        .workableTieredHullModel('kubejs:block/structure_resource_extractor')
        .rotationState(RotationState.NON_Y_AXIS)
    })
})



