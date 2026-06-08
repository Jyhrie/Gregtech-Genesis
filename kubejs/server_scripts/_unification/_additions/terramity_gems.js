const terramity_gems = {
    'sapphire': 'terramity:sapphire',
    'ruby': 'terramity:ruby',
    'topaz': 'terramity:topaz',
    'onyx': 'terramity:onyx'
};

ServerEvents.tags('item', event => {
    Object.entries(terramity_gems).forEach(([tag_name, full_id]) => {
        event.add(`forge:gems/${tag_name}`, full_id);
        
    });
});

ServerEvents.recipes(event => {
    Object.entries(terramity_gems).forEach(([tag_name, full_id]) => {
        event.replaceInput({}, full_id, `#forge:gems/${tag_name}`);
    });
});