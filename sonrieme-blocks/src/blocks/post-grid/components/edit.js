import { __ } from '@wordpress/i18n'
import { useEffect } from '@wordpress/element'
import { select, dispatch } from '@wordpress/data'
import { InnerBlocks, InspectorControls } from "@wordpress/block-editor"
import { PanelBody, RangeControl } from '@wordpress/components'
import { withSelect } from '@wordpress/data'

const edit = ({ className, attributes, setAttributes, posts, clientId }) => {

    const { columns, numberOfPosts } = attributes

    useEffect(() => {
        const children = select('core/editor').getBlocksByClientId(clientId)[0].innerBlocks

        if (posts && children) children.forEach((child, index) => {
            const post = posts[index]

            if (!post) return

            if (child) {
                const childAttributes = child.attributes

                const updatedAttributes = {}
                if (!childAttributes.title) updatedAttributes.title = post.title.raw
                if (!childAttributes.id) updatedAttributes.id = post.featured_media
                if (!childAttributes.url) updatedAttributes.url = post._embedded['wp:featuredmedia'][0].source_url

                dispatch('core/editor').updateBlockAttributes(child.clientId, updatedAttributes)
            }

        })
    })

    return (
        <div className={ `${className} columns--${columns}` }>
{/*            <InspectorControls>
                <PanelBody title={ __('Posts Settings', 'sonrieme-blocks') } >
                    <RangeControl
                        label={ __( 'Number of Posts', 'sonrieme-blocks' ) }
                        value={ numberOfPosts }
                        onChange={ ( numberOfPosts ) => setAttributes({ numberOfPosts }) }
                        min={ 1 }
                        max={ 8 }
                    />
                </PanelBody>
                <PanelBody>
                    <RangeControl
                        label={ __( 'Columns', 'sonrieme-blocks' ) }
                        value={ columns }
                        onChange={ ( columns ) => setAttributes({ columns }) }
                        min={ 1 }
                        max={ 4 }
                    />
                </PanelBody>
            </InspectorControls>*/}
            <InnerBlocks
                allowedBlocks={ ['sonrieme-blocks/about-card', 'sonrieme-blocks/services-card'] }
            />
        </div>
    )
}

export default withSelect(( select ) => {
    const query = {
        _embed   : true
    }

    return {
        posts : select('core').getEntityRecords('postType', 'services', query)
    }
})(edit);