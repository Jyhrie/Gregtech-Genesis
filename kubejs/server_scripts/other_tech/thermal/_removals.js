// priority: 100
ServerEvents.recipes((event) => {
  event.remove({ output: "thermal:machine_furnace" });
  event.remove({ output: "thermal:machine_sawmill" });
  event.remove({ output: "thermal:machine_pulverizer" });
  event.remove({ output: "thermal:machine_smelter" });
  event.remove({ output: "thermal:machine_insolator" });
  event.remove({ output: "thermal:machine_centrifuge" });
  event.remove({ output: "thermal:machine_press" });
  event.remove({ output: "thermal:machine_crucible" });
  event.remove({ output: "thermal:machine_chiller" });
  event.remove({ output: "thermal:machine_refinery" });
  event.remove({ output: "thermal:machine_pyrolyzer" });
  event.remove({ output: "thermal:machine_bottler" });
  event.remove({ output: "thermal:machine_brewer" });
  event.remove({ output: "thermal:machine_crystallizer" });
  event.remove({ output: "thermal:dynamo_stirling" });
  event.remove({ output: "thermal:dynamo_compression" });
  event.remove({ output: "thermal:dynamo_magmatic" });
  event.remove({ output: "thermal:dynamo_numismatic" });
  event.remove({ output: "thermal:dynamo_lapidary" });
  event.remove({ output: "thermal:dynamo_gourmand" });
  event.remove({ output: "thermal:dynamo_disenchantment" });
  event.remove({ output: "thermal:machine_frame" });

  event.remove({ output: "thermal:machine_crafter" });
  event.remove({ output: "thermal:item_buffer" });
  // event.remove({ input: 'thermal:tinker_bench' })
  event.remove({ output: "thermal:charge_bench" });

  event.remove({ output: "thermal:device_tree_extractor" });
  event.remove({ output: "thermal:device_fisher" });
  event.remove({ output: "thermal:device_composter" });
  event.remove({ output: "thermal:device_water_gen" });
  event.remove({ output: "thermal:device_rock_gen" });
  event.remove({ output: "thermal:device_collector" });
  event.remove({ output: "thermal:device_xp_condenser" });
  event.remove({ output: "thermal:device_nullifier" });
  event.remove({ output: "thermal:device_potion_diffuser" });

  event.remove({ output: "thermal:saw_blade" });
  event.remove({ output: 'thermal:drill_head' })
});
