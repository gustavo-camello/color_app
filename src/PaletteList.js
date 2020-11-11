import React from 'react';
import Palette from './Palette';
import {Link} from 'react-router-dom';

class PaletteList extends React.Component {
    render () {
        const { palettes } = this.props;
        return (
            <div>
                {palettes.map(palette => (
                    <Link to={`/palette/${palette.id}`}><h1>{palette.paletteName}</h1></Link>
                ))}
            </div>
        )
    }
}

export default PaletteList;