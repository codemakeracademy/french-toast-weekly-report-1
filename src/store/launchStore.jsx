import React from "react";
import image1 from "../img/1.jpg";
import image2 from "../img/2.jpg";
import image3 from "../img/3.jpg";
import image4 from "../img/4.jpg";

export const launchStore = [
    {
        title: "Invite Your Team",
        text: "Click on the below and invite the team members who directly report to you.",
        image: image1,
        button: "Invite Your Team"
    },
    {
        title: "Encourage Your Team to Accept Your Invitation",
        text: "When they receive your invitation, team members will be prompted to complete their profiles. If a team member hasn't created their profile within 24 hours, follow up with them!",
        image: image2
    },
    {
        title: "Remind Your Team",
        text: "Every Friday, we'll automatically send your team members an email reminding them to fill out their Weekly Report. But we also encourage you to consistently request their Weekly Report so they realize the importance of this new habit.",
        image: image3
    },
    {
        title: "Read Their Reports",
        text: <span>Set aside some time on Monday to read all the reports. <b>Then</b> reach out to any team members who need to be acknowledged for a success or supported during a difficult time. (And yes, we'll send you a reminder to read your reports each week too.)</span>,
        image: image4
    }
]

