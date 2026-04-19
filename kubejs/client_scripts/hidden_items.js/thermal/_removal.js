JEIEvents.hideItems((event) => {
  const hide = [
    "thermal:machine_furnace",
    "thermal:machine_sawmill",
    "thermal:machine_pulverizer",
    "thermal:machine_smelter",
    "thermal:machine_insolator",
    "thermal:machine_centrifuge",
    "thermal:machine_press",
    "thermal:machine_crucible",
    "thermal:machine_chiller",
    "thermal:machine_refinery",
    "thermal:machine_pyrolyzer",
    "thermal:machine_bottler",
    "thermal:machine_brewer",
    "thermal:machine_crystallizer",
    "thermal:dynamo_stirling",
    "thermal:dynamo_compression",
    "thermal:dynamo_magmatic",
    "thermal:dynamo_numismatic",
    "thermal:dynamo_lapidary",
    "thermal:dynamo_gourmand",
    "thermal:dynamo_disenchantment",
    "thermal:machine_frame",
  ];

  hide.forEach((id) => {
    event.hide(id);
  });
});
