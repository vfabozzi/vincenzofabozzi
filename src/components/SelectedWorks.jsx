import { useState } from 'react';
import WorksIndex from './WorksIndex';
import WorksOverview from './WorksOverview';
import { useFadeIn } from '../hooks/useFadeIn';

export default function SelectedWorks({ projects }) {
    const [view, setView] = useState('overview');
    const scope = useFadeIn([view]);
     
    return (
        <div ref={scope} id="SelectedWorks" className="flex flex-col px-1">
            <div data-fadein id="Selector" className="bg-white sticky flex flex-row gap-05 p-05 border-bottom">
                <button className={`bg-inherit p-0 works-selector ${view === 'overview' ? 'active' : ''}`} onClick={() => setView('overview')}>
                    <span className="text-base">Overview</span>
                </button>
                <div>
                    <p className="text-base">/</p>
                </div>
                <button className={`bg-inherit p-0 works-selector ${view === 'index' ? 'active' : ''}`} onClick={() => setView('index')}>
                    <span className="text-base">Index</span>
                </button>
            </div>
            {view === 'overview' ? <WorksOverview projects={projects} /> : <WorksIndex projects={projects} />}
        </div>
    );
}