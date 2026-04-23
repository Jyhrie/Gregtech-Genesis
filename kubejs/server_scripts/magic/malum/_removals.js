// priority: 100
ServerEvents.recipes((event) => {
  event.remove({ output: "malum:spirit_altar" });
  event.remove({ output: "malum:runewood_sapling" });
  event.remove({ output: "malum:azure_runewood_sapling" });
  event.remove({ output: "malum:hallowed_gold_ingot" });
  event.remove({ type: 'malum:spirit_focusing' })
});
