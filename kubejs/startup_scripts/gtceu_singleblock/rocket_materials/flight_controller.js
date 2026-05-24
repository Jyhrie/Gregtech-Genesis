GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('flight_controller')
        .category('simple')
        .setEUIO('in')
        .setMaxIOSize(1, 0, 1, 0)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.BATH);

});

GTCEuStartupEvents.registry("gtceu:machine", event => {
  event
    .create("flight_controller", "simple")
    .tiers(GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV)
    .definition((tier, builder) => {
      builder
        .langValue("Flight Controller")
        .recipeType("flight_controller")
        .workableTieredHullModel("gtceu:block/multiblock/fusion_reactor")
        .rotationState(RotationState.NON_Y_AXIS)
    })
})

//TODO: replace with item instead of gtceu

