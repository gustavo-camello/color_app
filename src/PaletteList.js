import React from 'react';
import MiniPalette from './MiniPalette';
import {withStyles} from '@material-ui/styles';
import {Link} from 'react-router-dom';

const styles = {
    root: {
        backgroundColor: "blue",
        height: "100vh",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center"
    },
    container: {
        width: "50%",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        flexWrap: "wrap",
    },
    nav: {
        display: "flex",
        width: "100%",
        justifyContent: "space-between"
    },
    palettes: {
        boxSizing: "border-box",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "30% 30% 30%",
        gridGap: "5%"
    }
}

class PaletteList extends React.Component {
    render () {
        const { palettes, classes } = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.container}>
                    <div className={classes.nav}>
                        <h1>React Colors</h1>
                    </div>
                    <div className={classes.palettes}>
                    {palettes.map(palette => (
                        <MiniPalette {...palette} />
                    ))}
                    </div>
                </div>
                
                
            </div>
        )
    }
}

export default withStyles(styles) (PaletteList);