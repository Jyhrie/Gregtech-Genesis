const rods_to_purge = [
  "ad_astra:steel_rod",
  "ad_astra:iron_rod",
  "thermal_extra:iron_rod"
];

ServerEvents.tags("item", (event) => {
  rods_to_purge.forEach((item) => {
    event.removeAllTagsFrom(item);
  });
});

ServerEvents.recipes((event) => {
  rods_to_purge.forEach((item) => {
    event.remove({ output: item });
    event.remove({ input: item });
  });
});
