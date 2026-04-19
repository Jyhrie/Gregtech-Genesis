ServerEvents.recipes(event => {
//Primordial Pearl
  event.custom({
    type: "malum:favor_of_the_void",
    input: {
      item: "kubejs:primal_essence",
    },
    output: {
      item: "kubejs:primordial_pearl",
      count: 1,
    },
  });

  event.custom({
    type: "malum:favor_of_the_void",
    input: {
      tag: "forge:seeds",
    },
    output: {
      item: "kubejs:void_seed",
      count: 1,
    },
  });

})