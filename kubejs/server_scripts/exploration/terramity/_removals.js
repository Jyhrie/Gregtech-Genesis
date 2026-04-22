// priority: 100
ServerEvents.recipes((event) => {
  event.remove({ id: "terramity:dimlite_to_ingot" });
  event.remove({ id: "terramity:virentium_ingot_recipe" });
  event.remove({ id: "terramity:cosmilite_ingot_recipe" });
  event.remove({ id: "terramity:smelt_deepslate_iridium" });
  event.remove({ id: "terramity:smelt_end_iridium" });
  event.remove({ id: "terramity:smelt_nether_iridium" });
  event.remove({ id: "terramity:blast_deepslate_iridium" });
  event.remove({ id: "terramity:blast_end_iridium" });
  event.remove({ id: "terramity:blast_nether_iridium" });
  event.remove({ id: "terramity:void_alloy_recipe" });
  event.remove({ id: "terramity:conductite_recipe" });
  event.remove({ id: "terramity:hellspec_alloy_recipe" });
  event.remove({ id: "terramity:nyxium_recipe" });
  event.remove({ id: "terramity:exodium_ingot_recipe" });
  event.remove({ id: "terramity:reverium_recipe" });
  event.remove({ output: "terramity:black_hole_bomb" });
  event.remove({ output: "terramity:macro_black_hole_bomb" });
  //event.remove({ id: "terramity:profanum" });
  event.remove({ output: 'terramity:copper_round' });
  event.remove({ output: 'terramity:gold_round' });
  event.remove({ output: 'terramity:iridium_round' });
  event.remove({ output: 'terramity:dimlite_round' });
  event.remove({ output: 'terramity:antimatter_round' });
  
});
