import TextLink, { ButtonLinkScrollOnClick } from "@/components/textLink"

import personalWebsiteThumbnail from "../public/images/projects-images/personal-website/personal-website-thumbnail.png"
import educationDataForChangeThumbnail from "../public/images/projects-images/education-data-for-change/education-data-for-change-thumbnail.png"
import triangleballThumbnail from "../public/images/projects-images/triangle-ball/triangle-ball-thumbnail.png"
import serverInsightsThumbnail from "../public/images/projects-images/server-insights/server-insights-thumbnail.png"
import tempesuousTurretsThumbnail from "../public/images/projects-images/tempestuous-turrets/tempestuous-turrets-thumbnail.png"
import binary0101Thumbnail from "../public/images/projects-images/binary-0101/binary-0101-thumbnail.png"

import personWebsiteIcon from "../public/images/projects-images/personal-website/personal-website-icon.png"
import educationDataForChangeIcon from "../public/images/projects-images/education-data-for-change/education-data-for-change-icon.png"
import triangleballIcon from "../public/images/projects-images/triangle-ball/triangle-ball-icon.png"
import serverInsightsIcon from "../public/images/projects-images/server-insights/server-insights-icon.png"
import tempesuousTurretsIcon from "../public/images/projects-images/tempestuous-turrets/tempestuous-turrets-icon.png"
import binary0101Icon from "../public/images/projects-images/binary-0101/binary-0101-icon.png"



export default function projectInfo() {
    return [
        {
            "id": "personal-website",
            "title": "Personal Website",
            "subtitle": "Personal Project",
            "description":
                <p>
                    Glad you’re here! {<ButtonLinkScrollOnClick text="Let me know" scrollTo="contact" />} if anything isn’t working properly.
                </p>,
            "tags": ["REACT", "NEXT.JS", "TAILWIND"],
            "links": {
                "github": "https://github.com/owengretzinger/personal-website",
                "article": "/articles/personal-website"
            },
            "thumbnail": personalWebsiteThumbnail,
            "icon": personWebsiteIcon
        },
        {
            "id": "education-data-for-change",
            "title": "Education Data for Change",
            "subtitle": "Hackathon & Personal Project",
            "description":
                <p>
                    Search for public schools in Ontario to view their EQAO and income data.
                    Originally created for {<TextLink text="DeltaHacks IX" href="https://deltahacks.com" />} (2023), then improved in the following week.
                </p>,
            "tags": ["HTML", "JAVASCRIPT", "SQL"],
            "links": {
                "open": "https://owengretzinger.com/education-data-for-change",
                "article": "/articles/education-data-for-change",
                "github": "https://github.com/owengretzinger/education-data-for-change",
            },
            "thumbnail": educationDataForChangeThumbnail,
            "icon": educationDataForChangeIcon
        },
        {
            "id": "triangle-ball",
            "title": "Triangle Ball",
            "subtitle": "Personal Project",
            "description":
                <p>
                    I learned how to code by creating this game over the span of years.
                    Features highly effective bots that were implemented by applying university level calculus.
                    I also created all the art.
                </p>,
            "tags": ["C#", "Unity"],
            "links": {
                "itch": "https://owengretzinger.itch.io/triangle-ball",
                "article": "/articles/triangle-ball",
                "github": "https://github.com/owengretzinger/triangle-ball",
            },
            "thumbnail": triangleballThumbnail,
            "icon": triangleballIcon
        },
        {
            "id": "server-insights",
            "title": "Server Insights",
            "subtitle": "Hackathon & Personal Project",
            "description":
                <p>
                    Discord bot that won my high school’s hackathon (2021), then was improved in the following weeks.
                    Analyzes messages sent in a discord server and creates graphs.
                </p>,
            "tags": ["PYTHON"],
            "links": {
                "github": "https://github.com/owengretzinger/server-insights",
                "award": "https://devpost.com/software/server-insights",
            },
            "thumbnail": serverInsightsThumbnail,
            "icon": serverInsightsIcon
        },
        {
            "id": "tempestuous-turrets",
            "title": "Tempestuous Turrets",
            "subtitle": "Hackathon Project",
            "description":
                <p>
                    Game created in 32 hours for {<TextLink text="Hack the North" href="https://hackthenorth.com" />} (2022).
                    Clicking the card links to play it in the web,
                    but it runs more smoothly if you {<TextLink text="download it on itch.io" href="https://owengretzinger.itch.io/tempestuous-turrets" />}.
                </p>,
            "tags": ["C#", "UNITY"],
            "links": {
                "open": "http://tempestuousturrets.tech/",
                "github": "https://github.com/owengretzinger/tempestuous-turrets",
                "itch": "https://owengretzinger.itch.io/tempestuous-turrets",
            },
            "thumbnail": tempesuousTurretsThumbnail,
            "icon": tempesuousTurretsIcon
        },
        {
            "id": "binary-0101",
            "title": "Binary 0101",
            "subtitle": "School Project",
            "description":
                <p>
                    Web app that teaches the basics of binary, targeted towards high school students.
                    Created while following the design thinking process for a software design class.
                </p>,
            "tags": ["ELM", "DESIGN THINKING"],
            "links": {
                "open": "https://cs1xd3.online/ShowModulePublish?modulePublishId=0a6330dc-6e05-447c-820f-293aca08929a&fullscreen=true",
                "github": "https://github.com/owengretzinger/binary-0101",
            },
            "thumbnail": binary0101Thumbnail,
            "icon": binary0101Icon
        },
    ]
}


export function linkToTitle(link: string, projectName: string) {
    switch (link) {
        case "open":
            return `Open ${projectName} in a new tab`
        case "article":
            return `Open an article I wrote about ${projectName}`
        case "github":
            return `Open the Github repository for ${projectName} in a new tab`
        case "award":
            return `Open the Devpost page for ${projectName} in a new tab`
        case "itch":
            return `Open the Itch.io page for ${projectName} in a new tab`
        default:
            return `Open ${projectName}`
    }
}