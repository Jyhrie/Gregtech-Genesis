GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('rocket_fuel_tank')
        .category('simple')
        .setEUIO('in')
        .setMaxIOSize(0, 1, 0, 1)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.BATH);

});

GTCEuStartupEvents.registry("gtceu:machine", event => {
  event
    .create("rocket_fuel_tank", "simple")
    .tiers(GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV)
    .definition((tier, builder) => {
      builder
        .langValue("Rocket Fuel Tank")
        .recipeType("rocket_fuel_tank")
        .workableTieredHullModel("gtceu:block/machines/mixer")
        .rotationState(RotationState.NON_Y_AXIS)
    })
})


//TODO: replace with item instead of gtceu machine.
