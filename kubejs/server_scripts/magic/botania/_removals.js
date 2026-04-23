// priority: 100
ServerEvents.recipes((event) => {
  event.remove({ output: /botania:apothecary_.*/ });
  event.remove({ id: "botania:petal_apothecary/pure_daisy" });
  event.remove({ id: "botania:petal_apothecary/endoflame" });

  event.remove({ output: "botania:mana_pylon" });
  event.remove({ output: "botania:natura_pylon" });
  event.remove({ output: "botania:gaia_pylon" });

  event.remove({ output: "botania:travel_belt" });
  event.remove({ output: "botania:speed_up_belt" });
  event.remove({ output: "botania:knockback_belt" });
  event.remove({ output: "botania:super_travel_belt" });
  event.remove({ output: "botania:lava_pendant" });
  event.remove({ output: "botania:super_lava_pendant" });

  event.remove({ output: "botania:flight_tiara" });
});
