const gears_to_purge = [
  "thermal:tin_gear",
  "thermal:lead_gear",
  "thermal:silver_gear",
  "thermal:nickel_gear",
  "thermal:bronze_gear",
  "thermal:electrum_gear",
  "thermal:invar_gear",
  "thermal:constantan_gear",
  "thermal:signalum_gear",
  "thermal:lumium_gear",
  "thermal:enderium_gear",
  "thermal:netherite_gear",
  "thermal:ruby_gear",
  "thermal:sapphire_gear",
  "thermal:emerald_gear",
  "thermal:diamond_gear",
  "thermal:quartz_gear",
  "thermal:lapis_gear",
  "thermal:iron_gear",
  "thermal:gold_gear",
  "thermal:copper_gear",
  "forestry:gear_copper",
  "forestry:gear_tin",
  "forestry:gear_bronze",
];

ServerEvents.tags("item", (event) => {
  gears_to_purge.forEach((item) => {
    event.removeAllTagsFrom(item);
  });
});

ServerEvents.recipes((event) => {
  gears_to_purge.forEach((item) => {
    event.remove({ output: item });
    event.remove({ input: item });
  });
});
