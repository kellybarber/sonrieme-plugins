import { __ } from '@wordpress/i18n'
import { RichText, MediaPlaceholder, BlockControls, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import {IconButton, Toolbar} from '@wordpress/components'

const edit = ({ className, attributes, setAttributes }) => {

    const { title, id, url } = attributes;

    const setBackgroundImage = () => {
        if (url) {
            return { 'background-image' : `url(${url})` }
        }
    }

    return (
        <>
            <BlockControls>
                {url &&
                <Toolbar>
                    <MediaUploadCheck>
                        <MediaUpload
                            allowedTypes={ ['image'] }
                            value={ id }
                            onSelect={({ id, url }) => setAttributes({ id, url })}
                            render={({ open }) => (
                                <IconButton
                                    className='icon-button components-toolbar__control'
                                    icon='edit'
                                    label={ __('Edit Image', 'sonrieme-blocks') }
                                    onClick={ open }
                                />
                            )}
                        />
                    </MediaUploadCheck>
                    <IconButton
                        className='icon-button components-toolbar__control'
                        icon='trash'
                        label={ __('Remove Image', 'sonrieme-blocks') }
                        onClick={() => setAttributes({ id : '', url : '' }) }
                    />
                </Toolbar>}
            </BlockControls>

            <div
                className={`${className} ${!url && 'no-image-set'}`}
                style={setBackgroundImage()}
            >
                {!url &&
                <MediaPlaceholder
                    value={id}
                    onSelect={({ id, url }) => setAttributes({ id, url })}
                    allowedTypes={ ['image'] }
                />}
                {url &&
                < RichText
                    className={ `${className}__title` }
                    tagName='h3'
                    value={ title }
                    onChange={ (title) => setAttributes({title}) }
                    placeholder={ __('Member Name', 'sonrieme-blocks') }
                    allowedFormats={[]}
                />
                }
            </div>
        </>
    )
}

export default edit;