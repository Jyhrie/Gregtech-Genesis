GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('spirit_condenser')
        .category('simple')
        .setEUIO('in')
        .setMaxIOSize(2, 2, 1, 1)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.BATH);

});

GTCEuStartupEvents.registry("gtceu:machine", event => {
  event
    .create("spirit_condenser", "simple")
    .tiers(GTValues.ULV)
    .definition((tier, builder) => {
      builder
        .langValue("Spirit Condenser")
        .recipeType("spirit_condenser")
        .workableCasingModel("malum:block/arcane_rock/twisted/polished_twisted_rock", "gtceu:block/machines/brewery")
        .rotationState(RotationState.NON_Y_AXIS)
    })
})



