const $FluidProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.FluidProperty');
const $FluidBuilder = Java.loadClass('com.gregtechceu.gtceu.api.fluids.FluidBuilder');
const $FluidStorageKeys = Java.loadClass('com.gregtechceu.gtceu.api.fluids.store.FluidStorageKeys');

GTCEuStartupEvents.registry("gtceu:material", (event) => {
  GTMaterials.SterlingSilver.addFlags(GTMaterialFlags.GENERATE_FOIL);

  GTMaterials.SterlingSilver.addFlags(GTMaterialFlags.GENERATE_FINE_WIRE);

  GTMaterials.get("ammonium_chloride").setProperty(
    PropertyKey.FLUID,
    new $FluidProperty($FluidStorageKeys.LIQUID, new $FluidBuilder()),
  );

  GTMaterials.get("ruthenium_tetroxide").setProperty(
    PropertyKey.FLUID,
    new $FluidProperty($FluidStorageKeys.LIQUID, new $FluidBuilder()),
  );
});
