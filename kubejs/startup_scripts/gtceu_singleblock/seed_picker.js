GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('seed_picking')
        .category('simple')
        .setEUIO('in')
        .setMaxIOSize(1, 1, 1, 1)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.BATH);
});

GTCEuStartupEvents.registry("gtceu:machine", event => {
  event
    .create("seed_picker", "simple")
    .tiers(GTValues.ALL_TIERS)
    .definition((tier, builder) => {
      builder
        .langValue("Seed Picker")
        .recipeType("seed_picking")
        .workableTieredHullModel('kubejs:block/seed_picker')
        .rotationState(RotationState.NON_Y_AXIS)
    })
})
