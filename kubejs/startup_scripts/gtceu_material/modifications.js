const $FluidProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.FluidProperty');
const $FluidBuilder = Java.loadClass('com.gregtechceu.gtceu.api.fluids.FluidBuilder');
const $FluidStorageKeys = Java.loadClass('com.gregtechceu.gtceu.api.fluids.store.FluidStorageKeys');
const $IngotProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.IngotProperty');
const $PropertyKey = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.PropertyKey');

GTCEuStartupEvents.registry("gtceu:material", (event) => {
  GTMaterials.SterlingSilver.addFlags(GTMaterialFlags.GENERATE_FOIL);

  GTMaterials.SterlingSilver.addFlags(GTMaterialFlags.GENERATE_FINE_WIRE);

  GTMaterials.get("ammonium_chloride").setProperty(
    PropertyKey.FLUID,
    new $FluidProperty($FluidStorageKeys.LIQUID, new $FluidBuilder()),
  );

  GTMaterials.get("cerium").setProperty($PropertyKey.INGOT, new $IngotProperty());
  GTMaterials.get("lanthanum").setProperty($PropertyKey.INGOT, new $IngotProperty());
  GTMaterials.get("terbium").setProperty($PropertyKey.INGOT, new $IngotProperty());
  GTMaterials.get("zirconium").setProperty($PropertyKey.INGOT, new $IngotProperty());
  GTMaterials.get("hafnium").setProperty($PropertyKey.INGOT, new $IngotProperty());

  GTMaterials.get("ruthenium_tetroxide").setProperty(
    PropertyKey.FLUID,
    new $FluidProperty($FluidStorageKeys.LIQUID, new $FluidBuilder()),
  );
});
