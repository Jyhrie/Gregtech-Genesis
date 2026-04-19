const nuggets_to_purge = [
  "thermal:copper_nugget",
  "thermal:tin_nugget",
  "thermal:lead_nugget",
  "thermal:silver_nugget",
  "thermal:nickel_nugget",
  "thermal:bronze_nugget",
  "thermal:electrum_nugget",
  "thermal:invar_nugget",
  "thermal:constantan_nugget",
  "thermal:signalum_nugget",
  "thermal:lumium_nugget",
  "thermal:enderium_nugget",
  "thermal:netherite_nugget",
  "ad_astra:steel_nugget",
  "create:zinc_nugget",
];

ServerEvents.tags("item", (event) => {
  nuggets_to_purge.forEach((item) => {
    event.removeAllTagsFrom(item);
  });
});

ServerEvents.recipes((event) => {
  nuggets_to_purge.forEach((item) => {
    event.remove({ output: item });
    event.remove({ input: item });
  });
});
