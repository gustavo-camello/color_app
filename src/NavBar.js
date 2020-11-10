import React, {Component} from 'react';
import Slider from 'rc-slider';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import 'rc-slider/assets/index.css';
import './NavBar.css';


class NavBar extends Component {
    constructor (props) {
        super (props);
        this.state = {
            format: 'hex'
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({format: e.target.value});
        this.props.handleChange(e.target.value);
    }

    render () {
        const {level, changeLevel, handleChange} = this.props;
        const {format} = this.state;
        return (
            <header className="NavBar">
                <div className="logo">
                    <a href="#">reactcolorpicker</a>
                </div>
                <div className='slider-container'>
                    <span>Level: {level}</span>
                    <div className="slider">
                        <Slider 
                            defaultValue={level} 
                            min={100} 
                            max={900}
                            step={100}
                            onAfterChange={changeLevel} 
                        /> 
                    </div>
                </div>
                <div className="select-container">
                    <Select value={format} onChange={this.handleChange}>
                        <MenuItem value="hex">Hex - #ffffff</MenuItem>
                        <MenuItem value="rgb">RGB - (255,255,255)</MenuItem>
                        <MenuItem value="rgba">RGBA - (255,255,255,1.0)</MenuItem>
                    </Select>
                </div>
            </header>
        )
    }
}

export default NavBar;