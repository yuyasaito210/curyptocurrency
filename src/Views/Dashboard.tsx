import * as React from 'react';
import '../css/dashboard.css';
import { Mosaic, MosaicWindow } from 'react-mosaic-component';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import '../../node_modules/react-mosaic-component/react-mosaic-component.css'
import ChartComponent from '../Components/ChartComponent'
import { Nav } from 'react-bootstrap'
 
export type ViewId = 'a' | 'b' | 'c' | 'new';

interface Props {}

interface State {
  chartSwitch: boolean;
};


class Dashboard extends React.Component<Props, State> {
    state = {
        chartSwitch : false,
    }

    handleChartCandle = () => {
        this.setState({
            chartSwitch : false
        })
    }
    handleChartDepth = () => {
        this.setState({
            chartSwitch : true
        })
    }

    ELEMENT_MAP: { [viewId: string]: JSX.Element } = {
        a: <div>
            <Nav variant="tabs" defaultActiveKey="link-1">
                <div className="nav-div-1">
                <Nav.Item>
                    <Nav.Link eventKey="link-1"  onClick={this.handleChartCandle}>Candle Chart</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2"  onClick={this.handleChartDepth}>Depth Chart</Nav.Link>
                </Nav.Item>
                </div>
                <div className="nav-div-2">
                <Nav.Item>
                    <img src={require('../assets/images/capital-t.png')} alt="icon" />
                </Nav.Item>
                <Nav.Item>
                    <img src={require('../assets/images/cursor.png')} alt="icon" />
                </Nav.Item>
                <Nav.Item>
                    <img src={require('../assets/images/pitchfork.png')} alt="icon"/>
                </Nav.Item>
                <Nav.Item>
                    <img src={require('../assets/images/settings.png')} alt="icon"/>
                </Nav.Item>
                <Nav.Item>
                    <img src={require('../assets/images/photo-camera.png')} alt="icon"/>
                </Nav.Item>
                <Nav.Item>
                    <img src={require('../assets/images/full-size.png')} alt="icon" />
                </Nav.Item>
                </div>
            </Nav>
            <ChartComponent /> 
          </div>,
        b: <div>Top Right Window</div>,
        c: <div>Bottom Right Window</div>,
    };

    ELEMENT_MAP_DEPTH: { [viewId: string]: JSX.Element } = {
        a: <div>
        <Nav variant="tabs" defaultActiveKey="link-1">
            <div className="nav-div-1">
            <Nav.Item>
                <Nav.Link eventKey="link-1"  onClick={this.handleChartCandle}>Candle Chart</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-2"  onClick={this.handleChartDepth}>Depth Chart</Nav.Link>
            </Nav.Item>
            </div>
            <div className="nav-div-2">
            <Nav.Item>
                <img src={require('../assets/images/capital-t.png')} alt="icon" />
            </Nav.Item>
            <Nav.Item>
                <img src={require('../assets/images/cursor.png')} alt="icon" />
            </Nav.Item>
            <Nav.Item>
                <img src={require('../assets/images/pitchfork.png')} alt="icon"/>
            </Nav.Item>
            <Nav.Item>
                <img src={require('../assets/images/settings.png')} alt="icon"/>
            </Nav.Item>
            <Nav.Item>
                <img src={require('../assets/images/photo-camera.png')} alt="icon"/>
            </Nav.Item>
            <Nav.Item>
                <img src={require('../assets/images/full-size.png')} alt="icon" />
            </Nav.Item>
            </div>
        </Nav>
        <ChartComponent /> 
      </div>,
        b: <div>Top Right Window</div>,
        c: <div>Bottom Right Window</div>,
    };
    render() {
        return (
            <div id="app">
            {this.state.chartSwitch === false ? <Mosaic<string> className="mosaic-blueprint-theme mosaic mosaic-drop-target bp3-dark"
                    renderTile={(id, path) => (
                        <MosaicWindow path={path} createNode={() => 'new'} title="">
                            {this.ELEMENT_MAP[id]}
                        </MosaicWindow>
    
                    )}
                    initialValue={{
                        direction: 'row',
                        first: 'a',
                        second: {
                            direction: 'column',
                            first: 'b',
                            second: 'c',
                        },
                        splitPercentage: 80,
                    }}
                /> : <Mosaic<string> className="mosaic-blueprint-theme mosaic mosaic-drop-target bp3-dark"
                renderTile={(id, path) => (
                    <MosaicWindow path={path} createNode={() => 'new'} title="">
                        {this.ELEMENT_MAP_DEPTH[id]}
                    </MosaicWindow>
                )}
                initialValue={{
                    direction: 'row',
                    first: 'a',
                    second: {
                        direction: 'column',
                        first: 'b',
                        second: 'c',
                    },
                    splitPercentage: 80,
                }}
            />}
                
            </div>
        );
    }
}

export default Dashboard;
