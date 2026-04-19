JEIEvents.hideItems((event) => {
  const ores_to_hide = [
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
  ];

  ores_to_hide.forEach((id) => {
    event.hide(id);
  });
});
