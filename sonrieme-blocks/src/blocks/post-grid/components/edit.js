import { __ } from '@wordpress/i18n'
import { InnerBlocks, InspectorControls } from "@wordpress/block-editor"
import { PanelBody, RangeControl } from '@wordpress/components'

const edit = ({ className, attributes, setAttributes }) => {

    const { columns } = attributes

    return (
        <div className={ `${className} columns--${columns}` }>
            <InspectorControls>
                <PanelBody>
                    <RangeControl
                        label={ __( 'Columns', 'sonrieme-blocks' ) }
                        value={ columns }
                        onChange={ (columns) => setAttributes({columns}) }
                        min={ 1 }
                        max={ 6 }
                    />
                </PanelBody>
            </InspectorControls>
            <InnerBlocks
                allowedBlocks={ ['sonrieme-blocks/about-card'] }
            />
        </div>
    )
}

export default edit;