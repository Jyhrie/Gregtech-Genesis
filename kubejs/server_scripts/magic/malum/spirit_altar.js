ServerEvents.recipes((event) => {
  event.remove({ output: "malum:malignant_pewter_ingot" });
  event.custom({
    type: "malum:spirit_infusion",
    input: {
      item: "malum:soul_stained_steel_ingot",
      count: 4,
    },
    output: {
      item: "malum:malignant_pewter_ingot",
      count: 1,
    },
    extra_items: [
      { item: "malum:malignant_lead" },
      { item: "malum:mnemonic_fragment" },
      { item: "malum:null_slate" },
    ],
    spirits: [{ type: "umbral", count: 1 }],
  });
});
