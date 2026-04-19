ServerEvents.recipes(event => {
    event.recipes.gtceu.assembler('ae2_controller_hv')
    .itemInputs(
        'gtceu:ev_machine_hull',
        'ae2:engineering_processor',
        '4x #gtceu:circuits/hv',
        '4x ae2:fluix_glass_cable',
        '9x ae2:fluix_crystal'
    )
    .inputFluids(Fluid.of('gtceu:polyethylene', 576))
    .itemOutputs('ae2:controller')
    .duration(600) 
    .EUt(480)

    event.recipes.gtceu.assembler('ae2_drive_expert')
        .itemInputs(
            'gtceu:ev_machine_casing',    
            '2x ae2:engineering_processor',   
            '4x ae2:fluix_glass_cable'
        )
        .fluidInputs(Fluid.of('gtceu:soldering_alloy', 72)) 
        .itemOutputs('ae2:drive')
        .duration(200) 
        .EUt(480) 

    event.recipes.gtceu.assembler('ae2_1k_core_part')
        .itemInputs(
            'ae2:fluix_dust',
            '4x gtceu:nand_memory_chip',
            'ae2:logic_processor'
        )
        .fluidInputs(Fluid.of('gtceu:soldering_alloy', 144)) 
        .itemOutputs('ae2:cell_component_1k')
        .duration(100) 
        .EUt(120)
})