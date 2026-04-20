GTCEuStartupEvents.registry("gtceu:material", (event) => {
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

  // Signalum
  event
    .create("signalum")
    .ingot()
    .fluid()
    .components("3x copper", "1x silver", "4x redstone")
    .color(0xff3300)
    .iconSet("shiny")
    .flags(
      GTMaterialFlags.GENERATE_PLATE,
      GTMaterialFlags.GENERATE_ROD,
      GTMaterialFlags.GENERATE_GEAR,
      GTMaterialFlags.GENERATE_SPRING,
    );

  // Lumium
  event
    .create("lumium")
    .ingot()
    .fluid()
    .components("3x tin", "1x silver", "2x glowstone")
    .color(0xffffb3)
    .iconSet("shiny")
    .flags(
      GTMaterialFlags.GENERATE_PLATE,
      GTMaterialFlags.GENERATE_ROD,
      GTMaterialFlags.GENERATE_GEAR,
    );

  // Enderium
  event
    .create("enderium")
    .ingot()
    .fluid()
    .components("3x lead", "1x diamond", "2x ender_pearl")
    .color(0x036073)
    .iconSet("shiny")
    .flags(
      GTMaterialFlags.GENERATE_PLATE,
      GTMaterialFlags.GENERATE_ROD,
      GTMaterialFlags.GENERATE_GEAR,
      GTMaterialFlags.GENERATE_SMALL_GEAR,
      GTMaterialFlags.GENERATE_FRAME,
    );

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


});
