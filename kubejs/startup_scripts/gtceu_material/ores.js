GTCEuStartupEvents.registry("gtceu:material", (event) => {
  event
    .create("kaolinite")
    .dust()
    .ore()
    .color(0xdbe5f1)
    .iconSet("rough")
    .components("2x aluminium", "2x silicon", "9x oxygen", "4x hydrogen");

  event
    .create("cryolite")
    .dust()
    .ore()
    .color(0xeeeeee)
    .iconSet("glass")
    .components("3x sodium", "1x aluminium", "6x fluorine");

  event
    .create("fluorite")
    .dust()
    .ore()
    .color(0x33ffaa)
    .iconSet("mineral")
    .components("1x calcium", "2x fluorine")
    .flags(GTMaterialFlags.DISABLE_DECOMPOSITION);
});
