ServerEvents.recipes((event) => {
  event.recipes.gtceu
    .assembler("ae2_controller_hv")
    .itemInputs(
      "gtceu:ev_machine_hull",
      "ae2:engineering_processor",
      "4x #gtceu:circuits/hv",
      "4x ae2:fluix_glass_cable",
      "9x ae2:fluix_crystal",
    )
    .inputFluids(Fluid.of("gtceu:soldering_alloy", 144))
    .itemOutputs("ae2:controller")
    .duration(600)
    .EUt(480);

  event.recipes.gtceu
    .assembler("ae2_drive_expert")
    .itemInputs(
      "gtceu:ev_machine_casing",
      "2x ae2:engineering_processor",
      "4x ae2:fluix_glass_cable",
    )
    .inputFluids(Fluid.of("gtceu:soldering_alloy", 72))
    .itemOutputs("ae2:drive")
    .duration(200)
    .EUt(480);

  event.shaped("2x ae2:fluix_glass_cable", ["GGG", "DWD", "GGG"], {
    G: "#forge:glass",
    D: "ae2:fluix_dust",
    W: "gtceu:fborosilicate_glass_wire",
  });

  event.recipes.gtceu
    .assembler("ae2_1k_core_part")
    .itemInputs(
      "ae2:fluix_dust",
      "4x gtceu:nand_memory_chip",
      "ae2:logic_processor",
    )
    .inputFluids(Fluid.of("gtceu:soldering_alloy", 24))
    .itemOutputs("ae2:cell_component_1k")
    .duration(60)
    .EUt(120);

  const presses = [
    { id: "ae2:calculation_processor_press", lens: "gtceu:sapphire_lens" },
    { id: "ae2:engineering_processor_press", lens: "gtceu:diamond_lens" },
    { id: "ae2:logic_processor_press", lens: "gtceu:ruby_lens" },
    { id: "ae2:silicon_press", lens: "gtceu:emerald_lens" },
    { id: "ae2:name_press", lens: "gtceu:glass_lens" },
  ];

  presses.forEach((press) => {
    event.recipes.gtceu
      .laser_engraver(press.id.split(":")[1])
      .itemInputs("gtceu:stainless_steel_plate")
      .notConsumable(press.lens)
      .itemOutputs(press.id)
      .duration(600)
      .EUt(480);
  });

  event.recipes.gtceu
    .assembler("ae2_formation_core")
    .itemInputs(
      "ae2:logic_processor",
      "1x ae2:fluix_dust",
      "1x gtceu:nand_memory_chip",
      "1x #forge:gems/certus_quartz",
    )
    .inputFluids(Fluid.of("gtceu:soldering_alloy", 36))
    .itemOutputs("ae2:formation_core")
    .duration(60)
    .EUt(480);

  event.recipes.gtceu
    .assembler("ae2_annihilation_core")
    .itemInputs(
      "ae2:logic_processor",
      "1x ae2:fluix_dust",
      "1x gtceu:nand_memory_chip",
      "1x #forge:gems/quartz",
    )
    .inputFluids(Fluid.of("gtceu:soldering_alloy", 36))
    .itemOutputs("ae2:annihilation_core")
    .duration(60)
    .EUt(480);

  event.recipes.gtceu
    .assembler("ae2_terminal")
    .itemInputs(
      "ae2:calculation_processor",
      "ae2:annihilation_core",
      "ae2:formation_core",
      "#gtceu:circuits/hv",
      "#ae2:illuminated_panel",
    )
    .inputFluids(Fluid.of("gtceu:soldering_alloy", 144))
    .itemOutputs("ae2:terminal")
    .duration(200)
    .EUt(480);

  event.recipes.gtceu
    .assembler("ae2_crafting_terminal")
    .itemInputs(
      "ae2:terminal",
      "minecraft:crafting_table",
      "gtceu:hv_robot_arm",
      "2x #gtceu:circuits/hv",
    )
    .inputFluids(Fluid.of("gtceu:soldering_alloy", 72))
    .itemOutputs("ae2:crafting_terminal")
    .duration(200)
    .EUt(480);

  event.recipes.gtceu
    .assembler("ae2_molecular_assembler_ev")
    .itemInputs(
      "gtceu:hv_machine_casing",
      "ae2:formation_core",
      "ae2:annihilation_core",
      "8x gtceu:fine_platinum_wire",
      "1x gtceu:nand_memory_chip",
      "gtceu:laminated_glass",
      "1x #gtceu:circuits/hv",
    )
    .inputFluids(Fluid.of("gtceu:soldering_alloy", 72))
    .itemOutputs("ae2:molecular_assembler")
    .duration(600)
    .EUt(1920);

  event.recipes.gtceu
    .assembler("ae2_pattern_provider_ev")
    .itemInputs(
      "gtceu:hv_machine_casing",
      "gtceu:ev_conveyor_module",
      "gtceu:ev_electric_pump",
      "ae2:formation_core",
      "ae2:annihilation_core",
      "ae2:fluix_glass_cable",
      "1x gtceu:nand_memory_chip",
      "8x gtceu:fine_platinum_wire",
      "1x #gtceu:circuits/hv",
    )
    .inputFluids(Fluid.of("gtceu:soldering_alloy", 72))
    .itemOutputs("ae2:pattern_provider")
    .duration(600)
    .EUt(1920); 

  event.recipes.gtceu
    .assembler("ae2_interface_ev")
    .itemInputs(
      "gtceu:hv_machine_casing", 
      "ae2:formation_core",
      "ae2:annihilation_core",
      "gtceu:ev_conveyor_module",
      "gtceu:ev_electric_pump",
      "1x gtceu:nand_memory_chip",
      "8x gtceu:fine_platinum_wire",
      "#gtceu:circuits/hv",
    )
    .inputFluids(Fluid.of("gtceu:soldering_alloy", 72))
    .itemOutputs("ae2:interface")
    .duration(400)
    .EUt(1920);

  event.recipes.gtceu
    .assembler("ae2_crafting_unit_ev")
    .itemInputs(
      "gtceu:hv_machine_casing",
      "ae2:calculation_processor", 
      "2x ae2:logic_processor", 
      "1x ae2:fluix_glass_cable",
      "1x gtceu:nand_memory_chip",
      "4x gtceu:fine_platinum_wire", 
      "1x #gtceu:circuits/hv", 
    )
    .inputFluids(Fluid.of("gtceu:soldering_alloy", 72))
    .itemOutputs("ae2:crafting_unit")
    .duration(100) 
    .EUt(1920);
});
