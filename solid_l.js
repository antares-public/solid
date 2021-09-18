// Liskov substitution principle

class Person {}

class Member extends Person {
  access() {
    console.log("You have access");
  }
}

class Guest extends Person {
  isGuest = true;
}

class Frontend extends Member {
  canCreateFrontend() {}
}

class Backend extends Member {
  canCreateBackend() {}
}

class PersonFromDifferendCompany extends Guest {
  access() {
    throw new Error("You don't have access! Go to your place!");
  }
}

function openSecretDoor(member) {
  member.access();
}

openSecretDoor(new Frontend());
openSecretDoor(new Backend());
// openSecretDoor(new PersonFromDifferendCompany());
