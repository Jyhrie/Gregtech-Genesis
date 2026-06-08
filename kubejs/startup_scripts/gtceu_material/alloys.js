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
      GTMaterialFlags.GENERATE_ROD,
      GTMaterialFlags.GENERATE_GEAR,
      GTMaterialFlags.GENERATE_FRAME,
      GTMaterialFlags.DECOMPOSITION_BY_CENTRIFUGING,
    );

  event
    .create("titanium_aluminide")
    .ingot()
    .fluid()
    .components("1x titanium", "1x aluminium")
    .color(0x9ca9b5) // A distinct, dull metallic silver-blue color
    .iconSet("shiny")
    .flags(
      GTMaterialFlags.GENERATE_PLATE,
      GTMaterialFlags.GENERATE_ROD,
      GTMaterialFlags.GENERATE_GEAR,
      GTMaterialFlags.GENERATE_FRAME,
      GTMaterialFlags.DECOMPOSITION_BY_CENTRIFUGING
    );

  event
    .create("tungsten_niobium")
    .ingot()
    .fluid()
    .components("2x tungsten", "1x niobium")
    .color(0x525266) // Darker, heavy metallic grey
    .iconSet("shiny")
    .flags(
      GTMaterialFlags.GENERATE_PLATE,
      GTMaterialFlags.GENERATE_ROD,
      GTMaterialFlags.GENERATE_GEAR,
      GTMaterialFlags.GENERATE_FRAME,
      GTMaterialFlags.DECOMPOSITION_BY_CENTRIFUGING
    );
    
  event
    .create("stellated_starsteel")
    .ingot()
    .fluid()
    .components("1x stellite_100" ,"1x naquadah")
    .color(0x2E3B42) // Deep cosmic charcoal with a hint of blue
    .iconSet("metallic")
    .flags(
      GTMaterialFlags.GENERATE_PLATE,
      GTMaterialFlags.GENERATE_ROD,
      GTMaterialFlags.GENERATE_GEAR,
      GTMaterialFlags.GENERATE_FRAME,
      GTMaterialFlags.DECOMPOSITION_BY_CENTRIFUGING
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


});
