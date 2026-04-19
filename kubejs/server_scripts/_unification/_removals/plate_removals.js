const plates_to_purge = [
  "thermal:iron_plate",
  "thermal:gold_plate",
  "thermal:copper_plate",
  "thermal:tin_plate",
  "thermal:lead_plate",
  "thermal:silver_plate",
  "thermal:nickel_plate",
  "thermal:bronze_plate",
  "thermal:electrum_plate",
  "thermal:invar_plate",
  "thermal:constantan_plate",
  "thermal:signalum_plate",
  "thermal:lumium_plate",
  "thermal:enderium_plate",
  "thermal:netherite_plate",
  'ad_astra:iron_plate',
  'ad_astra:steel_plate',
];

ServerEvents.tags("item", (event) => {
  plates_to_purge.forEach((item) => {
    event.removeAllTagsFrom(item);
  });
});

ServerEvents.recipes((event) => {
  plates_to_purge.forEach((item) => {
    event.remove({ output: item });
    event.remove({ input: item });
  });
});
