import { about, capabilities, workExperience, education, workshopsLecturesExhibitions } from '../assets/data/about';
import { useFadeIn } from '../hooks/useFadeIn';

export default function AboutContent() {
    const scope = useFadeIn();
    return (
        <div ref={scope} className='grid grid-cols-1 md:grid-cols-8 gap-0-4'>
            <div className='hidden md:block col-span-1'></div>
            <div id="About" className="col-span-8 md:col-span-7 grid grid-cols-7 gap-05 px-1 pb-10">
                <div data-fadein className='col-span-7 md:col-span-2 pb-2'>
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
                <div className='hidden md:block col-span-3'></div>
                <div data-fadein id='aboutLists' className='col-span-7 md:col-span-2 flex flex-col gap-2'>
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
        </div>
    );
}