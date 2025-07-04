export default function EduNExp() {
    const timelineData = [
        {
            title: "BSc Computer Science",
            description: "Graduated from XYZ University with a 3.8 GPA",
            active: true,
        },
        {
            title: "Frontend Intern @ ABC Corp",
            description: "Built internal tools with React and Tailwind",
            active: true,
        },
        {
            title: "Junior Developer @ DEF Ltd.",
            description: "Worked on client-side architecture and testing",
            active: true,
        },
        {
            title: "Next Opportunity",
            description: "Looking to grow in full-stack development",
            active: false,
        },
    ];

    return (
        <section className="text-white p-6">
            <h2 className="text-3xl font-bold lg:py-[40px]">
                <span className="text-green-500">Edu</span>cation & Experience
            </h2>
            <ul className="timeline timeline-vertical max-w-[50%]">
                {timelineData.map((item, index) => (
                    <li className="!grid-cols-none ">
                        <hr />
                        <div className="timeline-middle">
                            <div className="border-2 rounded-full p-1">2018-2020
                            </div>                        
                            </div>
                        <div className="timeline-end mb-10">
                            <time className="font-start italic">1998</time>
                            <div className="text-lg font-black">iMac</div>
                            iMac is a family of all-in-one Mac desktop computers designed and built by Apple Inc. It has
                            been the primary part of Apple's consumer desktop offerings since its debut in August 1998,
                            and has evolved through seven distinct forms
                        </div>
                        <hr />
                    </li>
                ))}
            </ul>
        </section>
    );
}
  