import accessCampusImg from './AccessCampus.png';
import packFrenzyImg from './PackFrenzy.PNG';
import yanaImg from './Yana.png';
import firstResponseImg from './FirstResponse.png';

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
                name: "PACK FRENZY",
                img: packFrenzyImg,
                url: "https://play.google.com/store/apps/details?id=moc.funapp.packathon",
                desc: "multiplayer android application to play with up to four players"
            },
            {
                name: "YANA",
                img: yanaImg,
                url: "https://devpost.com/software/yana-you-are-not-alone",
                desc: "ai-enabled chatbot companion created in response to the overdose crisis in Canada"
            },
        ]
    },
    {
        name: "TECHNICAL EXPERIENCE",
        items: [
            {
                name: "FIRST RESPONSE - ROGERS",
                img: firstResponseImg,
                url: "https://github.com/eyskim/First_Response/",
                desc: "holistic first response system created for the city of kelowna"
            },
            {
                name: "BETA APPLICATION - CLUB ROW FITNESS",
                img: "asdfasdf",
                url: "https://play.google.com/store/apps/details?id=moc.funapp.packathon",
                desc: "multiplayer android application to play with up to four players"
            },

        ]
    }
];

export default portfolio;