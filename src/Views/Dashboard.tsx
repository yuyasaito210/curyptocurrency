import React from 'react';
import '../css/dashboard.css';
import { Mosaic, MosaicWindow } from 'react-mosaic-component';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import '../../node_modules/react-mosaic-component/react-mosaic-component.css'
import ChartComponent from '../Components/ChartComponent'

export type ViewId = 'a' | 'b' | 'c' | 'new';

const ELEMENT_MAP: { [viewId: string]: JSX.Element } = {
    a: <ChartComponent />,
    b: <div>Top Right Window</div>,
    c: <div>Bottom Right Window</div>,
};

const Dashboard: React.FC = () => {
    return (

        <div id="app">
            <Mosaic<string> className="mosaic-blueprint-theme mosaic mosaic-drop-target bp3-dark"
                renderTile={(id, path) => (
                    <MosaicWindow path={path} createNode={() => 'new'} title="1">
                        {ELEMENT_MAP[id]}
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
                }}
            />
        </div>
    );
}

export default Dashboard;
