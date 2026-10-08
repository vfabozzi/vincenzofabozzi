import { about, capabilities, workExperience, education, workshopsLecturesExhibitions } from '../assets/data/about';

export default function AboutContent() {

    return (
        <div id="About" className="flex flex-col gap-05 px-1">
            <div className='pb-2'>
                {about.map((content) => (
                    <p key={content.description} className='text-base'>
                        {Array.isArray(content.description)
                            ? content.description.map((item, index) => (
                                <span key={index}>
                                    {index > 0 && <br />}
                                    {item}
                                </span>
                            ))
                            : content.description}
                    </p>
                ))}
            </div>
            <div id='aboutLists' className='flex flex-col gap-2'>
                <div className='flex flex-col gap-05'>
                    <div>
                        <p className="text-base">Capabilities</p>
                    </div>
                    <div id="Capabilities" className="flex flex-col gap-0 border-top">
                        {capabilities
                            .map((capability) => (
                                <div key={capability.list} className="pt-05">
                                    <div className="flex flex-col gap-0">
                                        <p className="text-base">
                                            {Array.isArray(capability.list)
                                                ? capability.list.map((item, index) => (
                                                    <span key={index}>
                                                        {index > 0 && <br />}
                                                        {item}
                                                    </span>
                                                ))
                                                : capability.list}
                                        </p>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
                <div className='flex flex-col gap-05'>
                    <div>
                        <p className="text-base">Work Experience</p>
                    </div>
                    <div id="WorksExperience" className="flex flex-col gap-0 border-top">
                        {workExperience
                            .filter((item) => item.published)
                            .map((item) => (
                                <div key={item.order} className="pt-05">
                                    <div className="flex flex-col gap-0">
                                        <p className="text-base">{item.year}</p>
                                        <p className="text-base">{item.title}</p>
                                        <p className="text-base">{item.location}</p>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
                <div className='flex flex-col gap-05'>
                    <div>
                        <p className="text-base">Education</p>
                    </div>
                    <div id="Education" className="flex flex-col gap-0 border-top">
                        {education
                            .filter((item) => item.published)
                            .map((item) => (
                                <div key={item.order} className="pt-05">
                                    <div className="flex flex-col gap-0">
                                        <p className="text-base">{item.year}</p>
                                        <p className="text-base">{item.title}</p>
                                        <p className="text-base">{item.location}</p>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
                <div className='flex flex-col gap-05'>
                    <div>
                        <p className="text-base">Workshop, Lectures, Exhibitions </p>
                    </div>
                    <div id="workshopsLecturesExhibitions" className="flex flex-col gap-0 border-top">
                        {workshopsLecturesExhibitions
                            .filter((item) => item.published)
                            .map((item) => (
                                <div key={item.order} className="pt-05">
                                    <div className="flex flex-col gap-0">
                                        <p className="text-base">{item.year}</p>
                                        <p className="text-base">{item.title}</p>
                                        <p className="text-base">{item.details}</p>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
}