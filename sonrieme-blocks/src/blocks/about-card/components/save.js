import { getBlockDefaultClassName } from '@wordpress/blocks'
import { RichText } from '@wordpress/block-editor'

const save = ({ attributes }) => {

    const { title, description } = attributes;
    const className              = getBlockDefaultClassName('sonrieme-blocks/about-card');

    return (
        <div>
            {title &&
            <RichText.Content
                className={`${className}__title`}
                tagName='h3'
                value={title}
            />}
            {description &&
            <RichText.Content
                className={`${className}__description`}
                tagName='p'
                value={description}
            />}
        </div>
    )
}

export default save;