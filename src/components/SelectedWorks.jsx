import { projects } from '../assets/data/projects';

export default function SelectedWorks() {

    return (
        <div id="SelectedWorks" className="flex flex-col gap-05 px-2">
            <div id="Selector" className="flex flex-row gap-05">
                <div className='hidden'>
                    <p className="text-base uppercase">Overview</p>
                </div>
                <div className='hidden'>
                    <p className="text-base uppercase">/</p>
                </div>
                <div>
                    <p className="text-base uppercase">Index</p>
                </div>
            </div>
            <div id="WorksList" className="flex flex-col gap-0 border-top">
                {projects
                .filter((project) => project.published)
                .map((project) => (
                    <div key={project.order} id='WorksItem' className="btn min-h-6 py-05 border-bottom cursor-pointer">
                        <a href={project.externalURL} rel='noopener noreferrer nofollow'
                        className='grid grid-cols-2 grid-items-start justify-between'>
                            <div id='LeftCol' className="flex flex-row gap-05">
                                <p className="text-base">{project.year}</p>
                                <p className="text-base uppercase">{project.title}</p>
                            </div>
                            <div id='RightCol' className='justify-end flex flex-row gap-05'>
                                <p className="text-base">{project.category}</p>
                                <p className={`text-base alt-arrows ${project.buttonIcon ? '' : 'hidden'}`}>
                                    {project.buttonIcon}
                                </p>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}