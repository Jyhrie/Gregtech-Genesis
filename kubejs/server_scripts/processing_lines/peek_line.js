ServerEvents.recipes(event => {

    // ======================================================================
    // STAGE 1: PRECURSOR PREPARATION (Standard Chemical Reactors)
    // ======================================================================

    // 1. Phosgene Synthesis
    // CO + Cl2 -> COCl2
    event.recipes.gtceu.chemical_reactor('phosgene_synthesis')
        .inputFluids('gtceu:carbon_monoxide 1000', 'gtceu:chlorine 1000')
        .outputFluids('gtceu:phosgene 1000')
        .duration(100)
        .EUt(120); // MV Tier

    // 2. Fluorobenzene Synthesis
    // Benzene + Fluorine -> Fluorobenzene + HF
    event.recipes.gtceu.chemical_reactor('fluorobenzene_synthesis')
        .inputFluids('gtceu:benzene 1000', 'gtceu:fluorine 2000')
        .outputFluids('gtceu:fluorobenzene 1000', 'gtceu:hydrofluoric_acid 1000')
        .duration(160)
        .EUt(480); // HV Tier

    // 3. Hydroquinone Synthesis (The Clean Route)
    // Phenol + Hydrogen Peroxide -> Hydroquinone + Water
    event.recipes.gtceu.chemical_reactor('hydroquinone_synthesis')
        .inputFluids('gtceu:phenol 1000', 'gtceu:hydrogen_peroxide 1000')
        .itemOutputs('1x gtceu:hydroquinone_dust')
        .outputFluids('minecraft:water 1000')
        .duration(200)
        .EUt(480); // HV Tier

    // 4. Diphenyl Sulfone Synthesis (The High-Temp Solvent)
    // 2x Benzene + Sulfur Trioxide -> Diphenyl Sulfone + Water
    event.recipes.gtceu.chemical_reactor('diphenyl_sulfone_synthesis')
        .inputFluids('gtceu:benzene 2000', 'gtceu:sulfur_trioxide 1000')
        .outputFluids('gtceu:diphenyl_sulfone 1000', 'minecraft:water 1000')
        .duration(300)
        .EUt(1920); // EV Tier


    // 5. Monomer Synthesis (Part 1 of PEEK)
    // 2x Fluorobenzene + Phosgene -> Difluorobenzophenone + 2x HCl
    event.recipes.gtceu.large_chemical_reactor('difluorobenzophenone_synthesis')
        .inputFluids('gtceu:fluorobenzene 2000', 'gtceu:phosgene 1000')
        .itemOutputs('1x gtceu:difluorobenzophenone_dust') 
        .outputFluids('gtceu:hydrochloric_acid 2000')
        .duration(300)
        .EUt(1920) // EV Tier

    // 6. Step-Growth Polymerization (Part 2 of PEEK)
    // Monomer + Hydroquinone + Base + Solvent Bath -> PEEK + Salt + CO2 + Water
    event.recipes.gtceu.large_chemical_reactor('peek_polymerization')
        .itemInputs(
            '1x gtceu:difluorobenzophenone_dust', 
            '1x gtceu:hydroquinone_dust', 
            '1x gtceu:sodium_carbonate_dust'
        ) 
        .inputFluids('gtceu:diphenyl_sulfone 1000') // Solvent In
        .itemOutputs('2x gtceu:sodium_fluoride_dust') // Toxic Salt
        .outputFluids(
            'gtceu:polyether_ether_ketone 1000', 
            'gtceu:diphenyl_sulfone 1000', // Solvent Out (Closed Loop)
            'minecraft:water 1000', 
            'gtceu:carbon_dioxide 1000'
        )
        .duration(600)
        .EUt(7680) // IV Tier

    event.recipes.gtceu.chemical_reactor('sodium_carbonate_synthesis')
        .itemInputs('6x gtceu:sodium_hydroxide_dust') // 2 molecules = 6 dusts
        .inputFluids('gtceu:carbon_dioxide 1000') // 1 molecule = 1000mB
        .itemOutputs('6x gtceu:sodium_carbonate_dust') // 1 molecule = 6 dusts
        .outputFluids('minecraft:water 1000')
        .duration(120)
        .EUt(30);


    event.recipes.gtceu.assembler('petro_resistant_casing')
        .itemInputs('gtceu:hastelloy_n_frame')
        .inputFluids('gtceu:polyether_ether_ketone 144') 
        .itemOutputs('kubejs:casing_petrochemical_resistant_composite') 
        .duration(200)
        .EUt(480); // HV Tier
});