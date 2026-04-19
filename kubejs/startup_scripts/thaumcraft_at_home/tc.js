StartupEvents.registry("item", (e) => {
  e.create("voidmetal_ingot").displayName("Voidmetal Ingot");
  e.create("thaumium_ingot").displayName("Thaumium Ingot");
  e.create("void_seed").displayName("Void Seed");
  e.create("primordial_pearl").displayName("Primordial Pearl").rarity("epic");

  e.create("primal_charm")
    .displayName("Primal Charm")
    .rarity("epic")
    .maxStackSize(1);
});

// StartupEvents.registry("item", (e) => {
//   e.create("staff_of_warding").displayName("Staff of Warding");
// });

StartupEvents.registry("block", (e) => {

});
