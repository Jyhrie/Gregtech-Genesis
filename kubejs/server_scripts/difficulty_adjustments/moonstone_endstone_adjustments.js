ServerEvents.recipes((event) => {
  // 1. Remove the old Endstone separation recipe
  event.remove({ id: "gtceu:centrifuge/endstone_separation" });

  event.recipes.gtceu
    .centrifuge("updated_endstone_separation")
    .itemInputs("gtceu:endstone_dust")
    .chancedOutput("gtceu:platinum_group_sludge_dust", 40, 0)
    .chancedOutput("minecraft:sand", 9000, 0)
    .duration(320)
    .EUt(30);

  event.recipes.gtceu
    .centrifuge("updated_moonstone_separation")
    .itemInputs("gtceu:moonstone_dust")
    .chancedOutput("gtceu:tungstate_dust", 80, 0)
    .chancedOutput("minecraft:gravel", 9000, 0)
    .outputFluids(Fluid.of("gtceu:helium", 120))
    .duration(320)
    .EUt(30);

  event.recipes.gtceu
    .macerator("macerate_moon_stone")
    .itemInputs("ad_astra:moon_stone")
    .itemOutputs("gtceu:moonstone_dust")
    .chancedOutput("gtceu:moonstone_dust", 1000, 0) // 1000 = 10% bonus
    .duration(400) // 20 seconds
    .EUt(2); // ULV/LV Power

  // Note: If you want it to work for the 'Cobbled' version too:
  event.recipes.gtceu
    .macerator("macerate_cobbled_moon_stone")
    .itemInputs("ad_astra:moon_cobblestone")
    .itemOutputs("gtceu:moonstone_dust")
    .duration(400)
    .EUt(2);
});
