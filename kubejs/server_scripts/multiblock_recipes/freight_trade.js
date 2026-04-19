ServerEvents.recipes(event => {
    const freightTrade_lv = (id, inputItem, inputAmount, outputItem, outputAmount, circuitConfig) => {
        event.recipes.gtceu.freight_trade_lv(id)
            .itemInputs(`${inputAmount}x ${inputItem}`)
            .circuit(circuitConfig)
            .itemOutputs(`${outputAmount}x ${outputItem}`)
            .duration(100) 
            .EUt(8);
    };

    const freightTrade_mv = (id, inputItem, inputAmount, outputItem, outputAmount, circuitConfig) => {
        event.recipes.gtceu.freight_trade_mv(id)
            .itemInputs(`${inputAmount}x ${inputItem}`)
            .circuit(circuitConfig)
            .itemOutputs(`${outputAmount}x ${outputItem}`)
            .duration(100) 
            .EUt(8);
    };

    const freightTrade_hv = (id, inputItem, inputAmount, outputItem, outputAmount, circuitConfig) => {
        event.recipes.gtceu.freight_trade_hv(id)
            .itemInputs(`${inputAmount}x ${inputItem}`)
            .circuit(circuitConfig)
            .itemOutputs(`${outputAmount}x ${outputItem}`)
            .duration(100) 
            .EUt(8);
    };

    const freightTrade_ev = (id, inputItem, inputAmount, outputItem, outputAmount, circuitConfig) => {
        event.recipes.gtceu.freight_trade_ev(id)
            .itemInputs(`${inputAmount}x ${inputItem}`)
            .circuit(circuitConfig)
            .itemOutputs(`${outputAmount}x ${outputItem}`)
            .duration(100) 
            .EUt(8);
    };

    freightTrade_lv('trade_iron_dust', 'kubejs:currency1', 4, 'gtceu:iron_dust', 8, 1);
    freightTrade_lv('trade_copper_dust', 'kubejs:currency1', 4, 'gtceu:copper_dust', 8, 2);
    freightTrade_lv('trade_tin_dust', 'kubejs:currency1', 4, 'gtceu:tin_dust', 8, 3);
    freightTrade_lv('trade_silver', 'kubejs:currency1', 12, 'gtceu:silver_dust', 8, 2);
    freightTrade_lv('trade_gold', 'kubejs:currency1', 12, 'gtceu:gold_dust', 8, 3);
    freightTrade_lv('trade_glass_dust', 'kubejs:currency1', 4, 'gtceu:glass_dust', 8, 3);
    freightTrade_lv('trade_calcite', 'kubejs:currency1', 4, 'gtceu:calcite_dust', 8, 3);
    freightTrade_lv('trade_rubber', 'kubejs:currency1', 4, 'gtceu:sticky_resin', 8, 3);

    freightTrade_mv('trade_sulfur', 'kubejs:currency1', 4, 'gtceu:sulfur_dust', 8, 3);
    freightTrade_mv('trade_small_gallium', 'kubejs:currency2', 1, 'gtceu:small_gallium_dust', 8, 1);
    freightTrade_mv('trade_small_arsenic', 'kubejs:currency2', 1, 'gtceu:small_arsenic_dust', 8, 1);
    freightTrade_mv('trade_nickel_dust', 'kubejs:currency2', 1, 'gtceu:nickel_dust', 8, 3);
    freightTrade_mv('trade_clay_dust', 'kubejs:currency1', 8, 'gtceu:clay_dust', 16, 1);
    freightTrade_mv('trade_redstone', 'kubejs:currency2', 1, 'minecraft:redstone', 32, 1);

    freightTrade_hv('trade_iron_dust_high', 'kubejs:currency1', 16, 'gtceu:iron_dust', 32, 1);
    freightTrade_hv('trade_copper_dust_high', 'kubejs:currency1', 16, 'gtceu:copper_dust', 32, 2);
    freightTrade_hv('trade_tin_dust_high', 'kubejs:currency1', 16, 'gtceu:tin_dust', 32, 3);
    freightTrade_hv('trade_silver_high', 'kubejs:currency1', 48, 'gtceu:silver_dust', 32, 2);
    freightTrade_hv('trade_gold_high', 'kubejs:currency1', 48, 'gtceu:gold_dust', 32, 3);
    freightTrade_hv('trade_glass_dust_high', 'kubejs:currency1', 16, 'gtceu:glass_dust', 32, 3);
    freightTrade_hv('trade_calcite_high', 'kubejs:currency1', 16, 'gtceu:calcite_dust', 32, 3);
    freightTrade_hv('trade_rubber_high', 'kubejs:currency1', 16, 'gtceu:sticky_resin', 32, 3);

    freightTrade_ev('trade_sulfur_high', 'kubejs:currency1', 16, 'gtceu:sulfur_dust', 32, 3);
    freightTrade_ev('trade_small_gallium_high', 'kubejs:currency2', 4, 'gtceu:small_gallium_dust', 32, 1);
    freightTrade_ev('trade_small_arsenic_high', 'kubejs:currency2', 4, 'gtceu:small_arsenic_dust', 32, 1);
    freightTrade_ev('trade_nickel_dust_high', 'kubejs:currency2', 4, 'gtceu:nickel_dust', 32, 3);
    freightTrade_ev('trade_clay_dust_high', 'kubejs:currency1', 32, 'gtceu:clay_dust', 64, 1);
    freightTrade_ev('trade_redstone_high', 'kubejs:currency2', 4, 'minecraft:redstone', 128, 1);
});