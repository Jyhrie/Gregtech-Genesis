const WorldGenLayers = Java.loadClass("com.gregtechceu.gtceu.api.data.worldgen.WorldGenLayers")

GTCEuServerEvents.oreVeins(event => {

    const OW = [["ow", "minecraft:overworld"]];
    const TF = [["twilight_forest", "twilightforest:twilight_forest"]];
    const NETHER = [["netherrack", "minecraft:the_nether"]];
    const MOON = [["moon", "ad_astra:moon"]];
    const MARS = [["mars", "ad_astra:mars"]];
    const MERCURY = [["mercury", "ad_astra:mercury"]];
    const VENUS = [["venus", "ad_astra:venus"]];
    const GLACIO = [["glacio", "ad_astra:glacio"], ["deepslate", "ad_astra:glacio"]];

    event.removeAll()

    function registerBlockVein(event, name, primary, secondary, between, sporadic, minH, maxH, density, size, weight, locations) {
    locations.forEach(([layer, dim]) => {
        let dimensionShort = dim.split(':')[1] || dim;

        event.add(`custom/${dimensionShort}/${name}`, vein => {
            vein.weight(weight)
            vein.density(density)
            vein.clusterSize(size)
            vein.layer(layer)
            vein.dimensions(dim)
            vein.heightRangeUniform(minH, maxH)
            vein.discardChanceOnAirExposure(0)

            vein.cuboidVeinGenerator(gen => gen
                .top(b => b.block(primary).size(Math.floor(size * 0.25)))
                .middle(b => b.block(secondary).size(Math.floor(size * 0.4)))
                .bottom(b => b.block(between).size(Math.floor(size * 0.25)))
                .spread(b => b.block(sporadic))
            )

            vein.surfaceIndicatorGenerator(indicator => indicator
                .surfaceRock(primary)
                .placement("above")
            )
        })
    })
}

    // function registerClassicVein(event, name, p, s, b, sp, minH, maxH, density, size, weight, locations) {
    //     locations.forEach(([layer, dim]) => {
    //         // Formats the ID as "custom/<dimension_name>/<vein_name>"
    //         let dimensionShort = dim.split(':')[1] || dim;
            
    //         event.add(`custom/${dimensionShort}/${name}`, vein => {
    //             vein.weight(weight);
    //             vein.density(density);
    //             vein.clusterSize(size);
    //             vein.layer(layer);
    //             vein.dimensions(dim);
    //             vein.heightRangeUniform(minH, maxH);
    //             vein.discardChanceOnAirExposure(0)

    //             vein.classicVeinGenerator(generator => generator
    //                 .primary(block => block.mat(p))
    //                 .secondary(block => block.mat(s))
    //                 .between(block => block.mat(b))
    //                 .sporadic(block => block.mat(sp))
    //             );

    //             vein.surfaceIndicatorGenerator(indicator => indicator
    //                 .surfaceRock(p)
    //                 .placement("above")
    //             );
    //         });
    //     });
    // }

    function registerClassicVein(event, name, p, s, b, sp, minH, maxH, density, size, weight, locations) {
    locations.forEach(([layer, dim]) => {
        let dimensionShort = dim.split(':')[1] || dim

        event.add(`custom/${dimensionShort}/${name}`, vein => {
            vein.weight(weight)
            vein.density(density)
            vein.clusterSize(size)
            vein.layer(layer)
            vein.dimensions(dim)
            vein.heightRangeUniform(minH, maxH)
            vein.discardChanceOnAirExposure(0)

            vein.layeredVeinGenerator(generator => generator
                .buildLayerPattern(pattern => pattern
                    .layer(l => l.weight(3).mat(p).size(2, 4))   // primary
                    .layer(l => l.weight(2).mat(s).size(1, 3))   // secondary
                    .layer(l => l.weight(1).mat(b).size(1, 2))   // between
                    .layer(l => l.weight(1).mat(sp).size(1, 1))  // sporadic
                )
            )

            vein.surfaceIndicatorGenerator(indicator => indicator
                .surfaceRock(p)
                .placement("above")
            )
            })
        })
    }

    registerClassicVein(event, "overworld_diamond", GTMaterials.Diamond, GTMaterials.Graphite, GTMaterials.Graphite, GTMaterials.Coal, -48, 20, 0.4, 16, 40, OW);
    registerClassicVein(event, "overworld_redstone", GTMaterials.Redstone, GTMaterials.Redstone, GTMaterials.Ruby, GTMaterials.Cinnabar, -16, 40, 0.5, 24, 60, OW);
    registerClassicVein(event, "overworld_chalcopyrite_low", GTMaterials.Chalcopyrite, GTMaterials.Iron, GTMaterials.Pyrite, GTMaterials.Copper, -16, 60, 0.6, 24, 80, OW);
    registerClassicVein(event, "overworld_iron", GTMaterials.Limonite, GTMaterials.Limonite, GTMaterials.Iron, GTMaterials.Malachite, -16, 30, 0.6, 24, 120, OW);
    registerClassicVein(event, "overworld_manganese", GTMaterials.Grossular, GTMaterials.Spessartine, GTMaterials.Pyrolusite, GTMaterials.Tantalite, -20, 30, 0.5, 16, 20, OW);
    registerClassicVein(event, "overworld_mica", GTMaterials.Kyanite, GTMaterials.Mica, GTMaterials.Cassiterite, GTMaterials.Pollucite, -20, 40, 0.5, 16, 20, OW);
    registerClassicVein(event, "overworld_lapis", GTMaterials.Lazurite, GTMaterials.Sodalite, GTMaterials.Lapis, GTMaterials.Calcite, -20, 50, 0.85, 24, 60, OW);
    registerClassicVein(event, "overworld_soapstone", GTMaterials.Soapstone, GTMaterials.Talc, GTMaterials.GlauconiteSand, GTMaterials.Pentlandite, -10, 60, 0.5, 16, 40, OW);
    registerClassicVein(event, "overworld_gold", GTMaterials.Magnetite, GTMaterials.Silver, GTMaterials.Gold, GTMaterials.VanadiumMagnetite, 10, 64, 0.5, 32, 160, OW);
    registerClassicVein(event, "overworld_coal", GTMaterials.Coal, GTMaterials.Coal, GTMaterials.Coal, GTMaterials.Diamond, 20, 64, 0.8, 32, 80, OW);
    registerClassicVein(event, "overworld_apatite", GTMaterials.Apatite, GTMaterials.Apatite, GTMaterials.TricalciumPhosphate, GTMaterials.Pyrochlore, 20, 64, 0.5, 16, 60, OW);
    registerClassicVein(event, "overworld_garnettin", GTMaterials.CassiteriteSand, GTMaterials.GarnetSand, GTMaterials.Asbestos, GTMaterials.Diatomite, 20, 64, 0.6, 24, 80, OW);
    registerClassicVein(event, "overworld_mineral_sand", GTMaterials.BasalticMineralSand, GTMaterials.GraniticMineralSand, GTMaterials.FullersEarth, GTMaterials.Gypsum, 20, 64, 0.85, 32, 80, OW);
    registerClassicVein(event, "overworld_kaolinite", GTMaterials.get("kaolinite"), GTMaterials.Zeolite, GTMaterials.FullersEarth, GTMaterials.GlauconiteSand, 25, 64, 0.7, 16, 60, OW);
    registerClassicVein(event, "overworld_salts", GTMaterials.RockSalt, GTMaterials.Salt, GTMaterials.Lepidolite, GTMaterials.Spodumene, 25, 64, 0.5, 24, 50, OW);
    registerClassicVein(event, "overworld_oilsands", GTMaterials.Oilsands, GTMaterials.Oilsands, GTMaterials.Oilsands, GTMaterials.Oilsands, 30, 64, 0.8, 32, 40, OW);
    registerClassicVein(event, "overworld_magnetite_massive", GTMaterials.Magnetite, GTMaterials.Magnetite, GTMaterials.Iron, GTMaterials.VanadiumMagnetite, -40, 64, 0.5, 32, 160, OW);
    registerClassicVein(event, "overworld_cassiterite", GTMaterials.Tin, GTMaterials.Tin, GTMaterials.Cassiterite, GTMaterials.Tin, -20, 64, 0.7, 24, 50, OW);
    registerClassicVein(event, "overworld_chalcopyrite_high", GTMaterials.Chalcopyrite, GTMaterials.Talc, GTMaterials.Cassiterite, GTMaterials.Alunite, 20, 72, 0.6, 24, 80, OW);
    registerClassicVein(event, "overworld_lignite", GTMaterials.Coal, GTMaterials.Coal, GTMaterials.Coal, GTMaterials.Coal, 0, 64, 0.95, 32, 160, OW);

    // --- Nether Veins ---
    registerClassicVein(event, "nether_redstone", GTMaterials.Redstone, GTMaterials.Redstone, GTMaterials.Ruby, GTMaterials.Cinnabar, -32, 40, 0.7, 32, 60, NETHER);
    registerClassicVein(event, "nether_chalcopyrite_low", GTMaterials.Chalcopyrite, GTMaterials.Iron, GTMaterials.Pyrite, GTMaterials.Copper, -32, 60, 0.8, 48, 80, NETHER);
    registerClassicVein(event, "nether_iron", GTMaterials.Limonite, GTMaterials.Limonite, GTMaterials.Iron, GTMaterials.Malachite, -16, 30, 0.8, 48, 120, NETHER);
    registerClassicVein(event, "nether_manganese", GTMaterials.Grossular, GTMaterials.Spessartine, GTMaterials.Pyrolusite, GTMaterials.Tantalite, -20, 30, 0.6, 32, 20, NETHER);
    registerClassicVein(event, "nether_sulfur", GTMaterials.Sulfur, GTMaterials.Sulfur, GTMaterials.Pyrite, GTMaterials.Sphalerite, 5, 20, 0.9, 64, 100, NETHER);
    registerClassicVein(event, "nether_beryllium", GTMaterials.Beryllium, GTMaterials.Beryllium, GTMaterials.Emerald, GTMaterials.Thorium, 5, 30, 0.4, 32, 30, NETHER);
    registerClassicVein(event, "nether_electrotine", GTMaterials.Saltpeter, GTMaterials.Diatomite, GTMaterials.Electrotine, GTMaterials.Alunite, 5, 45, 0.5, 32, 40, NETHER);
    registerClassicVein(event, "nether_molybdenum", GTMaterials.Wulfenite, GTMaterials.Molybdenite, GTMaterials.Molybdenum, GTMaterials.Powellite, 20, 50, 0.4, 24, 5, NETHER);
    registerClassicVein(event, "nether_quartz", GTMaterials.NetherQuartz, GTMaterials.NetherQuartz, GTMaterials.NetherQuartz, GTMaterials.Quartzite, 40, 80, 0.7, 48, 80, NETHER);
    registerClassicVein(event, "nether_quartz_alt", GTMaterials.Quartzite, GTMaterials.Barite, GTMaterials.CertusQuartz, GTMaterials.CertusQuartz, 80, 120, 0.5, 32, 30, NETHER);
    registerClassicVein(event, "nether_tetrahedrite", GTMaterials.Tetrahedrite, GTMaterials.Tetrahedrite, GTMaterials.Copper, GTMaterials.Stibnite, 80, 120, 0.6, 48, 70, NETHER);

    // --- Twilight Forest Veins ---
    registerClassicVein(event, "twilight_diamond", GTMaterials.Graphite, GTMaterials.Graphite, GTMaterials.Diamond, GTMaterials.Coal, -32, 5, 0.8, 16, 40, TF);
    registerClassicVein(event, "twilight_lapis", GTMaterials.Lazurite, GTMaterials.Sodalite, GTMaterials.Lapis, GTMaterials.Calcite, -32, 5, 1.0, 16, 40, TF);
    registerClassicVein(event, "twilight_soapstone", GTMaterials.Soapstone, GTMaterials.Talc, GTMaterials.GlauconiteSand, GTMaterials.Pentlandite, -32, 5, 1.0, 16, 40, TF);
    registerClassicVein(event, "twilight_gold", GTMaterials.Magnetite, GTMaterials.Silver, GTMaterials.VanadiumMagnetite, GTMaterials.Gold, -32, 5, 1.0, 32, 60, TF);
    registerClassicVein(event, "twilight_coal", GTMaterials.Coal, GTMaterials.Coal, GTMaterials.Coal, GTMaterials.Diamond, -32, 5, 1.0, 32, 80, TF);
    registerClassicVein(event, "twilight_apatite", GTMaterials.Apatite, GTMaterials.Apatite, GTMaterials.TricalciumPhosphate, GTMaterials.Pyrochlore, -32, 5, 1.0, 16, 60, TF);
    registerClassicVein(event, "twilight_salts", GTMaterials.RockSalt, GTMaterials.Salt, GTMaterials.Lepidolite, GTMaterials.Spodumene, -32, 5, 1.0, 24, 50, TF);
    registerClassicVein(event, "twilight_magnetite_massive", GTMaterials.Magnetite, GTMaterials.Magnetite, GTMaterials.Iron, GTMaterials.VanadiumMagnetite, -32, 5, 1.0, 32, 160, TF);
    registerClassicVein(event, "twilight_cassiterite", GTMaterials.Tin, GTMaterials.Tin, GTMaterials.Cassiterite, GTMaterials.Tin, -32, 5, 1.0, 24, 50, TF);
    registerClassicVein(event, "twilight_cryolite", GTMaterials.get("cryolite"), GTMaterials.Silver, GTMaterials.Silver, GTMaterials.Galena, -32, 5, 1.0, 16, 40, TF);
    registerClassicVein(event, "twilight_sapphire", GTMaterials.Almandine, GTMaterials.Pyrope, GTMaterials.Sapphire, GTMaterials.GreenSapphire, -32, 5, 1.0, 16, 60, TF);
    registerClassicVein(event, "twilight_olivine", GTMaterials.Bentonite, GTMaterials.Magnesite, GTMaterials.Olivine, GTMaterials.GlauconiteSand, -32, 5, 1.0, 16, 60, TF);
    registerClassicVein(event, "twilight_nickel", GTMaterials.Garnierite, GTMaterials.Nickel, GTMaterials.Cobaltite, GTMaterials.Pentlandite, -32, 5, 1.0, 16, 40, TF);

    event.add("custom/twilight/twilight_magical", vein => {
        vein.weight(160)
        vein.density(0.95)
        vein.clusterSize(32)
        vein.layer("twilight_forest")
        vein.dimensions("twilightforest:twilight_forest")
        vein.heightRangeUniform(-32, 5)

        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(2).state(() => Block.getBlock("malum:soulstone_ore").defaultBlockState()).size(2, 4))
                .layer(l => l.weight(2).state(() => Block.getBlock("malum:brilliant_stone").defaultBlockState()).size(2, 4))
                .layer(l => l.weight(1).state(() => Block.getBlock("kubejs:arcane_ore").defaultBlockState()).size(2, 4))
            )
        )
    })

    registerClassicVein(event, "moon_galena", GTMaterials.Galena, GTMaterials.Galena, GTMaterials.Silver, GTMaterials.Lead, 5, 45, 0.8, 40, 40, MOON);
    registerClassicVein(event, "moon_ilmenite", GTMaterials.Ilmenite, GTMaterials.Chromite, GTMaterials.Uvarovite, GTMaterials.Perlite, 10, 64, 0.85, 40, 16, MOON);
    registerClassicVein(event, "moon_bauxite", GTMaterials.Bauxite, GTMaterials.Ilmenite, GTMaterials.Aluminium, GTMaterials.Ilmenite, 10, 64, 0.8, 32, 80, MOON);
    registerClassicVein(event, "moon_monazite", GTMaterials.Bastnasite, GTMaterials.Bastnasite, GTMaterials.Monazite, GTMaterials.Neodymium, 20, 40, 0.8, 24, 30, MOON);
    registerClassicVein(event, "moon_quartz_low", GTMaterials.Quartzite, GTMaterials.Barite, GTMaterials.CertusQuartz, GTMaterials.CertusQuartz, 20, 64, 0.8, 48, 20, MOON);


})