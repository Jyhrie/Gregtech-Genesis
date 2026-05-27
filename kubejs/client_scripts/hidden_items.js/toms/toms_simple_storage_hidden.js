JEIEvents.hideItems((event) => {
  const hide = [
    "toms_storage:ts.inventory_connector",
    "toms_storage:ts.trim",
    "toms_storage:ts.open_crate",
    "toms_storage:ts.inventory_cable",
    "toms_storage:ts.inventory_cable_framed",
    "toms_storage:ts.inventory_cable_connector",
    "toms_storage:ts.inventory_cable_connector_filtered",
    "toms_storage:ts.inventory_cable_connector_framed",
    "toms_storage:ts.inventory_proxy",
    "toms_storage:ts.inventory_hopper_basic",
    "toms_storage:ts.level_emitter",
    "toms_storage:ts.paint_kit",
    "toms_storage:ts.wireless_terminal",
    "toms_storage:ts.adv_wireless_terminal",
    "toms_storage:ts.item_filter",
    "toms_storage:ts.polymorphic_item_filter",
    "toms_storage:ts.tag_item_filter",
  ];

  hide.forEach((id) => {
    event.hide(id);
  });
});
