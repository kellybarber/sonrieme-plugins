import { __ } from '@wordpress/i18n'
import { RichText } from '@wordpress/block-editor';

const edit = ({ className, attributes, setAttributes }) => {

    const { title, description } = attributes;

    return (
        <div className={className}>
            <RichText
                className={`${className}__title`}
                tagName='h3'
                value={title}
                onChange={(title) => setAttributes({title})}
                placeholder={__('Member Name', 'sonrieme-blocks')}
                allowedFormats={[]}
            />
            <RichText
                className={`${className}__title`}
                tagName='p'
                value={description}
                onChange={(description) => setAttributes({description})}
                placeholder={__('Member Name', 'sonrieme-blocks')}
                allowedFormats={[]}
            />
        </div>
    )
}

export default edit;