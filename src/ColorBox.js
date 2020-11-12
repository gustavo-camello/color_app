import React, {Component} from 'react';
import CopyToClipBoard from 'react-copy-to-clipboard';
import {Link} from 'react-router-dom';
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
        return (
            <CopyToClipBoard text={background} onCopy={this.changeCopystate}>
                <div style={{ background: background}} className="ColorBox">
                    <div 
                    style={{ background: background}} 
                    className={`copy-overlay ${copied && 'show'}`} 
                    />
                    <div className={`copy-message ${copied && 'show'}`}>
                        <h1>Copied!</h1>
                        <p>{this.props.background}</p>
                    </div>
                    <div className="copy-container">
                        <div className="box-content">
                            <span>{name}</span>
                        </div>
                        <button className="copy-button">Copy</button>
                    </div>
                    {showLink && (
                        <Link to={`/palette/${paletteId}/${id}`} onClick={e => e.stopPropagation()}>
                            <span className="see-more">More</span>
                        </Link>
                    )}
                </div>
            </CopyToClipBoard>
        )
    }
}

export default ColorBox;