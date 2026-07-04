ServerEvents.recipes((event) => {
  event.recipes.gtceu
    .spirit_condenser("spirit_condenser_aerial")
    .notConsumable("kubejs:foci_spirit_aerial")
    .inputFluids("starbunclemania:source_fluid 100")
    .itemOutputs("malum:aerial_spirit")
    .duration(10)

  event.recipes.gtceu
    .spirit_condenser("spirit_condenser_aqueous")
    .notConsumable("kubejs:foci_spirit_aqueous")
    .inputFluids("starbunclemania:source_fluid 100")
    .itemOutputs("malum:aqueous_spirit")
    .duration(10)

  event.recipes.gtceu
    .spirit_condenser("spirit_condenser_arcane")
    .notConsumable("kubejs:foci_spirit_arcane")
    .inputFluids("starbunclemania:source_fluid 100")
    .itemOutputs("malum:arcane_spirit")
    .duration(10)

  event.recipes.gtceu
    .spirit_condenser("spirit_condenser_sacred")
    .notConsumable("kubejs:foci_spirit_sacred")
    .inputFluids("starbunclemania:source_fluid 100")
    .itemOutputs("malum:sacred_spirit")
    .duration(10)

  event.recipes.gtceu
    .spirit_condenser("spirit_condenser_wicked")
    .notConsumable("kubejs:foci_spirit_wicked")
    .inputFluids("starbunclemania:source_fluid 100")
    .itemOutputs("malum:wicked_spirit")
    .duration(10)

  event.recipes.gtceu
    .spirit_condenser("spirit_condenser_earthen")
    .notConsumable("kubejs:foci_spirit_earthen")
    .inputFluids("starbunclemania:source_fluid 100")
    .itemOutputs("malum:earthen_spirit")
    .duration(10)

  event.recipes.gtceu
    .spirit_condenser("spirit_condenser_infernal")
    .notConsumable("kubejs:foci_spirit_infernal")
    .inputFluids("starbunclemania:source_fluid 100")
    .itemOutputs("malum:infernal_spirit")
    .duration(10)

  event.recipes.gtceu
    .spirit_condenser("spirit_condenser_eldritch")
    .notConsumable("kubejs:foci_spirit_eldritch")
    .inputFluids("starbunclemania:source_fluid 100")
    .itemOutputs("malum:eldritch_spirit")
    .duration(10)
});
