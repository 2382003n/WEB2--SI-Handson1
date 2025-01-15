"use strict";
const myBio = {
    name: "Nuel",
    age: 20,
    email: "unai.edu",
    address: "123 Unai, parongpon",
    hobbies: ["main", "tidur", "nonton"]
};
function displayBio(bio) {
    console.log('Name: ${bio.name}');
    console.log('Age: ${bio.age}');
    console.log('Email: ${bio.email}');
    console.log('Address: ${bio.address}');
    console.log('Hobbies :');
    for (const hobby of bio.hobbies) {
        console.log('- ${hobby}');
    }
}
displayBio(myBio);
//# sourceMappingURL=index.js.map