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
    .create("originium")
    .gem()
    .ore()
    .color(0xfca308)
    .secondaryColor(0x0f0a0a)
    .iconSet("quartz")

  event
    .create("fluorite")
    .dust()
    .ore()
    .color(0x33ffaa)
    .iconSet("mineral")
    .components("1x calcium", "2x fluorine")
    .flags(GTMaterialFlags.DISABLE_DECOMPOSITION);


    // ----------------------------------------------
    // Ad Astra Materials
    // ----------------------------------------------

    event.create("cynthilite")
        .dust()
        .ore()
        .color(0x9E5B1D)
        .iconSet("mineral")

    event.create("aresite")
        .dust()
        .ore()
        .color(0x563D45)
        .iconSet("rough")

    event.create("cytherite")
        .dust()
        .ore()
        .color(0x7D1C28)
        .iconSet("shiny")

    event.create("ymirite")
        .dust()
        .ore()
        .color(0x4A8587)
        .iconSet("ruby")
});
