import { projects } from '../assets/data/projects';

export default function SelectedWorks() {

    return (
        <div id="SelectedWorks" className="flex flex-col gap-05 px-1">
            <div id="Selector" className="flex flex-row gap-05">
                <div className='hidden'>
                    <p className="text-base uppercase">Overview</p>
                </div>
                <div className='hidden'>
                    <p className="text-base uppercase">/</p>
                </div>
                <div>
                    <p className="text-base">Index</p>
                </div>
            </div>
            <div id="WorksList" className="flex flex-col gap-0 border-top">
                {projects
                    .filter((project) => project.published)
                    .map((project) => (
                        <a key={project.order} href={project.externalURL} rel='noopener noreferrer nofollow'
                        >
                            <div
                                id='WorksItem'
                                className={`min-h-6 py-05 border-bottom ${project.externalURL ? 'btn cursor-pointer' : ''}`}
                            >
                                <div
                                    className='grid grid-cols-2 grid-items-start gap-1'>
                                    <div id='LeftCol' className="col-span-1 flex flex-row gap-1">
                                        <div className='pr-36px'>
                                            <p className="text-base">
                                                {Array.isArray(project.title)
                                                    ? project.title.map((title, index) => (
                                                        <span key={index}>
                                                            {index > 0 && <br />}
                                                            {title}
                                                        </span>
                                                    ))
                                                    : project.title}
                                            </p>
                                        </div>
                                    </div>
                                    <div id='RightCol' className='col-span-1 justify-start flex flex-col gap-0'>
                                        <p className="text-base">T. {project.category}</p>
                                        <p className="text-base">Y. {project.year}</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    ))}
            </div>
        </div>
    );
}