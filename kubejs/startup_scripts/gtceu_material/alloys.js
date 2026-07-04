GTCEuStartupEvents.registry("gtceu:material", (event) => {
  // ----------------------------------------------------
  // Custom Materials
  // ----------------------------------------------------

  event.create('fluxed_electrum') 
        .ingot() 
        .color(0xFFE84D)
        .secondaryColor(0xFF0000)
        .iconSet('shiny') 
        .cableProperties(2048, 4, 0, true)
        .blastTemp(3600, 'low', 120, 8000)
        .flags(
        GTMaterialFlags.GENERATE_FINE_WIRE,
      );

  event.create('fluxed_titanite')
        .ingot()
        .color(0x48C75B)
        .secondaryColor(0x9E2B43)
        .iconSet('shiny')
        .cableProperties(8192, 4, 0, true) //
        .blastTemp(4500, 'highest', 120, 12000)
        .flags(
        GTMaterialFlags.GENERATE_FINE_WIRE,
      );

  event.create('titanite')
        .gem()
        .color(0x48C75B) 
        .iconSet('quartz');
  
  // Nitinol (NiTi)
  event
    .create("nitinol")
    .ingot()
    .fluid()
    .components("1x nickel", "1x titanium")
    .color(0x535a5c)
    .iconSet("metallic")
    .flags(
      GTMaterialFlags.GENERATE_PLATE,
      GTMaterialFlags.GENERATE_ROD,
      GTMaterialFlags.GENERATE_GEAR,
      GTMaterialFlags.GENERATE_SPRING,
    );

  // Niobium Carbide (NbC)
  event
    .create("niobium_carbide")
    .ingot()
    .fluid()
    .components("1x niobium", "1x carbon")
    .color(0x3b3b3b)
    .iconSet("shiny")
    .flags(
      GTMaterialFlags.GENERATE_PLATE,
      GTMaterialFlags.GENERATE_ROD,
      GTMaterialFlags.GENERATE_BOLT_SCREW,
      GTMaterialFlags.GENERATE_FRAME,
    );

  // Staballoy (U238-Ti)
  event
    .create("staballoy")
    .ingot()
    .fluid()
    .components("9x uranium", "1x titanium")
    .color(0x405c3f)
    .iconSet("metallic")
    .flags(
      GTMaterialFlags.GENERATE_PLATE,
      GTMaterialFlags.GENERATE_ROD,
      GTMaterialFlags.GENERATE_GEAR,
      GTMaterialFlags.GENERATE_SPRING,
      GTMaterialFlags.DECOMPOSITION_BY_CENTRIFUGING,
    );

  // Tantalloy 61 (TaW)
  event
    .create("tantalloy_61")
    .ingot()
    .fluid()
    .components("13x tantalum", "1x tungsten")
    .color(0x6b6b6b)
    .iconSet("metallic")
    .flags(
      GTMaterialFlags.GENERATE_PLATE,
      GTMaterialFlags.GENERATE_ROD,
      GTMaterialFlags.GENERATE_BOLT_SCREW,
      GTMaterialFlags.GENERATE_GEAR,
      GTMaterialFlags.GENERATE_FOIL,
      GTMaterialFlags.DECOMPOSITION_BY_CENTRIFUGING,
    );

  // Hastelloy-N (NiMoCrFe)
  event
    .create("hastelloy_n")
    .ingot()
    .fluid()
    .components("15x nickel", "4x molybdenum", "2x chromium", "2x iron")
    .color(0xb1b59c)
    .iconSet("shiny")
    .flags(
      GTMaterialFlags.GENERATE_PLATE,
      GTMaterialFlags.GENERATE_ROD,
      GTMaterialFlags.GENERATE_GEAR,
      GTMaterialFlags.GENERATE_SPRING,
      GTMaterialFlags.GENERATE_FRAME,
    );


  // ----------------------------------------------------
  // Rocket Materials
  // ----------------------------------------------------

  event
    .create("aluminium_lithium")
    .ingot()
    .fluid()
    .components("7x aluminium", "1x copper", "1x lithium")
    .color(0xCEE5E5) // A sleek, pale silvery-blue aerospace metal color
    .iconSet("shiny")
    .flags(
      GTMaterialFlags.GENERATE_PLATE,
      GTMaterialFlags.GENERATE_DENSE,
      GTMaterialFlags.DECOMPOSITION_BY_CENTRIFUGING,
    );

  event.create('titanium_grade_5')
    .ingot().fluid()
    .color(0xA0B0B0)
    .iconSet('METALLIC')
    .components('6x titanium', '1x aluminium', '1x vanadium')
    .blastTemp(1941, 'low', 1920, 1000)
    .flags(
      GTMaterialFlags.GENERATE_PLATE,
      GTMaterialFlags.GENERATE_DENSE,
      GTMaterialFlags.DECOMPOSITION_BY_CENTRIFUGING
    );

  event.create('inconel_718')
    .ingot()
    .fluid()
    .color(0x557A60)
    .iconSet('METALLIC') // A slightly greenish-silver
    .components('10x nickel', '4x chromium', '4x iron', '1x niobium', '1x molybdenum', '1x titanium')
    .blastTemp(2500, 'mid', 7000, 1000)
    .flags(
      GTMaterialFlags.GENERATE_PLATE,
      GTMaterialFlags.GENERATE_DENSE,
      GTMaterialFlags.DECOMPOSITION_BY_CENTRIFUGING
    );
    
  event
    .create("stellated_starsteel")
    .ingot()
    .fluid()
    .components("1x stellite_100" ,"1x naquadah")
    .blastTemp(2500, 'mid', 19200, 1000)
    .color(0x2c243d) // Deep cosmic charcoal with a hint of blue
    .iconSet("metallic")
    .flags(
      GTMaterialFlags.GENERATE_PLATE,
      GTMaterialFlags.GENERATE_DENSE,
      GTMaterialFlags.DECOMPOSITION_BY_CENTRIFUGING
    );

  event.create('silica_ceramic')
    .dust()
    .color(0xF2F5F8)
    .iconSet('ROUGH') // Bright, clean ceramic tile white
    .components('1x silicon', '2x oxygen')
    .flags(
      GTMaterialFlags.GENERATE_PLATE,
    );

  event.create('alumina_ceramic')
    .dust()
    .color(0xEAE6E1)
    .iconSet('ROUGH')
    .components('2x aluminium', '3x oxygen')
    .flags(
      GTMaterialFlags.GENERATE_PLATE,
    );

  // Tier 3 (IV): Zirconium Diboride
  event.create('zirconium_diboride')
    .dust()
    .color(0x66696D)
    .iconSet('METALLIC')
    .components('1x zirconium', '2x boron')
    .flags(
      GTMaterialFlags.GENERATE_PLATE,
    );

  // Tier 4 (IV End / LuV): Hafnium Carbide
  event.create('hafnium_carbide')
    .dust()
    .color(0x383634)
    .iconSet('FLINT')
    .components('1x hafnium', '1x carbon')
    .flags(
      GTMaterialFlags.GENERATE_PLATE,
    );

  // ----------------------------------------------------
  // Terramity
  // ----------------------------------------------------

  event
    .create("dimlite")
    .ingot()
    .fluid()
    .color(0x1c7370)
    .iconSet("shiny")
    .flags(
      GTMaterialFlags.GENERATE_PLATE,
      GTMaterialFlags.GENERATE_ROD,
      GTMaterialFlags.GENERATE_GEAR,
      GTMaterialFlags.GENERATE_SMALL_GEAR,
      GTMaterialFlags.GENERATE_FOIL,
    );


    event.create("virentium")
    .ingot()
    .fluid()
    .color(0x4cbd33) 
    .iconSet("shiny")
    .flags(
        GTMaterialFlags.GENERATE_PLATE,
        GTMaterialFlags.GENERATE_ROD,
        GTMaterialFlags.GENERATE_BOLT_SCREW, 
        GTMaterialFlags.GENERATE_GEAR,
        GTMaterialFlags.GENERATE_FRAME
    );

    event.create("cosmilite")
    .ingot()
    .fluid()
    .color(0x3e108f) 
    .iconSet("shiny")
    .flags(
        GTMaterialFlags.GENERATE_PLATE,
        GTMaterialFlags.GENERATE_ROD,
        GTMaterialFlags.GENERATE_LONG_ROD,
        GTMaterialFlags.GENERATE_GEAR,
        GTMaterialFlags.GENERATE_FRAME
    );

    event.create("crystalline_iridium")
    .ingot()
    .fluid()
    .color(0xdab5f5) 
    .iconSet("shiny") 
    .flags(
        GTMaterialFlags.GENERATE_PLATE,
        GTMaterialFlags.GENERATE_ROD,
        GTMaterialFlags.GENERATE_GEAR,
        GTMaterialFlags.GENERATE_FOIL
    );

    event.create("void_alloy")
    .ingot()
    .fluid()
    .color(0x141414) 
    .iconSet("shiny") 
    .flags(
        GTMaterialFlags.GENERATE_PLATE,
        GTMaterialFlags.GENERATE_ROD,
        GTMaterialFlags.GENERATE_LONG_ROD,
        GTMaterialFlags.GENERATE_GEAR,
        GTMaterialFlags.GENERATE_FRAME
    );

    event.create("conductite")
    .ingot()
    .fluid()
    .color(0xe0d7ab)
    .iconSet("shiny") 
    .flags(
        GTMaterialFlags.GENERATE_PLATE,
        GTMaterialFlags.GENERATE_ROD,
        GTMaterialFlags.GENERATE_FINE_WIRE, 
        GTMaterialFlags.GENERATE_FOIL,      
        GTMaterialFlags.GENERATE_GEAR,
        GTMaterialFlags.GENERATE_FRAME
    );

    event.create("hellspec_alloy")
    .ingot()
    .fluid()
    .color(0x610000)
    .iconSet("shiny") 
    .flags(
        GTMaterialFlags.GENERATE_PLATE,
        GTMaterialFlags.GENERATE_ROD,
        GTMaterialFlags.GENERATE_LONG_ROD,
        GTMaterialFlags.GENERATE_GEAR,
        GTMaterialFlags.GENERATE_FRAME
    );

    event.create("nyxium")
    .ingot()
    .fluid()
    .color(0x7e65e0) 
    .iconSet("shiny") 
    .flags(
        GTMaterialFlags.GENERATE_PLATE,
        GTMaterialFlags.GENERATE_ROD,
        GTMaterialFlags.GENERATE_FOIL,    
        GTMaterialFlags.GENERATE_SMALL_GEAR,
        GTMaterialFlags.GENERATE_FRAME
    );

    event.create("exodium")
    .ingot()
    .fluid()
    .color(0xa8435e)
    .iconSet("shiny") 
    .flags(
        GTMaterialFlags.GENERATE_PLATE,
        GTMaterialFlags.GENERATE_ROD,
        GTMaterialFlags.GENERATE_LONG_ROD,
        GTMaterialFlags.GENERATE_GEAR,
        GTMaterialFlags.GENERATE_FRAME
    );

    event.create("profanum")
    .ingot()
    .fluid()
    .color(0xdb6002)
    .iconSet("shiny") 
    .flags(
        GTMaterialFlags.GENERATE_PLATE,
        GTMaterialFlags.GENERATE_ROD,
        GTMaterialFlags.GENERATE_GEAR,
        GTMaterialFlags.GENERATE_SMALL_GEAR,
        GTMaterialFlags.GENERATE_FRAME
    );

    event.create("reverium")
    .ingot()
    .fluid()
    .color(0xdcfbfc)
    .iconSet("shiny") 
    .flags(
        GTMaterialFlags.GENERATE_PLATE,
        GTMaterialFlags.GENERATE_ROD,
        GTMaterialFlags.GENERATE_LONG_ROD,
        GTMaterialFlags.GENERATE_GEAR,
        GTMaterialFlags.GENERATE_LENS,
        GTMaterialFlags.GENERATE_FRAME
    );

  // ----------------------------------------------------
  // Thermal & Thermal Extra
  // ----------------------------------------------------

  event.create('soul_infused')
    .ingot()
    .fluid()
    .color(0x6a4d3a) 
    .iconSet(GTMaterialIconSet.SHINY)
    .cableProperties(32, 2, 0, true);

  event.create('signalum')
    .ingot()
    .fluid()
    .color(0xed6815)
    .iconSet(GTMaterialIconSet.SHINY)
    .cableProperties(128, 2, 0, true)
    .flags(
    GTMaterialFlags.GENERATE_PLATE,
    GTMaterialFlags.GENERATE_ROD,
    GTMaterialFlags.GENERATE_GEAR,
    GTMaterialFlags.GENERATE_SMALL_GEAR,
    GTMaterialFlags.GENERATE_FRAME,
  );

  event.create('lumium')
    .ingot()
    .fluid()
    .color(0xfce181)
    .iconSet(GTMaterialIconSet.SHINY)
    .cableProperties(128, 2, 0, true)
    .flags(
    GTMaterialFlags.GENERATE_PLATE,
    GTMaterialFlags.GENERATE_ROD,
    GTMaterialFlags.GENERATE_GEAR,
    GTMaterialFlags.GENERATE_SMALL_GEAR,
    GTMaterialFlags.GENERATE_FRAME,
  );
    

  event.create('enderium')
    .ingot()
    .fluid()
    .color(0x0b4d4d)
    .iconSet(GTMaterialIconSet.SHINY)
    .cableProperties(512, 2, 0, true)    
    .flags(
      GTMaterialFlags.GENERATE_PLATE,
      GTMaterialFlags.GENERATE_ROD,
      GTMaterialFlags.GENERATE_GEAR,
      GTMaterialFlags.GENERATE_SMALL_GEAR,
      GTMaterialFlags.GENERATE_FRAME,
    );

  event.create('twinite')
      .ingot()
      .fluid()
      .color(0xea5fa0)
      .iconSet(GTMaterialIconSet.SHINY)
      .cableProperties(512, 2, 0, true);

  event.create('shellite')
      .ingot()
      .fluid()
      .color(0x5e37b5)
      .iconSet(GTMaterialIconSet.SHINY)
      .cableProperties(2048, 2, 0, true);

  event.create('dragonsteel')
      .ingot()
      .fluid()
      .color(0x3b1c61)
      .iconSet(GTMaterialIconSet.SHINY)
      .cableProperties(2048, 2, 0, true);

  event.create('abyssal')
      .ingot()
      .fluid()
      .color(0x00142b)
      .iconSet(GTMaterialIconSet.SHINY)
      .cableProperties(8192, 2, 0, true);

  // ----------------------------------------------------
  // Ad Astra
  // ----------------------------------------------------
    event.create('desh')
        .ingot()
        .dust()
        .color(0xD5A45F) // Warm orange-gold
        .iconSet('metallic')
        // Automatically creates 'gtceu:hot_desh_ingot' and adds Vacuum Freezer requirements
        .blastTemp(2400, "LOW", 480, 300)
        .flags(
          GTMaterialFlags.GENERATE_FRAME,
          GTMaterialFlags.GENERATE_DENSE
        );

    event.create('ostrum')
        .ingot()
        .dust()
        .color(0x7A5A63) // Dull mauve-bronze
        .iconSet('dull')
        .blastTemp(2750, "MID", 1920, 300)
        .flags(
          GTMaterialFlags.GENERATE_FRAME,
          GTMaterialFlags.GENERATE_DENSE
        );

    event.create('calorite')
        .ingot()
        .dust()
        .color(0xBC2A3A) // Vibrant deep ruby red
        .iconSet('shiny')
        .blastTemp(3200, "HIGH", 1920, 300)
        .flags(
          GTMaterialFlags.GENERATE_FRAME,
          GTMaterialFlags.GENERATE_DENSE
        );

    event.create('etrium')
        .ingot()
        .dust()
        .color(0x5CE1E6) // Bright neon teal
        .iconSet('bright')
        .blastTemp(3600, "HIGHER", 7680, 300)
        .flags(
          GTMaterialFlags.GENERATE_FRAME,
          GTMaterialFlags.GENERATE_DENSE
        );

  // ----------------------------------------------------
  // Magic
  // ----------------------------------------------------

      event
        .create("thaumium")
        .ingot()
        .dust()
        .color(0x5a3896)
        .iconSet("bright")
        .flags(
          GTMaterialFlags.GENERATE_FRAME,
          GTMaterialFlags.GENERATE_DENSE,
          GTMaterialFlags.GENERATE_PLATE,
        );

      event
        .create("soulstained_steel")
        .ingot()
        .dust()
        .color(0x6e4a8a)
        .iconSet("bright")
        .flags(
          GTMaterialFlags.GENERATE_FRAME,
          GTMaterialFlags.GENERATE_DENSE,
          GTMaterialFlags.GENERATE_PLATE,
        );


});
