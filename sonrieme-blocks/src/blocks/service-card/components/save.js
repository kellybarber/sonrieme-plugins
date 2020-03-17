import { getBlockDefaultClassName } from '@wordpress/blocks'
import { RichText } from '@wordpress/block-editor'

const save = ({ attributes }) => {

    const { title, id, url } = attributes;
    const className = getBlockDefaultClassName('sonrieme-blocks/service-card');

    const setBackgroundImage = () => {
        if (url) {
            return { 'background-image' : `url(${url})` }
        }
    }

    return (
        <div style={setBackgroundImage()}>
            {title &&
            <RichText.Content
                className={`${className}__title`}
                tagName='h3'
                value={title}
            />}
        </div>
    )
}

export default save;