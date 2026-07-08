GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('thirsty_tank')
        .category('simple')
        .setEUIO('in')
        .setMaxIOSize(0, 0, 0, 1)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.BATH);

});

GTCEuStartupEvents.registry("gtceu:machine", event => {
  event
    .create("thirsty_tank", "simple")
    .tiers(GTValues.ULV)
    .definition((tier, builder) => {
      builder
        .langValue("Thirsty Tank")
        .recipeType("thirsty_tank")
        .workableCasingModel("malum:block/polished_tainted_rock", "gtceu:block/machines/brewery")
        .rotationState(RotationState.NON_Y_AXIS)
    })
})



