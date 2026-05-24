GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('rocket_engine')
        .category('simple')
        .setEUIO('in') // Consumes energy to stabilize/ignite, or 'out' if it's a generator
        .setMaxIOSize(1, 1, 1, 0) // (ItemIn, ItemOut, FluidIn, FluidOut)
        .setSlotOverlay(false, false, GuiTextures.TURBINE_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_GAS_COLLECTOR, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.JET_ENGINE); // Gives it that powerful rocket roar
});

GTCEuStartupEvents.registry("gtceu:machine", event => {
  event
    .create("rocket_engine", "simple")
    .tiers(GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV)
    .definition((tier, builder) => {
      builder
        .langValue("Rocket Engine")
        .recipeType("rocket_engine")
        // Using the Turbine model for that industrial engine look
        .workableTieredHullModel("gtceu:block/machine/gas_turbine") 
        .rotationState(RotationState.NON_Y_AXIS)
    })
})

//TODO: replace with item instead of gtceu machine. 