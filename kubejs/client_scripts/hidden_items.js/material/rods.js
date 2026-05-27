JEIEvents.hideItems((event) => {
  const rods_to_hide = [
    "ad_astra:steel_rod",
    "ad_astra:iron_rod",
  ];

  rods_to_hide.forEach((id) => {
    event.hide(id);
  });
});
