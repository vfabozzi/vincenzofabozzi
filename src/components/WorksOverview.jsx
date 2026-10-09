import ProjectGallery from './ProjectGallery';

export default function WorksOverview({ projects }) {
    return (
        <div id="WorksList" className="flex flex-col gap-0" >
            {
                projects
                    .map((project) => (

                        <article data-fadein key={project.id} className='flex flex-col gap-05 pb-2 border-bottom'>
                            <ProjectGallery media={project.media} />
                            <div
                                className='grid grid-cols-2 grid-items-start gap-1 md:gap-4'>
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
                                    <p className="text-base">{project.category}</p>
                                    <p className="text-base">{project.year}</p>
                                </div>
                            </div>
                        </article>
                    ))}
        </div>
    );
}

