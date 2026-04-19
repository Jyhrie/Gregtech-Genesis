JEIEvents.hideItems((event) => {
  const ingots_to_hide = [
    "thermal:tin_ingot",
    "thermal:lead_ingot",
    "thermal:silver_ingot",
    "thermal:nickel_ingot",
    "thermal:bronze_ingot",
    "thermal:electrum_ingot",
    "thermal:invar_ingot",
    "thermal:constantan_ingot",
    "thermal:signalum_ingot",
    "thermal:lumium_ingot",
    "thermal:enderium_ingot",
    "ad_astra:steel_ingot",
    "tconstruct:steel_ingot",
  ];

  ingots_to_hide.forEach((id) => {
    event.hide(id);
  });
});
