JEIEvents.hideItems((event) => {
  const plates_to_hide = [
    "thermal:iron_plate",
    "thermal:gold_plate",
    "thermal:copper_plate",
    "thermal:tin_plate",
    "thermal:lead_plate",
    "thermal:silver_plate",
    "thermal:nickel_plate",
    "thermal:bronze_plate",
    "thermal:electrum_plate",
    "thermal:invar_plate",
    "thermal:constantan_plate",
    "thermal:signalum_plate",
    "thermal:lumium_plate",
    "thermal:enderium_plate",
    "thermal:netherite_plate",
    "ad_astra:iron_plate",
    "ad_astra:steel_plate",
  ];

  plates_to_hide.forEach((id) => {
    event.hide(id);
  });
});
