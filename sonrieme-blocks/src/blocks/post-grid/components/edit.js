import { __ } from '@wordpress/i18n'
import { useState, useEffect } from '@wordpress/element'
import { synchronizeBlocksWithTemplate } from '@wordpress/blocks'
import { InnerBlocks, InspectorControls } from "@wordpress/block-editor"
import { PanelBody, RangeControl } from '@wordpress/components'
import { withSelect } from '@wordpress/data'

const edit = ({ className, attributes, setAttributes, posts }) => {

    const { columns, numberOfPosts } = attributes

    const [ template, setTemplate ] = useState([])

    useEffect(() => {
        if (posts) {
            const workingPosts = posts.slice(0, numberOfPosts)

            const servicesTemplate = posts && posts.length > 0 ? posts.map(post => (
                [ 'sonrieme-blocks/service-card', {
                    title : post.title.raw,
                    id    : post.featured_media,
                    url   : post._embedded['wp:featuredmedia'][0].source_url
                }]
            )) : []

            setTemplate(servicesTemplate)
        }
    }, [ numberOfPosts ])

    return (
        <div className={ `${className} columns--${columns}` }>
            <InspectorControls>
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
            </InspectorControls>
            <InnerBlocks
                allowedBlocks={ ['sonrieme-blocks/about-card', 'sonrieme-blocks/services-card'] }
                template={() =>  posts && posts.length > 0 ? posts.map(post => (
                    [ 'sonrieme-blocks/service-card', {
                        title : post.title.raw,
                        id    : post.featured_media,
                        url   : post._embedded['wp:featuredmedia'][0].source_url
                    }]
                )) : []}
            />
        </div>
    )
}

export default withSelect(( select, props ) => {
    const { attributes : { numberOfPosts } } = props

    const query = {
        per_page : numberOfPosts,
        _embed   : true
    }

    return {
        posts : select('core').getEntityRecords('postType', 'services', query)
    }
})(edit);