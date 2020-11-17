import React, {Component} from 'react';
import CopyToClipBoard from 'react-copy-to-clipboard';
import {Link} from 'react-router-dom';
import chroma from 'chroma-js';
import './ColorBox.css';

class ColorBox extends Component {
    constructor (props) {
        super(props);
        this.state = {
            copied: false
        }
        this.changeCopystate = this.changeCopystate.bind(this);
    }

    changeCopystate () {
        this.setState({copied: true}, () => {
            setTimeout(() => {
                this.setState({copied: false})
            }, 1500);
        })
    }

    render () {
        const {name, background, id, paletteId, showLink} = this.props;
        const {copied} = this.state;
        const isDarkColor = chroma(background).luminance() <= 0.08;
        const isLightColor = chroma(background).luminance() >= 0.07;

        return (
            <CopyToClipBoard text={background} onCopy={this.changeCopystate}>
                <div style={{ background: background}} className="ColorBox">
                    <div 
                    style={{ background: background}} 
                    className={`copy-overlay ${copied && 'show'}`} 
                    />
                    <div className={`copy-message ${copied && 'show'}`}>
                        <h1>Copied!</h1>
                        <p className={isLightColor && "dark-text"}>{this.props.background}</p>
                    </div>
                    <div className="copy-container">
                        <div className="box-content">
                            <span className={isDarkColor && "light-text"}>{name}</span>
                        </div>
                        <button className={`copy-button ${isLightColor && "dark-text"}`}>Copy</button>
                    </div>
                    {showLink && (
                        <Link to={`/palette/${paletteId}/${id}`} onClick={e => e.stopPropagation()}>
                            <span className={`see-more ${isLightColor && "dark-text"}`}>MORE</span>
                        </Link>
                    )}
                </div>
            </CopyToClipBoard>
        )
    }
}

export default ColorBox;