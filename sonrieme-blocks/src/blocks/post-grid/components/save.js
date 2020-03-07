import { InnerBlocks } from "@wordpress/block-editor";
import {getBlockDefaultClassName} from "@wordpress/blocks";

const save = ({ attributes }) => {

    const { columns } = attributes
    const className   = getBlockDefaultClassName('sonrieme-blocks/about-card');

    return (
        <div className={`columns--${columns}`}>
            <InnerBlocks.Content/>
        </div>
    )
}

export default save;