ServerEvents.recipes(event => {

    event.remove({ id: 'occultism:ritual/possess_endermite' })

    event.remove({ output: 'occultism:dimensional_mineshaft' })

    event.remove({ output: 'occultism:miner_djinni_ores' })
    event.remove({ output: 'occultism:miner_foliot_unspecialized' })
    
    // 3. Keep the "Disable Rituals" logic here as well
    event.remove({ id: 'occultism:ritual/summon_djinni_ore_miner' })
    event.remove({ id: 'occultism:ritual/summon_afrit_ore_miner' })
    event.remove({ id: 'occultism:ritual/summon_marid_ore_miner' })

})