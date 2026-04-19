ServerEvents.recipes(event => {
    // This removes every recipe that uses the Spirit Crucible (spirit_focusing)
    event.remove({ type: 'malum:spirit_focusing' })
})