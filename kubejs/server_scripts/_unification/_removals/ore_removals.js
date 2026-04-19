const ores_to_purge = [
  "thermal:raw_tin",
  "thermal:raw_lead",
  "thermal:raw_silver",
  "thermal:raw_nickel",
  "thermal:raw_tin_block",
  "thermal:raw_lead_block",
  "thermal:raw_silver_block",
  "thermal:raw_nickel_block",
  "tconstruct:raw_cobalt",
  "tconstruct:raw_cobalt_block",
  "forestry:raw_tin",
  "occultism:raw_silver",
];

ServerEvents.tags("item", (event) => {
  ores_to_purge.forEach((item) => {
    event.removeAllTagsFrom(item);
  });
});

ServerEvents.recipes((event) => {
  ores_to_purge.forEach((item) => {
    event.remove({ output: item });
    event.remove({ input: item });
  });
});
