GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('spiritbound_aquifer')
        .category('simple')
        .setEUIO('in')
        .setMaxIOSize(2, 2, 2, 2)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.BATH);

});

GTCEuStartupEvents.registry("gtceu:machine", event => {
  event
    .create("spiritbound_aquifer", "simple")
    .tiers(GTValues.ULV)
    .definition((tier, builder) => {
      builder
        .langValue("Spiritbound Aquifer")
        .recipeType("spiritbound_aquifer")
        .workableCasingModel("malum:block/polished_twisted_rock", "gtceu:block/machines/brewery")
        .rotationState(RotationState.NON_Y_AXIS)
    })
})



