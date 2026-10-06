import { workExperience, education, workshopsLecturesExhibitions } from '../assets/data/about';

export default function AboutContent() {

    return (
        <div id="About" className="flex flex-col gap-05 px-1">
            <div className='pb-2'>
                <p className='text-base'>Vincenzo Fabozzi is a graphic designer based in Urbino, Italy. Trained in visual arts at the Academy of Fine Arts of Urbino, he works across editorial design, motion, visual identities and web design, developing projects for both print and digital media. He currently collaborates with Linea Libellula, a communication and visual arts studio.</p>
            </div>
            <div id='aboutLists' className='flex flex-col gap-2'>
                <div className='flex flex-col gap-05'>
                    <div>
                        <p className="text-base uppercase">Work Experience</p>
                    </div>
                    <div id="WorksExperience" className="flex flex-col gap-0 border-top">
                        {workExperience
                            .filter((item) => item.published)
                            .map((item) => (
                                <div key={item.order} className="pt-05">
                                    <div className="flex flex-col gap-0">
                                        <p className="text-base">{item.year}</p>
                                        <p className="text-base uppercase">{item.title}</p>
                                        <p className="text-base">{item.location}</p>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
                <div className='flex flex-col gap-05'>
                    <div>
                        <p className="text-base uppercase">Education</p>
                    </div>
                    <div id="Education" className="flex flex-col gap-0 border-top">
                        {education
                            .filter((item) => item.published)
                            .map((item) => (
                                <div key={item.order} className="pt-05">
                                    <div className="flex flex-col gap-0">
                                        <p className="text-base">{item.year}</p>
                                        <p className="text-base uppercase">{item.title}</p>
                                        <p className="text-base">{item.location}</p>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
                <div className='flex flex-col gap-05'>
                    <div>
                        <p className="text-base uppercase">WORKSHOP, LECTURES, EXHIBITIONS </p>
                    </div>
                    <div id="workshopsLecturesExhibitions" className="flex flex-col gap-0 border-top">
                        {workshopsLecturesExhibitions
                            .filter((item) => item.published)
                            .map((item) => (
                                <div key={item.order} className="pt-05">
                                    <div className="flex flex-col gap-0">
                                        <p className="text-base">{item.year}</p>
                                        <p className="text-base uppercase">{item.title}</p>
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