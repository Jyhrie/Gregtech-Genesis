ServerEvents.recipes((event) => {
  event.remove({ id: "create:splashing/soulsand" }); // Note the underscore in soul_sand
  event.remove({ id: "create:splashing/red_sand" });
  event.remove({ id: "create:splashing/gravel" });
});
