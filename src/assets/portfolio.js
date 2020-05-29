import accessCampusImg from './AccessCampus.png';
import packFrenzyImg from './PackFrenzy.PNG';
import yanaImg from './Yana.png';
import rogersImg from './Rogers.jpg';
import clubRowImg from './ClubRowFitness.PNG';

const portfolio = [
    {
        name: "PERSONAL PROJECTS",
        items: [
            {
                name: "ACCESS CAMPUS",
                img: accessCampusImg,
                url: "https://www.access-campus.app/",
                desc: "wheelchair accessible entrances to buildings on university or corporate campuses"
            },
            {
                name: "PACKING FRENZY",
                img: packFrenzyImg,
                url: "https://play.google.com/store/apps/details?id=moc.funapp.packathon",
                desc: "multiplayer android application to play with up to four players"
            },
            {
                name: "YANA",
                img: yanaImg,
                url: "https://devpost.com/software/yana-you-are-not-alone",
                desc: "AI-enabled chatbot companion created in response to the overdose crisis in Canada"
            },
        ]
    },
    {
        name: "TECHNICAL EXPERIENCE",
        items: [
            {
                name: "AGILE DEVELOPER",
                img: rogersImg,
                url: "https://about.rogers.com/news-ideas/making-our-cities-smarter-kelowna-pilots-canadas-first-5g-smart-city-solution/",
                desc: "holistic first responder smart city system created for the City of Kelowna",
                company: "ROGERS"
            },
            {
                name: "APPLICATION DEVELOPER INTERN",
                img: clubRowImg,
                url: "https://www.clubrowfitness.com/beta-app",
                desc: "mobile application to remote participation in rowing classes",
                company: "CLUB ROW FITNESS"
            },

        ]
    }
];

export default portfolio;