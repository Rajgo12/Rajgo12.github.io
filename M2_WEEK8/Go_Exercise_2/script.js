const person = {
  name: "Raj",
  age: 21,
  hobbies: ["Playing", "Coding", "Work out ", "Travel"]
};

const jsonString = JSON.stringify(person);
const jsonObject = JSON.parse(jsonString);

document.getElementById('output').innerHTML = `
  <p><strong>Name:</strong> ${jsonObject.name}</p>
  <p><strong>Age:</strong> ${jsonObject.age}</p>
  <p><strong>Hobbies:</strong> ${jsonObject.hobbies.join(', ')}</p>
`;
