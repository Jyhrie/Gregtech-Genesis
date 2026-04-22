ServerEvents.recipes((event) => {
  const transitional = "kubejs:empty_round";

  event.recipes.create
    .sequenced_assembly(["kubejs:empty_round"], "create:brass_nugget", [
      event.recipes.create.pressing("kubejs:empty_round", "kubejs:empty_round"),
      event.recipes.create.deploying("kubejs:empty_round", [
        "kubejs:empty_round",
        "minecraft:gunpowder",
      ]),
      event.recipes.create.pressing("kubejs:empty_round", "kubejs:empty_round"),
    ])
    .transitionalItem(transitional)
    .loops(1)
    .id("kubejs:assembly/empty_round");

  event.recipes.create
    .sequenced_assembly(["terramity:copper_round"], "kubejs:empty_round", [
      event.recipes.create.deploying("kubejs:empty_round", [
        "kubejs:empty_round",
        "#forge:nuggets/copper",
      ]),
      event.recipes.create.pressing(
        "terramity:copper_round",
        "terramity:copper_round",
      ),
    ])
    .transitionalItem(transitional)
    .loops(1)
    .id("kubejs:assembly/copper_round");

  event.recipes.create
    .sequenced_assembly(["terramity:gold_round"], "kubejs:empty_round", [
      event.recipes.create.deploying("kubejs:empty_round", [
        "kubejs:empty_round",
        "#forge:nuggets/gold",
      ]),
      event.recipes.create.pressing(
        "terramity:gold_round",
        "terramity:gold_round",
      ),
    ])
    .transitionalItem(transitional)
    .loops(1)
    .id("kubejs:assembly/gold_round");

  event.recipes.create
    .sequenced_assembly(["terramity:iridium_round"], "kubejs:empty_round", [
      event.recipes.create.deploying("kubejs:empty_round", [
        "kubejs:empty_round",
        "#forge:nuggets/silver",
      ]),
      event.recipes.create.filling("kubejs:empty_round", ["kubejs:empty_round", Fluid.of('gtceu:crystalline_iridium', 12)]),
      event.recipes.create.pressing(
        "terramity:iridium_round",
        "terramity:iridium_round",
      ),
    ])
    .transitionalItem(transitional)
    .loops(1)
    .id("kubejs:assembly/iridium_round");

    event.recipes.create
    .sequenced_assembly(["terramity:dimlite_round"], "kubejs:empty_round", [
      event.recipes.create.deploying("kubejs:empty_round", [
        "kubejs:empty_round",
        "#forge:nuggets/lead",
      ]),
      event.recipes.create.filling("kubejs:empty_round", ["kubejs:empty_round", Fluid.of('gtceu:dimlite', 12)]),
      event.recipes.create.pressing(
        "terramity:dimlite_round",
        "terramity:dimlite_round",
      ),
    ])
    .transitionalItem(transitional)
    .loops(1)
    .id("kubejs:assembly/dimlite_round");

        event.recipes.create
    .sequenced_assembly(["terramity:antimatter_round"], "kubejs:empty_round", [
      event.recipes.create.deploying("kubejs:empty_round", [
        "kubejs:empty_round",
        "#forge:nuggets/steel",
      ]),
      event.recipes.create.filling("kubejs:empty_round", ["kubejs:empty_round", Fluid.of('gtceu:void_alloy', 12)]),
      event.recipes.create.pressing(
        "terramity:antimatter_round",
        "terramity:antimatter_round",
      ),
    ])
    .transitionalItem(transitional)
    .loops(1)
    .id("kubejs:assembly/antimatter_round");
});
