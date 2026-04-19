// priority: 100

ServerEvents.recipes(event => {
    event.remove({ output: 'ae2:controller' })
    event.remove({ output: 'ae2:drive' })
    event.remove({ output: 'ae2:cell_component_1k' })
})