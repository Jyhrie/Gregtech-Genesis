WorldgenEvents.remove((event) => {
  event.removeFeatureById(/ars_nouveau:archwood_forest/, "vegetal_decoration", [
    "ars_nouveau:placed_mixed_archwoods",
    "ars_elemental:flashing_archwood",
  ]);
});