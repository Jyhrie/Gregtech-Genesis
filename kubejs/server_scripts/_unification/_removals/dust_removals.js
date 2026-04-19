const dusts_to_purge = [
  "thermal:iron_dust",
  "thermal:gold_dust",
  "thermal:copper_dust",
  "thermal:netherite_dust",
  "thermal:tin_dust",
  "thermal:lead_dust",
  "thermal:silver_dust",
  "thermal:nickel_dust",
  "thermal:bronze_dust",
  "thermal:electrum_dust",
  "thermal:invar_dust",
  "thermal:constantan_dust",
  "thermal:signalum_dust",
  "thermal:lumium_dust",
  "thermal:enderium_dust",
  "thermal:ruby_dust",
  "thermal:sapphire_dust",
  "thermal:emerald_dust",
  "thermal:diamond_dust",
  "thermal:quartz_dust",
  "thermal:lapis_dust",
  "thermal:ender_pearl_dust",
  "thermal:sulfur_dust",
  "thermal:niter_dust",
  "thermal:cinnabar_dust",
  "thermal:apatite_dust",
  "ae2:ender_dust",
  "occultism:silver_dust",
];

ServerEvents.tags("item", (event) => {
  dusts_to_purge.forEach((item) => {
    event.removeAllTagsFrom(item);
  });
});

ServerEvents.recipes((event) => {
  dusts_to_purge.forEach((item) => {
    event.remove({ output: item });
    event.remove({ input: item });
  });
});
