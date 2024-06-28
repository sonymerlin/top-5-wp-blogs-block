const { registerBlockType } = wp.blocks;
const { InspectorControls } = wp.blockEditor;
const { PanelBody, SelectControl, TextControl } = wp.components;
const { __ } = wp.i18n;

registerBlockType('custom/top-5-wp-blogs', {
    title: __('Top 5 WordPress Blogs', 'custom'),
    icon: 'admin-post',
    category: 'widgets',
    attributes: {
        orderBy: {
            type: 'string',
            default: 'DESC',
        },
        order: {
            type: 'string',
            default: 'publish_date',
        },
        noOfDisplay: {
            type: 'number',
            default: 5,
        },
    },
    edit({ attributes, setAttributes }) {
        const { orderBy, order, noOfDisplay } = attributes;

        return (
            <div>
                <InspectorControls>
                    <PanelBody title={__('Block Settings', 'custom')}>
                        <SelectControl
                            label={__('Order By', 'custom')}
                            value={orderBy}
                            options={[
                                { label: 'ASC', value: 'ASC' },
                                { label: 'DESC', value: 'DESC' },
                            ]}
                            onChange={(value) => setAttributes({ orderBy: value })}
                        />
                        <SelectControl
                            label={__('Order', 'custom')}
                            value={order}
                            options={[
                                { label: __('Name', 'custom'), value: 'name' },
                                { label: __('Publish Date', 'custom'), value: 'publish_date' },
                            ]}
                            onChange={(value) => setAttributes({ order: value })}
                        />
                        <TextControl
                            label={__('Number of Blogs to Display', 'custom')}
                            type="number"
                            value={noOfDisplay}
                            onChange={(value) => setAttributes({ noOfDisplay: parseInt(value) })}
                        />
                    </PanelBody>
                </InspectorControls>
                <p>{__('Top 5 WordPress Blogs Block', 'custom')}</p>
            </div>
        );
    },
    save() {
        return null; // We use a render callback in PHP.
    },
});
