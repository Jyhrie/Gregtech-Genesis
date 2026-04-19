ServerEvents.recipes((event) => {
  event.shaped("thermal:drill_head", [" S ", "SIS", "SIS"], {
    S: "#forge:plates/steel",
    I: "#forge:ingots/iron",
  });

  event.shaped("thermal:saw_blade", ["SS ", "SIS", " SS"], {
    S: "#forge:plates/steel",
    I: "#forge:ingots/iron",
  });
});
