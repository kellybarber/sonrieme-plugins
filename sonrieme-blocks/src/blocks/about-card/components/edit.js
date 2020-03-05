import { __ } from '@wordpress/i18n'
import { RichText } from '@wordpress/editor';

const edit = ({ className, attributes, setAttribute }) => {

    const { title, description } = attributes;

    return (
        <div className={className}>
            <RichText
                className={`${className}__title`}
                tagName='h4'
                onChange={() => setAttribute({title})}
                placeholder={__('Member Name', 'sonrieme-blocks')}
                formattingControls={[]}
            />
            <RichText
                className={`${className}__title`}
                tagName='p'
                onChange={() => setAttribute({info})}
                placeholder={__('Member Name', 'sonrieme-blocks')}
                formattingControls={[]}
            />
        </div>
    )
}

export default edit;