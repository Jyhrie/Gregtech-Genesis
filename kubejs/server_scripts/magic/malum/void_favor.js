ServerEvents.recipes((event) => {
  //Cthonic Gold
  event.remove({ output: "malum:cthonic_gold" });
  //event.remove({ id: "malum:spirit_infusion/soul_stained_steel_ingot" });
  event.custom({
    type: "malum:favor_of_the_void",
    input: {
      item: "malum:hallowed_gold_ingot",
    },
    output: {
      item: "malum:cthonic_gold",
      count: 1,
    },
  });

  //Soul Stained Steel Ingot
  event.remove({ output: "malum:soul_stained_steel_ingot" });
//   event.remove({ id: "malum:spirit_infusion/soul_stained_steel_ingot" });
  event.custom({
    type: "malum:favor_of_the_void",
    input: {
      item: "gtceu:stainless_steel_ingot",
    },
    output: {
      item: "malum:soul_stained_steel_ingot",
      count: 1,
    },
  });

  //Umbral Essence
  event.custom({
    type: "malum:favor_of_the_void",
    input: {
      item: "kubejs:primal_charm"
    },
    output: {
      item: "malum:umbral_spirit",
      count: 1,
    },
  });

});
