GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('crop_breeder')
        .category('simple')
        .setEUIO('in')
        .setMaxIOSize(2, 3, 1, 1)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.BATH);

});

GTCEuStartupEvents.registry("gtceu:machine", event => {
  event
    .create("crop_breeder", "simple")
    .tiers(GTValues.ALL_TIERS)
    .definition((tier, builder) => {
      builder
        .langValue("Crop Breeder")
        .recipeType("crop_breeder")
        .workableTieredHullModel('kubejs:block/crop_breeder')
        .rotationState(RotationState.NON_Y_AXIS)
    })
})



