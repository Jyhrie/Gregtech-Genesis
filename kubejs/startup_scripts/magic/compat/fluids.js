StartupEvents.registry('fluid', event => {
  event.create('holy_water')
    .thinTexture(0xbff8ff)
    .displayName('Holy Water')
    .bucketColor(0xbff8ff)
    .luminosity(8)

  // Liquid Death with auto-bucket
  event.create('liquid_death')
    .thickTexture(0x1A001A)
    .displayName('Liquid Death')
    .bucketColor(0x1A001A)
    .luminosity(2)
    .viscosity(2000)
});