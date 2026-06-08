const unification_map_gems = [
  // AE2
  {
    target: "ae2:certus_quartz_crystal",
    duplicates: ["gtceu:certus_quartz_gem"],
  },

  // Thermal
  {
    target: "thermal:apatite",
    duplicates: ["gtceu:apatite_gem", "forestry:apatite"],
  },

//   {
//     target: "thermal:coal_coke",
//     duplicates: ["gtceu:coke_gem"],
//   },

  {
    target: "thermal:cinnabar",
    duplicates: ["gtceu:cinnabar_gem"],
  },

  // Terramity
  {
    target: "terramity:sapphire",
    duplicates: [
      "gtceu:sapphire_gem",
      "thermal:sapphire",
      "projectred_core:sapphire",
    ],
  },

  {
    target: "thermal:ruby",
    duplicates: ["projectred_core:ruby_gem", "terramity:ruby"],
  },

  {
    target: "terramity:topaz",
    duplicates: ["gtceu:topaz_gem"],
  },
];

const removal_gems = ["thermal:sulfur", "thermal:niter", "thermal:coal_coke"];

ServerEvents.tags("item", (event) => {
  unification_map_gems.forEach((group) => {
    group.duplicates.forEach((item) => {
      event.removeAllTagsFrom(item);
    });
  });

  removal_gems.forEach((item) => {
    event.removeAllTagsFrom(item);
  });
});

ServerEvents.recipes((event) => {
  unification_map_gems.forEach((group) => {
    group.duplicates.forEach((item) => {
      event.replaceOutput({}, item, group.target);
      event.replaceInput({}, item, group.target);
    });

    removal_gems.forEach((item) => {
      event.remove({ output: item });
      event.remove({ input: item });
    });
  });
});
