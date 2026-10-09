export default function WorksIndex({ projects }) {
    return (
        <div className="flex flex-col gap-0">
            {projects.map((project) => {
                const content = (
                    <div className="grid grid-cols-2 grid-items-start gap-1 md:gap-4">
                        <div className="col-span-1 flex flex-row gap-1">
                            <div className="pr-36px">
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
                        <div className="col-span-1 justify-start flex flex-col gap-0">
                            <p className="text-base">T. {project.category}</p>
                            <p className="text-base">Y. {project.year}</p>
                        </div>
                    </div>
                );

                const itemClass = 'min-h-6 py-05 border-bottom';

                return project.externalURL ? (
                    <a
                        key={project.id}
                        href={project.externalURL}
                        rel="noopener noreferrer nofollow"
                        className={`${itemClass} btn cursor-pointer`}
                    >
                        {content}
                    </a>
                ) : (
                    <div key={project.id} className={itemClass}>
                        {content}
                    </div>
                );
            })}
        </div>
    );
}