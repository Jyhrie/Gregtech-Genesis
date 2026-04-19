ServerEvents.recipes((event) => {
  // 1. Remove all existing Andesite Alloy recipes
  event.remove({ output: "create:andesite_alloy" });

  // 2. Tinkers' Construct Casting (Iron into Andesite Block)
  // Note: Standard TCon iron value is 144mb per ingot
  event.custom({
    type: "tconstruct:casting_basin",
    cast: { item: "minecraft:andesite" },
    cast_consumed: true,
    fluid: { name: "tconstruct:molten_iron", amount: 10 },
    result: "create:andesite_alloy",
    cooling_time: 100,
  });


  event.recipes.gtceu
    .alloy_smelter("andesite_alloy_smelter")
    .itemInputs("minecraft:andesite", "minecraft:iron_nugget")
    .itemOutputs("2x create:andesite_alloy")
    .duration(100)
    .EUt(16);


  event.remove({ output: "create:water_wheel" });
  event.remove({ output: "create:large_water_wheel" });


  event.shaped("create:water_wheel", ["PPP", "PAP", "PPP"], {
    P: "#forge:plates/treated_wood",
    A: "create:andesite_alloy",
  });


  event.shaped("create:large_water_wheel", ["PPP", "PWP", "PPP"], {
    P: "#forge:plates/treated_wood",
    W: "create:water_wheel",
  });


  event.remove({ output: "create:cogwheel" });
  event.remove({ output: "create:large_cogwheel" });

  event.shapeless("create:cogwheel", [
    "create:shaft",
    "gtceu:treated_wood_planks",
  ]);


  event.shapeless("create:large_cogwheel", [
    "create:cogwheel",
    "gtceu:treated_wood_planks",
  ]);
});
