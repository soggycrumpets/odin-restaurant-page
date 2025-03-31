import { buildElement } from "./util";

export function buildAboutPage(parentElement) {
    parentElement.appendChild(buildElement("h1", "The Carrot Crew"));

    let name;
    let occupation;
    let phone;
    let email;

    name = "Clarissa Carrot";
    occupation = "Head Chef"
    phone = "000-000-0000";
    email = "ClarissaCarrot@fakemail.lie";
    parentElement.appendChild(buildStaffMember(name, occupation, phone, email));

    name = "Bobby Souffle";
    occupation = "Sous Chef";
    phone = "000-000-0001"
    email = "BobbySouffle@fakemail.lie";
    parentElement.appendChild(buildStaffMember(name, occupation, phone, email));

    name = "Artur Soufflayers";
    occupation = "Website Maintainer";
    phone = "000-000-0002"
    email = "ArturSoufflayers@fakemail.lie";
    parentElement.appendChild(buildStaffMember(name, occupation, phone, email));
}


function buildStaffMember(name, occupation, phone, email) {
    const staffMember = buildElement("div");

    staffMember.appendChild(buildElement("h2", name));
    staffMember.appendChild(buildElement("p", occupation));
    staffMember.appendChild(buildElement("p", phone));
    staffMember.appendChild(buildElement("p", email));

    return staffMember;
}