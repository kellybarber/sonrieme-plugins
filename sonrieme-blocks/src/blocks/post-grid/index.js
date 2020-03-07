import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n'

import edit from './components/edit'
import save from './components/save'

import './styles/editor.scss'

const attributes = {
    columns : {
        type    : 'number',
        default : 2
    }
}

registerBlockType("sonrieme-blocks/post-grid", {
    title       : __("Post Grid", "sonrieme-blocks"),
    description : __("Post Grid", "sonrieme-blocks"),
    category    : "common",
    icon        : "screenoptions",
    attributes,
    edit,
    save
});